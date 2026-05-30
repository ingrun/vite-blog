---
title: Spring 过滤器和拦截器
date: 2026-05-30
---

<p class="note-date">2026-05-30</p>

## 架构定位

请求处理链路：`Client → Filter → DispatcherServlet → Interceptor → Controller`

- **Filter**：Servlet 容器级别，位于 DispatcherServlet 之前
- **Interceptor**：Spring MVC 框架级别，位于 DispatcherServlet 之后、Controller 之前

---

## Filter（过滤器）

### 所属层次
`javax.servlet.Filter` / `jakarta.servlet.Filter`，Servlet 规范的一部分，与 Spring 框架无关。

### 核心接口
```java
public interface Filter {
    void init(FilterConfig filterConfig);
    void doFilter(ServletRequest request, ServletResponse response, FilterChain chain);
    void destroy();
}
```

### 关键特性
- 基于 `url-pattern` 匹配（如 `/*`）
- 可以修改请求/响应对象（如通过 `HttpServletRequestWrapper` 包装）
- 对静态资源、JSP、Servlet 同样生效
- **无法获取 Spring 的 Controller、HandlerMethod、注解信息**

### 典型用途
- 字符编码处理（CharacterEncodingFilter）
- 跨域处理（CorsFilter）
- 请求日志（原始 URL、参数）
- 安全认证（Shiro/Spring Security 的 DelegatingFilterProxy）
- 请求/响应压缩

### Spring Boot 注册方式
```java
@Configuration
public class FilterConfig {
    @Bean
    public FilterRegistrationBean<MyFilter> myFilter() {
        FilterRegistrationBean<MyFilter> bean = new FilterRegistrationBean<>();
        bean.setFilter(new MyFilter());
        bean.addUrlPatterns("/api/*");
        bean.setOrder(1);
        return bean;
    }
}
```

---

## Interceptor（拦截器）

### 所属层次
Spring MVC 框架内部组件，由 DispatcherServlet 调度。

### 核心接口
```java
public interface HandlerInterceptor {
    // 请求到达 Handler 前执行，true 放行，false 拦截
    default boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) {
        return true;
    }
    // Handler 执行后、视图渲染前执行
    default void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) {}
    // 请求完成后执行（无论成功或异常）
    default void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) {}
}
```

### 关键特性
- **可获取 HandlerMethod**：拿到执行的 Controller、Method、注解信息
- **细粒度路径匹配**：支持 Ant 风格路径（`/**`、`/admin/*`）
- 多个 Interceptor 按 order 顺序链式执行
- 可访问 ModelAndView
- **只拦截进入 DispatcherServlet 的请求**，默认不处理静态资源

### 典型用途
- 权限校验（读取自定义注解）
- 登录态验证
- 请求参数预处理
- 接口耗时监控
- 统一设置通用响应头

### 配置方式
```java
@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(new LoginInterceptor())
                .addPathPatterns("/api/**")
                .excludePathPatterns("/api/login", "/api/register")
                .order(1);
    }
}
```

---

## 完整对比

| 维度 | Filter | Interceptor |
|------|--------|-------------|
| 标准 | Servlet 规范，web 容器级别 | Spring MVC 框架级别 |
| 配置方式 | web.xml / @WebFilter / FilterRegistrationBean | WebMvcConfigurer.addInterceptors() |
| 匹配规则 | url-pattern（/*） | path-pattern（/**） |
| 拦截范围 | 所有进入 Servlet 容器的请求（含静态资源） | 只拦截进入 Controller 的请求 |
| 上下文信息 | 只有 ServletRequest / ServletResponse | 可访问 HandlerMethod、ModelAndView |
| 依赖注入 | 需要额外配置才能注入 Spring Bean | 天然是 Spring Bean，可自动注入 |
| 过滤阶段 | 每个请求一次 | preHandle / postHandle / afterCompletion 三阶段 |
| 异常处理 | 不感知 Handler 异常 | afterCompletion 可获取异常对象 |
| IoC 容器 | 不属于 Spring，需通过 DelegatingFilterProxy 桥接 | 直接运行在 Spring IoC 中 |

---

## 执行顺序

```
请求到达
  │
  ├─ Filter#doFilter (chain.doFilter 前)
  │     │
  │     ├─ Interceptor#preHandle
  │     │     │
  │     │     ├─ Controller 方法执行
  │     │     │
  │     │     └─ Interceptor#postHandle (视图渲染前)
  │     │
  └─────── Interceptor#afterCompletion (视图渲染后)

  chain.doFilter 后 → Filter 继续执行
  │
  ← 响应返回
```

Filter 包裹了整个请求链路，Interceptor 在 Filter 内部串行执行。

---

## 实战选型指南

| 场景 | 推荐选项 | 原因 |
|------|----------|------|
| 字符编码、CORS、压缩 | Filter | 在进入 Spring 前统一处理 |
| 静态资源拦截 | Filter | Interceptor 默认不拦截静态资源 |
| 登录校验、权限控制 | Interceptor | 可获取 HandlerMethod 做注解级控制 |
| 计算接口总耗时 | Interceptor | preHandle 记时间，afterCompletion 计算差值 |
| 过滤敏感字（修改请求体） | Filter | 使用 HttpServletRequestWrapper 包装 |
| 获取 Controller 上自定义注解 | Interceptor | handler instanceof HandlerMethod |
| 统一日志审计 | Interceptor | afterCompletion 能捕获异常信息 |

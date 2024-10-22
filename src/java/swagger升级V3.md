

## maven

```xml

        <dependency>
            <groupId>com.github.xiaoymin</groupId>
            <artifactId>knife4j-openapi3-spring-boot-starter</artifactId>
            <version>4.5.0</version>
        </dependency>
```



## 配置文件

```yaml
springdoc:
  swagger-ui:
    path: /swagger-ui.html
    tags-sorter: alpha
    operations-sorter: alpha
  api-docs:
    path: /v3/api-docs
  group-configs:
    - group: 'default'
      paths-to-match: '/**'
      packages-to-scan: com.fxszgs.zhfxlog.controller
# knife4j的增强配置，不需要增强可以不配
knife4j:
  enable: true
  setting:
    language: zh_cn
```





## 注解对应关系

![1726730090796](https://lingxiresource.oss-cn-shanghai.aliyuncs.com/share/1726730090796.png)
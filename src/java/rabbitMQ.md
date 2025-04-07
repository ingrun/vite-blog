## docker 添加用户

```shell
docker ps -a

docker exec -it 815d9 /bin/bash

# 添加用户
rabbitmqctl add_user root 123456

# 授权
rabbitmqctl set_permissions -p / root ".*" ".*" ".*"
rabbitmqctl set_user_tags root administrator

rabbitmqctl list_users
```




## Hello World

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-amqp</artifactId>
</dependency>
```



```yaml
spring:
    rabbitmq:
        host: 127.0.0.1
        port: 5672
        username: guest
        password: guest
```





### 生产者

```java
public class RabbitUtil {

    private static RabbitTemplate rabbitTemplate;

    static {
        RabbitUtil.rabbitTemplate = SpringContextKit.getBean(RabbitTemplate.class);
    }

    public static String sendMsg(String msg) {
        Map<String, Object> map = new HashMap<>();
        map.put("msgId", IdUtil.simpleUUID().toUpperCase());
		map.put("sendTime", DateUtil.now());
        map.put("msg", msg);
        rabbitTemplate.convertAndSend(DirectRabbitConfig.RABBITMQ_DEMO_DIRECT_EXCHANGE, DirectRabbitConfig.RABBITMQ_DEMO_DIRECT_ROUTING, map);
        return "ok";
    }

}
```



```java
@Configuration
public class DirectRabbitConfig {

    public static final String RABBITMQ_DEMO_TOPIC = "RABBITMQ_DEMO_TOPIC";   // 队列名称
    public static final String RABBITMQ_DEMO_DIRECT_EXCHANGE = "RABBITMQ_DEMO_DIRECT_EXCHANGE";  // 交换机名称
    public static final String RABBITMQ_DEMO_DIRECT_ROUTING = "RABBITMQ_DEMO_DIRECT_ROUTING"; // 路由键

    @Bean
    public Queue rabbitmqDemoDirectQueue() {
        /*
          1、name:    队列名称
          2、durable: 是否持久化
          3、exclusive: 是否独享、排外的。如果设置为true，定义为排他队列。则只有创建者可以使用此队列。也就是private私有的。
          4、autoDelete: 是否自动删除。也就是临时队列。当最后一个消费者断开连接后，会自动删除。
          */
        return new Queue(RABBITMQ_DEMO_TOPIC, true, false, false);
    }

    @Bean
    public DirectExchange rabbitmqDemoDirectExchange() {
        //Direct交换机
        return new DirectExchange(RABBITMQ_DEMO_DIRECT_EXCHANGE, true, false);
    }

    @Bean
    public Binding bindDirect() {
        //链式写法，绑定交换机和队列，并设置匹配键
        return BindingBuilder
                //绑定队列
                .bind(rabbitmqDemoDirectQueue())
                //到交换机
                .to(rabbitmqDemoDirectExchange())
                //并设置匹配键
                .with(RABBITMQ_DEMO_DIRECT_ROUTING);
    }

}
```



### 消费者

```java
@Component
@RabbitListener(queuesToDeclare = @Queue(DirectRabbitConfig.RABBITMQ_DEMO_TOPIC))
public class DemoService {

    @RabbitHandler
    private void process(Map<String, Object> message) {
        System.out.println("DemoService 消费消息：" + message);
    }

}
```







## 延期队列

###  **利用RabbitMQ插件实现延迟队列** 

安装一个插件即可：https://www.rabbitmq.com/community-plugins.html ，下载rabbitmq_delayed_message_exchange插件，然后解压放置到RabbitMQ的插件目录及：plugins文件下。

接下来，进入RabbitMQ的安装目录下的sbin目录，执行下面命令让该插件生效，然后重启RabbitMQ。

```shell
rabbitmq-plugins enable rabbitmq_delayed_message_exchange
```



```java
@Configuration
public class DelayedRabbitMQConfig {
    public static final String DELAYED_QUEUE_NAME = "delay.queue.demo.delay.queue";
    public static final String DELAYED_EXCHANGE_NAME = "delay.queue.demo.delay.exchange";
    public static final String DELAYED_ROUTING_KEY = "delay.queue.demo.delay.routingkey";

    @Bean
    public Queue immediateQueue() {
        return new Queue(DELAYED_QUEUE_NAME);
    }

    @Bean
    public CustomExchange customExchange() {
        Map<String, Object> args = new HashMap<>();
        args.put("x-delayed-type", "direct");
        return new CustomExchange(DELAYED_EXCHANGE_NAME, "x-delayed-message", true, false, args);
    }

    @Bean
    public Binding bindingNotify(@Qualifier("immediateQueue") Queue queue,
                                 @Qualifier("customExchange") CustomExchange customExchange) {
        return BindingBuilder.bind(queue).to(customExchange).with(DELAYED_ROUTING_KEY).noargs();
    }
}
```

### 生产者

```java


public void sendDelayMsg(String msg, Integer delayTime) {
    rabbitTemplate.convertAndSend(DELAYED_EXCHANGE_NAME, DELAYED_ROUTING_KEY, msg, a ->{
        a.getMessageProperties().setDelay(delayTime);
        return a;
    });
}

```

### 消费者

<code>queues()</code> 属性用于监听已经存在的队列，而 <code>queuesToDeclare()</code> 属性则可以同时声明并监听一个队列。



```java
// queuesToDeclare 

    
@RabbitListener(queuesToDeclare = DELAYED_QUEUE_NAME)
public void receiveD(Message message, Channel channel) throws IOException {
    String msg = new String(message.getBody());
    log.info("当前时间：{},延时队列收到消息：{}", new Date().toString(), msg);
    channel.basicAck(message.getMessageProperties().getDeliveryTag(), false);
}
```






# 为什么使用消息队列

1. **解耦**。假设有系统B、C、D都需要系统A的数据，于是系统A调用三个方法发送数据到B、C、D。这时，系统D不需要了，那就需要在系统A把相关的代码删掉。假设这时有个新的系统E需要数据，这时系统A又要增加调用系统E的代码。为了降低这种强耦合，就可以使用MQ，**系统A只需要把数据发送到MQ，其他系统如果需要数据，则从MQ中获取即可**。
2. **异步**。一个客户端请求发送进来，系统A会调用系统B、C、D三个系统，同步请求的话，响应时间就是系统A、B、C、D的总和，也就是800ms。**如果使用MQ，系统A发送数据到MQ，然后就可以返回响应给客户端，不需要再等待系统B、C、D的响应，可以大大地提高性能**。对于一些非必要的业务，比如发送短信，发送邮件等等，就可以采用MQ。
3. **削峰**。这其实是MQ一个很重要的应用。假设系统A在某一段时间请求数暴增，有5000个请求发送过来，系统A这时就会发送5000条SQL进入MySQL进行执行，MySQL对于如此庞大的请求当然处理不过来，MySQL就会崩溃，导致系统瘫痪。**如果使用MQ，系统A不再是直接发送SQL到数据库，而是把数据发送到MQ，MQ短时间积压数据是可以接受的，然后由消费者每次拉取2000条进行处理，防止在请求峰值时期大量的请求直接发送到MySQL导致系统崩溃**。







# RabbitMQ中的组成部分

- Broker：消息队列服务进程。此进程包括两个部分：Exchange和Queue。
- Exchange：消息队列交换机。**按一定的规则将消息路由转发到某个队列**。
- Queue：消息队列，存储消息的队列。
- Producer：消息生产者。生产方客户端将消息同交换机路由发送到队列中。
- Consumer：消息消费者。消费队列中存储的消息。



- channels：通道，建立连接后，会形成通道，消息的投递获取依赖通道。



# Exchange的四种类型以及用法

1. Direct Exchange
   
1. 见文知意，直连交换机意思是此交换机需要绑定一个队列，要求**该消息与一个特定的路由键完全匹配**。简单点说就是一对一的，点对点的发送。
   
2. Fanout exchange

   1. 这种类型的交换机需要将队列绑定到交换机上。**一个发送到交换机的消息都会被转发到与该交换机绑定的所有队列上**。很像子网广播，每台子网内的主机都获得了一份复制的消息。简单点说就是发布订阅。

3. Topic Exchange

   1. 直接翻译的话叫做主题交换机，如果从用法上面翻译可能叫通配符交换机会更加贴切。这种交换机是使用通配符去匹配，路由到对应的队列。通配符有两种："*" 、 "#"。需要注意的是通配符前面必须要加上"."符号。

   2. `*` 符号：有且只匹配一个词。比如 `a.*`可以匹配到"a.b"、"a.c"，但是匹配不了"a.b.c"。

      `#` 符号：匹配一个或多个词。比如"rabbit.#"既可以匹配到"rabbit.a.b"、"rabbit.a"，也可以匹配到"rabbit.a.b.c"。



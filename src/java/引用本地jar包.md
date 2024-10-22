# 引用本地JAR包

- 在resources下新增sdk文件夹

- 拖入本地JAR包

- 配置maven使用

  ```xml
  
  		<dependency>
              <groupId>com.icloudlock</groupId>
              <artifactId>icloudlock-encrypt</artifactId>
              <version>1.0.0</version>
              <scope>system</scope>
              <systemPath>${project.basedir}/src/main/resources/sdk/encrypt-V1.0.jar</systemPath>
          </dependency>
  ```

  

- 配置打包至项目内

  ```xml
      <build>
          <resources>
              <resource>
                  <!--把第三方jar包打进程序中-->
                  <directory>src/main/resources/sdk/</directory>
                  <targetPath>/BOOT-INF/lib/</targetPath>
                  <includes>
                      <include>**/*.jar</include>
                  </includes>
                  <filtering>false</filtering>
              </resource>
          </resources>
          <plugins>
              <plugin>
                  <groupId>org.springframework.boot</groupId>
                  <artifactId>spring-boot-maven-plugin</artifactId>
              </plugin>
          </plugins>
      </build>
  ```

  


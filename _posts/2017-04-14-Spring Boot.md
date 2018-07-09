---
layout: default
title: Spring Boot

---

# Spring Boot

Spring Boot makes it easy to create stand-alone, production-grade Spring-based Applications that you can run.

The `spring-boot-starter-parent` is a special starter that provides useful Maven defaults.

```shell
mvn dependency:tree
mvn spring-boot:run
```

```java
@RestController
@RequestMapping
@EnableAutoConfiguration

@SpringBootApplication = @EnableAutoConfiguration + @ComponentScan
```

devtools

```xml
<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-devtools</artifactId>
        <optional>true</optional>
    </dependency>
</dependencies>
```

disable cache

Restart vs Reload

base classloader    restart classloader

log

spring.devtools.restart.log-condition-evaluation-delta=false

exculde

`spring.devtools.restart.exclude=static/**,public/**`

spring.devtools.restart.enabled

Trigger File

spring.devtools.restart.trigger-file

LiveReload: can trigger a browser refresh when a resource is changed

SpringApplication.run

SpringApplicationBuilder 

Application Events

1. ApplicationStartingEvent 
2. ApplicationEnvironmentPreparedEvent
3. ApplicationPreparedEvent 
4. ApplicationStartedEvent 
5. ApplicationReadyEvent 
6. ApplicationFailedEvent

ApplicationRunner CommandLineRunner

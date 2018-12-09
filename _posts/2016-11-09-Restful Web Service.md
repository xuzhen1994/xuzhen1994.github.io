---
title: REST web service
layout: default
category: 技术
---

# Restful Web Service

> 最近在看JIRA的API，涉及到了rest的概念，先简单总结一波，标题暂定为restful web service，后期肯定要改，再说了，这次先打个草稿。

## 0. JSON

讲起rest肯定涉及到json，所以先来讲讲什么是json。

JSON全称：JavaScript Object Notation （JavaScript对象表示法）

对象表示法，表示一些文本信息的语法，用这种语法形成的信息能做什么？ 肯定是用来存储和交换的。

因此JSON其实类似于XML。

### 网络上的一些JSON接口

- 京东获取单个商品价格

    http://p.3.cn/prices/mgets?skuIds=J_商品ID&type=1  示例：[http://p.3.cn/prices/mgets?skuIds=J_3133811&type=1](http://p.3.cn/prices/mgets?skuIds=J_3133811&type=1 "iphone7价格")

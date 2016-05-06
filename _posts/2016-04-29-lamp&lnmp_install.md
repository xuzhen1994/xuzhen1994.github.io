---
title: LAMP或LNMP安装指南
layout: default
categories: Linux
tags: 
-lnmp
-lamp
---

###介绍###

LAMP = Linux + Apache + MySQL + PHP

LNMP = Linux + Nginx + MySQL + PHP

----------
###安装###

方法一：采用一键安装包的方式安装LAMP和LNMP。

   参考网址：http://lnmp.org/install.html（包含LAMP和LNMP） 
https://teddysun.com/lamp

方法二：自己编译安装，需要依次安装pcre、openssl、zlib、nginx、MySQL、PHP、phpMyAdmin。

1. 分别到官网下载安装包，解压到本地目录；
2. 进入解压缩目录，执行./configure，（openssl执行./config）
3. make & make install

安装Nginx时如果找不到依赖的模板，需要使用--with-openssl=<openssl_dir>、--with-pcre=<pcre_dir>、--with-zlib=<zlib_dir>手动指定依赖的模块目录

----------
###问题与解决###

1. 编译nginx时，报错：“找不到pcre.h”。原因：pcre版本过高，高版本的pcre使用pcre2.h作为头文件。解决方法：下载低版本的pcre安装包
2. 升级内核版本后，用yum指令安装软件报错。解决方法：重新配置yum源，可以使用163、sohu的yum源。到/etc/yum.repos.d目录下备份原yum源，然后wget http://XXXX.repo，最后yum makecache。
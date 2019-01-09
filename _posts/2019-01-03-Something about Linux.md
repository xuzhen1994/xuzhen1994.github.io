---
layout: default
title: Linux相关的要点
category: 技术
tag: Ops
---

### 查看Linux版本

`lsb_release -a`  LSB（Linux 标准库Linux Standard Base）

`cat /etc/*-release`

`cat /etc/issue` `cat /etc/issue.net`   Linux终端登录的欢迎语句存储文件

`cat /proc/version` 文件记录了 Linux 内核的版本、用于编译内核的 gcc 的版本、内核编译的时间，以及内核编译者的用户名。

### shell脚本

`nohup` 不挂断地运行命令，通常与`&` 一起使用

`> out.log 2>&1` 命令常规输出到out.log文件，错误输出与常规输出保持一致。 `> out.log 2> err.log` 命令常规输出到out.log文件，错误输出到err.log文件。

shell特殊变量：

`$n` ：获取当前执行的shell脚本的第N个参数，n=1..9，当n为0时表示脚本的文件名，如果n大于9，用大括号括起来，如：`${10}` 。

|      |                                 |
| :--: | :-----------------------------: |
|  $!  | Shell最后运行的后台Process的PID |
|  $#  |    shell脚本或函数的参数个数    |
|  $?  | 上一条命令的结束代码（返回值）  |
|  $$  |        当前Shell进程PID         |


---
title: Python 基础
layout: default
---

# 一、基础
## Python 标识符
- 以下划线开头的标识符是有特殊意义的。以单下划线开头（_foo）的代表不能直接访问的类属性，需通过类提供的接口进行访问，不能用"from xxx import *"而导入；
- 以双下划线开头的（__foo）代表类的私有成员；以双下划线开头和结尾的（__foo__）代表python里特殊方法专用的标识，如__init__（）代表类的构造函数。
## Python保留字符

<table>
    <tr>
        <td>and</td>
	<td>exec</td>
	<td>not</td>
    </tr>
    <tr>
        <td>assert</td>
	<td>finally</td>
	<td>or</td>
    </tr>
    <tr>
	<td>break</td>
	<td>for</td>
	<td>pass</td>
    </tr>
    <tr>
	<td>class</td>
	<td>from</td>
	<td>print</td>
    </tr>
    <tr>
	<td>continue</td>
	<td>global</td>
	<td>raise</td>
    </tr>
    <tr>
	<td>def</td>
	<td>if</td>
	<td>return</td>
    </tr>
    <tr>
	<td>del</td>
	<td>import</td>
	<td>try</td>
    </tr>
    <tr>
	<td>elif</td>
	<td>in</td>
	<td>while</td>
    </tr>
    <tr>
	<td>else</td>
	<td>is</td>
	<td>with</td>
    </tr>
    <tr>
	<td>except</td>
	<td>lambda</td>
	<td>yield</td>
    </tr>
</table>
##行和缩进
Python的代码块不使用大括号（{}）来控制类，函数以及其他逻辑判断。python最具特色的就是用缩进来写模块。
> IndentationError: unexpected indent 
> 
>  IndentationError: unindent does not match any outer indentation level

# 二、变量
## 标准数据类型
- Numbers（数字）
- String（字符串）
- List（列表）
- Tuple（元组）
- Dictionary（字典）

### Numbers（数字）
- int（有符号整型）
- long（长整型[也可以代表八进制和十六进制]）
- float（浮点型）
- complex（复数）

复数由实数部分和虚数部分构成，可以用a + bj,或者complex(a,b)表示， 复数的实部a和虚部b都是浮点型
可使用del语句删除Number对象引用。
```python
del var1[,var2[,var3[....,varN]]]]
```
#### **python数学函数**

| 函数 | 返回值（描述） |
| ------ | ------ |
| ceil(x) | 返回数字的上入整数 |
| cmp(x, y) | 如果 x < y 返回 -1, 如果 x == y 返回 0, 如果 x > y 返回 1 |
| exp(x) |  |

#### **python随机数函数**

#### **Python三角函数**

### String（字符串）
用*变量[头下标:尾下标]*，就可以截取相应的字符串。
星号（*）是重复操作。
#### **python转义字符**

#### **Python字符串运算符**

#### **Python字符串格式化**

### List（列表）
列表用[ ]标识。

`list = [ 'abcd', 786 , 2.23, 'john', 70.2 ]`
### Tuple（元组）
元组用"()"标识。
元组不能二次赋值，相当于只读列表。

`tuple = ( 'abcd', 786 , 2.23, 'john', 70.2 )`
### Dictionary（字典）
字典用"{ }"标识。字典由索引(key)和它对应的值value组成。

`tinydict = {'name': 'john','code':6734, 'dept': 'sales'}`
## Python数据类型转换
数据类型的转换，你只需要将数据类型作为函数名即可。
<table>
	<th>函数</th>
	<th>描述</th>
	<tr>
		<td>complex(real [,imag])</td>
		<td>创建一个复数</td>
	</tr>
	<tr>
		<td>repr(x)</td>
		<td>将对象 x 转换为表达式字符串</td>
	</tr>
	<tr>
		<td>eval(str)</td>
		<td>用来计算在字符串中的有效python表达式，并返回一个对象</td>
	</tr>
	<tr>
		<td>tuple(s)</td>
		<td>将序列s转换为一个元组</td>
	</tr>
	<tr>
		<td>list(s)</td>
		<td>将序列s转换为一个列表</td>
	</tr>
	<tr>
		<td>set(s)</td>
		<td>将序列s转换为一个可变集合</td>
	</tr>
	<tr>
		<td>dict(d)</td>
		<td>创建一个字典。d 必须是一个序列 (key,value)元组。</td>
	</tr>
	<tr>
		<td>frozenset(s)</td>
		<td>转换为不可变集合</td>
	</tr>
	<tr>
		<td>chr(x)</td>
		<td>将一个整数转换为一个字符</td>
	</tr>
	<tr>
		<td>unichr(x)</td>
		<td>将一个整数转换为Unicode字符</td>
	</tr>
	<tr>
		<td>ord(x)</td>
		<td>将一个字符转换为它的整数值</td>
	</tr>
	<tr>
		<td>hex(x)</td>
		<td>将一个整数转换为一个十六进制字符串</td>
	</tr>
	<tr>
		<td>oct(x)</td>
		<td>将一个整数转换为一个八进制字符串</td>
	</tr>
	<tr>
		<td></td>
		<td></td>
	</tr>
</table>
# 三、运算符
## 算术运算符
<table>
	<th>运算符</th>
	<th>描述</th>
	<th>demo</th>
	<tr>
		<td>**</td>
		<td>幂 - 返回x的y次幂</td>
		<td>a**b 为10的20次方</td>
	</tr>
	<tr>
		<td>//</td>
		<td>取整除 - 返回商的整数部分</td>
		<td>9//2 输出结果 4 , 9.0//2.0 输出结果 4.0</td>
	</tr>
</table>
## 位运算符
<table>
	<th>运算符</th>
	<th>描述</th>
	<th>demo</th>
	<tr>
		<td>^</td>
		<td>按位异或运算符：当两对应的二进位相异时，结果为1</td>
		<td>(60 ^ 13) 输出结果 49 ，二进制解释： 0011 0001</td>
	</tr>
	<tr>
		<td>~</td>
		<td>按位取反运算符：对数据的每个二进制位取反,即把1变为0,把0变为1</td>
		<td>(~60 ) 输出结果 -61 ，二进制解释： 1100 0011。</td>
	</tr>
</table>
## 成员运算符
`in`

`not in`
## 身份运算符
<table>
	<th>运算符</th>
	<th>描述</th>
	<tr>
		<td>is</td>
		<td>is是判断两个标识符是不是引用自一个对象</td>
	</tr>
	<tr>
		<td>is not</td>
		<td>is not是判断两个标识符是不是引用自不同对象</td>
	</tr>
</table>
# 四、语句
## 条件语句
```python
if 判断条件1:
    执行语句1……
elif 判断条件2:
    执行语句2……
elif 判断条件3:
    执行语句3……
else:
    执行语句4……
```
python 并不支持 switch 语句，所以多个条件判断，只能用 elif 来实现。
## 循环语句
```python
while 判断条件：
    执行语句……
```
```python
for iterating_var in sequence:
   statements(s)
```
## pass语句
Python pass是空语句，是为了保持程序结构的完整性。
pass 不做任何事情，一般用做占位语句。
```python
pass
```

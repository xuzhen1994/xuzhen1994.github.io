---
title: Python系列（基础一）
layout: default
category: 技术
---

# 一、基础

## Python 标识符

- 以下划线开头的标识符是有特殊意义的。以单下划线开头（\_foo）的代表不能直接访问的类属性，需通过类提供的接口进行访问，不能用"from xxx import *"而导入；
- 以双下划线开头的（\__foo）代表类的私有成员；以双下划线开头和结尾的（\__foo\__）代表python里特殊方法专用的标识，如\__init\__()代表类的构造函数。

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

## 行和缩进

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

#### **python Number类型转换**

```python
complex(real [, imag ])	#创建一个复数
repr(x )		#将对象 x 转换为表达式字符串
eval(str )	#计算在字符串中的有效python表达式，并返回一个对象
tuple(s )		#将序列 s 转换为一个元组
list(s )		#将序列 s 转换为一个列表
chr(x )		#将一个整数转换为一个字符
unichr(x )	#将一个整数转换为Unicode字符
ord(x )		#将一个字符转换为它的整数值
hex(x )		#讲一个整数转换为一个十六进制字符串
oct(x )		#将一个整数转换为一个八进制字符串
```

#### **python数学函数**

| 函数 | 返回值（描述） |
| ------ | ------ |
| ceil(x) | 返回数字的上入整数 |
| cmp(x, y) | 如果 x < y 返回 -1, 如果 x == y 返回 0, 如果 x > y 返回 1 |
| exp(x) | 返回e的x次幂(ex),如math.exp(1) 返回2.718281828459045 |
| floor(x ) | 返回数字的下舍整数 |
| modf(x) | 返回x的整数部分与小数部分，两部分的数值符号与x相同，整数部分以浮点型表示 |
| round(x [, n ]) | 返回浮点数x的四舍五入值，如给出n值，则代表舍入到小数点后的位数 |

#### **python随机数函数**

| 函数 | 返回值（描述） |
| ------ | ------ |
| random.choice(seq) | 返回一个列表，元组或字符串的随机项 |
| random.randrange ([start,] stop [,step]) | 返回指定递增基数集合中的一个随机数，基数缺省值为1  [start: 指定范围内的开始值，包含在范围内。stop: 指定范围内的结束值，不包含在范围内。step: 指定递增基数。] |
| random.random() | 返回随机生成的一个实数，它在[0,1)范围内 |
| random.seed ( [x] ) | 改变随机数生成器的种子，可以在调用其他随机模块函数之前调用此函数 |
| random.shuffle (lst ) | 将序列的所有元素随机排序 |
| random.uniform(x, y) | 随机生成下一个实数，它在[x,y]范围内 |

#### **Python三角函数**

| 函数 | 返回值（描述） |
| ------ | ------ |
| math.hypot(x, y) | 返回欧几里德范数 sqrt(x*x + y*y) |
| math.degrees(x) | 将弧度转换为角度 |
| math.radians(x) | 将角度转换为弧度 |

### String（字符串）

用*变量[头下标:尾下标]*，就可以截取相应的字符串。
星号（*）是重复操作。

#### **python转义字符**

| 转义字符 | 描述 |
| ------ | ------ |
| \a | 响铃 |
| \b | 退格(Backspace) |
| \e | 转义 |
| \000	 | 空 |
| \v | 纵向制表符 |
| \t | 横向制表符 |
| \r | 回车 |
| \f | 换页 |
| \oyy | 八进制数，yy代表字符 |
| \xyy | 十六进制数，yy代表字符 |

#### **Python字符串运算符**

| 操作符 | 描述 |
| ------ | ------ |
| r / R | 原始字符串 - 原始字符串：所有的字符串都是直接按照字面的意思来使用，没有转义特殊或不能打印的字符。 原始字符串除在字符串的第一个引号前加上字母"r"（可以大小写）以外，与普通字符串有着几乎完全相同的语法。 |

#### **Python字符串格式化**

| 符号 | 描述 |
| ------ | ------ |
| %c | 格式化字符及其ASCII码 |
| %d | 格式化整数 |
| %u | 格式化无符号整数 |
| %s | 格式化字符串 |
| %o | 格式化无符号八进制数 |
| %x | 格式化无符号十六进制数 |
| %X | 格式化无符号十六进制数（大写） |
| %f | 格式化浮点数字，可指定小数点后的精度 |
| %e | 科学计数法格式化浮点数 |
| %g | %f和%e的缩写 |
| %p | 用十六进制数格式化变量的地址 |

#### **python三引号**

三引号允许一个字符串跨多行，字符串中可以包含换行符、制表符以及其他特殊字符。

#### **python字符串内建函数**

| 方法 | 描述 |
| ------ | ------ |
| str.capitalize() | 将字符串的第一个字母变成大写,其他字母变小写 |
| str.center(width[, fillchar]) | 返回一个原字符串居中,并使用空格填充至长度 width 的新字符串。默认填充字符为空格。 |
| str.count(sub, start, end) | 返回 str 在 string 里面出现的次数，如果 beg 或者 end 指定则返回指定范围内 str 出现的次数 |
| str.decode(encoding, errors) | 以 encoding 指定的编码格式解码字符串 |
| str.encode(encoding, errors) | 以 encoding 指定的编码格式编码字符串 |
| str.endswith(suffix[, start[, end]]) | 判断字符串是否以指定后缀结尾，如果以指定后缀结尾返回True，否则返回False |
| str.expandtabs(tabsize) | 把字符串中的 tab 符号('\t')转为空格，tab 符号('\t')默认的空格数是 8 |
| str.find(str, start, end ) | 检测字符串中是否包含子字符串 str ，如果指定 beg（开始） 和 end（结束） 范围，则检查是否包含在指定范围内，如果包含子字符串返回开始的索引值，否则返回-1 |
| str.index(str, start, end) | 同find()方法 |
| str.isalnum() | 检测字符串是否由字母和数字组成 |
| str.isalpha() | 检测字符串是否只由字母组成 |
| str.isdigit() | 检测字符串是否只由数字组成 |
| str.istitle() | 检测字符串中所有的单词拼写首字母是否为大写，且其他字母为小写 |
| str.join(sequence) | 将序列中的元素以指定的字符连接生成一个新的字符串 |
| str.ljust(width[, fillchar]) | 返回一个原字符串左对齐,并使用空格填充至指定长度的新字符串。如果指定的长度小于原字符串的长度则返回原字符串 |
| str.lstrip([chars]) | 截掉字符串左边的空格或指定字符 |
| str.maketrans(intab, outtab) | 创建字符映射的转换表 |
| str.partition(str) | 根据指定的分隔符将字符串进行分割 |
| str.split(str, num) | 指定分隔符对字符串进行切片，如果参数num 有指定值，则仅分隔 num 个子字符串 |
| str.splitlines() | 按照行('\r', '\r\n', \n')分隔，返回一个包含各行作为元素的列表 |
| str.startswith(str, beg, end) | 检查字符串是否是以指定子字符串开头 |
| str.swapcase() | 对字符串的大小写字母进行转换 |

### List（列表）

列表用[ ]标识。

```python
list = [ 'abcd', 786 , 2.23, 'john', 70.2 ]
```

#### **python列表方法**

| 方法 | 描述 |
| ------ | ------ |
| list.extend(seq) | 在列表末尾一次性追加另一个序列中的多个值 |
| list.index(obj) | 从列表中找出某个值第一个匹配项的索引位置 |
| list.reverse() | 反向列表中元素 |

### Tuple（元组）

元组用"()"标识。
元组不能二次赋值，相当于只读列表。

```python
tuple = ( 'abcd', 786 , 2.23, 'john', 70.2 )
```

### Dictionary（字典）

字典用"{ }"标识。字典由索引(key)和它对应的值value组成。

```python
d = {key1 : value1, key2 : value2 }
tinydict = {'name': 'john','code':6734, 'dept': 'sales'}
```

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

# js技法总结

多维数组转一维数组

```javascript
// 方法一
// 缺点：value会被转化为字符串、不支持对象数组
var arr=[[[0,1,2],3,4,5],6,7];
a = arr.join(",").split(",");
console.log(a);//["0", "1", "2", "3", "4", "5", "6", "7"]

// 方法二
// 缺点：仅支持二维数组
a = [].concat.apply([], arr);
console.log(a);
```




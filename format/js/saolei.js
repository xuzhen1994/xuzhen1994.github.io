let map = [];

var saolei = function(height, width, num) {

    if(height && width && num) {
        if(height < 9 || width < 9 || num >= height*width*0.9 || num < 10) {
            alert("长和宽不小于9；地雷数不大于长宽乘积的90%，不小于10！")
            return;
        }
    } else {
        alert("输入信息缺失！");
        return;
    }

    // 初始化地图
    map = []
    let  count = 0;
    for (let i = 0; i < height; i++) {
        let col = [];
        for (let j = 0; j < width; j++) {
            col.push(0);
            count++;
        }
        map.push(col);
    }

    // 填充地雷
    for (let index = 0; index < num; index++) {
        let temp = Math.random() * height * width;
        temp = Number.parseInt(temp);
        let posiX = temp % width;
        let posiY = Number.parseInt(temp / width);
        if(map[posiY][posiX] == -1) {
            index--;
        } else {
            map[posiY][posiX] = Infinity;
        }
    }

    // 计算周边地雷个数
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (isFinite(map[i][j])) {
                let up = i - 1;
                let down = i + 1;
                let left = j - 1;
                let right = j + 1;
                if(up >= 0) {
                    if (left >= 0) {
                        map[up][left] += 1;
                    }
                    map[up][j] += 1;
                    if(right < width) {
                        map[up][right] += 1;
                    }
                } else {
                    if (left >= 0) {
                        map[down][left] += 1;
                    }
                    map[down][j] += 1;
                    if (right < width) {
                        map[down][right] += 1;
                    }
                }
                if (left >= 0) {
                    map[i][left] += 1;
                }
                if (right < width) {
                    map[i][right] += 1;
                }
            }
            
        }
        
    }

}
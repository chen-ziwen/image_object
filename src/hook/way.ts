// 对图片的大小进行处理
export function imgurl(url: string, param: string = "100") {
    if (!url) {
        return '/assets/images/ava.jpeg';
    }
    return `${url}?param=${param}y${param}`
}

// 随机播放，这样索引可能重复
export function randomNum(min: number, max: number) {
    let num = Math.floor((Math.random() * (max - min)) + min);
    return num;
}

// 最多显示三个歌手名
export function changeData(msg: { name: string }[]) {
    let newarr = msg.map(item => {
        return item.name;
    }).slice(0, 3).join("\n");
    return newarr;
}

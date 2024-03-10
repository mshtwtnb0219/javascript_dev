const num = 50;

if (num > 10) {
    console.log("定数は10より大きいです");
}

// 等価演算子
console.log('5' == 5);
// 厳密等価演算子(データ型も一緒に比較してくれる)
console.log('5' === 5)

// 変数にランダム整数を代入する part1
let num1 = Math.floor(Math.random() * 5);
console.log(num1)
if (num1 === 4) {
    console.log("大当たり");
} else if (num1 === 1) {
    console.log("当たり");
} else {
    console.log("はずれ")
}

// 変数にランダム整数を代入する　part2
let num2 = Math.floor(Math.random() * 4);
switch (num2) {
    case 0:
        console.log("0です")
        break;
    case 1:
        console.log("1です")
        break;
    case 2:
        console.log("2です")
        break;
    // それ以外の場合
    default:
        console.log("はずれ")
}

//for分
for(let i=0; i<=10;i+=1) {
    console.log(i)
}

//while文
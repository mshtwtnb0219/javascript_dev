// 関数(javascriptSE6以降)
const greetingMoning = () => {
    console.log("おはよう")
}
// 関数(古い書き方)
function greetingEvning() {
    console.log("こんにちは")
}

//関数の呼び出し
greetingEvning();

// 関数引数あり
const cal = (price) => {
    console.log("値段は"+ price + "です")
}

//関数引数あり呼び出し
cal(100);

//関数戻り値あり
const isReturn = () => {
    return "こんにちは";
}

//戻り値あり関数呼び出し
console.log(isReturn());
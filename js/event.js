// output-btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('output-btn');

// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
    console.log('クリックされました！');
});

// add-btnというidを持つHTML要素を取得し、定数に代入する
const addBtn = document.getElementById('add-btn');
const parentList = document.getElementById('parent-list')

// リストの追加クリックされたときにイベント処理を実行する
addBtn.addEventListener('click', () => {
    const childList = document.createElement('li');
    childList.textContent = '追加されたリスト';

    parentList.appendChild(childList);
});


// count-btnというidを持つHTML要素を取得し、定数に代入する
const countBtn = document.getElementById('count-btn');
countBtn.addEventListener('click', () => {
    // textFormというname属性を持つフォームを取得する
    //name属性をハイフンにすると取得できなくなる(エラー発生)ためキャメルケースにする
    const textLength = document.forms.textForm.textBox.value;
    console.log(textLength.length + '文字');
});

//（　＾ω＾）・・・
// area-btnというidを持つHTML要素を取得し、定数に代入する
const areaBtn = document.getElementById('area-btn');

// HTML要素がクリックされたときにイベント処理を実行する
areaBtn.addEventListener('click', () => {
    const areaSelect = document.forms.areaFrom.area.value;
    console.log(areaSelect)
});

// os-btnというidを持つHTML要素を取得し、定数に代入する
const osBtn = document.getElementById('os-btn')
osBtn.addEventListener('click', () => {
    // 配列風
    const items = document.forms.osName.os;
    // 繰り返し処理でチェックボックスを1つずつ取り出し、もし選択されていれば値を出力する
    for(let i=0; i< items.length; i++){
        if(items[i].checked) {
            console.log(items[i].value);
        }
    }
});
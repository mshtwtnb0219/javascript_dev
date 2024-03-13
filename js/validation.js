// チェックボタン押下時に入力チェックを行う
const checkBtn = document.getElementById('check-btn');
checkBtn.addEventListener('click', validation);


// バリデーションを行う関数
function validation() {
    // フォームにおける内容の取得
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const output = document.getElementById('output');

    //（　＾ω＾）・・・
    // エラーメッセージを格納するための空の配列を宣言
    let errors = [];

    //　名前の入力チェック
    if (name.trim() === '') {
        errors.push('名前を入力してください')
    } else if (name.length > 10) {
        errors.push('名前を10文字未満にしてください')
    }

    // メールアドレスの入力チェック
    const emailPattern = /^[a-zA-Z0-9.]+@[a-zA-Z0-9.]+$/;
    if (!emailPattern.test(email)) {
        errors.push('メールアドレスの入力形式が正しくありません。');
    }


    // エラーがあれば画面に表示
    if (errors.length > 0) {
        output.innerHTML = errors.join('<br>');
    } else {
        output.innerHTML = '';
        alert('OK');
    }
}
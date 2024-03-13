// 東京都の天気予報データを取得するためのURL
const url = 'https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json';
//（　＾ω＾）・・・
//イベントの対象となるボタンを取得
const ajaxBtn = document.getElementById('ajax-btn');

//ボタンクリック時のイベント処理を実行する
ajaxBtn.addEventListener('click',()=> {
    // webサイトにリクエスト送信し、データを取得する
    fetch(url)
    // サーバーからAjaxレスポンスを受け取った場合の処理
        .then((response) => response.json())
        .then((data) => {
            // JSONからデータを抽出
            const weather = data[0].timeSeries[0].areas[0].weathers[1];
            console.log(weather)
        })

});


// ダミーデータを送信するためのURL
const url2 = 'https://jsonplaceholder.typicode.com/posts';
//イベントの対象となるボタンを取得
const ajaxBtn2 = document.getElementById('ajax-btn2');


// ボタンのクリック時にイベント処理を実行する
ajaxBtn2.addEventListener('click', () => {
    // 送信するダミーデータ
    const dummyData = { name: '侍太郎', age: 30 };

    // ダミーサーバーにAjaxリクエストを送信する
    fetch(url2, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dummyData) // JSON形式に変換
    })
     // サーバーからAjaxレスポンスを受け取ったときの処理
     .then((response) => response.json()) // JSON形式のデータに変換
     .then((data) => {
        // サーバーから受け取ったダミーデータを見やすい形にして表示
        console.log('サーバーからの応答：\n' + JSON.stringify(data, null, 2) );
     });
});

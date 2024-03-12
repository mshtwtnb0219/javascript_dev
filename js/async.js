 // 同期処理を実行する
 console.log('処理1');
 console.log('処理2');
 console.log('処理3');


 //（　＾ω＾）・・・
 // 2秒待ち時間を設定、非同期処理を実行
 setTimeout(()=> {
    console.log('処理4');

 },2000);

 console.log('処理5');
 console.log('処理6');
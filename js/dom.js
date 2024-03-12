//console.log(window)
//console.log(document.head);
//console.log(document.body);

// HTML要素をidで取得し、中身を出力する
console.log(document.getElementById('first-list'))

// HTML要素をclassで取得し、中身を出力する(コレクション(厳密には違う))
//console.log(document.getElementsByClassName('heading'))
 // 複数のHTML要素を取得し、定数に代入する
 const headings = document.getElementsByClassName('heading');
 
 // 複数のHTML要素を1つずつ取得し、中身を出力する
 for (let i = 0; i < headings.length; i++) {
   console.log(headings[i]);
 }
 

 // HTML要素をCSSセレクタで取得し、中身を出力する(最初の1つ)
 console.log(document.querySelector('h1'));
 console.log(document.querySelector('#second-heading'));
 console.log(document.querySelector('.list'))

  // HTML要素をCSSセレクタで取得し、中身を出力する（すべて）
  console.log(document.querySelectorAll('.heading'));
  console.log(document.querySelectorAll('li'));

  
  // 新しくli要素を作成し、定数の代入する
  const li = document.createElement('li');
  // 作成したli要素にテキストを追加する
  li.textContent = '新しく追加したリスト';
  //li.innerHTML = '<a href="#">JavaScriptで新しく作成したリスト3</a>';
  // ul要素の末尾にli要素を追加する
  document.querySelector('ul').appendChild(li)
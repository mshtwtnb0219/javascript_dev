//配列
const userName =['あああ','いい','うう']
const userAges = [36, 33, 29, 25, 22];

console.log(userName)
console.log(userName[1])

//オブジェクト
const personalData= {name:'太郎',age:20,gender:'男性'}
//オブジェクト値の取り出し
console.log(personalData.name)
console.log(personalData['name'])
//値の更新
personalData.age = 21
console.log(personalData.age)
//値の追加
personalData.address = '東京'
console.log(personalData.address)
console.log(personalData)

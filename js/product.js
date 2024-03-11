//クラス コンストラクタにプロパティを持たせない
class Product1 {
    constructor(){
        this.name = 'シャンプー';
        this.price = 500;
        this.category = '生活雑貨';
    }
}

const product  = new Product1();
console.log(product.name);


//クラス コンストラクタにプロパティを持たせる
class Product2 {
    constructor(name,price,category){
        this.name = name;
        this.price = price;
        this.category = category;
    }
    // メソッド (クラス内の場合は記載方法は異なる)
    output() {
        console.log(this.name);
        console.log(this.price);
        console.log(this.category);
    }
}

const product2  = new Product2('リンゴ',100,'果物');
product2.output();


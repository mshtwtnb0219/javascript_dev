<script setup>

const fruitList = ['りんご', 'ばなな', 'いちご']

//key属性を指定
const areaList = [
    {id: 0, name: "愛知"},
    { id: 1, name: "東京" },
    { id: 2, name: "大阪" }
]



//一つ目の引数に親コンポーネントで受け取るイベント名(@sendMessage)を定義・二つ目の引数には実際に親コンポーネントに渡す値 
const sendMessage = () => {
    // $emitを使用してイベントを発火する
    $emit("message", "子コンポーネントから送られたデータ");
};

</script>

<template>
    <ul>
        <li v-for="fruit in fruitList" :key="fruit">{{ fruit }}</li>
    </ul>
    <!-- key属性を指定 -->
    <ul>
        <li v-for="fruit in fruitList" :key="fruit.id">{{ fruit }}</li>
    </ul>

   
    <button @click="sendMessage">メッセージを送る</button>
</template>

<style></style>
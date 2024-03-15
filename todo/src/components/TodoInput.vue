<template>
    <p v-if="iErrMsg">タスク・期限を入力してください</p>

    <form v-on:submit='onSubmitForm'>
        <label>やること<input type="text" v-model="input"></label><br>
        <label>期限<input type="date" v-model="inputDate"></label><br>
        <input type="submit" value="登録">
    </form>
</template>

<script setup>
import { ref } from "vue";
import { statuses } from "@/const/statuses";

// 双方向バインディング
const input = ref("");
const inputDate = ref("");

const iErrMsg = ref(false);



function onSubmitForm() {

    //何も入力されていない場合
    if (input.value=="" || inputDate.value==""){
        iErrMsg.value = true;
        //エラー発生時は再描画しないようにする
        event.preventDefault();
        return;
        
    }

    //ローカルストレージから値を取得 ※何も取得できない場合は空の配列を取得
    const items = JSON.parse(localStorage.getItem('items')) || [];

    //保存するオブジェクトの作成
    const newItem = {
        id: items.length,
        content: input.value,
        limit: inputDate.value,
        state: statuses.NOT_START,
        onEdit: false,
    };

    // オブジェクトを配列(items)に追加
    items.push(newItem);
    // ローカルストレージに保存
    localStorage.setItem("items",JSON.stringify(items));
}

</script>

<style>
p {
    color: red;
}
</style>
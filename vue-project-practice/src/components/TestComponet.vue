
<script setup>

import {ref} from "vue";
// scriptタグにはsetupと記載が必要
defineProps({
    // textというProsを文字列で定義
    text: String,
});
    // 子コンポーネントはそのままscriptタグに定義すればOK
    const testData = '文字列';

    function output() {
        console.log('あああ');
    }

    // 双方向バインディング
    const name = ref("");

</script>
<template>
    <!--propsで定義した文字列を表示 -->    
    <p>{{ text }}</p>
    <!--子コンポーネントで定義して文字列を表示-->
    <p>{{ testData }}</p>
    <p v-text="testData"></p>
    <!-- イベントバインディング（　＾ω＾）・・・ -->
    <button v-on:click='output'>実行</button><br>
    <!-- イベントバインディング@イベント名でもOK -->
    <button @click='output'>実行</button>

    <!-- 双方向バインディング -->
    <div>
        <label>名前   </label>
        <!-- v-modelとref関数はセットで／(^o^)＼ -->
        <input type="text" id="name" v-model="name">
        <p>入力された値{{ name }}</p>
    </div>

</template>
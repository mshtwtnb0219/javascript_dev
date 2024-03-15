<script setup>
import TodoInput from './TodoInput.vue';
import TodoListView from './TodoListView.vue';

//ローカルストレージを全消し
//いずれはDBを用意
//localStorage.clear();
</script>


<template>
    <div class="todoApp">
        <TodoInput></TodoInput>
        <TodoListView></TodoListView>
    </div>
</template>
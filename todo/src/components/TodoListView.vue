<template>
    <p v-if="isErrMsg">{{errMsg}}</p>
    <table>
        <tr>
            <th class="th-id">ID</th>
            <th class="th-value">やること</th>
            <th class="th-limit">期限</th>
            <th class="th-state">状態</th>
            <th class="th-edit">編集</th>
            <th class="th-delte">削除</th>
        </tr>
        <tr v-for="item in items" :key="item.id">
            <td>{{ item.id }}</td>
            <td>
                <span v-if="!item.onEdit">{{ item.content }}</span>
                <input v-else v-model="inputContent" type="text">
            </td>
            <td>
                <span v-if="!item.onEdit">{{ item.limit }}</span>
                <input v-else v-model="inputLimit" type="date">
            </td>

            <!-- <td>{{ item.state.value }}</td> -->
            <td>
                <span v-if="!item.onEdit">{{ item.state.value }}</span>
                <select v-else v-model="inputState">

                    <option v-for="state in statuses" :key="state.id" :value="state"
                        :selected="state.id == item.state.id">
                        {{ state.value }}
                    </option>


                </select>
            </td>

            <td>
                <button v-if="!item.onEdit" v-on:click="onEdit(item.id)">編集</button>
                <button v-else v-on:click="onUpdate(item.id)">完了</button>
            </td>

            <td><button v-on:click="showDeleteModal(item.id)">削除</button></td>


            <div v-if="isShowModal" class="modal">
                <div class="modal-content">
                    <p>{{ deleteItemConten }}削除してもいいか?</p>
                    <button v-on:click="onDleteItem()">はい</button>
                    <button v-on:click="onHideModal()">いいえ</button>
                </div>
            </div>


        </tr>
    </table>

</template>


<script setup>
import { ref } from "vue";
import { statuses } from "@/const/statuses";

let items = ref(JSON.parse(localStorage.getItem('items')) || []);
let inputContent = ref('');
let inputLimit = ref('');
let inputState = ref('');

//削除対象のID
let deleteItemId = '';
//削除対処のItemの内容
let deleteItemConten = ref();
//エラーメッセージが内容
let errMsg = ref('');


// エラーメッセージ表示 デフォルトではfalse
let isErrMsg = ref(false);
// モーダルメッセージ表示 デフォルトではfalse
let isShowModal = ref(false);

//編集のid確認用flag
let isOnEditOther = false;

//編集メソッド
function onEdit(id) {

    //他に編集中なものがないか確認する
    items.value.map((item) => {
        if (item.onEdit) {
            isOnEditOther = true;
            return;
        }
    })
    if(isOnEditOther) {
        errMsg.value = "他に編集中のタスクがあります";
        isErrMsg.value = true;
        return;
    }


    inputContent.value = items.value[id].content;
    inputLimit.value = items.value[id].limit;
    inputState.value = items.value[id].state;


    items.value[id].onEdit = true;

}

//更新メソッド
function onUpdate(id) {

    if (inputContent.value == "" || inputLimit.value == "") {
        errMsg.value = "値を記入してください";
        isErrMsg.value = true;
        return;
    }
    //更新したいオブジェクトの作成
    const newItem = {
        id: id,
        content: inputContent.value,
        limit: inputLimit.value,
        state: inputState.value,
        onEdit: false,
    };

    items.value.splice(id, 1, newItem);


    localStorage.setItem("items", JSON.stringify(items.value));
    isErrMsg.value = false;

}

//削除メソッドモーダル表示
function showDeleteModal(id) {
    isShowModal.value = true;
    deleteItemId = id;
    deleteItemConten = items.value[id].content;
}

//モーダル("はい")削除実行メソッド
function onDleteItem() {
    items.value.splice(deleteItemId, 1);

    items.value = items.value.map((item, index) => ({
        id: index,
        content: item.content,
        limit: item.limit,
        state: item.state,
        onEdit: item.onEdit,
    }));



    localStorage.setItem("items", JSON.stringify(items.value));

    isShowModal.value = false;
}

//モーダル("いいえ")削除実行メソッド
function onHideModal() {
    // モーダルを閉じるだけ
    isShowModal.value = false;
}

</script>

<style>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}


.modal-content {
    background: #080f36;
    padding: 20px;
    border-radius: 8px;
}
</style>
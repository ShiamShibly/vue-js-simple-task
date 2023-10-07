<script setup>
import { ref } from 'vue';
import contenteditable from 'vue-contenteditable';
import { useNoteStore } from '../../stores/NoteStore';

const noteStore = useNoteStore();
const title = ref('');
const content = ref('');

const handleForm =(e) =>{
let insertId = noteStore.lastNoteId;
if (0 < title.value.length && insertId === ''){
    insertId = Date.now();
    noteStore.addNote({
        id : insertId,
        title : title.value,
        content : content.value,
        timestamp : Date.now(),
        pinned : false
    });

    // Reset Form.

    title.value = '';
    content.value = '';

} else {
    alert ('Note Title can not be blank');
}
}

</script>

<template>
 <div class="rs__notes-content">
    <form @submit.prevent="handleForm">
        <el-input
        type="text"
        class="rs__input-title"
        placeholder="what is the note about ..."
        v-model="title"
         />
         <contenteditable
         tag="div"
         class="rs__content-editable"
         :contenteditable="true"
         :no-nl="false"
         :no-html="true"
         v-model="content"

         />

       <el-button 
       type="submit"
       class="rs__form-save-btn">
       <span class="material-symbols-sharp">save</span>
    </el-button>

    </form>
 </div>

</template>
<script setup>
import { useNoteStore } from '../../stores/NoteStore'
const props = defineProps (['notes' , 'title' , 'icon' , 'type']);

const noteStore = useNoteStore();
</script>

<template>
 <h4 class="rs__sidebar-title" v-if="'list' === type">
    <span class="rs__sidebar-title-note-icon material-symbols-sharp">{{icon}}</span>  
  {{ title }}
</h4>
<ul class="rs__note-list"  v-if="'list' === type">
    <li v-for="note in notes" :key="note.id">
      <p>  {{note.title}} </p> 
      <el-icon :size="25"  v-if="note.pinned" @click="noteStore.markedAsUnPinned(note.id)" class="rs__note-list-icon"><do_not_disturb_on /></el-icon> 
      <el-icon v-if="! note.pinned" @click="noteStore.markedAsPinned(note.id)" class="rs__note-list-icon"><push_pin /></el-icon>  
    </li>

</ul>
</template>


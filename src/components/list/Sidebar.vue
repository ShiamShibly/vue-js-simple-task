<script setup>
import Listitem from '../partials/Listitem.vue'
import {useNoteStore} from '../../stores/NoteStore'

 const noteStore = useNoteStore ();
</script>

<template>
<div class="rs__notes-sidebar">
    <Listitem
     :notes="noteStore.pinnedNotes" 
     :title="'Pinned Notes'"
     :icon="'push_pin'"
     :type ="'list'"
     /> 
    <Listitem
     :notes="noteStore.allNotes" 
     :title="'all Notes'"
     :icon="'notes'"
     :type ="'list'"
     /> 
</div>
</template>



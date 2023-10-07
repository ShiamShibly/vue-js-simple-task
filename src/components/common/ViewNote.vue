<script setup>
import { ref } from 'vue';
import { useNoteStore } from '../../stores/NoteStore';

const noteStore = useNoteStore();

</script>

<template>

<ul v-if="noteStore.layout  === 'grid'" class="grid">
    <!-- A "grid" view with photos only -->
    <li v-for="note in noteStore.notes">
      <h3>{{note.title}}</h3>
      <p>{{note.content}}</p>
    </li>
</ul>

<ul v-if="noteStore.layout  === 'list'" class="list">
    <!-- A "list" view with small photos and blog titles -->
    <li v-for="note in noteStore.notes">
      <p>{{note.title}}</p>
    </li>
</ul>
</template>
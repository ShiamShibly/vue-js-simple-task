<template>
    <section id="js-grid-list"  v-cloak></section>
    <div class="rs__top-toolbar">
        <div class="rs__toolbar-title">
            Shiam Notes
            <el-icon :size="25" ><Edit /></el-icon>
            <el-icon :size="25" ><Delete /></el-icon>
        </div>
        <div class="rs__action-icons rs__justify-end">
            <el-icon :size="25" ><Search /></el-icon>
            <a class="list-icon" v-on:click="noteStore.layout='list'" v-bind:class="{ 'active':noteStore.layout == 'list'}" title="List"> 
                 <el-icon :size="25" ><List /></el-icon>
            </a>
            <a class="grid-icon" v-on:click="noteStore.layout='grid'" v-bind:class="{ 'active': noteStore.layout == 'grid'}" title="Grid">
                <el-icon :size="25" ><Grid /></el-icon>
            </a>
          
        
        </div>
    </div>

</template>

<script setup>
import { useNoteStore } from '../../stores/NoteStore';

const noteStore = useNoteStore();

</script>
<template>
    <div class="inputfile-box">
        <input @input="handleChange" type="file" id="file" class="inputfile" @change='uploadFile($event)'>
        <label for="file">
            <div class="file-box">
                Selecione os Arquivos
            </div>
        </label>
        <div class="error-message">
            {{ errorMessage }}
        </div>
    </div>
    <div>
        <div v-for="(file, i) in files" :key="i">
            {{ file.name }}
            <span class="remove" @click="removeElement(i)">&times;</span>
        </div>
    </div>
</template>

<style scoped>
.inputfile-box {
    position: relative;
}

.inputfile {
    display: none;
}

.file-box {
    background-color: #5da0dd;
    color: var(--white);
    font-size: 1.5rem;
    font-weight: bold;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.4rem;
}

.remove {
    font-size: 1rem;
}

.remove:hover {
    cursor: pointer;
}
</style>

<script setup lang="ts">
import { useField } from 'vee-validate';
import { ref } from 'vue';
import { defineProps, toRef } from 'vue';

const files = ref<File[]>();

const uploadFile = (event: Event) => {
    const target = event.target as HTMLInputElement;
    files.value = Array.from(target.files as FileList);
}

const removeElement = (id: number) => {
    files.value = []
}

type Props = {
    name: string;
}

const props = defineProps<Props>();

const name = toRef(props, 'name')

const { errorMessage, handleChange } = useField(name || 'tmp');

</script>
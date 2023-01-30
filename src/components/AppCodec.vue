<template>
    <div class="d-flex" style="margin-left: 1em;">
        <div class="codec" :class="{ active: codec.active }" v-for="(codec, index) in codecs" :key="index"
            @click="setActiveCodec(codec.name)">
            {{ codec.name }}
        </div>
    </div>
</template>

<style scoped>
.codec {
    width: 70px;
    height: 50px;
    background-color: #dee0e3;
    display: flex;
    justify-content: center;
    align-items: center;
}

.codec:nth-child(1) {
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    border-right: 1px solid #d6d8db;
}

.codec:nth-last-child(1) {
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
}

.codec:hover {
    cursor: pointer;
}

.active {
    background-color: #616976;
}
</style>

<script lang="ts" setup>
import { ref } from 'vue';
import mockCodecs from '../mocks/codecs';

const codecs = ref(mockCodecs);

const setActiveCodec = (codec: string) => {
    codecs.value = codecs.value.map((element) => {
        return {
            name: element.name,
            active: element.name === codec ? true : false,
            quality: element.quality
        }
    })
}
</script>
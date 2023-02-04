<template>
    <div id="openModal-about" class="modal_dialog" :class="{ active: active }">
        <div>
            <a href="#close" title="Close" class="close" @click="() => emit('closeModal')">X</a>
            <h2>Configuraçoes avancadas</h2>
            <div>
                <label for="select">Qualidade do aúdio</label>
                <select v-model="value" id="select">
                    <option :value="quality.value" v-for="(quality, index) in qualities" :key="index">
                        {{ quality.name }} - {{ quality.value }} kbps
                    </option>
                </select>
                <div>{{ errorMessage }}</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Ref: https://codepen.io/Lightislands/pen/XdYYgb */
.modal_dialog {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.8);
    z-index: 99999;
    opacity: 0;
    -webkit-transition: opacity 100ms ease-in;
    -moz-transition: opacity 100ms ease-in;
    transition: opacity 100ms ease-in;
    pointer-events: none;
}

.active {
    opacity: 1;
    pointer-events: auto;
}

.modal_dialog>div {
    max-width: 800px;
    width: 90%;
    position: relative;
    margin: 10% auto;
    padding: 20px;
    border-radius: 3px;
    background: #fff;
}

.close {
    font-family: Arial, Helvetica, sans-serif;
    background: #f26d7d;
    color: #fff;
    line-height: 25px;
    position: absolute;
    right: -12px;
    text-align: center;
    top: -10px;
    width: 34px;
    height: 34px;
    text-decoration: none;
    font-weight: bold;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    -moz-box-shadow: 1px 1px 3px #000;
    -webkit-box-shadow: 1px 1px 3px #000;
    box-shadow: 1px 1px 3px #000;
    padding-top: 5px;
}

.close:hover {
    background: #fa3f6f;
}

label {
    display: block;
}
</style>

<script lang="ts" setup>
import { useFormValues, useField } from 'vee-validate';
import { watch, ref, onBeforeMount } from 'vue'
import { InferType } from 'yup';
import audioConverterSchema from '../validations/yup/audioConverter';
import codecs from '../mocks/codecs';

type Pros = {
    active: boolean
};

type Quality = {
    name: string,
    value: number
}

const pros = defineProps<Pros>();
const emit = defineEmits(['closeModal'])

const values = useFormValues<InferType<typeof audioConverterSchema>>();
const qualities = ref<Quality[]>([])

const getQuality = async () => {
    const currentCodec = values.value.codec || 'mp3'

    qualities.value = codecs.find((codec) => codec.name === currentCodec)?.quality || []
};

const { errorMessage, value, setValue } = useField('quality');

watch(() => pros.active, () => {
    getQuality();
}, { immediate: true });


onBeforeMount(() => {
    setValue(64)
})

</script>
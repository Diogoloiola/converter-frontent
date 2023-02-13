<template>
    <section class="mt-3">
        <form class="card" @submit="onSubmit">
            <div class="card-header">
                <div class="container d-flex">
                    <div class="step">
                        <span>1</span>
                    </div>
                    <div class="container-btn">
                        <AppUploadFiles name="file" />
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div class="container d-flex" style="flex-wrap: wrap;">
                    <div class="step">
                        <span>2</span>
                    </div>
                    <div>
                        <AppCodec />
                    </div>
                    <div style="margin-left: auto;">
                        <AppButton content="config..." background="secondary" size="sm"
                            @click="modalActive = true" />
                        <AppModal :active="modalActive" @closeModal="closeModal" />
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div class="container d-flex">
                    <div class="step">
                        <span>3</span>
                    </div>
                    <div class="container-btn">
                        <AppButton :type="'submit'" content="Converter" :disable="isSubmitting" background="secondary" />
                    </div>
                </div>
            </div>
        </form>
    </section>
    <AppOverlay text="Iniciando a conversão" v-if="overlayActive" />
</template>

<style>
.card {
    width: 50%;
    height: 470px;
    background-color: var(--gray);
    border-radius: 0.4rem;
    margin: auto;
}

.card-header {
    min-height: 100px;
    border-bottom: 1px solid var(--gray-two);
    padding: 10px;
}

.card-body {
    border-bottom: 1px solid var(--gray-two);
    padding: 10px;
}

.step {
    width: 50px;
    height: 50px;
    background-color: var(--gray-two);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.container-btn {
    width: 299.99px;
    height: 75px;
    border: none;
    border-radius: 0.4rem;
    margin-top: 1rem;
    margin-left: 1rem;
}

@media screen and (max-width: 768px){
    .card{
        width: 100%;
    }
}
</style>

<script setup lang="ts">
import { ref } from 'vue'
import { useForm } from 'vee-validate';
import schema from '../validations/yup/audioConverter';
import { AxiosError } from 'axios';
import { useToast } from 'vue-toastification';
import AppModal from './AppModal.vue';
import AppButton from './AppButton.vue';
import AppUploadFiles from './AppUploadFiles.vue';
import AppOverlay from './AppOverlay.vue';
import AppCodec from './AppCodec.vue';

import audioRepository from '../api/audioRepository';

const toast = useToast();
const overlayActive = ref(false);

const { handleSubmit, isSubmitting } = useForm({
    validationSchema: schema,
})

const onSubmit = handleSubmit(values => {

    const params = {
        audio: {
            file: values.file,
            output_file_name: values.file.name,
            to_format: values.codec,
            quality: values.quality
        }
    }
    overlayActive.value = true;

    audioRepository.converterAudio(params).then((response) => {
        toast.success(response.data.message);
    }).catch((error: AxiosError) => {
        toast.error(error.message);
    }).finally(() => overlayActive.value = true)
})

const modalActive = ref(false);

const closeModal = () => modalActive.value = !modalActive.value

</script>
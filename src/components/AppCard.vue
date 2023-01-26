<template>
    <section class="mt-3">
        <div class="card">
            <div class="card-header">
                <div class="container d-flex">
                    <div class="step">
                        <span>1</span>
                    </div>
                    <div class="container-btn">
                        <AppUploadFiles />
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div class="container d-flex">
                    <div class="step">
                        <span>2</span>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div class="container d-flex">
                    <div class="step">
                        <span>3</span>
                    </div>
                    <div class="container-btn">
                        <AppButton content="Converter" background="secondary" />
                    </div>
                </div>
            </div>
        </div>
    </section>
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
</style>

<script setup lang="ts">
import AppButton from './AppButton.vue';
import AppUploadFiles from './AppUploadFiles.vue';
</script>
<template>
    <button class="btn" :class="defineClassForComponent()">{{ content }}</button>
</template>

<style scoped>
.btn {
    display: block;
    width: 100%;
    border: none;
    border-radius: 0.4rem;
}

.btn:hover{
    cursor: pointer;
    transition: 0.5s;
}

.md {
    padding: 1rem;
}

.primary {
    background-color: #5da0dd;
    color: var(--white);
    font-size: 1.5rem;
    font-weight: bold;
}

.secondary {
    background-color: var(--gray-two);
    color: #5d6570;
    font-size: 1.5rem;
    font-weight: bold;
}
</style>

<script setup lang="ts">

type Props = {
    content: string
    background?: string;
    size?: string
}

const props = defineProps<Props>();


const defineClassForComponent = () => {
    return [
        props?.background || 'primary',
        props?.size || 'md'
    ]
}

</script>
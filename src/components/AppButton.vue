<template>
    <button class="btn" :type="type || 'button'" :class="defineClassForComponent()" :disabled="disable || false">{{ content }}</button>
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

.sm {
    padding: 0.7rem;
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
    font-size: 1.2rem;
    font-weight: bold;
}
</style>

<script setup lang="ts">

type Props = {
    content: string
    background?: string;
    size?: string
    disable?: boolean
    type?: "button" | "submit" | "reset"
}

const props = defineProps<Props>();


const defineClassForComponent = () => {
    return [
        props?.background || 'primary',
        props?.size || 'md'
    ]
}

</script>
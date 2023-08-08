<template>
    <button @click="$emit('trade')" class=" rounded-lg px-4 py-2 text-white hover:scale-105 transition-all duration-500" :style="{backgroundColor : color}">
        <slot />
    </button>
</template>


<script setup >
const props= defineProps({
    color : String
})

</script>
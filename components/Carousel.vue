<template>
    <div class="flex snap-x snap-mandatory overscroll-auto overflow-auto">
        <div
            v-for="img in imgs"
            class="flex-none snap-center scroll-p-12 w-4/6"
        >
            <img :src="img" alt="" class="px-3" />
        </div>
    </div>
</template>

<script setup>
defineProps({ imgs: Array });
</script>

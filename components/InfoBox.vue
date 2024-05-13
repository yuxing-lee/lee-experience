<template>
    <article
        class="flex flex-col justify-center items-center w-full h-60 p-8 bg-gradient-to-b from-sky-800 to-sky-500 text-gray-100 break-words ease-linear duration-150 hover:to-gray-800 hover:scale-105"
        v-on:mouseover="hover = true"
        v-on:mouseleave="hover = false"
    >
        <p class="font-bold text-sm mb-5 lg:text-xl">{{ title }}</p>
        <p>{{ description }}</p>
        <a
            class="animate-bounce absolute bottom-3"
            v-show="hover"
            :href="'#' + tag"
        >
            <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-10 h-10"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
            </svg>
        </a>
    </article>
</template>

<script setup>
defineProps({ title: String, description: String, tag: String });
let hover = ref(false);
</script>

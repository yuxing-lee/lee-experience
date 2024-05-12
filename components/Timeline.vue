<template>
    <div @click="navigateTo(navigate)">
        <div v-if="date" class="ps-2 my-2 first:mt-0">
            <h3 class="text-xs font-medium uppercase text-gray-500">
                {{ date }}
            </h3>
        </div>
        <div
            class="flex gap-x-3 rounded-md"
        >
            <div
                class="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200"
            >
                <div
                    class="relative z-10 size-7 flex justify-center items-center"
                >
                    <div class="size-2 rounded-full bg-gray-400"></div>
                </div>
            </div>
            <div class="grow pt-0.5 mb-4 hover:scale-105 hover:cursor-pointer hover:bg-sky-500/[.2] hover:p-2 ease-in-out duration-300 ">
                <h3 class="flex gap-x-1.5 font-semibold text-gray-800">
                    {{ title }}
                </h3>
                <p
                    v-if="description != ''"
                    class="mt-1 text-sm text-gray-600"
                >
                    {{ description }}
                </p>
            </div>
        </div>
    </div>
</template>
<script setup>
defineProps({ date: String, title: String, description: String, navigate: String });
</script>

<template>
    <Popover class="relative">
        <PopoverButton
            class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
        >
            {{ name }}
            <ChevronDownIcon
                class="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
            />
        </PopoverButton>

        <transition
            enter-active-class="transition ease-out duration-200"
            enter-from-class="opacity-0 translate-y-1"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 translate-y-1"
        >
            <PopoverPanel
                class="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"
            >
                <div class="p-4">
                    <div
                        v-for="item in lists"
                        :key="item.name"
                        class="group cursor-pointer relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                        <div v-if="item.img"
                            class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
                        >
                            <img :src="item.img" />
                        </div>
                        <div class="flex-auto">
                            <a
                                @click="navigateTo(item.href)"
                                class="block font-semibold text-gray-900"
                            >
                                {{ item.name }}
                                <span class="absolute inset-0" />
                            </a>
                            <p class="mt-1 text-gray-600">
                                {{ item.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </PopoverPanel>
        </transition>
    </Popover>
</template>

<script setup>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";
defineProps({ name: String, lists: Array });
</script>

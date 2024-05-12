<template>
    <div class="bg-white">
        <nav
            class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 lg:justify-center"
            aria-label="Global"
        >
            <div class="flex lg:hidden">
                <a class="-m-1.5 p-1.5">
                    <span>李昱興 (Jimmy)</span>
                </a>
            </div>
            <div class="flex lg:hidden">
                <button
                    type="button"
                    class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    @click="mobileMenuOpen = true"
                >
                    <span class="sr-only">Open main menu</span>
                    <Bars3Icon class="h-6 w-6" aria-hidden="true" />
                </button>
            </div>
            <PopoverGroup class="hidden lg:flex lg:gap-x-12">
                <a
                    href="#"
                    class="text-sm font-semibold leading-6 text-gray-900"
                    >自我介紹</a
                >
                <PopoverList name="工作經歷" :lists="works" class="z-20" />
                <PopoverList name="個人專案" :lists="projects" class="z-20" />
                <a
                    href="#"
                    class="text-sm font-semibold leading-6 text-gray-900"
                    >聯絡方式</a
                >
            </PopoverGroup>
        </nav>
        <Dialog
            class="lg:hidden"
            :open="mobileMenuOpen"
            @close="mobileMenuOpen = false"
        >
            <div class="fixed inset-0 z-10" />
            <DialogPanel
                class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
            >
                <div class="flex items-center justify-between">
                    <a class="-m-1.5 p-1.5">
                        <span>李昱興 (Jimmy)</span>
                    </a>
                    <button
                        type="button"
                        class="-m-2.5 rounded-md p-2.5 text-gray-700"
                        @click="mobileMenuOpen = false"
                    >
                        <span class="sr-only">Close menu</span>
                        <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div class="mt-6 flow-root">
                    <div class="-my-6 divide-y divide-gray-500/10">
                        <div class="space-y-2 py-6">
                            <a
                                href="#"
                                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >自我介紹</a
                            >
                            <Disclosure
                                v-slot="{ open }"
                                as="div"
                                class="-mx-3"
                            >
                                <DisclosureButton
                                    class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    工作經歷
                                    <ChevronDownIcon
                                        :class="[
                                            open ? 'rotate-180' : '',
                                            'h-5 w-5 flex-none',
                                        ]"
                                        aria-hidden="true"
                                    />
                                </DisclosureButton>
                                <DisclosurePanel class="mt-2 space-y-2">
                                    <DisclosureButton
                                        v-for="item in works"
                                        :key="item.name"
                                        as="a"
                                        :href="item.href"
                                        class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >{{ item.name }}</DisclosureButton
                                    >
                                </DisclosurePanel>
                            </Disclosure>
                            <Disclosure
                                v-slot="{ open }"
                                as="div"
                                class="-mx-3"
                            >
                                <DisclosureButton
                                    class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    個人專案
                                    <ChevronDownIcon
                                        :class="[
                                            open ? 'rotate-180' : '',
                                            'h-5 w-5 flex-none',
                                        ]"
                                        aria-hidden="true"
                                    />
                                </DisclosureButton>
                                <DisclosurePanel class="mt-2 space-y-2">
                                    <DisclosureButton
                                        v-for="item in projects"
                                        :key="item.name"
                                        as="a"
                                        :href="item.href"
                                        class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >{{ item.name }}</DisclosureButton
                                    >
                                </DisclosurePanel>
                            </Disclosure>
                            <a
                                href="#"
                                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >聯絡方式</a
                            >
                        </div>
                    </div>
                </div>
            </DialogPanel>
        </Dialog>
    </div>
</template>

<script setup>
import { ref } from "vue";
import {
    PopoverGroup,
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from "@headlessui/vue";
import {
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    XMarkIcon,
} from "@heroicons/vue/24/outline";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";

const works = [
    {
        name: "高雄科技大學 人工智慧產業化應用研究中心",
        description: "軟體工程師",
        href: "#",
        img: "./nkust.png",
    },
    {
        name: "博睿科技股份有限公司",
        description: "前端工程師",
        href: "#",
        img: "./brilltek.png",
    },
    {
        name: "翔威國際股份有限公司",
        description: "MIS工程師",
        href: "#",
        img: "./shinewave.gif",
    },
];

const projects = [
    {
        name: "線上影像處理平台",
        description: "",
        href: "#",
        img: "",
    },
    {
        name: "蛋捲訂購網頁",
        description: "",
        href: "#",
        img: "",
    },
    {
        name: "line bot爬蟲應用",
        description: "",
        href: "#",
        img: "",
    },
];

const mobileMenuOpen = ref(false);
</script>

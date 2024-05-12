<template>
    <div class="flex justify-around items-center mt-6">
        <img src="/man.png" class="w-80" />
        <div class="text-center">
            <p class="text-2xl font-bold mb-2">關於我</p>
            <ul>
                <li>有獨立開發和團隊合作的經驗</li>
                <li>擅長系統架構設計與開發</li>
                <li>擅長影像演算法</li>
                <li>具有服務容器化的經驗</li>
            </ul>
        </div>
        <div class="w-80">
            <div v-for="work in works">
                <div v-if="work.date" class="ps-2 my-2 first:mt-0">
                    <h3 class="text-xs font-medium uppercase text-gray-500">
                        {{ work.date }}
                    </h3>
                </div>
                <div
                    class="flex gap-x-3 hover:scale-105 hover:cursor-pointer hover:bg-sky-500/[.2] ease-in-out duration-300 rounded-md"
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
                    <div class="grow pt-0.5 pb-6">
                        <h3 class="flex gap-x-1.5 font-semibold text-gray-800">
                            {{ work.title }}
                        </h3>
                        <p
                            v-if="work.description != ''"
                            class="mt-1 text-sm text-gray-600"
                        >
                            {{ work.description }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
let works = [
    {
        date: "現在",
        title: "高雄科技大學-人工智慧產業化應用研究中心",
        description: "軟體工程師",
    },
    {
        date: "2021/07",
        title: "研究所畢業",
        description: "",
    },
    {
        date: "2020/04",
        title: "博睿科技股份有限公司",
        description: "前端開發工程師，接案性質",
    },
    {
        date: "2019/06",
        title: "大學畢業",
        description: "",
    },
    {
        date: "2019/06",
        title: "翔威國際股份有限公司",
        description: "MIS實習工程師",
    },
];
</script>

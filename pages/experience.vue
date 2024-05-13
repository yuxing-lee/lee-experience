<template>
    <div>
        <div class="flex w-full h-40 justify-center items-center lg:h-96">
            <p class="text-xl lg:text-5xl">
                高雄科技大學 - 人工智慧產業化應用研究中心
            </p>
        </div>
        <div
            class="grid grid-cols-1 gap-4 container mx-auto px-4 lg:grid-cols-3"
        >
            <InfoBox
                v-for="project in projects"
                :title="project.title"
                :description="project.description"
                :tag="project.tag"
            />
        </div>
    </div>
</template>

<script setup>
let projects = [
    {
        title: "車流辨識系統",
        description:
            "能夠在不同環境下進行車流追蹤與辨識，並針對不同場域快速搭建車流系統",
        tag: "",
    },
    {
        title: "車流管理系統",
        description: "收集各節點端資料，進行圖形化的管理，監控當前節點運作狀態",
        tag: "",
    },
    {
        title: "5G OAM平台",
        description:
            "視覺化及管理介面前後端開發，使用簡單的介面操作，即可快速建構5G網路及管理",
        tag: "",
    },
];
</script>

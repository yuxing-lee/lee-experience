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
        <hr id="5gc" class="my-8 lg:my-16" />
        <div>
            <div class="flex w-full h-20 justify-center items-center lg:h-24">
                <p class="text-xl lg:text-4xl">5G OAM平台</p>
            </div>
            <div class="flex w-full h-20 justify-center items-center lg:h-24">
                <p class="text-xl lg:text-4xl">主要貢獻</p>
            </div>
            <div
                class="grid grid-cols-1 gap-4 container mx-auto px-4 lg:grid-cols-3"
            >
                <InfoBox
                    v-for="feature in fiveGCFeatures"
                    :title="feature.title"
                    :description="feature.description"
                />
            </div>
            <div class="flex w-full h-20 justify-center items-center lg:h-24">
                <p class="text-xl lg:text-4xl">示意圖</p>
            </div>
            <Carousel :imgs="imgs"></Carousel>
        </div>
    </div>
</template>

<script setup>
let projects = [
    {
        title: "車流辨識系統",
        description:
            "能夠在不同環境下進行車流追蹤與辨識，並針對不同場域快速搭建車流系統",
        tag: "traffic",
    },
    {
        title: "車流管理系統",
        description: "收集各節點端資料，進行圖形化的管理，監控當前節點運作狀態",
        tag: "",
    },
    {
        title: "5G OAM平台",
        description:
            "視覺化及管理介面前後端開發，使用UI介面操作，即可快速建構5G網路及管理",
        tag: "5gc",
    },
];

let fiveGCFeatures = [
    {
        title: "熟悉5G protocol與open source",
        description:
            "了解5GC並修改open source中與資料庫串接的程式碼，將原先的NoSQL改為RDBMS，並且加入Cell/UE群組功能",
    },
    {
        title: "容器化應用",
        description:
            "將open source容器化，並透過平台設定參數來啟動容器，並監控各容器的運作狀態",
    },
    {
        title: "系統管理",
        description:
            "視覺化及管理介面前後端開發，實作使用者操作介面，進行系統管理",
    },
];

let imgs = [
    "./5gc/Dashboard.png",
    "./5gc/Account.png",
    "./5gc/AlertRule.png",
    "./5gc/AlertMailRule.png",
    "./5gc/Event.png",
    "./5gc/Systemlog.png",
    "./5gc/Activitylog.png",
    "./5gc/Network.png",
    "./5gc/Timezone.png",
    "./5gc/Mail.png",
    "./5gc/System.png",
];
</script>

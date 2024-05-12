<template>
    <div class="flex flex-col justify-around items-center mt-6 lg:flex-row">
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
            <Timeline
                v-for="work in works"
                :date="work.date"
                :title="work.title"
                :description="work.description"
                :navigate="work.navigate"
            >
            </Timeline>
        </div>
    </div>
</template>

<script setup>
let works = [
    {
        date: "現在",
        title: "高雄科技大學-人工智慧產業化應用研究中心",
        description: "軟體工程師",
        navigate: "/experience",
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

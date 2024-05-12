<template>
    <div class="flex justify-around items-center w-full">
        <Timeline
            class="duration-300 ease-in origin-right"
            :class="{ 'opacity-0': !visible }"
            title="高雄科技大學-人工智慧產業化應用研究中心"
            description="軟體工程師"
        ></Timeline>
        <div class="duration-1000 ease-in" :class="{ 'opacity-0': !visible }">
            詳細資訊
        </div>
    </div>
</template>

<script setup>
let visible = ref(false);

setTimeout(() => {
    visible.value = true;
}, 200);
</script>

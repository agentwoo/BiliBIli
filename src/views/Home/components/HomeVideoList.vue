<script setup lang="ts">
import { ref } from 'vue'
import AppVideoItem from '../../../components/AppVideoItem.vue';
import axios from 'axios'

interface IVideoItem {
    commentCount: string,
    desc: string,
    id: string,
    imgSrc: string,
    link: string,
    playCount: string,
    videoSrc: string
}

let list = ref<IVideoItem[]>([])

axios({
    url: '/videosList',
    method: 'get'
}).then(res => {
    // console.log(res.data);
    list.value = res.data.result
})

// console.log(list);

// 视频列表
</script>
<template>
    <div class="videoList">
        <AppVideoItem v-for="item in list" :key="item.id" :video="item"></AppVideoItem>
    </div>
</template>
<style scoped lang="scss">
.videoList {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
</style>
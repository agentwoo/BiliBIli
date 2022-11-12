<script setup lang="ts">
// 轮播
import axios from 'axios'
import { ref } from 'vue'

interface ISwiper {
    link: string,
    imgSrc: string
}

let list = ref<ISwiper[]>()

axios({
    url: '/swiperList',
    method: 'get'
}).then(res => {
    // 获取轮播图
    // console.log(res.data.result);
    list.value = res.data.result
})


</script>

<template>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in list" :key="item.imgSrc" class="swiper">
            <img :src="item.imgSrc" alt="轮播图">
        </van-swipe-item>
    </van-swipe>
</template>

<style scoped lang="scss">
.swiper {
    img {
        width: 100vw;
    }
}
</style>
<script setup lang="ts">
// 首页
import AppHeader from '../../components/AppHeader.vue';
import HomeChannel from './components/HomeChannel.vue';
import HomeSwiper from './components/HomeSwiper.vue';
import HomeVideoList from './components/HomeVideoList.vue';


</script>
<template>
    <!-- 首页131213132 -->
    <!-- <RouterLink to="/video">点我去视频详情页</RouterLink> -->
    <!-- 头部 -->
    <AppHeader></AppHeader>
    <!-- 频道 -->
    <HomeChannel></HomeChannel>
    <!-- 轮播 -->
    <HomeSwiper></HomeSwiper>
    <!-- 视频列表 -->
    <HomeVideoList></HomeVideoList>

</template>
<style scoped lang="scss">

</style>
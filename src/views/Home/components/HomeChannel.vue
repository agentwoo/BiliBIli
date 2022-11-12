<script setup lang="ts">
// 频道选项卡
import { ref } from 'vue'
import axios from 'axios'

const active = ref(0)

interface INavItem {
    id: string,
    text: string
}

let list = ref<INavItem[]>()

axios({
    url: '/navList',
    method: 'get'
}).then(res => {
    // 获取标签内容
    // console.log(res.data.result);
    list.value = res.data.result
})

</script>
<template>
    <van-tabs v-model:active="active">
        <van-tab v-for="item in list" :key="item.id" :title="item.text"></van-tab>
    </van-tabs>
</template>
<style scoped lang="scss">

</style>       
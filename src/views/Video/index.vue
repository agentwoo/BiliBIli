<script setup lang="ts">
// 视频详情页
import axios from 'axios'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

import AppHeader from '../../components/AppHeader.vue';
import AppVideoItem from '../../components/AppVideoItem.vue';


//视频
interface IVideoDetail {
    author: string,
    authorIconSrc: string,
    commentCount: number,
    date: string,
    favCount: string,
    id: string,
    likeCount: string,
    playCount: string,
    poster: string,
    videoSrc: string,
    videoTitle: string
}
let videoDetail = ref<IVideoDetail>()
const route = useRoute()
axios({
    url: `/videoDetail?id=${route.params.id}`,
    method: 'get'
}).then(res => {
    // console.log(res.data.result);
    videoDetail.value = res.data.result
})

// 滑块
let active = ref(0)

// 推荐
interface IVideoItem {
    commentCount: string,
    desc: string,
    id: string,
    imgSrc: string,
    link: string,
    playCount: string,
    videoSrc: string
}
let recommendList = ref<IVideoItem[]>([])
axios({
    url: '/recommendList',
    method: 'get'
}).then(res => {
    // console.log(res.data);
    recommendList.value = res.data.result
})

//评论
interface ICommend {
    avatar: string,
    content: string,
    date: string,
    id: string,
    username: string
}
let commend = ref<ICommend[]>([])
axios({
    url: '/commentsList',
    method: 'get'
}).then(res => {
    // console.log(res.data.result.items);
    commend.value = res.data.result.items
})

</script>
<template>
    <!-- 头部 -->
    <AppHeader></AppHeader>
    <!-- 视频及详情展示 -->
    <div class="video">
        <video :src="videoDetail?.videoSrc" :poster="videoDetail?.poster" controls></video>
    </div>
    <div class="videoInfo">
        <div>{{ videoDetail?.videoTitle }}</div>
        <div class="videoInfoBottom">
            <div class="user">
                <img :src="videoDetail?.authorIconSrc" alt="">
                <div>{{ videoDetail?.author }}</div>
            </div>
            <div class="videoData">
                <div>{{ videoDetail?.playCount }}观看</div>
                <div>{{ videoDetail?.likeCount }}</div>
                <div>{{ videoDetail?.favCount }}</div>
            </div>
        </div>
    </div>
    <!-- 底部推荐及评论 -->
    <div class="bottom">
        <van-tabs v-model:active="active">
            <van-tab title="推荐">
                <div class="recommend">
                    <AppVideoItem v-for="item in recommendList" :key="item.id" :video="item"></AppVideoItem>
                </div>
            </van-tab>
            <van-tab title="评论">
                <div class="commend" v-for="item in commend" :key="item.id">
                    <div class="user">
                        <img :src="item.avatar" alt="">
                        <div class="user-item">
                            <div>{{ item.username }}</div>
                            <div>{{ item.date }}</div>
                        </div>
                    </div>
                    <div class="content">{{ item.content }}</div>
                </div>
            </van-tab>
        </van-tabs>
    </div>
</template>
<style scoped lang="scss">
.video {
    video {
        width: 100vw;
        height: 36vh;
    }
}

.videoInfo {
    width: 94vw;
    height: 12vh;
    // border: 1px solid red;
    margin-top: 1vh;
    padding: 2vw;
    font-size: 4vw;
    font-weight: 600;

    .videoInfoBottom {
        display: flex;
        justify-content: space-between;
        margin-top: 2vh;
        font-size: 3vw;
        font-weight: 300;

        .user {
            display: flex;

            img {
                border-radius: 50%;
                width: 6vw;
            }
        }

        .videoData {
            display: flex;
            color: gray;

            div {
                margin-right: 3vw;
            }
        }
    }
}

.bottom {
    .recommend {
        display: flex;
        flex-wrap: wrap;
    }

    .commend {
        // border: 1px solid red;
        width: 100vw;
        height: 14vh;
        padding: 2vw;
        overflow: hidden;

        .user {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            font-size: 1vw;
            color: gray;

            img {
                width: 4vh;
                border-radius: 50%;
            }

            .user-item {
                margin-left: 2vw;
            }
        }

        .content {
            width: 85vw;
            margin-left: 5vh;
            font-size: 3vw;
            margin-top: 2vh;
        }
    }
}
</style>
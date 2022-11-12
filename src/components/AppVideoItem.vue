<script setup lang="ts">
// 视频页

import { PropType } from 'vue';
import { RouterLink } from 'vue-router';

interface IVideoItem {
    commentCount?: string,
    desc?: string,
    id?: string,
    imgSrc?: string,
    link?: string,
    playCount?: string,
    videoSrc?: string
}

//接收父组件传值
defineProps({
    video: {
        type: Object as PropType<IVideoItem>,
        require: true
    }
})


</script>

<template>
    <RouterLink :to="`/video/${video?.id}`">
        <div class="box">
            <div class="card">
                <div class="picture">
                    <!-- <img src="../assets/images/bg.png" alt=""> -->
                    <img :src="video?.imgSrc" alt="">
                </div>
                <div class="count">
                    <div class="click">
                        <img src="../assets/images/default.png" alt="">
                        {{ video?.playCount }}
                    </div>
                    <div class="make">
                        <img src="../assets/images/default.png" alt="">
                        {{ video?.commentCount }}
                    </div>
                </div>
            </div>
            <p>
                {{ video?.desc }}
            </p>
        </div>
    </RouterLink>
</template>

<style scoped lang="scss">
.box {
    width: 45vw;
    height: 19vh;
    // border: 1px solid red;ss
    padding: 2vw;
    overflow: hidden;
    margin-bottom: 1vh;

    .card {
        width: 45vw;
        height: 30vh;

        .picture {
            img {
                width: 45vw;
                height: 15vh;
            }
        }

        .count {
            display: flex;
            justify-content: space-between;
            font-size: 7px;
            color: white;
            margin-top: -3vh;

            img {
                width: 3vw;
            }
        }
    }

    p {
        font-size: 8px;
        margin-top: -14vh;
        color: black;
    }
}
</style>
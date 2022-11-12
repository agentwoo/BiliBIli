<script setup lang="ts">

</script>
<template>
    <div class="header">
        <!-- logo -->
        <div class="logo">
            <a href="#">
                <img src="../assets/images/logo.png" alt="">
            </a>
        </div>
        <div class="right">
            <!-- search -->
            <div>
                <a href="#">
                    <img src="../assets/images/default.png" alt="">
                </a>
            </div>
            <!-- login -->
            <div>
                <a href="#">
                    <img src="../assets/images/login.png" alt="">
                </a>
            </div>
            <!-- download -->
            <div class="download">
                <div>下载 App</div>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
.header {
    display: flex;
    justify-content: space-between;

    .logo {
        img {
            height: 6vh;
        }
    }

    .right {
        display: flex;
        justify-content: flex-end;

        div {
            margin-left: 2vw;
            margin-top: 2vh;

            img {
                height: 25px;
            }
        }

        .download {
            div {
                width: 22vw;
                height: 5vh;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 8px;
                background-color: #FB7299;
                color: white;
                margin-top: -1vh;
                margin-right: 2vw;
            }
        }


    }
}
</style>
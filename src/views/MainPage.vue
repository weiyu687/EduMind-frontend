<template>
    <div class="card-application">
        <div class="app-card">
            <el-card style="max-width: 480px;height: 30vh;cursor: pointer;" shadow="hover" @click="click_card(0)">
                <el-image style="width: 16.8vw; height: 15vh" src="http://0.0.0.0:8000/imgs/lesson_plan.png" :fit="fit" />
                <div class="app-name">教案撰写助手</div>
                <div class="app-introduce">案撰写助手是一款专为教育工作者设计的智能工具，旨在简化教案创建过程。</div>
            </el-card>
        </div>
        <div class="app-card">
            <el-card style="max-width: 480px;height: 30vh;cursor: pointer;" shadow="hover" @click="click_card(1)">
                <el-image style="width: 16.8vw; height: 15vh" src="http://0.0.0.0:8000/imgs/lesson_plan.png" :fit="fit" />
                <div class="app-name">数字人课程生成</div>
                <div class="app-introduce">根据上传的PPT生成数字人讲解视频，可指定形象和语音风格。</div>
            </el-card>
        </div>
        <div class="app-card">
            <el-card style="max-width: 480px;height: 30vh;cursor: pointer;" shadow="hover">
                课程大纲
            </el-card>
        </div>
        <div class="app-card">
            <el-card style="max-width: 480px;height: 30vh;cursor: pointer;" shadow="hover">
                教学内容
            </el-card>
        </div>
        <div class="app-card-top">
            <el-card style="max-width: 480px;height: 30vh;cursor: pointer;" shadow="hover">
                ...
            </el-card>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function click_card(index){
    if(index === 0)
        router.push({ path: `/design` })
    if(index === 1)
        router.push({ path: `/digital-human` })
}
</script>

<style scoped>
.card-application{
    display: flex;
    flex-wrap: wrap;
    height: 100%;
}
.app-card{
    width: 19vw;
    margin-right: 28px;
}
.app-card-top{
    width: 19vw;
    margin-right: 28px;
    position: relative;
    top: -5vh;
}
.app-name{
    color: black;
    margin-top: 1.5vh;
}
.app-introduce{
    color: rgb(115.2, 117.6, 122.4);
    font-size: 14px;
    margin-top: 1vh;
}
</style>
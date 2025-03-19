<template>
    <div class="card-application">
        <div class="app-card">
            <el-card style="max-width: 480px;height: 30vh;cursor: pointer;" shadow="hover" @click="click_card(0)">
                <el-image style="width: 16.8vw; height: 15vh" src="http://0.0.0.0:8000/imgs/lesson_plan.png" :fit="fit" />
                <div class="app-name">PPT生成助手</div>
                <div class="app-introduce">PPT生成助手是为教育工作者设计的智能工具，旨在自动化创建演示文稿的过程。</div>
            </el-card>
        </div>
        <div class="app-card">
            <el-card style="max-width: 480px;height: 30vh;cursor: pointer;" shadow="hover">
                教学设计
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
function click_card(index){
    if(index === 0)
        window.location.href = 'https://www.google.com.hk/';
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
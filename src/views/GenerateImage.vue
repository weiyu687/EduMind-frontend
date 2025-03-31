<template>
    <div class="container">
        <div class="input-container">
            <el-input v-model="input" style="max-width: 800px" placeholder="请输入要生成图像的描述"></el-input>
            <el-button style="margin-left: 10px;" type="primary" @click="generate_image">生成</el-button>
        </div>
        <div class="image-container">
            <el-image :src="src" style="width: 30vw;height: 50vh;"></el-image>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useHttp } from '../utils/useHttp'
import { ElNotification } from 'element-plus';

const { post } = useHttp();
const src = ref('')
const input = ref('')

function generate_image(){
    post("http://0.0.0.0:8002/image/generate", {
        text:input.value
    })
        .then(res => {
            src.value = res['image_url']
        }).catch(err => {
            ElNotification.error({
                title: '错误',
                message: `图像生成失败: ${err.message}`,
            });
        });
}
</script>

<style scoped>
.container {
    background-color: #fff;
    width: 100%;
    height: 100%;
    border-radius: 4px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.input-container {
    margin-right: 10vw;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
</style>
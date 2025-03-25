<template>
    <div class="practice-container">
        <div class="input-area">
            <div class="upload-pptx-container">
                <div style="font-size: 14px;">
                    上传PPT
                </div>
                <el-upload class="upload-btn" action="http://localhost:8001/practice/upload/ppt"
                    :before-upload="beforeUpload" :on-success="handleSuccess" :on-error="handleError"
                    :show-file-list="false" accept=".pptx">
                    <el-button type="primary" style="width: 120px; height: 25px; margin-left: 1vw;">
                        Upload<el-icon class="el-icon--right">
                            <Upload />
                        </el-icon>
                    </el-button>
                </el-upload>
                <div class="filename">
                    {{ filename }}
                </div>
            </div>
            <div class="question-num-container">
                <div class="question-container">
                    <div class="question-label">
                        单选题
                    </div>
                    <el-input-number v-model="scq_num" :min="1" :max="10" @change="handleSCQNumChange" size="small"
                        style="margin-left: 23px;" />
                </div>
                <div class="question-container">
                    <div class="question-label">
                        多选题
                    </div>
                    <el-input-number v-model="mcq_num" :min="1" :max="10" @change="handleMCQNumChange" size="small"
                        style="margin-left: 23px;" />
                </div>
                <div class="question-container">
                    <div class="question-label">
                        判断题
                    </div>
                    <el-input-number v-model="tof_num" :min="1" :max="10" @change="handleTOFNumChange" size="small"
                        style="margin-left: 23px;" />
                </div>
                <div class="question-container">
                    <div class="question-label">
                        简答题
                    </div>
                    <el-input-number v-model="sa_num" :min="1" :max="10" @change="handleSANumChange" size="small"
                        style="margin-left: 23px;" />
                </div>
            </div>
            <el-button type="success" style="width: 120px; height: 25px;margin-top: 2vh;"
                @click="generate_practice">生成题目</el-button>
        </div>
        <div class="output-area" v-loading="loading">
            <div v-if="loading===false" class="questions-json">
                {{ questions }}
            </div>
        </div>
        <div class="view-area">
            <div>
                检测到
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useHttp } from '../utils/useHttp'
import { ElNotification } from 'element-plus';

const { post } = useHttp();

const uploadMessage = ref('');
const filename = ref('');
const saved_filename = ref('')
const scq_num = ref(1);
const mcq_num = ref(1);
const tof_num = ref(1);
const sa_num = ref(1);
const questions = ref('');

const loading = ref(false);

function beforeUpload(file) {
    filename.value = file.name
    const isPPTX = file.name.endsWith('.pptx');
    if (!isPPTX) {
        ElNotification.error({
            title: '错误',
            message: '上传文件格式不是PPTX',
        });
    }
    return isPPTX;
}

function handleSuccess(response, file) {
    uploadMessage.value = `文件 ${file.name} 成功上传`;
    ElNotification.success({
        title: '成功',
        message: `${file.name} 上传成功`,
    });
    saved_filename.value = response.filename
}

function handleError(error, file) {
    uploadMessage.value = `文件 ${file.name} 上传失败`;
    ElNotification.error({
        title: '错误',
        message: `${file.name} 上传失败: ${error.message}`,
    });
}

function handleSCQNumChange(num) {
    scq_num.value = num
}

function handleMCQNumChange(num) {
    mcq_num.value = num
}

function handleTOFNumChange(num) {
    tof_num.value = num
}

function handleSANumChange(num) {
    sa_num.value = num
}

function generate_practice() {
    loading.value = true
    questions.value = ''

    post("http://0.0.0.0:8001/practice/ppt/generate", {
        scq_num: scq_num.value,
        mcq_num: scq_num.value,
        tof_num: scq_num.value,
        sa_num: scq_num.value,
        pptx_filename: saved_filename.value
    })
        .then(res => {
            questions.value = res
            loading.value = false
        }).catch(err => {
            loading.value = false
            ElNotification.error({
                title: '错误',
                message: `练习题生成失败: ${err.message}`,
            });
        });
}
</script>


<style scoped>
.practice-container {
    display: flex;
    flex-direction: row;
    height: 100%;
    background-color: #fff;
    border-radius: 10px;
}

.input-area {
    flex: 1;
    background-color: #fefcff;
    border-radius: 10px 0 0 10px;
    border-right: solid #F2F3F5 4px;
    padding: 20px;
}

.upload-pptx-container {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.filename {
    margin-left: 1vw;
    font-size: 14px;
    color: #67C23A;
}

.question-num-container {
    display: flex;
    flex-direction: column;
}

.question-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 2vh;
}

.output-area {
    flex: 1;
    border-right: solid #F2F3F5 4px;
}

.view-area {
    flex: 1;
}
</style>
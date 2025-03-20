<template>
    <div class="practice-container">
        <div class="input-area">
            <div class="upload-pptx-container">
                <div style="font-size: 14px;">
                    上传PPT
                </div>
                <el-upload class="upload-btn" action="http://localhost:8001/practice/upload/ppt" :before-upload="beforeUpload"
                    :on-success="handleSuccess" :on-error="handleError" :show-file-list="false" accept=".pptx">
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
        </div>
        <div class="output-area">
            222
        </div>
        <div class="view-area">
            333
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { ElNotification } from 'element-plus';

const uploadMessage = ref('');

const filename = ref('');

function beforeUpload(file) {
    filename.value  = file.name
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
}

function handleError(error, file) {
    uploadMessage.value = `文件 ${file.name} 上传失败`;
    ElNotification.error({
        title: '错误',
        message: `${file.name} 上传失败: ${error.message}`,
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
    border-radius: 10px;
}

.upload-pptx-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 20px;
}
.filename{
    margin-left: 1vw;
    font-size: 14px;
    color: #67C23A;
}
.output-area {
    flex: 1;
    border-right: solid #F2F3F5 6px;
}

.view-area {
    flex: 1;
}

.show-ppt {
    display: flex;
    flex-direction: column;
}
</style>
<template>
  <div class="header">
    <div class="logo">EduMind</div>
    <div class="logo-text">
      新一代智能教师备课平台
    </div>
    <div class="header-container">
      <div class="link">
        <el-image style="width: 100px; height: 100px" :src="url_1"/>
        <div>智能教学</div>
      </div>
      <div class="link">
        <el-image style="width: 100px; height: 100px" :src="url_2"/>
        <div>插图生成</div>
      </div>
      <div class="link">
        <el-image style="width: 100px; height: 100px" :src="url_3"/>
        <div>练习题</div>
      </div>
      <div class="link">
        <el-image style="width: 100px; height: 100px" :src="url_4"/>
        <div>一键PPT</div>
      </div>
      <div class="link">
        <el-image style="width: 100px; height: 100px" :src="url_5"/>
        <div>数字人课程</div>
      </div>
    </div>
    <div class="info-container">
      <el-avatar :size="50" :src="circleUrl" />
      <div class="info-nickname-container">
        <div class="nickname">{{ nickname }}</div>
        <div class="authentication">
          教师认证
        </div>
      </div>
    </div>
  </div>
  <div class="subheader">

  </div>
  <div class="aside-main-container">
    <div class="aside">
      <div
        :class="['menu-item', { 'selected': selected_index === 0 }]" 
        @click="select_menu_index(0)"
      >
        <div style="position: relative;top: 3px;margin-right: 16px;">
          <el-icon><Management /></el-icon>
        </div>
        <div>
          教学设计
        </div>
      </div>
      <div
        :class="['menu-item', { 'selected': selected_index === 1 }]" 
        @click="select_menu_index(1)"
      >
        <div style="position: relative;top: 3px;margin-right: 16px;">
          <el-icon><PictureFilled /></el-icon>
        </div>
        <div>
          资源生成
        </div>
      </div>
      <div
        :class="['menu-item', { 'selected': selected_index === 2 }]" 
        @click="select_menu_index(2)"
      >
        <div style="position: relative;top: 3px;margin-right: 16px;">
          <el-icon><List /></el-icon>
        </div>
        <div>
          课堂练习
        </div>
      </div>
      <div
        :class="['menu-item', { 'selected': selected_index === 3 }]" 
        @click="select_menu_index(3)"
      >
        <div style="position: relative;top: 3px;margin-right: 16px;">
          <el-icon><TrendCharts /></el-icon>
        </div>
        <div>
          学情分析
        </div>
      </div>
      <div
        :class="['menu-item', { 'selected': selected_index === 4 }]" 
        @click="select_menu_index(4)"
      >
        <div style="position: relative;top: 3px;margin-right: 16px;">
          <el-icon><Briefcase /></el-icon>
        </div>
        <div>
          AI百宝箱
        </div>
      </div>
    </div>
    <div class="main">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import { Management,PictureFilled,Briefcase,List,TrendCharts } from '@element-plus/icons-vue';
import { useRouter } from 'vue-router'

const router = useRouter()

const url_1 = "http://0.0.0.0:8000/imgs/ai.png"
const url_2 = "http://0.0.0.0:8000/imgs/ai_12.png"
const url_3 = "http://0.0.0.0:8000/imgs/ai_office.png"
const url_4 = "http://0.0.0.0:8000/imgs/people_and_machine.png"
const url_5 = "http://0.0.0.0:8000/imgs/work.png"
const circleUrl = "http://0.0.0.0:8000/imgs/avatar.jpg"

const nickname = "冷夜无声"

const selected_index = ref(0)

function select_menu_index(index){
  selected_index.value = index
  if(index === 0){
    router.push({ path: `/` })
  }else if(index === 1){
    router.push({ path: `/resource` })
  }
}
</script>

<style scoped>
.header {
  height: 14vh;
  background: linear-gradient(to right, #409EFF, white);
  display: flex;
  align-items: center;
  flex-direction: row;
}
.logo{
  font-size: 28px;
  color: aliceblue;
  margin-left: 2vw;
  padding: 10px;
  border: solid;
}
.logo-text{
  margin-left: 8px;
  font-size: 18px;
  font-weight: 600;
  color: aliceblue;
}
.header-container{
  display: flex;
  flex-direction: row;
  margin-left: 4vw;
}
.link{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  color: aliceblue;
  margin: 3vw;
}
.info-container{
  margin-left: 8vw;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.info-nickname-container{
  display: flex;
  flex-direction: column;
  margin-left: 20px;
}
.nickname{
  font-size: 14px;
}
.authentication {
  font-size: 10px;
  color: #FFD700;
  font-weight: bold;
  padding: 2px 8px;
  border-radius: 4px;
  background-color: #333;
  margin-top: 2px;
}
.aside-main-container{
  display: flex;
  flex-direction: row;
  height: 80vh;
  background-color: #F2F3F5;
}
.subheader{
  height: 4vh;
  background-color: rgb(235.9, 245.3, 255);
}
.aside{
  flex: 1;
  padding: 12px;
  margin: 10px;
  background-color: #fff;
  border-radius: 8px;
}
.main{
  flex: 6;
  background-color: #F2F3F5;
  margin: 10px;
  overflow-y: auto;
}
.menu-item{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: rgb(115.2, 117.6, 122.4);
  font-size: 16px;
  height: 5vh;
  border-radius: 5px;
}
.menu-item:hover{
  cursor: pointer;
  background-color: rgb(216.8, 235.6, 255);
}
.selected{
  background-color: rgb(216.8, 235.6, 255);
  color: #409EFF;
}
</style>

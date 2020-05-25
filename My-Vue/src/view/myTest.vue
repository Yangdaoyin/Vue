<template>
<div>
  <yang-head-page></yang-head-page>
  <div align="center" class="yang-login-footer">
    <div class="yang-login-foot">
      <el-form align="center" class="yang-login-form">
        <el-form-item label-width="80px" style="margin-top: -10px">
          <div class="icon-point-right" style="color: ghostwhite; font-family: 仿宋; font-size: 25px" >我的项目</div>
        </el-form-item>
        <el-row style="margin-top: -10px">
          <el-col :span="10">
            <el-input prefix-icon="iconfont 30px icon-user" type="text" style="width: 250px; margin-left: 60px; font-size: 20px" v-model="content">
            </el-input>

<!--            </el-form-item>-->
          </el-col>
        </el-row>
        <el-row align="center">
          <el-col :span="10">
              <el-input prefix-icon="iconfont 30px icon-lock" type="text" style="width: 250px; margin-left: 60px; font-size: 20px" v-model="content"></el-input>
          </el-col>
        </el-row>
        <el-row align="center">
          <el-col :span="10">
            <el-form-item prop="content1" style="color: red" label-width="60px">
              <el-button @click="handleLogin" style="width: 250px; font-family: 仿宋; font: bold; font-size: 16px; margin-top: 10px">登录</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</div>
</template>

<script>
  import { submitAPI } from '../api/myTest.js'
  import img from '../assets/logo.png'
  import '../assets/css/index.css'
  import YangHeadPage from "../components/yang-head-page";
  export default {
    components: {YangHeadPage},
    data () {
      return {
        imgUrl: img,
        content: '', // 内容
      }
    },
    methods: {
      handleLogin () {
        this.$router.push({path: 'USERFORM'})
      }
    }
  }
</script>

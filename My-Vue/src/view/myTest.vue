<template>
    <div align="center" class="yang-login-footer">
        <div class="yang-login-foot">
          <el-form align="center" class="yang-login-form">
            <el-form-item label-width="80px" style="margin-top: -50px">
              <p style="color: ghostwhite; font-family: 仿宋; font-size: 25px">缓释管理系统</p>
            </el-form-item>
            <el-row style="margin-top: -30px">
              <el-col :span="10">
                <el-form-item label="用户名" class="yang-font" label-width="80px">
                  <el-input type="text"  style="width: 230px" v-model="content">
                  </el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row align="center">
              <el-col :span="10">
                <el-form-item label="密码"  class="yang-font" label-width="80px">
                  <el-input type="text" style="width: 230px" v-model="content">
                  </el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row align="center">
              <el-col :span="10">
                <el-form-item prop="content1" style="color: red" label-width="80px">
                  <el-button @click="handleSave" style="width: 230px; font-family: 仿宋; font-size: 15px;">登录</el-button>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
    </div>
</template>

<script>
  import { submitAPI } from '../api/myTest.js'
  import img from '../assets/logo.png'
  import '../assets/css/index.css'
  export default {
    data () {
      return {
        imgUrl: img,
        content: '', // 内容
      }
    },
    methods: {
      handleSave () {
        submitAPI ({
          params1: this.content
        })
        console.log(this.content)
      }
    }
  }
</script>

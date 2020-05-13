<template>
    <div>
      <el-form>
        <el-row>
          <el-col :span="12">
            <el-form-item prop="content" label="test" label-width="40px">
              <el-input type="textarea" v-model="content">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-button @click="handleSave" type="text">提交</el-button>
      </el-form>
    </div>
</template>

<script>
  import { submitAPI } from '../api/myTest.js'
  export default {
    data () {
      return {
        content: '' // 内容
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

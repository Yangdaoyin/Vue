<template>
  <divd>
    <div>
      <el-form>
        <el-row>
          <el-col :span="12">
            <el-form-item label="姓名" label-width="120px">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="性别" label-width="120px">
              <el-input></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div>
        <el-button @click="po">sdjfkdsf</el-button>
      </div>
    </div>
  </divd>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "userForm",
      methods: {
          po(){
            // var PSD = require('psd');
            axios({
              method:'post',
              url:'/mooc/getString',
              cache:false,
              params:{id:123},
              headers: {
                'Content-Type':'multipart/form-data'
              },
            }).then(res=>{

            })
          },
        rtest () {
          // let form = new window.FormData();
          // form.append('file', event.target.files[0])
          // form.append('token', this.userInfo.api_token)
          // axios.post(`${appConst.QA_DOMAIN}/psd`, form).then(res => {})
        }
      }
    }
</script>

<style scoped>

</style>

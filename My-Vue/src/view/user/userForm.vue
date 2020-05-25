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
    </div>
  </divd>
</template>

<script>
    export default {
        name: "userForm"
    }
</script>

<style scoped>

</style>

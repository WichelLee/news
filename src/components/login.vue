<template>
  <div class="bgbg">
    <div class="boxes">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
        status-icon
      >
        <h4>请登录</h4>
        <el-form-item label="用户名称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          <el-button @click="resetForm('ruleForm')">清空</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        pass: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 10, message: "长度在 3 到 10 个字符", trigger: "blur" }
        ],
        pass: [
          { required: true, message: "请输入用户密码", trigger: "blur" },
          { min: 3, max: 20, message: "长度在 3 到 20 个字符", trigger: "blur" }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          //   alert("submit!")
          this.$http
            .request({
              url: "/login",
              method: "post",
              data: {
                username: this.ruleForm.name,
                password: this.ruleForm.pass
              }
            })
            .then(data => {
              var { data, meta } = data
              if (meta.status == 200) {
                console.log(data.token)
                window.localStorage.setItem('token', data.token)
                this.$message({
                  message: "登陆成功",
                  type: "success"
                })
                this.$router.push('/mains')
              }
            })
        } else {
          this.$message({
            message: "登陆失败",
            type: "error"
          })
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html,
body,
#app {
  height: 100%;
  padding: 0;
}

.bgbg {
  background-color: #ccc;
  height: 100%;
  padding-top: 150px;
}
.boxes {
  height: 300px;
  width: 500px;
  text-align: center;
  margin: auto;
  padding: 30px;
  background-color: #fff;
}
</style>

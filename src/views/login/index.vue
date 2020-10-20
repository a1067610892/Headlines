<template>
  <div class="login-container">
    <!-- 标题 -->
    <van-nav-bar class="app-nav-bar" title="登陆" left-arrow @click-left="$router.back()"></van-nav-bar>
    <!-- 登陆表单 -->
    <van-cell-group>
      <van-field icon-prefix="icon" v-model="user.mobile" left-icon="shouji" placeholder="请输入手机号" />
      <van-field icon-prefix="icon" v-model="user.code" clearable left-icon="yanzhengma" placeholder="请输入验证码">
        <template #button>
          <van-button class="send-btn" size="small" round>获取验证码</van-button>
        </template>
      </van-field>
    </van-cell-group>
    <div class="login-btn-wrap"><van-button class="login-btn" type="info" block round @click="onLogin">登陆</van-button></div>
  </div>
</template>

<script>
import { login } from '@/api/user.js'
import { Toast } from 'vant'
export default {
  name: 'LoginIndex',
  data () {
    return {
      user: {
        /* 手机号 */
        mobile: '',
        /* 验证码 */
        code: ''
      }
    }
  },
  methods: {
    async onLogin () {
      Toast.loading({
        message: '登录中',
        forbidClick: true,
        duration: 0
      })
      try {
        const res = login(this.user)
        Toast.success('登录成功')
        console.log(res)
      } catch (err) {
        Toast.success('登录失败,手机号或验证码错误')
        console.log(err)
      }
    }
  }
}
</script>

<style lang="less">
.login-btn-wrap {
  margin: 30px 20px;
  .login-btn {
    background-color: #6db4fb;
    border:none;
    .van-button__text {
      font-size: 16px;
    }
  }
}
.send-btn {
    width: 100px;
    height: 30px;
    background-color: #ededed;
    .van-button__text {
      color: #666;
      font-size: 12px;
    }
  }
</style>

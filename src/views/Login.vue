<template>
  <div id="login">
    <van-nav-bar
        title="登录"
        right-text="注册"
        left-text="返回"
        @click-right="changeState"
        @click-left="goBack"
    />
    <van-form @submit="onSubmit" id="loginForm">
        <div class="title">
            <span>使用聚美账号登录</span>
        </div>
        <van-field
            v-model="username"
            name="username"
            placeholder="已注册的手机号/邮箱/用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
            v-model="password"
            type="password"
            name="password"
            placeholder="6-16位登录密码"
            :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px;">
            <van-button round block type="info" native-type="submit" color="#feb2c5">
            登录
            </van-button>
        </div>
    </van-form>
  </div>
</template>

<script>
export default {
    data() {
        return {
        username: '',
        password: '',
        };
    },
    methods: {
        changeState() {
            this.$router.push('/register')
        },
        goBack() {
            history.go(-1)
        },
        onSubmit(values) {
            console.log('submit', values);
            this.$axios.post('/api/app/login', {
                username : 'qwe',
                password : 123
            }).then(res => {
                console.log(res);
            }).catch(err => {
                console.log(err);
            })
        },
    },
}
</script>

<style>
    #loginForm {
        position: relative;
        width: 80%;
        margin: 0 10%;
    }

    #loginForm .title {
        text-align: center;
        margin: 0.1rem;
        color: #999;
    }

    #loginForm .title::before {
        content: '';
        font-size: 0px;
        border-bottom: solid 1px #f5f5f5;
        position: absolute;
        top: 0.07rem;     
        left: 0px;
        width: 100%;
        z-index: -1;
    }

    #loginForm .van-field__value {
        padding-bottom: 0.1rem;
    }

    #loginForm .van-field__body {
        border-radius: 0.25rem;
        background-color: #f5f5f5;
        padding: 0.1rem 0.2rem;
    }

    #loginForm .van-cell::after {
        border: none;
    }

    #loginForm .van-field__error-message {
        position: absolute;
        top: 0.4rem;
        left: 0.2rem;
    }
</style>
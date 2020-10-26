<template>
  <div id="register">
    <van-nav-bar
        title="注册"
        right-text="登录"
        left-text="返回"
        @click-right="changeState"
        @click-left="goBack"
    />
    <van-form @submit="onSubmit" id="registerForm">
        <div class="title">
            <span>使用手机号码注册</span>
        </div>
        <van-field
            v-model="username"
            name="username"
            placeholder="请输入11位手机号"
            :rules="[{ required: true, message: '请填写手机号' }]"
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
            注册
            </van-button>
        </div>
        <div class="reg-agree">
            点击注册表示同意 <a href="http://i.jumei.com/m/account/protocol">《聚美优品用户协议》</a>
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
            this.$router.push('/login')
        },
         goBack() {
            history.go(-1)
        },
        onSubmit(values) {
            console.log('submit', values);
            this.$axios.post('/api/users/register',{
                username : this.username,
                password : this.password,
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
    #registerForm {
        position: relative;
        width: 80%;
        margin: 0 10%;
    }

    #registerForm .title {
        text-align: center;
        margin: 0.1rem;
        color: #999;
    }

    #registerForm .van-cell {
        padding: 0.08rem 0;
    }

    #registerForm .title::before {
        content: '';
        font-size: 0px;
        border-bottom: solid 1px #f5f5f5;
        position: absolute;
        top: 0.07rem;     
        left: 0px;
        width: 100%;
        z-index: -1;
    }

    #registerForm .van-field__value {
        padding-bottom: 0.1rem;
    }

    #registerForm .van-field__body {
        border-radius: 0.25rem;
        background-color: #f5f5f5;
        padding: 0.05rem 0.2rem;
    }

    #registerForm .van-cell::after {
        border: none;
    }

    #registerForm .van-field__error-message {
        position: absolute;
        top: 0.35rem;
        left: 0.2rem;
    }

    #registerForm .reg-agree {
        text-align: center;
    }

    #registerForm .reg-agree a {
        color: #808080;
    }
</style>
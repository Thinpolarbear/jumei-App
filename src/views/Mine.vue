<template>
  <div id="mine">
    <header>
      <div class="left">
        <a href="javascript:history.go(-1);">&nbsp;</a>
      </div>
      <div class="center">我的聚美</div>
      <div class="right">
        <router-link to="/home"></router-link>
      </div>
    </header>
    <div class="content">
      <div class="user-unlogin">
        <div class="head-img"></div>
        <div class="operation">
          <router-link to="/register">注册</router-link>
          <span>|</span>
          <router-link to="/login">登录</router-link>
        </div>
      </div>

      <div class="order">
        <van-cell value="查看我的全部订单" is-link @click="toOrder">
          <template #title>
            <van-icon class="icon" name="balance-list-o" size="0.24rem" />
            <span class="custom-title">我的订单</span>
          </template>
        </van-cell>
        <van-grid>
          <van-grid-item icon="pending-payment" text="待付款" />
          <van-grid-item icon="send-gift-o" text="待收货" />
          <van-grid-item icon="comment-o" text="待评价" />
          <van-grid-item icon="after-sale" text="退款/退货" />
        </van-grid>
      </div>

      <div class="property">
        <van-cell>
          <template #title>
            <van-icon class="icon" name="balance-o" size="0.24rem"/>
            <span class="custom-title">我的资产</span>
          </template>
        </van-cell>
        <van-grid>
          <van-grid-item text="现金券" />
          <van-grid-item text="红包" />
          <van-grid-item text="聚美余额" />
          <van-grid-item text="礼品卡" />
        </van-grid>
      </div>

      <div class="varied">
        <van-cell is-link>
          <template #title>
            <van-icon class="icon" name="service-o" size=".24rem"/>
            <span class="custom-title">售后服务</span>
          </template>
        </van-cell>
        <van-cell is-link>
          <template #title>
            <van-icon class="icon" name="envelop-o" size=".24rem"/>
            <span class="custom-title">意见反馈</span>
          </template>
        </van-cell>
        <van-cell is-link>
          <template #title>
            <van-icon class="icon" name="logistics" size=".24rem"/>
            <span class="custom-title">收货地址</span>
          </template>
        </van-cell>
        <van-cell is-link>
          <template #title>
            <van-icon class="icon share" name="share-o" size=".24rem"/>
            <span class="custom-title">退出登录</span>
          </template>
        </van-cell>
        <van-cell is-link>
          <template #title>
            <van-icon class="icon" name="phone-o" size=".24rem"/>
            <span class="custom-title">400-123-8888</span>
          </template>
        </van-cell>
      </div>

      <div id="hint">
        客服热线400-123-8888 (9:00-18:00) <br>
        拨打前请记录您的UID
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toOrder() {
      console.log("to");
    }
  }
}
</script>

<style lang="scss">
  #mine {
    background: #f5f5f5;

    header {
      width: 100%;
      background: transparent;
      text-align: center;
      position: relative;
      height: .45rem;
      line-height: .45rem;
      z-index: 9;

      .left {
        position: absolute;
        top: 0;
        left: 0;
        width: 1rem;
        height: .45rem;

        a {
          display: block;
          height: 0.45rem;
          background: url('https://f5.jmstatic.com/static_account/dist/v1.0.179196/images/mobile_usercenter/back_white_bg.png') left center no-repeat;
          background-size: 0.28rem 0.28rem;
          padding-left: 0.18rem;
        }
      }

      .center {
        font-size: .16rem;
        color: #fff;
      }

      .right {
        position: absolute;
        top: 0;
        right: 0;
        width: 0.4rem;

        a {
          display: block;
          height: 0.45rem;
          background: url('https://f3.jmstatic.com/static_account/dist/v1.0.179196/images/mobile_usercenter/home_white_bg.png') left center no-repeat;
          background-size: 0.28rem 0.28rem;
        }
      }
    }

    .content {
      position: absolute;
      top: 0;
      width: 100%;

      >div:nth-child(n+2) {
        background: #fff;
        margin-top: .14rem;
      }

      .icon {
        vertical-align: middle;
        margin-right: 0.1rem;
      }

      .user-unlogin {
        height: 1.25rem;
        padding-top: .6rem;
        background-image: linear-gradient(-204deg,#fd465f 0,#fc5e9f 100%);

        .head-img {
          width: 0.7rem;
          height: 0.7rem;
          background: url('https://f5.jmstatic.com/static_account/dist/v1.0.179196/images/mobile_usercenter/myjumei/noportrait.png');
          background-size: .7rem;
          margin: auto;
        }

        .operation {
          padding-top: .1rem;
          text-align: center;

          a {
            line-height: .3rem;
            color: #fff;
            font-weight: 700;
            font-size: .21rem;
            text-decoration: none;
            display: inline-block;
            width: 1.11rem;
          }

          span {
            display: inline-block;
            height: 0.175rem;
            color: #fff;
            font-size: .2rem;
          }
        }
      }

      .share {
        transform: rotate(180deg);
      }

      #hint {
        background: #f5f5f5;
        margin: 0.18rem;
        font-size: .14rem;
        line-height: .16rem;
        color: #999;
      }
    }
  }
</style>
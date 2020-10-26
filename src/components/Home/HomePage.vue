<template>
  <div id="home-page">
    <div class="tab-title">
      <span>
        今日十点上新
      </span>
    </div>
    <a class="link-item" href="javascript:void(0)" v-for="item in linkList" :key="item">
        <div class="pic-wrapper">
          {{ item }}
          <img src="" alt="">
        </div>
    </a>
    <a class="link-item good-item" href="javascript:void(0)" v-for="item in goodList" :key="item.id">
        <div class="pic-wrapper">
          <img src="" alt="">
        </div>
        <div class="item-detail">
          <div class="product-title">{{ item.name }}</div>
          <div class="price">
            <span class="now-price">￥<span>{{ item.id }}</span></span>
            <span class="del-price">￥{{ item.id }}</span>
          </div>
        </div>
    </a>
  </div>
</template>

<script>
export default {
    props : ['linkList','goodList'],
    data() {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
  #home-page {
    position: relative;

    .tab-title{
      height: 0.44rem;
      line-height: 0.44rem;
      background: #fff;
      color: #fe4070;
      text-align: center;
    }

    .link-item {
      display: block;
      margin-bottom: 0.08rem;

        .pic-wrapper {
          height: 1.3rem;
          background: skyblue;
        }
    }

    .good-item {
      position: relative;
      
      .item-detail {
        position: absolute;
        top: 0;
        left: 0;
        margin-right: 0.12rem;
        margin-left: 1.6rem;
        height: 100%;
        min-width: 1.96rem;

        .product-title {
          margin-top: .12rem;
          color: #333;
          font-size: .14rem;
          line-height: .17rem;
          max-height: .51rem;
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          margin-bottom: .05rem;
        }

        .price {
          position: absolute;
          bottom: .12rem;

          .now-price {
            color: #fe4070;
            font-size: .12rem;
            
            span {
              font-size: .2rem;
              margin: 0 .02rem;
            }
          }

          .del-price {
            color: #999;
            font-size: 12px;
            text-decoration: line-through;
          }
        }
      }
    }
  } 
</style>
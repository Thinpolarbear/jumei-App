<template>
  <div id="entry-lux">
    <h2 class="text">
      <span class="icon">
        <img src="//f0.jmstatic.com/btstatic/h5/common/icon_title.png" alt="">
      </span>
      <span>全球热销品牌</span>
    </h2>
    <div class="hot clear">
      <a href="javascript:void(0)" v-for="item in 8" :key="item">
        <img src="http://mp6.jmstatic.com/mobile/card_material/item_2386_512_512-ipad2048_1593481826.jpeg?imageView2/2/w/160/q/90" alt="">
      </a>
    </div>
    <h2 class="text">
      <span class="icon">
        <img src="//f0.jmstatic.com/btstatic/h5/common/icon_title.png" alt="">
      </span>
      <span>疯抢专场 早10点上新</span>
    </h2>
    <ul class="list">
      <li v-for="item in list" :key="item">
        <a href="javascript:void(0)" class="clear">
          <div class="list-img">
            <img src="http://mp5.jmstatic.com//jmstore/image/000/002/2750_std/5f51e4b2b626d_1024_512.jpg?1603358111&imageView2/2/w/640/q/90" alt="">
            <div class="discount">
              <p>满199减100</p>
            </div>
          </div>
          <div class="list-info">
            <p class="title">亲润品牌专场</p>
            <p class="time">剩余<span>01天</span><span>09时</span></p>
          </div>
          <div class="list-logo">
            <img src="http://p0.jmstatic.com/brand/logo_180/11325.jpg" alt="">
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list : 5,
    }
  }
}
</script>

<style lang="scss">
  #entry-lux {
    .hot {
      position: relative;
      height: 1.8775rem;

      >a {
        float: left;
        width: .9375rem;
        height: .9375rem;

        img {
          width: 100%;
        }
      }
    }

    .text {
      text-align: center;
      font-weight: 400;

      span {
        color: #333;
        font-size: 14px;
        vertical-align: middle;
      }

      .icon {
        display: inline-block;
        width: .155rem;
        height: .4rem;
        margin-right: .07rem;
        line-height: .4rem;
        position: relative;
        top: .035rem;

        img {
          width: 100%;
        }
      }
    }

    .list {
      >li {
        >a {
          .list-img {
            position: relative;
            overflow: hidden;
            height: 1.84rem;

            img {
              width: 100%;
            }

            .discount {
              position: absolute;
              left: 0;
              bottom: .12rem;
              display: block;
              background: #000;
              height: .14rem;
              line-height: .14rem;

              p {
                color: #fff;
                font-size: .12rem;
                padding: 0 .025rem;
              }
            }
          }

          .list-info {
            float: left;
            padding: .15rem;
            max-width: 2.4rem;

            .title {
              font-size: .14rem;
              color: #333;
              line-height: .14rem;
            }

            .time {
              margin-top: .05rem;
              color: #999;
              font-size: .12rem;
              line-height: .12rem;
              height: .12rem;
            }
          }

          .list-logo {
            float: right;
            padding-right: .18rem;
            padding-top: .12rem;
            width: .73rem;
            height: .36rem;
            overflow: hidden;

            img {
              width: 100%;
            }
          }
        }
      }
    }
  }
</style>
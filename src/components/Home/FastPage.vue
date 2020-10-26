<template>
  <div id="fast-page">
      <section>
          <ul>
              <li v-for="item in 4" :key="item">
                  <a href="">
                      <img src="//mp5.jmstatic.com/mobile/other/detail_page_guarantee/global_delivery.png?imageView2/2/w/51/q/70" alt="">
                      <div class="text">快速到货</div>
                  </a>
              </li>
          </ul>
      </section>
      <div class="main-content">
          <div class="text">
              <span class="icon">
                  <img src="//f0.jmstatic.com/btstatic/h5/common/icon_title.png" alt="">
              </span>
              <span>今日团购，每天10点上新</span>
          </div>
          <ul class="list">
              <li v-for="item in goodList" :key="item">
                  <a href="javascript:void(0)">
                    <div class="product-info clear">
                        <div class="product-img">
                            <img src="http://p0.jmstatic.com/banner/area/000/000/020.jpg" alt="" class="label">
                            <img src="http://mp5.jmstatic.com/product/005/066/5066168_std/5066168_1000_1000.jpg?v=1572242688&imageView2/2/w/264/q/90" alt="" class="main">
                        </div>
                        <div class="product-desc">
                            <div class="name">
                                韩国LEADERS丽得姿美蒂优氨基酸面膜10片*3盒
                            </div>
                            <div class="price">
                                <span class="now-price">￥<span>{{ item }}</span></span>
                                <span class="del-price">￥{{ item }}</span>
                            </div>
                        </div>
                    </div>
                  </a>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            goodList: 3,
        }
    }
}
</script>

<style lang="scss" scoped>
    #fast-page {
        background: #f5f5f5;

        section {
            background: #fff;
            margin-bottom: .08rem;

            >ul {
                text-align: center;
                padding: .17rem 0;

                >li {
                    width: .9rem;
                    display: inline-block;
                    text-align: center;
                    position: relative;

                    a {
                        text-decoration: none;
                        color: #000;

                        img {
                            display: block;
                            width: 53.2%;
                            margin: 0 auto;
                        }

                        .text {
                            width: 100%;
                            color: #666;
                            margin-top: .075rem;
                            text-align: center;
                            font-size: .12rem;
                        }
                    }
                }
            }
        }

        .main-content {
            margin-bottom: .08rem;
            background: #fff;

            .text {
                text-align: center;

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
                    vertical-align: top;

                    a {
                        display: block;

                        .product-info {
                            border-bottom: 1px solid #eee;
                            position: relative;
                            padding: .12rem 0;
                            margin: 0 .12rem;

                            >div {
                                float: left;
                            }

                            .product-img {
                                text-align: center;
                                overflow: hidden;
                                width: 1rem;
                                height: 1rem;
                                float: left;
                                position: relative;
                                z-index: 9;

                                .label {
                                    position: absolute;
                                    width: .3rem;
                                    top: 0;
                                    left: 0;
                                    z-index: 19;
                                }

                                .main {
                                    width: 1rem;
                                }
                            }

                            .product-desc {
                                width: 2.36rem;
                                height: 1rem;
                                margin-left: .12rem;
                                position: relative;

                                .name {
                                    color: #333;
                                    font-size: .14rem;
                                    line-height: .2rem;
                                    height: .4rem;
                                    word-break: break-all;
                                    word-wrap: break-word;
                                    overflow: hidden;
                                }
                            }
                        }
                    }
                }
            }
        }
    } 
</style>
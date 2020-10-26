<template>
  <div id="famous-product">
      <ul class="list">
          <li v-for="item in list" :key="item">
              <a href="javascript:void(0)" class="clear">
                  <div class="list-img">
                      <img src="http://mp5.jmstatic.com//jmstore/image/000/006/6415_std/5f8d7366a4722_2048_1024.jpg?1603108167&imageView2/2/w/640/q/90" alt="">
                      <div class="discount">
                          <p>99元任选14件</p>
                      </div>
                  </div>
                  <div class="list-info">
                      <p class="title">百草味品牌专场</p>
                      <p class="time">剩余<span>01天</span><span>09时</span></p>
                  </div>
                  <div class="list-logo">
                      <img src="http://p0.jmstatic.com/brand/logo_180/16582.jpg" alt="">
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
            list : 5
        }
    }
}
</script>

<style lang="scss">
    #famous-product {
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
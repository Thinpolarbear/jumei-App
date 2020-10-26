<template>
    <ul id="group">
        <li v-for="item in goodList" :key="item.id">
            <a href="item.href">
                <div class="comment">{{ item.comment }}条评论</div>
                <div class="good-img">
                    <img :src="item.goodImg" alt="">
                </div>
                <div class="good-info">
                    <span>[{{ item.goodNum }}人团]</span>
                    {{ item.goodName }}
                </div>
                <div class="good-price clear">
                    <div class="left">
                        <span class="group-price">￥{{ item.price1 }}</span>
                        <span class="single-price">单买价￥{{ item.price2 }}</span>
                    </div>
                    <div class="right">
                        <span class="group-btn">
                            去开团
                        </span>
                    </div>
                </div>
            </a>
        </li>
    </ul>
</template>

<script>
export default {
    props: ['type'],
    data() {
        return {
            goodList : [
                { id : 1001,href: 'javascript:void(0)', comment:'135', goodImg : 'http://mp5.jmstatic.com/product/005/034/5034738_std/5034738_1000_1000.jpg?v=1598239353&imageView2/2/w/440/q/90', goodNum : 2, goodName : '【手机专享】【2件装】大米面膜 10片/袋', price1 : 92, price2 : 178},
                { id : 1002,href: 'javascript:void(0)', comment:'135', goodImg : 'http://mp5.jmstatic.com/product/005/034/5034738_std/5034738_1000_1000.jpg?v=1598239353&imageView2/2/w/440/q/90', goodNum : 2, goodName : '【手机专享】【2件装】大米面膜 10片/袋', price1 : 92, price2 : 178},
                { id : 1003,href: 'javascript:void(0)', comment:'135', goodImg : 'http://mp5.jmstatic.com/product/005/034/5034738_std/5034738_1000_1000.jpg?v=1598239353&imageView2/2/w/440/q/90', goodNum : 2, goodName : '【手机专享】【2件装】大米面膜 10片/袋', price1 : 92, price2 : 178},
                { id : 1004,href: 'javascript:void(0)', comment:'135', goodImg : 'http://mp5.jmstatic.com/product/005/034/5034738_std/5034738_1000_1000.jpg?v=1598239353&imageView2/2/w/440/q/90', goodNum : 2, goodName : '【手机专享】【2件装】大米面膜 10片/袋', price1 : 92, price2 : 178},
            ]
        }
    }
}
</script>

<style lang="scss">
    #group {
        background: #f5f5f5;
        color: #424242;

        >li {
            margin-bottom: 8px;
            background: #fff;

            >a {
                width: 100%;
                display: block;
                overflow: hidden;
                position: relative;

                .comment {
                    position: absolute;
                    left: 0;
                    top: 1.1rem;
                    font-size: 0.12rem;
                    padding: .04rem .07rem;
                    z-index: 1;
                    border: 1px solid #eee;
                    border-left: 0;
                    border-top-right-radius: 0.28rem;
                    border-bottom-right-radius: 0.28rem;
                    color: #666;
                    background: rgba(251,251,251,.8);
                }

                .good-img {
                    overflow: hidden;
                    text-align: center;

                    img {
                        margin: 0;
                        height: 1.5rem;
                    }
                }

                .good-info {
                    font-size: 0.14rem;
                    max-height: 0.34rem;
                    line-height: 0.18rem;
                    padding: 0 0.12rem;
                    margin-top: 0.1rem;

                    span {
                        color: #fe4070;
                        display: inline-block;
                        margin-left: 0.02rem;
                    }
                }

                .good-price {
                    padding: 0.12rem;
                    overflow: hidden;

                    .left {
                        float: left;

                        .group-price {
                            display: block;
                            font-size: .18rem;
                            color: #fe4070;
                        }

                        .single-price {
                            color: #999;
                        }
                    }

                    .right {
                        float: right;
                        border: 1px solid #fe4070;
                        margin-top: .04rem;
                        background: #fe4070;
                        border-radius: .25rem;

                        .group-btn {
                            display: block;
                            height: 0.26rem;
                            line-height: 0.26rem;
                            font-size: 0.14rem;
                            width: .75rem;
                            text-align: center;
                            color: #fff;
                        }
                    }
                }
            }
        }
    }
</style>
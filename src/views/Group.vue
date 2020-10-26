<template>
  <div id="group">
    <van-tabs sticky>
      <van-tab v-for="item in tabList" :key="item.id" :title="item.title">
        <common :type="item.id"/>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import common from '../components/Group/Commen'
export default {
  components : {
    common
  },
  data() {
    return {
      tabList : [
        { id : 'rec', title : '推荐' },
        { id : 'infant', title : '母婴' },
        { id : 'makeup', title : '美妆' },
        { id : 'women', title : '女装' },
        { id : 'underwear', title : '内衣' },
        { id : 'next', title : '下期预告' },
      ]
    }
  }
}
</script>

<style >
  a {
    text-decoration: none;
    color: #000;
  }
</style>
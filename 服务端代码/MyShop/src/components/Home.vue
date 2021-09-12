<template>
<div>
<mt-swipe :auto="4000" style="height:380px">
  <mt-swipe-item v-for="item in imgList" :key="item.id">
    <img :src="item.img">
  </mt-swipe-item>

</mt-swipe>
  <div class="list">
    <ul>
      <li v-for="info in newList" :key="info.id">
        <!-- <a href='#'> -->
          <router-link :to="info.route">
          <img :src="info.src">
          <p>{{info.title}}</p>
          </router-link>
        <!-- </a> -->

      </li>
    </ul>
  </div>
  </div>
</template>

<script>
import img1 from '@/assets/picShare.png'
import img2 from '@/assets/goodsShow.png'
import img3 from '@/assets/feedback.png'
import img4 from '@/assets/search.png'
import img5 from '@/assets/callme.png'
import img6 from '@/assets/news.png'
var infoList=[{id:1,src:img1,title:'新闻资讯',route:{name:'NewList'}},

{id:2,src:img2,title:'图片分享',route:{name:'PhotoList'}},
{id:3,src:img3,title:'商品展示',route:{name:'ProductList'}},
{id:4,src:img4,title:'国际新闻',route:{name:'News'}},
{id:5,src:img5,title:'留言反馈',route:{name:'ShowMsg'}},
{id:6,src:img6,title:'联系我们',route:{name:'Message'}}

]
export default {
  data(){
    return{
      newList:infoList,
      imgList:[] //存放轮播图图片数据
    }
  },
  created(){
    //http://localhost:8080/api/getSwape
    this.$axios.get('/getSwape').then(res=>{
      // console.log(res.data)
      this.imgList=res.data.message

    })
  }
}
</script>

<style scoped>
  .list{
      width: 100%;
  }

  .list ul li{
    list-style: none;
      float: left;
      width: 33%;
      height: 100px;
      text-align: center;
      font-size: 14px;
  }
  .list ul li a{
      display: inline-block;
      width: 70px;
      height: 50px;
      margin: 0 auto;
      text-decoration: none;
  }
  .list ul li a img{
      width: 50px;
  }
</style>

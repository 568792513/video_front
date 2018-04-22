<template>
  <div class="home">
    <el-main v-loading="loading">

    <!--<el-row>-->
      <!--<el-col :span="24"><div class="grid-content bg-purple-dark">推荐</div></el-col>-->
    <!--</el-row>-->
      <el-carousel :interval="5000" type="card" height="300px" >
        <el-carousel-item v-for="(video, index) in marqueeList" :key="index">
          <div class="marquee-item" v-on:click="videoDetail(video)">
            <img v-bind:src="video.vedioImg"/>
            <div class="marquee-item-name"> {{ video.name }}</div>
          </div>
        </el-carousel-item>
      </el-carousel>


      <el-row class="title">
        <el-col :span="24"><div class="grid-content bg-purple-dark"> <img class="type" src="../assets/news.png"/> 新闻 <router-link to="/classify/0"><div class="more-wrapper"> <a class="more">查看更多>></a></div></router-link> </div></el-col>
      </el-row>
      <el-row :gutter="40">
        <el-col :span="6" v-for="(video, index) in newsList" :key="index">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <div class="video-img" v-on:click="videoDetail(video)">
              <img v-bind:src="video.vedioImg"/>
            </div>
            <div class="introduction">
              <p class="video-name"><a v-on:click="videoDetail(video)"> {{video.name}} </a></p>
              <el-tooltip :content="video.introduction" placement="bottom" effect="light">
                <p class="introduction-content">简介: {{video.introduction}}</p>
              </el-tooltip>
            </div>
            <div class="amount">播放量: {{video.playAmount}} &nbsp评论数: {{video.commentAmount}}</div>
          </el-card>
        </el-col>
      </el-row>

      <el-row class="title">
        <el-col :span="24"><div class="grid-content bg-purple-dark"><img class="type" src="../assets/1509501686527.gif"/> 音乐 <router-link to="/classify/1"><div class="more-wrapper"> <a class="more">查看更多>></a></div></router-link> </div></el-col>
      </el-row>
      <el-row :gutter="40">
        <el-col :span="6" v-for="(video, index) in musicList" :key="index">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <div class="video-img" v-on:click="videoDetail(video)">
              <img v-bind:src="video.vedioImg"/>
            </div>
            <div class="introduction">
              <p class="video-name"><a v-on:click="videoDetail(video)"> {{video.name}} </a></p>
              <el-tooltip :content="video.introduction" placement="bottom" effect="light">
                <p class="introduction-content">简介: {{video.introduction}}</p>
              </el-tooltip>
            </div>
            <div class="amount">播放量: {{video.playAmount}} &nbsp评论数: {{video.commentAmount}}</div>
          </el-card>
        </el-col>
      </el-row>



      <el-row class="title">
        <el-col :span="24"><div class="grid-content bg-purple-dark"> <img class="type" src="../assets/1509501736414.gif"/> 科技 <router-link to="/classify/2"><div class="more-wrapper"> <a class="more">查看更多>></a></div></router-link> </div></el-col>
      </el-row>
      <el-row :gutter="40">
        <el-col :span="6" v-for="(video, index) in technologyList" :key="index" >
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <div class="video-img" v-on:click="videoDetail(video)">
              <img v-bind:src="video.vedioImg"/>
            </div>
            <div class="introduction">
              <p class="video-name"><a v-on:click="videoDetail(video)"> {{video.name}} </a></p>
              <el-tooltip :content="video.introduction" placement="bottom" effect="light">
                <p class="introduction-content">简介: {{video.introduction}}</p>
              </el-tooltip>
            </div>
            <div class="amount">播放量: {{video.playAmount}} &nbsp评论数: {{video.commentAmount}}</div>
          </el-card>
        </el-col>
      </el-row>

      <el-row class="title">
        <el-col :span="24"><div class="grid-content bg-purple-dark"><img class="type" src="../assets/life.png"/> 生活 <router-link to="/classify/3"><div class="more-wrapper"> <a class="more">查看更多>></a></div></router-link> </div></el-col>
      </el-row>
      <el-row :gutter="40">
        <el-col :span="6" v-for="(video, index) in lifeList" :key="index">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <div class="video-img" v-on:click="videoDetail(video)">
              <img v-bind:src="video.vedioImg"/>
            </div>
            <div class="introduction">
              <p class="video-name"><a v-on:click="videoDetail(video)"> {{video.name}} </a></p>
              <el-tooltip :content="video.introduction" placement="bottom" effect="light">
                <p class="introduction-content">简介: {{video.introduction}}</p>
              </el-tooltip>
            </div>
            <div class="amount">播放量: {{video.playAmount}} &nbsp评论数: {{video.commentAmount}}</div>
          </el-card>
        </el-col>
      </el-row>

      <el-row class="title">
        <el-col :span="24"><div class="grid-content bg-purple-dark"> <img class="type" src="../assets/tv.png"/> 影视 <router-link to="/classify/4"><div class="more-wrapper"> <a class="more">查看更多>></a></div></router-link> </div></el-col>
      </el-row>
      <el-row :gutter="40">
        <el-col :span="6" v-for="(video, index) in tvList" :key="index">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <div class="video-img" v-on:click="videoDetail(video)">
              <img v-bind:src="video.vedioImg"/>
            </div>
            <div class="introduction">
              <p class="video-name"><a v-on:click="videoDetail(video)"> {{video.name}} </a></p>
              <el-tooltip :content="video.introduction" placement="bottom" effect="light">
                <p class="introduction-content">简介: {{video.introduction}}</p>
              </el-tooltip>
            </div>
            <div class="amount">播放量: {{video.playAmount}} &nbsp评论数: {{video.commentAmount}}</div>
          </el-card>
        </el-col>
      </el-row>

    </el-main>
  </div>
</template>

<script>
  import base from '../mixins/base';

  export default {
    name: 'home',
    mixins: [base],
    created() {
      // 组件创建完后获取数据，
      // 此时 data 已经被 observed 了
      this.getHomePageVideo()
    },
    watch: {
      // 如果路由有变化，会再次执行该方法
      '$route': 'getHomePageVideo'
    },
    data () {
      return {
        loading: true,
        newsList: [],
        musicList: [],
        lifeList: [],
        technologyList: [],
        tvList: [],
        marqueeList: [],
      }
    },
    methods: {
      getHomePageVideo() {
        this.getHomeMarquee();
        let sel = this;
        sel.request({act: 'getHomePageVideo', method: 'get'}).then(datas => {
          if (datas.code == 0) {
            sel.loading = false;
            sel.newsList = datas.data.zero;
            sel.musicList = datas.data.one;
            sel.lifeList = datas.data.two;
            sel.technologyList = datas.data.three;
            sel.tvList = datas.data.four;

//            sel.introductionShort = datas.data.introduction.substr(0,20) + '...' ;
          } else {
            sel.$message.error('出错了: ' + datas.msg)
          }
        }, response => {
          sel.loading = false;
          sel.$meesage.error('出错了');
        });
      },
      getHomeMarquee() {
        let sel = this;
        sel.request({act: 'getHomeMarquee', method: 'get'}).then(datas => {
          if (datas.code == 0) {
            sel.marqueeList = datas.data.marquee;
//            sel.introductionShort = datas.data.introduction.substr(0,20) + '...' ;
          } else {
            sel.$message.error('出错了: ' + datas.msg)
          }
        }, response => {
          sel.loading = false;
          sel.$meesage.error('出错了');
        });
      },
      videoDetail(video) {
        this.$router.push({
          path: '/videoDetail',
          name: 'videoDetail',
          params: {
            videoId: video.id
          }
          /*query: {
              name: 'name',
              dataObj: this.msg
          }*/
        })
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-col {
    margin-bottom: 15px;
  }
  .video-img {
    height: 250px;
    width: 418px;
    padding: 0px;
    cursor: pointer;
  }
  .el-row {
    margin-bottom: 10px;
  }
  .title {
    border-bottom: 1px solid #cccccc;
  }

  .type {
    width: 30px;
    height: 30px;
  }
  img {
    width: 100%;
    height: 100%;
    border: 1px solid white;
    border-radius: 10px;
  }

  .introduction {
    margin-top: 10px;
  }
  .amount {
    font-size: 13px;
    margin-bottom: 3px;
  }


  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
  .introduction-content {
    margin-top: 3px;
    margin-bottom: 3px;
    padding: 0;
    /*line-height: 0;*/
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .video-name {
    margin: 0;
    padding: 0;
    font-size: 17px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .video-name:hover {
    /*margin: 0;*/
    /*padding: 0;*/
    /*font-size: 16px;*/
    text-decoration: underline;
    cursor: pointer;
    /*line-height: 1;*/
  }
  .bg-purple-dark {
    /*background: #99a9bf;*/
    text-align: left;
    font-size: 20px;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }
  .more-wrapper {
    float:right;
  }
  .more:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  .el-carousel {
    float: left;
    width: 1400px;
    margin-left: 250px;

  }
  .marquee-item {
    width: 600px;
    height: 280px;
    text-align: center;
    position:relative;
  }
  .marquee-item-name {
    color: white;
    height: 30px;
    position: absolute;
    bottom: 0;
    margin: auto;
    top: 230px;
    left: 0;
    right: 0;
  }

  .rank {
    float: right;
  }
</style>

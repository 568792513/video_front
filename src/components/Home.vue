<template>
  <div class="home">
    <el-row>
      <el-col :span="24"><div class="grid-content bg-purple-dark">推荐</div></el-col>
    </el-row>


    <div class="featured">
      <div class="main-vid">
        <div class="col-md-6">
          <div class="zoom-container">
            <div class="zoom-caption">
              <span>Video's Tag</span>
              <a href="single.html">
                <i class="fa fa-play-circle-o fa-5x" style="color: #fff"></i>
              </a>
              <p>Video's Name</p>
            </div>
            <img src="images/1.jpg" />
          </div>
        </div>
      </div>
      <div class="sub-vid">
        <div class="col-md-3">
          <div class="zoom-container">
            <div class="zoom-caption">
              <span>Video's Tag</span>
              <a href="single.html">
                <i class="fa fa-play-circle-o fa-5x" style="color: #fff"></i>
              </a>
              <p>Video's Name</p>
            </div>
            <img src="images/2.jpg" />
          </div>
          <div class="zoom-container">
            <div class="zoom-caption">
              <span>Video's Tag</span>
              <a href="single.html">
                <i class="fa fa-play-circle-o fa-5x" style="color: #fff"></i>
              </a>
              <p>Video's Name</p>
            </div>
            <img src="images/3.jpg" />
          </div>
        </div>
        <div class="col-md-3">
          <div class="zoom-container">
            <div class="zoom-caption">
              <span>Video's Tag</span>
              <a href="single.html">
                <i class="fa fa-play-circle-o fa-5x" style="color: #fff"></i>
              </a>
              <p>Video's Name</p>
            </div>
            <img src="images/4.jpg" />
          </div>
          <div class="zoom-container">
            <div class="zoom-caption">
              <span>Video's Tag</span>
              <a href="single.html">
                <i class="fa fa-play-circle-o fa-5x" style="color: #fff"></i>
              </a>
              <p>Video's Name</p>
            </div>
            <img src="images/6.jpg" />
          </div>
        </div>
      </div>
      <div class="clear"></div>
    </div>









      <el-row>
        <el-col :span="24"><div class="grid-content bg-purple-dark">新闻</div></el-col>
      </el-row>
      <el-row :gutter="0">
        <el-col :span="4"><div class="grid-content bg-purple">1</div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple-light">2</div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple">3</div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple-light">4</div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple">5</div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple-light">6</div></el-col>
      </el-row>
      <el-row>
        <el-col :span="24"><div class="grid-content bg-purple-dark">音乐</div></el-col>
      </el-row>
      <el-row :gutter="0">
        <el-col :span="4"><div class="grid-content bg-purple">1</div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple-light">2</div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple">3</div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple-light">4</div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple">5</div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple-light">6</div></el-col>
      </el-row>
    <el-row>
      <el-col :span="24"><div class="grid-content bg-purple-dark">科技</div></el-col>
    </el-row>
    <el-row :gutter="0">
      <el-col :span="4"><div class="grid-content bg-purple">1</div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple-light">2</div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple">3</div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple-light">4</div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple">5</div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple-light">6</div></el-col>
    </el-row>
    <el-row>
      <el-col :span="24"><div class="grid-content bg-purple-dark">生活</div></el-col>
    </el-row>
    <el-row :gutter="0">
      <el-col :span="4"><div class="grid-content bg-purple">1</div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple-light">2</div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple">3</div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple-light">4</div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple">5</div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple-light">6</div></el-col>
    </el-row>
    <el-row>
      <el-col :span="24"><div class="grid-content bg-purple-dark">影视</div></el-col>
    </el-row>
    <el-row :gutter="0">
      <el-col :span="4"><div class="grid-content bg-purple">1</div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple-light">2</div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple">3</div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple-light">4</div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple">5</div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple-light">6</div></el-col>
    </el-row>
    <video src="http://120.79.143.237/video_file/video_977788977459245057_rank_1.mp4" controls="controls">
    </video>
  </div>
</template>

<script>

  export default {
    name: 'home',
    data () {
      return {
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
    text-align: center;
    padding: 3px;
    /*margin: 4px;*/
  }
  .bg-purple-dark {
    background: #99a9bf;
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
</style>

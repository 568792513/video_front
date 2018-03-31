<template>
  <div class="editMyInfo">
    <el-tabs v-model="activeName2" type="border-card" @tab-click="handleClick">
      <el-tab-pane label="头像修改" name="first">
        <el-upload
          drag
          class="avatar-uploader"
          action=""
          :show-file-list="true"
          :before-upload="beforeAvatarUpload"
          :http-request="handleFileUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus
           avatar-uploader-icon"></i>
        </el-upload>
        <p>* 请点击上方区域为选择一张图片作为头像</p>
        <p>* 上传头像图片只能是 JPG 格式!</p>
        <p>* 上传头像图片大小不能超过 2MB!</p>
      </el-tab-pane>
      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
    </el-tabs>

  </div>
</template>

<script>
  import '../../static/plugin/lrz.js';
  import base from '../mixins/base';
  export default {
    mixins: [base],
    data() {
      return {
        updateEnable: false,
        imageUrl: '',
        activeName2: 'first',
        file:{}
      };
    },
    methods: {
//      handleAvatarSuccess(res, file) {
//        this.imageUrl = URL.createObjectURL(file.raw);
//      },
      beforeAvatarUpload(file) {
        console.log(file);
        let sel = this;
        this.file = file;
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
//      handleClick(tab, event) {
//        console.log(tab, event);
//      },
      handleFileUpload() {
        this.$confirm('此操作将修改您的头像, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          const sel = this;
          const file = sel.file;
          lrz(file, {width: 1000, quality: 0.3}).then(img => {
            let form = new FormData();
            form.append('file', img.file);
            form.append('imgSrc', img.input);
            sel.request({act: 'uploadHeadImg', method: 'post', body: form}).then(datas => {
              if (datas.code == 0){
                sel.setSessionStorage({key: 'head_img', data: datas.data});
                sel.$message({message: datas.msg, type: 'success'});
              } else {
                this.$message.error(datas.msg+',code:'+datas.code);
              }
            }, err => {
              this.$message.error('上传文件失败...');
            })
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          });
        });
      }
    }
  }
</script>

<style scoped="">
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  p {
    line-height: 20px;
  }
</style>

<template>
  <div class="uploadVideo">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="upload-video-form">
      <el-form-item label="视频名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="类别" prop="type">
        <el-select v-model="ruleForm.type" placeholder="请选择视频类别">
          <el-option label="新闻" value="0"></el-option>
          <el-option label="音乐" value="1"></el-option>
          <el-option label="生活" value="2"></el-option>
          <el-option label="科技" value="3"></el-option>
          <el-option label="影视" value="4"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="视频简介" prop="desc">
        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
      </el-form-item>

      <el-form-item label="视频封面" prop="videoImg">
        <el-upload
          drag
          class="video-img"
          :file-list="ruleForm.videoImgList"
          action=""
          :show-file-list="true"
          :auto-upload="false"
          :limit="1"
          :on-exceed="overLimit"
          :before-upload="beforeVideoImgUpload"
          :http-request="handleVideoUpload">
          <i class="el-icon-plus"></i>
          <i class="avatar-uploader-icon"></i>
          <div class="el-upload__tip">* 请点击此区域为选择一张图片作为视频封面</div>
          <div class="el-upload__tip">* 上传图片只能是 JPG 格式!</div>
          <div class="el-upload__tip">* 上传图片大小不能超过 2MB!</div>
        </el-upload>
      </el-form-item>

      <el-form-item label="视频源" prop="videoFile">
        <el-upload
          class="upload-video"
          drag
          action=""
          :file-list="ruleForm.videoFileList"
          :show-file-list="true"
          :auto-upload="false"
          :limit="1"
          :on-exceed="overLimit"
          :before-upload="beforeVideoUpload"
          :http-request="handleVideoUpload">
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <div class="el-upload__tip" >只能上传视频文件，且不超过200MB！</div>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" v-on:click="submitForm('ruleForm')">立即发布</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  import base from '../mixins/base';
  export default {
    name: 'uploadVideo',
    mixins: [base],
    data() {
      return {
        imgFile: {},
        videoFile: {},
        ruleForm: {
          name: '',
          type: '',
          desc: '',
          videoImgList: [],
          videoFileList: []
        },
        rules: {
          name: [
            { required: true, message: '请输入视频名称', trigger: 'blur' },
            { min: 1, max: 30, message: '长度在 1 到 30 个字符', trigger: 'blur' }
          ],
          type: [
            { required: true, message: '请选择一个视频类型', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写视频简介', trigger: 'blur' }
          ],
          videoImgList: [
            { type: 'array', required: true, message: '请选择一张视频封面图片', trigger: 'change' }
          ],
          videoFileList: [
            { required: true, message: '请选择一个视频', trigger: 'change' }
          ]
        }
      }
    },
    methods: {
      submitForm(formName) {
        let sel = this;
        sel.$refs[formName].validate((valid) => {
          if (valid) {
            sel.handleVideoUpload()
          } else {
            return false;
          }
       });
      },
      overLimit() {
        let sel = this;
        sel.$message.error('上传数量为1');
      },
      beforeVideoImgUpload(file) {
        let sel = this;
        this.imgFile = file;
        let isLt2M = file.size / 1024 / 1024 < 1;
        if (!isLt2M) {
          sel.$message.error('上传视频封面图片大小不能超过 1MB!');
        }
        return isLt2M;
      },
//      handleVideoImgUpload() {
//        let sel = this;
//        let file = sel.imgFile;
//        let form = new FormData();
//        form.append('file', file);
////            form.append('imgSrc', img.input);
//        sel.request({act: '', method: 'post', body: form}).then(datas => {
//              if (datas.code == 0){
//                sel.$message({message: datas.msg, type: 'success'});
//              } else {
//                this.$message.error(datas.msg+',code:'+datas.code);
//              }
//            }, err => {
//              this.$message.error('上传文件失败...');
//            })
//      },
      beforeVideoUpload(file) {
        let sel = this;
        this.videoFile = file;
        const sizeLimit = file.size / 1024 / 1024 <  300;
        if (!sizeLimit) {
          sel.$message.error('上传视频大小不能超过 300MB!')
        }
        return sizeLimit;
      },
      handleVideoUpload() {
        let sel = this;
        let videoFile = sel.ruleForm.videoFileList[0];
        let imgFile = sel.ruleForm.videoImgList[0];
        let form = new FormData();

        form.append('imgFile', this.imgFile);
        form.append('videoFile', videoFile);
        form.append('name', sel.ruleForm.name);
        form.append('type', sel.ruleForm.type);
        form.append('introduction', sel.ruleForm.desc);
//            form.append('imgSrc', img.input);
        sel.request({act: 'addVideo', method: 'post', body: form}).then(datas => {
          if (datas.code == 0){
            sel.$message({message: datas.msg, type: 'success'});
          } else {
            this.$message.error(datas.msg+',code:'+datas.code);
          }
        }, err => {
          this.$message.error('上传文件失败...');
        })
      },
    }
  }
</script>

<style scoped="">
 .el-upload__tip {
   line-height: 10px;
 }
</style>

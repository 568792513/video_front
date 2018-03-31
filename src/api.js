const api=[
  // 登录
  {act:'login', url:'/zuul/user-service/api/web/user/login'},

  // 获取全部用户
  {act:'getUsers', url:'/zuul/user-service/api/web/user/getUsers'},

  // 注册用户
  {act:'register', url:'/zuul/user-service/api/web/user/register'},

  // 获取用户信息
  {act:'getMyInfo', url:'/zuul/user-service/api/web/user/getMyInfo'},

  // 判断是否登录
  {act:'isLogin', url:'/zuul/user-service/api/web/user/isLogin'},

  // 修改密码
  {act:'editPassword', url:'/zuul/user-service/api/web/user/editPassword'},

  // 注销
  {act:'logout', url:'/zuul/user-service/api/web/user/logout'},

  // 上传头像
  {act:'uploadHeadImg', url:'/zuul/user-service/api/web/user/uploadHeadImg'},

  // 添加视频
  {act:'addVideo', url:'/zuul/vedio-service/api/web/video/addVideo'}


];
export default api;

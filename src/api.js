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
  {act:'addVideo', url:'/zuul/vedio-service/api/web/video/addVideo'},

  // 我的视频页面获取我的视频
  {act:'getMyVideo', url:'/zuul/vedio-service/api/web/video/getMyVideo'},

  // 我的视频页面修改视频信息
  {act:'editVideo', url:'/zuul/vedio-service/api/web/video/editVideo'},

  // 删除视频
  {act:'removeVideo', url:'/zuul/vedio-service/api/web/video/removeVideo'},

  // 通过id获取视频
  {act:'getVideoById', url:'/zuul/vedio-service/api/web/video/getVideoById'},

  // 获取首页数据
  {act:'getHomePageVideo', url:'/zuul/vedio-service/api/web/video/getHomePageVideo'},

  // 根据类型获取视频
  {act:'getVideoByType', url:'/zuul/vedio-service/api/web/video/getVideoByType'},

  // 提交评论
  {act:'addComment', url:'/zuul/comment-service/api/web/comment/addComment'},

  // 获取评论
  {act:'getComment', url:'/zuul/comment-service/api/web/comment/getComment'},

  // 获取首页跑马灯信息
  {act:'getHomeMarquee', url:'/zuul/vedio-service/api/web/video/getHomeMarquee'},

  // 通过视频ID获取用户
  {act:'getUserByVideoId', url:'/zuul/vedio-service/api/web/video/getUserByVideoId'},


];
export default api;

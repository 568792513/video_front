const api=[
  // 登录
  {act:'login', url:'api/web/user/login'},

  // 获取全部用户
  {act:'getUsers', url:'/api/web/user/getUsers'},

  // 注册用户
  {act:'register', url:'/api/web/user/register'},

  // 获取用户信息
  {act:'getMyInfo', url:'/api/web/user/getMyInfo'},

  // 判断是否登录
  {act:'isLogin', url:'/api/web/user/isLogin'},

  // 修改密码
  {act:'editPassword', url:'/api/web/user/editPassword'},

  // 注销
  {act:'logout', url:'/api/web/user/logout'}


];
export default api;

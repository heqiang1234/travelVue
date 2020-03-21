const api = 'http://localhost:8082/myssmp_war_exploded';
const API = {
  USER:{
    LOGIN:api+'/User/DoLogin',//用户登录
    REGIST:api+'/User/Save', //注册用户
    UPDATE:api+'/User/UpdateUser', //修改用户信息
    CHECKLOGIN:api+'/User/DoCheckLogin',//验证用户是否仍在登陆
    LOGOUT:api+'/User/LoginOut'//退出登录
  },
  JOBS:{
    // GETJOBLIST:api+'/Position/selectAllPosition', //职位分页
    GETJOBLIST:api+'/Scenic/ShowScenicByPage', //景点分页
    SEARCHJOBS:api+'/Scenic/SearchScenic',  //关键字搜索职位
    DETAILJOB:api+'/ScenicDetail/showScenicDetail', //景点详情页
  },
  EMP:{
    GETEMP:api+'/Employment/ShowEmployment', //宣讲会分页
    DETAILEMP:api+'/ScenicDetail/showScenicDetail', //宣讲会详情
    SEARCHEMP:api+'/Employment/SearchEmployment',//搜索宣讲会
    GETABOUTEMP:api+'/Employment/ShowEmploymentInfoByCompany'//查看职位相关宣讲会
  },
  UPLOAD:{
    UPIMG:api+'/Upload/UploadImg/' //上传图片
  },
  OTHER:{
    GETADIMG:api+'/Photo/ShowScenicDetailImgAd', //首页广告图片
    GETBANNER:api+'/Photo/ShowScenicDetailImg'//轮播图
  },
  VERIFYCODE:{
    GETCODE:api+'/VerifyCode/Kaptcha'
  },
  ECHARTS:{
    GETEMPCHARTS:api+'/eChartsData/getEchartsData_Employment_count',//宣讲会数 -大学-地区
    GETPOSCHARTS:api+'/eChartsData/getEchartsData_Place_count', //岗位数-地区
    GETMEETCHARTS:api+'/eChartsData/getEchartsData_MeetDay_count' //宣讲会时间分布情况
  }
}
module.exports = API;
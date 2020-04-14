//const api = 'http://localhost:8082/myssmp_war_exploded';
const api = 'http://120.79.15.183:8080/travel';
const API = {
  USER:{
    LOGIN:api+'/User/DoLogin',//用户登录
    REGIST:api+'/User/Save', //注册用户
    UPDATE:api+'/User/UpdateUser', //修改用户信息
    CHECKLOGIN:api+'/User/DoCheckLogin',//验证用户是否仍在登陆
    LOGOUT:api+'/User/LoginOut'//退出登录
  },
  SCENIC:{
    GETSCENICLIST:api+'/Scenic/ShowScenicByPage', //景点分页
    SEARCHSCENIC:api+'/Scenic/SearchScenic',  //关键字搜索景点
    GETPOSTSCENIC:api+'/Scenic/GetPostScenic',  //获取推荐景点信息
    DETAILSCENIC:api+'/ScenicDetail/showScenicDetail' //景点详情页
  },
  // EMP:{
  //   GETEMP:api+'/Employment/ShowEmployment', //宣讲会分页
  //   DETAILEMP:api+'/ScenicDetail/showScenicDetail', //宣讲会详情
  //   SEARCHEMP:api+'/Employment/SearchEmployment',//搜索宣讲会
  //   GETABOUTEMP:api+'/Employment/ShowEmploymentInfoByCompany'//查看职位相关宣讲会
  // },
  UPLOAD:{
    UPIMG:api+'/Upload/UploadImg/' //上传图片
  },
  OTHER:{
    GETADIMG:api+'/Photo/ShowScenicDetailImgAd', //首页广告图片
    GETBANNER:api+'/Photo/ShowScenicDetailImg',//轮播图
    GETDETAILBANNER:api+'/Photo/ShowScenicDetailImgByScenic_Id',//详情页轮播图
    GETDETAILBANNER_SP:api+'/Photo/ShowScenicDetailImgByScenic_Id_SP',//详情页特色看点
    GETDETAILTip:api+'/ScenicTip/showScenicTip'//详情页小贴士
    
  },
  USERINTER:{
    ADDUSERINTER:api+'/userInterest/addUserInterest', //添加关注
    DELUSERINTER:api+'/userInterest/deleteUserInter',//删除关注
    GETUSERINTER:api+'/userInterest/selectAllUserInterByName'//获取关注根据用户名
  },
  BROWSERECORD:{
    ADDBROWSERECORD:api+'/browseRecord/addBrowseRecord', //添加浏览记录
    DELBROWSERECORD:api+'/browseRecord/deleteBrowseRecord',//删除浏览记录
    DELALLBROWSERECORD:api+'/browseRecord/deleteAllBrowseRecord',//删除所有浏览记录
    GETBROWSERECORD:api+'/browseRecord/selectAllBrowseRecordByName'//获取浏览记录根据用户名
  },
  VERIFYCODE:{
    GETCODE:api+'/VerifyCode/Kaptcha'
  },
  ECHARTS:{
    GETEMPCHARTS:api+'/eChartsData/ShowScenicNW',//经纬度比重
    GETTOPSCENICCHARTS:api+'/eChartsData/ShowTopScenic', //景点排名
    GETSCENICCITYCHARTS:api+'/eChartsData/ShowTopScenicCity', //景点地区排行
    GETSCENICTYPECHARTS:api+'/eChartsData/ShowScenicType' //景点类型排行
  }
}
module.exports = API;
<template>
  <div class="warp">
   <Header></Header>

    <div  class="mp-description">
        <div class="mp-description-slider" id="slide">
            <div id="mp-slider-content" class="mp-description-imgs">
              <!--轮播图  -->              
             <el-carousel >
               <el-carousel-item v-for="item in banners" :key="item.scenic_detail_Img_id" class="el-carousel-width">
              <el-image fit="cover " :src="item.scenic_detail_img_url" />
            </el-carousel-item>
              </el-carousel>
              
            </div>
            <div id="mp-slider-prev" class="mp-slider-button pngfix"></div>
            <div id="mp-slider-next" class="mp-slider-button pngfix"></div>
            <div id="mp-slider-page" class="mp-slider-page"></div>
        </div>
        <div class="mp-description-detail">
            <div class="mp-description-view">
                <span class="mp-description-name" title="圆明园">{{careerInfo.scenic_detail_name}}</span><span class="mp-description-level">{{careerInfo.scenic_detail_level}}</span>
                <a href="javascript:void(0);" id="mp-description-correcticon" class="mp-description-correcticon"></a>
            </div>
            <div class="mp-description-onesentence">{{careerInfo.scenic_detail_onesentence}}</div>
            <div class="mp-description-location">
                <span class="mp-sprites1-icon pngfix mp-description-locationicon"></span><span class="mp-description-title">位&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;置：</span><span class="mp-description-address" title="北京市海淀区清华西路28号">{{careerInfo.scenic_detail_address}}</span><a href="#mp-traffic" class="map-icon pngfix" data-click="mpdetail_map">查看地图</a>
            </div>
            <div class="mp-description-comments" style="display:block">
                <span class="mp-sprites2-icon pngfix mp-description-commentsicon"></span><span class="mp-description-title">用户评分：</span><span id="mp-description-commentscore"><span>{{careerInfo.scenic_detail_commentscore}}</span>/5分</span>
            </div>
            
            <div  id="mp-description-weather" class="mp-description-weather">
                <span class="pngfix mp-description-weathericon" data-type="晴转多云"></span><span class="mp-description-title">晴转多云</span><span class="mp-description-val">17 ~ 4℃</span>
                <div class="mp-description-more">
                    <span class="mp-description-narrow"></span>
                    <table class="mp-description-table" id="weathertable-busy">
                        <tr>
                            <td width="60">明天</td>
                            <td width="78">晴转多云 </td>
                            <td>24 ~ 7℃</td>
                        </tr>
                        <tr>
                            <td width="60">后天</td>
                            <td width="78"> 晴 </td>
                            <td>19 ~ 3℃</td>
                        </tr>
                        <tr>
                            <td width="60">大后天</td>
                            <td width="78">  晴 </td>
                            <td>22 ~ 6℃</td>
                        </tr>                                  
                    </table>
                </div>
            </div>           
            <div class="mp-description-comfort" id="mp-detail-item-comfort"></div>
            <div class="mp-description-price">
                    <span class="mp-description-qunar-price">
                        <em>{{careerInfo.scenic_detail_price}}</em>
                    </span>   
                    <button  @click="getfocus" class="mp-description-bookingbtn ">关注</button >            
            </div>
        </div>
    </div>   
    <div class="mp-charact">
        <div  class ="mp-discrib">
            <div class="mp-charact-intro">
                <span class="mp-charact-qutoicon pngfix"></span>
                    <div class="mp-charact-desc">
                              {{careerInfo.scenic_detail_intro}}
                    </div>
            </div>
            <div class="mp-charact-time">
                <div class="mp-charact-content" v-for="item in tip_sj" :key="item.scenic_tip_id">
                     <span class="mp-charact-timeicon pngfix"></span>
                     <div class="mp-charact-label">{{item.scenic_detail_tip_title}}</div>
                     <div class="mp-charact-desc">
                          {{item.scenic_detail_tip_desc}} 
                     </div>
                </div>
                
            </div>
        </div>
        <h2 class="mp-characteristic-title">特色看点</h2> 
        <div class ="mp-discrib" v-for="item in Img_detail" :key="item.scenic_detail_Img_id">                   
                <div class="mp-charact-event">                                  
                         <div class="mp-event">
                            <img :src="item.scenic_detail_img_url"/>
                                
                                 <div class="mp-event-bg"></div>
                                <div class="mp-event-desc">
                                  <h3>{{item.scenic_detail_img_title}}</h3>
                                  <p>{{item.scenic_detail_img_desc}}</p>
                                </div>
                            
                          </div>
                </div>
          </div>   
            <div class="mp-charact-littletips">
              <div class="mp-littletips">
                <h2 class="mp-littletips-title pngfix">入园公告</h2>
                     <div v-for="item in tip_gg" :key="item.scenic_tip_id">
                       <div class="mp-littletips-item">
                        <span class="mp-littletips-icon pngfix"></span>
                        <div class="mp-littletips-itemtitle">{{item.scenic_detail_tip_title}}</div>
                        <div class="mp-littletips-desc">{{item.scenic_detail_tip_desc}}</div>
                       </div>
                    </div>
              </div>
           </div>
        <div class="mp-charact-littletips">
            <div class="mp-littletips">
                <h2 class="mp-littletips-title pngfix">小贴士</h2>
                 <div v-for="item in tip_ts" :key="item.scenic_tip_id">
                    <div class="mp-littletips-item">
                        <span class="mp-littletips-icon pngfix"></span>
                        
                            <span class="mp-littletips-itemcover"></span>
                        
                        <div class="mp-littletips-itemtitle">{{item.scenic_detail_tip_title}}</div>
                        <div class="mp-littletips-desc">
                                    <!-- <p>1、除了在废墟上留影，其实圆明园还有大片的荒野林地和湖水，风景极端凄美，很适合徒步和野游爱好者的趣味。</p>
                                   <p>2、不要被各种奇怪的游乐场影响心情。</p> -->
                                    {{item.scenic_detail_tip_desc}}
                         </div>
                     </div>
                 </div>
            </div>
        </div>
    </div>
    <div class="mp-traffic" id="mp-traffic">
          <h2>地图与交通</h2>
          <div class="mp-traffic-map" id="mp-traffic-map"></div>
          <div id="mp-traffic-button" class="mp-traffic-show" >查看路线</div>
              <div id="mp-traffic-route">
                  <div id="mp-traffic-detail"></div>
                  <div class="cover_top"></div>
                  <div class="cover_bottom"></div>
              </div>
          
              <div class="mp-traffic-transfer">                 
                  <div v-for="item in tip_jt" :key="item.scenic_tip_id">
                  <div class="mp-transfer-title">{{item.scenic_detail_tip_title}}</div>
                  <div class="mp-transfer-desc">
                     {{item.scenic_detail_tip_desc}}
                  </div>
                  </div>                                          
              </div>
          
    </div>
    <Footsy></Footsy>
  </div>
</template>
<script>
import Header from './common/header.vue'
import Searcher from './common/searcher.vue'
import Footsy from "./common/footsy"
// import BMap from 'BMap' 这一行的锅
import loadBMap from '../components/loadBMap.js'
export default {
   components: { Header, Footsy },
  created() {
    // console.log("11");
    // console.log(this.$route.params);
    // console.log("22");
    if (this.$route.params.id) {
      this.scenic_spot_id = this.$route.params.id;
    }
    this.setBBrowseRecord();
    this.getScenicDetail();
    this.getBanner();
    this.getImg_desc();
    this.getTip_SJ();
    this.getTip_GG();
    this.getTip_TS();
    this.getTip_JT();
    this.initMap();
  },
  methods: {
    formatInfo(obj) {
      //格式化内容信息
      console.log(obj);
      if (obj.scenic_detail_tip_desc) {
        obj.scenic_detail_tip_desc = obj.scenic_detail_tip_desc
          .replace(/\n|\r\n/g, "<br/>")
          .replace(/[;；]/g, "；<br/>")
          .replace(/[-]/g, "<br/>")
          .replace("[' ']+", "<br/>")
          .replace(/['\u3002']/g, "。<br>")
          .replace("<br>s*(<br>s*)+", "<br/>");
      }
      // if (obj.company.companyProfile) {
      //   obj.company.companyProfile = obj.company.companyProfile.replace(
      //     /\n|\r\n/g,
      //     "<br/>"
        // );
     // }
      return obj;
    },
    setBBrowseRecord() {
      this.axios({
        url: this.API.BROWSERECORD.ADDBROWSERECORD,
        params: {
          scenic_spot_id: this.scenic_spot_id
        }
       })
       //.then(res => {
      //   this.careerInfo = res.data.extendInfo.pagebean;
      // });
    },
    getScenicDetail() {
      this.axios({
        url: this.API.SCENIC.DETAILSCENIC,
        params: {
          S_ID: this.scenic_spot_id
        }
      }).then(res => {
        this.careerInfo = res.data.extendInfo.pagebean;
      });
    },
     getBanner(){
      return this.axios({
        url:this.API.OTHER.GETDETAILBANNER,
        params: {
            S_ID: this.scenic_spot_id
          }
      }).then(res => {
        this.banners = res.data.extendInfo.list;
      });
    },
    getTip_SJ(){
      return this.axios({
        url:this.API.OTHER.GETDETAILTip,
        params: {
            S_SIGN: "1",
            S_ID: this.scenic_spot_id
          }
      }).then(res => {
        console.log(res);
        this.tip_sj = res.data.extendInfo.pagebean;
      });
    },
    getTip_GG(){
      return this.axios({
        url:this.API.OTHER.GETDETAILTip,
        params: {
            S_SIGN: "2",
            S_ID: this.scenic_spot_id
          }
      }).then(res => {
           this.tip_gg = res.data.extendInfo.pagebean;
      });
      // )
    },
    getTip_TS(){
      return this.axios({
        url:this.API.OTHER.GETDETAILTip,
        params: {
            S_SIGN: "3",
            S_ID: this.scenic_spot_id
          }
      }).then(res => {
        console.log(res);
        this.tip_ts = res.data.extendInfo.pagebean;
      });
    },
     getTip_JT(){
      return this.axios({
        url:this.API.OTHER.GETDETAILTip,
        params: {
            S_SIGN: "4",
            S_ID: this.scenic_spot_id
          }
      }).then(res => {
        console.log(res);
        this.tip_jt = res.data.extendInfo.pagebean;
      });
    },initMap() {
      console.log('map init')
      loadBMap('uc3tPcyp1t5oXwGbDeifM8lztSNTnnZ3')
        .then((BMap) => {
          // 百度地图API功能
          console.log('init then')
          console.log(BMap);
          this.myMap = new BMap.Map("mp-traffic-map") // 创建Map实例
         var point = new BMap.Point(117.861924,29.247904)
          this.myMap.centerAndZoom(point, 11) // 初始化地图,设置中心点坐标和地图级别
       
          //添加地图类型控件
          this.myMap.addControl(
            new BMap.MapTypeControl({
              mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP]
            })
          )
          var marker = new BMap.Marker(point) // 创建标注
          this.myMap.addOverlay(marker)    // 将标注添加到地图中
          this.myMap.setCurrentCity('北京') // 设置地图显示的城市 此项是必须设置的
          this.myMap.enableScrollWheelZoom(true) //开启鼠标滚轮缩放
          console.log(BMap)
        })
        .catch(err => {
          console.log(err);
          console.log('地图加载失败')
          
        })
},
     getImg_desc(){
        return this.axios({
        url:this.API.OTHER.GETDETAILBANNER_SP,
        params: {
            S_ID: this.scenic_spot_id
          }
      }).then(res => {
        this.Img_detail = res.data.extendInfo.list;
      });
    },getfocus()
    {
        let that = this;
         return this.axios({
        url:this.API.USERINTER.ADDUSERINTER,
        params: {
            user_spot_id: this.scenic_spot_id
          }
      }).then(res => {
          console.log(res)
          if (res.data.code != "200") {
            this.$message({
              showClose: true,
              message: res.data.extendInfo.log_error,
              type: "error"
            });
            return;
          }
          that.$message({
            showClose: true,
            message: "关注成功！",
            type: "success",
            duration: 1500
          });
      });
    }
  },
mounted() {
    this.initMap()
},
  data() {
    return {
      // scenic_spot_id: 0,
      careerInfo: {},
       banners:[],
       Img_detail: {},
       tip_sj:{},
       tip_gg:{},
       tip_ts:{},
       tip_jt:{},
       myMap: null
    };
  }
};
</script>
</script>
<style scoped>
.warp {
  width: 100%;
  min-width: 1080px;
  
}
.el-carousel-width{
  width: 100%;
  height: 100%;
}
.el-carousel__item:nth-child(2n) {
  background-image: url('https://imgs.qunarzz.com/sight/p0/1908/e0/e04946d2227ba776a3.img.jpg_710x360_c6e077b5.jpg');
  }
  
.el-carousel__item:nth-child(2n+1) {
  background-image: url('https://imgs.qunarzz.com/sight/p0/1910/28/280368c977a29ccfa3.img.jpg_710x360_84e74007.jpg');
}
.mp-description{
    position: relative;
    margin: 15px auto 0 auto;
    border: 1px solid #e5e5e5;
    width: 1190px;
    height: 386px;
    color: #333;
}
.mp-description-slider {
    position: absolute;
    left: 15px;
    top: 13px;
    width: 710px;
    height: 360px;
    overflow: hidden;
}      
.mp-description-detail {
    position: absolute;
    right: 30px;
    top: 13px;
    width: 416px;
    height: 362px;
    overflow: hidden;
} 
.mp-description-view {
    line-height: 40px;
    height: 80px;
}
.mp-description-name {
    font-size: 26px;
    color: #1295ad;
}
.mp-description-level {
    font-size: 20px;
    color: #535353;
}
.mp-description-onesentence {
    font-size: 18px;
    color: #666;
}
.mp-description-onesentence {
    line-height: 42px;
    vertical-align: middle;
}
.mp-description-locationicon {
    width: 17px;
    height: 22px;
    position: relative;
    background-position: 0 0;
    margin-right: 10px;
}
.mp-sprites1-icon {
    background: url(../img/location.png);
    display: inline-block;
}
.mp-description-address {
    display: inline-block;
    width: 200px;
    font-size: 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: normal;
}
.map-icon {
    display: inline-block;
    padding: 0 10px;
    height: 28px;
    line-height: 28px;
    border: 1px solid #b2b2b2;
    margin-left: 10px;
    color: #333;
    font-size: 12px;
    text-decoration: none;
}
.map-icon:hover{
    color: #eee;
    background-color: #555;

}
.mp-description-comments {
    line-height: 42px;
    vertical-align: middle;
}
.mp-description-commentsicon {
    width: 17px;
    height: 21px;
    position: relative;
    background-position: 0 -43px;
    margin-right: 10px;
}
.mp-sprites2-icon {
    background: url(../img/list.png);
    display: inline-block;
}
#mp-description-commentscore span {
    font-size: 24px;
    color: #f60;
}
.mp-description-comments{
    line-height: 42px;
    vertical-align: middle;
}
.mp-description-commentCount a {
    color: #3ab0ff !important;
    font-size: 14px;
    vertical-align: bottom;
    text-decoration: none;
}
.mp-description-weather {
    line-height: 42px;
    vertical-align: middle;
}
.mp-description-weathericon {
    margin-right: 10px;
    width: 22px;
    height: 22px;
    display: inline-block;
    position: relative;
    background-image: url(../img/sun.png);
}
.mp-description-title {
    color: #666;
    font-size: 14px;
    display: inline-block;
    height: 30px;
    line-height: 30px;
    padding-right: 10px;
}
.mp-description-val {
    vertical-align: middle;
    font-size: 12px;
}
.mp-description-weather:hover .mp-description-more{
    display: block;
}
.mp-description-more {
    display: none;
    font-size: 14px;
    position: absolute;
    z-index: 999;
    left: 0;
    top: 235px;
    border: 3px solid #dfdfdf;
    padding: 5px 0 5px 12px;
    width: 235px;
    background-color: #fff;
    text-align: left;
}
.mp-description-narrow {
    background-color: #000;
    position: absolute;
    width: 0;
    height: 0;
    line-height: 0;
    font-size: 0;
    overflow: hidden;
    left: 10px;
    top: -10px;
    z-index: 5;
    border-bottom: 7px solid #dfdfdf;
    border-left: 7px solid #fff;
    border-right: 7px solid #fff;
}
.mp-description-table {
    width: 100%;
    font-size: 12px;
    line-height: 20px;
    border-collapse: collapse;
    border-spacing: 0;
    text-align: left;
    border-color: grey;
}
.mp-description-price {
    width: 418px;
    height: 42px;
    line-height: 42px;
    font-size: 20px;
    position: absolute;
    bottom: 0;
}
.mp-description-price span {
    font-size: 12px;
    color: #666;
    margin-right: 10px;
}
.mp-description-qunar-price{
    vertical-align: middle;

}
.mp-description-qunar-price em {
    margin-right: 5px;
    font-size: 10px;
    color: #f60;
    font-style: inherit;
}
.mp-description-bookingbtn {
    width: 130px;
    height: 42px;
    cursor: pointer;
    background-color: #f60;
    color: #fff;
    text-align: center;
    display: inline-block;
    line-height: 42px;
    font-size: 18px;
    position: absolute;
    right: 0;
    text-decoration: none;
}
.mp-charact-intro {
    padding: 70px 0 30px 70px;
    font-size: 14px;
    position: relative;
    width: 920px;
}
.mp-charact-qutoicon {
    width: 30px;
    height: 30px;
    background: url(../img/yinhao.png)  no-repeat;
    position: absolute;
    top: 75px;
    left: 20px;
    display: inline-block;
}
.mp-charact-time {
    padding: 0 0 30px 70px;
    font-size: 14px;
    position: relative;
    width: 920px;
}
.mp-charact-content {
    margin-bottom: 15px;
}
.mp-charact-timeicon {
    width: 32px;
    height: 32px;
    background: url(../img/time.png) no-repeat;
    position: absolute;
    top: 0;
    left: 20px;
    display: inline-block;
}
.mp-charact-label {
    font-weight: bold;
    color: #333;
}
.mp-charact-desc p {
    line-height: 30px;
}
.mp-characteristic-title {
    margin: 10px auto;
    font-size: 16px;
    color: #333;
    font-weight: bold;
    text-align: center;
}
.mp-charact-event {
    overflow: hidden;
}
.mp-discrib{
    margin: 0 auto;
    width: 990px;
}
.mp-event {
    position: relative;
    margin: 15px 0;
    width: 990px;
    height: 390px;
}
.mp-event-bg {
    width: 210px;
    height: 390px;
    position: absolute;
    right: 0;
    top: 0;
    background-color: #000;
    opacity: .5;
    z-index: 0;
}
.mp-event img {
    width: 990px;
    height: 390px;
}
.mp-event-desc {
    padding: 35px 25px 20px 30px;
    width: 155px;
    height: 335px;
    position: absolute;
    right: 0;
    top: 0;
    color: #fff;
    z-index: 1;
}
.mp-event-desc h3 {
    font-size: 16px;
    margin-bottom: 10px;
}
.mp-event-desc p {
    font-size: 14px;
    line-height: 24px;
}
.mp-charact-littletips {
    border-left: 1px solid #e1e1e1;
    position: relative;
    width: 990px;
    left: 20px;
    margin: 20px auto 0;
}
.mp-littletips-title {
    position: relative;
    left: -17px;
    padding-left: 40px;
    height: 65px;
    line-height: 50px;
    font: 400 20px/48px Microsoft Yahei,Arial,sans-serif;
    background: url(//simg1.qunarzz.com/piao/images/detail_v4/sprite2.png) 0 -410px no-repeat;
}
.mp-littletips-item {
    position: relative;
    zoom: 1;
    overflow: hidden;
    padding-bottom: 20px;
    left: -20px;
    width: 990px;
}
.mp-littletips-icon {
    z-index: 2;
    position: absolute;
    width: 38px;
    height: 38px;
    left: 0;
    top: 0;
    background: url(//simg1.qunarzz.com/piao/images/detail_v4/sprite2.png) 0 -480px no-repeat;
}
.mp-littletips-itemtitle {
    float: left;
    margin: 6px 0 0 48px;
    width: 145px;
    font-size: 18px;
    display: inline-block;
}
.mp-littletips-desc {
    width: 736px;
    float: left;
    margin-left: 10px;
    font-size: 16px;
    padding: 15px 20px;
    border: 1px solid #ddd;
}
.mp-littletips-item p {
    line-height: 28px;
    font-size: 14px;
}
.mp-traffic {
    position: relative;
    margin: 20px auto 0;
    width: 990px;
}
.mp-traffic h2 {
    line-height: 38px;
    font-size: 16px;
    color: #333;
    font-weight: bold;
    text-align: center;
}
.mp-traffic-map {
height: 500px;
border: 1px solid #d5d5d5;
width: 990px;
overflow: hidden;
position: relative;
z-index: 0;
background-color: rgb(243, 241, 236);
color: rgb(0, 0, 0);
text-align: left;
}
.mp-traffic-show {
    position: absolute;
    z-index: 1;
    top: 12px;
    right: 10px;
    padding-right: 20px;
    font-size: 12px;
    background-position: -267px -199px;
    background: url(//simg4.qunarzz.com/piao/images/detail_v3/sprites_iconlight_2.png) no-repeat;
    cursor: pointer;
}
.mp-traffic-transfer {
    padding: 20px 40px;
    background-color: #edefed;
    width: 910px;
    margin: 0 auto;
    font-size: 14px;
    margin-top: 10px;
}
.mp-transfer-title {
    font-weight: bold;
    margin: 15px 0;
}
.mp-transfer-desc {
    line-height: 24px;
}

</style>
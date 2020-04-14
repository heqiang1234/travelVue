<template>
 <div class="container" id="container">
	</div>
</template>
<script>
import loadBMap from '../components/loadBMap.js'
export default {
  data() {
    return {
      mapId: 'BMap-' + parseInt(Date.now() + Math.random()),
      myMap: null
    }
  },
  mounted(){
	 this.baiduMapp();
},
  methods: {
    initMap() {
      console.log('map init')
      loadBMap('uc3tPcyp1t5oXwGbDeifM8lztSNTnnZ3')
        .then((BMap) => {
          // 百度地图API功能
          console.log('init then')
          console.log(BMap);
          this.myMap = new BMap.Map(this.mapId) // 创建Map实例
          this.myMap.centerAndZoom(new BMap.Point(116.404, 39.915), 11) // 初始化地图,设置中心点坐标和地图级别
          //添加地图类型控件
          this.myMap.addControl(
            new BMap.MapTypeControl({
              mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP]
            })
          )
          this.myMap.setCurrentCity('北京') // 设置地图显示的城市 此项是必须设置的
          this.myMap.enableScrollWheelZoom(true) //开启鼠标滚轮缩放
          console.log(BMap)
        })
        .catch(err => {
          console.log(err);
          console.log('地图加载失败')
          
        })
    },
    baiduMapp(){
      loadBMap('uc3tPcyp1t5oXwGbDeifM8lztSNTnnZ3')
        .then((BMap) => {
		let map = new BMap.Map('container'); //创建地图实例
		let point = new BMap.Point(117.861924,29.247904); //创建点坐标
		map.centerAndZoom(point, 15); // 初始化地图，设置中心点坐标和地图级别
		map.enableScrollWheelZoom(true); // 滚轮缩放
		let marker = new BMap.Marker(point) // 创建标注 点
		map.addOverlay(marker)    // 将标注添加到地图中
		map.addControl(new BMap.NavigationControl(BMAP_ANCHOR_TOP_LEFT)); //控件左上角
		//信息窗口内容
		let content = `<div style="margin:0;line-height:20px;padding:2px;"><img src="http://img1.qunarzz.com/sight/p0/1902/96/96c483c113e8d80aa3.water.jpg_280x200_3316b965.jpg" alt="" style="float:right;zoom:1;overflow:hidden;width:100px;height:100px;margin-left:3px;"/>
		地址："江西·上饶·婺源县"<br/>电话："13426647645"<br/>简介："ceshishi测试上次你好"
			</div>
		`;
		//信息窗口标题
		// let title = 
		//创建一个信息窗口实例
		let searchInfoWindow = new BMapLib.SearchInfoWindow(map,content, {
			title  : "婺源篁岭",      //标题
			width  : 290,             //宽度
			height : 105,              //高度
			panel  : "panel",         //检索结果面板
			enableAutoPan : true,     //自动平移
			searchTypes:[
				BMAPLIB_TAB_FROM_HERE, //从这里出发
				BMAPLIB_TAB_SEARCH,   //周边检索
				BMAPLIB_TAB_TO_HERE,  //到这里去
			]
		});
		searchInfoWindow.open(marker);
		//点击红点弹出信息窗口
		marker.addEventListener("click", function(e){
			searchInfoWindow.open(marker);
		})
		// console.log(BMap)
   }).catch(err => {
          console.log(err);
          console.log('地图加载失败')
          
        })
  }
  }
};
</script>
<style scoped>
.map-area {
  width: 100%;
  height: 500px;
}
</style>
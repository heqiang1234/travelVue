<template>
 <!--一定要给宽高，不然会报错，container没有高度-->
  <div id="chart">
    echarts百度地图
  </div>
</template>

<script>
 //引入json数据
  import baiduJSON from '../datas/baiduData'

  export default {
    data(){
      return {}
    },
    mounted(){
       this.getChartsDatas(this.API.ECHARTS.GETEMPCHARTS)//宣讲会可视化数据
      .then(res=>{

        this.NWDatas = res.data.extendInfo.result_list;
      //  this.echart();
      let myChart = this.$echarts.init(document.getElementById('chart'));
      let pointsData = baiduJSON;//其实这一步是多余的
      //把数据处理成需要的格式，只是把数值都改成了1，具体项目可以根据自己实际来处理
       let points_data=this.NWDatas;
       var points=[]
       for (var i = 0; i < points_data.length; i++) {
         var ss=new Array(); 
         ss.push(points_data[i].longitude);
         ss.push(points_data[i].latitude);
         ss.push(1)
          points.push(ss);     
        }
let option;
myChart.setOption(option = {
  animation: false,
  bmap: {
    center: [116.403347,39.922148],
    zoom: 10,
    roam: true
  },
  visualMap: {
    show: true,
    top: 'top',
    min: 0,
    max: 5,
    seriesIndex: 0,
    calculable: true,
    inRange: {
      color: ['blue', 'blue', 'green', 'yellow', 'red']
    }
  },
  series: [{
    type: 'heatmap',
    coordinateSystem: 'bmap',
    data: points,
    pointSize: 5,
    blurSize: 6
  }]
});

        var bmap = myChart.getModel().getComponent('bmap').getBMap();
        bmap.addControl(new BMap.MapTypeControl());
      })
      


    },
    methods:{
       getChartsDatas(url){//获取宣讲会可视化数据
      return this.axios({
        url:url,
      })
    }
    },
  data(){
    return{
      NWDatas:[],
    }
  }
}
</script>

<style>
 #chart{
   width: 100%;
   height: 100%;
 }
</style>

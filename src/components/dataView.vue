<template>
  <div class="warp">
    <Header></Header>
    <div class="chartsBox">
      <div class="chartBox">
        <div id="myChart1" class="ty-form"></div>
        <div class="chart-title"></div>
      </div>
      <div class="chartBox">
        <div id="myChart2" class="ty-form"></div>
        <div class="chart-title"></div>
      </div>
      <div class="chartBox chart3">
        <div id="myChart3" class="ty-form"></div>
        <!-- <div class="chart-title">景点日程</div> -->
      </div>
      <!-- <div class="chartBox">
        <DataMap></DataMap>
        <div class="chart-title">全国人才需求</div>
        <div class="chart-title"></div>
      </div> -->
      <div class="chartBox chart3">
        <DataMap></DataMap>
        <!-- <div class="chart-title">景点分布热力图</div> -->
      </div>
    </div>
    <Footsy></Footsy>
  </div>
</template>
<script>
import Header from "./common/header.vue";
import Footsy from "./common/footsy.vue";
import DataMap from "./common/dataMap.vue"
var echarts = require("echarts");
// 引入柱状图
require("echarts/lib/chart/bar");
// 引入提示框和标题组件
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");
export default {
  components: { Header, Footsy,DataMap },
  data() {
    return {};
  },
  mounted() {
    // 绘制图表
    this.getChartsDatas(this.API.ECHARTS.GETSCENICTYPECHARTS)//宣讲会可视化数据
      .then(res=>{
      //  console.log(res);
        this.empDatas = res.data.extendInfo.result_list;
        this.echart();
      })
      this.getChartsDatas(this.API.ECHARTS.GETSCENICCITYCHARTS)//景点可视化数据
      .then((res)=>{
    //    console.log(res)
        this.posDatas = res.data.extendInfo.result_list;
        this.echartPie();
      })
      this.getChartsDatas(this.API.ECHARTS.GETTOPSCENICCHARTS)
        .then(res=>{
       //   console.log(res);
          this.meetCharts = res.data.extendInfo.result_list;
          this.name_line= this.meetCharts.map((item,index)=>{
              return item.value_name;
            })
          this.value_line= this.meetCharts.map((item,index)=>{
              return item.vaule;
            })
            console.log(this.meetCharts)
          console.log(this.name_line)
           console.log(this.value_line)
          this.echart1();
        })

    
   // this.echartPie1();
  },
  methods: {
    getChartsDatas(url){//获取景点可视化数据
      return this.axios({
        url:url,
      })
    },
    //点击量排行表
    echart() {
      var echarts = require("echarts");

      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById("myChart1"));
      // 不能在单个容器上初始化多个 ECharts 实例。
      //实例容器，一般是一个具有高宽的div元素。
      var colorArray = [
    {
        top: '#ffa800', //黄
        bottom: 'rgba(11,42,84,.3)'
    }, {
        top: '#1ace4a', //绿
        bottom: 'rgba(11,42,84, 0.3)'
    },
    {
        top: '#4bf3ff', //蓝
        bottom: 'rgba(11,42,84,.3)'
    }, {
        top: '#4f9aff', //深蓝
        bottom: 'rgba(11,42,84,.3)'
    },
    {
        top: '#b250ff', //粉
        bottom: 'rgba(11,42,84,.3)'
    }
];
      myChart.setOption({
        backgroundColor: '#FFFFFF',
     tooltip: {
          show: true,
          formatter: "{b}:{c}"
        },
   grid: {
          left: '5%',
          top: '12%',
          right: '1%',
          bottom: '8%',
          containLabel: true
        },
  
    xAxis: {
        type: 'value',
        show:false,
        position: 'top',
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#fff',
            }
        },
        splitLine: {
            show: false
        },
    },
    yAxis: [{
            type: 'category',
            axisTick: {
                show: false,
                alignWithLabel: false,
                length: 5,

            },
            "splitLine": { //网格线
                "show": false
            },
            inverse: 'true', //排序
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#333333',
                }
            },
            data: this.empDatas.map((item,index)=>{
              return item.value_name;
            }),
        }

    ],
    series: [{
            name: '能耗值',
            type: 'bar',
                label: {
                normal: {
                  show: true,
                  position: 'right',
                  formatter: '{c}',
                  textStyle: {
                    color: '#333333' //color of value
                  }
                }
              },
            itemStyle: {
                normal: {
                    show: true,
                    color: function(params) {
                        let num = colorArray.length;
                        return {
                            type: 'linear',
                            colorStops: [{
                                offset: 0,
                                color: colorArray[params.dataIndex % num].bottom
                            }, {
                                offset: 1,
                                color: colorArray[params.dataIndex % num].top
                            }, {
                                offset: 0,
                                color: colorArray[params.dataIndex % num].bottom
                            }, {
                                offset: 1,
                                color: colorArray[params.dataIndex % num].top
                            }, {
                                offset: 0,
                                color: colorArray[params.dataIndex % num].bottom
                            }, {
                                offset: 1,
                                color: colorArray[params.dataIndex % num].top
                            }, {
                                offset: 0,
                                color: colorArray[params.dataIndex % num].bottom
                            }, {
                                offset: 1,
                                color: colorArray[params.dataIndex % num].top
                            }, {
                                offset: 0,
                                color: colorArray[params.dataIndex % num].bottom
                            }, {
                                offset: 1,
                                color: colorArray[params.dataIndex % num].top
                            }, {
                                offset: 0,
                                color: colorArray[params.dataIndex % num].bottom
                            }, {
                                offset: 1,
                                color: colorArray[params.dataIndex % num].top
                            }],
                            //globalCoord: false
                        }
                    },
                    barBorderRadius: 70,
                    borderWidth: 0,
                    borderColor: '#333',
                }
            },
            barGap: '0%',
            barCategoryGap: '50%',
            data: this.empDatas.map((item,index)=>{
              return item.vaule;
            }),
        }

    ]
      });
    },
    echartPie() {
      var echarts = require("echarts");
      var myChart = echarts.init(document.getElementById("myChart2"));
      // 不能在单个容器上初始化多个 ECharts 实例。
      //实例容器，一般是一个具有高宽的div元素。
      var option = {
        title: {
          text: "景点城市分布情况",
          subtext: "",
          x: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: this.posDatas.map((item,index)=>{
            return item.value_name;
          })
        },
        series: [
          {
            name: "城市",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data:this.posDatas.map((item,index)=>{
              return {
                value:item.vaule,
                name:item.value_name
              }
            }),
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      };
      myChart.setOption(option);
       function init(index) {
        myChart.dispatchAction({
          type: "highlight",
          seriesIndex: 0,
          dataIndex: index
        });
      }
      init(0);

     
      //记录上次高亮的索引
      var lastMouseOverIndex = null;
      // mouseover事件，记录当前数据索引并取消其他高亮，over在out之后
      myChart.on("mouseover", function(params) {
        var dataLen = option.series[0].data.length;
        lastMouseOverIndex = params.dataIndex;
        for (var i = 0; i < dataLen; i++) {
          if (i != params.dataIndex) {
            myChart.dispatchAction({
              type: "downplay",
              seriesIndex: 0,
              dataIndex: i
            });
          }
        }
      });
      // mouseout事件，将上次的高亮
      myChart.on("mouseout", function(params) {
        myChart.dispatchAction({
          type: "highlight",
          seriesIndex: 0,
          dataIndex: lastMouseOverIndex
        });
      });
    },
    //宣讲会日程表
    echart1() {
      var echarts = require("echarts");

      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById("myChart3"));
      // 不能在单个容器上初始化多个 ECharts 实例。
      //实例容器，一般是一个具有高宽的div元素。
      var option = {
        backgroundColor: "#FFFFFF",
    grid: {
		left: '12%',
		top: '5%',
		bottom: '12%',
		right: '8%'
	},
    xAxis: {
         data: this.meetCharts.map((item,index)=>{
              return item.value_name;
            }),
        // this.meetCharts.map((item,index)=>{
        //       return item.value_name;
        //     }),
       axisTick: {
			show: false
		},
		axisLine: {
			lineStyle: {
				color: 'rgba(255, 129, 109, 0.1)',
				width: 1 //这里是为了突出显示加上的
			}
		},
		axisLabel: {
			textStyle: {
				color: '#999',
				fontSize: 12
      },
      interval:0
		}
    },
    yAxis: [{
			splitNumber: 3,
			axisTick: {
				show: false
			},
			axisLine: {
				lineStyle: {
					color: 'rgba(255, 129, 109, 0.1)',
					width: 1 //这里是为了突出显示加上的
				}
			},
			axisLabel: {
				textStyle: {
					color: '#999'
				}
			},
			splitArea: {
				areaStyle: {
					color: 'rgba(255,255,255,.5)'
				}
			},
			splitLine: {
				show: true,
				lineStyle: {
					color: 'rgba(255, 129, 109, 0.1)',
					width: 0.5,
					type: 'dashed'
				}
			}
		}
	],
    series: [{
        name: 'hill',
        type: 'pictorialBar',
        barCategoryGap: '0%',
        symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
        label: {
			show: true,
			position: 'top',
			distance: 30,
			color: '#DB5E6A',
			fontWeight: 'bolder',
			fontSize: 20,
		},
        itemStyle: {
            normal: {
				color: {
					type: 'linear',
					x: 0,
					y: 0,
					x2: 0,
					y2: 1,
					colorStops: [{
							offset: 0,
							color: 'rgba(232, 94, 106, .8)' //  0%  处的颜色
						},
						{
							offset: 1,
							color: 'rgba(232, 94, 106, .1)' //  100%  处的颜色
						}
					],
					global: false //  缺省为  false
				}
			},
			emphasis: {
				opacity: 1
			}
        },
         data: this.meetCharts.map((item,index)=>{
              return item.vaule;
            }),
        z: 10
    }]
      };
      myChart.setOption(option);
      function init(index) {
        myChart.dispatchAction({
          type: "highlight",
          seriesIndex: 0,
          dataIndex: index
        });
      }
      init(0);
    },
    //全国人才需求状况
    // echartPie1() {
      // var echarts = require("echarts");
      // var myChart = echarts.init(document.getElementById("myChart4"));
      // 不能在单个容器上初始化多个 ECharts 实例。
      //实例容器，一般是一个具有高宽的div元素。
     
    

      
       
        // for (var i = 0; i < coords.length; i++) {
        //   points.push(api.coord(coords[i]));
        // }

    //   myChart.setOption(option);
    //   init(0);

    //   function init(index) {
    //     myChart.dispatchAction({
    //       type: "highlight",
    //       seriesIndex: 0,
    //       dataIndex: index
    //     });
    //   }
    // }
  },
  data(){
    return{
      empDatas:[],
      posDatas:[],
      name_line:[],
      value_line:[],
    }
  }
};
</script>
<style scoped>
.wrap {
  width: 100%;
  min-width: 1080px;
  overflow: hidden;
}
.chartsBox {
  margin: 20px auto;
  padding: 0px 20px;
  width: 90%;
  min-width: 1080px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.chartBox {
  width: 48%;
  margin-top: 20px;
  padding: 10px;
  height: 500px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}
.ty-form {
  width: 100%;
  height: 400px;
}
.chart-title {
  font-family: "Courier New", Courier, monospace;
  font-size: 30px;
  color: chocolate;
  text-align: center;
  line-height: 100px;
  width: 100%;
}
#myChart3{
  width:96%;
}
.chart3{
  width:100%;
}
</style>
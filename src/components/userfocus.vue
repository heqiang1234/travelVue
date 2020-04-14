<template>
  <div class="warp">
   <Header></Header>
   <Searcher></Searcher>
    <div class="show-post">
      <div class="container bd-box">
        <div v-if="jobList.length>0"  class="tab-content">
          <div v-for="(item) in jobList" :key="item.scenic_spot_id" class="post-card">
            <div class="post-info">
              <div class="post-head">
                <div @click="linkTo({name:'scenic_detail',params:{id:item.scenic_spot_id}})" class="post-name">{{item.scenic_name}}</div>
                <div class="post-pay">{{item.scenic_crawltime}}</div>
              </div>
              <div class="post-body">
                <div class="post-others">
                  <i class="el-icon-location-outline"></i>
                  <span class="post-other">{{item.scenic_area}}</span>
                </div>
              </div>
            </div>
            <div class="company-info">
              <div class="company-name">
                <a href="#">{{item.scenic_level}}</a> 
                 <!-- <button  @click="deletefocus(item.scenic_id)" class="mp-description-bookingbtn">删除</button >     -->
                  <button  @click="confDelete(item.scenic_id)" class="mp-description-bookingbtn">删除</button > 
              </div>
              <div class="company-infor">{{item.scenic_address}} | {{item.scenic_feature}}</div>
            </div>
            <div class="company-logo">
              <div class="logoImg">
                <img :src="item.scenic_img" alt>
              </div>
            </div>
              
          </div>
          
        </div>
        <div v-else class="no-reash">
            <div>
              <i>
                你想要的没有找到
                <br>
                <span>Sorry~QAQ</span>
              </i>
            </div>
          </div>
          <div class="jobs-pagetab">
          <el-pagination
            @current-change="handleCurrentChange"
            :current-page.sync="curPage"
            :page-size="pageSize"
            layout="prev, pager, next, jumper"
            :page-count="pageCount"
          >
          </el-pagination>
        </div>
        
      </div>
    </div>
    <Footsy></Footsy>
    <a class="goto-top" href="#">
      <img src="../assets/right-hn.png" alt>
      回到顶部
    </a>
  </div>
</template>
<script>
import Header from './common/header.vue'
import Searcher from './common/searcher.vue'
import Footsy from "./common/footsy"
export default {
  components:{Header,Searcher,Footsy},
  created(){
      this.getMethodList();
  },
  methods:{
    getMethodList(){
      let that = this;
       this.axios({
          url: that.API.USERINTER.GETUSERINTER,
          methods: "GET",
          params: {
            CurrentPage: that.curPage,
            PageSize: that.pageSize,
          }
        })
        .then(res => {
          console.log(res);
          if(res.data.code != "200"){
            this.$message({
              showClose: true,
              message: res.data.extendInfo.log_error,
              type: "error"
            });
            setTimeout(() => {
            this.replaceTo({
              path: "/login"
            });
          }, 1000);
            return;
          }
          that.jobList = res.data.extendInfo.pagebean.lists;
          console.log(res.data.extendInfo.pagebean.lists);
          that.curPage = res.data.extendInfo.pagebean.currPage;
          if(res.data.extendInfo.pagebean.totalPage > that.curPage+9){
            that.pageCount = that.curPage+9;
          }
          else{
            that.pageCount = res.data.extendInfo.pagebean.totalPage
          }
          })
        .catch(err => {
          console.log(err);
        });
    },
    handleCurrentChange(val){
      this.curJobPage = val;
      this.getMethodList();
    },
   deletefocus(val){
        let that = this;
        console.log(val)
         return this.axios({
        url:this.API.USERINTER.DELUSERINTER,
        params: {
            user_interest_id:val
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
            message: "取消关注成功！",
            type: "success",
            duration: 1500
          });
          this.getMethodList();
      });
    },
    confDelete(val) {
        this.$confirm('此操作将取消关注, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '取消成功!'
          });
           let that = this;
        console.log(val)
         return this.axios({
        url:this.API.USERINTER.DELUSERINTER,
        params: {
            user_interest_id:val
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
            message: "取消关注成功！",
            type: "success",
            duration: 1500
          });
          this.getMethodList();
      });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });

      }
  },
  data(){
    return{
      jobList:[],//职位列表
      curPage:1,//当前页
      totalCount:1,//总条目数
      pageSize:12,//分页容量
      pageCount:10, //分页数量
      key:'',//搜索关键字
      type:''
    }
  }
};
</script>
<style scoped>
.warp {
  width: 100%;
  min-width: 1080px;
}
.header {
  width: 100%;
  height: 56px;
  border-bottom: 1px solid #dadada;
}

.bd-box{
  min-height: 400px;
}
.container {
  justify-content: space-between;
  display: flex;
  height: 100%;
  max-width: 90%;
  align-items: center;
  flex-direction: column;
}

.search {
  width: 100%;
  height: 100px;
  margin-top: 15px;
}
.search-input {
  width: 100%;
  height: 50px;
}
.el-input__inner {
  height: 50px;
  line-height: 50px;
}
.el-input-group__append {
  background-color: #98caf0;
  width: 150px;
  text-align: center;
}
.search-likely {
  margin-left:20px;
  width: 100%;
  height: 50px;
  padding: 10px 0px;
  box-sizing: border-box;
  line-height: 30px;
}
.likely-title {
  font-weight: 600;
  padding-right: 10px;
}
.search-likely > a {
  list-style: none;
  color: #aaa;
  text-decoration: none;
  padding-right: 10px;
}
.search-likely > a:hover {
  color: #0287ee;
}
.tab-list {
  margin-top: 10px;
  height: 40px;
  width: 100%;
  text-align: center;
  line-height: 40px;
  font-family: "微软雅黑";
}
.tab-list li {
  float: left;
  width: 150px;
  height: 100%;
  border-top-left-radius: 20% 100%;
  border-bottom-right-radius: 20% 100%;
  cursor: pointer;
  background-color: #ccc;
  list-style: none;
}
.tab-list li:hover {
  font-size: 16px;
  color: #0287ee;
  background: #eee;
}
.tab-list li:hover .line {
  display: block;
}
.tab-content {

  width: 90%;
  min-height: 500px;
}
.no-reash {
  /* display: none;  */
  color:#dfdfdf;
  font-size: 20px;
  text-align: center;
  height:300px;
  padding-top:150px;
  box-sizing: border-box;
}

.post-card {
  width: 100%;
  height: 120px;
  padding: 20px 0px;
  box-sizing: border-box;
  border-bottom: 1px solid #eee;
  position: relative;
}
.post-info {
  height: 100%;
  width: 40%;
  display: inline-block;
  box-sizing: border-box;
}
.post-head {
  width: 70%;
  height: 40px;
  display: flex;
  justify-content: space-between;
}
.post-name {
  cursor: pointer;
  max-width: 65%;
  line-height: 40px;
  height: 40px;
  font-family: "微软雅黑";
  font-size: 18px;
  text-align: left;
  font-weight: bolder;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.post-pay {
  max-width: 75%;
  height: 40px;
  line-height: 40px;
  text-align: right;
  color: orangered;
}
.post-body {
  width: 60%;
  height: 39px;
  display: flex;
  justify-content: space-between;
}
.post-others {
  height: 100%;
  line-height: 39px;
  padding-left: 0px;
  text-align: left;
}
.post-other {
  color: #666;
  font-size: 14px;
  padding-left: 5px;
}
.company-info {
  height: 100%;
  max-width: 40%;
  display: inline-block;
  box-sizing: border-box;
   white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.company-name {
  height: 40px;
  line-height: 40px;
}
.company-name > a {
  color: #0287ee;
  font-size: 20px;
  text-decoration: none;
}
.company-infor {
  height: 39px;
  color: #aaa;
  line-height: 39px;
}
.company-logo {
  /* width: 29%; */
  height: 100%;
  display: inline-block;
  box-sizing: border-box;
  /* position: relative; */
}
.logoImg {
  width: 79px;
  height: 79px;
  text-align: center;
  position: absolute;
  right: 20px;
  line-height:79px;
}
.logoImg > img {
  width: 100%;
}
.goto-top {
  width: 50px;
  height: 43px;
  font-size: 12px;
  color: #999;
  display: block;
  text-decoration: none;
  text-align: center;
  right: 20px;
  bottom: 100px;
  z-index: 999;
  position: fixed;
}
.goto-top:hover {
  color: #0287ee;
}
.jobs-pagetab{
  text-align: center;
  margin-top:20px;
}
.mp-description-bookingbtn {
    width: 30px;
    height: 15px;
    background-color: #f60;
    color: #fff;
    text-align: center;
    display: inline-block;
    line-height: 10px;
    font-size: 7px;
    right: 0;
    text-decoration: none;
}
</style>


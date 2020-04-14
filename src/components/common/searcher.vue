<template>
  <div @keyup.enter="search"  class="search">
      <div class="search-container">
        <div class="search-input">
          <el-input placeholder="请输入内容"  v-model="searchInfo.searchContent" class="input-with-select">
            <!-- <el-select
                style="width:120px;margin-left:15px;"
                placeholder="选择搜索内容"
                slot="prepend"
                v-model="searchType"
              >
                <el-option label="搜岗位" value = 1></el-option>
                <el-option label="搜宣讲会" value = 2></el-option>
              </el-select> -->
            <el-button  @click="search" style="width:130px;" slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
        <div  @click="getClassfyJobs" class="search-likely">
          <span likely-title>热门搜索：</span>
            <a href="#">北京</a>
            <a href="#">浙江</a>
            <a href="#">上海</a>
            <a href="#">大连</a>
            <a href="#">云南</a>
        </div>
      </div>
    </div>
</template>
<script>
import { searchJobData } from "../../libs/utils";
export default {
  methods:{
    search(){
      console.log("1213")
      console.log(this.searchInfo);
         this.toJobsResult(this.searchInfo.searchContent,this.API.SCENIC.SEARCHSCENIC)
      // switch(this.searchInfo.searchType){
      //   case "搜索框":
      //   case '1':;break;
      // }
    },
    getClassfyJobs(e) {
      //搜索相关职位
      let that = this;
      let key = e.target.innerText;
      console.log(key);
      this.toJobsResult(key,this.API.SCENIC.SEARCHSCENIC)
    },
     toJobsResult(key,url,curPage=1,pageSize=12,Search_Id="Search"){
       searchJobData(key, url,curPage,pageSize,Search_Id)
        .then(res => {
          console.log(res);
          if (res.data.code != "200") {
            this.$message({
              showClose: true,
              message: res.data.extendInfo.login_error,
              type: "error"
            });
            return;
          }
          let initInfo = res.data.extendInfo.pagebean;
          initInfo["searchKey"] = key;
          console.log(initInfo)
          this.linkTo({name:'scenic',params:initInfo});
        })
        .catch(err => {
          console.log(err);
        });
    },
  },
  data(){
    return{
      key:'',//搜索关键字,
    //  searchType:'搜岗位',//搜索类型

      pagination: {
        //分页相关
        curJobPage: 1, //当前职位列表页数
        pageSize: 12, //分页容量
        nextPage: true, //是否有下一页
        totalPage: 1 //职位总页数
      },
      searchInfo: {
        //搜索相关
        searchContent: "", //搜索框内容
        searchPlace: "", //搜索地区范围
        searchType: "搜索框" //搜索内容类型
      }
    }
  }
}
</script>
<style>
  .search {
  width: 100%;
  height: 100px;
  margin-top: 15px;
}
.search-input {
  width: 100%;
  height: 40px;
}
.el-input__inner {
  height: 40px;
  line-height: 40px;
}
 .el-input-group__append {
  width: 150px;
  text-align: center;
}
.search-likely {
  width: 100%;
  height: 50px;
  padding: 10px 0px;
  display: block;
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
.search-container {
  height: 100%;
  max-width: 90%;
  margin: 0px auto;
  flex-direction: column;
}
</style>

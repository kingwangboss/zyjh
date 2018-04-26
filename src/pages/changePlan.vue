<template>
    <div>
        <m-header :title="title">
        </m-header>
        <div class="maincontainer">
            <div class="middle"></div>
            <label class="lab" style="font-size:15px; margin:10px;font-weight:700">已选计划</label>

            <div class="top">
                <div class="btn" v-for="(item,index) in selectNameArr" :key="item" @click="removeBtn(item)">{{item}}
                  <img src="../assets/xx.png" alt="">
                </div>
            </div>

            <div class="middle"></div>

            <div class="planItemCell" v-for="(item,index) in planNameData" :key="index.toString()">
                <label class="lab" style="font-size:14px; margin-top:20px;margin-left:20px;color:#999999">{{item.Group}}</label>
                <div>
                    
                    <div :class="{'btnSelect':selectNameArr.indexOf(item1) >  -1}" class="btn" v-for="item1 in item.PlanList" :key="item1.toString()" @click="addBtn(item1)">{{item1}}
                        <!-- <img src="../../static/images/you_image.png" v-if="selectNameArr.indexOf(item1) >  -1" class="you_image_select" alt=""> -->
                    </div> 
                </div>
            </div>

            <div class="bottom-btnView">

                <button class="bottom-btn" style="background-color: #dc3931;border-color:rgba(0,0,0,0);color:#fff;" @click="ok">确定</button>
                <button class="bottom-btn" style="background-color: #f77329;border-color:rgba(0,0,0,0);color:#fff;" @click="cancel">重置</button>
                
            </div>

        </div>
    </div>
</template>


<style lang="less" scoped>
.lab {
  text-align: left;
  width: 100%;
  color:#de3953;
}

.maincontainer {
  display: flex;
  flex-direction: column;
  margin-bottom: 45px;
}

.top {
  margin-bottom: 10px;
  .btn {
    height: 28px;
    align-content: center;
    background-size: 100% 100%;
    float: left;
    margin-left: 10px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    padding: 0px 0px 0 14px;
    font-size: 13px;
    border-radius: 5px;
    border: 1px solid #dddddd;
    color: #666666;
    
    img{
      width: 16px;
      height: 16px;
      position: relative;
      top: -10px;
      right: -8px;
    }
    // background-image: url("../../static/images/Select-05.png");
  }
}

.middle {
  height: 10px;
  background: rgb(245, 245, 245);
  border-top: 1px solid rgb(225, 225, 225);
  border-bottom: 1px solid rgb(225, 225, 225);
}

.planItemCell {
  display: flex;
  flex-direction: column;

  .btn {
    height: 30px;
    align-content: center;
    float: left;
    margin-left: 10px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    padding: 0px 15px 0px 15px;
    font-size: 13px;
    color: black;
    // background-size: 100% 100%;
    // background-image: url('../../../static/images/Select-05.png')
    border-radius: 5px;
    // border: 1px solid rgb(222, 222, 222);
    border: 1px solid #dddddd;
  }
  .btnSelect {
    height: 30px;
    line-height: 30px;
    align-content: center;
    float: left;
    margin-left: 10px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    padding: 0px 15px 0px 15px;
    font-size: 13px;
    color: #fc5c42;
    // background-size: 100% 100%;
    // background-image: url('../../../static/images/Select-06.png')
    border-radius: 5px;
    border: 1px solid #fc5c42;
  }
  .you_image_select {
    // width: 20px;
    height: 20px;
    position: relative;
    right: 0px;
    bottom: -8px;
  }
  .you_image {
    // width: 20px;
    height: 20px;
    position: relative;
    right: 0px;
    bottom: -8px;
  }
}

.bottom-btnView {
  width: 100%;
  position: fixed;
  bottom: 0;
  height: 40px;
  display: flex;
  justify-content: space-between;
}

.bottom-btn {
  width: 50%;
  border-radius: 0px;
}
</style>


<script>
import mHeader from "../components/hearder/Hearder";
import sha256 from "../util/sha256";
export default {
  data() {
    return {
      title: {
        text: "更改计划",
        showBack: true
      },
      planNameData: "",
      selectNameArr: []
    };
  },
  comments: {},
  created() {
    this.selectNameArr = localStorage.selectNameArr.split(",");
    // console.log(this.selectNameArr);
  },
  components: {
    mHeader
  },
  methods: {
    isSelect(item1) {
      if (this.selectNameArr.indexOf(item1) >= 0) {
        return true;
      } else {
        return false;
      }
    },
    getData() {
      let tokenCode = localStorage.tokenCode;
      let signStr =
        "Action=GetAllPlanNames" +
        "&SID=" +
        localStorage.sid +
        "&Token=" +
        localStorage.Token +
        tokenCode;
      let data = new FormData();
      data.append("Action", "GetAllPlanNames");
      data.append("SID", localStorage.sid);
      data.append("Token", localStorage.Token);
      data.append("Sign", sha256.sha256(signStr).toUpperCase());
      this.$http
        .post(localStorage.SiteUrl, data)
        .then(res => {
          this.planNameData = res.data.Data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    remove(arr, item) {
      var result = [];
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] != item) {
          result.push(arr[i]);
        }
      }
      return result;
    },
    removeBtn(item) {
      this.selectNameArr = this.remove(this.selectNameArr, item);
    },
    addBtn(item1) {
      if (this.selectNameArr.indexOf(item1) >= 0) {
        this.selectNameArr = this.remove(this.selectNameArr, item1);
      } else {
        this.selectNameArr.push(item1);
      }
    },
    ok() {
      let tokenCode = localStorage.tokenCode;
      let signStr =
        "Action=UpdatePlanList" +
        "&SID=" +
        localStorage.sid +
        "&Token=" +
        localStorage.Token +
        "&PlanList=" +
        this.selectNameArr.join(",") +
        tokenCode;
      let data = new FormData();
      data.append("Action", "UpdatePlanList");
      data.append("SID", localStorage.sid);
      data.append("Token", localStorage.Token);
      data.append("PlanList", this.selectNameArr.join(","));
      data.append("Sign", sha256.sha256(signStr).toUpperCase());
      this.$http
        .post(localStorage.SiteUrl, data)
        .then(res => {
          // this.planNameData = res.data.Data;
          if (res.data.Code == "Suc") {
            this.$router.go(-1);
          } else {
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    cancel() {
      // this.$router.go(-1);
      this.selectNameArr = [];
    }
  },
  mounted() {
    // 调用请求数据的方法
    this.getData();
  }
};
</script>

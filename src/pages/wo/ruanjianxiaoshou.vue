<template>
    <div>
        <m-header :title="title"></m-header>
        <div class="content">
            <div class="top">
                <div class="top-content">
                    <input v-if="!disabled" class="item1" placeholder="请输入客户的通行证" type="text" @input="inputFuction" v-model="user_name">
                    <input v-else class="item11" placeholder="请输入客户的通行证" type="text" @input="inputFuction" v-model="user_name">
                    <div v-if="!disabled" class="item2">搜索</div>
                    <div v-else class="item22" @click="commit">搜索</div>
                </div>
            </div>

            <div class="line"></div>

            <div class="middle">
                服务列表
            </div>

            <div class="bottom" v-for="(item,index) in myData.PriceList" @click="select(index)">
                <div class="left">
                    <div class="left-top">{{item.AuthTitle}}</div>
                    <div class="left-bottom">
                        <div>原价：￥</div>
                        <div style="margin-right:46px;">{{item.SourcePrice}}</div>
                        <div style="color:rgb(255,111,4)">成本：￥</div>
                        <div style="color:rgb(255,111,4)">{{item.Price}}</div>
                    </div>
                </div>
                <div class="right">
                    <div class="rightbg">
                        <img v-show="ind == index" style="width:14px;margin-top:3px;" src="../../assets/wo/clickicon.png" alt="">
                    </div>
                </div>
            </div>

            <div v-show="disabled1" class="ps">{{myData.DesceList}}</div>

            <el-button v-show="disabled1 == 2" class="btnDefault" type="primary" @click="okclick">下一步</el-button>
            <el-button v-show="disabled1 == 1" class="btnEnable" type="primary">下一步</el-button>
            
        </div>
    </div>
</template>

<style lang="less" scoped>
#bundle {
  .juzhong {
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
  }
}
.top {
  .top-content {
    margin: 64px 15px 20px 15px;
    display: flex;
    flex-direction: row;
    .item1 {
      width: 70%;
      height: 35px;
      line-height: 100%;
      outline: none;
      border: 1px solid #bdbdbd;
      border-radius: 5px;
      padding-left: 10px;
      font-size: 15px;
    }
    .item11 {
      width: 70%;
      height: 35px;
      line-height: 100%;
      outline: none;
      border: 1px solid rgb(255, 111, 4);
      border-radius: 5px;
      padding-left: 10px;
      font-size: 15px;
    }
    .item2 {
      margin-left: 10px;
      height: 35px;
      width: 80px;
      background: #bdbdbd;
      border: 1px solid #bdbdbd;
      border-radius: 5px;
      #bundle > .juzhong;
      color: white;
      font-weight: bold;
    }
    .item22 {
      margin-left: 10px;
      height: 35px;
      width: 80px;
      background: rgb(255, 111, 4);
      border: 1px solid rgb(255, 111, 4);
      border-radius: 5px;
      #bundle > .juzhong;
      color: white;
      font-weight: bold;
    }
  }
}
.line {
  height: 5px;
  background: rgb(236, 236, 236);
  width: 100%;
}

.middle {
  padding: 10px 0 10px 16px;
  text-align: left;
  border-bottom: 1px solid rgb(236, 236, 236);
  color: rgb(51, 51, 51);
  font-weight: bold;
  font-size: 15px;
}
.bottom {
  display: flex;
  justify-content: space-between;
  padding: 10px 19px 10px 16px;
  border-bottom: 1px solid rgb(236, 236, 236);
  .left {
    .left-top {
      margin-bottom: 15px;
      text-align: left;
      font-size: 18px;
      color: rgb(51, 51, 51);
    }
    .left-bottom {
      margin-top: 15px;
      display: flex;
      flex-direction: row;
      font-size: 14px;
      color: rgb(51, 51, 51);
    }
  }
  .right {
    #bundle > .juzhong;
    .rightbg {
      background-image: url(../../assets/wo/bgicon.png);
      background-size: 100% 100%;
      background-repeat: no-repeat;
      width: 20px;
      height: 20px;
    }
  }
}
.ps {
  margin-top: 10px;
  color: rgb(255, 111, 4);
  font-size: 14px;
}
.btnDefault {
  margin-top: 30px;
  height: 40px;
  width: 90%;
  border-radius: 5px;
  background-color: #ff7003;
  border: 0;
  color: white;
  font-size: 18px;
}
.btnEnable {
  margin-top: 30px;
  height: 40px;
  width: 90%;
  border-radius: 5px;
  background-color: #bdbdbd;
  border: 0;
  color: white;
  font-size: 18px;
}
</style>

<script>
import mHeader from "../../components/hearder/Hearder";
export default {
  data() {
    return {
      title: {
        text: "软件销售",
        showBack: true,
        jilu: true
      },
      user_name: "",
      disabled: false,
      disabled1: 0,
      myData: "",
      ind:-1
    };
  },
  components: {
    mHeader
  },
  methods: {
    inputFuction() {},
    commit() {
      let tokenCode = localStorage.tokenCode;
      let signStr =
        "Action=GetAgentServicePrice" +
        "&SID=" +
        localStorage.sid +
        "&Token=" +
        localStorage.Token +
        "&PassPort=" +
        this.user_name +
        tokenCode;
      let data = new FormData();
      data.append("Action", "GetAgentServicePrice");
      data.append("SID", localStorage.sid);
      data.append("Token", localStorage.Token);
      data.append("PassPort", this.user_name);
      data.append("Sign", this.$sha256.sha256(signStr).toUpperCase());
      console.log(this.$global.url);
      this.$http
        .post(this.$global.url, data)
        .then(res => {
          if (typeof res.data.Data.PriceList != "undefined") {
            this.disabled1 = 1;
            this.myData = res.data.Data;
          } else {
            this.myData = "";
            this.disabled1 = 0;
            this.ind = -1;
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    select(index){
        this.ind = index;
        this.disabled1 = 2;
        console.log(this.ind);
    },
    okclick() {
        this.$router.push('/wo/fuwuxiangqing')
    }
  },
  watch: {
    user_name: function(now, old) {
      if (this.user_name.length > 0) {
        this.disabled = true;
      } else {
        this.disabled = false;
      }
    }
  }
};
</script>

<template>
    <div class="header-wrapper">
        <div class="header">
            <div class="title-wrapper">
                <span v-if="title.showBack" class="back" @click="back">
                    <img src="../../assets/back.png" alt="返回" />
                </span>

                <span v-if="title.showQH" class="back" @click="qhCaizhong">
                    <img src="../../assets/left-qh.png" alt="" />
                </span>
                <span v-if="title.suoshuiQH" class="back" @click="suoshuiQH">
                    <img src="../../assets/left-qh.png" alt="" />
                </span>
                
                <span class="title">{{title.text}}</span>

                <div class="vipI" v-if="title.vip" @click="vipClick">
                  <img src="../../assets/dl/icon11.png" alt="">
                  <span>我的特权</span>
                </div>
              

                <span v-if="title.right" class="right" @click="right">
                    <img src="../../assets/sousuobtn.png" alt="搜索" />
                </span>

                <span v-if="title.setting" class="right" @click="setting">
                    <img src="../../assets/settings.png" alt="设置" />
                </span>

                <span v-if="title.wosetting" class="right" @click="wosetting">
                    <img src="../../assets/settings.png" alt="设置" />
                </span>

                <span v-if="title.ok" class="right" @click="okClick">
                    <span>确定</span>
                </span>

                <span v-if="title.changeOK" class="right" @click="changeOkClick">
                    <span>确定</span>
                </span>

                <span v-if="title.suoshuiright" class="right" @click="suoshuiright">
                    <span>确定</span>
                </span>

                <span v-if="title.mingxi" class="right" @click="mingxi">
                    <span>明细</span>
                </span>
                <span v-if="title.jilu" class="right" @click="jilu">
                    <span>记录</span>
                </span>
                
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.vipI{
  position: absolute;
  left: 50%;
  margin-left: 40px;
  top: 4px;
  img{
    width: 15px;
  }
  span{
    position: relative;
    top: -3px;
    font-size: 12px;
    color: rgb(255, 111, 4);
  }
}
.header-wrapper {
  top: 0;
  right: 0;
  left: 0;
  position: fixed;
  z-index: 4;
  .header {
    height: 44px;
    // background-color: rgb(219, 60, 62);
    background: url(../../assets/jianbian.png);
    background-size: 100%;
    line-height: 44px;
    text-align: center;
    .title-wrapper {
      font-size: 15px;
      color: #fcfcfc;
      span {
        display: inline-block;
      }
      .title {
        width: 74%;
        font-weight: 500;
      }
      .back {
        width: 12%;
        margin-left: -13%;
        img {
          width: 20px;
          height: 20px;
          line-height: 20px;
          vertical-align: middle;
          padding: 3px;
        }
      }
      .right {
        width: 12%;
        margin-right: -13%;
        img {
          width: 20px;
          height: 20px;
          line-height: 20px;
          vertical-align: middle;
          padding: 3px;
        }
      }
    }
  }
}
</style>


<script>
import sha256 from "../../util/sha256";
export default {
  props: {
    title: {
      type: Object
    }
  },
  data() {
    return {};
  },
  methods: {
    right() {
      this.$router.push("/planVC/planDetail/setParameter");
    },
    qhCaizhong() {
      this.$router.push("/XZcaizhong");
    },

    setting() {
      console.log(localStorage.shujufenxi);
      if (localStorage.shujufenxi == "1") {
        this.$router.push("/shujufenxi/setting1");
      } else if (localStorage.shujufenxi == "2") {
        this.$router.push("/shujufenxi/setting2");
      } else if (localStorage.shujufenxi == "3") {
        this.$router.push("/shujufenxi/setting3");
      } else if (localStorage.shujufenxi == "4") {
        this.$router.push("/shujufenxi/setting4");
      } else {
      }
    },
    okClick() {
      console.log("确定");
      if (localStorage.shujufenxi == "1") {
        console.log(localStorage.selectKeyNumberName1.split(","));
        console.log(localStorage.allKeyNumName1);
        var selectNum = [];
        for (
          var j = 0;
          j < localStorage.selectKeyNumberName1.split(",").length;
          j++
        ) {
          for (
            var i = 0;
            i < localStorage.allKeyNumName1.split(",").length;
            i++
          ) {
            if (
              localStorage.selectKeyNumberName1.split(",")[j] ==
              localStorage.allKeyNumName1.split(",")[i]
            ) {
              selectNum.push(i);
            } else {
            }
          }
        }
        localStorage.keyNum1 = selectNum;
        this.$router.go(-1);
        console.log(selectNum);
      } else if (localStorage.shujufenxi == "2") {
        console.log(localStorage.selectKeyNumberName2.split(","));
        console.log(localStorage.allKeyNumName2);
        var selectNum = [];
        for (
          var j = 0;
          j < localStorage.selectKeyNumberName2.split(",").length;
          j++
        ) {
          for (
            var i = 0;
            i < localStorage.allKeyNumName2.split(",").length;
            i++
          ) {
            if (
              localStorage.selectKeyNumberName2.split(",")[j] ==
              localStorage.allKeyNumName2.split(",")[i]
            ) {
              selectNum.push(i);
            } else {
            }
          }
        }
        localStorage.keyNum2 = selectNum;
        this.$router.go(-1);
        console.log(selectNum);
      } else if (localStorage.shujufenxi == "3") {
        localStorage.Norm1 = localStorage.selectKeyNumberName3;
        this.$router.go(-1);
      } else if (localStorage.shujufenxi == "4") {
        localStorage.Norm2 = localStorage.selectKeyNumberName4;
        this.$router.go(-1);
      } else {
      }
    },
    
    back() {
      this.$router.go(-1);
    },
    shousuo() {
      // this.$router.push()
    },
    wosetting(){
      this.$router.push("/wo/setting");
    },
    mingxi(){
      this.$router.push("/wo/mingxi");
    },
    jilu(){
      this.$router.push("/wo/xiaoshoujilu");
    },
    changeOkClick() {
      localStorage.sid = localStorage.sid1;
      localStorage.czname = localStorage.czname1;
      if (localStorage.isLogin == "true") {
        let signStr =
          localStorage.sid +
          localStorage.user_name + this.$global.AppType + this.$global.AppCode + this.$global.AppVersion +
          localStorage.pwd;
        let data = new FormData();
        data.append("Action", "Login");
        data.append("SID", localStorage.sid);
        data.append("Account", localStorage.user_name);
        data.append("AppType", this.$global.AppType);
        data.append("AppCode",  this.$global.AppCode);
        data.append("AppVersion", this.$global.AppVersion);
        data.append("Sign", sha256.sha256(signStr).toUpperCase());

        this.$http
          .post(this.$global.url, data)
          .then(res => {
            if (res) {
              localStorage.uid = res.data.Data.UID;
              localStorage.AuthTypeName = res.data.Data.AuthTypeName;
              localStorage.SiteUrl = res.data.Data.SiteUrl;
              localStorage.AuthType = res.data.Data.AuthType;
              localStorage.Username = res.data.Data.NickName;
              localStorage.Token = res.data.Data.Token;
              localStorage.PayType = res.data.Data.PayType;
              localStorage.tokenCode = sha256
                .sha256(res.data.Data.Token + localStorage.pwd)
                .toUpperCase();

              localStorage.removeItem("keyNum1");
              localStorage.removeItem("keyNum2");
              localStorage.removeItem("Norm1");
              localStorage.removeItem("Norm2");
              localStorage.removeItem("selectDataCount1");
              localStorage.removeItem("selectDataCount2");
              localStorage.removeItem("shujufenxi");
              localStorage.removeItem("activeName2");
              localStorage.removeItem("playtype");
              localStorage.removeItem("playtypenew");

              this.$router.push({
                path: "/planVC"
              });
            }
          })
          .catch(error => {
            console.log(error);
          });
      } else {
        this.$router.push({
          path: "/"
        });
      }
    },
  }
};
</script>
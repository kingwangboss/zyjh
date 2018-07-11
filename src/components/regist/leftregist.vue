<template>
    <div class="container" @touchmove.prevent>
        <form @submit.prevent="submit">
        <div>
            <div class="div-bor">
                <i class="icon-user"></i>
                <input class="input" v-model="mobile.num" type="text" maxlength="11" onkeyup="this.value=this.value.replace(/\D/g,'')" placeholder="请输入手机号码" @input="inputFuction">
            </div>

          <div class="top">
            
            <div class="div-bor">
                <i class="icon-verify"></i>
                <input type="text" class="input1" v-model="mobile.verify" maxlength="11" placeholder="请输入验证码" @input="inputFuction"> 
                <el-button class="btn" @click="getVcode">获取验证码</el-button>
            </div>
            
            
          </div>
          <div class="bottom">

            <div class="div-bor">
                <i class="icon-pwd"></i>
                <input class="input" v-model="mobile.newpwd1" type="password" maxlength="18" placeholder="请输入密码" @input="inputFuction">
            </div>
            <div class="div-bor">
                <i class="icon-pwd"></i>
                <input class="input" v-model="mobile.newpwd2" type="password" maxlength="18" placeholder="请确认密码" @input="inputFuction">
            </div>
            
            
          </div>
        </div>
        <el-button v-if="disabled" :disabled="disabled" class="btnEnable" type="primary" native-type="submit">注册</el-button>
        <el-button v-else :disabled="disabled" class="btnDefault" type="primary" native-type="submit">注册</el-button>
      </form>
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

::-webkit-input-placeholder {
  /* WebKit browsers */
  color: rgb(186, 189, 188);
  font-size: 13px;
}
.container {
  padding-top: 10%;
  padding-bottom: 50%;
  background: rgb(235, 235, 235);
  #bundle > .juzhong;
  .div-bor {
    position: relative;
    width: 270px;
    margin-bottom: 10%;
    height: 40px;
    line-height: 42px;
    // border: solid #dedede 1px;
    border-radius: 4px;
    background-color: white;
    .input {
      background: red;
      outline: none;
      background-color: transparent;
      margin-top: 3px;
      width: 100%;
      padding-left: 40px;
      font-size: 16px;
      color: black;
    }
    .input1 {
      outline: none;
      background-color: transparent;
      margin-top: 3px;
      position: absolute;
      left:40px;
      top:8px;
      // margin-left: -20px;
      font-size: 16px;
      color: black;
    }
  }

  .icon-user {
    position: absolute;
    left: 12px;
    top: 11px;
    z-index: 5;
    background-image: url("../../assets/login_regist/ALL2160_06-10.png");
    background-size: 70% 70%;
    /*引入图片图片*/
    background-repeat: no-repeat;
    /*设置图片不重复*/
    background-position: 0px 0px;
    /*图片显示的位置*/
    width: 25px;
    /*设置图片显示的宽*/
    height: 28px;
    /*图片显示的高*/
  }
  .icon-pwd {
    position: absolute;
    left: 12px;
    top: 11px;
    z-index: 5;
    background-image: url("../../assets/login_regist/ALL2160_12.png");
    background-size: 70% 70%;
    /*引入图片图片*/
    background-repeat: no-repeat;
    /*设置图片不重复*/
    background-position: 0px 0px;
    /*图片显示的位置*/
    width: 25px;
    /*设置图片显示的宽*/
    height: 28px;
    /*图片显示的高*/
  }
  .icon-verify {
    position: absolute;
    left: 11px;
    top: 11px;
    z-index: 5;
    background-image: url("../../assets/login_regist/ALL2160_14.png");
    background-size: 70% 70%;
    /*引入图片图片*/
    background-repeat: no-repeat;
    /*设置图片不重复*/
    background-position: 0px 0px;
    /*图片显示的位置*/
    width: 28px;
    /*设置图片显示的宽*/
    height: 25px;
    /*图片显示的高*/
  }

  .top {
    margin-top: 10%;
    display: flex;
    flex-direction: row;

    .btn {
      outline: none;
      position: absolute;
      padding: 8px 10px;
      margin-top: 5px;
      right: 11px;
      border-radius: 4px;
      //   background-color: #f0f0f0;
      border: solid #dedede 1px;
      color: #999999;
      font-size: 12px;
      align-content: center;
      background-image: url("../../assets/login_regist/btn.png");
      background-size: 100% 100%;
      background-repeat: no-repeat;
      background-position: 0px 0px;
    }
  }
  .bottom {
    display: flex;
    flex-direction: column;
  }

  .btnDefault {
    margin-top: 30px;
    width: 100%;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    border: 0;
    color: #fff;
    font-size: 18px;
    background: #db3a3d;
  }
  .btnEnable {
    margin-top: 30px;
    width: 100%;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    border: 0;
    color: #fff;
    font-size: 18px;
    background: #bdbdbd;
  }
}
</style>

<script>
export default {
  data() {
    return {
      mobile: {
        num: "",
        verify: "",
        newpwd1: "",
        newpwd2: "",
        vcode: ""
      },
      disabled: true
    };
  },
  methods: {
    inputFuction() {
      if (
        this.mobile.num > 0 &&
        this.mobile.verify.length > 0 &&
        this.mobile.newpwd1.length > 0 &&
        this.mobile.newpwd2.length > 0
      ) {
        this.disabled = false;
      } else {
        this.disabled = true;
      }
    },

    getVcode() {
      var that = this;
      let data = new FormData();
      data.append("Action", "GetVCode");
      data.append("SID", localStorage.sid);
      this.$http.post(this.$global.url, data).then(res => {
        console.log(res);
        this.mobile.vcode = res.data.Data;
        let data1 = new FormData();
        data1.append("Action", "SendRegSMS");
        data1.append("SID", localStorage.sid);
        data1.append("Mobile", that.mobile.num);
        data1.append("AppType", that.$global.AppType);
        data1.append("VCode", that.mobile.vcode);
        that.$http
          .post(this.$global.url, data1)
          .then(res => {
            console.log(res);
          })
          .catch(error => {
            console.log(error);
          });
      });
    },

    submit: function(event) {
      var formData = JSON.stringify(this.user); // 这里才是你的表单数据
      console.log(formData);

      let data = new FormData();
      data.append("Action", "MobileReg");
      data.append("SID", localStorage.sid);
      data.append("AppVersion", this.$global.AppVersion);
      data.append("Mobile", this.mobile.num);
      data.append("AppType", this.$global.AppType);
      data.append(
        "Pwd",
        this.$sha256.sha256(this.mobile.newpwd2).toUpperCase()
      );
      data.append("SMSCode", this.mobile.verify);
      data.append("AppCode", this.$global.AppCode);
      localStorage.pwd = this.$sha256.sha256(this.mobile.newpwd2).toUpperCase();
      this.$http
        .post(this.$global.url, data)
        .then(res => {
          if (res.data.Code === "Suc") {
            localStorage.isLogin = true;

            localStorage.uid = res.data.Data.UID;
            localStorage.AuthTypeName = res.data.Data.AuthTypeName;
            localStorage.SiteUrl = res.data.Data.SiteUrl;
            localStorage.AuthType = res.data.Data.AuthType;
            localStorage.Username = res.data.Data.NickName;
            localStorage.Token = res.data.Data.Token;
            localStorage.PayType = res.data.Data.PayType;
            localStorage.tokenCode = this.$sha256
              .sha256(
                res.data.Data.Token +
                  this.$sha256.sha256(this.mobile.newpwd2).toUpperCase()
              )
              .toUpperCase();

            localStorage.user_name = this.mobile.num;
            localStorage.user_pwd = this.mobile.newpwd1;
            localStorage.AgentName = res.data.Data.AgentName;
            localStorage.ARID = res.data.Data.ARID;
            localStorage.YesOrNoModify = res.data.Data.YesOrNoModify;
            localStorage.YesOrNoRebate = res.data.Data.YesOrNoRebate;
            localStorage.YesOrNoWindows = res.data.Data.YesOrNoWindows;
            this.$router.push({
              path: "/"
            });
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<template>
  <div class="maincontainer">
    <div class="userinfo">
      <img class="userinfo-avatar" src="../assets/wo/User-104.png" background-size="cover"></img>
      <span class="userinfo-nickname">{{nickname}}</span>
    </div>
    <!-- //0,2不显示
  //1,4代理商
  //3,在线充值 -->
    <div class="bottom">
      <div v-show="AgentState == 3" class="bottom-cell" :style="{width:ojwidth+'px',height:ojwidth+'px'}">
        <img src="../assets/wo/zxcz.png" @click="onlineChongzhi"></img>
        <span>在线充值</span>
      </div>

      <div v-show="AgentState == 1 || AgentState == 4" class="bottom-cell" :style="{width:ojwidth+'px',height:ojwidth+'px'}">
        <img src="../assets/wo/dls.png" @click="xiaoshou"></img>
        <span>代理销售</span>
      </div>


      <div class="bottom-cell" :style="{width:ojwidth+'px',height:ojwidth+'px'}" @click="kefuClick">
        <img src="../assets/wo/zxkf.png"></img>
        <span>在线客服</span>
      </div>

      <div class="bottom-cell" :style="{width:ojwidth+'px',height:ojwidth +'px'}" @click="shouquanClick">
        <img src="../assets/wo/wdsq.png"></img>
        <span>我的授权</span>
      </div>

      <div class="bottom-cell" :style="{width:ojwidth+'px',height:ojwidth+'px'}" @click="XGpwdClick">
        <img src="../assets/wo/mmgl.png"></img>
        <span>密码管理</span>
      </div>

      <div class="bottom-cell" :style="{width:ojwidth+'px',height:ojwidth+'px'}" @click="feedbackClick">
        <img src="../assets/wo/yjfk.png"></img>
        <span>意见反馈</span>
      </div>

      <div class="bottom-cell" :style="{width:ojwidth+'px',height:ojwidth+'px'}" @click="aboutClick">
        <img src="../assets/wo/gywm.png"></img>
        <span>关于我们</span>
      </div>

    </div>

    <div class="bottom-btndiv">
      <el-button type="text" class="bottom-btn" @click="loginOut">退出登录</el-button>
    </div>
  </div>
</template>

<style lang="less" scoped>
.maincontainer{
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgb(240, 240, 240);
}
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url(../assets/jianbian.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

.userinfo-avatar {
  width: 64px;
  height: 64px;
  margin: 10px;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #fff;
  font-size: 18px;
  padding-bottom: 10px;
}

.middle {
  background: #F0F0F0;
  height: 10px;
}

.rightLine{
  background: gray;
  height: 10px;
}

.bottom {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  margin: 5px 5px 0 5px;
}

.bottom-cell {
  width: 124px;
  height: 124px;
  // border: 1px solid gray; 
  // border-style: none solid solid none;
  flex-direction: column;
  display: -webkit-flex;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
  background: white;
  margin: 5px;
  span{
    font-size: 12px;
    // line-height: 20px;
    margin-top: 10px;
  }
}

.bottom-cell img {
  width: 40px;
  height: 40px;
  margin-top: -10px;
}


.bottom-cell text {
  text-align: center;
  font-size: 26px;
  color: gray;
}

.bottom-btnView {
  width: 100%;
  position: fixed;
  bottom: 10px;
  height: 40px;
  display: flex;
  justify-content: center;
}

.bottom-btn {
  background: rgb(255, 111, 4);
  margin-top: 40px;
  margin-bottom: 20px;
  width: 70%;
  height: 40px;
  font-size: 16px;
  color: #fff;
}
</style>

<script>
export default {
  components: {},
  data() {
    return {
      screenWidth: document.body.clientWidth,
      nickname: localStorage.Username,
      paytype: localStorage.PayType,
      // AgentState: localStorage.AgentState,
      AgentState:1,
    };
  },
  mounted() {
    const that = this;
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth;
        that.screenWidth = window.screenWidth;
      })();
    };
  },
  methods: {
    loginOut() {
      // localStorage.clear();
      localStorage.isLogin = false;
      // localStorage.removeItem('isLogin');
      // localStorage.removeItem('sid');
      localStorage.removeItem("uid");
      localStorage.removeItem("AuthTypeName");
      localStorage.removeItem("SiteUrl");
      localStorage.removeItem("AuthType");
      localStorage.removeItem("Username");
      localStorage.removeItem("Token");
      localStorage.removeItem("PayType");
      localStorage.removeItem("QQUrl");
      localStorage.removeItem("tokenCode");
      localStorage.removeItem("OfficialUrl");
      localStorage.removeItem("tab");
      localStorage.removeItem("shujufenxi");
      localStorage.removeItem("activeName2");

      this.$router.push({
        path: "/"
      });
    },
    kefuClick() {
      window.location.href = localStorage.QQUrl;
      // window.open();
    },
    shouquanClick() {
      this.$router.push({
        path: "/wo/shouquan"
      })
    },
    XGpwdClick() {
      this.$router.push({
        path: "/wo/XGpwd"
      })
    },
    feedbackClick() {
      this.$router.push({
        path: "/wo/feeback"
      })
    },
    aboutClick() {
      this.$router.push({
        path: "/wo/about"
      })
    },
    onlineChongzhi() {
      this.$router.push({
        path: "/wo/chongzhi"
      })
    },
    xiaoshou() {
      this.$router.push({
        path: "/wo/dailixiaoshou"
      })
    }
  },
  watch: {
    screenWidth(val) {
      if (!this.timer) {
        this.screenWidth = val;
        this.timer = true;
        let that = this;
        setTimeout(function() {
          that.timer = false;
        }, 400);
      }
    }
  },
  computed: {
    ojwidth: {
      // getter
      get: function() {
        var ojwidth;
        var margin;
        var colnum = 3; //列
        colnum = 6 > colnum ? colnum : 6;
        var rownum = 6 / colnum; //行
        margin = 5; //间距
        ojwidth = (this.screenWidth -10 - 2 * (margin) * colnum) / colnum ; //格子的宽
        return ojwidth;
      },
      // setter
      set: function(newValue) {}
    }
  }
};
</script>


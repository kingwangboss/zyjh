<template>
  <div class="maincontainer">
    <div class="userinfo">
      <img class="userinfo-avatar" src="../assets/wo/User-104.png" background-size="cover"></img>
      <span class="userinfo-nickname">{{nickname}}</span>
    </div>

    <div class="middle-tip" v-show="AgentState == 3" @click="chengweidailishang">
      <div class="left">限时申请超级代理</div>
      <span class="right">截止日期</span>
    </div>

    <div class="middle" v-show="AgentState == 3" @click="chengweidailishang">
      <img class="left" src="../assets/wo/icon3.png" alt="">
      <marquee class="center" behavior="scroll" direction="left">3折销售</marquee>
      <img class="right" src="../assets/wo/icon4.png" alt="">
    </div>

    <div class="line"></div>

    <div class="bottom-tip">
      服务
    </div>
    <!-- //0,2不显示
        //1,4代理商
        //3,在线充值 -->
    <div class="bottom">
      <div v-show="AgentState == 3" class="bottom-cell" :style="{width:ojwidth+'px',height:ojwidth - 20+'px'}" @click="chengweidailishang">
        <img src="../assets/wo/dls.png"></img>
        <span>代理机制2</span>
      </div>

      <div v-show="AgentState == 1 || AgentState == 4" class="bottom-cell" :style="{width:ojwidth+'px',height:ojwidth -20 +'px'}" @click="xiaoshou">
        <img src="../assets/wo/dls.png"></img>
        <span>代理系统</span>
      </div>

      <div v-show="AgentState == 0" class="bottom-cell" :style="{width:ojwidth+'px',height:ojwidth - 20 +'px'}">
        <img src="../assets/wo/dls.png" @click="xiaoshou"></img>
        <span>代理机制1</span>
      </div>


      <div class="bottom-cell" :style="{width:ojwidth+'px',height:ojwidth - 20 +'px'}" @click="kefuClick">
        <img src="../assets/wo/zxkf.png"></img>
        <span>在线客服</span>
      </div>

      <div class="bottom-cell" :style="{width:ojwidth+'px',height:ojwidth -20  +'px'}" @click="shouquanClick">
        <img src="../assets/wo/wdsq.png"></img>
        <span>我的授权</span>
      </div>

      <div class="bottom-cell" :style="{width:ojwidth+'px',height:ojwidth - 20+'px'}" @click="XGpwdClick">
        <img src="../assets/wo/mmgl.png"></img>
        <span>密码管理</span>
      </div>

      <div class="bottom-cell" :style="{width:ojwidth+'px',height:ojwidth - 20+'px'}" @click="feedbackClick">
        <img src="../assets/wo/yjfk.png"></img>
        <span>意见反馈</span>
      </div>

      <div class="bottom-cell" :style="{width:ojwidth+'px',height:ojwidth -20+'px'}" @click="aboutClick">
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
  // position: fixed;
  width: 100%;
  height: 100%;
  // background: rgb(240, 240, 240);
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

.middle-tip{
  display: flex;
  flex-direction: row;
  background: white;
  border-bottom: 1px solid #f0f0f0;
  .left{
    font-weight: bold;
    margin:10px 0 10px 10px; 
    text-align: left;
  }
  .right{
    background: rgb(255, 111, 4);
    height: 20px;
    padding: 0px 4px;
    line-height: 20px;
    margin:8px 0 8px 10px;
    font-size: 14px;
    color: white;
    border-radius: 3px;
  }
}

.middle{
  display: flex;
  flex-direction: row;
  height: 54px;
  line-height: 54px;
  .left{
    width: 30px;
    height: 30px;
    margin: 12px 15px;
  }
  .right{
    width: 20px;
    height: 20px;
    margin: 17px 15px;
  }
  .center{
    width: 100%;
    color: rgb(255, 111, 4);
  }
}

.line {
  background: #F0F0F0;
  height: 5px;
}

.rightLine{
  background: gray;
  height: 10px;
}

.bottom-tip{
  margin-bottom: 1px;
  background: white;
  padding: 10px 0 10px 10px;
  text-align: left;
  font-weight: bold;
}

.bottom {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  // margin: 5px 5px 0 5px;
  border-top: 1px solid #F0F0F0;
  border-bottom: 1px solid #F0F0F0;
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
  // margin: 5px;
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
      AgentState:3,
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
    },
    chengweidailishang(){
      this.$router.push({
        path: "/wo/chengweidailishang"
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
        ojwidth = this.screenWidth / colnum ; //格子的宽
        return ojwidth;
      },
      // setter
      set: function(newValue) {}
    }
  }
};
</script>


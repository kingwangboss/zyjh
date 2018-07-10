<template>
    <div>
        <m-header :title="title"></m-header>
        <div class="cell" @click="feedback">
            <div class="cell-left">
                <span>意见反馈</span>
            </div>
                
            <div class="iv-arrow"></div>
        </div>
        <div class="line1"></div>

        <div class="cell" @click="XGpwd">
            <div class="cell-left">
                <span>密码管理</span>
            </div>
                
            <div class="iv-arrow"></div>
        </div>
        <div class="line"></div>

        <div class="cell" @click="logout">
            <span style="width:100%;">退出登录</span>
        </div>
        <div class="line1"></div>
    </div>
</template>

<style lang="less" scoped>
.iv-arrow {
  margin-right: 15px;
  border-top: 1px solid rgb(122, 122, 122);
  border-right: 1px solid rgb(122, 122, 122);
  width: 8px;
  height: 8px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
.cell {
  width: auto;
  height: 54px;
  flex-direction: row;
  display: -webkit-flex;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: space-between;
  background: white;
  .cell-left {
    width: auto;
    height: 54px;
    flex-direction: row;
    display: -webkit-flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: flex-start;
    span {
      margin-left: 10px;
      text-align: center;
      font-size: 15px;
    }
  }
}

.line {
  background: #f0f0f0;
  height: 10px;
}
.line1 {
  background: #f0f0f0;
  height: 1px;
}
</style>

<script>
import mHeader from "../../components/hearder/Hearder";
export default {
  data() {
    return {
      title: {
        text: "设置",
        showBack: true
      }
    };
  },
  components: {
    mHeader
  },
  methods: {
    feedback() {
      this.$router.push("/wo/feedback");
    },
    XGpwd() {
      this.$router.push("/wo/XGpwd");
    },
    logout() {
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
    }
  }
};
</script>

<template>
    <div>
    <m-header :title="title"></m-header>
    <div class="btnview">
      
      <div class="content">
            <el-button :class="{ 'btnDefault' : isA, 'btnEnable': !isA}" type="text" @click="btnClick">充值</el-button>
            <div class="line"></div>
            <el-button :class="{ 'btnEnable' : isA, 'btnDefault': !isA}" type="text" @click="btnClick">提现</el-button>
      </div>
      <i :class="{ 'def' : isA, 'ena': !isA}" class="def"></i>
    </div>

    <leftChongzhi :tixianData="tixianData" v-show="!isA"></leftChongzhi>
    <rightTixian :tixianData="tixianData" v-show="isA"></rightTixian>

  </div>
</template>

<style lang="less" scoped>
.line {
  margin: 10px 0px 10px 0px;
  background: #efefef;
  width: 2px;
}
.def {
  position: absolute;
  left: 75% - 4vw;
  bottom: -0vw;
  background-image: url("../../assets/wo/jiantou.png");
  background-size: 100% 100%;
  /*引入图片图片*/
  background-repeat: no-repeat;
  /*设置图片不重复*/
  background-position: 0px 0px;
  /*图片显示的位置*/
  width: 8vw;
  /*设置图片显示的宽*/
  height: 4vw;
  /*图片显示的高*/
}

.ena {
  position: absolute;
  left: 25% - 4vw;
  bottom: -0vw;
  background-image: url("../../assets/wo/jiantou.png");
  background-size: 100% 100%;
  /*引入图片图片*/
  background-repeat: no-repeat;
  /*设置图片不重复*/
  background-position: 0px 0px;
  /*图片显示的位置*/
  width: 8vw;
  /*设置图片显示的宽*/
  height: 4vw;
  /*图片显示的高*/
}

.btnview {
  width: 100%;
  height: 30vw;
  position: relative;
  background: url(../../assets/login_regist/r_bg.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  .content {
    position: relative;
    top: 50% - 8vw;
    display: flex;
    flex-direction: row;
  }

  .btnDefault {
    width: 50%;
    height: 100%;
    font-weight: bold;
    font-size: 4vw;
    color: rgb(226, 130, 130);
  }
  .btnEnable {
    width: 50%;
    height: 100%;
    font-weight: bold;
    font-size: 4vw;
    color: white;
  }
}
</style>

<script>
import mHeader from "../../components/hearder/Hearder";
import leftChongzhi from "../../components/woyaotixian/leftchongzhi";
import rightTixian from "../../components/woyaotixian/righttixian";
export default {
  data() {
    return {
      title: {
        text: "我要提现",
        showBack: true
      },
      isA: false,
      tixianData:'',
    };
  },

  components: {
    mHeader,
    leftChongzhi,
    rightTixian
  },
  methods: {
    btnClick(event) {
      this.isA = !this.isA;
    },
    getData() {
      let tokenCode = localStorage.tokenCode;
      let signStr =
        "Action=GetAgentWithdrawCost" +
        "&SID=" +
        localStorage.sid +
        "&Token=" +
        localStorage.Token +
        tokenCode;
      let data = new FormData();
      data.append("Action", "GetAgentWithdrawCost");
      data.append("SID", localStorage.sid);
      data.append("Token", localStorage.Token);
      data.append("Sign", this.$sha256.sha256(signStr).toUpperCase());
      this.$http
        .post(this.$global.url, data)
        .then(res => {
            this.tixianData = res.data.Data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {
    this.getData();
  }
};
</script>

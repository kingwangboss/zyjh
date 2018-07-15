<template>
    <div>
        <m-header :title="title"></m-header>
        <div class="main">
            <div class="top">{{myData.AuthTitle}}</div>
            <div class="middle">
                <div class="middle-left">原价￥{{myData.SourcePrice}}</div>
                <div class="middle-right">成本价￥{{myData.Price}}</div>
            </div>
            <div class="bottom">
                <div class="bottom-left">
                    <div class="item1">优惠</div>
                    <div class="item2">优惠券抵消金额：</div>
                    <div class="item2">￥{{myData.AllowRewardCost}}</div>
                </div>
                <div class="bottom-right">
                    <div class="item2">实际支付价格：</div>
                    <div class="item1">￥{{myData.RealCost}}</div>
                </div>
            </div>
        </div>
        <el-button class="btnDefault" type="primary" @click="okclick">确定</el-button>
    </div>
</template>

<style lang="less" scoped>
.btnDefault {
  margin-top: 50px;
  height: 40px;
  width: 90%;
  border-radius: 5px;
  background-color: #ff7003;
  border: 0;
  color: white;
  font-size: 18px;
}
.main {
  display: flex;
  flex-direction: column;
  padding: 2vw;
  border-bottom: 1px solid rgb(236, 236, 236);
  .top {
    font-size: 4.5vw;
    color: rgb(51, 51, 51);
    font-weight: bold;
    text-align: left;
  }
  .middle {
    margin-top: 15px;
    display: flex;
    flex-direction: row;
    font-size: 3.5vw;
    color: rgb(51, 51, 51);
    .middle-left {
      margin-right: 40px;
    }
  }
  .bottom {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    .bottom-left {
      display: flex;
      flex-direction: row;
      align-items: baseline;
      .item1 {
        border: 1px solid rgb(255, 111, 4);
        color: rgb(255, 111, 4);
        font-size: 4vw;
      }
      .item2 {
        margin-left: 1vw;
        font-size: 3.5vw;
        color: rgb(51, 51, 51);
      }
    }
    .bottom-right {
      display: flex;
      flex-direction: row;
      align-items: baseline;
      .item1 {
        color: rgb(255, 111, 4);
        font-size: 5vw;
      }
      .item2 {
        font-size: 3.5vw;
        color: rgb(51, 51, 51);
      }
    }
  }
}
</style>

<script>
import mHeader from "../../components/hearder/Hearder";
export default {
  data() {
    return {
      title: {
        text: "服务详情",
        showBack: true
      },
      username: this.$route.query.user_name,
      pid: this.$route.query.pid,
      myData: ""
    };
  },
  components: {
    mHeader
  },
  methods: {
    getData() {
      // 请求数据
      let tokenCode = localStorage.tokenCode;
      let signStr =
        "Action=GetAgentServicePriceByPID" +
        "&SID=" +
        localStorage.sid +
        "&Token=" +
        localStorage.Token +
        "&PID=" +
        this.pid +
        "&PassPort=" +
        this.username +
        tokenCode;
      let data = new FormData();
      data.append("Action", "GetAgentServicePriceByPID");
      data.append("SID", localStorage.sid);
      data.append("Token", localStorage.Token);
      data.append("PID", this.pid);
      data.append("PassPort", this.username);
      data.append("Sign", this.$sha256.sha256(signStr).toUpperCase());
      this.$http
        .post(this.$global.url, data)
        .then(res => {
          this.myData = res.data.Data;
          this.myData.SourcePrice = this.myData.SourcePrice.toFixed(2);
          this.myData.Price = this.myData.Price.toFixed(2);
          this.myData.AllowRewardCost = this.myData.AllowRewardCost.toFixed(2);
          this.myData.RealCost = this.myData.RealCost.toFixed(2);
        })
        .catch(error => {
          console.log(error);
        });
    },
    okclick() {
      let tokenCode = localStorage.tokenCode;
      let signStr =
        "Action=UserAgentAuthorize" +
        "&SID=" +
        localStorage.sid +
        "&Token=" +
        localStorage.Token +
        "&PID=" +
        this.pid +
        "&PassPort=" +
        this.username +
        tokenCode;
      let data = new FormData();
      data.append("Action", "UserAgentAuthorize");
      data.append("SID", localStorage.sid);
      data.append("Token", localStorage.Token);
      data.append("PID", this.pid);
      data.append("PassPort", this.username);
      data.append("Sign", this.$sha256.sha256(signStr).toUpperCase());
      this.$http
        .post(this.$global.url, data)
        .then(res => {
          if(res.data.Code == 'Suc'){
            this.$router.push('/planVC')
          }
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

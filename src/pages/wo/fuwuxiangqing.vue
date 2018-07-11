<template>
    <div>
        <m-header :title="title"></m-header>
        <div class="main">
            <div class="top">赢彩王</div>
            <div class="middle">
                <div class="middle-left">原价</div>
                <div class="middle-right">成本价</div>
            </div>
            <div class="bottom">
                <div class="bottom-left">
                    <div class="item1">优惠</div>
                    <div class="item2">优惠券抵消金额：</div>
                    <div class="item2">444</div>
                </div>
                <div class="bottom-right">
                    <div class="item2">实际支付价格：</div>
                    <div class="item1">￥2222</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.main {
  display: flex;
  flex-direction: column;
  padding: 15px;
  border-bottom: 1px solid rgb(236, 236, 236);
  .top {
    font-size: 18px;
    color: rgb(51, 51, 51);
    font-weight: bold;
    text-align: left;
  }
  .middle {
    margin-top: 15px;
    display: flex;
    flex-direction: row;
    font-size: 14px;
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
      }
      .item2 {
        margin-left: 5px;
        font-size: 14px;
        color: rgb(51, 51, 51);
      }
    }
    .bottom-right {
      display: flex;
      flex-direction: row;
      align-items: baseline;
      .item1 {
        color: rgb(255, 111, 4);
        font-size: 25px;
      }
      .item2 {
        font-size: 14px;
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
      }
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
        tokenCode;
      let data = new FormData();
      data.append("Action", "GetAgentServicePriceByPID");
      data.append("SID", localStorage.sid);
      data.append("Token", localStorage.Token);
      data.append("Sign", this.$sha256.sha256(signStr).toUpperCase());
      this.$http
        .post(this.$global.url, data)
        .then(res => {

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

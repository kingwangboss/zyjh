<template>
    <div class="container">
        <div class="item">
            <img style="width:4vw;" src="../../assets/wo/tixianicon.png" alt="">
            <div style="margin-left:10px;color:rgb(255,113,5);padding-top:5px;">{{WithdrawRemark}}</div>
        </div>
        <div class="line1"></div>
        <div class="item">
            <div>最大可提现金额：</div>
            <div style="color:rgb(255,113,5);font-weight: bold;">{{tixian.RebateFund}}</div>
        </div>
        <div class="line2"></div>
        <div class="item">
            <div>充值金额：</div>
            <div style="color:rgb(255,113,5);font-weight: bold;">￥</div>
            <input type="number" class="price" v-model="price" oninput="if(value.length>7)value=value.slice(0,7)" placeholder="请输入充值金额" @input="inputFuction">
        </div>
        <div class="line2"></div>
        <div class="item" style="align-items: flex-start;">
            <div>充值备注：</div>
            <textarea type="text" class="ps" v-model="ps" placeholder="请输入您想说的内容" @input="inputFuction"></textarea>
        </div>

        <el-button v-if="!disabled" class="btnEnable" type="primary" >提交申请</el-button>
        <el-button v-else class="btnDefault" type="primary" @click="submit">提交申请</el-button>
    </div>
</template>

<style lang="less" scoped>
.item {
  padding: 18px 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 4vw;
}

.line1 {
  background: #f0f0f0;
  height: 1px;
  width: 100%;
}

.line2 {
  background: #f0f0f0;
  height: 10px;
  width: 100%;
}

::-webkit-input-placeholder {
  /* WebKit browsers */
  color: #c7c9c9;
  font-size: 4vw;
}

.price {
  outline: none;
  color: rgb(255, 113, 5);
  font-weight: bold;
  font-size: 4vw;
}

.ps {
  height: 20vw;
  margin-left: 6px;
  margin-right: 15px;
  margin-top: -5px;
  outline: none;
  color: rgb(255, 113, 5);
  font-weight: bold;
  font-size: 4vw;
}

.btnDefault {
  position: absolute;
  bottom: 20px;
  left: 10%;
  height: 40px;
  width: 80%;
  border-radius: 5px;
  background-color: #ff7003;
  border: 0;
  color: white;
  font-size: 18px;
}
.btnEnable {
  position: absolute;
  bottom: 20px;
  left: 10%;
  height: 40px;
  width: 80%;
  border-radius: 5px;
  background-color: #bdbdbd;
  border: 0;
  color: white;
  font-size: 18px;
}
</style>

<script>
export default {
  props: ["tixianData"],
  data() {
    return {
      tixian: Object,
      disabled: false,
      price: "",
      ps: "",
    };
  },
  created() {
    this.tixian = this.tixianData;
  },
  watch: {
    tixianData: function(now, old) {
      this.tixian = now;
    },
    price(now, old) {
      if (now < this.tixian.MinWithdrawCost) {
        this.price = this.tixian.MinWithdrawCost;
      } else {
      }
    }
  },
  computed: {
    WithdrawRemark: function() {
      return (this.tixian.WithdrawRemark || "").split(";")[0];
    }
  },
  methods: {
    inputFuction() {
      if (this.price.length > 0) {
        this.disabled = true;
      } else {
        this.disabled = false;
      }
    },
    submit() {
      let tokenCode = localStorage.tokenCode;
      let signStr =
        "Action=SubmitAgentWithdraw" +
        "&SID=" +
        localStorage.sid +
        "&Token=" +
        localStorage.Token +
        "&Cost=" +
        this.price +
        "&WithdrawRemark=" +
        this.ps +
        "&Options=" +
        this.tixian.WithdrawType.split(";")[0] +
        tokenCode;
      let data = new FormData();
      data.append("Action", "SubmitAgentWithdraw");
      data.append("SID", localStorage.sid);
      data.append("Token", localStorage.Token);
      data.append("Cost", this.price);
      data.append("WithdrawRemark", this.ps);
      data.append("Options", this.tixian.WithdrawType.split(";")[0]);
      data.append("Sign", this.$sha256.sha256(signStr).toUpperCase());
      this.$http
        .post(this.$global.url, data)
        .then(res => {

        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

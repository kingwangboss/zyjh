<template>
    <div>
        <m-header :title="title"></m-header>
        <div class="userinfo">
          <div class="top">
            <div class="top-top">余额总数（元）</div>
            <div class="top-bottom">{{PlanData.Fund}}</div>
          </div>
        </div>
        <div class="container">
            <div class="title">充值金额</div>
            <div class="middle">
              <div class="input">
                  <div v-if="disabled" class="icon1">￥</div>
                  <div v-else class="icon">￥</div>
                  <input class="item1" placeholder="0" type="number" @input="inputFuction" v-model="price">
              </div>
            </div>

            <div class="top">
                <div class="top-item" v-for="(item,index) in PlanData.RechargeFreeList.split(',')" @click="priceClick(item)">{{item}}元</div>
            </div>

            <div class="mark">
              {{PlanData.Remark}}
            </div>

            <!-- <div class="middle">
                <div class="input">
                    <div v-if="disabled" class="icon1">￥</div>
                    <div v-else class="icon">￥</div>
                    <input class="item1" placeholder="0" type="number" @input="inputFuction" v-model="price">
                </div>
                <div class="mark">
                    {{PlanData.Remark}}
                </div>
            </div> -->

            <el-button v-if="disabled" class="btnDefault" type="primary" @click="submit">立即充值</el-button>
            <el-button v-else class="btnEnable" type="primary">立即充值</el-button>

        </div>
    </div>
</template>

<style lang="less" scoped>
::-webkit-input-placeholder {
  color: #bdbdbd;
  font-size: 30px;
  font-weight: bold;
  height: 100%;
  line-height: 100%;
}
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url(../../assets/jianbian.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  .top {
    display: flex;
    flex-direction: column;
    width: 100%;
    .top-top {
      text-align: left;
      color: white;
      padding-left: 15px;
      font-weight: bold;
      font-size: 4vw;
    }
    .top-bottom {
      text-align: left;
      color: white;
      padding: 20px 0 20px 15px;
      font-size: 15vw;
      font-weight: bold;
    }
  }
}

.title {
  width: 100%;
  text-align: left;
  padding: 5px 0 5px 10px;
}
.container {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgb(240, 240, 240);
}
.top {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 5px 0 10px 0;
  .top-item {
    margin-top: 5px;
    background: white;
    padding: 3vw 0;
    width: 49%;
  }
}

.middle {
  background: white;
  padding: 2px 0;
  .input {
    position: relative;
    margin: 10px;
    border: 1px solid rgb(255, 113, 5);
    border-radius: 5px;
    height: 10vw;
    line-height: 10vw;
  }
  .icon {
    position: absolute;
    height: 10vw;
    line-height: 10vw;
    left: 10px;
    // top: 13px;
    font-size: 30px;
    color: #bdbdbd;
    font-weight: bold;
  }
  .icon1 {
    position: absolute;
    height: 10vw;
    line-height: 10vw;
    left: 10px;
    // top: 13px;
    font-size: 30px;
    color: rgb(255, 113, 5);
    font-weight: bold;
  }
  .item1 {
    font-size: 30px;
    height: 100%;
    line-height: 100%;
    outline: none;
    color: rgb(255, 113, 5);
  }
}
.mark {
  margin-left: 10px;
  text-align: left;
  color: rgb(255, 113, 5);
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
        text: "账户余额",
        showBack: true,
        mingxi:true,
      },
      PlanData: "",
      disabled: false,
      price: ""
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
        "Action=GetRechargeFreeList" +
        "&SID=" +
        localStorage.sid +
        "&Token=" +
        localStorage.Token +
        tokenCode;
      let data = new FormData();
      data.append("Action", "GetRechargeFreeList");
      data.append("SID", localStorage.sid);
      data.append("Token", localStorage.Token);
      data.append("Sign", this.$sha256.sha256(signStr).toUpperCase());
      this.$http
        .post(this.$global.url, data)
        .then(res => {
          this.PlanData = res.data.Data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    priceClick(price) {
      this.price = price;
    },
    inputFuction() {
      if (this.price < 100) {
        this.price = 100;
      }
    },
    submit() {
      let tokenCode = localStorage.tokenCode;
      let signStr =
        "Action=SubmitRecharge" +
        "&SID=" +
        localStorage.sid +
        "&Token=" +
        localStorage.Token +
        "&Cost=" +
        this.price +
        tokenCode;
      let data = new FormData();
      data.append("Action", "SubmitRecharge");
      data.append("SID", localStorage.sid);
      data.append("Token", localStorage.Token);
      data.append("Cost", this.price);
      data.append("Sign", this.$sha256.sha256(signStr).toUpperCase());
      this.$http
        .post(this.$global.url, data)
        .then(res => {
          window.location.href = res.data.Data.PayParamUrl;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {
    this.getData();
  },
  watch: {
    price: function(now, old) {
      console.log(now);
      console.log(old);
      if (this.price.toString().length > 0) {
        this.disabled = true;
      } else {
        this.disabled = false;
      }
    }
  }
};
</script>

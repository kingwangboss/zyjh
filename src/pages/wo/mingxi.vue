<template>
    <div>
        <m-header :title="title"></m-header>
        <div>
            <div v-show="myData.length > 0" class="cell" v-for="(item,index) in myData">
                <div class="cell-top">
                    <div class="top-left">线下充值</div>
                    <div class="top-right">{{item.CreateTime.split(' ')[0]}}</div>
                </div>
                <div class="cell-bottom">
                    <div class="bottom-left">￥{{item.Cost}}</div>
                    <div class="bottom-right">{{item.CreateTime.split(' ')[1]}}</div>
                </div>
            </div>
            <div v-show="myData.length  == 0">
                <img style="width:50%;margin-top:100px;" src="../../assets/wo/icon1.png" alt="">
                <div style="margin-top:20px;font-size:18px;color:rgb(189,189,189)">您还未有过充值记录...</div>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.cell {
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #f0f0f0;
  .cell-top {
    display: flex;
    justify-content: space-between;
    .top-left {
      margin: 5px 0 5px 10px;
    }
    .top-right {
      margin: 5px 10px 5px 0px;
    }
  }
  .cell-bottom {
    display: flex;
    justify-content: space-between;
    color: rgb(255, 111, 4);
    .bottom-left {
      margin: 5px 0 5px 10px;
    }
    .bottom-right {
      margin: 5px 10px 5px 0px;
      font-size: 13px;
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
        text: "明细",
        showBack: true
      },
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
    getData() {
      let tokenCode = localStorage.tokenCode;
      let signStr =
        "Action=GetUserRecharge" +
        "&SID=" +
        localStorage.sid +
        "&Token=" +
        localStorage.Token +
        tokenCode;
      let data = new FormData();
      data.append("Action", "GetUserRecharge");
      data.append("SID", localStorage.sid);
      data.append("Token", localStorage.Token);
      data.append("Sign", this.$sha256.sha256(signStr).toUpperCase());
      this.$http
        .post(this.$global.url, data)
        .then(res => {
          if (typeof res.data.Data.Record == "undefined") {
            this.myData = [];
          } else {
            this.myData = res.data.Data.Record;
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

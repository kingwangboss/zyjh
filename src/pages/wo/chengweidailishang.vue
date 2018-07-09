<template>
    <div>
        <m-header :title="title"></m-header>
        <div class="container">
            <div class="cell" v-for="(item,index) in arr">
                <div class="item1">
                    <img v-show="index==0" style="height:25px;" src="../../assets/wo/cjdls.png" alt="">
                    <img v-show="index==1" style="height:25px;" src="../../assets/wo/gjdls.png" alt="">
                    <img v-show="index==2" style="height:25px;" src="../../assets/wo/bydls.png" alt="">
                    <div v-if="item.RoleID == 1 || item.RoleID == 2" style="margin-left:6px;">截止日期：{{RechargeFreeTime}}</div>
                </div>
                <div class="item2">{{item.Remark}}</div>
                <div class="item3" v-if="item.RoleID == 1 || item.RoleID == 2" @click="submit(item.MinRecharge)">立即申请</div>
                <div class="item3" v-else-if="item.RoleID == 3" @click="pushqq">联系客服</div>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.container {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgb(240, 240, 240);
}
.cell {
  margin: 10px 15px;
  position: relative;
  background-color: #ffffff;
  overflow: hidden;
  box-shadow: 0 2px 5px #333333;
  border-radius: 5px;
  .item1 {
    display: flex;
    justify-content: flex-start;
    margin: 10px 20px 0 20px;
    align-items: baseline;
    font-size: 14px;
    color: rgb(220, 57, 62);
  }
  .item2 {
    margin: 12px 20px 0 20px;
    text-align: left;
    font-size: 15px;
    line-height: 30px;
  }
  .item3 {
    margin: 15px 0px 17px 0px;
    background: rgb(255, 111, 4);
    width: 100px;
    position: relative;
    left: 50%;
    margin-left: -50px - 20px;
    color: white;
    font-size: 20px;
    font-weight: bold;
    padding: 6px 20px;
    border-radius: 5px;
  }
}
</style>

<script>
import mHeader from "../../components/hearder/Hearder";
export default {
  data() {
    return {
      title: {
        text: "成为代理商",
        showBack: true
      },
      arr: [],
      RechargeFreeTime: "",
      QQUrl:'',
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
        "Action=GetAgentRoleInfo" +
        "&SID=" +
        localStorage.sid +
        "&Token=" +
        localStorage.Token +
        tokenCode;
      let data = new FormData();
      data.append("Action", "GetAgentRoleInfo");
      data.append("SID", localStorage.sid);
      data.append("Token", localStorage.Token);
      data.append("Sign", this.$sha256.sha256(signStr).toUpperCase());
      this.$http
        .post(this.$global.url, data)
        .then(res => {
          this.arr = res.data.Data.Data;
          this.RechargeFreeTime = res.data.Data.RechargeFreeTime;
          this.QQUrl = res.data.Data.QQUrl;
        })
        .catch(error => {
          console.log(error);
        });
    },
    submit(price) {
      let tokenCode = localStorage.tokenCode;
      let signStr =
        "Action=SubmitRecharge" +
        "&SID=" +
        localStorage.sid +
        "&Token=" +
        localStorage.Token +
        "&Cost=" +
        price +
        tokenCode;
      let data = new FormData();
      data.append("Action", "SubmitRecharge");
      data.append("SID", localStorage.sid);
      data.append("Token", localStorage.Token);
      data.append("Cost", price);
      data.append("Sign", this.$sha256.sha256(signStr).toUpperCase());
      this.$http
        .post(this.$global.url, data)
        .then(res => {
          window.location.href = res.data.Data.PayParamUrl;
        })
        .catch(error => {
          console.log(error);
        });
    },
    pushqq(){
      window.location.href = localStorage.QQUrl;
    }
  },
  mounted() {
    this.getData();
  }
};
</script>

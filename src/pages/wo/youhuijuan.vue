<template>
    <div>
        <m-header :title="title"></m-header>
        <div class="userinfo">
            <div class="content">
                <div class="item1">
                    <div class="top">优惠券总额</div>
                    <div class="bottom">{{myData.TotalRewardCost}}元</div>
                </div>
                <div class="item2"></div>
                <div class="item1">
                    <div class="top">优惠券数量</div>
                    <div class="bottom">{{myData.AllowRewardNum}}张</div>
                </div>
            </div>
        </div>

        <div class="youhuijuan" v-if="myData.AllowRewardNum > 0" v-for="(item,index) in myData.AllowRewardNum">
            <img class="left" src="../../assets/wo/youhuijuan.png" alt="">
            <div class="right">
                <div class="top">
                    <div style="color:rgb(255, 111, 4)">￥</div>
                    <div style="color:rgb(255, 111, 4);font-size:29px;font-weight: bold;">{{myData.AllowRewardCost}}</div>
                </div>
                <div style="color:rgb(255, 111, 4);font-size:15px;" class="bottom">有效期：{{myData.AllowRewardExpiration}}</div>
            </div>
        </div>
        <div class="wu" v-else>
            暂无优惠券
        </div>
    </div>
</template>

<style lang="less" scoped>
#bundle {
  .juzhong {
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
  }
}

.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url(../../assets/jianbian.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  .content {
    display: flex;
    //   flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin: 20px 0;
    .item1 {
      width: 50%;
      display: flex;
      flex-direction: column;
      #bundle > .juzhong;
      color: white;
      .top {
        font-size: 18px;
        margin-bottom: 20px;
      }
      .bottom {
        font-size: 25px;
        font-weight: bold;
      }
    }
    .item2 {
      height: 60px;
      width: 1px;
      background: white;
    }
  }
}
.youhuijuan {
  margin: 10px 20px;
  height: 100px;
  display: flex;
  flex-direction: row;
  .left {
    width: 35%;
    z-index: 2;
  }
  .right {
    width: 65%;
    display: flex;
    flex-direction: column;
    background-image: url(../../assets/wo/biankuang1.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    padding-top: 25px;
    .top {
      height: 50%;
      //   background: radial-gradient(6px at left top, transparent 50%, red 50%);
      display: flex;
      flex-direction: row;
      #bundle > .juzhong;
      align-items: baseline;
    }
    .bottom {
      height: 50%;
      //   background: radial-gradient(6px at left bottom, transparent 50%, white 50%);
    }
  }
}
.wu{
    margin-top: 20px;
}
</style>

<script>
import mHeader from "../../components/hearder/Hearder";
export default {
  data() {
    return {
      title: {
        text: "优惠券",
        showBack: true
      },
      myData:"",
    };
  },
  components: {
    mHeader
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      // 请求数据
      let tokenCode = localStorage.tokenCode;
      let signStr =
        "Action=GetUserReward" +
        "&SID=" +
        localStorage.sid +
        "&Token=" +
        localStorage.Token +
        tokenCode;
      let data = new FormData();
      data.append("Action", "GetUserReward");
      data.append("SID", localStorage.sid);
      data.append("Token", localStorage.Token);
      data.append("Sign", this.$sha256.sha256(signStr).toUpperCase());
      console.log(this.$global.url);
      this.$http
        .post(this.$global.url, data)
        .then(res => {
          this.myData = res.data.Data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

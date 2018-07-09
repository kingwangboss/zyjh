<template>
    <div class="maincontainer">
        <div class="userinfo">
            <img class="userinfo-avatar" src="../assets/wo/User-104.png" background-size="cover"></img>
            <span class="userinfo-nickname">{{nickname}}</span>
        </div>

        <div class="middle-tip" v-if="myData.RechargeFreeTime != '' || myData.Title != '' || myData.content != '' "  @click="chengweidailishang">
            <div class="left">{{myData.Title}}</div>
            <span class="right" v-show="myData.RechargeFreeTime != ''">{{myData.RechargeFreeTime}}</span>
        </div>

        <div class="middle" v-if="myData.RechargeFreeTime != '' || myData.Title != '' || myData.content != '' " @click="chengweidailishang">
            <img class="left" src="../assets/wo/icon3.png" alt="">
            <marquee class="center" behavior="scroll" direction="left">{{myData.content}}</marquee>
            <img class="right" src="../assets/wo/icon4.png" alt="">
        </div>

        <div class="dl_middle" v-if="ARID>0 && YesOrNoModify == 1 ">
            <div class="left">{{czname}}：</div>
            <div v-show="myData.AuthExpiration != null" style="color:rgb(255, 111, 4)" class="content">授权至{{myData.AuthExpiration}}</div>
            <div v-show="myData.AuthExpiration == null" style="color:#bdbdbd" class="content">未授权</div>
            <div v-show="myData.AuthExpiration != null" class="right">续费</div>
            <div v-show="myData.AuthExpiration == null" class="right">购买</div>
        </div>

        <div>
            <div class="line">
            </div>
            <div class="cell" @click="zhanghuyuer">
                <div class="cell-left">
                    <img src="../assets/dl/icon1.png" alt="">
                    <span>账户余额</span>
                    <div style="color:rgb(255, 111, 4)" class="right">￥{{myData.Fund}}</div>
                </div>
                
                <div class="iv-arrow"></div>
            </div>
            <div class="line1"></div>
            <div class="cell">
                <div class="cell-left">
                    <img src="../assets/dl/icon3.png" alt="">
                    <span>优惠券</span>
                    <div style="color:rgb(255, 111, 4)" class="right">￥{{myData.TotalRewardCost}}（{{myData.AllowRewardNum}}张）</div>
                </div>
                
                <div class="iv-arrow"></div>
            </div>
            <div class="line1"></div>


            <div v-if="YesOrNoRebate == 0 || (ARID>0 && YesOrNoModify==0)"></div>
            <div v-else class="cell">
                <div class="cell-left">
                    <img src="../assets/dl/icon2.png" alt="">
                    <span>可提现金额</span>
                </div>
                <div style="color:rgb(0, 156, 210)" class="right">￥{{myData.RebateFund}}</div>
                <div class="iv-arrow"></div>
            </div>
        </div>

        


        <div class="line">
        </div>
        <div v-if="ARID>0 && YesOrNoModify==0"></div>
        <div v-else>
            <div class="cell" v-show="ARID==0" style="color:#bdbdbd">
                <div class="cell-left">
                    <img src="../assets/dl/icon5.png" alt="">
                    <span>软件销售</span>
                </div>
                
                <div class="iv-arrow"></div>
            </div>
            <div class="cell" v-show="ARID!=0">
                <div class="cell-left">
                    <img src="../assets/dl/icon5.png" alt="">
                    <span>软件销售</span>
                </div>
                
                <div class="iv-arrow"></div>
            </div>
        </div>
        <!-- <div v-show="ARID==0" style="background:gray" class="cell" v-else>
            <div class="cell-left">
                <img src="../assets/dl/icon5.png" alt="">
                <span>软件销售</span>
            </div>
            
            <div class="iv-arrow"></div>
        </div> -->

        <div v-if="YesOrNoRebate == 0 || (ARID>0 && YesOrNoModify==0)"></div>
        <div v-else class="line1" v-if=""></div>
        <div v-if="YesOrNoRebate == 0 || (ARID>0 && YesOrNoModify==0)"></div>
        <div v-else class="cell" >
            <div class="cell-left">
                <img src="../assets/dl/icon6.png" alt="">
                <span>我的返点</span>
            </div>
            
            <div class="iv-arrow"></div>
        </div>

        <div class="line">
        </div>
        <div class="cell">
            <div class="cell-left">
                <img src="../assets/dl/icon7.png" alt="">
                <span>在线客服</span>
            </div>
            
            <div class="iv-arrow"></div>
        </div>
        <div class="line1"></div>

    </div>
</template>

<style lang="less" scoped>
.iv-arrow {
  // vertical-align: center;
  // position: absolute;
  margin-right: 15px;
  border-top: 1px solid rgb(122, 122, 122);
  border-right: 1px solid rgb(122, 122, 122);
  width: 8px;
  height: 8px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  // margin-top: -2px;
}
.maincontainer {
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

.middle-tip {
  display: flex;
  flex-direction: row;
  background: white;
  border-bottom: 1px solid #f0f0f0;
  .left {
    font-weight: bold;
    margin: 10px 0 10px 10px;
    text-align: left;
  }
  .right {
    background: rgb(255, 111, 4);
    height: 20px;
    padding: 0px 4px;
    line-height: 20px;
    margin: 8px 0 8px 10px;
    font-size: 14px;
    color: white;
    border-radius: 3px;
  }
}
.dl_middle {
  display: flex;
  flex-direction: row;
  background: white;
  border-bottom: 1px solid #f0f0f0;
  align-items: center;
  .left {
    font-weight: bold;
    margin: 10px 0 10px 10px;
    text-align: left;
    color: rgb(255, 111, 4);
  }
  .content {
    line-height: 20px;
  }
  .right {
    background: rgb(255, 111, 4);
    height: 20px;
    padding: 4px 6px;
    line-height: 20px;
    font-size: 14px;
    color: white;
    border-radius: 3px;
    position: absolute;
    right: 10px;
  }
}

.middle {
  display: flex;
  flex-direction: row;
  height: 54px;
  line-height: 54px;
  .left {
    width: 30px;
    height: 30px;
    margin: 12px 15px;
  }
  .right {
    width: 20px;
    height: 20px;
    margin: 17px 15px;
  }
  .center {
    width: 100%;
    color: rgb(255, 111, 4);
  }
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
  }
  .right {
    position: absolute;
    right: 30px;
  }
  img {
    width: 30px;
    height: 30px;
    margin-left: 10px;
    margin-right: 10px;
  }
  span {
    text-align: center;
    font-size: 15px;
  }

  .right-img {
    width: 8px;
    height: 16px;
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
export default {
  components: {},
  data() {
    return {
      nickname: localStorage.Username,
      paytype: localStorage.PayType,

      myData: "",
      czname: localStorage.czname,
      ARID: localStorage.ARID,
      YesOrNoModify: localStorage.YesOrNoModify,
      YesOrNoRebate: localStorage.YesOrNoRebate,
      YesOrNoWindows: localStorage.YesOrNoWindows
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      // 请求数据
      let tokenCode = localStorage.tokenCode;
      let signStr =
        "Action=GetAgentStaticsAmount" +
        "&SID=" +
        localStorage.sid +
        "&Token=" +
        localStorage.Token +
        tokenCode;
      let data = new FormData();
      data.append("Action", "GetAgentStaticsAmount");
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
    },
    chengweidailishang() {
      this.$router.push({
        path: "/wo/chengweidailishang"
      });
    },
    zhanghuyuer() {
      this.$router.push({
        path: "/wo/zhanghuyuer"
      });
    }
  }
};
</script>

<template>
    <div>

        <m-header :title="title"></m-header>
        <kjview id="kjview" :kjdata="kjData" :Time="nextTime" v-if="flag"></kjview>
        <!-- <kjview></kjview> -->
        <el-tabs id="content" v-model="activeName" @tab-click="handleClick" style="color:black;">
            <el-tab-pane :label="item.PlanName" :name="index.toString()" :index="index.toString()" v-for="(item,index) in listData" :key="index.toString()">
                <!-- id控制 计划切换 -->
                <div class="detail-top">
                    <div class="detail-top-content">
                        <div class="psview">准确率:</div>
                        <div class="psvalue">{{item.RightRate}}</div>
                    </div>
                    <div class="detail-top-content">
                        <div class="psview">最大连对:</div>
                        <div class="psvalue">{{item.MaxAlwaysRight}}</div>
                    </div>
                    <div class="detail-top-content">
                        <div class="psview">最大连错:</div>
                        <div class="psvalue">{{item.MaxAlwaysWrong}}</div>
                    </div>
                    <div class="detail-top-content">
                        <div class="psview">当前连对/错:</div>
                        <div class="psvalue">{{item.CurrentROrW}}</div>
                    </div>

                    <!-- id控制 计划切换 -->
                    <div class="detail-top-content" v-for="(item1,index1) in item.RightTimes ? item.RightTimes.split(',') : 0" :key="index1" v-show="item.RightTimes">
                        <div class="psview">第{{index1+1}}期中:</div>
                        <div class="psvalue">{{item1}}</div>
                        <div class="psview">次</div>
                    </div>
                </div>

                <!-- cell -->
                <div class="detail-bottom">

                    <div class="bottom-cell" v-for="(itemCell,indexCell) in item.PlanDetails" :key="itemCell">
                      <div class="line">

                      </div>
                      
                      <div class="cell-top">
                            <div class="cell-top-left">
                                <span class="cell-item1">{{itemCell.split('|')[0]}}</span>

                                <div class="cell-item2">
                                    <span class="btn" v-if="item.DSType === 0">{{itemCell.split('|')[2] ? itemCell.split('|')[2]+' ' : ""}}定</span>
                                    <span class="btn1" v-else>{{itemCell.split('|')[2] ? itemCell.split('|')[2]+" " : ""}}杀</span>
                                </div>

                                <span class="cell-item3">{{itemCell.split('|')[1]}}</span>
                            </div>

                            <div class="cell-top-right">
                                <div v-if="itemCell.split('|')[5] === '对'" class="cell-item4" style="color:#fff;">{{itemCell.split('|')[5]}}</div>
                                <div v-else-if="itemCell.split('|')[5] === '错' " class="cell-item4" style="color:#fff;">{{itemCell.split('|')[5]}}</div>
                                <div  v-else class="cell-item4" style="color:#fff;">{{itemCell.split('|')[5]}}</div>
        
                            </div>
                        </div>
                        <!-- <div class="cell-top" v-show="!bgColor(indexCell)">
                            <div class="cell-top-left">
                                <span class="cell-item1">{{itemCell.split('|')[0]}}</span>

                                <div class="cell-item2">
                                    <span class="btn" v-if="item.DSType === 0">{{itemCell.split('|')[2] ? itemCell.split('|')[2]+' ' : ""}}定</span>
                                    <span class="btn1" v-else>{{itemCell.split('|')[2] ? itemCell.split('|')[2]+" " : ""}}杀</span>
                                </div>

                                <span class="cell-item3">{{itemCell.split('|')[1]}}</span>
                            </div>

                            <div class="cell-top-right">
                                <span v-if="itemCell.split('|')[5] === '对'" class="cell-item4" style="color:#16B482;">{{itemCell.split('|')[5]}}</span>
                                <span v-else-if="itemCell.split('|')[5] === '错' " class="cell-item4" style="color:#f82b56;">{{itemCell.split('|')[5]}}</span>
                                <span  v-else class="cell-item4" style="color:#16B482;">{{itemCell.split('|')[5]}}</span>
        
                            </div>
                        </div> -->
                        


                        <div class="cell-bottom" v-if="indexCell == 0" style="padding-right:5px;">
                            {{itemCell.split('|')[3] ? itemCell.split('|')[3] + '期' + '等待开奖' : itemCell.split('|')[0] + '等待开奖'}}
                        </div>

                        <!-- <div class="cell-bottom" v-show="bgColor(indexCell) && indexCell != 0" style="padding-right:5px;">
                            <div style="width:55px;text-align:right">
                                {{itemCell.split('|')[3] ? itemCell.split('|')[3] + '期&nbsp' + '开&nbsp' : '开&nbsp'}}
                            </div>
                            <div style="text-align:left">
                                {{itemCell.split('|')[4]}}
                            </div>
                        </div> -->

                        <div class="cell-bottom" v-show="indexCell != 0" style="padding-right:5px;">
                            <div style="width:55px;text-align:right">
                                {{itemCell.split('|')[3] ? itemCell.split('|')[3] + '期&nbsp' + '开&nbsp' : '开&nbsp' }}
                            </div>
                            <div style="text-align:left">
                                {{itemCell.split('|')[4]}}
                            </div>
                        </div>

                        
                    </div>

                </div>

            </el-tab-pane>
        </el-tabs>

    </div>
</template>

<style lang="less" scoped>
.line{
  height: 10px;
  background: rgb(245, 245, 245);
  border-top: 1px solid rgb(235, 235, 235);
  border-bottom: 1px solid rgb(235, 235, 235);
}
.detail-top {
  background: #fff;
  padding: 0px 0px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-start;
  margin-bottom: 1.5vw;
  // border-bottom: 1px solid #d8d8d8;
}

.detail-top-content {
  height: 15px;
  width: 20%;
  align-content: center;
  margin-left: 15px;
  margin-top: 1.5vw;
  margin-bottom: 1.5vw;
  display: flex;
  flex-direction: row;
  font-size: 3vw;
}

.psview {
  color: #999999;
  font-size: 3vw;
}

.psvalue {
  font-size: 3vw;
  padding-left: 3px;
  color: #ff0000;
  font-weight: bold;
  font-style: Arial;
}

.detail-bottom {
  background: #fff;
  // height: 1000rpx;
}

.bottom-cell {
  display: flex;
  flex-direction: column;
  /* background: RGB(250, 250, 250); */
  //   word-wrap: break-word;
  .cell-top {
    display: flex;
    flex-direction: row;
    word-wrap: break-word;
    justify-content: flex-start;
    color: #878787;
    justify-content: space-between;
    .cell-top-left {
      display: flex;
      flex-direction: row;
      .cell-item1 {
        padding-top: 2px;
        margin-left: 5px;
        display: flex;
        flex-wrap: nowrap;
        // width: 20%;
        min-width: 33px;
        font-size: 3.5vw;
        color: #000;
        align-items: center;
      }

      .cell-item2 {
        // width: 25px;
        font-size: 3.5vw;
        text-align: center;
        display: flex;
        align-items: center;
        margin-left: 5px;
        height: 35px;
        color: #6e6e6e;
        .btn {
          // background: rgb(88, 88, 88);
          // width: 30px;
          // line-height: 14px;
          line-height: 14px;
          padding-top: 1px;
          min-width: 32px;
          // border: 1px solid rgba(84, 128, 215, 0.5);
          // border-radius: 9px;
          font-size: 3.5vw;
          color: RGB(84, 128, 215);
        }
        .btn1 {
          //  width: 30px;
          // background: rgb(88, 88, 88);
          // line-height: 14px;
          line-height: 14px;
          min-width: 32px;
          // padding: 1px 5px;
          padding-top: 1px;
          // border: 1px solid RGBA(199, 64, 78, 0.5);
          // border-radius: 9px;
          font-size: 3.5vw;
          color: #f00;
        }
      }

      .cell-item3 {
        padding-top: 2px;
        // max-width: 80%;
        font-size: 3.5vw;
        text-align: center;
        line-height: auto;
        // padding: 10px 5px;
        margin: 10px 5px;
        white-space: pre-line;
        color: #000;
      }
    }
    .cell-top-right {
      .cell-item4 {
        // display: flex;
        // justify-content: flex-end;
        // align-items: center;
        height: 12px;
        line-height: 14px;
        font-size: 10px;
        margin-top: 10px;
        margin-right: 5px;
        // padding-left: 5px;
        width: 45px;
        padding: 2px 0px;
        background-image: url('../assets/bq.png');
        background-size: 100% 100%;
      }
    }
  }

  .cell-bottom {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    font-size: 3vw;
    color: #bebebe;
    padding-bottom: 5px;
    padding-left: 5px;
  }
}
</style>


<script>
import mHeader from "../components/hearder/Hearder";
import kjview from "../components/kjview/kjview";
import sha256 from "../util/sha256";
// import "element-ui/lib/theme-default/index.css";
import listenHuadong from "../util/listenHuadong";
var tiemInterval;
var run;
export default {
  data() {
    return {
      title: {
        text: "计划详情",
        showBack: true,
        right: true
      },
      kjData: "",
      nextTime: "",
      flag: false,
      activeName: "0",
      maxactiveName: "",
      listData: "",
      zjnum: []
    };
  },
  created() {},
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
      console.log(tab.index);
      localStorage.detailID = tab.index;
    },

    getData1() {
      let tokenCode = localStorage.tokenCode;
      let signStr =
        "Action=Clock" +
        "&SID=" +
        localStorage.sid +
        "&Token=" +
        localStorage.Token +
        "&CurrentLottery=0" +
        tokenCode;
      let data = new FormData();
      data.append("Action", "Clock");
      data.append("SID", localStorage.sid);
      data.append("Token", localStorage.Token);
      data.append("CurrentLottery", "0");
      data.append("Sign", sha256.sha256(signStr).toUpperCase());
      this.$http
        .post(localStorage.SiteUrl, data)
        .then(res => {
          if (res.data.Data.NewLottery.NextPeriodTime > 0) {
            clearInterval(run);
            this.getkjData();
            this.getData();
            // this.getcelldata();
            console.log("yes111");
          } else {
            console.log("no111");
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    getkjData() {
      let tokenCode = localStorage.tokenCode;
      let signStr =
        "Action=Clock" +
        "&SID=" +
        localStorage.sid +
        "&Token=" +
        localStorage.Token +
        "&CurrentLottery=0" +
        tokenCode;
      let data = new FormData();
      data.append("Action", "Clock");
      data.append("SID", localStorage.sid);
      data.append("Token", localStorage.Token);
      data.append("CurrentLottery", "0");
      data.append("Sign", sha256.sha256(signStr).toUpperCase());
      //getClock握手
      this.$http
        .post(localStorage.SiteUrl, data)
        .then(res => {
          this.kjData = res.data.Data;
          this.nextTime = res.data.Data.NewLottery.NextPeriodTime;
          this.flag = true;

          //设置定时器，每1秒刷新一次
          var self = this;
          tiemInterval = setInterval(getTotelNumber, 1000);

          function getTotelNumber() {
            if (self.nextTime > 0) {
              self.nextTime--;
              // console.log(self.nextTime);
            } else {
              clearInterval(tiemInterval);
              var i = 0;
              run = setInterval(function() {
                if (localStorage.isLogin == "true") {
                  self.getData1();
                } else {
                  clearInterval(tiemInterval);
                }
              }, 5000);
            }
          }
        })
        .catch(error => {
          console.log(error);
        });
    },

    getData() {
      // 请求数据
      let tokenCode = localStorage.tokenCode;
      let signStr =
        "Action=GetPlanDetails2" +
        "&SID=" +
        localStorage.sid +
        "&Token=" +
        localStorage.Token +
        tokenCode;
      let data = new FormData();
      data.append("Action", "GetPlanDetails2");
      data.append("SID", localStorage.sid);
      data.append("Token", localStorage.Token);
      data.append("Sign", sha256.sha256(signStr).toUpperCase());

      this.$http
        .post(localStorage.SiteUrl, data)
        .then(res => {
          this.listData = res.data.Data.Data;
          this.maxactiveName = this.listData.length.toString();
          for (var i = 0; i < this.listData.length; i++) {
            this.listData[i].PlanDetails = this.listData[
              i
            ].PlanDetails.reverse();
          }
          this.activeName = localStorage.detailID;
        })
        .catch(error => {
          console.log(error);
        });
    },

    bgColor(index) {
      if (index % 2 === 0) {
        return true;
      } else {
        return false;
      }
    }
  },
  mounted() {
    this.getkjData();
    // 调用请求数据的方法
    this.getData();

    listenHuadong.listenHuadong(this);
  },
  beforeDestroy() {
    console.log("beforeDestroy");
    clearInterval(tiemInterval);
    clearInterval(run);
  },
  computed: {},
  components: {
    mHeader,
    kjview
  }
};
</script>

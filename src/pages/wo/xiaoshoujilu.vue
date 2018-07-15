<template>
    <div>
        <m-header :title="title"></m-header>
        <div class="userinfo">
            <div class="content">
                <div class="item1">
                    <div class="top">销售总额(元)</div>
                    <div class="bottom">{{myData.SalesCost}}</div>
                </div>
                <div class="item1">
                    <div class="top">销售总数(单)</div>
                    <div class="bottom">{{myData.SalesCount}}</div>
                </div>
            </div>
        </div>

        <div class="top">
            <div class="top-content">
                <input v-if="!disabled" class="item1" placeholder="请输入客户的通行证" type="text" @input="inputFuction" v-model="user_name">
                <input v-else class="item11" placeholder="请输入客户的通行证" type="text" @input="inputFuction" v-model="user_name">
                <div v-if="!disabled" class="item2">搜索</div>
                <div v-else class="item22" @click="commit">搜索</div>
            </div>
        </div>
        <div class="line"></div>
        

        <div class="middle">
            <div class="item" @click="fuwuClick">
                <div class="title">所有服务</div>
                <div v-show="showfuwu == false" class="img"></div>
                <div v-show="showfuwu == true" class="img1"></div>
            </div>
            <div class="item" @click="shijianClick">
                <div class="title">{{this.BeginTime}}至{{this.EndTime}}</div>
                <div v-show="showshijian == false" class="img"></div>
                <div v-show="showshijian == true" class="img"></div>
            </div>
        </div>
        <div class="line"></div>

        <scroller v-show="showfuwu == false & showshijian == false" class="bottom_content" :on-refresh="refresh" :on-infinite="infinite">
          <div v-for="(item,index) in myData.Record">
            <div class="cell">
              <div class="item1">{{item.AuthDesc}}</div>
              <div class="item2" style="margin-bottom:0px;">客户通行证：{{item.Acccount}}</div>
              <div class="item3">
                <div class="left">成本价：{{item.AgentCost.toFixed(2)}}</div>
                <div class="right">原价：{{item.Cost.toFixed(2)}}</div>
              </div>
            <div class="item3">
                <div class="left">销售时间：{{item.CreateTime}}</div>
                <div class="right">到期时间：{{item.AuthExpiration}}</div>
              </div>
              <div class="item2">销售备注：{{item.Remarks}}</div>
              <div class="line1"></div>
            </div>
          </div>
        </scroller>

        <div v-show="showfuwu" class="xiabu">
            <div class="cell">
                <div class="fuwu">
                    <div class="btn" type="text" :class="{'btnSelect':ind == 0}" @click="btnClick($event,0)">显示全部</div>
                </div>
            </div>
            <div class="cell" v-for="(item,index) in dataList" :key="index">
                    
                <div class="fuwu">
                    <div class="btn" :class="{'btnSelect':ind == item1.SID}" type="text" v-for="(item1,index1) in item.CPNames" :key="index1" @click="btnClick($event,item1.SID)">{{item1.CPName}}</div>
                </div>
                    
            </div>

            <el-button class="btnDefault" type="primary" @click="okclick">确定</el-button>
        </div>

        <div v-show="showshijian" class="xiabu">
            <div class="xiabu_content">
                <div class="top">
                    <div class="item1">年</div>
                    <div class="item1">月</div>
                    <div class="item1">日</div>
                </div>
                <div class="bottom">
                    <div class="left">开始</div>
                    <mt-picker class="right" :slots="slots" :visibleItemCount="3" :showToolbar="false" @change="onValuesChange"></mt-picker>
                </div>
            </div>
            <div class="xiabu_content">
                <div class="top">
                    <div class="item1">年</div>
                    <div class="item1">月</div>
                    <div class="item1">日</div>
                </div>
                <div class="bottom">
                    <div class="left">截止</div>
                    <mt-picker class="right" :slots="slots" :visibleItemCount="3" :showToolbar="false" @change="onValuesChange"></mt-picker>
                </div>
            </div>
            <el-button class="btnDefault" type="primary" @click="okclick1">确定</el-button>
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
.btnDefault {
  position: fixed;
  bottom: 24px;
  left: 5%;
  height: 40px;
  width: 90%;
  border-radius: 5px;
  background-color: #ff7003;
  border: 0;
  color: white;
  font-size: 18px;
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
    justify-content: space-between;
    width: 100%;
    margin: 20px 0;
    .item1 {
      width: 45%;
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
.top {
  .top-content {
    margin: 15px;
    display: flex;
    flex-direction: row;
    .item1 {
      width: 70%;
      height: 35px;
      line-height: 100%;
      outline: none;
      border: 1px solid #bdbdbd;
      border-radius: 5px;
      padding-left: 10px;
      font-size: 15px;
    }
    .item11 {
      width: 70%;
      height: 35px;
      line-height: 100%;
      outline: none;
      border: 1px solid rgb(255, 111, 4);
      border-radius: 5px;
      padding-left: 10px;
      font-size: 15px;
    }
    .item2 {
      margin-left: 10px;
      height: 35px;
      width: 80px;
      background: #bdbdbd;
      border: 1px solid #bdbdbd;
      border-radius: 5px;
      #bundle > .juzhong;
      color: white;
      font-weight: bold;
    }
    .item22 {
      margin-left: 10px;
      height: 35px;
      width: 80px;
      background: rgb(255, 111, 4);
      border: 1px solid rgb(255, 111, 4);
      border-radius: 5px;
      #bundle > .juzhong;
      color: white;
      font-weight: bold;
    }
  }
}
.line {
  height: 1px;
  background: rgb(236, 236, 236);
  width: 100%;
}
.line1 {
  height: 5px;
  background: rgb(236, 236, 236);
  width: 100%;
}
.middle {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 12px 0;
  .item {
    width: 50%;
    display: flex;
    flex-direction: row;
    #bundle > .juzhong;
  }
  .img {
    width: 18px;
    height: 10px;
    background: url(../../assets/wo/bottomicon.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .img1 {
    width: 18px;
    height: 10px;
    background: url(../../assets/wo/topicon.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
}
.xiabu {
  margin-bottom: 88px;
}
.cell {
  display: flex;
  flex-direction: column;
  .fuwu {
    border-bottom: 1px solid rgb(234, 234, 234);
    .btn {
      height: 30px;
      align-content: center;
      float: left;
      margin-left: 10px;
      margin-top: 10px;
      margin-right: 10px;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      padding: 0px 15px 0px 15px;
      font-size: 13px;
      color: black;
      border-radius: 5px;
      border: 1px solid #e9e9e9;
    }
    .btnSelect {
      height: 30px;
      line-height: 30px;
      align-content: center;
      float: left;
      margin-left: 10px;
      margin-top: 10px;
      margin-right: 10px;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      padding: 0px 15px 0px 15px;
      font-size: 13px;
      color: white;
      background: rgb(255, 111, 4);
      border-radius: 5px;
      border: 1px solid rgb(255, 111, 4);
    }
  }
}
.xiabu_content {
  display: flex;
  flex-direction: column;
  #bundle > .juzhong;
  .top {
    display: flex;
    width: 80%;
    margin-top: 20px;
    margin-left: 20%;
    justify-content: space-around;
    .item1 {
      // padding-left: 20vw;
      font-size: 12px;
      color: rgb(51, 51, 51);
    }
  }
  .bottom {
    display: flex;
    flex-direction: row;
    width: 100%;
    .left {
      width: 20%;
      #bundle > .juzhong;
      font-size: 20px;
      color: rgb(51, 51, 51);
    }
    .right {
      width: 80%;
    }
  }
}
.bottom_content {
  margin-top: 260px;
  width: 100%;
  .cell {
    display: flex;
    flex-direction: column;
    color: rgb(51, 51, 51);
    .item1 {
      text-align: left;
      margin-left: 15px;
      margin-top: 14px;
      font-size: 15px;
    }
    .item2 {
      text-align: left;
      margin-left: 15px;
      margin-top: 14px;
      margin-bottom: 14px;
      font-size: 12px;
    }
    .item3 {
      text-align: left;
      margin-left: 15px;
      margin-top: 14px;
      font-size: 12px;
      display: flex;
      flex-direction: row;
      .left {
        width: 50%;
      }
      .right {
        width: 50%;
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
        text: "销售明细",
        showBack: true
      },
      user_name: "",
      disabled: false,
      showfuwu: false,
      showshijian: false,
      //服务列表
      dataList: "",
      //主页数据
      myData: "",

      SubSID: "",
      BeginTime: "",
      EndTime: "",
      PassPort: "",
      Page: "",

      ind: 0,
      slots: [
        {
          flex: 1,
          values: [
            "2008",
            "2009",
            "2010",
            "2011",
            "2012",
            "2013",
            "2014",
            "2015",
            "2016",
            "2017",
            "2018"
          ],
          className: "nian",
          textAlign: "center"
        },
        {
          divider: true,
          content: "-",
          className: "-"
        },
        {
          flex: 1,
          values: [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12"
          ],
          className: "yue",
          textAlign: "center"
        },
        {
          divider: true,
          content: "-",
          className: "-"
        },
        {
          flex: 1,
          values: [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            "21",
            "22",
            "23",
            "24",
            "25",
            "26",
            "27",
            "28",
            "29",
            "30",
            "31"
          ],
          className: "ri",
          textAlign: "center"
        }
      ],
      slots1: [
        {
          flex: 1,
          values: [
            "2008",
            "2009",
            "2010",
            "2011",
            "2012",
            "2013",
            "2014",
            "2015",
            "2016",
            "2017",
            "2018"
          ],
          className: "nian",
          textAlign: "center"
        },
        {
          divider: true,
          content: "-",
          className: "-"
        },
        {
          flex: 1,
          values: [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12"
          ],
          className: "yue",
          textAlign: "center"
        },
        {
          divider: true,
          content: "-",
          className: "-"
        },
        {
          flex: 1,
          values: [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            "21",
            "22",
            "23",
            "24",
            "25",
            "26",
            "27",
            "28",
            "29",
            "30",
            "31"
          ],
          className: "ri",
          textAlign: "center"
        }
      ]
    };
  },
  components: {
    mHeader
  },
  methods: {
    inputFuction() {},
    getData(SubSID, BeginTime, EndTime, PassPort) {
      let tokenCode = localStorage.tokenCode;
      let signStr =
        "Action=GetSalesRecord" +
        "&SID=" +
        localStorage.sid +
        "&Token=" +
        localStorage.Token +
        "&SubSID=" +
        SubSID +
        "&BeginTime=" +
        BeginTime +
        "&EndTime=" +
        EndTime +
        "&PassPort=" +
        PassPort +
        tokenCode;
      let data = new FormData();
      data.append("Action", "GetSalesRecord");
      data.append("SID", localStorage.sid);
      data.append("Token", localStorage.Token);
      data.append("SubSID", SubSID);
      data.append("BeginTime", BeginTime);
      data.append("EndTime", EndTime);
      data.append("PassPort", PassPort);
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
    fuwuData() {
      let data = new FormData();
      data.append("Action", "GetServiceList");
      this.$http
        .post(this.$global.url, data)
        .then(res => {
          console.log("getservicelist");
          this.dataList = res.data.Data;
        })
        .catch(error => {});
    },
    fuwuClick() {
      this.fuwuData();
      this.showfuwu = true;
    },
    btnClick(btn, sid) {
      this.ind = sid;
    },
    commit() {},
    okclick() {
      this.showfuwu = false;
    },
    shijianClick() {
      this.showshijian = true;
    },
    onValuesChange(picker, values) {
      //   console.log(picker);
      console.log(values);
    },
    onValuesChange1(picker, values) {
      //   console.log(picker);
      console.log(values);
    },
    okclick1() {
      this.showshijian = false;
    },
    refresh(done) {
      this.getData(this.SubSID, this.BeginTime, this.EndTime, this.PassPort);
    },

    infinite(done) {
      let self = this;
      if(this.myData.isNextPage == 0){
        self.noData = "没有更多数据";
        self.$refs.myscroller.resize();
      }else{
        this.getData(this.SubSID, this.BeginTime, this.EndTime, this.PassPort);
      }
    },
  },
  mounted() {
    this.getData(this.SubSID, this.BeginTime, this.EndTime, this.PassPort);
    
    var date = new Date();
    var seperator1 = "-";
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var oldmonth = date.getMonth();
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
      month = "0" + month;
    }
    if (oldmonth >= 1 && oldmonth <= 9) {
      oldmonth = "0" + oldmonth;
    }
    if (strDate >= 0 && strDate <= 9) {
      strDate = "0" + strDate;
    }
    var currentdate = year + seperator1 + month + seperator1 + strDate;
    var olddate = year + seperator1 + oldmonth + seperator1 + strDate;
    this.EndTime = currentdate;
    this.BeginTime = olddate;
    console.log(this.BeginTime);
    console.log(this.EndTime);
  },
  watch: {
    user_name: function(now, old) {
      if (this.user_name.length > 0) {
        this.disabled = true;
      } else {
        this.disabled = false;
      }
    },
    showfuwu(now, old) {
      if (now == true) {
        this.showshijian = false;
      }
    },
    showshijian(now, old) {
      if (now == true) {
        this.showfuwu = false;
      }
    }
  }
};
</script>

<template>
    <div class="kjview">
        <div class="top-top">
            <span class="qishu1">第{{KJData.NewLottery.CurrentPeriod}}期开奖</span>
        </div>

        <kjnum class="top-middle" :data="kjnum"></kjnum>

        <div class="top-bottom" v-if="time===0">
            <span class="label1">第 {{KJData.NewLottery.NextPeriod}} 期正在开奖...</span>
        </div>
        <div class="top-bottom" v-else>
            <span class="label1">第 {{KJData.NewLottery.NextPeriod}} 期开奖倒计时</span>
            
            <span v-show="shijianArr[1] > 0" class="sj">{{shijianArr[0]}}</span>
            <span v-show="shijianArr[1] > 0" class="sj">{{shijianArr[1]}}</span>
            <span v-show="shijianArr[1] > 0" style="color:#ffe5ab;font-size:4vw;margin-top:-0.4vw">:</span>
            <span class="sj">{{shijianArr[2]}}</span>
            <span class="sj">{{shijianArr[3]}}</span>
            <span style="color:#ffe5ab;font-size:4vw;margin-top:-0.4vw">:</span>
            <span class="sj">{{shijianArr[4]}}</span>
            <span class="sj">{{shijianArr[5]}}</span>
        </div>
    </div>
</template>

<script>
import kjnum from "./kjnum";
// var data = require('../../../static/data/clock')
import axios from "axios";
import http from "../../util/http";
import sha256 from "../../util/sha256";

var time;
export default {
  components: {
    kjnum
  },
  created() {
    this.KJData = this.kjdata;
    this.nextTime = this.Time;
  },
  watch: {
    Time: function(now, old) {
      this.nextTime = this.Time;
    },
    kjdata: function(now, old) {
      this.KJData = this.kjdata;
    }
  },
  props: ["kjdata", "Time"],
  data() {
    return {
      KJData: Object,
      nextTime: Number
    };
  },

  methods: {},
  mounted() {
    // this.getData();
  },
  computed: {
    shijian: {
      get() {
        return this.KJData.NewLottery.CurrentOpenTime.split(" ")[1];
      }
    },
    kjnum: {
      get() {
        return this.KJData.NewLottery.LotteryResult.split(",");
      }
    },
    shijianArr: {
      get() {
        time = parseInt(this.nextTime);
        // console.log('time')
        // console.log(time);
        var hour = parseInt(time / 3600);
        var minu = parseInt((time - hour * 3600) / 60);
        var second = time % 60;

        var num00 = parseInt(hour / 10) > 0 ? parseInt(hour / 10) : 0;
        var num01 = hour % 10;
        var num1 = parseInt(minu / 10) > 0 ? parseInt(minu / 10) : 0;
        var num2 = minu % 10;
        var num3 = parseInt(second / 10) > 0 ? parseInt(second / 10) : 0;
        var num4 = second % 10;

        var arr = [];
        arr.push(num00);
        arr.push(num01);
        arr.push(num1);
        arr.push(num2);
        arr.push(num3);
        arr.push(num4);
        return arr;
      }
    },
    time: {
      get() {
        return parseInt(this.nextTime);
      }
    }
  }
};
</script>


<style lang="less" scoped>
.kjview {
  height: auto;
  width: 100%;
  background-color: red;
  background: url(../../assets/shouyebg.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  .top-top {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 15px;
    .qishu1 {
      width: 100%;
      font-size: 4vw;
      color: #fff;
    }
  }

  .top-middle {
    margin: 10px 5px;
  }

  .top-bottom {
    display: flex;
    flex-direction: row;
    margin-top: 0px;
    margin-bottom: 10px;
    justify-content: center;
    height: 12vw;
    background: url(../../assets/jjkj.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 100%;
    line-height: 12vw; 
    .label1 {
      color: #ffe5ab;
      font-size: 4vw;
      line-height: 12vw; 
      height: 20px;
      margin-right: 2vw;
    }
    
    .sj {
      line-height: 12vw;
      height: 12vw;
      width: 3vw;
      text-align: center;
      font-size: 4vw;
      // font-weight: bold;
      color: #ffe5ab;
    }
  }
}
</style>


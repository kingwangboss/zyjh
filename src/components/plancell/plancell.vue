<template>
    <div>
        <div class="bottomcontainer" v-for="(cell,index) in PlanData" :key="cell.PlanArr" @click="pushDetail($event,index)">
            <span v-if="cell.DSType === 0" style="background:#457def;width:5px;"></span>
            <span v-else-if="cell.DSType === 1" style="background:#ff0000;width:5px;"></span>
            <span v-if="cell.DSType === 0" class="txt-item1" style="width:22%;border-top-left-radius: 5px;color: #457def;">{{cell.Name.replace("定码","")}}</span>
            <span v-else-if="cell.DSType === 1" class="txt-item1" style="width:22%;border-top-left-radius: 5px;color: #ff0000;">{{cell.Name.replace("定码","")}}</span>
            <span class="txt-item1" style="width:22%;background:#fff; color:#000;border-right: 1px solid #e5e5e5;">{{cell.PlanSection}}</span>

            <div class="txt-item2">
                <span class="btn" v-if="cell.DSType === 0">{{cell.EndIndex ? cell.EndIndex+' ' : ""}}定</span>
                <span class="btn1" v-else>{{cell.EndIndex ? cell.EndIndex+" " : ""}}杀</span>
            </div>

            <span class="txt-item3">{{cell.GuessValue}}</span>

            <div class="zhengquelv">
                <span class="baifenbi">{{cell.GuessPercent}}</span>

                <div class="diandian" style="width:70px;">
                    <!-- <div v-for="item in dian[index]" :key="item">
                        <div v-if="item === '1'" class="dianMiddle" style="background:#30bb78;"></div>
                        <div v-else-if="item === '0'" class="dianMiddle" style="background:#d82e4b;"></div>
                        <div v-else class="dianMiddle" style="background:black;"></div>
                    </div> -->
                    <div v-for="(item,i) in analysis(cell.GuessResultList)" :key="i">
                        <div v-if="item === '1'" class="dianMiddle" style="background:#82c91e;"></div>
                        <div v-else-if="item === '0'" class="dianMiddle" style="background:#ff0000;"></div>
                        <div v-else class="dianMiddle" style="background:black;"></div>
                    </div>
                </div>

                <!-- <div class="dian" v-show="isSandian">
                    <div class="dian-dian"></div>
                    <div class="dian-dian"></div>
                    <div class="dian-dian"></div>
                </div> -->

            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
#bundle {
  .juzhong {
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
  }
}

.bottomcontainer {
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  border-top: 1px solid #efefef;
  border-bottom: 1px solid #efefef;
  word-wrap: break-word;
  background: white;
}

.txt-item1 {
  line-height: 5vw;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-left: 5px;
  display: flex;
  width: 60px;
  font-size: 3.5vw;
  #bundle > .juzhong;
  border-right: 1px solid #e5e5e5;
}

.txt-item2 {
  margin-top: 10px;
  margin-bottom: 10px;
  border-right: 1px solid #e5e5e5;
  width: 10vw;
  font-size: 3.5vw;
  background: #fff;
  text-align: center;
  display: flex;
  align-items: center; // padding: 0px 5px;
  color: #767676;
  #bundle > .juzhong;
  .btn {
    line-height: 14px;
    padding-top: 1px;
    min-width: 32px;
    // border: 1px solid rgba(84, 128, 215, 0.5);
    // border-radius: 9px;
    font-size: 3.5vw;
    color: #457def;
  }
  .btn1 {
    //  width: 30px;
    // background: rgb(88, 88, 88);
    line-height: 14px;
    min-width: 32px;
    padding-top: 1px;
    // padding: 1px 5px;
    // border: 1px solid RGBA(199, 64, 78, 0.5);
    // border-radius: 9px;
    font-size: 3.5vw;
    color: #ff0000;
  }
}

.txt-item3 {
  margin-top: 10px;
  margin-bottom: 10px;
  border-right: 1px solid #e5e5e5;
  width: 30vw;
  font-size: 3.5vw;
  background: #fff;
  text-align: center;
  line-height: auto;
  padding: 15px 5px;
  color: #000;
  #bundle > .juzhong;
}

.zhengquelv {
  width: 30%;
  background: #fff;
  display: flex;
  flex-direction: column;
  #bundle > .juzhong;
}

.baifenbi {
  font-size: 3.5vw;
  #bundle > .juzhong;
  color: #666666;
  margin-top: 5px;
}

.diandian {
  margin-bottom: 5px;
  #bundle > .juzhong;
  display: flex;
  flex-direction: row;
  // width: 100%;
  flex-wrap: wrap;
}

.dianMiddle {
  background: red;
  height: 3px;
  width: 5px;
  margin-left: 2px;
  // border-radius: 4px;
  margin-top: 2px;
}

.dian {
  #bundle > .juzhong;
}

.dian-dian {
  background: #909090;
  height: 4px;
  width: 4px;
  margin-left: 4px;
  border-radius: 4px;
  // color: #767676;
}
</style>

<script>
export default {
  props: {
    data: {
      type: Array
    }
  },

  created() {
    this.PlanData = this.data;
    
  },
  watch: {
    data: function(now, old) {
      this.PlanData = this.data;
    }
  },
  data() {
    return {
      myheight: 100,
      PlanData: "",
    };
  },
  computed: {
    dian: {
      // getter
      get: function() {
        var temp = [];
        if (this.PlanData.Data[0].GuessResultList.split(",").length > 10) {
          for (var i = 0; i < this.PlanData.Data.length; i++) {
            temp.push(
              this.PlanData.Data[i].GuessResultList.split(",").reverse()
            );
          }
        } else {
          for (var i = 0; i < this.PlanData.Data.length; i++) {
            temp.push(
              this.PlanData.Data[i].GuessResultList.split(",").reverse()
            );
          }
        }
        console.log(temp);
        return temp;
      },
      // setter
      set: function(newValue) {}
    },
    isSandian: {
      get() {
        if (
          parseInt(this.PlanData.CycleCount) > 0 &&
          parseInt(this.PlanData.CycleCount) <= 10
        ) {
          return false;
        } else {
          return true;
        }
      }
    }
  },
  methods: {
    pushDetail(event, index) {
      console.log("push");
      console.log(index);
      localStorage.detailID = index;
      this.$router.push({
        path: "/planVC/planDetail"
      });
    },
    analysis(str) {
      var temp = [];
      temp = str.split(",").reverse();
      return temp;
    }
  }
};
</script>

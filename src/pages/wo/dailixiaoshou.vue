<template>
    <div class="main">
        <m-header :title="title"></m-header>

        <div class="line">
        </div>
        <div class="cell" @click="zaixianchongzhi">
            <div class="cell-left">
                <img src="../../assets/wo/cz.png" alt="">
                <span>在线充值</span>
            </div>
            
            <div class="iv-arrow"></div>
        </div>

        <div class="line">
        </div>
        <div class="cell" @click="goumaishouquan">
            <div class="cell-left">
                <img src="../../assets/wo/gmsq.png" alt="">
                <span v-show="AuthType>0">续费授权</span>
                <span v-show="AuthType==-1">购买授权</span>
            </div>
            
            <div class="iv-arrow"></div>
        </div>

        <div class="line">
        </div>
        <div class="cell" style="#333" v-show="AuthType == -1">
            <div class="cell-left">
                <img src="../../assets/wo/sq.png" alt="">
                <span>代理授权</span>
            </div>
            <div class="iv-arrow"></div>
        </div>
        <div class="cell" @click="dailishouquan" v-show="AuthType > 0">
            <div class="cell-left">
                <img src="../../assets/wo/sq.png" alt="">
                <span>代理授权</span>
            </div>
            <div class="iv-arrow"></div>
        </div>

        <div class="line" v-show="AgentState != 4">
        </div>
        <div v-show="AgentState != 4" class="cell" @click="woyaotixian">
            <div class="cell-left">
                <img src="../../assets/wo/tx.png" alt="">
                <span>我要提现</span>
            </div>
            
            <div class="iv-arrow"></div>
        </div>

        <div class="line">
        </div>
        <div class="cell" @click="wodejilu">
            <div class="cell-left">
                <img src="../../assets/wo/jl.png" alt="">
                <span>我的记录</span>
            </div>
            <div class="iv-arrow"></div>
        </div>
        <div class="line">
        </div>
        
    </div>
</template>

<style lang="less" scoped>
.main{
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgb(240, 240, 240);
}
.line {
  background: #efefef;
  height: 1px;
}

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
</style>

<script>
import mHeader from "../../components/hearder/Hearder";
export default {
  data() {
    return {
      title: {
        text: "代理销售",
        showBack: true
      },
      AgentState: localStorage.AgentState,
      // AgentState:3,
      AuthType:localStorage.AuthType,
    };
  },
  components: {
    mHeader
  },
  mounted() {
    
  },
  methods:{
    zaixianchongzhi(){
      this.$router.push({
        path: "/wo/zaixianchongzhi"
      })
    },
    woyaotixian(){
      this.$router.push({
        path: "/wo/woyaotixian"
      })
    }
  }
};
</script>

<template>
    <div class="main">
        <m-header :title="title"></m-header>

        <div class="line">
        </div>
        <div class="cell" @click="buyClick">
            <div class="cell-left">
                <img src="../../assets/wo/cz.png" alt="">
                <span>在线充值</span>
            </div>
            
            <div class="iv-arrow"></div>
        </div>

        <div class="line">
        </div>
        <div class="cell" @click="kefuClick">
            <div class="cell-left">
                <img src="../../assets/wo/sq.png" alt="">
                <span>代理授权</span>
            </div>
            <div class="iv-arrow"></div>
        </div>

        <div class="line" v-show="AgentState != 4">
        </div>
        <div v-show="AgentState != 4" class="cell" @click="shouquanClick">
            <div class="cell-left">
                <img src="../../assets/wo/tx.png" alt="">
                <span>我要提现</span>
            </div>
            
            <div class="iv-arrow"></div>
        </div>

        <div class="line">
        </div>
        <div class="cell" @click="XGpwdClick">
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
    //   AgentState: localStorage.AgentState,
      AgentState:1,
    };
  },
  components: {
    mHeader
  },
  mounted() {
    
  }
};
</script>

<template>
    <div>
        <m-header :title="title">
        </m-header>
        <div class="maincontainer">
            <div class="line"></div>
            <div class="cell" v-for="(item,index) in dataList" :key="index">
                
                <div class="cell-btnview">
                    <div class="btn" :class="{'btnSelect':ind == item1.SID}" type="text" v-for="(item1,index1) in item.CPNames" :key="index1" @click="btnClick($event,item1.SID)">{{item1.CPName}}
                    </div>
                </div>
                
            </div>
            <div class="line"></div>
        </div>
    </div>
</template>


<style lang="less" scoped>
.maincontainer {
  display: flex;
  flex-direction: column;
  background: #f7f7f7;
}

.cell {
  display: flex;
  flex-direction: column;
}

.cell-btnview {
  margin: 5px 20px 5px 20px;
  background: white;
  border-radius: 5px;
  border: 1px solid rgb(234, 234, 234);
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
    background: #ff0000;
    border-radius: 5px;
    border: 1px solid #ff0000;
  }
  .you_image_select {
    // width: 20px;
    height: 20px;
    position: relative;
    right: 0px;
    bottom: -8px;
  }
  .you_image {
    // width: 20px;
    height: 20px;
    position: relative;
    right: 0px;
    bottom: -8px;
  }
}

.line {
  height: 10px;
  background: #f7f7f7;
}
</style>


<script>
import mHeader from "../components/hearder/Hearder";
import sha256 from "../util/sha256";
export default {
  data() {
    return {
      title: {
        text: "选择彩种",
        showBack: true,
        changeOK: true
      },
      dataList: [],
      ind: ""
    };
  },

  components: {
    mHeader
  },

  watch: {
    ind: function(now, old) {
      if (now) {
        this.title.changeOK = true;
      } else {
        this.title.changeOK = false;
      }
    }
  },
  methods: {
    getData() {
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
    btnClick(btn, sid) {
      console.log(this.$route.params);
      console.log(btn);
      localStorage.sid1 = sid ? sid : localStorage.sid;
      localStorage.czname1 = btn.target.innerText;
      this.ind = sid;
    },
    isSelect(item1) {
      if (item1.SID == localStorage.sid) {
        return true;
      } else {
        return false;
      }
    }
  },
  mounted() {
    this.getData();
    this.ind = localStorage.sid;
  }
};
</script>

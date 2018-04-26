<template>
    <div class="content" v-if="count">
        <div v-show="isLan(index)" class="kjnum" :style="{width:ojwidth+'vw',height:ojwidth+'vw',borderRadius:ojwidth+'vw',lineHeight:ojwidth +'vw'}" v-for="(item,index) in numArr">{{item}}</div>
        <div v-show="!isLan(index)" class="kjnum1" :style="{width:ojwidth+'vw',height:ojwidth+'vw',borderRadius:ojwidth+'vw',lineHeight:ojwidth +'vw'}" v-for="(item,index) in numArr">{{item}}</div>
    </div>

    <div class="content" style="justify-content: flex-start;" v-else>
        <div v-show="isLan(index)" class="kjnum" :style="{width:ojwidth1+'px',height:ojwidth1+'px',borderRadius:ojwidth1+'px',lineHeight:ojwidth1+'px'}" v-for="(item,index) in numArr">{{item}}</div>
        <div v-show="!isLan(index)" class="kjnum1" :style="{width:ojwidth1+'px',height:ojwidth1+'px',borderRadius:ojwidth1+'px',lineHeight:ojwidth1+'px'}" v-for="(item,index) in numArr">{{item}}</div>
    </div>
</template>

<style lang="less" scoped>
.content {
  display: flex;
  flex-direction: row;
  margin-top: 5vw;
  flex-wrap: wrap;
  justify-content: center;
  .kjnum {
    font-size: 4vw;
    background: rgb(255, 246, 239);
    text-align: center;
    margin: 5px;
    color: #ff0000;
    font-weight: 600;
  }
  .kjnum1 {
    font-size: 4vw;
    background: rgb(63, 123, 244);
    border-radius: 30px;
    text-align: center;
    margin: 4px;
    color: white;
    font-weight: 600;
    // background-color:rgb(63, 123, 244);
  }
}
</style>


<script>
export default {
  props: {
    data: {
      type: Array
    }
  },
  data() {
    return {
      numArr: "",
      // width: 100,
      height: 30,
      screenWidth: document.body.clientWidth // 这里是给到了一个默认值 （这个很重要）
    };
  },
  methods: {
    isLan(index) {
      if (index === 20) {
        return false;
      } else {
        return true;
      }
    }
  },
  created() {
    this.numArr = this.data;
  },
  mounted() {
    const that = this;
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth;
        that.screenWidth = window.screenWidth;
      })();
    };
  },
  watch: {
    data: function(now, old) {
      this.numArr = this.data;
    },
    screenWidth(val) {
      if (!this.timer) {
        this.screenWidth = val;
        this.timer = true;
        let that = this;
        setTimeout(function() {
          // that.screenWidth = that.$store.state.canvasWidth
          // that.init()
          that.timer = false;
        }, 400);
      }
    }
  },
  // components: {
  //     numArr: num,
  // },
  computed: {
    ojwidth: {
      // getter
      get: function() {
        var ojwidth;
        var margin;
        var colnum = 10; //列
        colnum = this.numArr.length > colnum ? colnum : this.numArr.length;
        var rownum = this.numArr.length / colnum; //行
        margin = this.numArr.length >= 10 ? 5 : 20; //间距
        ojwidth = (this.screenWidth  - 2 * (margin +1) * colnum) / colnum; //格子的宽
        if (this.numArr.length < 10) {
          ojwidth = 8;
        } else {
        }
        return ojwidth;
      },
      // setter
      set: function(newValue) {}
    },
    ojwidth1: {
      // getter
      get: function() {
        var ojwidth;
        var margin;
        var colnum = 10; //列
        colnum = this.numArr.length > colnum ? colnum : this.numArr.length;
        var rownum = this.numArr.length / colnum; //行
        margin = this.numArr.length >= 10 ? 6 : 20; //间距
        ojwidth = (this.screenWidth - 2 * (margin) * colnum) / colnum; //格子的宽
        if (this.numArr.length < 10) {
          ojwidth = 23;
        } else {
        }
        return ojwidth + 0.5;
      },
      // setter
      set: function(newValue) {}
    },
    count: {
      get() {
        if (this.numArr.length < 10) {
          return true;
        } else {
          return false;
        }
      }
    }
  }
};
</script>


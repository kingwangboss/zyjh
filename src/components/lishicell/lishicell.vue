<template>
    <div>

        <div v-for="item in kjnumArr" :key="item.KJArr">
            <div class="top"></div>
            <div class="contentCell">
                <span class="top-item1">{{item.ID+" 期"}}</span>
                <span class="top-item2">{{item.CreateTime}}</span>
            </div>

            <div class="KJnum">
                <div v-show="isLan(index1)" v-for="(item1,index1) in item.Data.split(',')" :style="{width:ojwidth+'px',height:ojwidth - 10+'px'}">
                    <div class="num">{{item1}}</div>
                </div>
                <div v-show="!isLan(index1)" v-for="(item1,index1) in item.Data.split(',')" :style="{width:ojwidth+'px',height:ojwidth -10+'px'}">
                    <div class="num1">{{item1}}</div>
                </div>
            </div>

            <!-- <div class="top"></div> -->
        </div>

    </div>
</template>

<script>
export default {
    props: ["data"],

    data() {
        return {
            kjArr: "",
            height: 30,
            screenWidth: document.body.clientWidth
        }
    },

    methods:{
        isLan(index){
            if(index === 20){
                return false;
            }else {
                return true;
            }
        }
    },
    mounted() {
        const that = this
        window.onresize = () => {
            return (() => {
                window.screenWidth = document.body.clientWidth
                that.screenWidth = window.screenWidth
            })()
        }

    },
    watch: {
        screenWidth(val) {
            if (!this.timer) {
                this.screenWidth = val
                this.timer = true
                let that = this
                setTimeout(function() {
                    that.timer = false
                }, 400)
            }
        }
    },

    computed: {
        kjnumArr: {
            get: function() {

                return this.data;
            },
            set(){

            }
        },
        ojwidth: {
            // getter
            get: function() {
                var ojwidth;
                var margin;
                var colnum = 10;//列
                colnum = this.kjnumArr.length > colnum ? colnum : this.kjnumArr.length;
                var rownum = this.kjnumArr.length / colnum;//行
                margin = this.kjnumArr.length > 5 ? 1 : 2;//间距
                ojwidth = (this.screenWidth - (2 * (margin) * colnum)) / colnum;//格子的宽
                return ojwidth+1;
            },
            // setter
            set: function(newValue) {

            }
        }
    }

}
</script>

<style lang="less" scoped>
.contentCell {
    margin-top: 0px;
    // margin-bottom: 5px;
    display: flex;
    justify-content: flex-start;
}

.top-item1 {
    font-size: 4vw;
    margin-top: 10px;
    margin-left: 10px;
    color: #d92c1b;
    // border-radius: 0 12px 12px 0px;
    // font-style: italic;
}

.top-item2 {

    font-size: 3.5vw;
    margin-top: 10px;
    margin-left: 10px;
    color: #999999;
}

.KJnum {
    // margin: 0px 0px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    text-align: center;
    margin-top: 8px;
    display: flex;
}

.num {
    margin: 0px 5px;
    // line-height: 27px;
    // height: 26px;
    // width: 26px;
    color: #000000;
    font-size: 5.5vw;
    font-weight: bold;
    // border: 1px solid rgba(255, 92, 66,0.3);
    // border-radius: 26px;
}

.num1 {
    margin: 0px 5px;
    // line-height: 26px;
    // height: 26px;
    // width: 26px;
    color: rgb(31, 96, 251);
    font-size: 5.5vw;
    font-weight: bold;
    // border: 1px solid rgba(31, 96, 251,0.3);
    // border-radius: 26px;
}

.top {
    height: 8px;
    background:#f7f7f7;
    border-top: 1px solid #e9e9e9;
    border-bottom: 1px solid #e9e9e9;
}
</style>


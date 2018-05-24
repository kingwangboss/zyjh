<template>
    <div>{{lishiData}}</div>
</template>

<style lang="less" scoped>
</style>

<script>
export default {
  name: "lishikaijiang",
  props: ["lishi"],
  data() {
    return {
      lishiData: Array
    };
  },

  components: {
    // cell
  },
  created() {
    // this.lishiData = data.KJArr;
    this.lishiData = this.lishi;
  },
  watch: {
    lishi: function(now, old) {
      this.lishiData = this.lishi;
    }
  },
  
};
</script>

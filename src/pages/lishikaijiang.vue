<template>
  <div>
    <cell :data="lishiData"></cell>
  </div>
</template>


<script>
import cell from "../components/lishicell/lishicell";
export default {
  name: "lishikaijiang",
  props: ["lishi"],
  data() {
    return {
      lishiData: Array
    };
  },

  components: {
    cell
  },
  created() {
    this.lishiData = this.lishi;
  },
  watch: {
    lishi: function(now, old) {
      this.lishiData = this.lishi;
    }
  },
  methods: {
   
  },
  mounted() {
    
  }
};
</script>

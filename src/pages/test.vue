<template>
    <div>
        124
        <mt-picker :slots="slots" :visibleItemCount="3" :showToolbar="true" @change="onValuesChange"></mt-picker>
        <mt-picker :slots="slots1" :visibleItemCount="3" :showToolbar="true" @change="onValuesChange1"></mt-picker>
    </div>
</template>

<style lang="less" scoped>
</style>

<script>
export default {
  data() {
    return {
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

  methods: {
    onValuesChange(picker, values) {
      //   console.log(picker);
      console.log(values);
    },
    onValuesChange1(picker, values) {
      //   console.log(picker);
      console.log(values);
    }
  }
};
</script>

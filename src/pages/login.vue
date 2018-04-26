<template>
  <div>
      <m-header :title="title"></m-header>
      <mt-button @click="login">login</mt-button>
  </div>
</template>


<script>
import mHeader from "../components/hearder/Hearder";

export default {
  name: "loginVC",
  data() {
    return {
      title: {
        text: "登陆"
      },
      user: {
        name: "kingwang2",
        pwd: "123456",
        sid: ""
      }
    };
  },
  components: {
    mHeader
  },
  methods: {
    login() {
      this.$show.open();
      if (this.user.sid) {
      } else {
        this.user.sid = "2";
        localStorage.czname = "北京PK10";
      }

      let signStr =
        this.user.sid +
        this.user.name +
        this.$global.AppType + this.$global.AppCode + this.$global.AppVersion +
        this.$sha256.sha256(this.user.pwd).toUpperCase();
      console.log(signStr);
      let data = new FormData();
      data.append("Action", "Login");
      data.append("SID", this.user.sid);
      data.append("Account", this.user.name);
      data.append("AppType", this.$global.AppType);
      data.append("AppCode", this.$global.AppCode);
      data.append("AppVersion", this.$global.AppVersion);
      data.append("Sign", this.$sha256.sha256(signStr).toUpperCase());

      localStorage.pwd = this.$sha256.sha256(this.user.pwd).toUpperCase();
      this.$http
        .post(this.$global.url, data)
        .then(res => {
          if (res) {
            this.$show.close();
            localStorage.isLogin = true;
            localStorage.sid = this.user.sid;
            localStorage.uid = res.data.Data.UID;
            localStorage.AuthTypeName = res.data.Data.AuthTypeName;
            localStorage.SiteUrl = res.data.Data.SiteUrl;
            localStorage.AuthType = res.data.Data.AuthType;
            localStorage.Username = res.data.Data.NickName;
            localStorage.Token = res.data.Data.Token;
            localStorage.PayType = res.data.Data.PayType;
            localStorage.QQUrl = res.data.Data.QQUrl;
            localStorage.tokenCode = this.$sha256
              .sha256(res.data.Data.Token + localStorage.pwd)
              .toUpperCase();
            localStorage.OfficialUrl = res.data.Data.OfficialUrl;

            localStorage.user_name = this.user.name;
            localStorage.user_pwd = this.user.pwd;
            this.$router.push({
              path: "/planVC"
            });
          }
        })
        .catch(error => {
          this.$show.close();
          console.log(error);
        });

      // this.$http.post("",data).then(res=>{
      //     console.log(res);
      //     this.$store.commit('updateVcode',res.data.Data)
      // })

      // console.log(this.$store.getters.getVcode);
    }
  }
};
</script>

<template>
  <el-card>
    <div slot="header">
      <b>Welcome to {{ school }}</b>
    </div>
    <b>Version：3.4</b>
    <br />
    <h3>
      <a
        href="https://github.com/Linzecong/CDUOJ"
        target="_blank"
        style="text-decoration: none; color: #409eff"
        >Github (Give Me A Star!)</a
      >
    </h3>
    <h3>
      <a
        href="https://docs.CDUOJ.cn"
        target="_blank"
        style="text-decoration: none; color: #67c23a"
        >Documentation</a
      >
    </h3>
  </el-card>
</template>

<script>
export default {
  name: "welcomemessage",
  data() {
    return {
      school: "CDUOJ",
    };
  },
  created() {
    var sb = this.$store.state.sb;
    if (sb == undefined) {
      this.$axios
        .get("/settingboard/")
        .then((res) => {
          if (res.data.length > 0) this.school = res.data[0].ojname;
          else this.school = "CDUOJ";
          this.$store.state.sb = res.data;
        })
        .catch((error) => {
          this.$message.error(
            "服务器错误！可能是本OJ没有开启游客访问，请先登录！"
          );
        });
    } else {
      if (sb.length > 0) this.school = sb[0].ojname;
      else this.school = "CDUOJ";
    }
  },
};
</script>

<style  scoped>
</style>
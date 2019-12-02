<template>
    <router-view/>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  *{
    font-size: 14px;
    /* color:#333; */
  }
  body,p,ul,ol,dl,dd,h1,h2,h3,h4,h5,h6,hr,td,input,textarea{
    margin:0;
    padding:0;
  }
  ul,ol,li{
    list-style: none;
  }
  a{
    text-decoration:none;
  }
  img{
    border:none;
    display: block;
  }
  body{
    font-family: "微软雅黑";
    /* background: #f5f5f9; */
  }
  html{
    font-size: 26.67vw;
  }
</style>

<template>
  <router-link to="/searchPage">
    <div class="searchbox">
      <div class="box">
        <i class="el-icon-search"></i>
        <input type="text" placeholder="四级极速通关" onfocus="this.placeholder=''" onblur="this.placeholder='四级极速通关'">
      </div>
      <p class="el-icon-time"></p>
    </div>
  </router-link>
</template>

<script>
    export default {
        name: "search",
      data () {
        return {
        }
      },
      methods:{

      }
    }
</script>

<style scoped>
  .searchbox{
    width: 97%;
    height: .61rem;
    margin:0 auto;
    margin-top: -1px;
    background: #ffffff;
    position: relative;
    /* display: flex; */
  }
  .box{
    width: 85%;
    margin: 0 auto;
    height: .5rem;
    float: left;
    position: relative;
    display: flex;
    background: #f6f6f6;
    color: #999999;
    border: 0;
    outline: 0;
    border-radius: .25rem;
    text-align: center;
    align-items: center
  }
  p{
    float: right;
    position: absolute;
    right: 3%;
    top: 10%;
    font-size: .32rem;
    color: #999999;
  }
  input{
    width: 2rem;
    height: .46rem;
    outline: none;
    border:0;
    background: #f6f6f6;
    font-size: 14px;
    /* background: #f6f6f6;
    color: #999999;
    border: 0;
    outline: 0;
    border-radius: .25rem;
    text-align: center; */
  }
  i{
    font-size: .21rem;
    color: #ff323b;
    margin-left: 12px;
    margin-right: 8px;
    /* position: absolute;
    left: 20%;
    top: 25%; */
  }
</style>

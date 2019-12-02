<template>
  <div class="topbox">
    <!-- <span>首页</span> -->
    <ul>
      <li>
        <router-link to="/Index" class="tuijian">精彩</router-link>
      </li>
      <li v-for="(lei,index) in alllist" :key="index" @click="changetype(lei.name)">
        {{lei.name}}
      </li>
    </ul>
  </div>
</template>

<script>
  import Axios from 'axios';
    export default {
        name: "index.vue"
    }
</script>

<style scoped>

</style>

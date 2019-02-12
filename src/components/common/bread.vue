<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/mains' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>{{fn}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
    name:'bread',
    props:['fn']
};
</script>

<style>
</style>

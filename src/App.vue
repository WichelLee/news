<template>
  <div id="app">
    <nav class="navbar navbar-inverse navbar-fixed-top">
        <headers></headers>
    </nav>

    <div class="container-fluid">
      <div class="row">
        <slider></slider>
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <!-- <h1 class="page-header">Dashboard</h1> -->
          <router-view/>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import headers from './components/common/header'
import slider from './components/common/slider'
export default {
  components:{
    headers,
    slider
  }
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
}
html, body, #app {
    height: 100%;
}

</style>

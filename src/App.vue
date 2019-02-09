<template>
  <div id="app">
    <!-- <nav class="navbar navbar-inverse navbar-fixed-top">
        <headers></headers>
    </nav> -->

    <!-- <div class="container-fluid">
      <div class="row">
        <slider></slider>
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <router-view/>
        </div>
      </div>
    </div> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  
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

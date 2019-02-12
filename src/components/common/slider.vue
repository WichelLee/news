<template>
    <div class="col-sm-3 col-md-2 sidebar">
          <ul class="nav nav-sidebar">
            <li class="active">
              <a href="#/users">用户
                <!-- <span class="sr-only"></span> -->
              </a>
            </li>
            <li>
              <a href="#/goods">产品</a>
            </li>
            <li>
              <a href="#/maps">地图</a>
            </li>
            <li>
              <a href="#/newgoods">新商品</a>
            </li>
          </ul>
        </div>
</template>

<script>
$('ul').on('click','a',function() {
  console.log($(this));
});
export default {
  

}
</script>

<style>

</style>

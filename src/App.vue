<template>
  <div id="app">
    <!-- <div class="bab_opt_loading jdui_load">
        <span class="jdui_load_in"></span>
    </div> -->
    <router-view/>
  </div>
</template>

<script>
export default { name: 'App' }
</script>

<style>
html,
body,
h1,
h2,
h3,
h4,
h5,
h6,
h7,
ul,
li {
  margin: 0;
  padding: 0;
}
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
}
li {
  display: inline-block;
}
i,u{
  font-style: normal;
}
img{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.bab_opt_loading {
    position: fixed;
    z-index: 99
}
.jdui_load {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 40px;
  height: 40px;
  margin: -10px 0 0 -10px;
  background-image: url("//m.360buyimg.com/cms/jfs/t2107/334/2303746875/1256/56d123f6/57039ff6N35611012.png");
  background-position: center center;
  background-size: 40px 40px; }
.jdui_load_in {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 40px;
  background-image: url("//m.360buyimg.com/cms/jfs/t2110/163/2390169529/2211/328b9189/57039ff6N7b49c1b7.png");
  background-size: 40px 40px;
  -webkit-animation: rotate 1s linear infinite;
  animation: rotate 1s linear infinite; }
@keyframes rotate {
  0% {
    transform: rotate(0deg);
    -webkit-transform: rotate(0deg); }
  100% {
    transform: rotate(360deg);
    -webkit-transform: rotate(360deg); } }
</style>

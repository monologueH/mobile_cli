<template>
  <div class="flipTimer">
    <div class="flip_num">
      <img class="flip_content" src="../assets/num0.png">
    </div>
    <div class="flip_num">
      <img class="flip_content" src="../assets/num0.png">
    </div>
    <i>:</i>
    <div class="flip_num">
      <img class="flip_content" src="../assets/num0.png">
    </div>
    <div class="flip_num">
      <img class="flip_content" src="../assets/num0.png">
    </div>
    <i>:</i>
    <div class="flip_num">
      <img class="flip_content" src="../assets/num0.png">
    </div>
    <div class="flip_num">
      <img class="flip_content" src="../assets/num0.png">
    </div>
    <i>:</i>
    <div class="flip_num">
      <img class="flip_content" src="../assets/num0.png">
    </div>
  </div>
</template>

<script>
export default {
  name: 'flipTimer',
  props: {
    time: String
  },
  data() {
    return {
      num: 9
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang = 'less'>
.flipTimer {
  width: 300px;
  height: 50px;
  /* background-color: #ccc; */
  line-height: 50px;
  display: flex;
  justify-content: center;
  .flip_num {
    width: 32px;
    height: 50px;
    border-radius: 6px;
    margin-right: 6px;
    background-color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    &:nth-of-type(2n) {
      /* background-color: red; */
      margin-right: 0;
    }
    .flip_content {
      width: 18px;
      height: 30px;
    }
  }
  > i {
    display: block;
    width: 18px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 40px;
  }
}
</style>

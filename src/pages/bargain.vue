<template>
  <div class="bargainPage">
    <div class="bargainInfo">
      <div class="productDetail">
          <h1>小米4AL50M5-AD50英寸4k智能电视wifi网络平板液晶电视</h1>
          <h2>砍后价:<i>￥1677</i></h2>
          <h3>京东价:<i>￥7899</i></h3>
      </div>
      <div class="productImg">
        <div class="progress" @click="testClick">
          <div class="progressBasic"></div>
          <div class="progressLeftBasic" v-if="rotateAngle < 180"></div>
          <div class="progressLeft" :style="{transform:'rotateZ('+ -(360 - rotateAngle) +'deg)'}"></div>
          <div class="progressRight" v-if="rotateAngle>=180"></div>
        </div>
        <!-- <img src="https://img11.360buyimg.com/n1/jfs/t19138/240/937744554/579343/7fe7bb22/5ab240f6N6ad80f56.jpg"> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bargain',
  data() {
    return {
      bargainPercent: 0
    }
  },
  computed: {
    rotateAngle: function() {
      return this.bargainPercent * 360
    }
  },
  methods: {
    testClick() {}
  },
  created() {},
  mounted() {
    setTimeout(() => {
      setInterval(() => {
        // 0.6是通过接口下发的拼团百分比计算
        if (this.bargainPercent <= 1) {
          this.bargainPercent += 0.004
        }
      }, 10)
    }, 10)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang = 'less'>
.bargainInfo {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: #ccc;

  .productDetail {
    width: 500px;
    padding: 0 125px;
    margin-bottom: 30px;
    > h1 {
      width: 100%;
      font-size: 32px;
      line-height: 32px;
      margin: 20px 0;
    }
    > h2 {
      min-width: 200px;
      height: 40px;
      line-height: 40px;
      border-radius: 20px;
      font-size: 22px;
      background-color: #d25239;
      color: #fff;
      margin: 0 auto;
      margin-bottom: 10px;
      display: inline-block;
    }
    > h3 {
      height: 40px;
      line-height: 40px;
      font-size: 20px;
      color: #999;
      margin: 0 auto;
    }
  }
  .productImg {
    .progress {
      width: 250px;
      height: 250px;
      background-color: #fff;
      position: relative;
      .progressLeft,
      .progressBasic,
      .progressRight,
      .progressLeftBasic {
        width: 250px;
        height: 250px;
        border-radius: 50%;
        box-sizing: border-box;
        position: absolute;
        left: 0;
        top: 0;
      }
      .progressBasic {
        border: 10px solid #666;
      }
      .progressLeftBasic {
        border: 10px solid #666;
        clip: rect(0px, 125px, 250px, 0px);
        z-index: 1;
      }
      .progressLeft {
        border: 10px solid skyblue;
        clip: rect(0px, 125px, 250px, 0px);
        z-index: 0;
      }
      .progressRight {
        border: 10px solid skyblue;
        clip: rect(0, 250px, 250px, 125px);
        /* display: none; */
      }
    }
    img {
      width: 200px;
      height: 200px;
    }
  }
}
</style>

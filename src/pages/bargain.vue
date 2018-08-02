<template>
  <div class="bargainPage">
    <div class="bargainInfo">
      <div class="productDetail">
          <h1>小米4AL50M5-AD50英寸4k智能电视wifi网络平板液晶电视</h1>
          <!-- <h2>砍后价:<i>￥1677</i></h2>
          <h3>京东价:<i>￥7899</i></h3> -->
          <div class="productImg">
            <div class="progress" @click="testClick">
              <div class="progressBasic"></div>
              <div class="progressLeftBasic" v-if="rotateAngle < 180"></div>
              <div class="progressLeft" :style="{transform:'rotateZ('+ -(360 - rotateAngle) +'deg)'}"></div>
              <div class="progressRight" v-if="rotateAngle>=180"></div>
              <img src="../assets/product_bg.png">
            </div>
          </div>
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
      let percentTimer = setInterval(() => {
        // 0.6是通过接口下发的拼团百分比计算
        if (this.bargainPercent <= 0.6) {
          this.bargainPercent += 0.01
        } else {
          clearInterval(percentTimer)
        }
      }, 20)
    }, 10)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang = 'less'>
.bargainInfo {
  width: 750px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: #f7cea7;

  .productDetail {
    width: 646px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding-bottom: 10px;
    background-color: #fff;
    border-radius: 20px;
    > h1 {
      width: 532px;
      font-size: 28px;
      letter-spacing: -0.42px;
      color: #2e2d2d;
      line-height: 40px;
      text-align: center;
      overflow: hidden;
      margin-top: 46px;
      margin-bottom: 34px;
    }
    /* > h2 {
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
    } */
    .productImg {
      .progress {
        width: 420px;
        height: 420px;
        /* background-color: #fff; */
        position: relative;
        .progressLeft,
        .progressBasic,
        .progressRight,
        .progressLeftBasic {
          width: 420px;
          height: 420px;
          border-radius: 50%;
          box-sizing: border-box;
          position: absolute;
          left: 0;
          top: 0;
        }
        .progressBasic {
          border: 15px solid #fef7ec;
        }
        .progressLeftBasic {
          border: 15px solid #fef7ec;
          clip: rect(0px, 210px, 420px, 0px);
          z-index: 1;
        }
        .progressLeft {
          border: 15px solid skyblue;
          clip: rect(0px, 210px, 420px, 0px);
          z-index: 0;
        }
        .progressRight {
          border: 15px solid skyblue;
          clip: rect(0, 420px, 420px, 210px);
          /* display: none; */
        }
      }
      img {
        width: 394px;
        height: 394px;
        border-radius: 50%;
        position: absolute;
        top: 13px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
}
</style>

<template>
  <div class="bargainPage">
    <div class="bargainInfo">
      <div class="productDetail">
          <h1>小米4AL50M5-AD50英寸4k智能电视wifi网络平板液晶电视</h1>
          <!-- <h2>砍后价:<i>￥1677</i></h2>
          <h3>京东价:<i>￥7899</i></h3> -->
          <div class="productDetail_progress">
            <div class="progress">
              <!-- <img class="progressBasic" src="../assets/progress_basic.png"> -->
              <img class="progressMovebar" src="../assets/progress_movebar.png">
              <!-- 右侧裁剪背景 -->
              <div class="cutterWrap">
                <img class="baseCutter" src="../assets/base_cutter.png" :style="{transform:'rotateZ('+ rotateAngle +'deg)'}">
              </div>
              <img  class="progress_ft_r" src="../assets/progress_ft_r.png" v-if="rotateAngle < 230">
              <!-- 左侧遮挡的半圆 -->
              <img class="progressMovebar_l" src="../assets/movebar_l.png"  v-if="rotateAngle > 120">
            </div>
            <div class="product_img_wrap">
              <img class="product_bg" src="../assets/product_bg.png">
              <img class="product_img" src="https://img10.360buyimg.com/n1/jfs/t18970/325/1927884229/98870/7109e8d8/5adedd0eN7eb12bea.jpg">
            </div>
            <div class="moneyRemain"  :style="{left:+remainMoneyPos[0]+'px',top:+remainMoneyPos[1]+'px'}">
              还需砍¥17
            </div>

          </div>
          <div class="jdPrice">
            <div>京东价(元)</div>
            <div>64.00</div>
          </div>
          <div class="activityPrice">
            <div>砍后价(元)</div>
            <div>29.00</div>
          </div>

      </div>
      <div class="friendHelpInfo">
        <div class="friendHelpInfo_con">
          <img class="friendHelpInfo_bg" src="../assets/avater.png">
          <div class="friendHelpInfo_tips">
            <div>JESSYCCA</div>
            <div>已砍<i>￥17</i> 分享给好友马上砍价省钱买</div>
          </div>
        </div>
      </div>
    </div>
    <div class="friendRanking">
      <h1>砍价倒计时</h1>
      <div class="flipTimer_wrap">
        <div class="flipTimer">
          <flipTimer></flipTimer>
        </div>
      </div>
      <div class="shareCut">
        <img src="../assets/share_cut.png">
        <h1>分享好友 多砍一刀</h1>
      </div>
      <div class="cut_principle">砍价规则 <img src="../assets/arrow_brown.png"></div>
      <img class="friend_rank_bg" src="../assets/friend_rank_bg.png" alt="">
    </div>
    <!-- 好友榜单start -->
    <div class="hotFriend">
      <div class="hotFriendTitle">
        <img src="../assets/hot_friend.png">
      </div>
      <!-- 有好友助力start -->
      <div class="hasFriendHelp" v-if="isHelpFriend">
        <div class="hasFriendHelpContent">
          <ul>
            <li v-for="item in friendList">
              <div class="listLeft">
                <img src="../assets/avater.png">
                <div>
                  <h1>天天吃小西瓜真可耻</h1>
                  <div>
                    <img src="../assets/bestFriend.png">
                    <div>最佳老铁</div>
                  </div>
                </div>
              </div>
              <div class="listRight">
                <div>砍掉</div>
                <div><i>￥</i>6000</div>
              </div>
            </li>
            <li class="moreFriend">查看更多<img src="../assets/arrowon.png"></li>
          </ul>
        </div>
      </div>
      <!-- 有好友助力end -->
      <!-- 无好友助力start -->
      <div class="noFriendHelp" v-else>
        <div class="noFriendHelpContent">
          <div class="noFriendHelpBtn">
            <h1>邀请好友帮砍</h1>
            <img src="../assets/nofriend_share.png">
          </div>
          <div class="noFriendHelpTip">还没有好友帮砍哦，开始邀请吧！</div>
        </div>
      </div>
      <!-- 无好友助力end -->

      <img class="friend_rank_bg_lb" src="../assets/friend_rank_bg_lb.png">
    </div>
    <!-- 好友榜单end -->
    <!-- 推荐商品start -->
    <div class="productIntro">
      <img class="product_intro_t" src="../assets/product_intro_t.png">
      <div class="productIntroWrap">
        <div class="productIntroTitle">砍价优品推荐</div>
        <div class="introList">
          <div v-for="item in friendList" class="introItem">
            <img class="introImg" src="https://img11.360buyimg.com/mobilecms/s500x500_jfs/t15487/285/2340925666/66774/9094337e/5aa895e0N4521fab2.jpg">
            <div class="introInfo">
              <div class="introTitle">OPPO 全面屏双摄拍照手机 4G+128G 星空紫 全网通 双卡双待手机OPPO 全面屏双摄拍照手机 4G+128G 星空紫 全网通 双卡双待手机</div>
              <div class="introDetail">
                <div class="introPrice">
                  <div>砍后价: <i>￥</i><i>1400</i></div>
                  <div>京东价: <i>￥</i><i>1400</i></div>
                </div>
                <div class="introBtn">
                  <img src="../assets/intro_btn.png">
                  <div>砍价省钱买</div>
                  <div>109999人已省钱购买</div>
                </div>
              </div>
            </div>
          </div>
          <div class="introNoMore">
            <i></i>
            没有更多啦
            <i></i>
          </div>
        </div>
      </div>
    </div>
    <!-- 推荐商品end -->
    <div class="endFloor">
      <img class="friend_rank_bg_lt" src="../assets/friend_rank_bg_lt.png">
    </div>
  </div>
</template>

<script>
import flipTimer from '../components/flipTimer'
export default {
  name: 'bargain',
  components: {
    flipTimer
  },
  data() {
    return {
      bargainPercent: 0,
      bargainPerInit: 0,
      remainMoneyPos: [],
      isHelpFriend: true,
      friendList: [1, 1]
    }
  },
  computed: {
    rotateAngle: function() {
      return this.bargainPercent * 240
    }
  },
  methods: {
    // 获取剩余金额div的XY坐标
    calCoordinate(degree) {
      // console.log(degree)
      let startDeg = degree - 30
      let offsetY = 0
      let offsetX = 0
      console.log(Math.cos(2 * Math.PI * 24 / 360) * 212)
      if (Math.cos(2 * Math.PI * startDeg / 360) * 212 > 170) {
        offsetX = 50
        offsetY = -60
      } else if (Math.cos(2 * Math.PI * startDeg / 360) * 212 < -170) {
        offsetX = -190
        offsetY = -40
      } else if (Math.cos(2 * Math.PI * startDeg / 360) * 212 > 80) {
        offsetY = -50
        offsetX = -40
      } else if (Math.cos(2 * Math.PI * startDeg / 360) * 212 < -80) {
        offsetY = 40
        offsetX = -40
      } else {
        offsetY = 40
        offsetX = -40
      }
      return [
        (212 + offsetX - Math.round(Math.cos(2 * Math.PI * startDeg / 360) * 212)) / 2,
        (212 + offsetY - Math.round(Math.sin(2 * Math.PI * startDeg / 360) * 212)) / 2
      ]
    }
  },
  created() {},
  mounted() {
    this.bargainPerInit = 1
    // console.log(this.calCoordinate(this.bargainPerInit * 240))
    this.remainMoneyPos = this.calCoordinate(this.bargainPerInit * 240)
    setTimeout(() => {
      let percentTimer = setInterval(() => {
        // 0.6是通过接口下发的拼团百分比计算
        if (this.bargainPercent <= this.bargainPerInit) {
          this.bargainPercent += 0.02
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
.bargainPage {
  width: 750px;
  /* height: 2000px; */
  background: url(../assets/page_bg.png) no-repeat top left;
  background-size: 750px;
  overflow: hidden;
}
.bargainInfo {
  width: 674px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 38px;
  background: url(../assets/whitecard_bg.png) no-repeat top left;
  background-size: 674px, 765px;
  height: 734px;
  position: relative;
  margin-top: 14.2px;

  /* background-color: #f7cea7; */

  .productDetail {
    width: 646px;
    /* display: flex; */
    justify-content: center;
    flex-wrap: wrap;
    position: relative;
    padding-bottom: 10px;
    /* background-color: #fff; */
    border-radius: 20px;

    > h1 {
      width: 532px;
      height: 80px;
      font-size: 28px;
      letter-spacing: -0.42px;
      color: #2e2d2d;
      line-height: 40px;
      text-align: center;
      overflow: hidden;
      margin: 0 auto;
      margin-top: 46px;
      margin-bottom: 34px;
    }

    .productDetail_progress {
      position: absolute;
      left: 118px;
      top: 160px;
      .progress {
        width: 424px;
        height: 311px;
        background-color: #fff;
        position: relative;
        overflow: hidden;
        .progressBasic,
        .progressMovebar,
        .progressMovebar_l,
        .baseCutter {
          width: 424px;
          height: 311px;
          position: absolute;
          left: 0.5px;
          top: 0;
        }
        .cutterWrap {
          width: 424px;
          height: 300px;
          /* background-color: red; */
          position: absolute;
          left: 0px;
          top: 0;
          overflow: hidden;
        }
        .baseCutter {
          transform-origin: 212px 212px;
          transform: rotateZ(150deg);
        }
        .progress_ft_r {
          width: 50px;
          height: 20px;
          position: absolute;
          right: 0;
          bottom: 0;
        }
        .progressMovebar {
          transform-origin: 212px 212px;
        }
      }

      .product_img_wrap {
        width: 354px;
        height: 354px;
        position: absolute;
        top: 28px;
        left: 50%;
        transform: translateX(-50%);
        .product_bg {
          width: 400px;
          height: 400px;
          border-radius: 50%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .product_img {
          width: 354px;
          height: 354px;
          border-radius: 50%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
      .moneyRemain {
        width: 140px;
        height: 40px;
        text-align: center;
        background: #ffffff;
        box-shadow: 0 1px 8px 0 #f2eae2;
        border-radius: 20px;
        line-height: 40px;
        font-size: 24px;
        color: #bfbfbf;
        letter-spacing: -0.48px;

        /* background: url(../assets/moneyRemain_bg.png) no-repeat top left;
        background-size: 170px 72px; */
        position: absolute;
      }
    }
    .jdPrice {
      position: absolute;
      left: 52px;
      top: 480px;
      font-family: PingFangSC-Regular;

      div:first-child {
        font-size: 24px;
        color: #bfbfbf;
        letter-spacing: -0.4px;
        text-align: center;
      }
      div:last-child {
        font-size: 36px;
        line-height: 36px;
        color: #bfbfbf;
        letter-spacing: -0.82px;
        text-align: center;
      }
    }
    .activityPrice {
      position: absolute;
      right: 52px;
      top: 480px;
      font-family: PingFangSC-Regular;
      div:first-child {
        font-size: 24px;
        color: #2e2d2d;
        letter-spacing: -0.4px;
        text-align: center;
      }
      div:last-child {
        font-size: 36px;
        line-height: 36px;
        color: #f72344;
        letter-spacing: -0.82px;
        text-align: center;
      }
    }
  }
  .friendHelpInfo {
    width: 674px;
    height: 135px;
    position: absolute;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: red; */
    .friendHelpInfo_con {
      width: 566px;
      height: 92px;
      /* background-color: red; */
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .friendHelpInfo_bg {
        width: 92px;
        height: 92px;
        border-radius: 50%;
      }
      .friendHelpInfo_tips {
        margin-left: 20px;
        div {
          font-family: PingFangSC-Regular;
          font-size: 24px;
          color: #2e2d2d;
          line-height: 34px;
          letter-spacing: -0.48px;
          i {
            color: #e54858;
          }
        }
        > div:first-child {
          text-align: left;
        }
      }
    }
  }
}
.friendRanking {
  /* width: 100%; */
  height: 360px;
  /* background: linear-gradient(135deg,#fef9d3,#f9e07d); */
  position: relative;
  .friend_rank_bg {
    width: 734px;
    height: 99px;
    position: absolute;
    left: 0;
    bottom: 0;
  }
  h1 {
    font-size: 28px;
    color: #722c0d;
    letter-spacing: -0.48px;
    text-align: center;
    padding-top: 28px;
    margin-bottom: 2px;
  }
  .flipTimer_wrap {
    display: flex;
    justify-content: center;
  }
  .shareCut {
    margin-top: 32px;
    position: relative;
    text-align: center;
    img {
      width: 514px;
      height: 132px;
    }
    h1 {
      font-family: PingFangSC-Semibold;
      position: absolute;
      left: 50%;
      top: 30%;
      font-size: 36px;
      color: #ffffff;
      letter-spacing: -0.42px;
      transform: translate(-50%, -50%);
    }
  }
  .cut_principle {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 28px;
    color: #722c0d;
    letter-spacing: -0.48px;
    img {
      width: 20px;
      height: 16px;
      transform: rotate(90deg);
      margin-left: 1px;
      margin-bottom: 1px;
    }
  }
}
.hotFriend {
  margin-right: 16px;
  padding-bottom: 100px;
  border-radius: 0 100px 0 0;
  background: linear-gradient(135deg, #fef9d3, #f7d65c);
  position: relative;
  overflow: hidden;
  .hotFriendTitle {
    display: flex;
    justify-content: center;
    margin-top: 30px;
    img {
      width: 428px;
      height: 138px;
    }
  }
  .hasFriendHelp {
    display: flex;
    justify-content: center;
    .hasFriendHelpContent {
      width: 646px;
      background-color: #f9df74;
      border-radius: 20px;
      margin-top: 22px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      ul {
        width: 646px;
        li {
          height: 140px;
          display: flex;
          justify-content: space-between;
          background: url(../assets/dashline.png) no-repeat bottom left;
          background-size: 584px, 22px;
          margin-left: 32px;
          margin-right: 32px;
          .listLeft {
            /* padding-left: 32px; */
            height: 140px;
            display: flex;
            justify-content: flex-start;
            align-items: center;

            /* background-color: #ccc; */
            img {
              width: 72px;
              height: 72px;
              margin-right: 14px;
            }
            > div {
              flex: 1;

              h1 {
                font-family: PingFangSC-Regular;
                width: 200px;
                height: 40px;
                line-height: 40px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                font-size: 28px;
                color: #722c0d;
                letter-spacing: -0.48px;
              }
              > div {
                position: relative;
                img {
                  width: 92px;
                  height: 26px;
                }
                > div {
                  position: absolute;
                  left: -8px;
                  top: -4px;
                  /* transform: translate(-50%, -50%); */
                  font-family: PingFangSC-Light;
                  font-size: 18px;
                  color: #ffffff;
                  letter-spacing: -1.32px;
                  transform: scale(0.7, 0.7);
                }
              }
            }
          }
          .listRight {
            width: 184px;
            height: 140px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            /* padding-right: 32px; */
            /* background-color: #ccc; */
            > div:first-child {
              font-family: PingFangSC-Light;
              font-size: 24px;
              color: #722c0d;
              letter-spacing: -1.12px;
            }
            > div:last-child {
              font-family: JDZhengHei-01-Regular;
              font-size: 36px;
              color: #f72344;
              letter-spacing: -1.68px;
              i {
                font-size: 24px;
                color: #f72344;
                letter-spacing: -1.12px;
              }
            }
          }
        }
        li:nth-last-child(2) {
          background: #f9df74;
        }
        .moreFriend {
          line-height: 82px;
          background: #ffd049;
          color: #fff;
          font-size: 12px;
          letter-spacing: -1.32px;
          text-align: center;
          height: 82px;
          display: block;
          margin: 0;
          border-radius: 0 0 10px 10px;
          img {
            width: 18px;
            height: 14px;
            margin-bottom: 2px;
            margin-left: 10px;
            transform: rotate(180deg);
          }
        }
      }
    }
  }
  .noFriendHelp {
    display: flex;
    justify-content: center;
    .noFriendHelpContent {
      width: 646px;
      height: 206px;
      background-color: #f9df74;
      border-radius: 20px;
      margin-top: 22px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .noFriendHelpBtn {
        position: relative;
        h1 {
          font-family: PingFangSC-Semibold;
          font-size: 28px;
          color: #ffffff;
          letter-spacing: -0.42px;
          position: absolute;
          left: 50%;
          top: 38%;
          transform: translate(-50%, -50%);
          width: 100%;
        }
        img {
          width: 250px;
          height: 108px;
        }
      }
      .noFriendHelpTip {
        width: 100%;
        font-family: PingFangSC-Light;
        font-size: 24px;
        color: #722c0d;
        letter-spacing: -1.12px;
        text-align: center;
        margin-top: -20px;
      }
    }
  }
  .friend_rank_bg_lb {
    width: 734px;
    height: 99px;
    position: absolute;
    bottom: 0;
    left: 0;
  }
}
.productIntro {
  width: 734px;
  background-color: #fff;
  border-radius: 0 0 100px 0;
  position: relative;
  display: flex;
  flex-direction: column;
  .product_intro_t {
    width: 734px;
    height: 99px;
    position: absolute;
    top: 0;
    right: 0;
  }
  .productIntroWrap {
    width: 646px;
    margin: 0 auto;
    padding: 60px 0 60px 0;
    /* background-color: red; */
    overflow: hidden;
    .productIntroTitle {
      font-size: 36px;
      color: #2e2d2d;
      letter-spacing: -1.68px;
      margin-bottom: 36px;
    }
    .introList {
      .introItem {
        width: 100%;
        height: 192px;
        display: flex;
        justify-content: space-between;
        margin-bottom: 44px;
        /* background-color: red; */
        .introImg {
          display: block;
          width: 192px;
          height: 192px;
          margin-right: 10px;
        }
        .introInfo {
          width: 100%;
          .introTitle {
            font-size: 26px;
            line-height: 36px;
            color: #2e2d2d;
            letter-spacing: -1.82px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: box;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            margin-bottom: 16px;
          }
          .introDetail {
            display: flex;
            justify-content: space-between;
            .introPrice {
              div:first-child {
                font-size: 26px;
                color: #2e2d2d;
                letter-spacing: -1.82px;
                i {
                  font-size: 40px;
                  color: #f72344;
                  letter-spacing: -1.88px;
                }
                i:first-child {
                  font-size: 24px;
                  letter-spacing: -1.12px;
                }
              }
              div:last-child {
                font-size: 26px;
                color: #bebebe;
                letter-spacing: -1.82px;
                i {
                  font-size: 28px;
                  color: #bebebe;
                  letter-spacing: -1.88px;
                }
                i:first-child {
                  font-size: 24px;
                  letter-spacing: -1.12px;
                }
              }
            }
            .introBtn {
              width: 200px;
              height: 102px;
              position: relative;
              div:first-of-type {
                font-family: PingFangSC-Semibold;
                width: 100%;
                text-align: center;
                position: absolute;
                left: 0;
                top: 0;
                font-size: 28px;
                height: 60px;
                line-height: 60px;
                color: #ffffff;
                letter-spacing: -0.34px;
                text-align: center;
                z-index: 1;
              }
              div:last-of-type {
                width: 100%;
                text-align: center;
                position: absolute;
                left: 0;
                top: 45px;
                height: 60px;
                line-height: 60px;
                color: #ffffff;
                letter-spacing: -0.3px;
                text-align: center;
                z-index: 1;
                font-size: 12px;
                transform: scale(0.7, 0.7);
              }
              img {
                width: 200px;
                height: 102px;
                position: absolute;
                left: 0;
                top: 0;
                z-index: 0;
              }
            }
          }
        }
      }
      .introNoMore {
        text-align: center;
        font-size: 24px;
        line-height: 24px;
        color: #bfbfbf;
        letter-spacing: -0.48px;
        vertical-align: middle;
        display: flex;
        justify-content: center;
        align-items: center;
        i {
          display: inline-block;
          height: 1;
          width: 40px;
          border: 1px solid #bfbfbf;
          margin: 0 8px;

        }
      }
    }
  }
}
.endFloor {
  height: 100px;
  position: relative;
  .friend_rank_bg_lt {
    width: 734px;
    height: 99px;
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>

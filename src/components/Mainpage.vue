<template>
  <div id='mainpage'>
      <div class="top">
          <div class="l" >
              <div :class="{'animate__animated animate__fadeInLeft animate__delay-1s':active}">合作 / 創新 / 共贏 / 發展 >></div>
              <div :class="{'animate__animated animate__fadeInLeft animate__delay-1s':active}">GO FORWARD HAND-IN-HEAD</div>
              <div :class="{'animate__animated animate__fadeInUp animate__delay-1s animate__slow':active}">2021</div>
          </div>
          <div class="r" :class="{'animate__animated animate__zoomIn animate__delay-1s':active}">
              <div>-企業宣傳</div>
              <div>-產品手冊</div>
              <div>-項目招商</div>
          </div>
      </div>
      <div class="banner">
          <div class="img">
            <div class="test" :class="{'animate__animated animate__zoomIn animate__fast ':active}"></div>
            <img :class="{'animate__animated animate__zoomIn ':active}" src="/H5/1/img/GDC-3029.jpg" alt="">
            <div class="title fade-right" :class="{'animate__animated animate__zoomIn':active}" >
                <div :class="{'animate__animated animate__flipInX animate__slower ':active}">BUSINESS</div>
                <div :class="{'animate__animated animate__flipInX animate__slower ':active}">企業宣傳冊</div>
                <div :class="{'animate__animated animate__flipInX animate__slower ':active}">
                    <span>CORPORATE</span> <span>BROCHURE</span>
                </div>
            </div>
          </div>
      </div>
      <div class="bottom">
          <div :class="{'animate__animated animate__fadeInLeft animate__delay-1s animate__slow':active}">LOGO</div>
          <h3 :class="{'animate__animated animate__fadeInLeft animate__delay-1s':active}">泳欣設計 | YongXin Design</h3>
          <div class="content" :class="{'animate__animated animate__fadeInRight animate__delay-1s':active}">
                <div class="canvas">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <h3>www.yongxin-design.com</h3>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'mainpage',
    mounted(){
    },
    props:[
        'active'
    ],
    methods:{

    }

}
</script>

<style>

</style>
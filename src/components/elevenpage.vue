<template>
  <div id="elevenpage">
        <div class="page">
            <div class="l container" >
                <div class="banner" :class="{'animate__animated animate__zoomIn':active}">
                    <img  src="/img/GDC-8001.jpg" alt="">
                </div>
                <div class="top" :class="{'animate__animated animate__fadeInUp animate__slow':active}">
                    <div>合作 / 創新 / 共贏 / 發展 >></div>
                </div>
                <div class="canvas" :class="{'animate__animated animate__zoomIn ':active}">
                    <div class="content" :class="{'animate__animated animate__fadeInRight animate__slow':active}">
                        <p :class="{'animate__animated animate__fadeInRight animate__slow':active}">COMPANY PROFILE</p>
                        <p :class="{'animate__animated animate__fadeInRight animate__slow':active}">在線導航 >></p> 
                    </div>
                </div>
                <div class="content">
                    <div :class="{'animate__animated animate__zoomIn animate__delay-1s animate__slow':active}">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.813996951619!2d120.65268201536752!3d24.143169479574233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693df0ad32ee69%3A0xb27ba42ba48fc4a3!2z5rOz5qyj5bmz6Z2i6Kit6KiIIOe2sui3r-ihjOmKtw!5e0!3m2!1szh-TW!2stw!4v1618193787940!5m2!1szh-TW!2stw" 
                        style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                    <div>
                        <p :class="{'animate__animated animate__fadeInUp animate__delay-1s animate__slow':active}">
                            公司地址:台中市南屯區精誠路504號2樓
                        </p>
                    </div>
                </div>
                <div class="bottom" :class="{'animate__animated animate__fadeInLeft ':active}"></div>
            </div>
            <div class="r container" :class="{'animate__animated animate__zoomIn ':active}" >
                <div :class="{'animate__animated animate__zoomIn animate__delay-1s animate__slow':active}">
                    <span>CORPORATE </span> <span> BROCHURE</span>
                </div>

            </div>
        </div>
        <div class="bottom" >
            <h3 :class="{'animate__animated animate__fadeInLeft animate__slow ':active}">泳欣設計 | YongXin Design</h3>
            <div class="content" :class="{'animate__animated animate__fadeInRight ':active}">
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
    props:[
        'active'
    ],

}
</script>
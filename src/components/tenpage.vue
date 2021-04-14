<template>
  <div id="tenpage">
        <div class="page">
            <div class="l container" >
                <div class="banner" :class="{'animate__animated animate__zoomIn':active}">
                    <img  src="/img/GDC-3029.jpg" alt="">
                </div>
                <div class="top" :class="{'animate__animated animate__fadeInUp animate__slow':active}">
                    <div>合作 / 創新 / 共贏 / 發展 >></div>
                </div>
                <div class="canvas" :class="{'animate__animated animate__zoomIn ':active}">
                    <div class="content" :class="{'animate__animated animate__fadeInRight animate__slow':active}">
                        <p :class="{'animate__animated animate__fadeInRight animate__slow':active}">COMPANY PROFILE</p>
                        <p :class="{'animate__animated animate__fadeInRight animate__slow':active}">商務合作 >></p> 
                    </div>
                </div>
                <div class="content">
                    <div>
                        <input name="name" type="text" placeholder="姓名" 
                        :class="{'animate__animated animate__fadeInUp animate__delay__decimals-3s':active}">
                        <input name="phone" type="text" placeholder="手機"
                        :class="{'animate__animated animate__fadeInUp animate__delay__decimals-6s':active}">
                        <input name="email" type="text" placeholder="信箱"
                        :class="{'animate__animated animate__fadeInUp animate__delay__decimals-9s ':active}">
                        <div class="recaptcha-container">
                            <div
                                class="g-recaptcha"
                                :class="{'animate__animated animate__fadeInUp animate__delay__decimals-12s ':active}"
                                data-sitekey="6Lf6BakaAAAAAARjNiUzTxZW6tSWVT5U_FP3uLNc"
                                data-theme="light" data-size="normal"
                                data-callback="verify"
                                data-expired-callback="expired"
                                data-error-callback="error">
                            </div>
                        </div>  
                        <button
                        :class="{'animate__animated animate__fadeInUp animate__delay__decimals-15s':active}">
                            提交
                        </button>
                        <span
                        :class="{'animate__animated animate__fadeInUp animate__delay__decimals-18s ':active}">
                            請留下您的聯繫方式，我們會盡快與您聯絡，謝謝!
                        </span>
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
    methods:{
        DelayFormat(index){
            if(this.active){
                index = index*3
                return `animate__animated animate__fadeInRight animate__slow animate__delay__decimals-${index}s`
            }
        },
    }
}
</script>

<style>

</style>
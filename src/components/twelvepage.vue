<template>
  <div id="twelvepage">
        <div class="page">
            <div class="l container" >
                <div class="banner" :class="{'animate__animated animate__zoomIn':active}">
                    <img  src="/img/GDC-3007.jpg" alt="">
                </div>
                <div class="top" :class="{'animate__animated animate__fadeInUp animate__slow':active}">
                    <div>合作 / 創新 / 共贏 / 發展 >></div>
                </div>
                <div class="canvas" :class="{'animate__animated animate__zoomIn ':active}">
                    <div class="content" :class="{'animate__animated animate__fadeInRight animate__slow':active}">
                        <p :class="{'animate__animated animate__fadeInRight animate__slow':active}">COMPANY PROFILE</p>
                        <p :class="{'animate__animated animate__fadeInRight animate__slow':active}">聯絡我們 >></p> 
                    </div>
                </div>
                <div class="content">
                    <div class="title" :class="{'animate__animated animate__fadeInRight animate__delay-1s ':active}">
                        高級訂製、訂製微場景
                    </div>
                    <hr :class="{'animate__animated animate__fadeInRight animate__delay__decimals-3s ':active}">
                    <div class="sub-content" :class="{'animate__animated animate__fadeInRight animate__delay__decimals-6s ':active}">
                        <p>模板使用問題掃碼聯繫設計師</p>
                        <p>電話: {{data.phone}}</p>
                        <p>信箱: {{data.email}}</p>
                        <p>[文字 / 圖片 / 音樂可修改]</p>
                        <p>[頁面可增減、順序可更改]</p>
                    </div>
                    <hr :class="{'animate__animated animate__fadeInRight animate__delay__decimals-9s':active}">
                    <div class="connection" :class="{'animate__animated animate__fadeInRight animate__delay__decimals-12s':active}">
                        <p>電話: {{data.phone}}</p>
                        <p>信箱: {{data.email}}</p>
                        <p>網址: https://www.yongxin-design.com/</p>
                    </div>
                    <img :class="{'animate__animated animate__fadeInRight animate__delay__decimals-15s':active}" src="/img/QRcode.png" alt="">
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
    data(){
        return{
            data:{
                phone:'0978966582',
                email: 'zxcv853496@gmail.com'
            }
        }
    },
    props:[
        'active'
    ]
}
</script>

<style>

</style>
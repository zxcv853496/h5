<template>
  <div id="twopage">
        <div class="page">
            <div class="l container" >
                <div class="banner" :class="{'animate__animated animate__zoomIn':active}">
                    <img  src="/H5/1/img/GDC-2026.jpg" alt="">
                </div>
                <div class="top" :class="{'animate__animated animate__fadeInUp animate__slow':active}">
                    <div>合作 / 創新 / 共贏 / 發展 >></div>
                </div>
                <div class="canvas" :class="{'animate__animated animate__zoomIn ':active}">
                    <div class="content" :class="{'animate__animated animate__fadeInRight animate__slow':active}">
                        <p :class="{'animate__animated animate__fadeInRight animate__slow':active}">COMPANY PROFILE</p>
                        <p :class="{'animate__animated animate__fadeInRight animate__slow':active}">企業簡介 >></p> 
                    </div>
                </div>
                <div class="content">
                    <p :class="{'animate__animated animate__fadeInUp animate__delay-1s':active}">
                        引導成功的品牌舵手！
                        游向設計的海洋 破開迎來的風浪 成就品牌的閃耀
                        跨越變化莫測的海洋，才能到另一片大陸實踐夢想，找到耀眼的寶藏。 為之瘋狂的品牌魅力在於，
                        我們一起經歷的大風大浪與無數波折之後，在成為頂尖品牌的路上，看到的美麗與感動。
                    </p>
                    <p :class="{'animate__animated animate__fadeInUp animate__delay-1s animate__slow':active}">
                        泳欣設計幫助你的不止於設計，我們將會與你並肩作戰，告訴世界你一無二的品牌價值
                        ，我們會是你最優秀的夥伴，在成功品牌的道路上合作無間。

                        使用我們的經驗去避免可能的風險，以設計融入生活，無論在什麼時刻都用不同的方式，為你帶來最美好的簡單成就。
                        在我們成長的這段時間，我們與無數的品牌合作，協手一起打造了很多成功的品牌，讓泳欣設計成為你破浪的水手，一起泳向大海。
                    </p>
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
    ]
}
</script>

<style>

</style>
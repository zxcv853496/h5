<template>
  <div id="ninepage">
        <div class="page">
            <div class="l container" >
                <div class="banner" :class="{'animate__animated animate__zoomIn':active}">
                    <img  src="/H5/1/img/GDC-6043.jpg" alt="">
                </div>
                <div class="top" :class="{'animate__animated animate__fadeInUp animate__slow':active}">
                    <div>合作 / 創新 / 共贏 / 發展 >></div>
                </div>
                <div class="canvas" :class="{'animate__animated animate__zoomIn ':active}">
                    <div class="content" :class="{'animate__animated animate__fadeInRight animate__slow':active}">
                        <p :class="{'animate__animated animate__fadeInRight animate__slow':active}">COMPANY PROFILE</p>
                        <p :class="{'animate__animated animate__fadeInRight animate__slow':active}">企業環境 >></p> 
                    </div>
                </div>
                <div class="content">
                    <div class="sub-banner">
                        <div :class="{'animate__animated animate__fadeInLeft animate__delay-1s animate__slow':active}">
                            <img v-bind:src="data.top_banner[0].img" alt="">
                        </div>
                        <div :class="{'animate__animated animate__fadeInRight animate__delay-1s animate__slow':active}">
                            <img v-bind:src="data.top_banner[1].img" alt="">
                        </div>
                    </div>
                    <div class="bottom-banner" :class="{'animate__animated animate__fadeInUp animate__delay-1s animate__slow':active}">
                        <div v-for="item in data.bottom_banner" :key="item.index">
                            <img v-bind:src="item.img" alt="">
                        </div>
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
    data(){
        return{
            data:{
                top_banner:[
                    {
                        img:'/H5/1/img/GDC-7044.jpg'
                    },
                    {
                        img:'/H5/1/img/GDC-7067.jpg'
                    }
                ],
                bottom_banner:[
                    {
                        img:'/H5/1/img/GDC-8001.jpg'
                    }
                ]
            }
        }
    },
    props:[
        'active'
    ],
}
</script>

<style>

</style>
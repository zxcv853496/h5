<template>
  <div id="sevenpage">
        <div class="page">
            <div class="l container" >
                <div class="banner" :class="{'animate__animated animate__zoomIn':active}">
                    <img  src="/H5/1/img/GDC-5034.jpg" alt="">
                </div>
                <div class="top" :class="{'animate__animated animate__fadeInUp animate__slow':active}">
                    <div>合作 / 創新 / 共贏 / 發展 >></div>
                </div>
                <div class="canvas" :class="{'animate__animated animate__zoomIn ':active}">
                    <div class="content" :class="{'animate__animated animate__fadeInRight animate__slow':active}">
                        <p :class="{'animate__animated animate__fadeInRight animate__slow':active}">COMPANY PROFILE</p>
                        <p :class="{'animate__animated animate__fadeInRight animate__slow':active}">主營任務 >></p> 
                    </div>
                </div>
                <div class="content">
                    <div class="container" v-for="(item, item_index) in data" :key="item.index">
                        <div :class="DelayFormatL(item_index+1)">
                            <img v-bind:src="item.img" alt="">
                        </div>
                        <div class="sub-container" :class="DelayFormatR(item_index+1)">
                            <div class="title">
                                {{item.title}}
                            </div>
                            <div class="sub-content">
                                {{item.content}}
                            </div>
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
            data:[
                {
                    title:'品牌形象 >>',
                    content:'在設計的道路上是你最牢靠的夥伴，與你一起冒險，創造品牌的故事，如同品牌設計靈魂的瘋狂。'   ,
                    img: '/H5/1/img/GDC-2026.jpg'
                },
                {
                    title:'品牌設計 >>',
                    content:'讓品牌的誕生更加完整，具體,在LOGO設計，等相關事務用品上，我們會是你最好的夥伴。'   ,
                    img: '/H5/1/img/GDC-2051.jpg'
                },
                {
                    title:'資訊攻略 >>',
                    content:'我們希望在你的背後協助你把一個品牌做到好，做到大家都認識的品牌，我們會將設計網頁，幫助你經營社群媒體。'   ,
                    img: '/H5/1/img/GDC-3029.jpg'
                }
            ]
        }
    },
    props:[
        'active'
    ],
    methods:{
        DelayFormatL(index){
            if(this.active){
                index = index*3
                
                return `animate__animated animate__fadeInLeft  animate__delay__decimals-${index}s`
            }
        },
        DelayFormatR(index){
            if(this.active){
                index = index*3
                return `animate__animated animate__fadeInRight animate__delay__decimals-${index}s`
            }
        }
    }
}
</script>

<style>

</style>
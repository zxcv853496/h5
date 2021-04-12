<template>
  <div id="sixpage">
        <div class="page">
            <div class="l container" >
                <div class="banner" :class="{'animate__animated animate__zoomIn':active}">
                    <img  src="/img/GDC-4053.jpg" alt="">
                </div>
                <div class="top" :class="{'animate__animated animate__fadeInUp animate__slow':active}">
                    <div>合作 / 創新 / 共贏 / 發展 >></div>
                </div>
                <div class="canvas" :class="{'animate__animated animate__zoomIn ':active}">
                    <div class="content" :class="{'animate__animated animate__fadeInRight animate__slow':active}">
                        <p :class="{'animate__animated animate__fadeInRight animate__slow':active}">COMPANY PROFILE</p>
                        <p :class="{'animate__animated animate__fadeInRight animate__slow':active}">公司產品 >></p> 
                    </div>
                </div>
                <div class="content">
                    <div class="container">
                        <img :class="{'animate__animated animate__zoomIn animate__delay__decimals-3s':active}" v-bind:src="data.main.img" alt="">
                        <p :class="{'animate__animated animate__zoomIn animate__delay__decimals-12s':active}">
                            {{ data.main.title }}
                        </p> 
                    </div>
                    <div class="sub-container">
                        <div v-for="(item, item_index) in data.sub" :key="item.index">
                            <img :class="DelayFormat(item_index+1)" v-bind:src="item.img" alt="">
                            <p :class="DelayFormat(item_index+5)">{{ item.title }}</p> 
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
                main:{
                    title: '全新SUV車型時尚年輕',
                    img: '/img/car-1.jpg',
                },
                sub:[
                    {
                        title: 'A3車型',
                        img: '/img/car-2.jpg',
                    },
                    {
                        title: 'A4車型',
                        img: '/img/car-3.jpg',
                    },
                    {
                        title: 'A8車型',
                        img: '/img/car-4.jpg',
                    },
                    {
                        title: 'A1車型',
                        img: '/img/car-5.jpg',
                    }
                ]
            }
        }
    },
    props:[
        'active'
    ],
    methods:{
        DelayFormat(index){
            if(this.active){
                index = index*3
                return `animate__animated animate__zoomIn animate__delay__decimals-${index}s`
            }
        },
    }
}
</script>

<style>

</style>
<template>
  <div id="fivepage">
        <div class="page">
            <div class="l container" >
                <div class="banner" :class="{'animate__animated animate__zoomIn':active}">
                    <img  src="/H5/1/img/GDC-7067.jpg" alt="">
                </div>
                <div class="top" :class="{'animate__animated animate__fadeInUp animate__slow':active}">
                    <div>合作 / 創新 / 共贏 / 發展 >></div>
                </div>
                <div class="canvas" :class="{'animate__animated animate__zoomIn ':active}">
                    <div class="content" :class="{'animate__animated animate__fadeInRight animate__slow':active}">
                        <p :class="{'animate__animated animate__fadeInRight animate__slow':active}">COMPANY PROFILE</p>
                        <p :class="{'animate__animated animate__fadeInRight animate__slow':active}">發展歷程 >></p> 
                    </div>
                </div>
                <div class="content" >
                    <div class="sub container-l" :class="{'active':active}">
                        <p v-for="(item, item_index) in content" :key="item.id" :class="DelayFormatL(item_index+1)">
                            {{ item.date }} -
                        </p>
                    </div>
                    
                    <div class="sub container-r" >
                        <p v-for="(item, item_index) in content" :key="item.id" :class="DelayFormatR(item_index+1)">
                            {{ item.content }}
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
    data(){
        return {
            content: [
                {
                    date:'2010年3月',
                    content: '泳欣設計網站上線'
                },
                {
                    date:'2012年1月',
                    content: '泳欣設計用戶突破500萬'
                },
                {
                    date:'2015年4月',
                    content: '泳欣設計用戶突破1千萬'
                },
                {
                    date:'2016年8月',
                    content: '泳欣設計加開100家分店'
                },
                {
                    date:'2018年9月',
                    content: '泳欣設計上市上櫃'
                },
                {
                    date:'2022年10月',
                    content: '泳欣設計退休'
                },
                {
                    date:'2010年3月',
                    content: '泳欣設計網站上線'
                },
                {
                    date:'2012年1月',
                    content: '泳欣設計用戶突破500萬'
                },
                {
                    date:'2015年4月',
                    content: '泳欣設計用戶突破1千萬'
                },
                {
                    date:'2016年8月',
                    content: '泳欣設計加開100家分店'
                },
                {
                    date:'2018年9月',
                    content: '泳欣設計上市上櫃'
                },
                {
                    date:'2022年10月',
                    content: '泳欣設計退休'
                },
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
                return `animate__animated animate__fadeInLeft animate__delay__decimals-${index}s`
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
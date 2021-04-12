<template>
  <div id="fourpage">
        <div class="page">
            <div class="l container" >
                <div class="banner" :class="{'animate__animated animate__zoomIn':active}">
                    <img  src="/img/GDC-7044.jpg" alt="">
                </div>
                <div class="top" :class="{'animate__animated animate__fadeInUp animate__slow':active}">
                    <div>合作 / 創新 / 共贏 / 發展 >></div>
                </div>
                <div class="canvas" :class="{'animate__animated animate__zoomIn ':active}">
                    <div class="content" :class="{'animate__animated animate__fadeInRight animate__slow':active}">
                        <p :class="{'animate__animated animate__fadeInRight animate__slow':active}">COMPANY PROFILE</p>
                        <p :class="{'animate__animated animate__fadeInRight animate__slow':active}">公司榮譽 >></p> 
                    </div>
                </div>
                <div class="content">
                    <p v-for="(item, item_index) in content" :key="item.index" :class="DelayFormat(item_index+1)">
                        | {{ item.date }} | >> {{ item.content }}
                        <img :class="DelayFormat(item_index+1)" 
                            v-show="item.img"  v-bind:src="item.img" alt="">      
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
    data(){
        return {
            content:[
                {
                    date:'2021年3月',
                    content: '榮獲好好棒市長獎',
                },
                {
                    date:'2021年3月',
                    content: '榮獲好好棒市長獎',
                    img: '/img/champion.jpg'
                },
                {
                    date:'2021年3月',
                    content: '榮獲好好棒市長獎',
                },
                {
                    date:'2021年3月',
                    content: '榮獲好好棒市長獎',
                },
                {
                    date:'2021年3月',
                    content: '榮獲好好棒市長獎',
                },
                {
                    date:'2021年3月',
                    content: '榮獲好好棒市長獎',
                },
                {
                    date:'2021年3月',
                    content: '榮獲好好棒市長獎',
                },
                {
                    date:'2021年3月',
                    content: '榮獲好好棒市長獎',
                },
                
            ]
        }
    },
    props:[
        'active'
    ],
    methods:{
        DelayFormat(index){
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
<template>
  <div id="eightpage">
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
                        <p :class="{'animate__animated animate__fadeInRight animate__slow':active}">人才需求 >></p> 
                    </div>
                </div>
                <div class="content">
                    <div class="top" :class="{'animate__animated animate__zoomIn ':active}">
                        <p :class="{'animate__animated animate__zoomIn animate__delay__decimals-03s ':active}">網頁設計 3人</p>
                        <p :class="{'animate__animated animate__zoomIn animate__delay__decimals-06s':active}">(薪資待遇: 8K - 13K * 13薪水)</p>
                    </div>
                    <div class="job">
                        <div class="container" v-for="(item, item_index) in data" :key="item.index"
                        :class="DelayFormat(item_index+1)">
                            {{ item.title + ' >>'}}
                            <p v-for=" content in item.content" :key="content.index">
                                {{ content }}
                            </p>
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
                    title:'|崗位職責|',
                    content:{
                        one:'老闆說了 最特別的是「湯頭添加的是「嚴選數十種純中藥 + 紅甘蔗」讓口感保持甘甜薑母鴨是食補之霸 鴨肉本身溫補 搭配的藥膳各憑店家風格做選配?所以今天要獨家發布老闆製作過程哦'
                    }
                },
                {
                    title: '|崗位要求|',
                    content:{
                        one:'1、本科及學歷以上，3年左右網站運營工作經驗',
                        two:'2、程式設計功底扎實，熱愛程式撰寫，能夠針對不同問題制定不同對策'
                    }
                }
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
                return `animate__animated animate__fadeInRight animate__slow animate__delay__decimals-${index}s`
            }
        },

    }
}
</script>

<style>

</style>
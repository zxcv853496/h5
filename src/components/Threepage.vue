<template>
  <div id="threepage">
        <div class="page">
            <div class="l container" >
                <div class="banner" :class="{'animate__animated animate__zoomIn':active}">
                    <img  src="/img/GDC-2051.jpg" alt="">
                </div>
                <div class="top" :class="{'animate__animated animate__fadeInUp animate__slow':active}">
                    <div>合作 / 創新 / 共贏 / 發展 >></div>
                </div>
                <div class="canvas" :class="{'animate__animated animate__zoomIn ':active}">
                    <div class="content" :class="{'animate__animated animate__fadeInRight animate__slow':active}">
                        <p :class="{'animate__animated animate__fadeInRight animate__slow':active}">COMPANY PROFILE</p>
                        <p :class="{'animate__animated animate__fadeInRight animate__slow':active}">公司文化 >></p> 
                    </div>
                </div>
                <div class="content">
                    <div v-for="(item,item_index) in data" :key="item.index">
                        <h4 :class="DelayFormat(item_index+1)">- {{ item.title }} -</h4>
                        <p class="animate__slow" :class="DelayFormat(item_index+1)">
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
        return{
            data:[
                {
                    title:'經營理念',
                    content: '引導成功的品牌舵手！游向設計的海洋 破開迎來的風浪 成就品牌的閃耀',   
                },
                {
                    title:'企業精神',
                    content: '跨越變化莫測的海洋，才能到另一片大陸實踐夢想，找到耀眼的寶藏。 ',   
                },
                {
                    title:'企業願景',
                    content: '我們一起經歷的大風大浪與無數波折之後，在成為頂尖品牌的路上，看到的美麗與感動。',   
                },
                {
                    title:'經營理念',
                    content: '引導成功的品牌舵手！游向設計的海洋 破開迎來的風浪 成就品牌的閃耀',   
                }
            ]
        }
    },
    props:[
        'active'
    ],
    methods: {
        DelayFormat(index){
            if(this.active){
                index = index*3
                return `animate__animated animate__zoomIn animate__delay__decimals-${index}s`
            }
        }
    }
}
</script>

<style>

</style>
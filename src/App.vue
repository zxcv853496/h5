<template>
  <div id="app">
    <div>
      <div id="TopCover" :class="{'down':!downcover, 'top':!topcover,'active':loading_active}" >
          <div class="container">
          <div :class="{'canvas animate__animated animate__fadeOutLeft animate__delay__decimals-01s':loading_active}"></div>
          <div :class="{'canvas animate__animated animate__fadeOutLeft animate__delay__decimals-02s':loading_active}"></div>
          <div :class="{'canvas animate__animated animate__fadeOutLeft animate__delay__decimals-03s':loading_active}"></div>
          <div :class="{'canvas animate__animated animate__fadeOutLeft animate__delay__decimals-04s':loading_active}"></div>
          <div :class="{'canvas animate__animated animate__fadeOutLeft animate__delay__decimals-05s':loading_active}"></div>
          <div :class="{'canvas animate__animated animate__fadeOutLeft animate__delay__decimals-06s':loading_active}"></div>
          <div :class="{'canvas animate__animated animate__fadeOutLeft animate__delay__decimals-07s':loading_active}"></div>
          <div :class="{'canvas animate__animated animate__fadeOutLeft animate__delay__decimals-08s':loading_active}"></div>
          <div :class="{'canvas animate__animated animate__fadeOutLeft animate__delay__decimals-09s':loading_active}"></div>  

          <div :class="{'canvas animate__animated animate__fadeOutLeft animate__delay__decimals-1s':loading_active}"></div> 
          <div :class="{'canvas animate__animated animate__fadeOutRight animate__delay__decimals-1s':loading_active}"></div>

          <div :class="{'canvas animate__animated animate__fadeOutRight animate__delay__decimals-09s':loading_active}"></div>
          <div :class="{'canvas animate__animated animate__fadeOutRight animate__delay__decimals-08s':loading_active}"></div>
          <div :class="{'canvas animate__animated animate__fadeOutRight animate__delay__decimals-07s':loading_active}"></div>
          <div :class="{'canvas animate__animated animate__fadeOutRight animate__delay__decimals-06s':loading_active}"></div>
          <div :class="{'canvas animate__animated animate__fadeOutRight animate__delay__decimals-05s':loading_active}"></div>
          <div :class="{'canvas animate__animated animate__fadeOutRight animate__delay__decimals-04s':loading_active}"></div>
          <div :class="{'canvas animate__animated animate__fadeOutRight animate__delay__decimals-03s':loading_active}"></div>
          <div :class="{'canvas animate__animated animate__fadeOutRight animate__delay__decimals-02s':loading_active}"></div>
          <div :class="{'canvas animate__animated animate__fadeOutRight animate__delay__decimals-01s':loading_active}"></div>  
          </div>
      </div>
      <!-- <div id="DownCover" :class="{'down':!downcover, 'top':!topcover}" >
          <div class="canvas animate__animated animate__fadeOutLeft animate__delay__decimals-14s"></div>
          <div class="canvas animate__animated animate__fadeOutLeft animate__delay__decimals-13s"></div>
          <div class="canvas animate__animated animate__fadeOutLeft animate__delay__decimals-11s"></div>
          <div class="canvas animate__animated animate__fadeOutLeft animate__delay__decimals-11s "></div>
          <div class="canvas animate__animated animate__fadeOutLeft animate__delay__decimals-1s"></div>
          <div class="canvas animate__animated animate__fadeOutLeft animate__delay__decimals-09s"></div>
          <div class="canvas animate__animated animate__fadeOutLeft animate__delay__decimals-08s"></div>
          <div class="canvas animate__animated animate__fadeOutLeft animate__delay__decimals-07s"></div>
          <div class="canvas animate__animated animate__fadeOutLeft animate__delay__decimals-06s"></div>
          <div class="canvas animate__animated animate__fadeOutLeft animate__delay__decimals-05s"></div>   
          <div class="canvas animate__animated animate__fadeOutRight animate__delay__decimals-05s"></div>
          <div class="canvas animate__animated animate__fadeOutRight animate__delay__decimals-06s"></div>
          <div class="canvas animate__animated animate__fadeOutRight animate__delay__decimals-07s"></div>
          <div class="canvas animate__animated animate__fadeOutRight animate__delay__decimals-08s"></div>
          <div class="canvas animate__animated animate__fadeOutRight animate__delay__decimals-09s"></div>
          <div class="canvas animate__animated animate__fadeOutRight animate__delay__decimals-1s"></div>
          <div class="canvas animate__animated animate__fadeOutRight animate__delay__decimals-11s"></div>
          <div class="canvas animate__animated animate__fadeOutRight animate__delay__decimals-11s"></div>
          <div class="canvas animate__animated animate__fadeOutRight animate__delay__decimals-13s"></div>
          <div class="canvas animate__animated animate__fadeOutRight animate__delay__decimals-14s"></div>        
      </div> -->
      <full-page :options="options" ref="fullpage" :class="{'opactiy':!active}">
        <div class="section" >
          <mainpage :active='active'  />
        </div>
        <div class="section" >
          <twopage :active='active'/>
        </div>
        <div class="section" >
          <threepage :active='active'/>
        </div>
        <div class="section" >
          <fourpage :active='active'/>
        </div>
        <div class="section">
          <fivepage :active='active'/>
        </div>
        <div class="section">
          <sixpage :active='active'/>
        </div>
        <div class="section">
          <sevenpage :active='active'/>
        </div>
        <div class="section">
          <eightpage :active='active'/>
        </div>
        <div class="section">
          <ninepage :active='active'/>
        </div>
        <div class="section">
          <tenpage :active='active'/>
        </div>
        <div class="section">
          <elevenpage :active='active'/>
        </div>
        <div class="section">
          <twelvepage :active='active'/>
        </div>
      </full-page>
    </div>
  </div>
</template>

<script>
import "./assets/css/app.scss";
import mainpage from "./components/Mainpage";
import twopage from "./components/Twopage";
import threepage from "./components/Threepage";
import fourpage from "./components/fourpage";
import fivepage from "./components/fivepage";
import sixpage from "./components/sixpage";
import sevenpage from "./components/sevenpage";
import eightpage from "./components/eightpage";
import ninepage from "./components/ninepage";
import tenpage from "./components/tenpage";
import elevenpage from "./components/elevenpage";
import twelvepage from "./components/twelvepage";

export default {
  name: "App",
  data() {
    return {
      move:0,
      options: {
        licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
        //是否顯示導航，預設為false
        navigation: true,
        //頁面滾動速度
        scrollingSpeed: 1600,
        //動畫
        controlArrows: true,
        loopBottom:true,
        loopTop:true ,
        onLeave: this.move_up_down,
        afterLoad: this.move_up_down_after,
        css3:false,
        scrollBar:true
      },
      active:true,
      loading_active:true,
      lodaing_timeout:null,
      loading_way_timeout:null,
      topcover: true,
      downcover: true,
    };
  },
  components: {
    mainpage,
    twopage,
    threepage,
    fourpage,
    fivepage,
    sixpage,
    sevenpage,
    eightpage,
    ninepage,
    tenpage,
    elevenpage,
    twelvepage,
  },
  watch:{
      move: function() {
        this.$refs.fullpage.api.moveTo(this.move+1)
      }  
  },
  methods: {
    down(){
      this.$refs.fullpage.api.moveSectionDown();
    },
    move_up_down (origin, destination,direction){

      this.loading_active = true
      if(this.lodaing_timeout!=null){
        clearTimeout(this.lodaing_timeout)
        this.lodaing_timeout = setTimeout(()=>{this.loading_active = false},1500)
      }
      else{
        this.lodaing_timeout = setTimeout(()=>{this.loading_active = false},1500)
      }

      if (direction === 'down'){
        this.downcover = false
      }
      else {
        this.topcover = false
      }

      if(this.loading_way_timeout!= null){
        clearTimeout(this.loading_way_timeout)
        this.loading_way_timeout = setTimeout(()=>{
           this.downcover =true
           this.topcover = true
          },1500)
      }
      else{
         this.loading_way_timeout = setTimeout(()=>{
           this.downcover =true
           this.topcover = true
          },1500)
      }

      this.active = false
    },
    move_up_down_after(){
      // this.downcover =true
      // this.topcover = true
      this.active = true
    },
  },
  mounted(){
      setTimeout(()=>{this.loading_active = false},1500)
  }
};
</script>

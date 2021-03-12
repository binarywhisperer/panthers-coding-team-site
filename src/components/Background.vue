<template>
  <svg class="background" xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" viewBox="0 0 720 360"> 
    <defs>
        <radialGradient id="hssover-gradient" :cx="cx" :cy="cy" r="60%" :fx="cx" :fy="cy">
            <stop offset="0%" style="stop-color:rgb(96, 71, 255);stop-opacity:.3" />
            <stop offset="100%" style="stop-color:rgb(96, 71, 255);stop-opacity:.1" />
        </radialGradient>
        
        <linearGradient id="hover-gradient"  gradientTransform="rotate(90)">
            <stop offset="0%" style="stop-color:rgb(96, 71, 255);stop-opacity:.05" />
            <stop :offset="gradientOne" style="stop-color:rgb(96, 71, 255);stop-opacity:.1" />
            <stop :offset="gradientTwo" style="stop-color:rgb(96, 71, 255);stop-opacity:.3" />
            <stop :offset="gradientThree" style="stop-color:rgb(96, 71, 255);stop-opacity:.3" />
            <stop :offset="gradientFour" style="stop-color:rgb(96, 71, 255);stop-opacity:.1" />
            <stop offset="100%" style="stop-color:rgb(96, 71, 255);stop-opacity:.05" />
        </linearGradient>
        
  </defs>
        <g fill="url(#hover-gradient)" transform="translate(0,180)">
          <path d="m0-360 360 360-345-360h-15z"/>
          <path d="m30-360 330 360-315-360h-15z"/>
          <path d="m60-360 300 360-285-360h-15z"/>
          <path d="m90-360 270 360-255-360h-15z"/>
          <path d="m120-360 240 360-225-360h-15z"/>
          <path d="m150-360 210 360-195-360h-15z"/>
          <path d="m180-360 180 360-165-360h-15z"/>
          <path d="m210-360 150 360-135-360h-15z"/>
          <path d="m240-360 120 360-105-360h-15z"/>
          <path d="m270-360 90 360-75-360h-15z"/>
          <path d="m300-360 60 360-45-360h-15z"/>
          <path d="m330-360 30 360-15-360h-15z"/>
          <path d="m360-360v360l15-360h-15z"/>
          <path d="m390-360-30 360 45-360h-15z"/>
          <path d="m420-360-60 360 75-360h-15z"/>
          <path d="m450-360-90 360 105-360h-15z"/>
          <path d="m480-360-120 360 135-360h-15z"/>
          <path d="m510-360-150 360 165-360h-15z"/>
          <path d="m540-360-180 360 195-360h-15z"/>
          <path d="m570-360-210 360 225-360h-15z"/>
          <path d="m600-360-240 360 255-360h-15z"/>
          <path d="m630-360-270 360 285-360h-15z"/>
          <path d="m660-360-300 360 315-360h-15z"/>
          <path d="m690-360-330 360 345-360h-15z"/>
          <path d="m720 360-360-360 345 360h15z"/>
          <path d="m690 360-330-360 315 360h15z"/>
          <path d="m660 360-300-360 285 360h15z"/>
          <path d="m630 360-270-360 255 360h15z"/>
          <path d="m600 360-240-360 225 360h15z"/>
          <path d="m570 360-210-360 195 360h15z"/>
          <path d="m540 360-180-360 165 360h15z"/>
          <path d="m510 360-150-360 135 360h15z"/>
          <path d="m480 360-120-360 105 360h15z"/>
          <path d="m450 360-90-360 75 360h15z"/>
          <path d="m420 360-60-360 45 360h15z"/>
          <path d="m390 360-30-360 15 360h15z"/>
          <path d="m360 360v-360l-15 360h15z"/>
          <path d="m330 360 30-360-45 360h15z"/>
          <path d="m300 360 60-360-75 360h15z"/>
          <path d="m270 360 90-360-105 360h15z"/>
          <path d="m240 360 120-360-135 360h15z"/>
          <path d="m210 360 150-360-165 360h15z"/>
          <path d="m180 360 180-360-195 360h15z"/>
          <path d="m150 360 210-360-225 360h15z"/>
          <path d="m120 360 240-360-255 360h15z"/>
          <path d="m90 360 270-360-285 360h15z"/>
          <path d="m60 360 300-360-315 360h15z"/>
          <path d="m30 360 330-360-345 360h15z"/>
          <path d="m0 360 360-360-360 345v15z"/>
          <path d="m0 330 360-330-360 315v15z"/>
          <path d="m0 300 360-300-360 285v15z"/>
          <path d="m0 270 360-270-360 255v15z"/>
          <path d="m0 240 360-240-360 225v15z"/>
          <path d="m0 210 360-210-360 195v15z"/>
          <path d="m0 180 360-180-360 165v15z"/>
          <path d="m0 150 360-150-360 135v15z"/>
          <path d="m0 120 360-120-360 105v15z"/>
          <path d="m0 90 360-90-360 75v15z"/>
          <path d="m0 60 360-60-360 45v15z"/>
          <path d="m0 30 360-30-360 15v15z"/>
          <path d="m0 0h360l-360-15v15z"/>
          <path d="m0-30 360 30-360-45v15z"/>
          <path d="m0-60 360 60-360-75v15z"/>
          <path d="m0-90 360 90-360-105v15z"/>
          <path d="m0-120 360 120-360-135v15z"/>
          <path d="m0-150 360 150-360-165v15z"/>
          <path d="m0-180 360 180-360-195v15z"/>
          <path d="m0-210 360 210-360-225v15z"/>
          <path d="m0-240 360 240-360-255v15z"/>
          <path d="m0-270 360 270-360-285v15z"/>
          <path d="m0-300 360 300-360-315v15z"/>
          <path d="m0-330 360 330-360-345v15z"/>
          <path d="m720-360-360 360 360-345v-15z"/>
          <path d="m720-330-360 330 360-315v-15z"/>
          <path d="m720-300-360 300 360-285v-15z"/>
          <path d="m720-270-360 270 360-255v-15z"/>
          <path d="m720-240-360 240 360-225v-15z"/>
          <path d="m720-210-360 210 360-195v-15z"/>
          <path d="m720-180-360 180 360-165v-15z"/>
          <path d="m720-150-360 150 360-135v-15z"/>
          <path d="m720-120-360 120 360-105v-15z"/>
          <path d="m720-90-360 90 360-75v-15z"/>
          <path d="m720-60-360 60 360-45v-15z"/>
          <path d="m720-30-360 30 360-15v-15z"/>
          <path d="m720 0h-360l360 15v-15z"/>
          <path d="m720 30-360-30 360 45v-15z"/>
          <path d="m720 60-360-60 360 75v-15z"/>
          <path d="m720 90-360-90 360 105v-15z"/>
          <path d="m720 120-360-120 360 135v-15z"/>
          <path d="m720 150-360-150 360 165v-15z"/>
          <path d="m720 180-360-180 360 195v-15z"/>
          <path d="m720 210-360-210 360 225v-15z"/>
          <path d="m720 240-360-240 360 255v-15z"/>
          <path d="m720 270-360-270 360 285v-15z"/>
          <path d="m720 300-360-300 360 315v-15z"/>
          <path d="m720 330-360-330 360 345v-15z"/>
        </g>
    </svg>
</template>

<script>
    export default {
        name: "CircuitBoard",
        data(){
            return {
                mouseX: 0,
                mouseY: 0,
                bodyHeight: 1,
                bodyWidth: 1
            }
        },
        methods:{
            mouseMotion(event){
                this.mouseX = event.clientX;
                this.mouseY = event.clientY;
            },
            touched(event){
                this.mouseX = event.clientX;
                this.mouseY = event.clientY;
            },
            setSize(){
                if(screen.height < document.querySelector('body').offsetWidth){
                    document.querySelector('.background').style.width = "100vw";
                }else{
                    document.querySelector('.background').style.height = "100vh";
                }
                this.bodyHeight = screen.height;
                this.bodyWidth = document.querySelector('body').offsetWidth;
                this.mouseX = this.bodyWidth / 2;
            }
        },
        computed:{
          gradientOne(){
            return `${(this.mouseY / this.bodyHeight) * 100 - 10}%`;
          },
          gradientTwo(){
            return `${(this.mouseY / this.bodyHeight) * 100}%`;
          },
          gradientThree(){
            return `${(this.mouseY / this.bodyHeight) * 100 + 20}%`;
          },
          gradientFour(){
            return `${(this.mouseY / this.bodyHeight) * 100 + 30}%`;
          },
            cx(){
                return `${(this.mouseX / this.bodyWidth) * 100}%`;
            },
            cy(){
                return `${(this.mouseY / this.bodyHeight) * 100}%`;
            }
        },
        mounted(){
            this.setSize();

            window.addEventListener('mousemove',this.mouseMotion);
            window.addEventListener('resize', this.setSize);
            window.addEventListener('touched', this.touched);
        }
    }
</script>


<style lang="scss">
  #hover-gradient{
        transition: all 700ms ease-in-out;
  }
  .background{
    min-height:100vh;
    min-width:100vw;
    position: fixed;
    top:0;
    left:0;
    z-index:1;
  }
</style>

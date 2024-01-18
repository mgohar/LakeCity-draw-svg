
import gsap from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(DrawSVGPlugin) 
gsap.registerPlugin(ScrollTrigger) 


let mypath = document.querySelector("#myPath");
let drawAnim = document.querySelector(".drawAnim");
let animstatus =false;
// gsap.to(mypath, {duration:0,drawSVG: 0});
  gsap.to(drawAnim, {
    scrollTrigger: {
      trigger: ".drawAnim",
      start: "top center",
      end: "center center",
      markers:false,
      onEnter: function() {
        if(animstatus===false){
            gsap.from(mypath, {duration:3,drawSVG: 100});
            animstatus=true;
        }
      }
    },
  });
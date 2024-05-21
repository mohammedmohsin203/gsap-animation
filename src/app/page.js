'use client';
import gsap  from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const boxref = useRef();
  useGSAP(()=>{
    gsap
    .timeline({
      scrollTrigger: {
        trigger: "#box",
        scrub: 1,
        start: "200% 50%",
        end: "240% 60%",
        markers: true
      },
    })
    
    .to("#box", {
      ease: "none",
      scale:0.5
    });

    
  })
  return (
    <main className="flex h-[200vh] flex-col items-center justify-start pt-8 ">
     <div className=" h-32 w-32 bg-white flex justify-center items-center rounded-md scale-100 fixed" id="box">Box</div> 
    </main>
  );
}

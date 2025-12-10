// PUT YOUR CODE HERE
const tl = gsap.timeline();


tl.from(".red", { scale: 0, duration: 0.5, ease: "back.out(1.7)" })
  .from(".green", { scale: 0, duration: 0.5, ease: "back.out(1.7)" })
  .from(".blue", { scale: 0, duration: 0.5, ease: "back.out(1.7)" })
  .from(".yellow", { scale: 0, duration: 0.5, ease: "back.out(1.7)" });


tl.to(".red", { 
    left: "auto", right: 0, borderRadius: "50%", backgroundColor: "green", duration: 0.5, ease: "power1.inOut" 
})
.to(".green", { 
    top: "auto", bottom: 0, borderRadius: "50%", backgroundColor: "blue", duration: 0.5, ease: "power1.inOut" 
}, "<")
.to(".blue", { 
    right: "auto", left: 0, borderRadius: "50%", backgroundColor: "yellow", duration: 0.5, ease: "power1.inOut" 
}, "<")
.to(".yellow", { 
    bottom: "auto", top: 0, borderRadius: "50%", backgroundColor: "red", duration: 0.5, ease: "power1.inOut" 
}, "<");

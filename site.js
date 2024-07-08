var tl=gsap.timeline();
gsap.from(".nav h1 i",{
    y:20,
    rotate:720,
    opacity:0,
    delay:1,
    duration:1, 
})
tl.from(".nav h4,.nav h1,.nav button",{
    y:-10,
    opacity:0,
    delay:0.5,
    duration:0.8, 
    stagger:0.2
})
tl.from(".center-1 h1",{
    x:-300,
    opacity:0,
    duration:0.5,
    
})
tl.from(".center-1 p",{
    x:-300,
    opacity:0,
    duration:0.4, 
})
tl.from(".center-1 button",{
    x:-300,
    opacity:0,
    duration:0.3, 
})
tl.from(".center-2 img",{
    opacity:0,
},"-=0.3")
gsap.from(".services h1 , .services p",{
    x:-20,
    opacity:0,
    scrollTrigger:{
        trigger:".services h1",
        scroller:"body",
        start:"top 80%",
        scrub:2,
        end:"top 0%"
    }
})
tl.from("#box1",{
    opacity:0,
    x:-50,
    scrollTrigger:{
        trigger:"#box1",
        scroller:"body",
        start:"top 80%",
        scrub:0.5,
        end:"top 0%"
    }
},"anim1")
tl.from("#box2",{
    opacity:0,
    x:50,
    scrollTrigger:{
        trigger:"#box2",
        scroller:"body",
        start:"top 80%",
        scrub:0.5,
        end:"top 0%"
    }
},"anim1")
tl.from("#box3",{
    opacity:0,
    x:-50,
    scrollTrigger:{
        trigger:"#box3",
        scroller:"body",
        start:"top 80%",
        scrub:0.5,
        end:"top 0%"
    }
},"anim2")
tl.from("#box4",{
    opacity:0,
    x:50,
    scrollTrigger:{
        trigger:"#box4",
        scroller:"body",
        start:"top 80%",
        scrub:0.5,
        end:"top 0%"
    }
},"anim2")



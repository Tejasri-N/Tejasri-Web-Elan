var tl = gsap.timeline()
tl.from("#Logo",{
    y:-30,
    opacity:0
})
tl.from("nav a",{
    y:-30,
    opacity:0,
    stagger:0.2
})
tl.from("button",{
    y:-30,
    opacity:0
})
gsap.from("h1",{
    x:100,
    opacity:0,
    duration:1
})
gsap.from(".content",{
    scale:0,
    delay:0,
    duration:2,
    stagger:0.3,
    scrollTrigger:{
        trigger:".content",
        scroller:"body",
        markers:false,
        start:"top 60%"
    }
})
gsap.to(".all_sponsors",{
    scrollTrigger:".all_sponsors"
})
/* gsap.to(".all_sponsors", {
    x:1000,
    duration:6,
    delay:1,
    ease:"none",
    repeat:-1,
    scrollTrigger:".all_sponsors",
    autoScrollDirection:"endlessloopright"
}) */
// tl.to(".sponsor-card-2", {
//     x:1200,
//     duration:2,
//     delay:1,
//     repeat:2
// })
// tl.to(".sponsor-card-3", {
//     x:1200,
//     duration:2,
//     delay:1,
//     repeat:2
// })
/* const sponsorCards = document.querySelector('.all_sponsors');
const sponsorCardWidth = sponsorCards.querySelector('.all_sponsors').offsetWidth;

const scrollTimeline = gsap.timeline({
  repeat: -1,
  ease: "none"
});
scrollTimeline.to(sponsorCards, {
  x: -sponsorCards.scrollWidth,
  duration: (sponsorCards.scrollWidth / sponsorCardWidth)
}); */
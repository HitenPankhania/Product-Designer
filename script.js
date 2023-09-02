// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

function firstPageAnim(){
    var tl=gsap.timeline();


    tl.from("#nav" ,{
        y: '-10',
        opacity:0,
        duration:2,
        ease:Expo.easeInOut
    })
    .to(".boundingelem",{
        y: '0',        
        duration:2,
        ease:Expo.easeInOut,
        stagger:  1
        
    })
    .to(".homefooter",{
      y: '-10',
      opacity: 0,
      duration: 2,
      ease:Expo.easeInOut,
        
    })

    
}

// function circleChaptaKaro() {
//     //define default scale value
//     var xscale = 1;
//     var yscale = 1;

//     var xprev = 0;
//     var xprev = 0;

//     window.addEventListener("mousemove", function(dets){
//         xscale = gsap.utils.clamp(.8, 1.2, dets.clientx -xprrev);
//         xscale = gsap.utils.clamp(.8,1.2, dets.clientY - yprev);

//         xprev = dets.clientx;
//         yprev = dets.clientY;

//         circleMouseFollower(xscale,yscale);
//     } )
// }






function circleMouseFollower(xscale,yscale){
    window.addEventListener("mousemove", function(dets){
     document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;

    })
}
// circleChaptaKaro();
circleMouseFollower();
firstPageAnim();



document.querySelectorAll(".elem").forEach(function(elem){
    var rotate = 0;
    var diffrot = 0;

    

    elem.addEventListener("mousemove",function(details){
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;
        gsap.to(elem.querySelector("img"),{
            opacity:1,
            ease:Power3,
           top: diff,
           left:dets.clientX,
           rotate: gsap.utils.clamp(-20,20, diffrot *0.2)
        })
    })
})
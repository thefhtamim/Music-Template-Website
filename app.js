var tlHomeSection = new TimelineMax();
var tlMiddleSection = new TimelineMax();
var tlSecondMiddleSection = new TimelineMax();

tlHomeSection
    .from(".textChild", 1, {
        ease: Bounce.easeOut,
        opacity: 0,
        y: 100,
        stagger: 0.3,
    })
    .from(
        ".card",
        1,
        {
            ease: Expo.easeIn,
            opacity: 0,
            x: 100,
        },
        "-= 0.2"
    )
    .from(
        ".footer h1",
        1,
        { ease: Elastic.easeOut, x: 10, opacity: 0, stagger: 0.1 },
        "-=0.3"
    );

//middle section sliders
tlMiddleSection
    .from(".sliders", {
        ease: Power3.ease,
        duration: 0.7,
        xPercent: 100,
        stagger: 0.2,
    })
    .from(".middleBoxes", {
        ease: Circ.easeOut,
        stagger: 0.2,
        y: 150,
        duration: 3,
        opacity: 0,
    });

// scroll magic middleSection
var controller = new ScrollMagic.Controller();

const sceneMiddleSection = new ScrollMagic.Scene({
    triggerElement: ".middleSection",
    duration: "65%",
    triggerHook: 0.25,
})
    .setTween(tlMiddleSection)
    .addIndicators({
        name: "Box Timeline",
        colorTrigger: "white",
        colorStart: "white",
        colorEnd: "white",
    })
    .addTo(controller);

//scroll magic second middle section
tlSecondMiddleSection
    .from(".secondMiddleSection", {
        xPercent: -100,
        duration: 0.7,
    })
    .from(".fadeup", {
        ease: Expo.easeOut,
        stagger: 0.25,
        duration: 3,
        yPercent: 100,
    });

const sceneSecondMiddleSection = new ScrollMagic.Scene({
    triggerElement: ".secondMiddleSection",
    duration: "50%",
    triggerHook: 0.25,
})
    .setTween(tlSecondMiddleSection)
    .addIndicators({
        name: "Box Timeline",
        colorTrigger: "white",
        colorStart: "white",
        colorEnd: "white",
    })
    .addTo(controller);

//rellax
var rellax = new Rellax(".rellax");

//3d perspective
VanillaTilt.init(document.querySelector(".card"), {
    max: 15,
    speed: 200,
});

//It also supports NodeList
VanillaTilt.init(document.querySelectorAll(".card"));
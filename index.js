gsap.from(".navbar-item", {
    opacity: 0,
    duration: 1,
    delay: 1,
    y: -30,
    stagger: 0.5,
    scrollTrigger: ".navbar-item"
})
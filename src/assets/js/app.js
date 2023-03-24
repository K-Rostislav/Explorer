import "./scripts/adaptive.js"
import "./vendor/webp.js"
import "./vendor/scroll.js"
import Lenis from "@studio-freight/lenis"
import Ukiyo from "ukiyojs"
import {gsap, ScrollTrigger} from "gsap/all.js"

new Ukiyo('#bg', {
    speed: 1.9,
    willChange: true,
})
new Ukiyo('#img', {
    speed: 1.65,
    willChange: true,
})

gsap.registerPlugin(ScrollTrigger)

const articlesImg = gsap.utils.toArray('.article__title, .article__user')

for (let item of articlesImg) {
    gsap.fromTo(item, {y: 100, opacity: 0}, {
        y: 0,
        opacity: 1,
        scrollTrigger: {
            start: '-1000',
            end: '-500',
            trigger: item,
            scrub: true,
        }
    })
}

const lenis = new Lenis({
    lerp: 0.09,
})
function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
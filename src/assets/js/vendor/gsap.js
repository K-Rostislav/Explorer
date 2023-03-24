import {gsap, ScrollTrigger} from "gsap/all.js"

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

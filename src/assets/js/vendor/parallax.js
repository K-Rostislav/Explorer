import Ukiyo from "ukiyojs"

window.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth > 1024) {
        new Ukiyo('#img', {
            speed: 1.65,
            willChange: true,
        })
        new Ukiyo('#bg', {
            speed: 1.9,
            willChange: true,
        })
    }
})

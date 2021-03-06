import Swiper, {Navigation, EffectFade} from 'swiper';


export const heroSlider = () => {
    const el = document.querySelector('.hero__slider');

    if(el) {
        const slider = new Swiper(el, {
            modules: [Navigation, EffectFade],
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            navigation: {
                prevEl: '.hero__slider_sl_content_action_nav_item-prev',
                nextEl: '.hero__slider_sl_content_action_nav_item-next'
            }

        })
    }
}
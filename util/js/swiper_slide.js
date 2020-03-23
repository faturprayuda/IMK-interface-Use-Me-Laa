let config_img_banner = {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // autoplay
    autoplay: {
        delay: 3000,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
}

let config_txt_banner = {
    // Optional parameters
    direction: 'vertical',
    loop: true,

    // autoplay
    autoplay: {
        delay: 3000,
    },


    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }

}

var mySwiper = new Swiper('.swiper-container', config_img_banner)

var mySwiperText = new Swiper('.swiper-container-text-banner', config_txt_banner)
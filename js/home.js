var vm = new Vue({
    el: '#main',
    data: function() {
        return {
            cities: ['Jakarta Barat', 'Jakarta Pusat', 'Jakarat Selatan', 'Jakarta Timur', 'Jakarta Utara']
        }
    }
});

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 0,
    freeMode: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
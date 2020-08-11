Vue.component('blog-post', {
    template: '<h3>Sudin</h3>'
});

var header = new Vue({
    el: '#header',
});



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
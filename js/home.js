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
    slidesPerView: 'auto',
    spaceBetween: 0,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
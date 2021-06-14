$(function(){
    $('.info-tabs__item').on('click', function (e) {
        e.preventDefault();

        $('.info-tabs__item').removeClass('info-tabs__item--active');
        //при клике на любую из кнопок info-tabs__item, будет убираться active
        $(this).addClass('info-tabs__item--active');
        //но на ту, на кот. кликнули, класс доджен добавиться
        $('.info-tabs__content').removeClass('info-tabs__content--active');
        $($(this).attr('href')).addClass('info-tabs__content--active');
    });

});
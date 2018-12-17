$('.head li').on('click', function() {
    $(this).addClass('active').siblings().removeClass('active');
})

$('.changeBtn').on('click', function() {
    var leftValue = $('.go').html();
    var rightValue = $('.back').html();
    $('.go').html(rightValue);
    $('.back').html(leftValue);
})

$('.btn').on('click', 'p', function() {
    var dateValue = $('.dateday').html();
    var arr = dateValue.split('月');
    var str = arr[0] + '-' + arr[1].split('日')[0];
    location.href = './page/detail.html?date=' + str;
})
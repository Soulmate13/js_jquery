$(document).ready(function () {
    $('#circle').circleProgress({
        value: 0.63,
        size: 74,
        fill: {
            gradient: ["#0DDD9F", "#01D5BB"]
        },
        emptyFill: "#787c9b",
        startAngle: 29.8,
        thickness: 4
    });
});

$(document).ready(function () {

    $('.panel__nav-item').on('click', function (e) {
        let currentlink = $(this).find("a").attr("href");
        $(currentlink).show().siblings().hide();
        $(this).addClass('active-link').siblings().removeClass("active-link");


        e.preventDefault();
    })

});
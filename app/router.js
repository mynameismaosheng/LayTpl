$(function () {
    $('#app').load('app/container.html', function () {
        $(document).find('.router-nav:first').click();
    });
    $(document).on('click', '.router-nav', function () {
        var routerName = $(this).data('router');
        $('#content').load(routerName, function () {
            $(document).find('.router-subnav:first').click();
        });
    }).on('click', '.router-subnav', function () {
        var routerName = $(this).data('router');
        $('#right_container').load(routerName);
    })
})
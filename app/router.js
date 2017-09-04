$('#app').load('app/container.html');
$(function(){
    $(document).on('click','.router-nav',function(){
        var routerName = $(this).data('router');
        $('.right_container').load(routerName);
    })
})
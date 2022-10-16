function adjustHeightOfPage(pageNo) {

    var offset = 80;
    var pageContentHeight = 0;

    pageContentHeight = $(".cd-hero-slider li:nth-of-type(" + pageNo + ") .js-tm-page-content").height();

    if($(window).width() >= 992) { offset = 120; }
    else if($(window).width() < 480) { offset = 40; }

    var totalPageHeight = 20 + $('.cd-slider-nav').height() + pageContentHeight + offset + $('.tm-footer').height();

    if(totalPageHeight > $(window).height()) 
    {
        $('.cd-hero-slider').addClass('small-screen');
        $('.cd-hero-slider li:nth-of-type(' + pageNo + ')').css("min-height", totalPageHeight + "px");
    }
    else 
    {
        $('.cd-hero-slider').removeClass('small-screen');
        $('.cd-hero-slider li:nth-of-type(' + pageNo + ')').css("min-height", "100%");
    }
}

$( window ).resize(function() {
    var currentPageNo = $(".cd-hero-slider li.selected .js-tm-page-content").data("page-no");
    setTimeout(function() {
        adjustHeightOfPage( currentPageNo );
    }, 1000); 
})

$(window).load(function(){

    adjustHeightOfPage(1);

    $('#tmNavbar a').click(function(){
        $('#tmNavbar').collapse('hide');

        adjustHeightOfPage($(this).data("no"));   
    });

    $( window ).resize(function() {
        var currentPageNo = $(".cd-hero-slider li.selected .js-tm-page-content").data("page-no");
        
        // wait 3 seconds
        setTimeout(function() {
            adjustHeightOfPage( currentPageNo );
        }, 1000);
        
    });

    $('body').addClass('loaded');
               
});
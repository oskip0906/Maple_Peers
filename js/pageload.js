function adjustHeightOfPage(pageNo) {

    var offset = 80;
    var pageContentHeight = 0;

    var pageType = $('div[data-page-no="' + pageNo + '"]').data("page-type");

    if( pageType != undefined && pageType == "gallery") {
        pageContentHeight = $(".cd-hero-slider li:nth-of-type(" + pageNo + ") .tm-img-gallery-container").height();
    }
    else {
        pageContentHeight = $(".cd-hero-slider li:nth-of-type(" + pageNo + ") .js-tm-page-content").height();
    }

    var totalPageHeight = 15 + $('.cd-slider-nav').height() + pageContentHeight + offset;

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
    }, 100); 
})

$(window).load(function(){

    adjustHeightOfPage(1);
    
    $('#tmNavbar a').click(function(){
        $('#tmNavbar').collapse('hide');

        adjustHeightOfPage($(this).data("no"));     
    });
               
});
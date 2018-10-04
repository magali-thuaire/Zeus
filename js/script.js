$(function () {
    
    function headerHeight() {
        
        var $header = $("#header"),
            $headerBackground = $("#header_background"),
            $headerBackgroundHeight = $headerBackground.css("height"),
            $headerHeight = parseInt($headerBackgroundHeight) * 0.87;
        
        $header.css("height", $headerHeight);
    }

    
    headerHeight();
    
    $(window).resize(function () {

        headerHeight();
        
        return false;
    });
    
    //Défilement de la page
    $("#header a").on("click", function (event) {
        event.preventDefault();
        var hash = this.hash;

        $("html").animate(
            {scrollTop: $(hash).offset().top},
            900,
            function () {
                window.location.hash = hash;
            }
        );
    });
        
});
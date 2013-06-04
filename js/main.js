(function($){

    $(function(){
        // Header menu collapse (responsive layout)
        $('#menu-collapse').click(function(){
            var $this = $(this);
            $($this).toggleClass('active');
            $('#main-menu').toggle();
        });

        // Show menu if we don't use mobile layout
        $(window).resize(function () {
            var width = $(window).width();
            // More than mobile layout.
            if ( width > 520) {
                $('#main-menu').show();
            }
            else {
                $('#main-menu').hide();
                $('#menu-collapse').removeClass('active');
            }
        }).resize();
    });

})(jQuery);
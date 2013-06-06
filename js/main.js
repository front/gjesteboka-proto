(function($){

    // Function for collapsing main NAV MENU
    $(function(){
        // On click we show dropdown menu and add class for button
        $('#menu-collapse').click(function(){
            var $this = $(this);
            $($this).toggleClass('active');
            $('#main-menu').toggle();
        });
        // Show menu if we don't use mobile layout
        $(window).resize(function () {
            var width = $(window).width();
            // 520 - mobile layout media query
            if ( width > 520) {
                $('#main-menu').show();
            }
            else {
                $('#main-menu').hide();
                $('#menu-collapse').removeClass('active');
            }
        }).resize();
    });

    // Function for MAGIC SEARCH
    $(function(){
        var $magic_search = $('#magic-search');
        // On click we show dropdown menu and add class for button
        $('#search-clicker').click(function(e){
            $magic_search.toggleClass('open');
            e.stopPropagation();
        });
        $(document).on('click', function(e){
            if($(e.target).attr('id') != '#magic-search' && !$(e.target).closest('#magic-search').size())
                $magic_search.removeClass('open');
        });

    });

    // Init custom selects
    $(document).ready(function() {
        $("select[name='flat-select']").selectpicker({style: 'btn-primary', menuStyle: 'dropdown-inverse'});
    });

    // Function for scrolling through timeline dates
    $(function(){
        $('.timeline-up').click(function(){
            var prevElement = $(this).parent().prevAll('.timeline-date-wrapper:first');
            if(prevElement.length) {
                $.scrollTo(prevElement, 800, {over:-1.2});
            }
        });
        $('.timeline-down').click(function(){
            var nextElement = $(this).parent().nextAll('.timeline-date-wrapper:first');
            if(nextElement.length) {
                $.scrollTo(nextElement, 800, {over:-1.2});
            }
        });
    });

    // On window ready we change positions for blocks
    // NOTE: if we use document-ready - there is many bugs with height() method...
    $(window).load(function() {
      var offset = 75;
      $('#timeline .timeline-content-wrapper').each(function(){

          console.log( 'new line' );

          $(this).children().each(function(){
//              var currentItem = $(this).height();
//              var prevItem = $(this).prev().height();
              var currentItem = $(this).height();
              var prevItem = $(this).prev().height();
              if(currentItem > prevItem) {
                  $(this).next().css('margin-top', -currentItem + offset );
//                  $(this).next().css('margin-top', -Math.max(currentItem-offset, 2*prevItem-offset));
//                  $(this).next().css('margin-top', Math.max(-currentItem+offset, -(currentItem-prevItem)) );
//                  $(this).next().css('margin-top', -(currentItem-prevItem) + offset );
              }

//              console.log(
//                  'current:',
//                  'C:' + $(this).height(),10,
//                  'C_o:' + $(this).outerHeight(),10,
//                  'N:' + $(this).next().height(),
//                  'P:' + $(this).prev().height(),
//                  'item:', $(this)
//              );
          });

      });
    });

    // On window resize we remake this horrible things :)
    $(window).resize(function () {

    });

})(jQuery);
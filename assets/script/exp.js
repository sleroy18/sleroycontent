var animation_elements;
var web_window;
$(document).ready(function () {

    //window and animation items
    animation_elements = $.find('.animation-element');
    web_window = $(window);

    //on or scroll, detect elements in view
    $(window).on('scroll resize', function () {
        check_if_in_view()
    });

    //trigger our scroll event on initial load
    $(window).trigger('scroll');
});

function exp(lang, years) {
    this.lang = lang;
    this.years = years;
  }
  
  var expArr = [new exp('css', 4), new exp('html', 4), new exp('js', 2), new exp('java', 3), new exp("cSharp", 2),
  new exp("dotNet", 2), new exp('sql', 3), new exp('node', 1), new exp('jquery', 2), new exp('bootstrap', 2)];
  expArr.forEach(function (val) {
    var bar = new ProgressBar.SemiCircle('#' + val.lang + '-body', {
      strokeWidth: 6,
      easing: 'easeInOut',
      duration: 1400,
      color: '#CA0035',
      trailColor: '#eee',
      trailWidth: 1,
      svgStyle: null,
      text: {
        value: "<div class='inner-text'>" + val.years + " Years</div>",
        alignToBottom: true
      },
    });
  
    bar.animate((val.years + 1) / 6);  // Number from 0.0 to 1.0
  
  });

  //check to see if any animation containers are currently in view
function check_if_in_view() {
    //get current window information
    var window_height = web_window.height();
    var window_top_position = web_window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);
  
    //iterate through elements to see if its in view
    $.each(animation_elements, function () {
  
      //get the elements information
      var element = $(this);
      var element_height = $(element).outerHeight();
      var element_top_position = $(element).offset().top;
      var element_bottom_position = (element_top_position + element_height);
  
      //check to see if this current container is visible (its viewable if it exists between the viewable space of the viewport)
      if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
        element.addClass('in-view');
      } else {
        //element.removeClass('in-view');
      }
    });
  }
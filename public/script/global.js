var animation_elements;
var web_window;
$(document).ready(function () {
    //window and animation items
    animation_elements = $.find('.animation-element');
    web_window = $(window);

    //trigger our scroll event on initial load
    $(window).trigger('scroll');

    // Hide submenus
    $('#body-row .collapse').collapse('hide');

    // Collapse/Expand icon
    $('#collapse-icon').addClass('fa-angle-double-left');
    // $('#dropdown-icon1').addClass('fa-angle-right');
    // $('#dropdown-icon2').addClass('fa-angle-right');

    // Collapse click
    $('[data-toggle=sidebar-collapse]').click(function (event) {
        event.preventDefault();
        SidebarCollapse();
    });
    
    //FIX make this universal for all dropdowns
    $('#contentDropdown').click(function (event) {
        $('#dropdown-icon1')[0].classList.toggle('fa-angle-right');
        $('#dropdown-icon1')[0].classList.toggle('fa-angle-down');
    });
    $('#expDropdown').click(function (event) {
        $('#dropdown-icon2')[0].classList.toggle('fa-angle-right');
        $('#dropdown-icon2')[0].classList.toggle('fa-angle-down');
    });
    
});

function dropdownToggle(){
    $('#dropdown-icon').toggleClass('fa-angle-right fa-angle-down');
}

function SidebarCollapse() {
    $('.menu-collapsed').toggleClass('d-none');
    $('.sidebar-submenu').toggleClass('d-none');
    $('.submenu-icon').toggleClass('d-none');

    $('#sidebar-container').toggleClass('sidebar-expanded sidebar-collapsed');
    $('#main').toggleClass('main-collapsed main-expanded');

    // var main = $('#main');
    // if(main.hasClass('main-collapsed')){
    //     main.removeClass('main-collapsed');
    //     main.addClass('main-expanded');
    // }else{
    //     main.removeClass('main-expanded');
    //     main.addClass('main-collapsed');
    // }


    // Treating d-flex/d-none on separators with title
    var SeparatorTitle = $('.sidebar-separator-title');
    if (SeparatorTitle.hasClass('d-flex')) {
        SeparatorTitle.removeClass('d-flex');
    } else {
        SeparatorTitle.addClass('d-flex');
    }

    // Collapse/Expand icon
    $('#collapse-icon').toggleClass('fa-angle-double-left fa-angle-double-right');
}
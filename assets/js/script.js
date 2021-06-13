$(document).ready(function(){

    // document Class to close the opne Boxs  
    $(document).click(function() {
        $('.profile-box,.chiled_box').removeClass('opne-li-op-top1');
    });



    // user-box
    $('.user-box').click(function(e) {
        e.stopPropagation();
        $(this).children('.profile-box').toggleClass('opne-li-op-top1');
    });
    
    // chiled_box
    $('.nav-section .nav_box .header_ul li.hav-chiled').click(function(r) {
        $(this).children('.chiled_box').toggleClass('opne-li-op-top1').parent().siblings().children('.chiled_box').removeClass('opne-li-op-top1');
        r.stopPropagation();
    });

    // get the date
    var d = new Date(),
        day_number = d.getDay(),
        month_number = d.getMonth(),
        fullYear_number = d.getFullYear(),
        date_viwe = day_number + ' / ' + month_number + ' / ' + fullYear_number;
        $('.calendear_box .calendear_box_text .text_dynamic').text(date_viwe);


        // opne sub_menu

        $('.ul_aside_box .has_chiled a').click(function(){
            $(this).siblings('.sub_menu').slideToggle();
        });
        
        // opne side_bar_opne
        
        
        $('.open_menu_icon_nav').click(function(){
            $('.side-bar').toggleClass('side_bar_opne');
            $('.body_padding_class').toggleClass('side_bar_opne_body_padding_class');
            
        });
        
        
        $('.side-bar').hover(function(){
            $(this).addClass('side_bar_opne');
        },function() {
            if(!$('.body_padding_class').hasClass("side_bar_opne_body_padding_class")){
                $(this).removeClass('side_bar_opne');
                $('.sub_menu').slideUp();
            }
            
        });

});
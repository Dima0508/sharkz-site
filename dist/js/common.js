$(document).ready(function(){$(".last_work-carousel").owlCarousel({loop:!1,dots:!1,nav:!0,navText:[""],navContainer:".last_work-carousel",mouseDrag:!0,responsive:{0:{nav:!1,margin:15,stagePadding:40,items:1},550:{nav:!1,margin:15,stagePadding:0,items:1},880:{nav:!1,items:2},1300:{nav:!1,margin:25,items:3},1500:{nav:!0,margin:25,stagePadding:20,items:3}}}),$(".portfolio-carousel").owlCarousel({loop:!1,dots:!1,nav:!1,arrows:!1,margin:80,items:2,variableWidth:!0,navText:[""],mouseDrag:!0,responsive:{}}),$(".our_team-display").owlCarousel({loop:!1,dots:!1,nav:!1,navText:[""],responsive:{0:{nav:!1,mouseDrag:!0,stagePadding:50,margin:0,items:1},550:{nav:!1,mouseDrag:!0,stagePadding:40,margin:0,items:2},880:{nav:!1,mouseDrag:!0,stagePadding:40,items:3},1300:{nav:!1,mouseDrag:!1,stagePadding:0,items:4}}}),$(".our_clients-logo").owlCarousel({dots:!1,nav:!1,autoplay:!0,autoplayTimeout:5e3,autoplayHoverPause:!1,stagePadding:0,navText:[""],responsive:{0:{loop:!0,nav:!1,mouseDrag:!0,margin:0,items:1},700:{loop:!0,nav:!1,mouseDrag:!0,margin:0,items:2},880:{loop:!0,nav:!1,mouseDrag:!0,margin:0,items:3},1260:{loop:!0,nav:!1,mouseDrag:!0,margin:0,items:4},1340:{loop:!1,nav:!1,mouseDrag:!1,stagePadding:0,items:4}}}),$('select.language, input[type="file"]').styler(),$(".contacts-form_input-fields textarea").autoResize({extraSpace:5,limit:600}),$(window).scroll(function(){$(this).scrollTop()>100?$(".To-top").fadeIn():$(".To-top").fadeOut()}),$(".To-top").click(function(){$("body,html").animate({scrollTop:0},800)});var a=$(".header"),t=0;$(window).scroll(function(){var e=$(window).scrollTop(),i=!1,s=!1;if(e>0){if(e>t)if(i=!1,e<a.height()+a.offset().top){if(!1===s){var n=a.offset().top;a.css({top:n+"px"}),s=!0}a.css({position:"absolute"})}else a.css({position:"fixed",top:"-"+a.height()+"px"});else if(s=!1,e>a.offset().top){if(!1===i){n=a.offset().top;a.css({top:n+"px"}),i=!0}a.css({position:"absolute"})}else a.removeAttr("style");t=e}}),$.fn.commentCards=function(a){var t=this,e=(a=a-1||0,[]),i=[];$(this).find("> div").each(function(t){e.push($(this).html()),t==a?i.push("<div class='nav--"+t+" active ' data-nav='"+t+"'></div>"):i.push("<div class='nav--"+t+"' data-nav='"+t+"'></div>")}),this.addClass("cards cards--active").empty().html("<div class='card card--current'></div> \n<div class='card card--next'></div> \n<div class='card card--out'></div>").append("<div class='card--nav'>"+i.join("")+"</div>").find(".card--current").html(e[a]),this.find(".card--nav > div[class^='nav--']").on("click",function(){if(!$(this).hasClass("active")){t.find(".card--nav > div[class^='nav--']").removeClass("active"),$(this).addClass("active");var a=t.find("> div.card--current"),i=t.find("> div.card--next"),s=t.find("> div.card--out");t.find(".card--next").html(e[$(this).data("nav")]),t.find("> div").removeClass("card--current card--out card--next"),a.addClass("card--out"),i.addClass("card--current"),s.addClass("card--next")}return!1});var s=t.find(".card--nav > div").last().data("nav");return t.on("click",".card--current",function(){return t.find(".card--nav > div.active").data("nav")==s?t.find(".card--nav > div").first().trigger("click"):$(".card--nav .active").next().trigger("click"),this}),this},$(".reviews_carousel").commentCards(2),$(".h_mobile-menu").click(function(){$(".mobile_nav").slideToggle(300),$(this).toggleClass("active"),$(".menu-toggle").toggleClass("on")});var e=$(".checkbox").find("input");$(".checkbox").find("input:checked").parent("label").addClass("checked"),e.change(function(){e.hasClass("checked"),$(this).parent("label").toggleClass("checked")});var i=$(".mobile_lang").find("input");$(".mobile_lang").find("input:checked").parent("label").addClass("checked"),i.change(function(){$(".mobile_lang").find("input").parent("label").toggleClass("checked")});var s=$(".contacts-form_input-fields").find("input, textarea");s.each(function(){""!=$(this).val()&&$(this).parent("label").addClass("active")}),s.focusin(function(){$(this).parent("label").addClass("active")}),s.focusout(function(){var a=$(this).val();a=$.trim(a),$(this).val(a),""===$(this).val()&&$(this).parent("label").removeClass("active")}),$(".contacts-map_mark").hover(function(){$(this).find(".mark_phone").stop(!0).fadeIn(600)},function(){$(this).find(".mark_phone").stop(!0).fadeOut(400)}),Waves.init({duration:800}),Waves.attach(".waves-effect",["waves-button"])});
//# sourceMappingURL=maps/common.js.map

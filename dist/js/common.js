$(document).ready(function(){$(".last_work-carousel").owlCarousel({loop:!1,dots:!1,nav:!0,navText:[""],navContainer:".last_work-carousel",mouseDrag:!0,responsive:{0:{nav:!1,margin:15,stagePadding:40,items:1},550:{nav:!1,margin:15,stagePadding:0,items:1},880:{nav:!1,items:2},1300:{nav:!1,margin:25,items:3},1500:{nav:!0,margin:25,stagePadding:20,items:3}}}),$(".portfolio-carousel").owlCarousel({loop:!1,dots:!1,nav:!1,arrows:!1,margin:80,items:2,variableWidth:!0,navText:[""],mouseDrag:!0,responsive:{}}),$(".our_team-display").owlCarousel({loop:!1,dots:!1,nav:!1,navText:[""],responsive:{0:{nav:!1,mouseDrag:!0,stagePadding:50,margin:0,items:1},550:{nav:!1,mouseDrag:!0,stagePadding:40,margin:0,items:2},880:{nav:!1,mouseDrag:!0,stagePadding:40,items:3},1300:{nav:!1,mouseDrag:!1,stagePadding:0,items:4}}}),$(".our_clients-logo").owlCarousel({dots:!1,nav:!1,autoplay:!0,autoplayTimeout:5e3,autoplayHoverPause:!1,stagePadding:0,navText:[""],responsive:{0:{loop:!0,nav:!1,mouseDrag:!0,margin:0,items:1},700:{loop:!0,nav:!1,mouseDrag:!0,margin:0,items:2},880:{loop:!0,nav:!1,mouseDrag:!0,margin:0,items:3},1260:{loop:!0,nav:!1,mouseDrag:!0,margin:0,items:4},1340:{loop:!1,nav:!1,mouseDrag:!1,stagePadding:0,items:4}}}),$('select.language, input[type="file"]').styler(),$(".contacts-form_input-fields textarea").autoResize({extraSpace:5,limit:600}),$(window).scroll(function(){$(this).scrollTop()>100?$(".To-top").fadeIn():$(".To-top").fadeOut()}),$(".To-top").click(function(){$("body,html").animate({scrollTop:0},800)});var a=$(".header"),t=0;$(window).scroll(function(){var e=$(window).scrollTop(),s=!1,i=!1;if(e>0){if(e>t)if(s=!1,e<a.height()+a.offset().top){if(!1===i){var o=a.offset().top;a.css({top:o+"px"}),i=!0}a.css({position:"absolute"})}else a.css({position:"fixed",top:"-"+a.height()+"px"});else if(i=!1,e>a.offset().top){if(!1===s){o=a.offset().top;a.css({top:o+"px"}),s=!0}a.css({position:"absolute"})}else a.removeAttr("style");t=e}}),$.fn.commentCards=function(a){var t=this,e=(a=a-1||0,[]),s=[];$(this).find("> div").each(function(t){e.push($(this).html()),t==a?s.push("<div class='nav--"+t+" active ' data-nav='"+t+"'></div>"):s.push("<div class='nav--"+t+"' data-nav='"+t+"'></div>")}),this.addClass("cards cards--active").empty().html("<div class='card card--current'></div> \n<div class='card card--next'></div> \n<div class='card card--out'></div>").append("<div class='card--nav'>"+s.join("")+"</div>").find(".card--current").html(e[a]),this.find(".card--nav > div[class^='nav--']").on("click",function(){if(!$(this).hasClass("active")){t.find(".card--nav > div[class^='nav--']").removeClass("active"),$(this).addClass("active");var a=t.find("> div.card--current"),s=t.find("> div.card--next"),i=t.find("> div.card--out");t.find(".card--next").html(e[$(this).data("nav")]),t.find("> div").removeClass("card--current card--out card--next"),a.addClass("card--out"),s.addClass("card--current"),i.addClass("card--next")}return!1});var i=t.find(".card--nav > div").last().data("nav");return t.on("click",".card--current",function(){return t.find(".card--nav > div.active").data("nav")==i?t.find(".card--nav > div").first().trigger("click"):$(".card--nav .active").next().trigger("click"),this}),this},$(".reviews_carousel").commentCards(2),$(".h_mobile-menu").click(function(){$(".mobile_nav").slideToggle(300),$(this).toggleClass("active"),$(".menu-toggle").toggleClass("on")});var e=$(".checkbox").find("input");$(".checkbox").find("input:checked").parent("label").addClass("checked"),e.change(function(){e.hasClass("checked"),$(this).parent("label").toggleClass("checked")});var s=$(".mobile_lang").find("input");$(".mobile_lang").find("input:checked").parent("label").addClass("checked"),s.change(function(){$(".mobile_lang").find("input").parent("label").toggleClass("checked")});var i=$(".contacts-form_input-fields").find("input, textarea");i.each(function(){""!=$(this).val()&&$(this).parent("label").addClass("active")}),i.focusin(function(){$(this).parent("label").addClass("active")}),i.focusout(function(){var a=$(this).val();a=$.trim(a),$(this).val(a),""===$(this).val()&&$(this).parent("label").removeClass("active")}),$(".contacts-map_mark").hover(function(){$(this).find(".mark_phone").stop(!0).fadeIn(600)},function(){$(this).find(".mark_phone").stop(!0).fadeOut(400)}),Waves.init({duration:800}),Waves.attach(".waves-effect",["waves-button"]);var o=0,n=$(".js-page-top"),r=$(".js-page-bottom"),c=!1,d=!1;$(window).scroll(function(){var t=o-$(window).scrollTop();t<0&&(t=-t);var e=$(window).height(),s=(n.css("margin-bottom"),document.querySelector(".js-page-top").getBoundingClientRect());if(o<$(window).scrollTop()){if(s.bottom-1<=e&&!1===c){if(s.bottom>0)return c=!0,d=!1,n.css("margin-bottom",e+200+"px"),$("body,html").stop(!0).clearQueue().animate({scrollTop:r.offset().top+e},500,function(){c=!1}),!1;s.bottom<=0&&(r.css("position","static"),n.css("margin-bottom",0))}}else if(o>$(window).scrollTop()){if(document.querySelector(".js-page-bottom").getBoundingClientRect().top>=0&&!1===c&&!1===d){if(r.css("position","fixed"),"0px"===n.css("margin-bottom"))return c=!0,d=!0,n.css("margin-bottom",e+200+"px"),a.css("display","none"),$("body,html").stop(!0).clearQueue().animate({scrollTop:r.offset().top-e},500,function(){c=!1,a.css({display:"block",top:"-83px",position:"fixed"})}),!1;s.bottom>=e&&n.css("margin-bottom","200px")}}o=$(window).scrollTop()})});
//# sourceMappingURL=maps/common.js.map

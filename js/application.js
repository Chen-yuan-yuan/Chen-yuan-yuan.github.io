// build time:Fri Oct 30 2020 15:07:26 GMT+0800 (GMT+08:00)
$(function(){$('[data-toggle="tooltip"]').tooltip();if(typeof $.fn.slimScroll!="undefined"){$(".sidebar .slimContent").slimScroll({height:$(window).height(),color:"rgba(0,0,0,0.15)",size:"5px",position:"right"})}$("#collapseToc").on("shown.bs.collapse",function(){if(typeof $.fn.slimScroll!="undefined"){$(".sidebar .slimContent").slimScroll().on("slimscroll")}});$(".geopattern").each(function(){$(this).geopattern($(this).data("pattern-id"))});var i=$("#nav-main").okayNav({swipe_enabled:false});$("[data-stick-bottom]").keepInView({fixed:false,parentClass:"has-sticky",customClass:"sticky",trigger:"bottom",zindex:42,edgeOffset:0});$("[data-stick-top]").keepInView({fixed:true,parentClass:"has-sticky",customClass:"sticky",trigger:"top",zindex:42,edgeOffset:0});var t=$("ul.main-nav").hasClass("menu-highlight");if(t){var e=location.pathname,a=$("ul.main-nav>li"),n=-1;for(var o=0,s=a.length;o<s;o++){var l=$(a[o]).find("a").attr("href");if(e.indexOf(l)>-1||e==="/"&&(l==="/."||l==="/"||l==="index.html"||l==="/index.html")){n=o}$(a[o]).removeClass("active")}a[n]&&$(a[n]).addClass("active")}});function addLoadEvent(i){var t=window.onload;if(typeof window.onload!="function"){window.onload=i}else{window.onload=function(){t();i()}}}
//rebuild by neat 
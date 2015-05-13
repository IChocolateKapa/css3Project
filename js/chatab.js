/**
 * Created by hpwu on 2015/5/13.
 */
$(function(){
    $("ul li").click(function(){
        $("div").each(function () {
            $(this).removeClass("content");
        })
        $("ul li").each(function () {
            $(this).removeClass("tabin");
        })
        $("div").eq($(this).index()).addClass("content");
        $(this).addClass("tabin");
    })
})

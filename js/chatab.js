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
//更方便的是，把li与div相应的赋同组ID，比如“a", "_a",这样在js里写代码时更方便

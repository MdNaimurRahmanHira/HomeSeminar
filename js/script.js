$(document).ready(function () {
    $(".bar i:nth-child(2)").hide()
    $(".bar i:first-child").click(function () {
        $(".navmenu").addClass("left0"),
            $(this).hide()
        $(".bar i:nth-child(2)").show()
    })
    $(".bar i:nth-child(2)").click(function () {
        $(".navmenu").removeClass("left0"),
            $(this).hide(),
            $(".bar i:first-child").show()
    })
    $(".carousel").carousel({
        interval: 3000,

    })
    
  
})
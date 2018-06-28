$(document).ready(function() {
    var choosedSeat = [];
    for (var i = 0; i < 48; i++) {
        if (i == 4 | i == 19 | i == 20) {
            var seatHtml = "<div class='seatSold'>" + i + "</div>"
        $("#seatWrap").append(seatHtml);
        } else {
            var seatHtml = "<div class='seat'>" + i + "</div>"
        $("#seatWrap").append(seatHtml);
        }
        
    }
    $(".seat").click(function() {
        var idx = choosedSeat.indexOf($(this).index());
        if (idx != -1) {
            choosedSeat.splice(idx, 1)
            $(this).toggleClass("seatChoosed");
        } else {
            if (choosedSeat.length > 3) {
                window.alert("最多选择四个座位！");
            } else {
                choosedSeat.push($(this).index());
                $(this).toggleClass("seatChoosed");
            }
        }
    })
});
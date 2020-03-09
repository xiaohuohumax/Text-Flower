function Defint(DEFINE, INPUT) {
    var RESULT = {};
    for (var vlaue in DEFINE) { RESULT[vlaue] = DEFINE[vlaue]; }
    for (var vlaue in INPUT) { RESULT[vlaue] = INPUT[vlaue]; }
    return RESULT;
}

function TextFlower(DATA) {
    var THISDATA = Defint({ FONTWEIGHT: 700, FONTSIZE: 15, TEXTARRAY: ['嘿嘿嘿', '哈哈哈', '呵呵呵', '么么哒', '吼吼吼'], COLORARRAY: ["palegreen", "paleturquoise", "tomato", "palevioletred", "teal", "pink", "hotpink"] }, DATA);
    var clickAain = true;
    $(window).click(function (e) {
        if (clickAain) {
            clickAain = false;
            var span = $("<span style='pointer-events:none;user-select:none;position:fixed;z-index:30;font-size:" +
                THISDATA.FONTSIZE + "px;font-weight:" + THISDATA.FONTWEIGHT + ";color:" +
                THISDATA.COLORARRAY[Math.floor(Math.random() * THISDATA.COLORARRAY.length)] + "'>" +
                THISDATA.TEXTARRAY[Math.floor(Math.random() * THISDATA.TEXTARRAY.length)] + "</span>");
            $("body").append(span)
            span.css({ "top": e.pageY - 15, "left": e.pageX - (parseInt(span.css("width")) / 2) });
            span.animate({ top: "-=35", "opacity": "0", }, 1000);
            setTimeout(function () { span.remove(); }, 1500);
            setTimeout(function () { clickAain = true; }, 30);
        }
    })
}

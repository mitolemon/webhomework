$(init)

function init() {
    $('.bigimg').hide();
    $('.box2').hide();
    $('.box3').hide();
    $('.select').on('click', '.button1', (e) => {
        $('.box1').show();
        $('.box2').hide();
        $('.box3').hide();
        $('.button1').css('background', '#eee');
        $('.button2').css('background', 'white');
        $('.button3').css('background', 'white');
    })
    $('.select').on('click', '.button2', (e) => {
        $('.box1').hide();
        $('.box2').show();
        $('.box3').hide();
        $('.button1').css('background', 'white');
        $('.button2').css('background', '#eee');
        $('.button3').css('background', 'white');
    })
    $('.select').on('click', '.button3', (e) => {
        $('.box1').hide();
        $('.box2').hide();
        $('.box3').show();
        $('.button1').css('background', 'white');
        $('.button2').css('background', 'white');
        $('.button3').css('background', '#eee');
    })

    $('.box1').click(function(e) {
        $('.bigimg').empty();
        var t = e.target;
        var tp = $(t).clone();
        $(tp).css('width', '500px');
        $(tp).css('height', '500px');
        $('.bigimg').fadeIn('fast');
        $('.bigimg').append(tp);
        e.stopPropagation();
    });

    $(document).click(function(e) {
        $('.bigimg').empty();
    });

    $('.box2').on('click', '.addBtn', (e) => {
        if ($('.mytb').height() < $('.tb').height()) {
            var len = $('.mytb tr').length;
            var tr = "<tr><td class=\"t1\">" + (len + 1) + "</td><td class=\"t2\"></td><td class=\"t3\">Delete</td></tr>";
            $('.mytb').append(tr);
        } else {
            alert('超过窗口大小！');
        }
    });
    $('.tb').on('click', '.t3', (e) => {
        var t = e.target;
        $(t).parent().remove();
        reload();
    });

}

function reload() {
    var len = $(".mytb tr").length;
    for (i = 0; i < len; i++) {
        $('.mytb tr:eq(' + i + ') .t1').text(i + 1);
    }
}
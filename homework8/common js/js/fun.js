init();

function init() {
    hide('bigimg');
    hide('box2');
    hide('box3');
    document.getElementsByClassName('button1')[0].addEventListener('click', function() {
        show('box1');
        hide('box2');
        hide('box3');
        document.getElementsByClassName('button1')[0].style.backgroundColor = '#eee';
        document.getElementsByClassName('button2')[0].style.backgroundColor = 'white';
        document.getElementsByClassName('button3')[0].style.backgroundColor = 'white';
    })
    document.getElementsByClassName('button2')[0].addEventListener('click', function() {
        hide('box1');
        show('box2');
        hide('box3');
        document.getElementsByClassName('button1')[0].style.backgroundColor = 'white';
        document.getElementsByClassName('button2')[0].style.backgroundColor = '#eee';
        document.getElementsByClassName('button3')[0].style.backgroundColor = 'white';
    })
    document.getElementsByClassName('button3')[0].addEventListener('click', function() {
        hide('box1');
        hide('box2');
        show('box3');
        document.getElementsByClassName('button1')[0].style.backgroundColor = 'white';
        document.getElementsByClassName('button2')[0].style.backgroundColor = 'white';
        document.getElementsByClassName('button3')[0].style.backgroundColor = '#eee';
    })
    document.getElementsByClassName('box1')[0].addEventListener('click', function(e) {
        document.getElementsByClassName('bigimg')[0].innerHTML = '';
        var t = e.target;
        var tp = t.cloneNode(true);
        tp.style.width = '500px';
        tp.style.height = '500px';
        document.getElementsByClassName('bigimg')[0].appendChild(tp);
        e.stopPropagation();
        show('bigimg');
    })
    document.addEventListener('click', function(e) {
        document.getElementsByClassName('bigimg')[0].innerHTML = '';
    })
    document.getElementsByClassName('addBtn')[0].addEventListener('click', function(e) {
        if (document.getElementsByClassName('mytb')[0].clientHeight < document.getElementsByClassName('tb')[0].clientHeight) {
            var len = document.querySelectorAll('tr').length;
            var tr = document.createElement("tr");
            document.getElementsByClassName('mytb')[0].appendChild(tr);
            tr.innerHTML = "<td class=\"t1\">" + (len + 1) + "</td><td class=\"t2\"></td><td class=\"t3\">Delete</td>";
            var tdList = document.querySelectorAll('.t3');
            for (i = 0; i < tdList.length; i++) {
                var item = tdList[i];
                item.addEventListener('click', del);
            }
        } else {
            alert('超过窗口大小！');
        }
    })
}

function hide(item) {
    var ui = document.getElementsByClassName(item);
    ui[0].style.display = "none";
}

function show(item) {
    var ui = document.getElementsByClassName(item);
    ui[0].style.display = "block";
}

function del(e) {
    var t = e.target;
    t.parentNode.remove();
    reload();
}

function reload() {
    var len = document.querySelectorAll('tr').length;
    var tdList = document.querySelectorAll('.t1');
    for (i = 0; i < len; i++) {
        tdList[i].innerText = (i + 1);
    }
}
document.getElementById("p1").onclick = function()
{
    p1.style.color = 'red'
};

document.getElementById("p2").onclick = function()
{
    var date = new Date()
    var year = date.getFullYear()
    var month = date.getMonth()
    var day = date.getDate()
    month++
    if (month < 10) month = "0" + month
    if (day < 10) day = "0" + day
    document.getElementById('h1').innerHTML = year + "-" + month + "-" + day
};

document.getElementById("p3").onclick = function() 
{
    p3.parentNode.classList.add("fn-active")
}

document.getElementById("p4").onclick = function() 
{
    p4.parentNode.removeChild(p8)
}

document.getElementById("p5").onclick = function()
{
    window.open("http://www.taobao.com")
};

var p9 = document.createElement("p9")
document.getElementById("p6").onclick = function() 
{
    p6.parentNode.appendChild(p9)
    p9.innerHTML = '<li class="m-item" id="p9">p9</li>'
}

document.getElementById("p7").onclick = function() 
{
    document.getElementsByClassName("m-box").style.width = window.innerWidth + 'px'
}

var li = document.getElementsByTagName('li');
for (var i = 0; i <= li.length; i++) {
    (function(Index) 
    {
        li[i].addEventListener('click', function(e) 
        {
            alert(Index + 1);
        })
    })(i)
}
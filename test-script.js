
var secondContentH1 = document.getElementsByClassName("second-content")[0].getElementsByTagName("h1")[0];
var iSymbol = document.getElementsByClassName('i-symbol')[0];
var textspan = secondContentH1.getElementsByTagName("span")[1];

secondContentH1.onmouseover = function()
{
    textspan.style.left = "10px";
    iSymbol.style.opacity = "1";
    iSymbol.style.left = "10px"
}
secondContentH1.onmouseout = function()
{
    textspan.style.left = "0px";
    iSymbol.style.opacity = "0";
    iSymbol.style.left = "-10px"
}

//---------------Another one-------------//
var mozImg = document.getElementById("mozilla-icon");
var spanMozImg = document.getElementById("after-icon");

mozImg.onmouseover = function()
{
    // spanMozImg.style.opacity = "1";
    spanMozImg.className = "welp";
}
mozImg.onmouseout = function()
{
    // spanMozImg.style.opacity = "0";
    spanMozImg.className = "";
}

//---------quote section----------//
var getAll = document.getElementsByClassName("quote")[0].getElementsByTagName("p");
var getAllSpans = document.getElementsByClassName("quote")[0].getElementsByTagName("span");

var index = 0;

function mytry()
{
    if(index<=4)
    {
        if(index!=0)
        {
            getAll[index-1].style.display = "none";
            getAll[index-1].className = " ";
            getAllSpans[index-1].style.display = "none";
            getAllSpans[index-1].className = " ";
        }
        else
        {}

        if(index!=4)
        {
            getAll[index].style.display = "inline-block";
            getAll[index].className = "addAnimations";
            getAllSpans[index].style.display = "inline-block";
            getAllSpans[index].className = "anotherone";
            ++index;
        }
        else
        {
            index=0;
        }
    }
    console.log(index);
}

setInterval(mytry,3500);
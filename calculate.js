function one()
{
    let a=document.getElementById("one").value;
    document.getElementById("hname").value+=a;
}
function two()
{
    let a=document.getElementById("two").value;
    document.getElementById("hname").value+=a;
}
function three()
{
    let a=document.getElementById("three").value;
    document.getElementById("hname").value+=a;
}
function four()
{
    let a=document.getElementById("four").value;
    document.getElementById("hname").value+=a;
}
function five()
{
    let a=document.getElementById("five").value;
    document.getElementById("hname").value+=a;
}
function six()
{
    let a=document.getElementById("six").value;
    document.getElementById("hname").value+=a;
}
function seven()
{
    let a=document.getElementById("seven").value;
    document.getElementById("hname").value+=a;
}
function eight()
{
    let a=document.getElementById("eight").value;
    document.getElementById("hname").value+=a;
}
function nine()
{
    let a=document.getElementById("nine").value;
    document.getElementById("hname").value+=a;
}
function zero()
{
    let a=document.getElementById("zero").value;
    document.getElementById("hname").value+=a;
}
function ac()
{
    document.getElementById("hname").value="";
}
function divide()
{
    let a=document.getElementById("divide").value;
    document.getElementById("hname").value+=a;
}
function dot()
{
    let a=document.getElementById("dot").value;
    document.getElementById("hname").value+=a;
}
function percentage()
{
    let a=document.getElementById("percentage").value;
    document.getElementById("hname").value+=a;
}
    function add()
{
    let a=document.getElementById("add").value;
    document.getElementById("hname").value+=a;
}
function sub()
{
    let a=document.getElementById("sub").value;
    document.getElementById("hname").value+=a;
}
function multi()
{
    let a=document.getElementById("multi").value;
    document.getElementById("hname").value+=a;
}
function del()
{
    document.getElementById("hname").value=document.getElementById("hname").value.slice(0,-1);
}
function equalto()
{
    let a=document.getElementById("hname").value;
    let ans=eval(a);
    document.getElementById("hname").value=ans;
}

//Les variables
var sp, btn_Start, stp,t,ms,s,mn,h; 

//Initioalisation
window.onload = function()
{
    sp = document.getElementsByTagName('span');
    btn_Start = document.getElementById('Start');
    stp = document.getElementById('Stop');
    t;
    ms = 0, s=0, mn=0, h=0; 
}

//compteur 
function count()
{
    ms+=1; 
    if (ms==10)
    {
        ms=1; 
        s+=1
    }

    if(s==60)
    {
        s=0;
        mn+=1
    }

    if(mn==60)
    {
        mn=0;
        h+=1; 
    }
    //Insertion des valeurs 
    sp[0].innerHTML = h + "h"; 
    sp[1].innerHTML = mn + "mn"; 
    sp[2].innerHTML = s + "s"; 
    sp[3].innerHTML = ms + "ms"; 
    
}

function Start()
{
    t=setInterval(count,100); 
    btn_Start.disabled = true; 
}

function Stop()
{
    clearInterval(t); 
    btn_Start.disabled = false; 
}

function  Reset()
{
    clearInterval(t); 
    btn_Start.disabled=false; 
    ms=0, s=0, mn=0; h=0; 
    sp[0].innerHTML = h + "h"; 
    sp[1].innerHTML = mn + "mn"; 
    sp[2].innerHTML = s + "s"; 
    sp[3].innerHTML = ms + "ms"; 
}
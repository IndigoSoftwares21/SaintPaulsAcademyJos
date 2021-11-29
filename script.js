function expandextra()
{ var expandextra = document.getElementById('expandextra')
var expandadm = document.getElementById('expandadm')

    if (expandextra.style.display=="block") {

        expandextra.style.display= "none";
        
    }
    else
    {
        expandextra.style.display= "block";
        expandadm.style.display= "none";
    }

    
    
    
}
function expandadm()
{ var expandadm = document.getElementById('expandadm')
var expandextra = document.getElementById('expandextra')

    if (expandadm.style.display=="block") {

        expandadm.style.display= "none";
        
    }
    else
    {
        expandadm.style.display= "block";
        expandextra.style.display= "none";
        
    }

    
    
    
}

function menu()
{
    
    var menu = document.getElementById('menu')

    if (menu.style.display=="flex") {

        menu.style.display= "none";
        
    }
    else
    {
        menu.style.display= "flex";
    }

    
    
    
}



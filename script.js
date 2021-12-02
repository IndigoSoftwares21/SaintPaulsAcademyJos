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
    var sub_menu = document.getElementById('expandextra')
    var sub_menu2 = document.getElementById('expandadm')

    if (menu.style.right == "-230px") {

        menu.style.right = "0px";
        sub_menu.style.right = "0px";
        sub_menu2.style.right = "0px";
        
        
    }
    else
    {
        menu.style.right = "-230px"
        sub_menu.style.right = "-230px"
        sub_menu2.style.right = "-230px"
        sub_menu.style.display= "none";
        sub_menu2.style.display= "none";
    }

    
    
    
}



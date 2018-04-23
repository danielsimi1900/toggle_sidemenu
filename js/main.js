var navstat1 = true;

function toggle1(){
    if (navstat1 == false){
        document.getElementById("nav1").style.left = "-400px";
        document.getElementById("nav1").style.opacity = "0.7";
        navstat1 = true;
    }
    else if (navstat1 == true){
        document.getElementById("nav1").style.left = "0px";
        document.getElementById("nav1").style.opacity = "0.7";
        navstat1 = false;
    }
};

/* -----
toggle a nav bar or any other element from html, also how to set the opacity onload and onclick event
---- */

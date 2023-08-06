var memu    = document.getElementById("menu"),
    menuBtn = document.getElementById("menuBtn");

    menu.style.right = "-250px";

    menuBtn.onclick = function() {
        if(menu.style.right == "-250px")
        {
            menu.style.right = "0px";
        } else {
            menu.style.right = "-250px"; 
        }
    }



var icon = document.getElementById("moon");

    icon.onclick = function() {
        document.body.classList.toggle("dark-theme");

    if( document.body.classList.contains("dark-theme")){
        // icon.src = "Images/sun.png"
        icon.src = "Images/moon.png"
    }else{
        icon.src = "Images/moon.png"
    }
}


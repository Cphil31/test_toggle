window.onload = function () {

    let but = document.querySelector(".but");
    document.body.style.background = "#282c35";
    but.addEventListener("change",function(){

        if (but.checked == true ){
          document.body.style.background = "#282c35";
        }
        else {
            document.body.style.background = "white";
        }
    })

}
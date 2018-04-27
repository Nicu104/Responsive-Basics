
$(document).ready(function(){
    $(window).resize(function(){
        var size = $(window).width(); 
        // console.log(size);
        if(size < 480){
            document.title = "Phone";
            $(".footer").html("Phone: width less than or equalto 480px; <br> actual size is:"+size+"px");
        }
        else if(size > 480 && size < 1024){
            document.title = "Tablet";
            $(".footer").html("Tablet: width between 480px and 1023px; <br> actual size is:"+size+"px");
        }
        else if(size > 1024){
            document.title = "Desktop";
            $(".footer").html("Desktop: width greater than 1024px; <br> actual size is:"+size+"px");
        }
    })
});
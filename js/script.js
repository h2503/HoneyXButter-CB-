
$(document).ready(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
            if($('.overlay:visible').length == 0) {
                $("header").css("background-color", "#000");
            }
        } else {
            $("header").css("background-color", "transparent");
            
           
        }
    });
});

function submitFeedback() {
  alert("We highly appreciate your feedback. Hope to see you anytime soon!");
}



AOS.init({
        
        offset: 400, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 1000 // values from 0 to 3000, with step 50ms
      });


AOS.init({
disable: function() {
		  var maxWidth = 700;
		  return window.innerWidth < maxWidth;
		}
});




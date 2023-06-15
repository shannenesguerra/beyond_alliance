
// For scroll up

 window.onscroll = function() {
      scrollFunction();
    };

    function scrollFunction() {
      var scrollToTopBtn = document.getElementById("scrollToTop");

      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.classList.add("show");
      } else {
        scrollToTopBtn.classList.remove("show");
      }
    }

    function scrollToTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
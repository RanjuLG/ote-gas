
  (function ($) {
  
  "use strict";

  // NAVBAR
  $('.navbar-nav .nav-link').click(function(){
      $(".navbar-collapse").collapse('hide');
  });

  // PROJECTS IMAGE RESIZE
    function NewsImageResize(){      
      var LargeImage = $('.projects-thumb-small .projects-image').height();

      $('.projects-thumb-large').css('height', LargeImage + 'px');
    }

    $(window).on("resize", NewsImageResize);
    $(document).on("ready", NewsImageResize);

    $('.custom-link').click(function(){
    var el = $(this).attr('href');
    var elWrapped = $(el);
    var header_height = $('.navbar').height() + 10;

    scrollToDiv(elWrapped,header_height);
    return false;

    function scrollToDiv(element,navheight){
      var offset = element.offset();
      var offsetTop = offset.top;
      var totalScroll = offsetTop-navheight;

      $('body,html').animate({
      scrollTop: totalScroll
      }, 300);
  }
});
    
  })(window.jQuery);


  document.querySelectorAll('.btn-light').forEach(function(button) {
    button.addEventListener('click', function() {
        // Collapse all other panels
        document.querySelectorAll('.collapse').forEach(function(collapse) {
            if (collapse.id !== button.getAttribute('data-bs-target').substring(1)) {
                collapse.classList.remove('show');
            }
        });
    });
});



    document.addEventListener('DOMContentLoaded', function () {
        var form = document.querySelector(".contact-form");

        async function handleSubmit(event) {
            event.preventDefault();
            var status = document.getElementById("form-status");
            var data = new FormData(event.target);
            fetch(event.target.action, {
                method: form.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                console.log('Response:', response);
                return response.json();
            }).then(data => {
                console.log('Data:', data);
                if (data.ok) {
                    // Customize the success message or actions if needed
                    status.innerHTML = "We appreciate your message and will get back to you as soon as possible.";
                    // Reset the form
                    form.reset();
                } else if (data.hasOwnProperty('errors')) {
                    // Display individual error messages
                    status.innerHTML = data.errors.map(error => error.message).join(", ");
                } else {
                    status.innerHTML = "Oops! There was a problem submitting your form.";
                }
            }).catch(error => {
                console.error('Error:', error);
                status.innerHTML = "Oops! There was a problem submitting your form.";
            });
        }

        form.addEventListener("submit", handleSubmit);
    });


    document.addEventListener("DOMContentLoaded", function () {
        let carousel = new bootstrap.Carousel(document.getElementById('carouselExampleCaptions'), {
            interval: 4000, // Set the interval for automatic sliding (in milliseconds)
        });
    
        // Event listener for when the carousel slides
        document.getElementById('carouselExampleCaptions').addEventListener('slide.bs.carousel', function (event) {
            let activeIndex = event.to;
            updateIndicators(activeIndex);
        });
    
        // Function to update the carousel indicators
        function updateIndicators(index) {
            let indicators = document.querySelectorAll('.carousel-indicators li');
            indicators.forEach((indicator, i) => {
                if (i === index) {
                    indicator.classList.add('active');
                } else {
                    indicator.classList.remove('active');
                }
            });
        }
    });
    





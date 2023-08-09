  // burger menu
  let mobileMenu = document.querySelector(".nav-mobile-menu");
  let mainMenu = document.querySelector(".header__nav");

  mobileMenu.addEventListener('click', function () {
      mobileMenu.classList.toggle("active-menu");
      if (mobileMenu.classList.contains("active-menu")) {
          mainMenu.classList.add("active-menu")
      } else {
          mainMenu.classList.remove("active-menu")
      }
  });

  $(".dropdown-box").on("click", function (e) {

      e.preventDefault();
      let $this = $(this);
      if (!$this.hasClass("active")) {
          $(".dropdown-box").removeClass("active");
      }
      $this.toggleClass("active");
  });

  $(".nav-mobile-menu").click(function () {
      $('body').toggleClass("overflow-hidden");
  });
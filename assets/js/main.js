!function (e) {
  "use strict";
  e(window).on("load", (function () {
    e(".preloader").fadeOut(),
      setTimeout((function () {
        e(".slick-slider".length) && e(".slick-slider").each((function () {
          e(this).slick("refresh");
        }
        ));
      }
      ), 300);
  }
  )),
    e(".preloader").length > 0 && e(".preloaderCls").each((function () {
      e(this).on("click", (function (t) {
        t.preventDefault(),
          e(".preloader").css("display", "none");
      }
      ));
    }
    )),
    e.fn.asmobilemenu = function (t) {
      var a = e.extend({
        menuToggleBtn: ".as-menu-toggle",
        bodyToggleClass: "as-body-visible",
        subMenuClass: "as-submenu",
        subMenuParent: "as-item-has-children",
        subMenuParentToggle: "as-active",
        meanExpandClass: "as-mean-expand",
        appendElement: '<span class="as-mean-expand"></span>',
        subMenuToggleClass: "as-open",
        toggleSpeed: 400
      }, t);
      return this.each((function () {
        var t = e(this);
        function n() {
          t.toggleClass(a.bodyToggleClass);
          var n = "." + a.subMenuClass;
          e(n).each((function () {
            e(this).hasClass(a.subMenuToggleClass) && (e(this).removeClass(a.subMenuToggleClass),
              e(this).css("display", "none"),
              e(this).parent().removeClass(a.subMenuParentToggle));
          }
          ));
        }
        t.find("li").each((function () {
          var t = e(this).find("ul");
          t.addClass(a.subMenuClass),
            t.css("display", "none"),
            t.parent().addClass(a.subMenuParent),
            t.prev("a").append(a.appendElement),
            t.next("a").append(a.appendElement);
        }
        ));
        var s = "." + a.meanExpandClass;
        e(s).each((function () {
          e(this).on("click", (function (t) {
            var n;
            t.preventDefault(),
              n = e(this).parent(),
              e(n).next("ul").length > 0 ? (e(n).parent().toggleClass(a.subMenuParentToggle),
                e(n).next("ul").slideToggle(a.toggleSpeed),
                e(n).next("ul").toggleClass(a.subMenuToggleClass)) : e(n).prev("ul").length > 0 && (e(n).parent().toggleClass(a.subMenuParentToggle),
                  e(n).prev("ul").slideToggle(a.toggleSpeed),
                  e(n).prev("ul").toggleClass(a.subMenuToggleClass));
          }
          ));
        }
        )),
          e(a.menuToggleBtn).each((function () {
            e(this).on("click", (function () {
              n();
            }
            ));
          }
          )),
          t.on("click", (function (e) {
            e.stopPropagation(),
              n();
          }
          )),
          t.find("div").on("click", (function (e) {
            e.stopPropagation();
          }
          ));
      }
      ));
    }
    ,
    e(".as-menu-wrapper").asmobilemenu();
  var t, a, n, s = "";
  function o(t, a, n, s) {
    e(a).on("click", (function (a) {
      a.preventDefault(),
        e(t).addClass(s);
    }
    )),
      e(t).on("click", (function (a) {
        a.stopPropagation(),
          e(t).removeClass(s);
      }
      )),
      e(t + " > div").on("click", (function (a) {
        a.stopPropagation(),
          e(t).addClass(s);
      }
      )),
      e(n).on("click", (function (a) {
        a.preventDefault(),
          a.stopPropagation(),
          e(t).removeClass(s);
      }
      ));
  }
  function i(e) {
    return parseInt(e, 10);
  }
  e(window).on("scroll", (function () {
    var t, a, n, o, i;
    t = e(".sticky-active"),
      a = "active",
      n = "will-sticky",
      o = e(window).scrollTop(),
      i = t.css("height"),
      t.parent().css("min-height", i),
      e(window).scrollTop() > 800 ? (t.parent().addClass(n),
        o > s ? t.removeClass(a) : t.addClass(a)) : (t.parent().css("min-height", "").removeClass(n),
          t.removeClass(a)),
      s = o,
      e(this).scrollTop() > 500 ? e(".scrollToTop").addClass("show") : e(".scrollToTop").removeClass("show");
  }
  )),
    e(".scrollToTop").each((function () {
      e(this).on("click", (function (t) {
        return t.preventDefault(),
          e("html, body").animate({
            scrollTop: 0
          }, s / 3),
          !1;
      }
      ));
    }
    )),
    e("[data-bg-src]").length > 0 && e("[data-bg-src]").each((function () {
      var t = e(this).attr("data-bg-src");
      e(this).css("background-image", "url(" + t + ")"),
        e(this).removeAttr("data-bg-src").addClass("background-image");
    }
    )),
    e(".as-hero-carousel").each((function () {
      var t = e(this);
      function a(e) {
        return t.data(e);
      }
      t.find("[data-ls-go]").each((function () {
        e(this).on("click", (function (a) {
          a.preventDefault();
          var n = e(this).data("ls-go");
          t.layerSlider(n);
        }
        ));
      }
      )),
        t.layerSlider({
          createdWith: "7.0.6",
          sliderVersion: "7.0.6",
          skin: "v6",
          allowRestartOnResize: !0,
          maxRatio: a("maxratio") ? a("maxratio") : 1,
          type: a("slidertype") ? a("slidertype") : "responsive",
          pauseOnHover: !!a("pauseonhover"),
          navPrevNext: !!a("navprevnext"),
          hoverPrevNext: !!a("hoverprevnext"),
          hoverBottomNav: !!a("hoverbottomnav"),
          navStartStop: !!a("navstartstop"),
          navButtons: !!a("navbuttons"),
          loop: !1 !== a("loop"),
          autostart: !!a("autostart"),
          responsiveUnder: a("responsiveunder") ? a("responsiveunder") : 1220,
          layersContainer: a("container") ? a("container") : 1220,
          showCircleTimer: !!a("showcircletimer"),
          skinsPath: "layerslider/skins/",
          thumbnailNavigation: !1 !== a("thumbnailnavigation")
        });
    }
    )),
    o(".sidemenu-wrapper", ".sideMenuToggler", ".sideMenuCls", "show"),
    o(".popup-newsletter-active", ".popupNewsletterToggler", ".popup-newsletter-closer", "show"),
    t = ".popup-search-box",
    a = ".searchClose",
    n = "show",
    e(".searchBoxToggler").on("click", (function (a) {
      a.preventDefault(),
        e(t).addClass(n);
    }
    )),
    e(t).on("click", (function (a) {
      a.stopPropagation(),
        e(t).removeClass(n);
    }
    )),
    e(t).find("form").on("click", (function (a) {
      a.stopPropagation(),
        e(t).addClass(n);
    }
    )),
    e(a).on("click", (function (a) {
      a.preventDefault(),
        a.stopPropagation(),
        e(t).removeClass(n);
    }
    )),
    e(".popup-image").magnificPopup({
      type: "image",
      gallery: {
        enabled: !0
      }
    }),
    e(".popup-video").magnificPopup({
      type: "iframe"
    }),
    e(".popup-content").magnificPopup({
      type: "inline",
      midClick: !0
    }),
    e.fn.sectionPosition = function (t, a) {
      e(this).each((function () {
        var n, s, o, l, r, c = e(this);
        n = Math.floor(c.height() / 2),
          s = c.attr(t),
          o = c.attr(a),
          l = i(e(o).css("padding-top")),
          r = i(e(o).css("padding-bottom")),
          "top-half" === s ? (e(o).css("padding-bottom", r + n + "px"),
            c.css("margin-top", "-" + n + "px")) : "bottom-half" === s && (e(o).css("padding-top", l + n + "px"),
              c.css("margin-bottom", "-" + n + "px"));
      }
      ));
    }
    ;
  e("[data-sec-pos]").length && e("[data-sec-pos]").imagesLoaded((function () {
    e("[data-sec-pos]").sectionPosition("data-sec-pos", "data-pos-for");
  }
  )),
    e(".filter-active").imagesLoaded((function () {
      if (e(".filter-active").length > 0) {
        var t = e(".filter-active").isotope({
          itemSelector: ".filter-item",
          filter: "*",
          masonry: {
            columnWidth: 1
          }
        });
        e(".filter-menu-active").on("click", "button", (function () {
          var a = e(this).attr("data-filter");
          t.isotope({
            filter: a
          });
        }
        )),
          e(".filter-menu-active").on("click", "button", (function (t) {
            t.preventDefault(),
              e(this).addClass("active"),
              e(this).siblings(".active").removeClass("active");
          }
          ));
      }
    }
    )),
    e("#ship-to-different-address-checkbox").on("change", (function () {
      e(this).is(":checked") ? e("#ship-to-different-address").next(".shipping_address").slideDown() : e("#ship-to-different-address").next(".shipping_address").slideUp();
    }
    )),
    e(".woocommerce-form-login-toggle a").on("click", (function (t) {
      t.preventDefault(),
        e(".woocommerce-form-login").slideToggle();
    }
    )),
    e(".woocommerce-form-coupon-toggle a").on("click", (function (t) {
      t.preventDefault(),
        e(".woocommerce-form-coupon").slideToggle();
    }
    )),
    e(".shipping-calculator-button").on("click", (function (t) {
      t.preventDefault(),
        e(this).next(".shipping-calculator-form").slideToggle();
    }
    )),
    e('.wc_payment_methods input[type="radio"]:checked').siblings(".payment_box").show(),
    e('.wc_payment_methods input[type="radio"]').each((function () {
      e(this).on("change", (function () {
        e(".payment_box").slideUp(),
          e(this).siblings(".payment_box").slideDown();
      }
      ));
    }
    )),
    e(".rating-select .stars a").each((function () {
      e(this).on("click", (function (t) {
        t.preventDefault(),
          e(this).siblings().removeClass("active"),
          e(this).parent().parent().addClass("selected"),
          e(this).addClass("active");
      }
      ));
    }
    )),
    e(".quantity-plus").each((function () {
      e(this).on("click", (function (t) {
        t.preventDefault();
        var a = e(this).siblings(".qty-input")
          , n = parseInt(a.val());
        isNaN(n) || a.val(n + 1);
      }
      ));
    }
    )),
    e(".quantity-minus").each((function () {
      e(this).on("click", (function (t) {
        t.preventDefault();
        var a = e(this).siblings(".qty-input")
          , n = parseInt(a.val());
        !isNaN(n) && n > 1 && a.val(n - 1);
      }
      ));
    }
    )),
    e.fn.countdown = function () {
      e(this).each((function () {
        var t = e(this)
          , a = new Date(t.data("offer-date")).getTime();
        function n(e) {
          return t.find(e);
        }
        var s = setInterval((function () {
          var e = (new Date).getTime()
            , o = a - e
            , i = Math.floor(o / 864e5)
            , l = Math.floor(o % 864e5 / 36e5)
            , r = Math.floor(o % 36e5 / 6e4)
            , c = Math.floor(o % 6e4 / 1e3);
          i < 10 && (i = "0" + i),
            l < 10 && (l = "0" + l),
            r < 10 && (r = "0" + r),
            c < 10 && (c = "0" + c),
            o < 0 ? (clearInterval(s),
              t.addClass("expired"),
              t.find(".message").css("display", "block")) : (n(".day").html(i),
                n(".hour").html(l),
                n(".minute").html(r),
                n(".seconds").html(c));
        }
        ), 1e3);
      }
      ));
    }
    ,
    e(".offer-counter").length && e(".offer-counter").countdown(),
    e("[data-ani-duration]").each((function () {
      var t = e(this).data("ani-duration");
      e(this).css("animation-duration", t);
    }
    )),
    e("[data-ani-delay]").each((function () {
      var t = e(this).data("ani-delay");
      e(this).css("animation-delay", t);
    }
    )),
    e("[data-ani]").each((function () {
      var t = e(this).data("ani");
      e(this).addClass(t),
        e(".slick-current [data-ani]").addClass("as-animated");
    }
    )),
    e(".as-carousel").on("afterChange", (function (t, a, n, s) {
      e(a.$slides).find("[data-ani]").removeClass("as-animated"),
        e(a.$slides[n]).find("[data-ani]").addClass("as-animated");
    }
    )),
    e.fn.shapeMockup = function () {
      e(this).each((function () {
        var t = e(this)
          , a = t.data("top")
          , n = t.data("right")
          , s = t.data("bottom")
          , o = t.data("left");
        t.css({
          top: a,
          right: n,
          bottom: s,
          left: o
        }).removeAttr("data-top").removeAttr("data-right").removeAttr("data-bottom").removeAttr("data-left").parent().addClass("shape-mockup-wrap");
      }
      ));
    }
    ,
    e(".shape-mockup") && e(".shape-mockup").shapeMockup(),
    e(".counter-number").counterUp({
      delay: 10,
      time: 1e3
    }),
    e(window).on("resize", (function () {
      e(".slick-slider").slick("refresh");
    }
    )),
    e('button[data-bs-toggle="tab"]').on("shown.bs.tab", (function (t) {
      e(".as-carousel").slick("setPosition");
    }
    ));
  [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map((function (e) {
    return new bootstrap.Tooltip(e);
  }
  ));
  e.fn.buttonAnimation = function () {
    e(this).each((function () {
      var t = e(this).html();
      e(this).html(""),
        e(this).prepend('<span class="btn-text">' + t + '</span><span class="btn-text-mask">' + t + "</span>");
    }
    ));
  }
    ,
    e(".mask-btn").length > 0 && e(".mask-btn").buttonAnimation();
}(jQuery);
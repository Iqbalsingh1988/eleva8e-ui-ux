(function ($) {
    $("[id= 'ui-ux-service-form']").load("./form/ui-ux-service-form.html");
    $("[id= 'ui-ux-service-form-footer']").load(
        "./form/ui-ux-service-form-footer.html"
    );
    // testimonial section start

    var swiper = new Swiper(".testimonial_slider", {
        slidesPerView: 1,
        spaceBetween: 15,
        loop: true,
        slidesPerGroup: 1,
        effect: "fade",
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        fadeEffect: {
            crossFade: true,
        },
        pagination: {
            el: ".swiper-pagination-testimonail",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 10,
                loop: false,
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 15,
            },
            992: {
                slidesPerView: 1,
                spaceBetween: 15,
            },
            1200: {
                slidesPerView: 1,
                spaceBetween: 15,
            },
        },
    });

    // testimonial section end
    // Discover insight slider section js start

    var swiper = new Swiper(".discover_insight_slider", {
        slidesPerView: 4,
        spaceBetween: 20,
        slidesPerGroup: 1,
        loop: true,
        navigation: {
            nextEl: ".next-arrow-discover",
            prevEl: ".prev-arrow-discover",
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 10,
                pagination: {
                    el: ".swiper-pagination-discover",
                    clickable: true,
                },
                navigation: false,
            },
            576: {
                slidesPerView: 1.5,
                spaceBetween: 12,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 15,
            },
        },
    });

    // Discover insight slider section js end

    // Client logo slider section js start

    var swiper = new Swiper(".client_logo_slider", {
        slidesPerView: 9,
        spaceBetween: 20,
        loop: true,
        allowTouchMove: false,
        speed: 5000,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        slidesPerGroup: 1,
        navigation: {
            nextEl: ".next-arrow-banner",
            prevEl: ".prev-arrow-banner",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 3.5,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 6,
                spaceBetween: 15,
            },
            992: {
                slidesPerView: 6,
                spaceBetween: 15,
            },
            1200: {
                slidesPerView: 9,
                spaceBetween: 20,
            },
        },
    });

    // Client logo slider section js end

    // Procces We Follow section start

    var swiper = new Swiper(".process_follow_slider", {
        slidesPerView: 4,
        spaceBetween: 20,
        loop: true,
        slidesPerGroup: 1,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".next-arrow-process",
            prevEl: ".prev-arrow-process",
        },
        pagination: {
            el: ".swiper-pagination-process",
            clickable: true,
        },
        breakpoints: {
            0: {
                enabled: false, // disable slider 0–767
            },
            768: {
                enabled: true, // enable slider 768+
                slidesPerView: 2,
                spaceBetween: 15,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 15,
             
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
        },
    });

    // Procces We Follow section end

    // Banner section start

    var swiper = new Swiper(".banner_right_slider", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        slidesPerGroup: 1,
        navigation: {
            nextEl: ".next-arrow-process",
            prevEl: ".prev-arrow-process",
        },
        pagination: {
            el: ".swiper-pagination-banner",
            clickable: true,
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });

    // Banner section end

    // why eleva8e delivers section start
var accordionSwiper = null;

function initAccordionSwiper() {
    var winWidth = window.innerWidth;

    if (winWidth <= 767 && accordionSwiper === null) {
        accordionSwiper = new Swiper(".accordion_slider_row", {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination-why_eleva8e",
                clickable: true,
            },
            allowTouchMove: false, // 👈 drag/swipe disable
        });
    } else if (winWidth > 767 && accordionSwiper !== null) {
        const scrollPos = window.scrollY;
        accordionSwiper.destroy(false, true);
        accordionSwiper = null;
        window.scrollTo(0, scrollPos);
    }
}

window.addEventListener("load", initAccordionSwiper);

window.addEventListener("resize", function () {
    clearTimeout(this.resizeTimeout);
    this.resizeTimeout = setTimeout(initAccordionSwiper, 200);
});


    // why eleva8e delivers section end

    // Professional Toolstack & Process slider js start
    var swiper = new Swiper(".design_prototyping_slider", {
        slidesPerView: 3,
        spaceBetween: 15,
        slidesPerGroup: 1,
        loop: true,
        navigation: {
            nextEl: ".next-arrow-prototyping",
            prevEl: ".prev-arrow-prototyping",
        },
        pagination: {
            el: ".swiper-pagination-approach",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1199: {
                slidesPerView: 3,
            },
        },
    });
    // Professional Toolstack & Process slider js end
})(jQuery);

document.addEventListener("DOMContentLoaded", function () {
    // Why eleva8e Accordion js start
    const accordionHeaders = document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach((header) => {
        header.addEventListener("click", function () {
            const isExpanded = header.getAttribute("aria-expanded") === "true"; // 👈
            accordionHeaders.forEach((h) => {
                h.setAttribute("aria-expanded", "false");
                document
                    .getElementById(h.getAttribute("aria-controls"))
                    .setAttribute("hidden", "");
                h.parentElement.classList.remove("active");
            });
            if (!isExpanded) {
                const contentId = header.getAttribute("aria-controls");
                const content = document.getElementById(contentId);

                header.setAttribute("aria-expanded", "true");
                content.removeAttribute("hidden");
                header.parentElement.classList.add("active");
            }
        });
    });
    // Why eleva8e Accordion js end

    // Professional Toolstack & Process section start
    const buttons = document.querySelectorAll(".accordion_btn");

    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            const isExpanded = button.getAttribute("aria-expanded") === "true";
            const contentId = button.getAttribute("aria-controls");
            const content = document.getElementById(contentId);

            // sab close karo
            buttons.forEach((btn) => {
                btn.setAttribute("aria-expanded", "false");
                document
                    .getElementById(btn.getAttribute("aria-controls"))
                    .setAttribute("hidden", "");
                btn.classList.remove("active"); // yahan se active class hatao
            });

            // agar already open nahi hai to open karo
            if (!isExpanded) {
                button.setAttribute("aria-expanded", "true");
                content.removeAttribute("hidden");
                button.classList.add("active"); // yahan active class lagao
            }
        });
    });

    // Professional Toolstack & Process section end

    // Professional Toolstack & Process Tabbing js start
    $(".tech_tab").click(function () {
        var tabId = $(this).attr("data-id");
        $(".tech_tab_detail").removeClass("tab-active");
        $(".tech_tab_detail[data-id='" + tabId + "']").addClass("tab-active");
        $(".tech_tab").removeClass("active");
        $(this).parent().find(".tech_tab").addClass("active");
        setTimeout(function () {
            var currentSlider = $(
                ".tech_tab_detail[data-id='" +
                    tabId +
                    "'] .design_prototyping_slider"
            )[0];
            if (currentSlider && currentSlider.swiper) {
                currentSlider.swiper.slideTo(0, 0);
                currentSlider.swiper.update();
            }
        }, 100);
    });
    // Professional Toolstack & Process Tabbing js start

    // Procces We Follow section js start
    $(".process_follow_tab").click(function () {
        var tabId = $(this).attr("data-id");

        // tab content switch
        $(".process_follow_tab_detail").removeClass("pf-tab-active");
        $(".process_follow_tab_detail[data-id='" + tabId + "']").addClass(
            "pf-tab-active"
        );
        $(".process_follow_tab").removeClass("active");
        $(this).parent().find(".process_follow_tab").addClass("active");

        setTimeout(function () {
            // design_prototyping_slider reset
            var currentSlider = $(
                ".process_follow_tab_detail[data-id='" +
                    tabId +
                    "'] .design_prototyping_slider"
            )[0];
            if (currentSlider && currentSlider.swiper) {
                currentSlider.swiper.slideTo(0, 0);
                currentSlider.swiper.update();
            }

            // process_follow_slider reset + refresh
            var processSlider = $(
                ".process_follow_tab_detail[data-id='" +
                    tabId +
                    "'] .process_follow_slider"
            )[0];
            if (processSlider && processSlider.swiper) {
                processSlider.swiper.slideTo(0, 0); // always go to first slide
                processSlider.swiper.update(); // refresh layout
            }
        }, 100);
    });

    // Procces We Follow section js start
    // pop  up form js start
    $(".process_follow_col").click(function () {
        let popupId = $(this).data("popup");
        $("#" + popupId).fadeIn(500);
        $("body").css("overflow", "hidden"); // disable scroll
    });

    $(".lr_close").click(function () {
        $(this).closest(".popup_product_vdo").fadeOut(500);
        $("body").css("overflow", ""); // enable scroll
    });

    $(".popup_product_vdo").click(function (e) {
        if ($(e.target).closest(".popup__content").length === 0) {
            $(this).fadeOut(500);
            $("body").css("overflow", ""); // enable scroll
        }
    });

    // pop  up form js end

    // header js start
    $(window).on("scroll resize", function () {
        var winWidth = $(window).width();
        var scrollTop = $(window).scrollTop();
        var scrollLimit = 150;
        if (winWidth <= 767) {
            scrollLimit = 50;
        } else if (winWidth <= 1199) {
            scrollLimit = 10;
        }
        if (winWidth <= 767) {
            $(".header_section")
                .removeClass("active")
                .css("box-shadow", "none");
            $(".logo-img").attr("src", "images/header-img/logo.png");
            return;
        }

        if (scrollTop > scrollLimit) {
            $(".header_section").addClass("active");
            $(".logo-img").attr("src", "images/header-img/logo.png");

            setTimeout(function () {
                if ($(".header_section").hasClass("active")) {
                    $(".header_section").css(
                        "box-shadow",
                        "0 1px 5px rgba(0, 0, 0, 0.25)"
                    );
                }
            }, 200);
        } else {
            $(".header_section").removeClass("active");
            $(".logo-img").attr("src", "images/header-img/eleva8e-logo.webp");
            $(".header_section").css("box-shadow", "none");
        }
    });

    // header js end

    // Get Free Ui/Ux Audit section start

    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 700) {
            $(".get_free_audit_sec").addClass("show");
        } else {
            $(".get_free_audit_sec").removeClass("show");
        }
    });
    // Get Free Ui/Ux Audit section end

    // Mobile Get Free Ui/Ux Audit section start
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 200) {
            $(".mobile_get_free_audit_sec").addClass("show");
        } else {
            $(".mobile_get_free_audit_sec").removeClass("show");
        }
    });
    // Mobile Get Free Ui/Ux Audit section end



    // form pop up section start
const popup = document.querySelector(".register_form_pop_up_sec");
const openBtns = document.querySelectorAll(".register_form_btn, .mobile_btn_click"); // saare open buttons select
const closeBtn = document.querySelector(".register_form_close");

// sabhi open buttons pe loop chalao
openBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
        popup.classList.add("active");
        document.body.style.overflow = "hidden"; // disable scroll
    });
});

// close button
closeBtn.addEventListener("click", function () {
    popup.classList.remove("active");
    document.body.style.overflow = ""; // enable scroll back
});


    // form pop up section end



    




    // wow animation js start
    wow = new WOW({
        boxClass: "wow",
        animateClass: "animate__animated",
        offset: 0,
        mobile: false,
        live: true,
    });
    wow.init();

    // wow animation js end
});

// Prevent editing of the fixed-value input without using HTML attributes
// Targets the dynamically loaded form inside #ui-ux-service-form
$(function () {
    var fixedServiceValue = "UI/UX Service";
    var lockedInputSelector =
        "#ui-ux-service-form input[name='Potential Name']";

    // Ensure the value is always the fixed one when the element appears or gains focus
    $(document).on("focus", lockedInputSelector, function () {
        this.value = fixedServiceValue;
        // Immediately remove focus to avoid showing the keyboard/caret
        this.blur();
    });

    // Block any typing, pasting, cutting, or programmatic input changes
    $(document).on(
        "keydown input paste cut drop change",
        lockedInputSelector,
        function (e) {
            e.preventDefault();
            this.value = fixedServiceValue;
            return false;
        }
    );

    // If the form chunk loads after DOM ready, set the value once it's in the DOM
    var observeTarget = document.getElementById("ui-ux-service-form");
    if (observeTarget && "MutationObserver" in window) {
        new MutationObserver(function () {
            var el = document.querySelector(lockedInputSelector);
            if (el) {
                el.value = fixedServiceValue;
            }
        }).observe(observeTarget, { childList: true, subtree: true });
    }
});

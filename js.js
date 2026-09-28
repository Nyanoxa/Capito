
document.addEventListener("DOMContentLoaded", () => {

    const sections = document.querySelectorAll(
        ".intro, .menu-content, .team__content, .reservation__content"
    );

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }

            });

        },
        {
            threshold: 0.15
        }
    );

    sections.forEach((section) => {

        section.classList.add("animate");
        observer.observe(section);

    });


    /* ====================================
       MOBILE MENU
    ==================================== */

    const menuButton = document.querySelector(".menu-button");
    const navigation = document.querySelector(".navigation");
    const header = document.querySelector(".header");

    if (menuButton && navigation) {

        // Начальное состояние кнопки
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Открыть меню");

        // Открытие и закрытие меню
        function closeMenu() {

            navigation.classList.remove("open");
            menuButton.classList.remove("active");

            document.body.classList.remove("menu-open");

            menuButton.setAttribute("aria-expanded", "false");
            menuButton.setAttribute("aria-label", "Открыть меню");

        }

        function toggleMenu() {

            const isOpen = navigation.classList.toggle("open");

            menuButton.classList.toggle("active", isOpen);

            document.body.classList.toggle("menu-open", isOpen);

            menuButton.setAttribute("aria-expanded", isOpen);

            menuButton.setAttribute(
                "aria-label",
                isOpen ? "Закрыть меню" : "Открыть меню"
            );

        }

        menuButton.addEventListener("click", toggleMenu);

        // Закрываем меню после выбора раздела
        navigation.querySelectorAll("a").forEach((link) => {

            link.addEventListener("click", () => {
                closeMenu();
            });

        });

        // Закрытие клавишей Escape
        document.addEventListener("keydown", (event) => {

            if (event.key === "Escape") {
                closeMenu();
            }

        });

        // Если перешли на компьютерную ширину
        window.addEventListener("resize", () => {

            if (window.innerWidth > 900) {
                closeMenu();
            }

        });

    }


    /* ====================================
       HEADER ON SCROLL
    ==================================== */

    if (header) {

        function updateHeader() {

            if (window.scrollY > 50) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }

        }

        window.addEventListener("scroll", updateHeader, {
            passive: true
        });

        updateHeader();

    }


    /* ====================================
       HERO VIDEO
    ==================================== */

    const video = document.querySelector(".hero__video");

    if (video) {

        video.muted = true;

        const playVideo = () => {

            const promise = video.play();

            if (promise !== undefined) {

                promise.catch(() => {

                    console.log(
                        "Автовоспроизведение видео заблокировано браузером."
                    );

                });

            }

        };

        playVideo();

    }

});

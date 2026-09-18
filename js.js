
document.addEventListener(
    "DOMContentLoaded",
    () => {
        const sections =
            document.querySelectorAll(
                ".intro, .menu-content, .team__content, .reservation__content"
            );


        const observer =
            new IntersectionObserver(
                (entries) => {

                    entries.forEach(
                        (entry) => {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "visible"
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.15
                }
            );


        sections.forEach(
            (section) => {

                section.classList.add(
                    "animate"
                );

                observer.observe(
                    section
                );

            }
        );



        /* ====================================
           MOBILE MENU
        ==================================== */

        const menuButton =
            document.querySelector(
                ".menu-button"
            );


        const navigation =
            document.querySelector(
                ".navigation"
            );


        if (
            menuButton &&
            navigation
        ) {

            menuButton.addEventListener(
                "click",
                () => {

                    navigation.classList.toggle(
                        "mobile-open"
                    );

                }
            );

        }



        /* ====================================
           HERO VIDEO
        ==================================== */

        const video =
            document.querySelector(
                ".hero__video"
            );


        if (video) {

            video.muted = true;


            const playVideo =
                () => {

                    const promise =
                        video.play();


                    if (
                        promise !== undefined
                    ) {

                        promise.catch(
                            () => {

                                console.log(
                                    "Автовоспроизведение видео заблокировано браузером."
                                );

                            }
                        );

                    }

                };


            playVideo();

        }

    }
);
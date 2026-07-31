export function initSkills() {
    document.querySelectorAll(".skill-toggle").forEach((toggle) => {

        toggle.addEventListener("click", () => {

            const currentContent = toggle.nextElementSibling;
            const currentArrow = toggle.querySelector(".skill-arrow");

            // Close all other items
            document.querySelectorAll(".skill-content").forEach((content) => {

                if (content !== currentContent) {
                    content.classList.remove("open");
                    content.style.maxHeight = null;

                    content.previousElementSibling
                        .querySelector(".skill-arrow")
                        .classList.remove("rotate-180");
                }

            });

            // Toggle current item
            if (currentContent.classList.contains("open")) {

                currentContent.classList.remove("open");
                currentContent.style.maxHeight = null;
                currentArrow.classList.remove("rotate-180");

            } else {

                currentContent.classList.add("open");
                currentContent.style.maxHeight =
                    currentContent.scrollHeight + "px";

                currentArrow.classList.add("rotate-180");

            }

        });

    });
}
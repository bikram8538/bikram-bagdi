import { projects } from "../data/projectsData";
import { renderCards } from "../components/projects";

export function initProjectFilter() {
    const buttons = document.querySelectorAll("#project-filters .filter-btn");
    const container = document.querySelector("#projects-list");

    buttons.forEach(button => {
        button.addEventListener("click", () => {

            // Active button
            buttons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const filter = button.dataset.filter;

            const filteredProjects =
                filter === "all"
                    ? projects
                    : projects.filter(project =>
                          project.category.includes(filter)
                      );

            container.innerHTML = renderCards(filteredProjects);
        });
    });
}
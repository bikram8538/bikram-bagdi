import { skillGroups } from "../data/skillsData";
import { renderSkillCards } from "../components/skills";
import { initSkills } from "./skills";

export function initSkillsFilter() {

    const buttons = document.querySelectorAll("#skill-filters .filter-btn");
    const container = document.querySelector(".skills-grid");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            // Active button
            buttons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const filter = button.dataset.filter;

            let groupsToRender;

            if (filter === "all") {
                groupsToRender = skillGroups;
            } else {
                groupsToRender = skillGroups
                    .map(group => ({
                        ...group,
                        skills: group.skills.filter(skill =>
                            skill.category === filter
                        )
                    }))
                    .filter(group => group.skills.length > 0);
            }

            container.innerHTML = renderSkillCards(groupsToRender);

            // Reattach accordion events
            initSkills();

        });

    });

}
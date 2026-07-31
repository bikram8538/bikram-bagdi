import { skillGroups } from "../data/skillsData";
import { skillFilters } from "../data/skillFiltersData";

export function renderSkillFilters(filters) {
return filters.map((filter, index) => `
<button class="filter-btn ${index === 0 ? " active" : "" }" data-filter="${filter.value}">${filter.label}</button>
`)
.join("");
}

export function renderSkillCards(groups) {
return groups
.map(
(group) => `
<div class="skills-card" data-item>
    <span class="skill-card-circle"></span>

    <p class="skill-card-heading">
        <span>${group.number}</span>
        <span></span>
        <span>${group.title}</span>
    </p>

    <ul class="divide-y divide-primary/8">

        ${group.skills
        .map(
        (skill) => `
        <li class="group skill-card-li" data-category="${skill.category}">

            <button type="button" class="skill-toggle">

                <span class="skill-heading">
                    ${skill.name}
                </span>

                <span class="flex items-center justify-center gap-3">

                    <span class="skill-status">
                        ${skill.level}
                    </span>

                    <span class="skill-arrow-wraper">

                        <svg class="skill-arrow size-3" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">

                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />

                        </svg>

                    </span>

                </span>

            </button>

            <div class="skill-content">

                <p class="skill-description">
                    ${skill.description}
                </p>

            </div>

        </li>
        `
        )
        .join("")}

    </ul>

</div>
`
)
.join("");
}
export function Skills() {
return `
<section id="skills" class="py-16 sm:py-20 lg:py-24 bg-background text-primary" data-stagger>
    <div class="max-w-7xl mx-auto px-5">
        <div class="sec-top">
            <div>
                <p class="flex items-center gap-3"><span class="inline-block h-px w-10 bg-accent"></span> <span
                        class="sec-title text-[10px]">02</span><span
                        class="inline-block w-0.5 h-0.5 bg-secondary"></span><span class="sec-title text-[10px]">WHAT DO
                        I WORK WITH?</span></p>
            </div>
            <div class="sec-heading mt-8 max-w-xs md:max-w-[56ch]">
                <h2>The tools I <i class="text-accent">reach for</i>, and what I actually do with them.</h2>
            </div>
        </div>
        <div class="sec-mid my-10">
            <!-- filter buttons -->
            <div id="skill-filters" class="flex flex-wrap justify-center gap-3">
                ${renderSkillFilters(skillFilters)}
            </div>
        </div>

        <div class="skills-grid">
            ${renderSkillCards(skillGroups)}
        </div>
    </div>
</section>
`;
}
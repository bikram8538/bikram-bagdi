import { projects } from "../data/projectsData";
import { projectFilters } from "../data/projectFilterData";

export function renderProjectFilters(filters) {
return filters.map((filter, index) => `
<button class="filter-btn ${index === 0 ? " active" : "" }" data-filter="${filter.value}">${filter.label}</button>
`)
.join("");
}

export function renderCards(projects) {
return projects
.map(
(project, index) => `
<div class="project-card-wraper">
    <article class="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8 md:items-center">

        <!-- Left -->
        <div class="project-image-col md:col-span-7 ${index % 2 !== 0 ? " md:order-2" : "" }" data-reveal="down">
            <div class="preview-wrapper group">
                <div class="preview-wrapper-ratio">

                    <!-- Gradient -->
                    <div class="preview-gradient"></div>

                    <!-- Browser -->
                    <div class="browser-frame">
                        <div class="project-image ${project.imageClass}"
                            style="background-image:url('${project.image}')">
                        </div>
                    </div>

                    <!-- Number -->
                    <div class="project-main-tech">
                        ${project.mainTech}
                    </div>

                    <!-- Owner -->
                    <div class="project-owner">
                        Bikram Bagdi
                    </div>

                </div>
            </div>
            <div class="project-numbering">
                ${String(index + 1).padStart(2, "0")}
            </div>
        </div>

        <!-- Right -->
        <div class="project-content md:col-span-5 ${index % 2 !== 0 ? " md:order-1" : "" }" data-reveal="up">
            <div class="project-numbering hidden">
                ${String(index + 1).padStart(2, "0")}
            </div>
            <p class="project-type">
                <span>${project.type}</span>
                <span></span>
                <span>${project.date}</span>
            </p>

            <h3 class="project-title">
                ${project.title}
            </h3>

            <ul class="project-stack">
                ${project.tech
                .map(
                (tech) => `
                <li>
                    <span class="project-stacked-item">
                        ${tech}
                    </span>
                </li>
                `
                )
                .join("")}
            </ul>

            <p class="project-role">
                <span>Role</span>

                <span class="inline-flex flex-col gap-1">
                    <span class="inline-block w-0.5 h-0.5 bg-secondary"></span>
                    <span class="inline-block w-0.5 h-0.5 bg-secondary"></span>
                </span>

                <span>${project.role}</span>
            </p>

            <p class="project-description">
                ${project.description}
            </p>

            <div class="project-btns">

                <a href="${project.live}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">

                    <span>Live Demo</span>

                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-4">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M13.5 4.5H19.5V10.5M19.5 4.5L10.5 13.5M19.5 4.5L13.5 10.5" />
                        </svg>
                    </span>

                </a>

                <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">

                    <span>GitHub</span>

                    <span>
                        <svg viewBox="0 0 24 24" fill="currentColor" class="size-4">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z">
                            </path>
                        </svg>
                    </span>

                </a>

            </div>

        </div>

    </article>
</div>
`
)
.join("");
}
export function Projects(){
return `
<section id="projects" class="py-16 sm:py-20 lg:py-24 bg-background text-primary">

    <div class="max-w-7xl mx-auto px-5">

        <div class="sec-top mb-20">
            <div>
                <p class="flex items-center gap-3"><span class="inline-block h-px w-10 bg-accent"></span> <span
                        class="sec-title text-[10px]">03</span><span
                        class="inline-block w-0.5 h-0.5 bg-secondary"></span><span
                        class="sec-title text-[10px]">WHAT HAVE I BUILT?</span></p>
            </div>
            <div class="sec-heading mt-8 max-w-xs md:max-w-[70ch]">
                <h2>Selected work <i class="text-accent">showcasing frontend</i> development and responsive web
                    experiences.</h2>
            </div>
        </div>

        <div id="project-filters" class="flex flex-wrap justify-center gap-3 mb-20">

            ${renderProjectFilters(projectFilters)}

        </div>

        <div id="projects-list">
            ${renderCards(projects)}
        </div>

    </div>

</section>
`;
}
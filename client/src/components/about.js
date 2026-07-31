import aboutImage from "../assets/images/bikram-in-metro.webp";
export function About() {
  return `
<section id="about" class="py-16 sm:py-20 lg:py-24 bg-background text-primary flex items-center justify-between">
  <div class="max-w-7xl mx-auto px-5">
    <div class="flex flex-col md:flex-row gap-10 md:gap-12 items-baseline-last justify-between">
      <div class="basis-full md:basis-[60%] lg:basis-[60%]">
        <div>
          <p class="flex items-center gap-3"><span class="inline-block h-px w-10 bg-accent"></span> <span
              class="sec-title text-[10px]">01</span><span class="inline-block w-0.5 h-0.5 bg-secondary"></span><span
              class="sec-title text-[10px]">WHO IS BIKRAM?</span></p>
        </div>
        <div class="sec-heading mt-8 max-w-xs md:max-w-md">
          <h2>I care about the <i class="text-accent">details</i> that make websites feel effortless.</h2>
        </div>
        <div class="sec-about max-w-[60ch] mt-8">
          <p>I'm Bikram Bagdi, a Frontend and WordPress Developer focused on building responsive websites using HTML,
            CSS, JavaScript, Tailwind CSS, WordPress, and Elementor Pro.</p>
          <p class="mt-4">I enjoy translating designs into clean, maintainable code while paying attention to
            <strong> performance,
              accessibility, responsive layouts, and SEO.</strong> My goal is to create websites that look polished and
            work
            smoothly across every device.
          </p>
          <div class="border-l border-accent max-w-[43ch] sm:max-w-[54ch] mt-6 text-left rounded-2xl">
            <p class="pl-5 py-2"><em>Outside of coding</em>, I'm probably nudging a margin by 2px because something still
              feels "slightly off." Thankfully, users usually notice the final result — not the extra ten minutes it
              took.
              <span class="inline-block text-accent">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4">
                  <path
                    d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                </svg>
              </span>
            </p>
          </div>
        </div>
        <div class="sec-about mt-4">
          <ul class="flex flex-row sm:flex-row gap-2.5">
            <li class="font-secondary text-[10px] uppercase text-secondary items-center flex gap-1 sm:gap-2">
              <span class="inline-flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="size-4">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12 9.75 14.25 12m0 0 2.25 2.25M14.25 12l2.25-2.25M14.25 12 12 14.25m-2.58 4.92-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33Z" />
                </svg>


              </span>2px matters
            </li>
            <span class="hidden sm:block border-[0.5px] sm:border"></span>
            <li class="font-secondary text-[10px] uppercase text-secondary items-center flex gap-1 sm:gap-2"><span
                class="inline-flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="size-4">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12 9.75 14.25 12m0 0 2.25 2.25M14.25 12l2.25-2.25M14.25 12 12 14.25m-2.58 4.92-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33Z" />
                </svg>

              </span>details matters</li>
          </ul>
        </div>
      </div>
      <div class="basis-full md:basis-[40%] lg:basis-[40%]">
        <div class="group relative aspect-4/3 sm:aspect-4/5 overflow-hidden rounded-xl">
          <img src="${aboutImage}" alt=""
            class="h-full w-full object-cover transition-transform ease-out duration-300 group-hover:scale-110">
        </div>
        <div
          class="mt-4 flex items-center justify-left font-secondary text-[10px] uppercase tracking-[0.2em] text-secondary gap-3">
          <span>Sector v metro station, IN</span><span class="inline-block w-0.5 h-0.5 bg-secondary"></span><span>MAR
            2026</span>
        </div>
      </div>
    </div>


  </div>
  </div>
</section>
`;
}
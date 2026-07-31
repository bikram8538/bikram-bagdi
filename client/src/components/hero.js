import heroImage from "../assets/images/bikram-smile.jpeg";

export function Hero() {
return `
<section id="home"
  class="relative pb-16 sm:pb-20 lg:pb-24 pt-24 sm:pt-32 bg-background text-primary flex items-center justify-between">
  <div class="max-w-7xl mx-auto px-5">
    <div class="hero-grid">
      <div class="hero-content">
        <div class="hero-intro">
          <span class="h-px w-10 bg-accent"></span>
          <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="size-4 text-accent">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
            </svg>
          </span>
          <p class="sec-title text-[10px]">
            FRONTEND & WORDPRESS DEVELOPER
          </p>
        </div>
        <div class="sec-heading mt-8 max-w-[60ch]">
          <h1>Crafting fast, <i class="text-accent">modern</i> websites
            that users enjoy using.</h1>
        </div>
        <div class="sec-about max-w-xl mt-8">
          <p>I'm <span class="text-primary">Bikram Bagdi.</span> I specialize in HTML, CSS, JavaScript, Tailwind CSS,
            WordPress, and Elementor Pro. I build responsive websites with clean code, proper SEO, and solid
            performance.</p>
        </div>
        <div class="hero-actions">
          <a href="#" class="btn btn-primary flex-row-reverse" id="btn-hero">
            <span>Download Resume</span>
            <span>
              <svg class="w-4 md:w-5 h-4 md:h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 13V4M7 14H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2m-1-5-4 5-4-5m9 8h.01" />
              </svg>


            </span>
          </a>
          <a href="#projects" class="btn btn-secondary flex-row-reverse" id="btn-hero">
            <span>View Projects</span>
            <span>
              <svg class="w-4 md:w-5 h-4 md:h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M11 6.5h2M11 18h2m-7-5v-2m12 2v-2M5 8h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1Zm0 12h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1Zm12 0h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1Zm0-12h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1Z" />
              </svg>
            </span>
          </a>
        </div>

        <div
          class="mt-6 flex items-center gap-5 font-secondary text-[10px] uppercase tracking-[0.2em] text-primary/80">
          <span>Elsewhere</span>
          <span class="h-px w-5 bg-primary/60" aria-hidden="true"></span>
          <a
            href="https://github.com/bikram8538" target="_blank" rel="noreferrer noopener"
            class="hero-social">GitHub</a>
            <a
            href="https://www.linkedin.com/in/bikram8538" target="_blank" rel="noreferrer noopener"
            class="hero-social">LinkedIn</a>
            <a
            href="mailto:bikram8538@gmail.com"
            class="hero-social">Email</a>
            <a href="https://figma.com/bikrammac8538"
            target="_blank" rel="noreferrer noopener"
            class="hidden hero-social sm:inline">Figma</a>
          </div>
        <!-- <div class="sec-about mt-4">
          <ul class="flex flex-row sm:flex-row gap-2.5">
            <li class="font-secondary text-[10px] uppercase text-secondary flex gap-1 items-center sm:gap-2">
              <span
                class="inline-flex">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke-width="1.5" stroke="currentColor" class="text-accent size-4">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg> 
              </span>

              Available for freelance</li>
            <span class="hidden sm:block border-[0.5px] sm:border"></span>
            <li class="font-secondary text-[10px] uppercase text-secondary items-center flex gap-1 sm:gap-2"><span
                class="inline-flex"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke-width="1.5" stroke="currentColor" class="text-accent size-4">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>

              </span>Open to Full-time Roles</li>
          </ul>
        </div> -->
      </div>
      <div class="hero-media">
        <div
          class="hero-image group">
          <img src="${heroImage}" alt="Bikram Bagdi, Frontend and WordPress developer, smiling in a pink shirt"
            width="800" height="1000" loading="eager" fetchpriority="high"
            class="ease-[cubic-bezier(0.22, 1, 0.36, 1)]">
        </div>
        <div
          class="hero-meta">
          <span>Bikram Bagdi</span><span>Portrait / nov 2025</span>
        </div>
      </div>
    </div>
  </div>
  <a href="#about"
    class="hero-scroll group">

    <!-- Mouse -->
    <div
      class="w-7 h-11 rounded-full border border-primary/25 flex justify-center pt-2 transition-all duration-300 group-hover:border-accent group-hover:-translate-y-1">

      <span class="w-1 h-2 rounded-full bg-accent animate-scroll-wheel"></span>

    </div>

    <!-- Text -->
    <span
      class="font-secondary text-[10px] uppercase tracking-[0.24em] text-secondary transition-colors duration-300 group-hover:text-accent">
      Scroll
    </span>

  </a>
</section>

`;
}
export function Footer(){
return `
<footer class="relative bg-background text-primary pb-6">
    
    <div class="max-w-7xl mx-auto px-5">
        <div class="flex justify-end p-3">
        <a href="#hero" class="group inline-flex flex-col items-center  gap-2">
        <span
            class="flex size-10 items-center justify-center rounded-full border border-primary/20 text-secondary transition-all duration-300 group-hover:border-accent group-hover:text-accent group-hover:-translate-y-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75 12 8.25l7.5 7.5" />
            </svg>
        </span>
        <span
            class="font-secondary text-[10px] uppercase tracking-[0.24em] text-secondary transition-colors duration-300 group-hover:text-accent">
            Back to Top
        </span>
    </a></div>

        <!-- Divider -->
        <div class="h-px w-full bg-primary/10 mb-10"></div>

        <!-- Top -->
        <div class="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">

            <!-- Brand -->
            <div class="space-y-3 text-center md:text-left">

                <a href="index.html" class="inline-block font-primary text-3xl leading-none tracking-tight">
                    Bikram<span class="text-accent">.</span>
                </a>

                <p class="font-secondary text-[11px] uppercase tracking-[0.18em] text-secondary">
                    Frontend Developer <br class="hidden sm:hidden">
                    & WordPress Developer
                </p>

            </div>

            <!-- Navigation -->
            <nav>
                <ul class="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-3">

                    <li><a href="#" class="footer-link">Home</a></li>
                    <li><a href="#about" class="footer-link">About</a></li>
                    <li><a href="#skills" class="footer-link">Skills</a></li>
                    <li><a href="#projects" class="footer-link">Projects</a></li>
                    <li><a href="#contact" class="footer-link">Contact</a></li>

                </ul>
            </nav>

        </div>

        <!-- Bottom -->
        <div
            class="mt-10 pt-6 border-t border-primary/10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

            <div
                class="font-secondary text-[11px] tracking-[0.16em] uppercase text-secondary text-center md:text-left inline-flex justify-center items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path fill="currentColor"
                        d="M10 16h4q.425 0 .713-.288T15 15v-2h-2v1h-2v-4h2v1h2V9q0-.425-.288-.712T14 8h-4q-.425 0-.712.288T9 9v6q0 .425.288.713T10 16m2 6q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22" />
                </svg>
                <span>2026 Bikram Bagdi.</span>
            </div>

            <p class="text-[13px] text-secondary text-center">
                Designed & Developed with
                <span class="text-primary">HTML</span>,
                <span class="text-primary">Tailwind CSS</span>
                &amp;
                <span class="text-primary">JavaScript</span>.
            </p>

        </div>

    </div>
    
</footer>
`;
}
// components/navbar.js

export function Navbar() {
return `
<header class="fixed inset-0 top-0 z-30 transition-colors duration-300 bg-transparent h-fit">
  <div class="navbar">
    <div class="max-w-7xl mx-auto px-5">
      <div class="nav-wraper flex justify-between h-16 items-center">
        <div class="sm:basis-[20%]">
          <a class="text-primary font-primary text-xl leading-none tracking-tight active" data-status="active"
            aria-current="page" href="index.html">Bikram <span class="text-secondary">.</span></a>
        </div>
        <nav class="hidden sm:block basis-[60%]">
          <ul class="flex justify-center gap-8 lg:gap-12 items-baseline">
            <li><a href="#home" class="navlink">Home<span class="active-dot"></span></a></li>
            <li><a href="#about" class="navlink">About<span class="active-dot"></span></a></li>
            <li><a href="#skills" class="navlink">Skills<span class="active-dot"></span></a></li>
            <li><a href="#projects" class="navlink">Projects<span class="active-dot"></span></a></li>
            <li><a href="#contact" class="navlink">Contact<span class="active-dot"></span></a></li>
          </ul>
        </nav>

        <div class="sm:basis-[20%] flex items-center justify-end gap-2 sm:gap-4">
          <button id="theme-toggle"
            class="flex h-10 w-10 items-center justify-center transition-all hover:text-[#ffc36c] text-accent cursor-pointer">

            <!-- Moon Icon -->
            <svg id="moon-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8"
              stroke="currentColor" class="size-5">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0112 21a9 9 0 110-18 9.718 9.718 0 009.752 12.002z" />
            </svg>

            <!-- Sun Icon -->
            <svg id="sun-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8"
              stroke="currentColor" class="size-5 hidden">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M12 3v2.25M12 18.75V21M4.22 4.22l1.59 1.59M18.19 18.19l1.59 1.59M3 12h2.25M18.75 12H21M4.22 19.78l1.59-1.59M18.19 5.81l1.59-1.59M12 8.25A3.75 3.75 0 1112 15.75A3.75 3.75 0 0112 8.25z" />
            </svg>

          </button>

          <button id="menu-btn" class="cursor-pointer sm:hidden z-50">
            <svg id="menu-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.6"
              stroke="#fbb45e" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

            <svg id="close-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.6"
              stroke="#fbb45e" class="size-6 hidden">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>

          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- Overlay -->
  <div id="overlay"
    class="fixed inset-0 bg-black/50 backdrop-blur-sm opacity-0 invisible transition-all duration-300 z-30"></div>
  <aside id="offcanvas"
    class="fixed top-0 right-0 h-screen w-80 bg-background translate-x-full transition-transform duration-500 z-40">

    <nav class="mt-24 px-8">
      <ul class="flex flex-col gap-5 items-center">
        <li><a href="#home" class="navlink">Home</a></li>
        <li><a href="#about" class="navlink">About</a></li>
        <li><a href="#skills" class="navlink">Skills</a></li>
        <li><a href="#projects" class="navlink">Projects</a></li>
        <li><a href="#contact" class="navlink">Contact</a></li>
      </ul>
    </nav>

  </aside>

</header>
`;
}
export function Loader() {
  return `
    <div id="loader" class="fixed inset-0 z-9999 bg-background flex items-center justify-center">

      <div class="text-center">

        <h1
          id="loader-title"
          class="font-heading text-5xl md:text-7xl tracking-wide"
        >
          Bikram Bagdi
        </h1>

        <p
          id="loader-subtitle"
          class="mt-4 text-secondary uppercase tracking-[8px] text-xs"
        >
          Frontend Developer
        </p>

        <div class="w-64 h-0.5 bg-border mt-12 overflow-hidden mx-auto">

          <div
            id="loader-bar"
            class="h-full w-0 bg-accent"
          ></div>

        </div>

      </div>

    </div>
  `;
}
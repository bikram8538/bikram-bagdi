export async function loadComponents() {
  const app = document.getElementById("app");

  const components = [
    "navbar",
    "hero",
    "about",
    "services",
    "skills",
    "projects",
    "contact",
    "footer",
  ];

  let html = "";

  for (const component of components) {
    try {
      const response = await fetch(`/src/components/${component}.html`);
      html += await response.text();
    } catch (error) {
      console.error(`Failed to load ${component}`, error);
    }
  }

  app.innerHTML = html;
}
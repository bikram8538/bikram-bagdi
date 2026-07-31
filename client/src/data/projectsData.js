import inkIvory from "../assets/images/ink-ivory-banner.png";
import finPocket from "../assets/images/fin-pocket.png";
import aJobs from "../assets/images/ajobs.png";
import equipMed from "../assets/images/equipmed.png"
import finpocketDashboard from "../assets/images/finpocketDashboard.png"
import websitesCalgary from "../assets/images/websitesCalgary.png"
import opalStreet from "../assets/images/opalStreet.png"
import rebuilto from "../assets/images/rebuilto.png"
import fillo from "../assets/images/fillo.png"
import portfolio from "../assets/images/portfolio.png"



export const projects = [
    {
        id: 1,
        title: "Ink & Ivory",
        mainTech: "Tailwind CSS",
        image: inkIvory,
        category: ["tailwind"],
        type: "Bookstore & Digital Library",
        date: "Mar 2025",
        role: "Frontend Development",
        description:
            "Ink & Ivory is a premium online bookstore concept designed for readers looking for fine books, rare editions, and timeless literature.",
        tech: [
            "Tailwind CSS",
            "jQuery",
            "Swiper JS",
            "Vercel"
        ],
        live: "https://ink-and-ivory.vercel.app/",
        github: "https://github.com/bikram8538/ink-and-ivory",
    },

    {
        id: 2,
        title: "Fin Pocket",
        mainTech: "Custom CSS",
        image: finPocket,
        category: ["custom-css"],
        type: "Finance Tracker",
        date: "Mar 2026",
        role: "HTML Frontend Development",
        description:
            "A modern finance landing page with responsive design and engaging animations.",
        tech: [
            "Custom CSS",
            "Jquery",
            "AOS"
        ],
        live: "https://bikram8538.github.io/fin-pocket/",
        github: "https://github.com/bikram8538/fin-pocket/",
    },
    {
        id: 3,
        title: "FinPocket Dashboard",
        mainTech: "Grid Layout",
        image: finpocketDashboard,
        imageClass: "bg-cover bg-top-left",
        category: ["custom-css", "responsive-design"],
        type: "Finance Tracking Dashboard",
        date: "Mar 2026",
        role: "Frontend Development",
        description:
            "The admin and user dashboard for FinPocket, featuring balance tracking, interactive cashflow metrics, savings plan progress bars, category breakdowns, and a comprehensive recent transactions manager.",
        tech: [
            "HTML5",
            "CSS Grid",
        ],
        live: "https://bikram8538.github.io/dashboard-finpocket/",
        github: "https://github.com/bikram8538/dashboard-finpocket",
    },
    {
        id: 4,
        title: "EquipMed",
        image: equipMed,
        mainTech: "Custom CSS",
        category: ["custom-css", "responsive-design"],
        type: "Medical Equipment Catalog",
        date: "Jan 2026",
        role: "Frontend Development",
        description:
            "EquipMed is a medical equipment and technology marketplace designed to supply hospitals, clinics, and health facilities with high-quality diagnostic devices, surgical instruments, and lab machinery.",
        tech: [
            "HTML5",
            "CSS3",
            "JavaScript",
        ],
        live: "https://bikram8538.github.io/Medical-Equipment/",
        github: "https://github.com/bikram8538/Medical-Equipment",
    },
    {
        id: 5,
        title: "Ajobs",
        mainTech: "Bootstrap",
        image: aJobs,
        imageClass: "bg-cover bg-top scale-150",
        category: ["bootstrap"],
        type: "Job Search & Portal",
        date: "Oct 2025",
        role: "Frontend Development",
        description:
            "Ajobs is a comprehensive and highly responsive job portal interface featuring category browsing, daily job postings from top-tier firms, featured hiring companies, and structured search patterns.",
        tech: [
            "Bootstrap",
            "Jquery",
            "AOS",
            "GitHub"
        ],
        live: "https://bikram8538.github.io/ajobs/",
        github: "https://github.com/bikram8538/ajobs",
    },
    {
        id: 6,
        title: "Websites Calgary",
        mainTech: "WordPress",
        image: websitesCalgary, // Make sure to import or define this image variable
        imageClass: "bg-cover bg-center",
        category: ["wordpress"],
        type: "Business Website",
        date: "Jul 2026",
        role: "WordPress Development",
        description:
            "A custom WordPress website designed for local business services in Calgary, featuring a fully responsive layout, custom styling, and optimized performance.",
        tech: [
            "Elementor Pro",
            "PHP",
            "MySQL"
        ],
        live: "https://websitescalgary.great-site.net/?i=1",
        github: "", // Leave blank or remove if the code is private
    },
    {
        id: 7,
        title: "Opal Street",
        mainTech: "WordPress",
        image: opalStreet, // Make sure to import or define this image variable
        imageClass: "bg-cover bg-center",
        category: ["wordpress"],
        type: "Business Website",
        date: "Jul 2026",
        role: "WordPress Development",
        description:
            "A modern, responsive WordPress website built for Opal Street, featuring tailored layouts, fast loading times, and a streamlined user experience.",
        tech: [
            "WordPress",
            "PHP",
            "CSS3",
            "Elementor", // Update based on page builders or plugins used
            "MySQL"
        ],
        live: "https://opal-street.free.nf/?i=1",
        github: "", // Leave blank or remove if the source code is private
    },
    {
        id: 8,
        title: "Rebuilto",
        mainTech: "WordPress",
        image: rebuilto, // Import or define this image variable at the top
        imageClass: "bg-cover bg-center",
        category: ["wordpress"],
        type: "Construction & Renovation", // Or "Business Website" / "Architecture"
        date: "Jul 2026",
        role: "WordPress Development",
        description:
            "A responsive WordPress website designed for construction and rebuilding services, featuring a clean modern layout, service showcases, and project portfolio sections.",
        tech: [
            "WordPress",
            "PHP",
            "CSS3",
            "Elementor", // Adjust page builder or plugins as needed
            "MySQL"
        ],
        live: "https://rebuilto.talk4fun.net/",
        github: "", // Leave blank or remove if private
    },
    {
        id: 9,
        title: "Fillo",
        mainTech: "WordPress",
        image: fillo, // Import or define this image variable at the top
        imageClass: "bg-cover bg-center",
        category: ["wordpress"],
        type: "Business Website",
        date: "Jul 2026",
        role: "WordPress Development",
        description:
            "A sleek and fully responsive WordPress website built for Fillo, focused on user engagement, modern design standards, and smooth navigation.",
        tech: [
            "WordPress",
            "PHP",
            "CSS3",
            "Elementor", // Adjust page builder or plugins as needed
            "MySQL"
        ],
        live: "https://fillo.loveslife.biz/?i=1",
        github: "", // Leave blank or remove if private
    },
    {
        id: 10,
        title: "Personal Portfolio",
        mainTech: "React + Vite",
        image: portfolio, // Import or define this image variable at the top
        imageClass: "bg-cover bg-center",
        category: ["react", "tailwind"],
        type: "Portfolio Website",
        date: "Jul 2026",
        role: "Frontend Development",
        description:
            "My personal developer portfolio highlighting my projects, frontend skills, experience, and contact information with a sleek, modern UI built with Vite and React.",
        tech: [
            "React",
            "Vite",
            "Tailwind CSS",
            "JavaScript",
            "Vercel",
            "GitHub"
        ],
        live: "https://bikram-bagdi.vercel.app/",
        github: "https://github.com/bikram8538", // Add your repo link if public
    },

];
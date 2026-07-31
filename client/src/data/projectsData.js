import inkIvory from "../assets/images/ink-ivory-banner.png";
import finPocket from "../assets/images/fin-pocket.png";
import aJobs from "../assets/images/ajobs.png";
import equipMed from "../assets/images/equipMed.png"
import finpocketDashboard from "../assets/images/finpocketDashboard.png"

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
        imageClass : "bg-cover bg-top-left",
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
        imageClass : "bg-cover bg-top scale-150",
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

];
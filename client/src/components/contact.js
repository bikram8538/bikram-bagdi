import contactImage from "../assets/images/contact.png";

export function Contact() {
    return `
<section id="contact" class="py-16 sm:py-20 lg:py-24 bg-background text-primary">
    <div class="max-w-7xl mx-auto px-5">
        <div class="sec-top mb-20">
            <div>
                <p class="flex items-center gap-3"><span class="inline-block h-px w-10 bg-accent"></span> <span
                        class="sec-title text-[10px]">04</span><span
                        class="inline-block w-0.5 h-0.5 bg-secondary"></span><span class="sec-title text-[10px]">HOW
                        CAN WE WORK TOGETHER?</span></p>
            </div>
            <div class="sec-heading mt-8">
                <h2>Let's build <i class="text-accent">something</i> together.</h2>
            </div>
        </div>
        <div class="grid grid-cols-12 gap-8">
            <div class="col-span-12 md:col-span-6 lg:col-span-7" data-reveal="left">
                <form id="contact-form" action="" class="space-y-6">
                    <!-- Name -->
                    <div class="group">
                        <label for="name" class="input-label">Name</label>
                        <div class="relative">
                            <!-- Icon -->
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="input-icon">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15.75 6.75a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                            <input id="name" type="text" placeholder="Your Name" class="input-field ps-12"
                                autocomplete="name">
                        </div>
                    </div>
                    <!-- Email -->
                    <div class="group">
                        <label for="email" class="input-label">Email</label>
                        <div class="relative">
                            <!-- Icon -->
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                class="input-icon" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                            <input id="email" type="text" placeholder="Email Address" class="input-field ps-12"
                                autocomplete="name">
                        </div>
                    </div>
                    <!-- Subject -->
                    <!-- <div>
                        <label for="subject" class="input-label">Subject</label>
                        <input type="text" name="subject" id="subject" placeholder="Project Subject"
                            class="input-field">
                    </div> -->

                    <!-- Message -->

                    <div class="group">
                        <label for="message" class="input-label">Message</label>
                        <div class="relative">
                            <!-- Icon -->
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="top-8 input-icon">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                            </svg>
                            <textarea name="message" id="message" rows="7" placeholder="Tell me about your project..."
                                class="input-field input-textarea ps-12"></textarea>
                        </div>
                    </div>

                    <!-- Button -->
                    <div class="pt-2">
                        <button id="contact-submit" type="submit" class="btn-secondary">
                            <span class="btn-text">Send Message</span>
                            <span class="btn-icon">→</span>
                        </button>
                    </div>

                </form>
            </div>
            <div class="col-span-12 md:col-span-6 lg:col-span-5" data-reveal="right">
                <div class="contact-card relative">
                    <div class="contact-card-title">OR REACH out DIRECTLY</div>
                    <ul class="space-y-7 mt-8">
                        <li class="contact-li">
                            <a href="mailto:bikram8538@gmail.com" target="_blank"
                                class="group flex items-center justify-between">
                                <!-- Left -->
                                <div class="flex items-center gap-4">
                                    <!-- Icon -->
                                    <div class="contact-icon">
                                        <!-- Heroicon / Simple Icon -->
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path fill="currentColor"
                                                d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7l8-5V6l-8 5l-8-5v2z" />
                                        </svg>
                                    </div>
                                    <!-- Text -->
                                    <div>
                                        <p class="contact-card-title">Email</p>
                                        <p class="contact-list">
                                            bikram8538@gmail.com
                                        </p>
                                    </div>

                                </div>

                                <!-- Arrow -->
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="contact-arrow">

                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                            </a>
                        </li>
                        <li class="contact-li">
                            <a href="https://www.linkedin.com/in/bikram8538/" target="_blank"
                                class="group flex items-center justify-between">

                                <!-- Left -->
                                <div class="flex items-center gap-4">

                                    <!-- Icon -->
                                    <div class="contact-icon">
                                        <!-- Heroicon / Simple Icon -->

                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path fill="currentColor"
                                                d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z" />
                                        </svg>
                                    </div>
                                    <!-- Text -->
                                    <div>
                                        <p class="contact-card-title">linkedin</p>
                                        <p class="contact-list">
                                            /in/bikram8538
                                        </p>
                                    </div>
                                </div>
                                <!-- Arrow -->
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="contact-arrow">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                            </a>
                        </li>
                        <li class="contact-li">
                            <a href="https://github.com/bikram8538" target="_blank"
                                class="group flex items-center justify-between">
                                <!-- Left -->
                                <div class="flex items-center gap-4">
                                    <!-- Icon -->
                                    <div class="contact-icon">
                                        <!-- Heroicon / Simple Icon -->
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path fill="currentColor"
                                                d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" />
                                        </svg>
                                    </div>
                                    <!-- Text -->
                                    <div>
                                        <p class="contact-card-title">github</p>
                                        <p class="contact-list">
                                            @bikram8538
                                        </p>
                                    </div>
                                </div>
                                <!-- Arrow -->
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="contact-arrow">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                            </a>
                        </li>
                        <li class="contact-li">
                            <a href="https://www.instagram.com/bikram.zip" target="_blank"
                                class="group flex items-center justify-between">
                                <!-- Left -->
                                <div class="flex items-center gap-4">
                                    <!-- Icon -->
                                    <div class="contact-icon">
                                        <!-- Heroicon / Simple Icon -->
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/>
                                        </svg>
                                    </div>
                                    <!-- Text -->
                                    <div>
                                        <p class="contact-card-title">instagram</p>
                                        <p class="contact-list">
                                            @bikram.zip
                                        </p>
                                    </div>
                                </div>
                                <!-- Arrow -->
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="contact-arrow">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                    <img src="${contactImage}" alt="me" class="contact-image" aria-hidden="true" draggable="false"
                        width="200" height="200">
                </div>
            </div>
        </div>
    </div>
</section>
`
}
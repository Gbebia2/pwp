document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const sidebar = document.querySelector(".sidebar");

    menuToggle.addEventListener("click", function () {
        sidebar.style.right = "0"; // Open sidebar
    });

    // Close sidebar when clicking outside of it
    document.addEventListener("click", function (event) {
        if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
            sidebar.style.right = "-250px"; // Close sidebar
        }
    });

    // Hero Section Slideshow
    const heroImages = [
        "images/terra_kulture.webp",
        "images/lekki_conservation_centre.webp",
        "images/national_museum_lagos.webp"
    ];
    const heroQuotes = [
        "Mental health matters.",
        "Take care of your mind like you do your body.",
        "Well-being starts with self-care."
    ];

    let heroIndex = 0;
    const heroImgElement = document.querySelector("#hero img");
    const heroQuoteElement = document.querySelector("#hero p");
    const heroPrevButton = document.querySelector("#hero-prev");
    const heroNextButton = document.querySelector("#hero-next");

    function updateHeroSection() {
        heroImgElement.src = heroImages[heroIndex];
        heroQuoteElement.textContent = heroQuotes[heroIndex];
    }

    function nextHeroSlide() {
        heroIndex = (heroIndex + 1) % heroImages.length;
        updateHeroSection();
    }

    function prevHeroSlide() {
        heroIndex = (heroIndex - 1 + heroImages.length) % heroImages.length;
        updateHeroSection();
    }

    heroNextButton.addEventListener("click", nextHeroSlide);
    heroPrevButton.addEventListener("click", prevHeroSlide);
    setInterval(nextHeroSlide, 5000); // Auto-switch every 5 seconds

    // About Section Slideshow
    const aboutImages = [
        "images/terra_kulture.webp",
        "images/lekki_conservation_centre.webp",
        "images/national_museum_lagos.webp"
    ];
    const aboutQuotes = [
        "Mental health matters.",
        "Take care of your mind like you do your body.",
        "Well-being starts with self-care."
    ];

    let aboutIndex = 0;
    const aboutImgElement = document.querySelector("#about-us img");
    const aboutQuoteElement = document.querySelector("#about-us p");
    const aboutPrevButton = document.querySelector("#about-prev");
    const aboutNextButton = document.querySelector("#about-next");

    function updateAboutSection() {
        aboutImgElement.src = aboutImages[aboutIndex];
        aboutQuoteElement.textContent = aboutQuotes[aboutIndex];
    }

    function nextAboutSlide() {
        aboutIndex = (aboutIndex + 1) % aboutImages.length;
        updateAboutSection();
    }

    function prevAboutSlide() {
        aboutIndex = (aboutIndex - 1 + aboutImages.length) % aboutImages.length;
        updateAboutSection();
    }

    aboutNextButton.addEventListener("click", nextAboutSlide);
    aboutPrevButton.addEventListener("click", prevAboutSlide);
    setInterval(nextAboutSlide, 5000); // Auto-switch every 5 seconds

    document.addEventListener("DOMContentLoaded", function () {
        // Campaigns Section - Only text changes, background stays the same
        const campaignTitles = [
            "Mental Health Awareness Week",
            "Suicide Prevention Drive",
            "Community Therapy Sessions",
            "Mindfulness & Stress Management"
        ];
    
        const campaignDescriptions = [
            "Join us in raising awareness and breaking the stigma around mental health.",
            "A movement to prevent suicide through education and support.",
            "Free therapy sessions to promote emotional well-being in the community.",
            "Helping individuals learn stress management techniques for a healthier mind."
        ];
    
        let campaignIndex = 0;
        const campaignTitleElement = document.querySelector("#campaign-title");
        const campaignDescElement = document.querySelector("#campaign-description");
        const prevCampaignBtn = document.querySelector("#prev-campaign");
        const nextCampaignBtn = document.querySelector("#next-campaign");
    
        function updateCampaign() {
            campaignTitleElement.textContent = campaignTitles[campaignIndex];
            campaignDescElement.textContent = campaignDescriptions[campaignIndex];
        }
    
        function nextCampaign() {
            campaignIndex = (campaignIndex + 1) % campaignTitles.length;
            updateCampaign();
        }
    
        function prevCampaign() {
            campaignIndex = (campaignIndex - 1 + campaignTitles.length) % campaignTitles.length;
            updateCampaign();
        }
    
        nextCampaignBtn.addEventListener("click", nextCampaign);
        prevCampaignBtn.addEventListener("click", prevCampaign);
    
        // Auto-switch every 5 seconds
        setInterval(nextCampaign, 5000);
    });
    

});

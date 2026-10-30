/**
 * snailbob1 - Structured Data (JSON-LD)
 * Schema.org WebSite, VideoGame, and FAQPage for Google Rich Results
 */
(function () {
    const SITE_SCHEMA = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebSite",
                "@id": "https://snailbob1.github.io/#website",
                "url": "https://snailbob1.github.io/",
                "name": "snailbob1",
                "alternateName": ["snailbob1 unblocked", "Snail Bob 1", "snailbob1.github.io"],
                "description": "The premier portal for snailbob1 unblocked, unblocked websites for school, and free unblocked games for school.",
                "inLanguage": "en-US"
            },
            {
                "@type": "VideoGame",
                "@id": "https://snailbob1.github.io/#game",
                "name": "snailbob1 - Snail Bob 1 Unblocked",
                "url": "https://snailbob1.github.io/",
                "image": "https://snailbob1.github.io/img/logo.png",
                "description": "Play snailbob1 unblocked free online! Guide Bob the snail safely through hazardous construction sites using levers, platforms, and physics gadgets.",
                "genre": ["Puzzle", "Action", "Adventure", "Unblocked Game", "School Game"],
                "gamePlatform": ["Web Browser", "Chromebook", "Desktop", "Mobile"],
                "applicationCategory": "BrowserGame",
                "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, iOS, Android)",
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "ratingCount": "3150",
                    "bestRating": "5",
                    "worstRating": "1"
                }
            },
            {
                "@type": "FAQPage",
                "@id": "https://snailbob1.github.io/#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What is snailbob1 unblocked?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "content": "snailbob1 unblocked is the unrestricted HTML5 version of the legendary puzzle adventure game Snail Bob 1, fully playable in web browsers without network firewalls or download blocks."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can I play snailbob1 on school Chromebooks and restricted networks?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "content": "Yes! snailbob1 is specifically optimized for school Chromebooks, classroom laptops, and networks with strict content filters. It operates smoothly on HTTPS with no VPN or administrative permissions needed."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Why are unblocked websites for school so popular?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "content": "Unblocked websites for school provide students and teachers with safe, educational, and fun browser games that bypass restrictive firewalls like GoGuardian, Securly, or Lightspeed during study breaks."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What other unblocked games for school are available on snailbob1?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "content": "Beyond snailbob1, this portal offers the full Snail Bob series (Snail Bob 2 through 8) as well as popular unblocked games including Vex, Retro Bowl, Drive Mad, Eggy Car, Tetris, and more."
                        }
                    }
                ]
            }
        ]
    };

    function injectSchema() {
        // Prevent duplicate injection
        if (document.getElementById("snailbob1-site-schema")) return;

        const script = document.createElement("script");
        script.id = "snailbob1-site-schema";
        script.type = "application/ld+json";
        script.textContent = JSON.stringify(SITE_SCHEMA, null, 2);
        document.head.appendChild(script);
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", injectSchema);
    } else {
        injectSchema();
    }
})();


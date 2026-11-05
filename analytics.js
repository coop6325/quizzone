
/* QuizZone Analytics Cookie Consent */

var GA_ID = "G-J1V6V6NFZH";
var consentKey = "quizzone_analytics_consent";

function startAnalytics() {
    if (window.quizzoneAnalyticsStarted) {
        return;
    }

    window.quizzoneAnalyticsStarted = true;

    window.dataLayer = window.dataLayer || [];

    window.gtag = function () {
        window.dataLayer.push(arguments);
    };

    window.gtag("js", new Date());
    window.gtag("config", GA_ID);

    var script = document.createElement("script");
    script.async = true;
    script.src =
        "https://www.googletagmanager.com/gtag/js?id=" +
        encodeURIComponent(GA_ID);

    document.head.appendChild(script);
}

function hideCookieBanner() {
    var banner = document.getElementById("cookie-banner");

    if (banner) {
        banner.style.display = "none";
    }
}

function showCookieBanner() {
    var banner = document.getElementById("cookie-banner");

    if (banner) {
        banner.style.display = "block";
    }
}

function acceptAnalytics() {
    localStorage.setItem(consentKey, "accepted");
    startAnalytics();
    hideCookieBanner();
}

function rejectAnalytics() {
    localStorage.setItem(consentKey, "rejected");

    if (window.quizzoneAnalyticsStarted) {
        window.location.reload();
        return;
    }

    hideCookieBanner();
}

document.addEventListener("DOMContentLoaded", function () {
    var consent = localStorage.getItem(consentKey);

    var acceptButton =
        document.getElementById("accept-cookies");

    var rejectButton =
        document.getElementById("reject-cookies");

    var settingsButton =
        document.getElementById("cookie-settings");

    if (acceptButton) {
        acceptButton.addEventListener("click", acceptAnalytics);
    }

    if (rejectButton) {
        rejectButton.addEventListener("click", rejectAnalytics);
    }

    if (settingsButton) {
        settingsButton.addEventListener("click", showCookieBanner);
    }

    if (consent === "accepted") {
        startAnalytics();
        hideCookieBanner();
    } else if (consent === "rejected") {
        hideCookieBanner();
    } else {
        showCookieBanner();
    }
});

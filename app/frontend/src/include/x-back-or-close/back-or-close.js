function btnBackOrClose() {
    const previousURL = document.referrer;
    const currentUrl = window.location.origin + window.location.pathname; // e.g. http://www.densok.com/signup/


    // This (previousURL !== "") syntax means Visitor visit website directly by type URL, so previous URL is "" empty.
    // This (previousURL !== currentUrl) syntax means visitor clear browser while opening that page.
    if (previousURL !== "" && previousURL !== currentUrl) {
        const referrer = new URL(document.referrer).hostname; // e.g. www.densok.com

        // Check previous URL is "densok.com" or not, if true use back() function.
        // If "domain" === "previous URL of hostname" so use back() function,
        // If "previous URL" directly from "search engine" so back to home "/".
        if (location.hostname === referrer) {
            window.history.back();

            // This function is prevent back() function is not working.
            if (window.history.length === 1) {
                window.location.href = previousURL;
            }
        } else {
            window.location.href = "/";
        }
    } else {
        window.location.href = "/";
    }
};

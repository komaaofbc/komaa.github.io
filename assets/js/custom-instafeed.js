document.addEventListener("DOMContentLoaded", function () {
    if (typeof Instafeed === 'undefined') {
        console.error("Instafeed.js not loaded");
        return;
    }

    var token = window.instagramAccessToken || '';
    // Proceed even if token is empty, Instafeed might handle errors or we perform a check
    if (!token) {
        console.warn("KOMAA: No Instagram Access Token provided in _config.yml");
        // Optionally render a fallback message or just do nothing (empty feed)
        return;
    }

    var userFeed = new Instafeed({
        get: 'user',
        target: 'instafeed',
        limit: 3,
        resolution: 'standard_resolution',
        accessToken: token,
        // Template matches feature_row styling
        template: '<div class="feature__item"><div class="archive__item"><div class="archive__item-teaser"><img src="{{image}}" style="width:100%; object-fit:cover;" alt="Instagram Image"></div><div class="archive__item-body"><h2 class="archive__item-title" style="font-size: 1em; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">{{caption}}</h2><div class="archive__item-excerpt"><p class="small">{{timestamp}}</p></div><p><a href="{{link}}" target="_blank" class="btn btn--inverse">View on Instagram</a></p></div></div></div>',
    });
    userFeed.run();
});

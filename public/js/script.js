document.addEventListener('DOMContentLoaded', function() {
    var acceptButton = document.getElementById('accept-cookies');
    var rejectButton = document.getElementById('reject-cookies');
    var cookieBanner = document.getElementById('cookie-banner');

    // Çerez kabul etme butonuna tıklama olayını dinle
    if (acceptButton) {
        acceptButton.addEventListener('click', function() {
            // Çerez kabul edildiğinde işlem yap
            document.cookie = "cookiesAccepted=true; path=/; max-age=" + 60*60*24*30; // 30 gün geçerli
            cookieBanner.style.display = 'none';
        });
    }

    // Çerez reddetme butonuna tıklama olayını dinle
    if (rejectButton) {
        rejectButton.addEventListener('click', function() {
            // Çerez reddedildiğinde işlem yap
            document.cookie = "cookiesAccepted=false; path=/; max-age=" + 60*60*24*30; // 30 gün geçerli
            cookieBanner.style.display = 'none';
        });
    }

    // Çerezlerin kabul edilip edilmediğini kontrol et
    if (document.cookie.indexOf('cookiesAccepted=true') === -1 && document.cookie.indexOf('cookiesAccepted=false') === -1) {
        // Çerez kabul edilmemişse banner'ı göster
        cookieBanner.style.display = 'block';
    } else {
        // Çerez kabul edilmişse banner'ı gizle
        cookieBanner.style.display = 'none';
    }
});

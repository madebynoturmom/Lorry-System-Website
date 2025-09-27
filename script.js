// Load header and footer partials, then initialize UI behavior
async function loadPartial(selector, url){
  try{
    const res = await fetch(url);
    if(!res.ok) return;
    const html = await res.text();
    document.querySelector(selector).innerHTML = html;
  }catch(e){
    console.warn('Failed to load partial', url, e);
  }
}

function initUI(){
  const btn = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  if(btn && nav){
    btn.addEventListener('click', () => {
      nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', nav.classList.contains('open'));
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const href = this.getAttribute('href');
      if(href.length > 1){
        const target = document.querySelector(href);
        if(target){
          e.preventDefault();
          target.scrollIntoView({behavior:'smooth',block:'start'});
        }
      }
    })
  })

  // set footer year if present
  const y = document.getElementById('year');
  if(y) y.textContent = new Date().getFullYear();
}

document.addEventListener('DOMContentLoaded', async function(){
  await Promise.all([
    loadPartial('#site-header-placeholder', 'partials/header.html'),
    loadPartial('#site-footer-placeholder', 'partials/footer.html')
  ]);
  // init UI after partials inserted
  initUI();
});
// Minimal loader moved into assets/js
// This file mirrors the behavior of the previous script.js

async function loadPartial(selector, url, base=''){
  try{
    const res = await fetch(base + url);
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

  const y = document.getElementById('year');
  if(y) y.textContent = new Date().getFullYear();
}

// Toggle capability cards
function toggleCard(header) {
  const card = header.closest('.capability-card');
  const isActive = card.classList.contains('active');
  
  // Close all other cards
  document.querySelectorAll('.capability-card').forEach(c => {
    if (c !== card) {
      c.classList.remove('active');
    }
  });
  
  // Toggle current card
  card.classList.toggle('active', !isActive);
}

document.addEventListener('DOMContentLoaded', async function(){
    // allow pages in subfolders to set a base path via: <meta name="base-path" content="..">
    const meta = document.querySelector('meta[name="base-path"]');
    const base = meta ? meta.getAttribute('content') + '/' : '';

    await Promise.all([
        loadPartial('#site-header-placeholder', '/partials/header.html', base),
        loadPartial('#site-footer-placeholder', '/partials/footer.html', base)
    ]);
    initUI();

    // Ad modal: show once per session (you can remove sessionStorage check if you want every load)
    try{
        const shown = sessionStorage.getItem('ad_shown');
        if(!shown){
            const modal = document.getElementById('ad-modal');
            if(modal){
                // reveal the modal
                modal.setAttribute('aria-hidden','false');
                // close handlers
                const close = modal.querySelector('.ad-close');
                const backdrop = modal.querySelector('.ad-backdrop');
                function closeModal(){ modal.setAttribute('aria-hidden','true'); sessionStorage.setItem('ad_shown','1'); }
                if(close) close.addEventListener('click', closeModal);
                if(backdrop) backdrop.addEventListener('click', closeModal);
                // allow Esc to close
                document.addEventListener('keydown', function esc(e){ if(e.key === 'Escape'){ closeModal(); document.removeEventListener('keydown', esc); } });
            }
        }
    }catch(e){/* ignore session storage failures */}

    // Update popup ad button link
    const popupButton = document.querySelector('.popup-ad .cta-button');
    if (popupButton) {
        popupButton.href = './pages/grant.html';
    }
});
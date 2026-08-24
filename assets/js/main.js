/* ==========================================================================
   State and Lake, LLC
   Site behavior: mobile navigation, current year, contact form submission.
   No frameworks, no build step. Edit directly.
   ========================================================================== */

(function () {
  'use strict';

  /* ---- Mobile navigation ------------------------------------------------ */
  var toggle = document.querySelector('.nav-toggle');
  var links = document.getElementById('nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    // Close the menu after tapping a link on mobile.
    links.addEventListener('click', function (event) {
      if (event.target.tagName === 'A') {
        links.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });

    // Close the menu on Escape.
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && links.classList.contains('is-open')) {
        links.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
  }

  /* ---- Footer year ------------------------------------------------------ */
  var year = document.getElementById('year');
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  /* ---- Contact form ----------------------------------------------------- */
  /* Submits in the background so the visitor stays on the page.
     Works with Formspree, Basin, Netlify Forms, or any endpoint that
     accepts a POST and returns a 2xx response.
     If the endpoint is still the placeholder, the form falls back to a
     normal browser submit so nothing silently disappears. */

  var form = document.getElementById('contact-form');
  var status = document.getElementById('form-status');

  if (form && status) {
    form.addEventListener('submit', function (event) {
      var action = form.getAttribute('action') || '';

      // Endpoint not configured yet: let the browser handle it and show a note.
      if (action.indexOf('YOUR_FORM_ID') !== -1) {
        event.preventDefault();
        setStatus('This form is not connected yet. Add your form endpoint in index.html before publishing.', 'is-error');
        return;
      }

      // Simple bot trap. A real visitor never fills this field.
      var trap = form.querySelector('input[name="_gotcha"]');
      if (trap && trap.value) {
        event.preventDefault();
        return;
      }

      event.preventDefault();

      var button = form.querySelector('.form-submit');
      var original = button ? button.textContent : '';
      if (button) {
        button.disabled = true;
        button.textContent = 'Sending...';
      }

      fetch(action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      })
        .then(function (response) {
          if (response.ok) {
            form.reset();
            setStatus('Thank you. Your message has been received and we will follow up within one business day.', 'is-success');
          } else {
            setStatus('Something went wrong sending your message. Please email us directly and we will respond right away.', 'is-error');
          }
        })
        .catch(function () {
          setStatus('Your message could not be sent. Please email us directly and we will respond right away.', 'is-error');
        })
        .then(function () {
          if (button) {
            button.disabled = false;
            button.textContent = original;
          }
        });
    });
  }

  function setStatus(message, kind) {
    status.textContent = message;
    status.className = 'form-status is-visible ' + kind;
  }
})();

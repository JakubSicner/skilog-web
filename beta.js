// "Chci do bety" buttons open the Tally signup form as a popup over the page.
// Tally's script is loaded only after the first click, so visitors who never click
// send nothing to Tally. Without JavaScript, or if the script is blocked, the link
// simply opens the form on tally.so.
(function () {
  var FORM_ID = 'Yj0lON';
  var SCRIPT = 'https://tally.so/widgets/embed.js';
  var loading = null;

  function loadTally() {
    if (window.Tally) return Promise.resolve();
    if (loading) return loading;
    loading = new Promise(function (resolve, reject) {
      var s = document.createElement('script');
      s.src = SCRIPT;
      s.async = true;
      s.onload = function () { window.Tally ? resolve() : reject(); };
      s.onerror = reject;
      document.head.appendChild(s);
    });
    return loading;
  }

  document.addEventListener('click', function (e) {
    var link = e.target.closest('[data-beta]');
    if (!link || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    link.setAttribute('aria-busy', 'true');
    loadTally()
      .then(function () {
        window.Tally.openPopup(FORM_ID, { layout: 'modal', width: 720, overlay: true });
      })
      .catch(function () { window.location.href = link.href; })
      .then(function () { link.removeAttribute('aria-busy'); });
  });
})();

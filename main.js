/* Cannella Construction — site script */
(function () {
  "use strict";

  /* ---------------------------------------------------------------
   * Cherrie "Lead" tracking
   * Fires a Lead event whenever a visitor taps/clicks ANY phone link
   * (href="tel:..."). Each link carries data-cta="..." so you can see
   * in Cherrie which button drove the call (header, hero, mobile bar…).
   *
   * One delegated listener covers every phone link on the page, so the
   * event fires exactly once per click. Do not add data-cherrie-event
   * attributes to these links, or the Lead would be counted twice.
   * ------------------------------------------------------------- */
  document.addEventListener("click", function (e) {
    var link = e.target.closest && e.target.closest('a[href^="tel:"]');
    if (!link) return;

    if (window.cherrie && typeof window.cherrie.track === "function") {
      window.cherrie.track("Lead", {
        properties: {
          method: "phone_call",
          cta_location: link.getAttribute("data-cta") || "unknown",
          phone_number: "+12095664341",
          device: window.matchMedia("(max-width: 640px)").matches ? "mobile" : "desktop"
        }
      });
    }
  });

  /* Gallery filter */
  var buttons = document.querySelectorAll(".filter");
  var items = document.querySelectorAll(".g-item");
  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var f = btn.getAttribute("data-filter");
      buttons.forEach(function (b) {
        var on = b === btn;
        b.classList.toggle("is-active", on);
        b.setAttribute("aria-pressed", on ? "true" : "false");
      });
      items.forEach(function (it) {
        var show = f === "all" || it.getAttribute("data-type") === f;
        it.classList.toggle("is-hidden", !show);
      });
    });
  });

  /* Footer year */
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();

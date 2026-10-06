/* THE GRAY YARD - shared on every page */

// Keep the footer copyright year current. The year written in the HTML
// stays as a fallback if JavaScript is off.
document.querySelectorAll("[data-current-year]").forEach(function (node) {
  node.textContent = new Date().getFullYear();
});

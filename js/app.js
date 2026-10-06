/* THE GRAY YARD - work sample filtering and card rendering
   Runs on solutions.html only; other pages skip it harmlessly. */

(function () {
  "use strict";

  var filtersEl = document.getElementById("filters");
  var gridEl = document.getElementById("solutions-grid");
  if (!filtersEl || !gridEl) return;

  var ALL = "All";

  // SOLUTIONS_DATA is a const in solutions-data.js: visible as a global
  // binding, but not a property of window.
  var data = (typeof SOLUTIONS_DATA !== "undefined" && Array.isArray(SOLUTIONS_DATA))
    ? SOLUTIONS_DATA
    : [];

  var active = ALL;

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  // Categories come from the data itself, in the order they first appear.
  // An entry without a category simply shows under "All".
  function visibleCategories() {
    var known = [];
    data.forEach(function (d) {
      if (d.category && known.indexOf(d.category) === -1) known.push(d.category);
    });
    return known;
  }

  function renderFilters() {
    filtersEl.textContent = "";
    var list = visibleCategories();

    // With one category or none, a filter row adds nothing.
    if (list.length < 2) { filtersEl.hidden = true; return; }
    filtersEl.hidden = false;

    [ALL].concat(list).forEach(function (name) {
      var btn = el("button", "filter", name);
      btn.type = "button";
      btn.setAttribute("aria-pressed", String(name === active));
      btn.addEventListener("click", function () {
        active = name;
        renderFilters();
        renderCards();
      });
      filtersEl.appendChild(btn);
    });
  }

  function buildCard(item) {
    var card = el("article", "card");

    if (item.image) {
      var img = el("img", "card-thumb");
      img.src = item.image;
      img.alt = "";
      img.loading = "lazy";
      card.appendChild(img);
    }

    var body = el("div", "card-body");

    if (item.category) body.appendChild(el("span", "pill", item.category));

    body.appendChild(el("h3", null, item.title || ""));
    if (item.summary) body.appendChild(el("p", null, item.summary));

    if (item.link) {
      var label = item.linkText || "View details";
      var fmt = (item.format || "link").toLowerCase();

      if (fmt === "embed" || fmt === "video" || fmt === "image") {
        // Opens inside the page so visitors can interact without leaving.
        var btn = el("button", "card-link", label);
        btn.type = "button";
        btn.addEventListener("click", function () { openViewer(item, fmt); });
        body.appendChild(btn);
      } else {
        // "link" and "pdf": a normal link. Web addresses and PDFs open in a new tab.
        var a = el("a", "card-link", label);
        a.href = item.link;
        if (/^https?:/i.test(item.link) || /\.pdf($|[?#])/i.test(item.link)) {
          a.target = "_blank";
          a.rel = "noopener";
        }
        body.appendChild(a);
      }
    }

    card.appendChild(body);
    return card;
  }

  /* ---------- on-page viewer ---------- */

  var viewer = document.getElementById("viewer");
  var viewerBody = document.getElementById("viewer-body");
  var viewerTitle = document.getElementById("viewer-title");
  var viewerOpen = document.getElementById("viewer-open");

  // Turns common YouTube / Vimeo page addresses into embeddable ones.
  function toEmbedUrl(url) {
    var m = url.match(/youtube\.com\/watch\?v=([\w-]+)/) || url.match(/youtu\.be\/([\w-]+)/);
    if (m) return "https://www.youtube-nocookie.com/embed/" + m[1];
    m = url.match(/vimeo\.com\/(\d+)/);
    if (m) return "https://player.vimeo.com/video/" + m[1];
    return url;
  }

  function openViewer(item, fmt) {
    if (!viewer || typeof viewer.showModal !== "function") {
      window.open(item.link, "_blank", "noopener");
      return;
    }
    viewerBody.textContent = "";
    viewerTitle.textContent = item.title || "";
    viewerOpen.href = item.link;

    var node;
    if (fmt === "image") {
      node = el("img", "viewer-img");
      node.src = item.link;
      node.alt = item.title || "";
    } else if (fmt === "video" && !/^(https?:)?\/\//i.test(item.link)) {
      node = el("video", "viewer-video");
      node.src = item.link;
      node.controls = true;
      node.playsInline = true;
    } else {
      // Interactive pages, hosted tools, and YouTube/Vimeo videos.
      node = el("iframe", "viewer-frame");
      node.src = toEmbedUrl(item.link);
      node.title = item.title || "Work sample";
      node.allow = "fullscreen; autoplay; clipboard-write";
      node.setAttribute("allowfullscreen", "");
      node.setAttribute("sandbox", "allow-scripts allow-same-origin allow-forms allow-popups allow-downloads");
    }
    viewerBody.appendChild(node);
    viewer.showModal();
  }

  if (viewer) {
    viewer.querySelector("[data-close-viewer]").addEventListener("click", function () { viewer.close(); });
    viewer.addEventListener("click", function (e) { if (e.target === viewer) viewer.close(); });
    // Empty the viewer on close so videos and interactive pages stop running.
    viewer.addEventListener("close", function () { viewerBody.textContent = ""; });
  }

  function renderCards() {
    gridEl.textContent = "";

    var items = active === ALL
      ? data
      : data.filter(function (d) { return d.category === active; });

    if (!items.length) {
      gridEl.appendChild(el("p", "empty", "Examples of our work will be shared here soon."));
    } else {
      items.forEach(function (item) { gridEl.appendChild(buildCard(item)); });
    }
  }

  renderFilters();
  renderCards();
})();

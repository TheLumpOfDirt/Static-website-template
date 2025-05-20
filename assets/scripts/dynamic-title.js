// assets/scripts/dynamic-title.js

document.addEventListener("DOMContentLoaded", () => {
  const includes = document.querySelectorAll("site-include");
  let loadedCount = 0;
  let titleSet = false;

  function setTitle() {
    const page = document.documentElement.getAttribute("data-page");
    const baseTitle =
      document.querySelector('meta[name="site-title"]')?.content ||
      document.title;
    let titleEl = document.querySelector("title");
    if (!titleEl) {
      // Only create <title> after all includes are loaded
      titleEl = document.createElement("title");
      document.head.appendChild(titleEl);
    }
    if (page && baseTitle) {
      titleEl.textContent = `${page} - ${baseTitle}`;
      document.title = titleEl.textContent;
    } else if (baseTitle) {
      titleEl.textContent = baseTitle;
      document.title = baseTitle;
    }
    titleSet = true;
  }

  function trySetTitle() {
    // Wait a tick for any last-minute mutations
    setTimeout(() => {
      if (!titleSet) setTitle();
    }, 0);
  }

  if (includes.length === 0) {
    trySetTitle();
  } else {
    includes.forEach((include) => {
      include.addEventListener("site-include-loaded", () => {
        if (titleSet) return;
        loadedCount++;
        if (loadedCount === includes.length) {
          trySetTitle();
        }
      });
    });
  }

  // Observe <head> for mutations to <meta> and <title>
  const headObserver = new MutationObserver(() => {
    if (!titleSet) setTitle();
  });
  headObserver.observe(document.head, { childList: true, subtree: true });
});

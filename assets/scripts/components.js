<<<<<<< HEAD
// assets/scripts/components.js

// Simple in-memory cache for fetched content
const cache = new Map();

class SiteInclude extends HTMLElement {
  static get observedAttributes() {
    return ["src"];
  }

  connectedCallback() {
    this._loadContent();
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (name === "src" && oldVal !== newVal) {
      this._loadContent();
    }
  }

  async _loadContent() {
    const src = this.getAttribute("src");
    if (!src) return;

    // Use BEM-style classes for the spinner
    this.innerHTML = `
    <div class="site-spinner" aria-live="polite" aria-busy="true">
      <span class="site-spinner__icon"></span> Loading...
    </div>
  `;

    // Use cached content if available
    if (cache.has(src)) {
      this.innerHTML = cache.get(src);
      this._dispatchLoadedEvent();
      return;
    }

    try {
      const response = await fetch(src);
      if (!response.ok) {
        throw new Error(`Failed to load ${src}: ${response.statusText}`);
      }
      const content = await response.text();

      this.innerHTML = content;
      cache.set(src, content);
      this._dispatchLoadedEvent();
    } catch (error) {
      console.error(error);
      this.innerHTML = `
        <div role="alert" style="color: red;">
          Error loading ${src}
        </div>
      `;
    }
  }

  _dispatchLoadedEvent() {
    this.dispatchEvent(
      new CustomEvent("site-include-loaded", { bubbles: true })
    );
  }
}

customElements.define("site-include", SiteInclude);
=======
// assets/scripts/components.js

// Simple in-memory cache for fetched content
const cache = new Map();

class SiteInclude extends HTMLElement {
  static get observedAttributes() {
    return ["src"];
  }

  connectedCallback() {
    this._loadContent();
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (name === "src" && oldVal !== newVal) {
      this._loadContent();
    }
  }

  async _loadContent() {
    const src = this.getAttribute("src");
    if (!src) return;

    // Use BEM-style classes for the spinner
    this.innerHTML = `
    <div class="site-spinner" aria-live="polite" aria-busy="true">
      <span class="site-spinner__icon"></span> Loading...
    </div>
  `;

    // Use cached content if available
    if (cache.has(src)) {
      this.innerHTML = cache.get(src);
      this._dispatchLoadedEvent();
      return;
    }

    try {
      const response = await fetch(src);
      if (!response.ok) {
        throw new Error(`Failed to load ${src}: ${response.statusText}`);
      }
      const content = await response.text();

      this.innerHTML = content;
      cache.set(src, content);
      this._dispatchLoadedEvent();
    } catch (error) {
      console.error(error);
      this.innerHTML = `
        <div role="alert" style="color: red;">
          Error loading ${src}
        </div>
      `;
    }
  }

  _dispatchLoadedEvent() {
    this.dispatchEvent(
      new CustomEvent("site-include-loaded", { bubbles: true })
    );
  }
}

customElements.define("site-include", SiteInclude);
>>>>>>> 6eb1454b1192890ed1a26bcd05e4c7499fae1180

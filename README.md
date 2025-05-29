# HTML/CSS Modular Website Template

A lightweight, scalable starter template with a modern, modular structure-ideal for learning, personal projects, or as a foundation for larger sites.

---

## 📁 Directory Structure

- `/assets` - fonts, icons, images, scripts, and CSS
  - `/styles` - organized into `base`, `components`, `themes`, and `utilities`
  - `/scripts` - JS for HTML includes and base tag handling
- `/modules` - page-specific content fragments (e.g., About, Contact)
- `/shared` - reusable partials (header, nav, footer)
- `.vscode` - editor settings for consistent development
- `index.html` - homepage
- `404.html` - custom not found page
- `robots.txt`, `sitemap.xml`, `site.webmanifest` - SEO and PWA support

---

## 🚀 Usage

1. **Open with [live-server](https://www.npmjs.com/package/live-server) for best results:**

2. **Global styles:**  
   Edit `/index.css` and the organized files under `/assets/styles/`.

3. **Add new pages:**

- Create a new folder under `/modules` (e.g., `/modules/about/`).
- Add your HTML and CSS files.
- Update navigation in `/shared/nav.html` to link to your new page.

4. **Edit shared components:**  
   Update `/shared/header.html`, `/shared/nav.html`, or `/shared/footer.html` as needed.

---

## 💡 Tips

- **Accessibility:**  
  Use utility classes from `/assets/styles/utilities/accessibility.css` for better inclusivity.
- **SEO:**  
  Update `robots.txt` and `sitemap.xml` for search engines.
- **Branding:**  
  Replace the favicon and update `/site.webmanifest` for PWA support.

---

## ✨ Credits

Created by Alena Lower.  
Inspired by modern web best practices.

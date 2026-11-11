# Wasim Akram · Portfolio

React, Vite, JavaScript and Tailwind CSS. Dark, responsive portfolio with reusable components and local assets.

## Run

```sh
npm install
npm run dev
```

Build with `npm run build`, then serve the output with `npm run preview`. Production files are in `dist/`.

## Pages and interactions

- Homepage: introduction, proof points, about, three featured case studies, services, searchable skills, career timeline, education, and inquiry form.
- `#/case-studies/flyhomes`, `#/case-studies/enam`, `#/case-studies/patient-platform`: dedicated featured case studies.
- `#/case-studies/flows` and `#/case-studies/ola`: additional case studies accessible with the homepage filters or “View all case studies”.
- `#/services`: dedicated services page with six offerings and three project entry points.
- `#/contact?type=build-product` (also `improve-system` or `automate-workflow`): inquiry page with preselected project type.
- Hash-based pages work on static hosting without server rewrite rules and support refresh and browser history.

The contact form validates the fields and **prepares a mailto email draft**. The visitor then opens their email app to review and send it. There is no submission endpoint and no claim that a message was sent. The direct email link is always available. Form data stays in memory until the visitor chooses to open an email draft.

## Content and assets

Edit `src/data/portfolio.js` for profile information, proof points, projects, skills, services, employment and education.

The latest user-supplied portfolio brief supersedes the original PDF for current role, dates, skills and metrics. It adds Akalinfo and Agoda, updates HealthPlix employment dates, and supplies Flyhomes performance figures. **The downloadable `public/Wasim_Akram_Resume.pdf` remains the originally supplied PDF and needs a revised copy to match the new content before external publication.** The original PDF also includes phone and reference contact information; replace `profile.resume` with an approved public version if desired.

- `profile.headshot`: portrait asset displayed in the navigation and footer logo, with a monogram fallback. The homepage hero uses the engineering note.
- `profile.teamPhoto`: optional approved real team photo, shown in Services when supplied.
- Project `demo` URLs are empty until real URLs are supplied; no placeholder links render. GitHub profile and repository links have been removed.
- No fictional team photos, product screenshots, or AI demo are presented. A document-assistant demo can be added once a working demo and actual screenshots exist.
- Diagrams are original code-based conceptual illustrations with captions. Metrics are separately labeled; no daily growth curve or invented measurements are used.
- No third-party fonts or images are fetched. Portraits have intrinsic dimensions and optional team images use lazy loading.

Page composition and simple hash routing live in `src/App.jsx`; reusable UI lives in `src/components/`. Styles live in `src/App.css` and `src/index.css`. Metadata is set in `index.html` and updated for client-side page navigation. Social crawlers may only read the default homepage metadata on static hash-based sites; per-page previews would require prerendered paths.

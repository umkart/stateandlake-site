# State & Lake Advisory, LLC — Website

Static marketing site for State & Lake Advisory, LLC, served by GitHub Pages from the `main` branch at **https://stateandlakeadvisory.com**. Plain HTML, CSS and JavaScript; no build step, framework or dependencies.

## Files

```
index.html            Home page
services.html         Services (four pillars)
case-studies.html     Composite, anonymized case studies
about.html            About and engagement model
insights.html         Insights index (The Loop + standard-setter sources)
insight-0*.html       The Loop papers (standalone, embedded CSS)
contact.html          Contact page
privacy.html          Privacy policy (draft; counsel review pending)
terms.html            Terms of engagement (draft; counsel review pending)
404.html              Not-found page
styles.css            Shared stylesheet (colors in :root)
nav.js                Mobile menu toggle
assets/               Images and icons
CNAME                 Custom domain for GitHub Pages — do not delete
robots.txt, sitemap.xml
```

`assets/css/` and `assets/js/` are leftovers from the original single-page template and are no longer used by any page.

## Making changes

Work on a branch, open a pull request, and merge to `main` only after review. GitHub Pages republishes within a few minutes of a merge.

## Pre-launch notes

- Every page carries a commented `noindex` tag marked `PRE-LAUNCH`; remove those on launch day (keep the one on 404.html).
- Contact page details and form endpoint are placeholders until business email and a form service are set up.
- Claims about experience, credentials and engagements must be confirmed by the owner before publication; case studies stay labeled as composites.

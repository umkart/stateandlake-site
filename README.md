# State and Lake, LLC — Website

A single-page marketing site for State and Lake, LLC. Plain HTML, CSS, and JavaScript. No build step, no framework, no dependencies. Any file can be edited directly in the GitHub web editor.

---

## What is in this repo

```
index.html              The whole home page
privacy.html            Privacy policy (draft template, needs review)
terms.html              Terms of engagement (draft template, needs review)
404.html                Shown when someone hits a bad link
robots.txt              Tells search engines the site is open for indexing
sitemap.xml             Lists the pages for search engines
.nojekyll               Tells GitHub Pages to serve the files as-is
assets/
  css/styles.css        All styling. Colors live at the top in :root
  js/main.js            Mobile menu, footer year, contact form submit
  img/favicon.svg       Browser tab icon
  img/apple-touch-icon.png
  img/og-image.png      Preview image when the link is shared
```

---

## Before publishing: the six things that must change

Search each file for `EDIT ME` to find these in place.

1. **Contact form endpoint.** In `index.html`, the form action is `https://formspree.io/f/YOUR_FORM_ID`. Until it is replaced, the form refuses to send and shows a warning. See "Connecting the contact form" below.
2. **Email address.** `hello@stateandlakeadvisors.com` appears in `index.html` (contact block and structured data), `privacy.html`, and `terms.html`.
3. **Phone number.** `(312) 555-0192` is a placeholder in the 555 range and is not a working number. Replace it in `index.html` in both the contact block and the structured data, or delete the phone line entirely.
4. **Domain name.** `stateandlakeadvisors.com` appears in `index.html` (canonical link, social tags, structured data), `robots.txt`, and `sitemap.xml`.
5. **Rate ranges.** The comparison table in `index.html` lists $175 to $275 per hour. Confirm before it is public.
6. **Privacy and terms pages.** Both are starter drafts with `[DATE]` placeholders. They are not legal advice and should be reviewed by counsel.

---

## Publishing on GitHub Pages

### Step 1. Create the repository

Sign in to GitHub, click **+** in the top right, then **New repository**.

- **Repository name:** `stateandlake-site` (any name works; see the domain note below)
- **Visibility:** Public. GitHub Pages is free only for public repos on the free plan
- Do **not** add a README, .gitignore, or license, since this folder already has what it needs
- Click **Create repository**

### Step 2. Upload the files

On the new empty repository page, click **uploading an existing file**.

Drag the **contents** of this folder into the browser window, not the folder itself. GitHub keeps the `assets` subfolders intact when you drag them in.

One caution: `.nojekyll` starts with a dot, so it may be hidden in Finder or File Explorer. On Mac press `Cmd + Shift + .` to reveal hidden files. If it does not upload, the site still works, but any future folder starting with an underscore would be ignored.

Type a commit message like `Initial site` and click **Commit changes**.

### Step 3. Turn on GitHub Pages

In the repository, go to **Settings**, then **Pages** in the left sidebar.

- **Source:** Deploy from a branch
- **Branch:** `main`, folder `/ (root)`
- Click **Save**

Wait one to two minutes, then refresh. The URL appears at the top of that page:

`https://YOUR-USERNAME.github.io/stateandlake-site/`

### Step 4. Check it

Open the URL on a laptop and on a phone. Confirm the menu button works on mobile, every nav link jumps to the right section, and the footer year is correct.

### Step 5 (optional). Connect a custom domain

Buy the domain first, then in **Settings > Pages > Custom domain**, enter it and click **Save**. GitHub creates a `CNAME` file in the repo automatically.

At the domain registrar, add these DNS records:

| Type | Name | Value |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | YOUR-USERNAME.github.io |

DNS changes can take anywhere from a few minutes to a day. Once it resolves, tick **Enforce HTTPS** on the same Pages settings screen.

Note on paths: the site uses relative paths on the home page, so it works both at a `github.io/repo-name/` address and at a custom domain. The `privacy.html`, `terms.html`, and `404.html` pages use root-relative paths (`/assets/...`), which display correctly on a custom domain or on a repo named `YOUR-USERNAME.github.io`. If you stay on a project-repo URL long term, either rename the repo to `YOUR-USERNAME.github.io` or change those three files to use `assets/...` instead of `/assets/...`.

---

## Connecting the contact form

GitHub Pages serves static files only, so it cannot process a form on its own. Use a form service. Formspree's free tier handles 50 submissions a month, which is usually plenty for a boutique practice.

1. Sign up at formspree.io and create a new form
2. Copy the endpoint it gives you, which looks like `https://formspree.io/f/abcdwxyz`
3. In `index.html`, find `action="https://formspree.io/f/YOUR_FORM_ID"` and replace the whole URL
4. Commit the change and submit a test message from the live site

The JavaScript submits in the background so the visitor stays on the page and sees a confirmation message. The hidden `_gotcha` field is a spam trap. Leave it in place and leave it empty.

Alternatives that work the same way: usebasin.com, and Netlify Forms if the site is ever moved to Netlify.

---

## Editing the site later

Every edit can be done in the browser. Open the file on GitHub, click the pencil icon, make the change, and click **Commit changes**. The live site updates within about a minute.

**To change a color:** open `assets/css/styles.css` and edit the values in the `:root` block at the top. Every use of that color updates at once.

**To add a service:** in `index.html`, find the `SERVICES` comment, copy one full `<div class="pillar-card">` block, paste it below, and change the number, heading, and list items. The grid handles the layout.

**To add a page:** copy `privacy.html`, rename it, replace the content inside `<main>`, and add a link to it in the footer or nav. The stylesheet and script are already wired up, which is why the CSS and JS live in their own files rather than inside the page.

**To preview changes before they are live:** download the repo as a zip and open `index.html` directly in a browser. Everything works locally except the contact form.

---

## Accuracy note

Several claims on the page are specific and checkable: years of experience, tenure at EY, CPA licensure, senior director experience at a public company, and the illustrative engagement scenarios. Confirm each one reads accurately before the site goes public, since this is the kind of copy a prospective client or a state board may hold you to. The scenarios are labeled as anonymized composites, and that labeling should stay in place.

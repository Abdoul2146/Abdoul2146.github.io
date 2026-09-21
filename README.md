# Abdulhakim Sulaiman — Portfolio

A complete, responsive portfolio titled **Computer Engineer / Software Engineer**.

The site uses HTML, CSS and a small JavaScript file. There is no build step, package installation, Python server, database or API key. All page content is in the HTML, fonts use your visitor's system fonts, and all logos are included locally.

There are two distinct downloads: the **software engineering résumé** in the introduction and experience sections, and the **academic CV** in the research section. An editable Word copy of the engineering résumé is included in `editable/`.

## Open it immediately

1. Extract the ZIP.
2. Open the `Abdulhakim_Portfolio` folder.
3. Double-click `index.html`.

The page works directly from your computer. External project links need an internet connection. The menu and current year use JavaScript; the content and expandable project archive are standard HTML.

## Deploy quickly with Netlify

1. Sign in to Netlify and open [Netlify Drop](https://app.netlify.com/drop).
2. Drag the extracted `Abdulhakim_Portfolio` folder into the upload area. Upload the folder that directly contains `index.html`, not the ZIP.
3. Open the site URL Netlify provides. No build command is needed.
4. Use your site's settings to choose an available site name or connect a domain.

To update the page later, edit the files and upload the complete folder again through the site's deploy area.

[Official Netlify deployment guide](https://docs.netlify.com/deploy/create-deploys/)

## Deploy as your GitHub homepage

1. In your `Abdoul2146` GitHub account, create a public repository named `abdoul2146.github.io`. If that repository already exists, update it instead of creating another one.
2. Upload the **contents** of `Abdulhakim_Portfolio` to the repository's root. `index.html` must be directly in the root, with `styles.css`, `script.js` and the `assets` folder beside it.
3. Commit the files to `main`.
4. Open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, then select **main** and **/(root)**. Save.
5. Wait for GitHub to finish publishing, then use **Visit site** in Pages settings. That is the public homepage link to use in your application form.

The included `.nojekyll` file is intentional; keep it if your upload method includes it. A regular project repository also works because all local assets use relative paths.

[Official GitHub Pages guide](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)

## Files

| File | Purpose |
| --- | --- |
| `index.html` | All text, project entries, experience, research, links and page metadata |
| `styles.css` | Colour palette, layout, responsive behaviour and print styles |
| `script.js` | Mobile navigation, active desktop navigation and current year |
| `assets/favicon.svg` | The `as` browser-tab icon |
| `assets/Abdulhakim_Sulaiman_Resume.pdf` | Professional software engineering résumé |
| `assets/Abdulhakim_Sulaiman_CV.pdf` | Academic CV, linked from the research section |
| `editable/Abdulhakim_Sulaiman_Resume.docx` | Editable Word source for the professional résumé |
| `assets/logos/` | Local technology, social and official app logos, with source and license records |
| `.nojekyll` | Keeps GitHub Pages from treating the site as a Jekyll project |
| `README.md` | These instructions; it is not displayed on the homepage |

## Make changes

- **Text and links:** open `index.html` in VS Code or any text editor. The page sections use descriptive IDs: `home`, `work`, `experience`, `about`, `research` and `contact`.
- **Projects:** copy one `<article class="project-card">` for a featured project, or an `<article class="archive-row">` for an entry in the expandable archive. Update the title, description, technologies and links.
- **Colours:** change the variables at the top of `styles.css`. `--bg` controls the navy background; `--accent` controls the mint accent.
- **Professional résumé:** replace `assets/Abdulhakim_Sulaiman_Resume.pdf` with a new PDF using the same filename. The introduction and experience links will continue to work.
- **Academic CV:** replace `assets/Abdulhakim_Sulaiman_CV.pdf` with a new PDF using the same filename. The research section link will continue to work.
- **Contact:** search for your email address in `index.html` and update every occurrence if it changes.
- **Roles and dates:** edit the current positions in both the introduction and experience sections when your employment changes.
- **Website title:** edit `<title>` and the `og:title` value in the document head.

## Profile photo

The header uses the square head-and-shoulders crop at `assets/profile.jpg`. The original portrait remains at `assets/abdul.jpg`. The existing styling displays the crop as a circular photo at 64 pixels on desktop and 42–54 pixels on smaller screens. The empty `alt` is intentional because the adjacent name already identifies you.

## Logo sources

Technology and social logos are original Devicon assets with the MIT license included in `assets/logos/DEVICON-LICENSE.txt`. JobSphere, PrimeScan, NGOJobSite and Live Football Score icons come from their exact official Google Play listings. Source URLs are recorded in `assets/logos/ASSET-SOURCES.md` and `.json`; app artwork belongs to its respective publisher. Text monograms remain on projects where no official icon was supplied.

The site displays your professional email, phone number and city as supplied in your CVs. The supplied downloads contain only professional information.

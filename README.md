# The Gray Yard site: publish and update guide

The site is plain files (HTML, CSS, JavaScript). There is no build step and no
database. Whatever is in this folder is the website.

```
index.html          Home
solutions.html      Solutions + work samples (shows "coming soon" until you add some)
contact.html        Contact
css/style.css       All styling and colors
js/solutions-data.js   YOUR WORK SAMPLES LIVE HERE (edit this most)
js/app.js           The engine that draws the samples (rarely edit)
js/site.js          Keeps the footer year current (no need to edit)
assets/tGYLogo.png  Logo
assets/solutions/   Put sample files here (images, PDFs, videos, tools)
assets/solutions/_template/   Starter for an interactive sample
```

## Publish it the first time (GitHub Pages, free)

1. Sign in at github.com and create a new **public** repository, e.g. `thegrayyard`.
2. Open the repository, choose **Add file > Upload files**, and drag in the
   *contents* of this folder (so `index.html` sits at the top level, not inside
   another folder). Choose **Commit changes**.
3. Go to **Settings > Pages**. Under Source choose **Deploy from a branch**,
   branch **main**, folder **/ (root)**, then Save.
4. After a minute or two the site is live at
   `https://YOUR-USERNAME.github.io/thegrayyard/`.

### Use your own address (thegrayyard.com)

1. Buy the domain from any registrar (this is the only cost, roughly a yearly fee).
2. In **Settings > Pages > Custom domain**, enter the domain and Save.
3. At your registrar, add the DNS records GitHub shows you (GitHub's
   "Configuring a custom domain for your GitHub Pages site" page lists them).
4. When it is available, tick **Enforce HTTPS**.

`contact@thegrayyard.com` is a separate service from the website. Your registrar
or an email provider needs to set up that mailbox or a forwarding address.

## Update the site afterward

Every change is the same three steps: change a file, commit, wait about a minute.
Visitors see the new version after GitHub finishes publishing.

### Change text (headlines, descriptions, contact details)
1. Open the file on GitHub (for example `index.html`).
2. Click the pencil icon, edit the words between the tags, and click **Commit changes**.

### Add a work sample
1. **Upload the sample's files** to `assets/solutions/` (open the folder, then
   **Add file > Upload files**).
2. **Add an entry** to `js/solutions-data.js`: open the file, click the pencil,
   copy one of the blocks, paste it after the last one, and edit the values.
   The file's top comment lists every field and shows ready-made examples.
   Categories are optional and can be any label; filter buttons appear
   automatically once two or more different categories are in use.
3. Click **Commit changes**.

How each format is added:

| Sample type | In the data entry | What to upload |
|---|---|---|
| PDF or document | `format: "pdf"`, `link: "assets/solutions/name.pdf"` | the PDF |
| Interactive tool visitors can use | `format: "embed"`, `link: "assets/solutions/my-tool/index.html"` | a folder containing `index.html` (copy `_template`) |
| Video on YouTube or Vimeo | `format: "video"`, `link: "https://youtu.be/..."` | nothing |
| Short video file | `format: "video"`, `link: "assets/solutions/demo.mp4"` | the video |
| Large image | `format: "image"`, `link: "assets/solutions/photo.jpg"` | the image |
| Outside website | leave `format` out, `link: "https://..."` | nothing |

### Remove a work sample
Delete its block from `js/solutions-data.js` and commit. If it was the last one
in a category, that filter button disappears on its own. If you remove every
sample, the page goes back to showing "Examples of our work will be shared here soon."

### Things to watch
- **Commas and quotes matter** in `solutions-data.js`. Each block ends with a
  comma except the last. A missing comma or quote hides the whole samples
  section. If that happens, open the file's **History** and revert the commit.
- **File sizes:** the site must stay under 1 GB, and (as far as I know) files
  uploaded through the browser are limited to about 25 MB each. Put longer videos
  on YouTube or Vimeo and link them.
- **Public by design:** on GitHub's free plan the repository is public. Never
  upload anything confidential.
- **Check your change:** open the live site after each commit. You can also
  preview locally by double-clicking `index.html` before you upload.
- **Footer year:** updates itself each year (handled by `js/site.js`).

# Ankit Kumar Premium Developer Portfolio

## Run locally
1. Extract the ZIP and open the folder in VS Code.
2. Open Terminal → New Terminal.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open the localhost URL printed in the terminal.

## Personalize before publishing
- Add your real profile image as `public/profile.jpg` (square image recommended).
- Add your resume PDF as `public/resume.pdf`. The hero button downloads this file.
- In `src/main.jsx`, replace `YOUR-USERNAME` with your GitHub username.
- Replace `YOUR-LINKEDIN` with your LinkedIn profile slug.
- Replace `your.email@example.com` with your real email address.
- Replace `FORMSUBMIT_EMAIL` in the fetch URL with your inbox email address. FormSubmit may send a first-time activation email; approve it to activate form delivery.
- Replace project repository URLs with your actual repositories. Add live demo URLs where available.
- Verify all internship and training details before publishing.

## Contact form
This version uses FormSubmit's AJAX endpoint. It will not send until you replace `FORMSUBMIT_EMAIL` with your email address and complete any first-time activation requested by FormSubmit. For production, use a backend or trusted form service and never put private API keys in frontend code.

## Build for deployment
Run `npm run build`. The production site is generated in `dist/`.
Deploy to Vercel or Netlify using build command `npm run build` and output folder `dist`.

## Included features
Premium dark styling, light/dark toggle with saved preference, responsive navigation, reveal-on-scroll animations, profile photo slot, resume download, GitHub/LinkedIn links, project filters, and contact form.

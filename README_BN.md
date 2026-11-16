# Namaz Time — Official Website (Version 4)

এই ZIP-এর ফাইলগুলো সরাসরি GitHub repository-এর মূল ফোল্ডারে (root) আপলোড করার জন্য সাজানো। ZIP Extract করলে `index.html` root-এ পাবেন।

## ওয়েবসাইটের পেজ
- `index.html` — Home
- `about.html` — About the App
- `privacy.html` — Privacy Policy
- `contact.html` — Contact Developer
- `styles.css` — responsive design
- `site.js` — বাংলা/English toggle
- `favicon.svg` — site icon
- `404.html` — not-found page
- `_headers` — Cloudflare Pages-এর জন্য security response headers
- `PUBLISH_CHECKLIST_BN.md` — প্রকাশের পর পরীক্ষা করার তালিকা

## iPhone থেকে GitHub-এ আপলোড
1. iPhone-এর Files app-এ ZIP ফাইলটি খুলে Extract করুন।
2. Safari-তে https://github.com/ খুলে Sign in করুন।
3. `+` → **New repository** চাপুন।
4. Repository name দিন `namaz-time-website`; **Public** নির্বাচন করে Create করুন।
5. Repository-এর মূল পেজে **Add file** → **Upload files** চাপুন।
6. Extract করা ফোল্ডারের ভেতরের সব ফাইল নির্বাচন করুন—parent folder নয়। `index.html` এবং `_headers` যেন repository-এর root-এ থাকে।
7. Commit message দিন `Add Namaz Time website` এবং **Commit changes** চাপুন।

GitHub-এর browser upload-এ একবারে সর্বোচ্চ 100টি file upload করা যায়; এই website package তার অনেক কম।

## Cloudflare Pages-এ বিনামূল্যে প্রকাশ
1. https://dash.cloudflare.com/ খুলে account তৈরি/Sign in করুন।
2. **Workers & Pages** → **Create application** → **Pages** → **Connect to Git** নির্বাচন করুন।
3. GitHub authorize করে `namaz-time-website` repository নির্বাচন করুন।
4. Framework preset: **None**; Production branch: `main`; Root directory: `/` বা default রাখুন।
5. Build command: `exit 0`; Build output directory: `.` দিন। এটি static HTML site, তাই আলাদা build process নেই।
6. **Save and Deploy** চাপুন। Deployment সফল হলে Cloudflare একটি `*.pages.dev` URL দেখাবে।

Cloudflare-এর official guide: https://developers.cloudflare.com/pages/framework-guides/deploy-anything/ এবং https://developers.cloudflare.com/pages/configuration/git-integration/।

## Security headers
`_headers` ফাইলে browser security headers দেওয়া আছে। Cloudflare Pages static assets-এর response-এ এই ফাইলের নিয়ম প্রয়োগ করে। অন্য hosting provider ব্যবহার করলে তাদের সমতুল্য header configuration আলাদাভাবে সেট করতে হবে।

## Privacy Policy সতর্কতা
বর্তমান Android starter source পরীক্ষা করে নীতিতে বলা হয়েছে যে অ্যাপটি approximate ও precise location permission চায়, লোকেশন ডিভাইসে নিয়ে Karachi method ও Hanafi Asr অনুযায়ী সময় হিসাব করে এবং UI-তে latitude/longitude দেখায়। পরীক্ষা করা starter source-এ developer server-এ coordinate upload করার endpoint নেই। তবে final APK/AAB, সব dependency/SDK, permission ও data flow পুনরায় যাচাই করে তবেই Google Play Console-এর Data safety তথ্য জমা দিতে হবে।

ওয়েবসাইটের ভাষা পছন্দ browser local storage-এ থাকে। এই website version-এ analytics, ads, external fonts, remote scripts বা contact form নেই। Hosting provider সাধারণ technical request information প্রক্রিয়া করতে পারে।

## প্রকাশের আগে
- Privacy Policy-র বক্তব্য final Android app-এর সাথে মিলিয়ে নিন।
- Google Play-তে app প্রকাশিত না হওয়া পর্যন্ত Play Store download button/link যোগ করবেন না।
- iPhone ও Android browser-এ চারটি page, language toggle, email link ও 404 page পরীক্ষা করুন।
- `https://<your-pages-subdomain>.pages.dev/privacy.html` খুলে Privacy Policy public access পরীক্ষা করুন।

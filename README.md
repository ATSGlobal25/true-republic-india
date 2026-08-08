# True Republic India 🇮🇳

**An e-news platform by the people, for the people.**

## What is included

- Responsive Hindi/English news homepage
- True Republic India branding and vector logo fallback
- Mobile OTP registration/login
- KYC submission and manual admin review
- Member article, image, video and PDF publishing
- Public member-news feed
- Admin KYC review panel at `/admin.html`
- Health endpoint at `/health`
- Render deployment configuration

## Run locally

```bash
npm install
npm start
```

Then open `http://localhost:4000`.

Copy `.env.example` to `.env` and set real production secrets before going live.

## Environment

Required production values include:

- `JWT_SECRET` — long random secret used for sessions
- `ADMIN_PASSWORD` — strong password for KYC review
- SMS gateway variables if real OTP delivery is enabled

## Deployment

The repository includes `render.yaml` for a Node web service. Set `ADMIN_PASSWORD` and any SMS credentials in the hosting provider's secret/environment settings.

### Important storage note

The current application uses local JSON files and local upload folders. Many cloud web services use ephemeral disks, so production deployments should move user/KYC data and uploaded media to a persistent database/object-storage service before accepting real users. **Do not commit KYC documents, user media, `.env`, or production credentials to Git.**

## Security

KYC files are not exposed as a public static directory. Admin document access is routed through the password-protected KYC review endpoint.

Before public launch, add rate limiting, a production SMS provider, persistent database/storage, stronger admin authentication, audit logging, and a proper payment gateway if donations are enabled.

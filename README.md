# True Republic India

An e-news platform by the people, for the people.

## Project

This repository contains the True Republic India web application, including the public news interface, member registration/KYC flow, content publishing APIs, and admin KYC review interface.

## Run locally

```bash
npm install
npm start
```

The server serves the `public` directory and exposes the API routes under `/api`.

## Configuration

Copy `.env.example` to `.env` and configure the required values before running the production application.

> Never commit real secrets, OTP credentials, JWT secrets, database credentials, or production environment files.

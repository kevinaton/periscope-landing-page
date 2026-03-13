# Periscope Landing Page

Production-ready Docker setup for deploying this Vite + React static site on EC2.

## Prerequisites

- Docker installed on the EC2 instance
- Port `80` open in the EC2 Security Group

## Run with Docker

Build and run:

```bash
docker build -t periscope-landing-page .
docker run -d --name periscope-landing-page -p 80:80 --restart unless-stopped periscope-landing-page
```

## Run with Docker Compose

```bash
docker compose up -d --build
```

## Health Check

The container exposes a health endpoint:

```bash
curl http://localhost/health
```

Expected response:

```text
ok
```

## EC2 Deployment (quick flow)

```bash
# 1) SSH into EC2
ssh -i /path/to/key.pem ec2-user@<EC2_PUBLIC_IP>

# 2) Clone and enter repo
git clone <your-repo-url>
cd periscope-landing-page

# 3) Start container
docker compose up -d --build

# 4) Verify
curl http://localhost/health
```

Open `http://<EC2_PUBLIC_IP>` in your browser.

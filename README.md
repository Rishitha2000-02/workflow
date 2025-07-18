## CI/CD Pipeline for Web Application
Project Structure

├── index.js
├── package.json
├── .github
│ └── workflows
│ └── main.yml
├── README.md

## Web Application

- Created a simple Node.js app (`index.js`)
- Displays "CI/CD Demo App" on homepage
- Hosted in a GitHub repository

bash
npm init -y
npm install express

## GitHub Repository Setup

Created a new repo: https://github.com/<your-username>/<repo-name>

Pushed all files including .github/workflows/deploy.yml

Deploy Using GitHub Page Render
Deployed the app using deployment service
Connected the repo to the deployment platform
Configured automatic redeployment on push

## Live link: https://ci-cd-web-task2.onrender.com

## Tools Used
Node.js
GitHub Actions
Render for deployment

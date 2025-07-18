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

### OUTPUT

## Live link: https://ci-cd-web-task2.onrender.com

## GitHub Actions Workflow Success

- name: Checkout code
  uses: actions/checkout@v2

- name: Set up Node.js
  uses: actions/setup-node@v3

- name: Install dependencies
  run: npm install

- name: Run the App
  run: node app.js

<img width="1905" height="869" alt="Image" src="https://github.com/user-attachments/assets/8084e748-49ce-4ef8-89a9-9bfa887098f3" />
<img width="1817" height="766" alt="Image" src="https://github.com/user-attachments/assets/65ee8284-e23c-412c-bca5-e2fd5f2dbcbf" />

<img width="1323" height="833" alt="Image" src="https://github.com/user-attachments/assets/f44bed29-81d4-45d8-98df-7014f672c951" />
<img width="1342" height="874" alt="Image" src="https://github.com/user-attachments/assets/b0ecab36-fcec-499f-b0e0-c6582e2c4d37" />
<img width="1318" height="876" alt="Image" src="https://github.com/user-attachments/assets/c4a7741c-b6c2-4be5-ada6-f1e4a27f5365" />
<img width="1317" height="847" alt="Image" src="https://github.com/user-attachments/assets/94b58b92-058c-448a-9696-1f62b40d737c" />

<img width="1362" height="840" alt="Image" src="https://github.com/user-attachments/assets/75de7451-ff54-4516-bd73-88cb21d4f393" />

## GitHub Repo with .yml File

<img width="1872" height="877" alt="image" src="https://github.com/user-attachments/assets/cdc309d5-3c93-4039-b591-f031bebce8ee" />




## Tools Used
Node.js
GitHub Actions
Render for deployment

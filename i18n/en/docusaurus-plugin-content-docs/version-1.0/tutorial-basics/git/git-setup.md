---
sidebar_position: 1
title: Installing and Getting Started with Git
---

# Installing and Getting Started with Git

## Step 1: Installing Git

### Windows

1. Download the Git installer from the official website: [Git for Windows](https://gitforwindows.org/).
2. Run the downloaded installer and follow the default instructions.
3. Choose the text editor you want to use with Git (e.g., Notepad++, Visual Studio Code) during the installation.

### MacOS

1. On MacOS, you can install Git using [Homebrew](https://brew.sh/), a package manager. Open Terminal and run the following command:
   ```bash
   brew install git
   ```

### Linux

1. On Debian-based distributions (like Ubuntu), use the package manager:
   ```bash
   sudo apt-get update
   sudo apt-get install git
   ```

2. On Red Hat-based distributions (like Fedora), use:
   ```bash
   sudo dnf install git
   ```

## Step 2: Configuring Git

1. Open your terminal (or command prompt for Windows).
2. Configure your username with the command:
   ```bash
   git config --global user.name "Your Name"
   ```

3. Configure your email address with the command:
   ```bash
   git config --global user.email "your@email.com"
   ```

## Step 3: Creating a New Git Repository

1. Create a new folder for your project and navigate to it via the terminal.
   ```bash
   mkdir my_project
   cd my_project
   ```

2. Initialize a new Git repository in this folder.
   ```bash
   git init
   ```

## Step 4: Adding Files to Git Tracking

1. Add a file to your project (e.g., `index.html`).
2. Add the file to Git tracking.
   ```bash
   git add index.html
   ```

## Step 5: Making a Commit

1. Make a commit to save the changes.
   ```bash
   git commit -m "First commit: added index.html"
   ```

## Step 6: Common Operations

- **Check the repository status:**
  ```bash
  git status
  ```

- **View commit history:**
  ```bash
  git log
  ```

- **Modify a file and make a new commit:**
  ```bash
  git add modified_file
  git commit -m "Description of the change"
  ```

- **Fetch the latest changes from the remote repository:**
  ```bash
  git pull origin master
  ```

- **Push your commits to the remote repository:**
  ```bash
  git push origin master
  ```

Congratulations! You have now installed Git, configured your identity, created a local repository, and made your first commits. Explore further the advanced features of Git to make the most of this powerful version control tool.

---
sidebar_position: 2
title: Git with an Existing Project
---

# Working with an Existing Project

## Git Clone

When you want to work on an existing project, you use the `git clone` command to create a local copy of the remote repository on your machine.

1. Navigate to the directory where you want to clone the project.
   ```bash
   cd path/to/directory
   ```

2. Clone the repository using the `git clone` command with the repository URL:
   ```bash
   git clone https://repository-link.git
   ```

This will create a directory with the project name in your current directory, containing all the files from the repository. You now have a local copy ready to be modified.

## Git Status

The `git status` command is used to display the status of files in your working directory relative to the last commit.

1. Navigate to the cloned project directory.
   ```bash
   cd path/to/project
   ```

2. Run the `git status` command:
   ```bash
   git status
   ```

This command will show you modified files, files ready to be committed, and other useful information about the state of your repository.

## Git Rebase

The `git rebase` command is used to integrate changes from one branch onto another. This is often used to maintain a clean and linear commit history.

1. Make sure you are on the branch you want to update.
   ```bash
   git checkout my_branch
   ```

2. Perform a rebase with the target branch (e.g., `master`):
   ```bash
   git rebase master
   ```

3. Resolve any conflicts if there are any; follow Git's instructions.

4. After resolving conflicts, continue the rebase:
   ```bash
   git rebase --continue
   ```

5. Once the rebase is complete, update the remote branch:
   ```bash
   git push origin my_branch --force-with-lease
   ```

Caution: Use `--force` with care as it rewrites the history of the remote repository.

These `git clone`, `git status`, and `git rebase` commands are essential tools for working effectively with Git. Make sure you understand how to use them correctly for optimal version control management.

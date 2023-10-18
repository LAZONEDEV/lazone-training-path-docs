---
sidebar_position: 3
title: Git Convention
---

# General Rules

### 1. Test Before Committing

It is crucial to resist the temptation to commit code that is "thought" to be functional. Before committing, conduct meticulous tests to ensure proper functionality and avoid unintended side effects.

## 2. Have an Atomic Commit

An atomic commit focuses on a single subject. For example, fixing two different bugs should result in two distinct commits. This makes it easier for the team to understand changes and allows targeted rollbacks in case of issues.

## 3. Make Regular Commits

Regular commits maintain a clear, atomic, and easily integrable history. Avoid infrequent large commits to facilitate collaboration and minimize conflicts.

## 4. Avoid Non-functional Commits

Avoid commits of non-functional, incomplete, or code-breaking changes. Instead, use [stash](https://git-scm.com/docs/git-stash) to keep a clean working directory.

## 5. Have a Descriptive Commit Title

Informative commit titles ease understanding of changes. Avoid vague titles; clearly describe the commit content.

## 6. Add Context to Your Commit in the Body

Attach a body to your commit to provide details and context. This facilitates understanding of changes, even months later.

## 7. Ultimately Stand Out in the Context of What Changed and Why

Answer the questions "What changed?" and "Why did it change?" in the commit body without repeating the code itself.

## 8. Avoid Commented-out Code Blocks

Avoid commented-out code blocks in commits, as they are considered unnecessary changes.

# Formatting Rules

## 1. Use Conventional Commits Conventions

Commits will follow the specifications of [conventionalcommits](https://www.conventionalcommits.org/).

## 2. Additional Commit Types

In addition to types specified by [conventionalcommits](https://www.conventionalcommits.org/), use types derived from the [Angular](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#type) convention.

- **build**: changes affecting the build or external dependencies (examples: gulp, broccoli, npm)
- **ci**: changes to CI configuration files and scripts (scopes example: Travis, Circle, BrowserStack, SauceLabs).
- **docs**: changes to documentation.
- **perf**: changes resulting in performance improvement.
- **refactor**: changes not fixing a bug and not adding a feature.
- **style**: changes not affecting the code's meaning (spaces, formatting, missing semicolons, etc.)
- **test**: changes for adding tests or modifying existing tests.

## 3. Limit Commit Title Length

Limit the commit title to ideally 50 characters. The strict limit is 72 characters. Avoid superfluous content to remain concise.

## 4. Do Not End the Title with Punctuation

The commit title should not end with punctuation.

## 5. Have an Imperative Form Title

Use the imperative form to describe the commit's purpose clearly and concisely.

## 6. Separate Commit Title with a Line Break

Separate the commit title from the body with a line break unless there is no body.

## 7. Limit Body Lines

Limit commit body lines to 72 characters for readability.

## 8. Use Hyphens for Lists

Use a hyphen (-) with two spaces for lists in the commit body.

## 9. Use Impersonal Form

Avoid using personal pronouns (I, you, etc.) in the commit title and body. Prefer the impersonal or passive form.

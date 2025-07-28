
# 🧭 Git Onboarding Guide

**Welcome aboard!**  
This guide will help you start using Git effectively within our team and ensure smooth, consistent collaboration.

---

## 📌 Table of Contents

1. [Initial Git Setup](#1-initial-git-setup)  
2. [Basic Git Commands](#2-basic-git-commands)  
3. [Branching and Collaboration Guidelines](#3-branching-and-collaboration-guidelines)  
4. [Commit Message Rules](#4-commit-message-rules)  
5. [Precautions While Collaborating](#5-precautions-while-collaborating)  
6. [Git Best Practices](#6-git-best-practices)  
7. [Need Help?](#7-need-help)

---

## 1. 🛠️ Initial Git Setup

Run these commands once on your local machine:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@company.com"
```

Check your configuration:

```bash
git config --list
```

---

## 2. 📚 Basic Git Commands

| Task                             | Command                                  |
|----------------------------------|------------------------------------------|
| Clone a repo                     | `git clone <repo_url>`                   |
| Check status                     | `git status`                             |
| Create a new branch              | `git checkout -b feature/your-feature`   |
| Switch to an existing branch     | `git checkout branch-name`               |
| Stage changes                    | `git add .`                              |
| Commit changes                   | `git commit -m "Your message"`           |
| Push branch                      | `git push -u origin branch-name`         |
| Pull latest main                 | `git pull origin main`                   |
| Merge another branch             | `git merge branch-name`                  |
| View commit history              | `git log --oneline`                      |
| Undo last commit (keep changes)  | `git reset --soft HEAD~1`                |

---

## 3. 🌿 Branching and Collaboration Guidelines

- **Always pull the latest code** before starting your work:

```bash
git checkout main
git pull origin main
```

- **Create a new branch** for every task/feature:

```bash
git checkout -b feature/abc-123-add-login-form
```

### Naming Convention:

```
feature/<ticket-id>-<description>
bugfix/<ticket-id>-<bug-fix-name>
hotfix/<ticket-id>-<quick-fix>
```

- **Before pushing**, make sure your branch is up-to-date:

```bash
git fetch origin
git rebase origin/main
```

---

## 4. 📝 Commit Message Rules

Clear commit messages help everyone understand the code history.

### If linked to a ticket:

```
abc-123: Add login form with validation
```

### General Commit Format:

```
<ticket-id>: <brief description of changes>
```

### Examples:
- `abc-201: Fix login redirect issue`
- `abc-345: Add password strength indicator`
- `refactor: Optimize API call for performance`
- `docs: Add README instructions for setup`

### Avoid:
- "fix stuff"
- "changes"
- "updated code"

---

## 5. ⚠️ Precautions While Collaborating

### ✅ DOs:
- Pull latest changes frequently
- Resolve merge conflicts before pushing
- Communicate if you are stuck
- Use meaningful commit messages

### 🚫 DON’Ts:
- Never commit directly to `main`
- Never force push unless necessary
- Never commit sensitive data

---

## 6. 🌟 Git Best Practices

- Commit often
- Write clear commit messages (include ticket ID)
- Review diffs before committing
- Use `.gitignore` to avoid committing unnecessary files
- Clean up merged branches:

```bash
git branch --merged
git branch -d old-branch
```

---

## 7. 💬 Need Help?

If you're ever unsure or stuck:

- Contact your **team lead**
- Refer to the internal Git guide
- Ask in the **#dev-help** Slack/Teams channel

---

> **Reminder:** Git is your source of truth. Keep it clean, consistent, and documented.

Welcome again, and happy coding! 🚀

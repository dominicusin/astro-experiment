---
title: "github-cheat-sheet"
description: "Курируемый awesome-список: github-cheat-sheet"
layout: awesome/single
awesome_repo: "https://github.com/tiimgreen/github-cheat-sheet"
awesome_readme: "README.md"
---

> Источник: [github-cheat-sheet](https://github.com/tiimgreen/github-cheat-sheet) — синхронизируется из внешнего репозитория как sparse-субмодуль (только список).

A collection of cool hidden and not so hidden features of Git and GitHub. This cheat sheet was inspired by [Zach Holman](https://github.com/holman)'s [Git and GitHub Secrets](http://confreaks.tv/videos/aloharuby2012-git-and-github-secrets) talk at Aloha Ruby Conference 2012 ([slides](https://speakerdeck.com/holman/git-and-github-secrets)) and his [More Git and GitHub Secrets](https://vimeo.com/72955426) talk at WDCNZ 2013 ([slides](https://speakerdeck.com/holman/more-git-and-github-secrets)).

*Shortlink: [`http://git.io/sheet`](http://git.io/sheet)*

*Read this in other languages: [English](https://github.com/tiimgreen/github-cheat-sheet/blob/main/README.md), [한국어](https://github.com/tiimgreen/github-cheat-sheet/blob/main/README.ko.md), [日本語](https://github.com/tiimgreen/github-cheat-sheet/blob/main/README.ja.md), [简体中文](https://github.com/tiimgreen/github-cheat-sheet/blob/main/README.zh-cn.md), [正體中文](https://github.com/tiimgreen/github-cheat-sheet/blob/main/README.zh-tw.md).*

GitHub Cheat Sheet is sponsored by [Snapshot: create interactive professional-quality product photos using AI](https://www.snapshotapp.io/)

## Table of Contents
  - [GitHub](#github)
    - [Ignore Whitespace](#ignore-whitespace)
    - [Adjust Tab Space](#adjust-tab-space)
    - [Commit History by Author](#commit-history-by-author)
    - [Cloning a Repository](#cloning-a-repository)
    - [Branch](#branch)
      - [Compare all Branches to Another Branch](#compare-all-branches-to-another-branch)
      - [Comparing Branches](#comparing-branches)
      - [Compare Branches across Forked Repositories](#compare-branches-across-forked-repositories)
    - [Gists](#gists)
    - [Git.io](#gitio)
    - [Keyboard Shortcuts](#keyboard-shortcuts)
    - [Line Highlighting in Repositories](#line-highlighting-in-repositories)
    - [Closing Issues via Commit Messages](#closing-issues-via-commit-messages)
    - [Cross-Link Issues](#cross-link-issues)
    - [Locking Conversations](#locking-conversations)
    - [CI Status on Pull Requests](#ci-status-on-pull-requests)
    - [Filters](#filters)
    - [Syntax Highlighting in Markdown Files](#syntax-highlighting-in-markdown-files)
    - [Emojis](#emojis)
    - [Images/GIFs](#imagesgifs)
      - [Embedding Images in GitHub Wiki](#embedding-images-in-github-wiki)
    - [Quick Quoting](#quick-quoting)
    - [Pasting Clipboard Image to Comments](#pasting-clipboard-image-to-comments)
    - [Quick Licensing](#quick-licensing)
    - [Task Lists](#task-lists)
      - [Task Lists in Markdown Documents](#task-lists-in-markdown-documents)
    - [Relative Links](#relative-links)
    - [Metadata and Plugin Support for GitHub Pages](#metadata-and-plugin-support-for-github-pages)
    - [Viewing YAML Metadata in your Documents](#viewing-yaml-metadata-in-your-documents)
    - [Rendering Tabular Data](#rendering-tabular-data)
    - [Rendering PDF](#rendering-pdf)
    - [Revert a Pull Request](#revert-a-pull-request)
    - [Diffs](#diffs)
      - [Rendered Prose Diffs](#rendered-prose-diffs)
      - [Diffable Maps](#diffable-maps)
      - [Expanding Context in Diffs](#expanding-context-in-diffs)
      - [Diff or Patch of Pull Request](#diff-or-patch-of-pull-request)
      - [Rendering and diffing images](#rendering-and-diffing-images)
    - [Hub](#hub)
    - [Contribution Guidelines](#contribution-guidelines)
      - [CONTRIBUTING file](#contributing-file)
      - [ISSUE_TEMPLATE file](#issue_template-file)
      - [PULL_REQUEST_TEMPLATE file](#pull_request_template-file)
    - [Octicons](#octicons)
    - [GitHub Student Developer Pack](#github-student-developer-pack)
    - [GitHub Resources](#github-resources)
      - [GitHub Talks](#github-talks)
    - [SSH keys](#ssh-keys)
    - [Profile Image](#profile-image)
    - [Repository Templates](#repository-templates)
  - [Git](#git)
    - [Remove All Deleted Files from the Working Tree](#remove-all-deleted-files-from-the-working-tree)
    - [Previous Branch](#previous-branch)
    - [Stripspace](#stripspace)
    - [Checking out Pull Requests](#checking-out-pull-requests)
    - [Empty Commits](#empty-commits)
    - [Styled Git Status](#styled-git-status)
    - [Styled Git Log](#styled-git-log)
    - [Git Query](#git-query)
    - [Git Grep](#git-grep)
    - [Merged Branches](#merged-branches)
    - [Fixup and Autosquash](#fixup-and-autosquash)
    - [Web Server for Browsing Local Repositories](#web-server-for-browsing-local-repositories)
    - [Git Configurations](#git-configurations)
      - [Aliases](#aliases)
      - [Auto-Correct](#auto-correct)
      - [Color](#color)
    - [Git Resources](#git-resources)
      - [Git Books](#git-books)
      - [Git Videos](#git-videos)
      - [Git Articles](#git-articles)


## GitHub
### Ignore Whitespace
Adding `?w=1` to any diff URL will remove any changes only in whitespace, enabling you to see only the code that has changed.

![Diff without whitespace](https://camo.githubusercontent.com/797184940defadec00393e6559b835358a863eeb/68747470733a2f2f6769746875622d696d616765732e73332e616d617a6f6e6177732e636f6d2f626c6f672f323031312f736563726574732f776869746573706163652e706e67)

[*Read more about GitHub secrets.*](https://github.com/blog/967-github-secrets)

### Adjust Tab Space
Adding `?ts=4` to a diff or file URL will display tab characters as 4 spaces wide instead of the default 8. The number after `ts` can be adjusted to suit your preference. This does not work on Gists, or raw file views, but a [Chrome extension](https://chrome.google.com/webstore/detail/tab-size-on-github/ofjbgncegkdemndciafljngjbdpfmbkn) can automate this.

Here is a Go source file before adding `?ts=4`:

![Before, tab space example](http://i.imgur.com/GIT1Fr0.png)

...and this is after adding `?ts=4`:

![After, tab space example](http://i.imgur.com/70FL4H9.png)

### Commit History by Author
To view all commits on a repo by author add `?author={user}` to the URL.

```
https://github.com/rails/rails/commits/master?author=dhh
```

![DHH commit history](http://i.imgur.com/S7AE29b.png)

[*Read more about the differences between commits views.*](https://help.github.com/articles/differences-between-commit-views/)

### Cloning a Repository
When cloning a repository the `.git` can be left off the end.

```bash
$ git clone https://github.com/tiimgreen/github-cheat-sheet
```

[*Read more about the Git `clone` command.*](http://git-scm.com/docs/git-clone)

### Branch
#### Compare all Branches to Another Branch

If you go to the repo's [Branches](https://github.com/tiimgreen/github-cheat-sheet/branches) page, next to the Commits button:

```
https://github.com/{user}/{repo}/branches
```

... you would see a list of all branches which are not merged into the main branch.

From here you can access the compare page or delete a branch with a click of a button.

![Compare branches not merged into master in rails/rails repo - https://github.com/rails/rails/branches](http://i.imgur.com/0FEe30z.png)

#### Comparing Branches
To use GitHub to compare branches, change the URL to look like this:

```
https://github.com/{user}/{repo}/compare/{range}
```

where `{range} = master...4-1-stable`

For example:

```
https://github.com/rails/rails/compare/master...4-1-stable
```

![Rails branch compare example](http://i.imgur.com/tIRCOsK.png)

`{range}` can be changed to things like:

```
https://github.com/rails/rails/compare/master@{1.day.ago}...master
https://github.com/rails/rails/compare/master@{2014-10-04}...master
```

*Here, dates are in the format `YYYY-MM-DD`*

![Another compare example](http://i.imgur.com/5dtzESz.png)

Branches can also be compared in `diff` and `patch` views:

```
https://github.com/rails/rails/compare/master...4-1-stable.diff
https://github.com/rails/rails/compare/master...4-1-stable.patch
```

[*Read more about comparing commits across time.*](https://help.github.com/articles/comparing-commits-across-time/)

#### Compare Branches across Forked Repositories
To use GitHub to compare branches across forked repositories, change the URL to look like this:

```
https://github.com/{user}/{repo}/compare/{foreign-user}:{branch}...{own-branch}
```

For example:

```
https://github.com/rails/rails/compare/byroot:master...master
```

![Forked branch compare](http://i.imgur.com/Q1W6qcB.png)

### Gists
[Gists](https://gist.github.com/) are an easy way to work with small bits of code without creating a fully fledged repository.

![Gist](http://i.imgur.com/VkKI1LC.png?1)

Add `.pibb` to the end of any Gist URL ([like this](https://gist.github.com/tiimgreen/10545817.pibb)) in order to get the *HTML-only* version suitable for embedding in any other site.

Gists can be treated as a repository so they can be cloned like any other:

```bash
$ git clone https://gist.github.com/tiimgreen/10545817
```

![Gists](http://i.imgur.com/BcFzabp.png)

This means you also can modify and push updates to Gists:

```bash
$ git commit
$ git push
Username for 'https://gist.github.com':
Password for 'https://tiimgreen@gist.github.com':
```

However, Gists do not support directories. All files need to be added to the repository root.
[*Read more about creating Gists.*](https://help.github.com/articles/creating-gists/)

### Git.io
[Git.io](http://git.io) is a simple URL shortener for GitHub.

![Git.io](http://i.imgur.com/6JUfbcG.png?1)

You can also use it via pure HTTP using Curl:

```bash
$ curl -i http://git.io -F "url=https://github.com/..."
HTTP/1.1 201 Created
Location: http://git.io/abc123

$ curl -i http://git.io/abc123
HTTP/1.1 302 Found
Location: https://github.com/...
```

[*Read more about Git.io.*](https://github.com/blog/985-git-io-github-url-shortener)

### Keyboard Shortcuts
When on a repository page, keyboard shortcuts allow you to navigate easily.

 - Pressing `t` will bring up a file explorer.
 - Pressing `w` will bring up the branch selector.
 - Pressing `s` will focus the search field for the current repository. Pressing ↓ to select the “All GitHub” option changes the field to search all of GitHub.
 - Pressing `l` will edit labels on existing Issues.
 - Pressing `y` **when looking at a file** (e.g., `https://github.com/tiimgreen/github-cheat-sheet/blob/master/README.md`) will change your URL to one which, in effect, freezes the page you are looking at. If this code changes, you will still be able to see what you saw at that current time.

To see all of the shortcuts for the current page press `?`:

![Keyboard shortcuts](http://i.imgur.com/y5ZfNEm.png)

[Read more about search syntax you can use.](https://help.github.com/articles/search-syntax/)

### Line Highlighting in Repositories
Either adding, e.g., `#L52` to the end of a code file URL or simply clicking the line number will highlight that line number.

It also works with ranges, e.g., `#L53-L60`, to select ranges, hold `shift` and click two lines:

```
https://github.com/rails/rails/blob/master/activemodel/lib/active_model.rb#L53-L60
```

![Line Highlighting](http://i.imgur.com/8AhjrCz.png)

_…превью ограничено; полный список — в репозитории._

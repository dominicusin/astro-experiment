---
title: "awesome-shell"
description: "Курируемый awesome-список: awesome-shell"
layout: awesome/single
awesome_repo: "https://github.com/alebcay/awesome-shell"
awesome_readme: "README.md"
---

> Источник: [awesome-shell](https://github.com/alebcay/awesome-shell) — синхронизируется из внешнего репозитория как sparse-субмодуль (только список).

```
 █████╗ ██╗    ██╗███████╗███████╗ ██████╗ ███╗   ███╗███████╗
██╔══██╗██║    ██║██╔════╝██╔════╝██╔═══██╗████╗ ████║██╔════╝
███████║██║ █╗ ██║█████╗  ███████╗██║   ██║██╔████╔██║█████╗
██╔══██║██║███╗██║██╔══╝  ╚════██║██║   ██║██║╚██╔╝██║██╔══╝
██║  ██║╚███╔███╔╝███████╗███████║╚██████╔╝██║ ╚═╝ ██║███████╗
╚═╝  ╚═╝ ╚══╝╚══╝ ╚══════╝╚══════╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝
███████╗██╗  ██╗███████╗██╗     ██╗
██╔════╝██║  ██║██╔════╝██║     ██║
███████╗███████║█████╗  ██║     ██║
╚════██║██╔══██║██╔══╝  ██║     ██║
███████║██║  ██║███████╗███████╗███████╗
╚══════╝╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝
```

# Awesome Shell [![Awesome][awesome-badge]][awesome-link]

A curated list of awesome command-line frameworks, toolkits, guides and gizmos. Inspired by awesome-php. This awesome collection is also available on [Unix-Shell.ZEEF.com](https://unix-shell.zeef.com/caleb.xu).
- [Shells](#shells)
- [Command-Line Productivity](#command-line-productivity)
  - [Directory Navigation](#directory-navigation)
- [Customization](#customization)
- [For Developers](#for-developers)
- [System Utilities](#system-utilities)
- [Downloading and Serving](#downloading-and-serving)
- [Multimedia and File Formats](#multimedia-and-file-formats)
- [Applications](#applications)
- [Games](#games)
- [Shell Package Management](#shell-package-management)
- [Shell Script Development](#shell-script-development)
- [Guides](#guides)
- [**Awesome Zsh**][awesome-zsh]&nbsp; [![Awesome][awesome-badge]][awesome-zsh]
- [**Awesome Fish**][awesome-fish] [![Awesome][awesome-badge]][awesome-fish]
- [**Awesome Bash**][awesome-bash] [![Awesome][awesome-badge]][awesome-bash]
- [Other Awesome Lists](#other-awesome-lists)

## Shells

*Choose your base shell.*

* [bash](https://www.gnu.org/software/bash/) - GNU Project's shell (Bourne Again SHell)
* [elvish](https://elv.sh/) - Friendly, expressive shell features like anonymous functions and data structures
* [es](https://wryun.github.io/es-shell/) - The extensible shell, based on Plan 9's [rc](https://github.com/rakitzis/rc) shell
* [fish](https://fishshell.com) - Smart and user-friendly command line shell
* [ion](https://github.com/redox-os/ion) - A modern system shell that features a simple, yet powerful, syntax. It is written entirely in Rust.
* [ksh93](https://github.com/att/ast) - Korn Shell
* [mksh](https://github.com/MirBSD/mksh) - MirBSD Korn Shell
* [murex](https://github.com/lmorg/murex) - A smarter shell and scripting environment with advanced features designed for usability, safety and productivity (eg smarter DevOps tooling)
* [ngs](https://github.com/ngs-lang/ngs) - Fully featured scripting language created specifically for Ops. REPL is being developed.
* [nushell](https://github.com/nushell/nushell) - A modern shell written in Rust
* [oksh](https://github.com/ibara/oksh) - Portable OpenBSD ksh
* [osh](https://www.oilshell.org) - Bash compatible, with new/modern Unix shell language called Oil
* [pdksh](https://cvsweb.openbsd.org/cgi-bin/cvsweb/src/bin/ksh/) - Public domain Korn shell
* [powershell](https://docs.microsoft.com/en-us/powershell/scripting/overview) a cross-platform task automation and configuration management framework, consisting of a command-line shell and scripting language
* [shell++](https://github.com/alexst07/shell-plus-plus) - Friendly and modern functional and object oriented shell script language
* [shenv](https://github.com/shenv/shenv) - Simple shell version management
* [tcsh](https://www.tcsh.org/) - C shell with file name completion and command line editing
* [xonsh](https://xon.sh) - Python-ish, BASHwards-looking shell language and command prompt
* [yash](https://github.com/magicant/yash) - A POSIX-compliant command line shell with built-in support for completion and prediction based on command history
* [zsh](https://www.zsh.org) - Powerful shell with scripting language

## Command-Line Productivity

*Search, bookmarks, multiplexing, and other tools that make your terminal experience more productive.*

* [AdvancedNewFile](https://github.com/tanrax/terminal-AdvancedNewFile) - Fast creation of files and directories in a recursive way. Inspired by the Vim plugin.
* [ag](https://github.com/ggreer/the_silver_searcher) - Super fast string search through a directory hierarchy
* [aliases](https://github.com/sebglazebrook/aliases) - Contextual, dynamic, organized aliases for bash
* [arttime](https://github.com/reportaman/arttime) - Beauty of text art meets functionality of clock, timer, pomodoro++ time manager
* [autoenv](https://github.com/hyperupcall/autoenv) - Directory-based environments.
* [await](https://github.com/slavaGanzin/await) - single binary that run list of commands in parallel and waits for their termination
* [bartib](https://github.com/nikolassv/bartib) - A simple timetracker for the command line. It saves a log of all tracked activities as a plaintext file and allows you to create flexible reports.
* [bashhub](https://github.com/rcaloras/bashhub-client) - :cloud: Bash history in the cloud. Indexed and searchable.
* [boilr](https://github.com/tmrts/boilr) - A blazingly fast CLI tool for creating projects from boilerplate templates.
* [boom](https://github.com/holman/boom) - Store links and snippets in the command line
* [borg](https://github.com/ok-borg/borg) - A terminal based search engine for bash commands
* [broot](https://github.com/Canop/broot) - A better way to navigate directories
* [browsh](https://github.com/browsh-org/browsh) - The modern text-based browser
* [Buku](https://github.com/jarun/Buku) - Powerful command-line bookmark manager
* [byobu](https://www.byobu.org) - Text-based window manager and terminal multiplexer
* [cod](https://github.com/dim-an/cod) — A completion daemon for shell that learns when you invoke `--help` commands
* [CloudClip](https://github.com/skywind3000/CloudClip) - Your own clipboard in the cloud, copy and paste text with gist between different systems
* [ddgr](https://github.com/jarun/ddgr) - DuckDuckGo from the terminal
* [desk](https://github.com/jamesob/desk) - A lightweight workspace manager for the shell
* [direnv](https://github.com/direnv/direnv) - An environment switcher for the shell, compare with autoenv
* [dnote](https://github.com/dnote/dnote) - A simple command line notebook with multi-device sync and web interface
* [eureka](https://github.com/simeg/eureka/) - :bulb: CLI tool to input and store your ideas without leaving the terminal
* [fasd](https://github.com/clvv/fasd) - Command-line productivity booster, offers quick access to files and directories
* [fd](https://github.com/sharkdp/fd) - A simple, fast and user-friendly alternative to find.
* [foxy](https://github.com/s-p-k/foxy) - Plain text bookmarks for Firefox and surf browsers.
* [fselect](https://github.com/jhspetersson/fselect) - Find files with SQL-like queries.
* [funky](https://github.com/bbugyi200/funky) - Extends functionality of shell functions making them more powerful and flexible.
* [fz](https://github.com/changyuheng/fz) - Seamless fuzzy tab completion for z
* [fzf](https://github.com/junegunn/fzf) - A command-line fuzzy finder
* [gitmux](https://github.com/arl/gitmux) - Show Git status in Tmux status bar
* [googler](https://github.com/jarun/googler) - Google Search, Google Site Search, Google News from the terminal
* [googlr](https://github.com/Astranno/googlr) - Command line tool that lets you search Google from your terminal.
* [has](https://github.com/kdabir/has) - `has` helps you check presence of various command line tools and their versions on path
* [how2](https://github.com/santinic/how2) - `how2` finds the simplest way to do something in a unix shell. It's like `man`, but you can query it in natural language.
* [navi](https://github.com/denisidoro/navi) - An interactive cheatsheet tool for the command-line
* [hhighlighter](https://github.com/paoloantinori/hhighlighter) - Colorize words in a command output
* [hr](https://github.com/LuRsT/hr) - `<hr />` for your terminal
* [hss](https://github.com/six-ddc/hss) - An interactive parallel ssh client featuring autocomplete and asynchronous execution
* [hstr](https://github.com/dvorka/hstr) - Bash History Suggest Box
* [k](https://github.com/supercrabtree/k) - k is a Zsh script to make directory listings more readable, adding Git status, fileweight colors and rotting dates
* [k alias](https://github.com/lingtalfi/k) - get kool aliases (and more) working with a simple one-liner
* [lf](https://github.com/gokcehan/lf) - Terminal file manager written in Go, inspired by ranger
* [lf.sh](https://github.com/suewonjp/lf.sh) - Quickly search files with fewer typings and do many more (grepping, copying path to clipboard, etc)
* [lowcharts](https://github.com/juan-leon/lowcharts) - Draw low-resolution graphs in terminal
* [Lmod](https://lmod.readthedocs.io/en/latest/) - Lua-based Environment Modules that enhances Tcl-based modules while being backward compatible (compare to modules)
* [loop](https://github.com/Miserlou/Loop) - Write and control complex loops with as one-liners
* [marker](https://github.com/pindexis/marker) - Bookmark your shell commands
* [mackup](https://github.com/lra/mackup/) - Keep your application settings in sync (OS X/Linux)
* [mcfly](https://github.com/cantino/mcfly) - Fly through your shell history. Great Scot!
* [modules](http://modules.sourceforge.net/) - Classical Tcl-based Environment Modules managing the shell environment (compare to Lmod, direnv, and autoenv)
* [nnn](https://github.com/jarun/nnn) - File browser and disk usage analyzer with excellent desktop integration
* [ok-sh](https://github.com/secretGeek/ok-bash) - Do you work on many different projects? And in each project, are there commands you use that are specific to that project? You need a .ok file.
* [parallel](https://www.gnu.org/software/parallel/) - Build and execute shell command lines from standard input in parallel
* [pass](https://www.passwordstore.org/) - Manage passwords from the command line with GPG encryption and optional git integration.
* [pathpicker](https://github.com/facebook/PathPicker) - Accepts inputs like grep, searches, git etc; allows selecting files from the result of the input, which you can then open or provide as argument to a command.
* [pdd](https://github.com/jarun/pdd) - Tiny date, time diff calculator with timers
* [percol](https://github.com/mooz/percol) - Adds flavor of interactive filtering to the traditional pipe concept of UNIX shell
* [q](https://github.com/cal2195/q) - Vim like macro registers for your Bash and Zsh Shell
* [qfc](https://github.com/pindexis/qfc) - File-completion widget for Bash and Zsh
* [resh](https://github.com/curusarn/resh) - Contextual shell history for Zsh and Bash
* [rg](https://github.com/BurntSushi/ripgrep) - ripgrep is a line oriented search tool that combines the usability of The Silver Searcher with the raw speed of GNU grep
* [screen](https://www.gnu.org/software/screen/) - GNU terminal multiplexer
* [shell-history](https://github.com/pawamoy/shell-history) - Visualize your shell usage with Highcharts
* [SHML](https://github.com/odb/shml) - Style framework for the terminal (Shell Markup Language)
* [slugify](https://github.com/benlinton/slugify) - Command that converts filenames and directories to a web friendly format
* [sman](https://github.com/tokozedg/sman) - :bug: A command-line snippet manager
* [spark](https://github.com/holman/spark) - ▁▂▃▅▂▇ in your shell
* [spark.fish](https://github.com/jorgebucaran/spark.fish) - ▁▂▃▅ Sparkline Generator
* [sheet](https://github.com/oscardelben/sheet) -  Text snippets for the command line
* [spot](https://github.com/rauchg/spot) - Tiny file search utility
- [snips](https://github.com/srijanshetty/snips) - Command line tool to manage snippets of code.
* [sqlline](https://github.com/julianhyde/sqlline) - Shell for issuing SQL to relational databases via JDBC (multiline, completion, highlighting, dialect support)
* [sshfs](https://github.com/osxfuse/sshfs) - A tool for mounting remote file systems over SSH
* [sudocabulary](https://github.com/badarsh2/Sudocabulary) - Learn English Vocabulary from your terminal
* [surfraw](https://gitlab.com/surfraw/Surfraw) - browse specific site and search the web from your terminal without browser.
* [task-manager](https://github.com/lingtalfi/task-manager) - Execute all your scripts with just two or three keystrokes.
* [td-cli](https://github.com/darrikonn/td-cli) - A todo command line manager to organize and manage your todos across multiple projects.
* [tere](https://github.com/mgunyho/tere) - A faster alternative to cd + ls
* [thefuck](https://github.com/nvbn/thefuck) - Fix common shell mistakes by using an easy to remember command
* [tldr](https://github.com/raylee/tldr-sh-client) - A fully-functional bash client for tldr, simplified and community-driven man pages
* [tmux](https://tmux.github.io/) - Amazing terminal multiplexer
* [undollar](https://github.com/xtyrrell/undollar) - undollar bites the dollar sign off the tip of the command you just pasted into your terminal
* [usql](https://github.com/xo/usql) - Universal command-line interface for SQL databases.
* [v](https://github.com/rupa/v) - z for vim.
* [wemux](https://github.com/zolrath/wemux) - Multi-User Tmux Made Easy
* [xiki](https://github.com/trogdoro/xiki) - Makes the shell console more friendly and powerful
* [xplr](https://github.com/sayanarijit/xplr) -  A hackable, minimal, fast TUI file explorer
* [xsv](https://github.com/BurntSushi/xsv) - a fast CSV command line toolkit written in Rust
* [xxh](https://github.com/xxh/xxh) - Bring your favorite shell wherever you go through the SSH.

### Directory Navigation

* [aliasme](https://github.com/Jintin/aliasme) - alias helper to change directory quickly
* [autojump](https://github.com/wting/autojump) - A cd command that learns - easily navigate directories from the command line
* [bashmarks](https://github.com/huyng/bashmarks) - Directory bookmarks for the shell
* [bd](https://github.com/vigneshwaranr/bd) - Quickly go back to a parent directory
* [commacd](https://github.com/shyiko/commacd) - A faster way to move around in Bash
* [enhancd](https://github.com/b4b4r07/enhancd) - :rocket: A next-generation cd command with an interactive filter
* [goto](https://github.com/iridakos/goto) - A shell utility for navigation to aliased directories supporting auto-completion
* [jump](https://github.com/gsamokovarov/jump) - Jump helps you navigate your file system faster by learning your habits.
* [lazy-cd](https://github.com/pedramamini/lazy-cd) - Simple bash commands for bookmarked navigation of the file system, complete with bash-completion.
* [up](https://github.com/shannonmoeller/up) - Ascend directories by name or count; for bash, zsh, and fish.
* [z](https://github.com/rupa/z) - z is the new j, yo
* [z.lua](https://github.com/skywind3000/z.lua) - A new cd command that helps you navigate faster by learning your habits
* [zoxide](https://github.com/ajeetdsouza/zoxide) - A faster way to navigate your filesystem, written in Rust
* [zpyi](https://github.com/sakshamsharma/zpyi) - Python in Zsh - Easy python scripting in shell

## Customization

*Custom prompts, color themes, etc.*

* [aphrodite-terminal-theme](https://github.com/win0err/aphrodite-terminal-theme) — Minimalistic Aphrodite theme (prompt) for sexy terminals that works in bash, fish and zsh
* [base16-builder](https://github.com/base16-builder/base16-builder) - Base16-Builder
* [bash-full-of-colors](https://github.com/slomkowski/bash-full-of-colors) - Powerful prompt with screen, tmux, git support and many more
* [bash-git-prompt](https://github.com/magicmonty/bash-git-prompt) - An informative and fancy Bash prompt for Git users
* [bash-powerline](https://github.com/riobard/bash-powerline) - Powerline-style Bash prompt in pure Bash script
* [bashstrap](https://github.com/barryclark/bashstrap) - A quick way to spruce up OSX terminal
* [bullet-train-oh-my-zsh-theme](https://github.com/caiogondim/bullet-train.zsh) - :bullettrain_side: An oh-my-zsh shell theme based on the Powerline Vim plugin
* [emojify](https://github.com/mrowa44/emojify) Emoji on the command line :scream:
* [flatui-terminal-theme](https://dribbble.com/shots/1021755-Flat-UI-Terminal-Theme) - Nicer colors for terminal
* [geometry](https://github.com/geometry-zsh/geometry) - A minimal ZSH theme where any function can be added to the left prompt or (async) right prompt on the fly.
* [git-prompt](https://github.com/lvv/git-prompt) - Bash prompt with Git, SVN and HG modules
* [gittify](https://github.com/momeni/gittify) - A colorful Bash prompt + customized Git aliases
* [Gogh - Color Scheme](https://github.com/Mayccoll/Gogh) - Color Scheme for Gnome Terminal
* [liquidprompt](https://github.com/nojhan/liquidprompt) - A full-featured & carefully designed adaptive prompt for Bash & Zsh
* [mysql-colorize](https://github.com/zpm-zsh/mysql-colorize) -  Colorization for mysql comand-line client
* [oh-my-git](https://github.com/arialdomartini/oh-my-git) - An opinionated git prompt for bash and zsh
* [oh-my-posh](https://ohmyposh.dev) - Prompt theme engine for any shell and platform written in go.
* [polyglot](https://github.com/agkozak/polyglot) - An informative Git prompt that works in bash, zsh, ksh, mksh, pdksh, oksh, dash, yash, busybox sh, and osh
* [powerlevel10k](https://github.com/romkatv/powerlevel10k) - Super flexible awesome powerline ZSH theme
* [sexy-bash-prompt](https://github.com/twolfson/sexy-bash-prompt) - Bash prompt with colors, Git statuses, and Git branches
* [starship](https://starship.rs/) - Fast, customisable, cross-shell prompt written in rust
* [synth-shell](https://github.com/andresgongora/synth-shell) - Greeter with a customizable status report and a fancy bash prompt

## For Developers

*Command-line development, version control, and deployment.*

* [1Password SSH Agent](https://developer.1password.com/docs/ssh/) - Authenticate Git and SSH workflows with biometric unlock using 1Password
* [ack](https://beyondgrep.com/) - A grep-like search tool optimized for source code.
* [add-gitignore](https://github.com/TejasQ/add-gitignore) - Interactive CLI that generates a .gitignore for your project based on your needs.
* [bcal](https://github.com/jarun/bcal) - Byte CALculator for storage conversions and calculations
* [bitwise](https://github.com/mellowcandle/bitwise) - Terminal based interactive bit manipulator in curses.
* [bocker](https://github.com/p8952/bocker) - Docker implemented in 100 lines of bash
* [cloc](https://github.com/AlDanial/cloc) - Count Lines of Code
* [doclt](https://github.com/omgimanerd/doclt) - A command line interface to Digital Ocean
* [dokku](https://github.com/dokku/dokku) - Docker powered mini-Heroku. The smallest PaaS implementation you've ever seen.
* [forgit](https://github.com/wfxr/forgit) - Utility tool for `git` taking advantage of fuzzy finder fzf.
* [git-extra-commands](https://github.com/unixorn/git-extra-commands) - Many Git extra utilities. Churn, cut-branch, improved-merge and many more.
* [git-extras](https://github.com/tj/git-extras) - Git utilities -- repo summary, repl, changelog population, author commit percentages and more
* [git-open](https://github.com/paulirish/git-open) - Type `git open` to open the GitHub page or website for a repository in your browser
* [git-quick-stats](https://github.com/arzzen/git-quick-stats) - Git quick statistics is a simple and efficient way to access various statistics in git repository.
* [git-semver](https://github.com/markchalloner/git-semver) - Git plugin for easing semantic versioning and changelog validation
* [git-sh](https://github.com/rtomayko/git-sh) - A customized Bash environment suitable for Git work
* [gita](https://github.com/nosarthur/gita) - A command-line tool to manage multiple git repos.
* [hub](https://github.com/github/hub) - hub helps you win at git.
* [just](https://github.com/casey/just) - Task runner for saving and running project-specific commands.
* [licins](https://github.com/dogoncouch/licins) - Insert commented software licenses into source code.
* [mkdkr](https://github.com/rosineygp/mkdkr) - Makefile + Docker = CI Pipeline
* [mr](https://myrepos.branchable.com) - Multiple Repository management tool
* [nve](https://github.com/ehmicky/nve) - Run any command on specific Node.js versions.
* [overcommit](https://github.com/sds/overcommit) - A fully configurable and extendable Git hook manager
* [pre-commit](https://pre-commit.com) - A framework for managing and maintaining multi-language pre-commit hooks
* [rebound](https://github.com/shobrook/rebound) - Instantly browse Stack Overflow results in your terminal when you get a compiler error
* [repren](https://github.com/jlevy/repren) - Command-line search-and-replace and file-renaming swiss army knife
* [slap](https://github.com/slap-editor/slap) - Sublime-like terminal-based text editor that runs on Node.js
* [shipit](https://github.com/sapegin/shipit) - Minimalistic SSH deployment
* [starring](https://github.com/ritz078/starring) - Automatically star the npm-packages that you are using on GitHub.
* [tag](https://github.com/aykamko/tag) - Instantly jump to your ag matches.
* [trunk](https://www.npmjs.com/package/@trunkio/launcher) - Blazingly fast meta code checker and formatter
* [vmn](https://github.com/final-israel/vmn) - git-based automatic versioning and state recovery solution agnostic to language or architecture
* [wipe-modules](https://github.com/bntzio/wipe-modules) - A little agent that removes the node_modules folder of non-active projects

## System Utilities

*OS-related tools, including system administration, system debugging, and file and process management.*

* [atop](https://www.atoptool.nl) - ASCII full-screen performance monitor that is capable of reporting the activity of all processes
* [bat](https://github.com/sharkdp/bat) - A `cat` clone with wings
* [bmon](https://github.com/tgraf/bmon) - Real-time network bandwidth monitor and rate estimator with human-friendly visual output
* [btop](https://github.com/aristocratos/btop) - Linux/OSX/FreeBSD resource monitor
* [catcli](https://github.com/deadc0de6/catcli) -  The command line catalog tool for your offline data
* [ccat](https://github.com/owenthereal/ccat) - ccat is the colorizing cat. It works similar to cat but displays content with syntax highlighting.
* [exa](https://github.com/ogham/exa) - A modern version of `ls`.
* [progress](https://github.com/Xfennec/progress) - Linux tool to show progress for `cp`, `rm`, `dd`, and more...
* [stronghold](https://github.com/alichtman/stronghold) - Easily configure MacOS security settings from the terminal.
* [glances](https://github.com/nicolargo/glances) - Glances an Eye on your system
* [goaccess](https://github.com/allinurl/goaccess) - GoAccess is a real-time web log analyzer and interactive viewer that runs in a terminal in \*nix systems.
* [hblock](https://github.com/hectorm/hblock) - Hosts-file based adblocker
* [histstat](https://github.com/vesche/histstat) - History for netstat
* [htop](https://github.com/hishamhm/htop) - A ncurses based interactive process viewer which aims to be a better `top`
* [lnav](https://lnav.org) - An advanced log file viewer for the small-scale
* [logdissect](https://github.com/dogoncouch/logdissect) - CLI utility and Python API for analyzing log files and other data.
* [ls++](https://github.com/trapd00r/ls--) - Colorized ls on steroids
* [lsd](https://github.com/Peltoche/lsd) - LSDeluxe, rewrite of GNU ls with lot of added features like colors, icons, tree-view and more formatting options.

_…превью ограничено; полный список — в репозитории._

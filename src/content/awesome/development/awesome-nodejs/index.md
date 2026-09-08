---
title: "awesome-nodejs"
description: "Курируемый awesome-список: awesome-nodejs"
layout: awesome/single
awesome_repo: "https://github.com/sindresorhus/awesome-nodejs"
awesome_readme: "readme.md"
---

> Источник: [awesome-nodejs](https://github.com/sindresorhus/awesome-nodejs) — синхронизируется из внешнего репозитория как sparse-субмодуль (только список).

<div align="center">
	<div>
		<img width="500" src="media/logo.svg" alt="Awesome Node.js">
		<br>
	</div>
	<br>
	<br>
	<br>
	<br>
	<hr>
	<p>
		<p>
			<sup>
				<a href="https://github.com/sponsors/sindresorhus">My open source work is supported by the community</a>
			</sup>
		</p>
		<sup>Special thanks to:</sup>
		<br>
		<br>
		<br>
		<a href="https://depot.dev?utm_source=github&utm_medium=sindresorhus">
			<div>
				<picture>
					<source width="180" media="(prefers-color-scheme: dark)" srcset="https://sindresorhus.com/assets/thanks/depot-logo-dark.svg">
					<source width="180" media="(prefers-color-scheme: light)" srcset="https://sindresorhus.com/assets/thanks/depot-logo-light.svg">
					<img width="180" src="https://sindresorhus.com/assets/thanks/depot-logo-light.svg" alt="Depot logo">
				</picture>
			</div>
			<b>Fast remote container builds and GitHub Actions runners.</b>
		</a>
		<br>
		<br>
		<br>
		<a href="https://circleback.ai?utm_source=sindresorhus&utm_medium=sponsorship&utm_campaign=awesome-list&utm_id=awesome-nodejs">
			<div>
				<img width="340" src="https://sindresorhus.com/assets/thanks/circleback-logo.png?x" alt="Circleback logo">
			</div>
			<b>Get the most out of every conversation.</b>
			<div>
				<sup>AI-powered meeting notes, automations, and search. Give AI agents the context they need to get things done.</sup>
			</div>
		</a>
		<br>
		<br>
		<br>
	</p>
	<hr>
	<br>
	<br>
	<br>
	<br>
	<br>
	<a href="https://awesome.re">
		<img src="https://awesome.re/badge-flat2.svg" alt="Awesome">
	</a>
	<p>
		<sub>Just type <a href="https://node.cool"><code>node.cool</code></a> to go here. Follow me on <a href="https://twitter.com/sindresorhus">Twitter</a>.</sub>
	</p>
	<br>
	<p>
		<a href="https://en.wikipedia.org/wiki/Node.js">Node.js</a> is an open-source, cross-platform, JavaScript runtime for writing servers and command-line tools.
	</p>
	<br>
</div>

## Contents

- [Official](#official)
- [Packages](#packages)
	- [Mad science](#mad-science)
	- [Command-line apps](#command-line-apps)
	- [Functional programming](#functional-programming)
	- [HTTP](#http)
	- [Debugging / Profiling](#debugging--profiling)
	- [Logging](#logging)
	- [Command-line utilities](#command-line-utilities)
	- [Build tools](#build-tools)
	- [Hardware](#hardware)
	- [Templating](#templating)
	- [Web frameworks](#web-frameworks)
	- [Documentation](#documentation)
	- [Filesystem](#filesystem)
	- [Control flow](#control-flow)
	- [Streams](#streams)
	- [Real-time](#real-time)
	- [Image](#image)
	- [Text](#text)
	- [Number](#number)
	- [Math](#math)
	- [Date](#date)
	- [URL](#url)
	- [Data validation](#data-validation)
	- [Parsing](#parsing)
	- [Humanize](#humanize)
	- [Compression](#compression)
	- [Network](#network)
	- [Database](#database)
	- [Testing](#testing)
	- [Security](#security)
	- [Benchmarking](#benchmarking)
	- [Minifiers](#minifiers)
	- [Authentication](#authentication)
	- [Authorization](#authorization)
	- [Email](#email)
	- [Job queues](#job-queues)
	- [Node.js management](#nodejs-management)
	- [Cross-platform integration](#cross-platform-integration)
	- [Natural language processing](#natural-language-processing)
	- [Process management](#process-management)
	- [Automation](#automation)
	- [AST](#ast)
	- [Static site generators](#static-site-generators)
	- [Content management systems](#content-management-systems)
	- [Forum](#forum)
	- [Blogging](#blogging)
	- [Weird](#weird)
	- [Serialization](#serialization)
	- [Miscellaneous](#miscellaneous)
- [Package Manager](#package-manager)
- [Resources](#resources)
	- [Tutorials](#tutorials)
	- [Discovery](#discovery)
	- [Articles](#articles)
	- [Newsletters](#newsletters)
	- [Videos](#videos)
	- [Books](#books)
	- [Blogs](#blogs)
	- [Courses](#courses)
	- [Cheatsheets](#cheatsheets)
	- [Tools](#tools)
	- [Community](#community)
	- [Miscellaneous](#miscellaneous-1)
- [Related lists](#related-lists)

## Official

- [Website](https://nodejs.org)
- [Documentation](https://nodejs.org/dist/latest/docs/api/)
- [Repository](https://github.com/nodejs/node)

## Packages

### Mad science

- [webtorrent](https://github.com/webtorrent/webtorrent) - Streaming torrent client for Node.js and the browser.
- [peerflix](https://github.com/mafintosh/peerflix) - Streaming torrent client.
- [ipfs](https://github.com/ipfs/helia) - Distributed file system that seeks to connect all computing devices with the same system of files.
- [stackgl](https://github.com/stackgl) - Open software ecosystem for WebGL, built on top of browserify and npm.
- [peerwiki](https://github.com/mafintosh/peerwiki) - All of Wikipedia on BitTorrent.
- [peercast](https://github.com/mafintosh/peercast) - Stream a torrent video to Chromecast.
- [BitcoinJS](https://github.com/bitcoinjs/bitcoinjs-lib) - Clean, readable, proven Bitcoin library.
- [Bitcore](https://github.com/bitpay/bitcore) - Pure and powerful Bitcoin library.
- [PDFKit](https://github.com/foliojs/pdfkit) - PDF generation library.
- [turf](https://github.com/Turfjs/turf) - Modular geospatial processing and analysis engine.
- [webcat](https://github.com/mafintosh/webcat) - p2p pipe across the web using WebRTC that uses your GitHub private/public key for authentication.
- [NodeOS](https://github.com/NodeOS/NodeOS) - The first operating system powered by npm.
- [YodaOS](https://github.com/yodaos-project/yodaos) - AI operating system.
- [Brain.js](https://github.com/BrainJS/brain.js) - Machine-learning framework.
- [Pipcook](https://github.com/alibaba/pipcook) - Front-end algorithm framework to create a machine learning pipeline.
- [Cytoscape.js](https://github.com/cytoscape/cytoscape.js) - Graph theory (a.k.a. network) modeling and analysis.
- [js-git](https://github.com/creationix/js-git) - JavaScript implementation of Git.
- [xlsx](https://github.com/SheetJS/sheetjs) - Pure JS Excel spreadsheet reader and writer.
- [isomorphic-git](https://github.com/isomorphic-git/isomorphic-git) - Pure JavaScript implementation of Git.

### Command-line apps

- [np](https://github.com/sindresorhus/np) - Better `npm publish`.
- [npm-name](https://github.com/sindresorhus/npm-name) - Check a package name's availability on npm.
- [gh-home](https://github.com/sindresorhus/gh-home) - Open the GitHub page of the repo in the current directory.
- [npm-home](https://github.com/sindresorhus/npm-home) - Open the npm page of a package.
- [trash](https://github.com/sindresorhus/trash) - Safer alternative to `rm`.
- [speed-test](https://github.com/sindresorhus/speed-test) - Test your internet connection speed and ping.
- [pageres](https://github.com/sindresorhus/pageres) - Capture website screenshots.
- [cpy](https://github.com/sindresorhus/cpy) - Copy files.
- [vtop](https://github.com/MrRio/vtop) - More better top, with nice charts.
- [empty-trash](https://github.com/sindresorhus/empty-trash) - Empty the trash.
- [is-up](https://github.com/sindresorhus/is-up) - Check whether a website is up or down.
- [is-online](https://github.com/sindresorhus/is-online) - Check if the internet connection is up.
- [public-ip](https://github.com/sindresorhus/public-ip) - Get your public IP address.
- [clipboard-cli](https://github.com/sindresorhus/clipboard-cli) - Copy & paste on the terminal.
- [XO](https://github.com/xojs/xo) - Enforce strict code style using the JavaScript happiness style.
- [ESLint](https://github.com/eslint/eslint) - The pluggable linting utility for JavaScript.
- [David](https://github.com/alanshaw/david) - Tells you when your package npm dependencies are out of date.
- [http-server](https://github.com/http-party/http-server) - Simple, zero-config command-line HTTP server.
- [Live Server](https://github.com/tapio/live-server) - Development HTTP-server with livereload capability.
- [bcat](https://github.com/kessler/node-bcat) - Pipe command output to web browsers.
- [normit](https://github.com/pawurb/normit) - Google Translate with speech synthesis in your terminal.
- [fkill](https://github.com/sindresorhus/fkill-cli) - Fabulously kill processes. Cross-platform.
- [pjs](https://github.com/danielstjules/pjs) - Pipeable JavaScript. Quickly filter, map, and reduce from the terminal.
- [license-checker](https://github.com/davglass/license-checker) - Check licenses of your app's dependencies.
- [browser-run](https://github.com/juliangruber/browser-run) - Easily run code in a browser environment.
- [tmpin](https://github.com/sindresorhus/tmpin) - Adds stdin support to any CLI app that accepts file input.
- [wallpaper](https://github.com/sindresorhus/wallpaper) - Change the desktop wallpaper.
- [pen](https://github.com/hatashiro/pen) - Live Markdown preview in the browser from your favorite editor.
- [dark-mode](https://github.com/sindresorhus/dark-mode) - Toggle the macOS Dark Mode.
- [Jsome](https://github.com/Javascipt/Jsome) - Pretty prints JSON with configurable colors and indentation.
- [mobicon](https://github.com/samverschueren/mobicon-cli) - Mobile app icon generator.
- [mobisplash](https://github.com/samverschueren/mobisplash-cli) - Mobile app splash screen generator.
- [diff2html-cli](https://github.com/rtfpessoa/diff2html-cli) - Pretty git diff to HTML generator.
- [trymodule](https://github.com/victorb/trymodule) - Try out npm packages in the terminal.
- [jscpd](https://github.com/kucherenko/jscpd) - Copy/paste detector for source code.
- [atmo](https://github.com/Raathigesh/Atmo) - Server-side API mocking.
- [auto-install](https://github.com/siddharthkp/auto-install) - Auto installs dependencies as you code.
- [cost-of-modules](https://github.com/siddharthkp/cost-of-modules) - Find out which dependencies are slowing you down.
- [localtunnel](https://github.com/localtunnel/localtunnel) - Expose your localhost to the world.
- [svg-term-cli](https://github.com/marionebl/svg-term-cli) - Share terminal sessions via SVG.
- [gtop](https://github.com/aksakalli/gtop) - System monitoring dashboard for the terminal.
- [themer](https://github.com/themerdev/themer) - Generate themes for your editor, terminal, wallpaper, Slack, and more.
- [carbon-now-cli](https://github.com/mixn/carbon-now-cli) - Beautiful images of your code — from right inside your terminal.
- [cash-cli](https://github.com/xxczaki/cash-cli) - Convert between 170 currencies.
- [taskbook](https://github.com/klaussinani/taskbook) - Tasks, boards & notes for the command-line habitat.
- [discharge](https://github.com/brandonweiss/discharge) - Easily deploy static websites to Amazon S3.
- [npkill](https://github.com/voidcosmos/npkill) - Easily find and remove old and heavy node_modules folders.

### Functional programming

- [lodash](https://github.com/lodash/lodash) - Utility library delivering consistency, customization, performance, & extras. A better and faster Underscore.js.
- [immutable](https://github.com/immutable-js/immutable-js) - Immutable data collections.
- [Ramda](https://github.com/ramda/ramda) - Utility library with a focus on flexible functional composition enabled by automatic currying and reversed argument order. Avoids mutating data.
- [Mout](https://github.com/mout/mout) - Utility library with the biggest difference between other existing solutions is that you can choose to load only the modules/functions that you need, no extra overhead.
- [RxJS](https://github.com/reactivex/rxjs) - Functional reactive library for transforming, composing, and querying various kinds of data.
- [Kefir.js](https://github.com/kefirjs/kefir) - Reactive library with focus on high performance and low memory usage.

### HTTP

- [got](https://github.com/sindresorhus/got) - Nicer interface to the built-in `http` module.
- [undici](https://github.com/nodejs/undici) - High performance HTTP client written from scratch with zero dependencies.
- [ky-universal](https://github.com/sindresorhus/ky-universal) - Universal HTTP client based on Fetch.
- [node-fetch](https://github.com/node-fetch/node-fetch) - `window.fetch` for Node.js.
- [axios](https://github.com/axios/axios) - Promise based HTTP client (works in the browser too).
- [superagent](https://github.com/visionmedia/superagent) - HTTP request library.
- [http-fake-backend](https://github.com/micromata/http-fake-backend) - Build a fake backend by providing the content of JSON files or JavaScript objects through configurable routes.
- [cacheable-request](https://github.com/lukechilds/cacheable-request) - Wrap native HTTP requests with RFC compliant cache support.
- [gotql](https://github.com/khaosdoctor/gotql) - GraphQL request library built on [got](https://github.com/sindresorhus/got).
- [global-agent](https://github.com/gajus/global-agent) - Global HTTP/HTTPS proxy agent that is configurable using environment variables.
- [smoke](https://github.com/sinedied/smoke) - File-based HTTP mock server with recording abilities.
- [purest](https://github.com/simov/purest) - REST client.

### Debugging / Profiling

- [debug](https://github.com/debug-js/debug) - Tiny debugging utility.
- [why-is-node-running](https://github.com/mafintosh/why-is-node-running) - Node.js is running but you don't know why?
- [njsTrace](https://github.com/valyouw/njstrace) - Instrument and trace your code, see all function calls, arguments, return values, as well as the time spent in each function.
- [vstream](https://github.com/joyent/node-vstream) - Instrumentable streams mix-ins to inspect a pipeline of streams.
- [stackman](https://github.com/watson/stackman) - Enhance an error stacktrace with code excerpts and other goodies.
- [locus](https://github.com/alidavut/locus) - Starts a REPL at runtime that has access to all variables.
- [0x](https://github.com/davidmarkclements/0x) - Flamegraph profiling.
- [ctrace](https://github.com/automation-stack/ctrace) - Well-formatted and improved trace system calls and signals.
- [leakage](https://github.com/andywer/leakage) - Write memory leak tests.
- [llnode](https://github.com/nodejs/llnode) - Post-mortem analysis tool which allows you to inspect objects and get insights from a crashed Node.js process.
- [thetool](https://github.com/sfninja/thetool) - Capture different CPU, memory, and other profiles for your app in Chrome DevTools friendly format.
- [swagger-stats](https://github.com/slanatech/swagger-stats) - Trace API calls and monitor API performance, health, and usage metrics.
- [NiM](https://github.com/june07/nim) - Manages DevTools debugging workflow.
- [dats](https://github.com/immobiliare/dats) - Minimalistic and zero-dependencies [StatsD](https://github.com/statsd/statsd) client.

### Logging

- [pino](https://github.com/pinojs/pino) - Extremely fast logger inspired by Bunyan.
- [winston](https://github.com/winstonjs/winston) - Multi-transport async logging library.
- [console-log-level](https://github.com/watson/console-log-level) - The most simple logger imaginable with support for log levels and custom prefixes.

_…превью ограничено; полный список — в репозитории._

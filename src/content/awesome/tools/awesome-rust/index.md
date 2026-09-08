---
title: "awesome-rust"
description: "Курируемый awesome-список: awesome-rust"
layout: awesome/single
awesome_repo: "https://github.com/rust-unofficial/awesome-rust"
awesome_readme: "README.md"
---

> Источник: [awesome-rust](https://github.com/rust-unofficial/awesome-rust) — синхронизируется из внешнего репозитория как sparse-субмодуль (только список).


A curated list of Rust code and resources.

If you want to contribute, please read [this](https://github.com/rust-unofficial/awesome-rust/blob/main/CONTRIBUTING.md).

<!-- BEGIN mktoc {"min_depth": 2} -->

- [Applications](#applications)
  - [Audio and Music](#audio-and-music)
  - [Blockchain](#blockchain)
  - [Database](#database)
  - [Embedded](#embedded)
  - [Emulators](#emulators)
  - [File manager](#file-manager)
  - [Finance](#finance)
  - [Games](#games)
  - [Graphics](#graphics)
  - [Image processing](#image-processing)
  - [Industrial automation](#industrial-automation)
  - [Message Queue](#message-queue)
  - [MLOps](#mlops)
  - [Observability](#observability)
  - [Operating systems](#operating-systems)
  - [Package Managers](#package-managers)
  - [Payments](#payments)
  - [Productivity](#productivity)
  - [Routing protocols](#routing-protocols)
  - [Security tools](#security-tools)
  - [Social networks](#social-networks)
  - [System tools](#system-tools)
  - [Task scheduling](#task-scheduling)
  - [Text editors](#text-editors)
  - [Text processing](#text-processing)
  - [Utilities](#utilities)
  - [Video](#video)
  - [Virtualization](#virtualization)
  - [Web](#web)
  - [Web Servers](#web-servers)
  - [Workflow Automation](#workflow-automation)
- [Development tools](#development-tools)
  - [Build system](#build-system)
  - [Debugging](#debugging)
  - [Deployment](#deployment)
  - [Embedded](#embedded-1)
  - [FFI](#ffi)
  - [Formatters](#formatters)
  - [IDEs](#ides)
  - [Profiling](#profiling)
  - [Services](#services)
  - [Static analysis](#static-analysis)
  - [Testing](#testing)
  - [Transpiling](#transpiling)
  - [Tunnel](#tunnel)
- [Libraries](#libraries)
  - [Artificial Intelligence](#artificial-intelligence)
    - [Genetic algorithms](#genetic-algorithms)
    - [Google Gemini](#google-gemini)
    - [Machine learning](#machine-learning)
    - [OpenAI](#openai)
    - [Tooling](#tooling)
  - [Astronomy](#astronomy)
  - [Asynchronous](#asynchronous)
  - [Audio and Music](#audio-and-music-1)
  - [Authentication](#authentication)
  - [Automotive](#automotive)
  - [Bioinformatics](#bioinformatics)
  - [Caching](#caching)
  - [Cloud](#cloud)
  - [Command-line](#command-line)
  - [Compression](#compression)
  - [Computation](#computation)
  - [Concurrency](#concurrency)
  - [Configuration](#configuration)
  - [Cryptography](#cryptography)
  - [Data processing](#data-processing)
  - [Data streaming](#data-streaming)
  - [Data structures](#data-structures)
  - [Data visualization](#data-visualization)
  - [Database](#database-1)
  - [Date and time](#date-and-time)
  - [Distributed systems](#distributed-systems)
  - [Domain driven design](#domain-driven-design)
  - [eBPF](#ebpf)
  - [Email](#email)
  - [Encoding](#encoding)
  - [Filesystem](#filesystem)
  - [Finance](#finance-1)
  - [Functional Programming](#functional-programming)
  - [Game development](#game-development)
  - [Geospatial](#geospatial)
  - [Graph algorithms](#graph-algorithms)
  - [Graphics](#graphics-1)
  - [GUI](#gui)
  - [Image processing](#image-processing-1)
  - [Language specification](#language-specification)
  - [Licensing](#licensing)
  - [Logging](#logging)
  - [Macro](#macro)
  - [Markup language](#markup-language)
  - [Mobile](#mobile)
  - [Network programming](#network-programming)
  - [Parsing](#parsing)
  - [Peripherals](#peripherals)
  - [Platform specific](#platform-specific)
  - [Reverse engineering](#reverse-engineering)
  - [Scripting](#scripting)
  - [Simulation](#simulation)
  - [Social networks](#social-networks-1)
  - [System](#system)
  - [Task scheduling](#task-scheduling-1)
  - [Template engine](#template-engine)
  - [Text processing](#text-processing-1)
  - [Text search](#text-search)
  - [Unsafe](#unsafe)
  - [Video](#video-1)
  - [Virtualization](#virtualization-1)
  - [Web programming](#web-programming)
- [Registries](#registries)
- [Resources](#resources)
- [License](#license)
<!-- END mktoc -->

## Applications

* [ad-si/Woxi](https://github.com/ad-si/Woxi) [[woxi](https://crates.io/crates/woxi)] - An interpreter for the Wolfram Language powered by Rust.
* [alacritty](https://github.com/alacritty/alacritty) - A cross-platform, GPU enhanced terminal emulator
* [Andromeda](https://github.com/tryandromeda/andromeda) - JavaScript & TypeScript runtime built from the ground up in Rust 🦀 and powered by The Nova Engine.
* [arimxyer/models](https://github.com/arimxyer/models) [[modelsdev](https://crates.io/crates/modelsdev)] - A TUI for browsing AI models, benchmarks, and coding agents [![CI](https://github.com/arimxyer/models/actions/workflows/ci.yml/badge.svg)](https://github.com/arimxyer/models/actions/workflows/ci.yml)
* [Arti](https://gitlab.torproject.org/tpo/core/arti) - An implementation of Tor. (So far, it's a not-very-complete client. But watch this space!) [![Crates.io](https://img.shields.io/crates/v/arti.svg)](https://crates.io/crates/arti)
* [asm-cli-rust](https://github.com/cch123/asm-cli-rust) - An interactive assembly shell.
* [clash-verge-rev/clash-verge-rev](https://github.com/clash-verge-rev/clash-verge-rev) - A cross-platform, modern Clash GUI based on tauri & rust, supporting Windows, macOS, and Linux.
* [cloudflare/boringtun](https://github.com/cloudflare/boringtun) - A Userspace WireGuard VPN Implementation [![build badge](https://img.shields.io/crates/v/boringtun.svg)](https://crates.io/crates/boringtun)
* [DBX](https://github.com/t8y2/dbx) - A lightweight, open-source database management tool built with Tauri, supporting MySQL, PostgreSQL, SQLite, Redis, MongoDB, DuckDB, and more. [![CI](https://github.com/t8y2/dbx/actions/workflows/ci.yml/badge.svg)](https://github.com/t8y2/dbx/actions/workflows/ci.yml)
* [defguard](https://github.com/defguard/defguard) - Enterprise Open Source SSO & WireGuard VPN with real 2FA/MFA
* [denoland/deno](https://github.com/denoland/deno) - A secure JavaScript/TypeScript runtime built with V8 and Tokio [![Build Status](https://github.com/denoland/deno/actions/workflows/ci.yml/badge.svg)](https://github.com/denoland/deno/actions)
* [doprz/dipc](https://github.com/doprz/dipc) - Convert your favorite images and wallpapers with your favorite color palettes/themes [![crates.io](https://img.shields.io/crates/v/dipc)](https://crates.io/crates/dipc)
* [EasyTier](https://github.com/EasyTier/EasyTier) - A simple, full-featured and decentralized mesh VPN with WireGuard support. [![crates.io](https://img.shields.io/crates/v/easytier)](https://crates.io/crates/easytier) [![GitHub actions](https://github.com/EasyTier/EasyTier/actions/workflows/core.yml/badge.svg)](https://github.com/EasyTier/EasyTier/actions/)[![GitHub actions](https://github.com/EasyTier/EasyTier/actions/workflows/gui.yml/badge.svg)](https://github.com/EasyTier/EasyTier/actions/)
* [Edit](https://github.com/microsoft/edit) - A simple editor for simple needs. [![CI](https://github.com/microsoft/edit/actions/workflows/ci.yml/badge.svg)](https://github.com/microsoft/edit/actions/workflows/ci.yml)
* [fcsonline/drill](https://github.com/fcsonline/drill) - A HTTP load testing application inspired by Ansible syntax
* [fend](https://github.com/printfn/fend) - Arbitrary-precision unit-aware calculator [![build](https://github.com/printfn/fend/workflows/build/badge.svg)](https://github.com/printfn/fend/actions/workflows/actions.yml)
* [Fractalide](https://github.com/fractalide/fractalide) - Simple microservices
* [GCWing/BitFun](https://github.com/GCWing/BitFun) - A cross-platform desktop AI agent with a Rust runtime that works in real repositories and can drive the browser, terminal, and desktop applications
* [giga-grabber](https://github.com/chanderlud/giga-grabber) - A very fast and relatively stable Mega downloader [![build](https://github.com/chanderlud/giga-grabber/actions/workflows/release.yml/badge.svg)](https://github.com/chanderlud/giga-grabber/actions/workflows/release.yml)
* [glzr-io/glazewm](https://github.com/glzr-io/glazewm) - A tiling window manager for Windows inspired by i3wm, with YAML config, multi-monitor support, and keyboard-driven commands
* [google/mdbook-i18n-helpers](https://github.com/google/mdbook-i18n-helpers) [[mdbook-i18n-helpers](https://crates.io/crates/mdbook-i18n-helpers)] - Internationalization and rendering extensions for mdbook.
* [habitat](https://github.com/habitat-sh/habitat) - A tool created by Chef to build, deploy, and manage applications.
* [Herd](https://github.com/imjacobclark/Herd) - an experimental HTTP load testing application
* [hickory-dns](https://crates.io/crates/hickory-dns) - A DNS-server [![Build Status](https://github.com/hickory-dns/hickory-dns/actions/workflows/test.yml/badge.svg)](https://github.com/hickory-dns/hickory-dns/actions?query=workflow%3Atest)
* [innernet](https://github.com/tonarino/innernet) - An overlay or private mesh network that uses Wireguard under the hood
* [jedisct1/flowgger](https://github.com/awslabs/flowgger) - A fast, simple and lightweight data collector
* [kalker](https://github.com/PaddiM8/kalker) - A scientific calculator that supports math-like syntax with user-defined variables, functions, derivation, integration, and complex numbers. Cross-platform + WASM support [![Build Status](https://github.com/PaddiM8/kalker/workflows/Release/badge.svg)](https://github.com/PaddiM8/kalker/actions)
* [kftray](https://github.com/hcavarsan/kftray) - A cross-platform system tray app for managing and sharing multiple kubectl port-forward configurations. [![Build Status](https://github.com/hcavarsan/kftray/workflows/Release/badge.svg)](https://github.com/hcavarsan/kftray/actions)
* [kytan](https://github.com/changlan/kytan) - High Performance Peer-to-Peer VPN
* [linkerd/linkerd2-proxy](https://github.com/linkerd/linkerd2-proxy) - Ultralight service mesh for Kubernetes.
* [Livediff](https://github.com/SoCkEt7/Livediff) [[livediff](https://crates.io/crates/livediff)] - Real-time terminal file diff monitoring TUI. [![Release](https://github.com/SoCkEt7/Livediff/actions/workflows/release.yml/badge.svg)](https://github.com/SoCkEt7/Livediff/actions/workflows/release.yml)
* [LWE](https://github.com/YangYuS8/lwe) - Linux desktop app for browsing, managing, and applying Wallpaper Engine content, built with Rust and Tauri.
* [lzanini/mdbook-katex](https://github.com/lzanini/mdbook-katex) [[mdbook-katex](https://crates.io/crates/mdbook-katex)] - A preprocessor for [mdBook](https://github.com/rust-lang/mdBook), using KaTeX to render LaTeX math expressions.
* [MaidSafe](https://github.com/maidsafe) - A decentralized platform.
* [mayocream/koharu](https://github.com/mayocream/koharu) - An ML-powered manga translator with automatic speech bubble detection, OCR, inpainting, and LLM translation, built with Candle and Tauri
* [mdBook](https://github.com/rust-lang/mdBook) - A command line utility to create books from markdown files [![Build Status](https://github.com/rust-lang/mdBook/actions/workflows/main.yml/badge.svg)](https://github.com/rust-lang/mdBook/actions)
* [Mega](https://github.com/web3infra-foundation/mega) - A monorepo & monolithic codebase management system that supports Git, also is an unofficial open source implementation of Google Piper.
* [Michael-F-Bryan/mdbook-linkcheck](https://github.com/Michael-F-Bryan/mdbook-linkcheck) [[mdbook-linkcheck](https://crates.io/crates/mdbook-linkcheck)] - A backend for mdbook which will check your links for you.
* [mirrord](https://github.com/metalbear-co/mirrord) - Connect your local process and your cloud environment, and run local code in cloud conditions
* [mmalmi/nostr-vpn](https://github.com/mmalmi/nostr-vpn) [[nvpn](https://crates.io/crates/nvpn)] - Tailscale-style private mesh VPN built on Nostr identities and a FIPS-backed data plane. Features native cross-platform apps (macOS, Linux, Windows, Mobile) and a CLI/daemon.
* [nicohman/eidolon](https://github.com/nicohman/eidolon) - A steam and drm-free game registry and launcher for linux and macosx
* [OxideTerm](https://github.com/AnalyseDeCircuit/oxideterm) - A cross-platform SSH terminal client and local terminal emulator built with Tauri 2.0 and pure-Rust SSH (russh). Features multiplexed connections, SFTP file manager, built-in IDE (CodeMirror 6), port forwarding (-L/-R/-D), Grace Period auto-reconnect, plugin system, AI assistant, encrypted export (.oxide), and 11 languages. [![CI](https://github.com/AnalyseDeCircuit/oxideterm/actions/workflows/ci.yml/badge.svg)](https://github.com/AnalyseDeCircuit/oxideterm/actions/workflows/ci.yml)
* [Pijul](https://pijul.org) - A patch-based distributed version control system
* [provrb/OBDium](https://github.com/provrb/obdium) - A cross-platform Tauri-based application for everything vehicle diagnostics. Connect your vehicle over an ELM327 adapter and read trouble codes, live OBD-II data, I/M readiness tests, and more!
* [qiluo-admin](https://github.com/chelunfu/qiluo_admin) - An enterprise-grade rapid development platform (Axum + SeaORM + JWT + VUE3, supports MySQL/Postgres/SQLite)
* [Rauthy](https://github.com/sebadob/rauthy) - OpenID Connect Single Sign-On Identity & Access Management
* [Rio](https://github.com/raphamorim/rio) - A hardware-accelerated GPU terminal emulator powered by WebGPU, focusing to run in desktops and browsers.
* [rkik](https://github.com/aguacero7/rkik) - CLI tool designed for stateless and passive NTP inspection, just as dig or ping are for DNS and ICMP. It supports async requests and continuous monitoring. [![crates.io](https://img.shields.io/crates/v/rkik?logo=rust)](https://crates.io/crates/rkik)
* [run](https://github.com/Esubaalew/run) [[run-kit](https://crates.io/crates/run-kit)] - Universal multi-language runner and smart REPL (25+ languages: Python, JS, Go, C, etc.).
* [Rust Iot Platform](https://github.com/iot-ecology/rust-iot-platform) - A high-performance IoT development platform built with Rust, designed for multi-protocol support and real-time data processing. This platform supports MQTT, WebSockets (WS), TCP, and CoAP protocols, making it highly flexible for diverse IoT applications.
* [rx](https://github.com/cloudhead/rx) - Vi inspired Modern Pixel Art Editor
* [Ryot](https://github.com/ignisda/ryot) - A self hosted application to track media consumption, fitness, etc.
* [s00d/switchshuttle](https://github.com/s00d/switchshuttle) - Cross-platform system tray app for organizing and running predefined terminal commands with global hotkeys, nested menus, and JSON-backed configuration (Tauri + Vue).
* [Saga Reader](https://github.com/sopaco/saga-reader) - A Blazing-Fast and Extremely-Lightweight Internet Reader driven by AI.Supports fetching of search engine information and RSS.
* [Servo](https://github.com/servo/servo) - A prototype web browser engine
* [shoes](https://github.com/cfal/shoes) - A multi-protocol proxy server
* [shuttle](https://github.com/shuttle-hq/shuttle) - A serverless platform.
* [Sniffnet](https://github.com/GyulyVGC/sniffnet) - Cross-platform application to monitor your network traffic with ease [![build badge](https://img.shields.io/github/actions/workflow/status/gyulyvgc/sniffnet/rust.yml?logo=github)](https://github.com/GyulyVGC/sniffnet/blob/main/.github/workflows/rust.yml) [![crate](https://img.shields.io/crates/v/sniffnet?logo=rust)](https://crates.io/crates/sniffnet)
* [SWC](https://github.com/swc-project/swc) - super-fast TypeScript / JavaScript compiler
* [TabbyML/tabby](https://github.com/TabbyML/tabby) - Self-hosted AI coding assistant, an open-source alternative to GitHub Copilot with GPU support and OpenAPI interface [![latest release](https://shields.io/github/v/release/TabbyML/tabby)](https://github.com/TabbyML/tabby/releases/latest)
* [temps](https://github.com/gotempsh/temps) - A self-hosted PaaS that replaces Vercel, analytics, error tracking, and uptime monitoring with a single Rust binary
* [tiny](https://github.com/osa1/tiny) - A terminal IRC client
* [topjohnwu/Magisk](https://github.com/topjohnwu/Magisk) - A suite of open source tools for customizing Android, providing root access, boot image manipulation, and systemless modifications
* [Tura-AI/tura](https://github.com/Tura-AI/tura) - A local coding agent for terminal, desktop GUI, and command-line workflows, with persistent task state and evidence-backed verification. [![CI](https://github.com/Tura-AI/tura/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/Tura-AI/tura/actions/workflows/ci.yml)
* [Typst](https://github.com/typst/typst) - A markup-based typesetting system [![crates.io](https://img.shields.io/crates/v/typst.svg)](https://crates.io/crates/typst)
* [UpVPN](https://github.com/upvpn/upvpn-app) - WireGuard VPN client for macOS, Linux, and Windows built on Tauri.
* [vortix](https://github.com/Harry-kp/vortix) - Terminal UI for WireGuard and OpenVPN with real-time telemetry, leak detection, and kill switch
* [vproxy](https://github.com/0x676e67/vproxy) - A high-performance HTTP/HTTPS/SOCKS5 proxy server [![crates.io](https://img.shields.io/crates/v/vproxy.svg)](https://crates.io/crates/vproxy)
* [wasmer](https://github.com/wasmerio/wasmer) - A safe and fast WebAssembly runtime supporting WASI and Emscripten [![Build Status](https://github.com/wasmerio/wasmer/actions/workflows/build.yml/badge.svg)](https://github.com/wasmerio/wasmer/actions)
* [Weld](https://github.com/serayuzgur/weld) - Full fake REST API generator
* [wezterm](https://github.com/wezterm/wezterm) - A GPU-accelerated cross-platform terminal emulator and multiplexer
* [WinterJS](https://github.com/wasmerio/winterjs) - A secure JavaScript runtime built with SpiderMonkey and Axum
* [zellij](https://github.com/zellij-org/zellij) - A terminal multiplexer (workspace) with batteries included
* [Zephyr](https://github.com/Juwan-Hwang/Zephyr) - A modern, lightweight, and secure Mihomo (Clash Meta) GUI client built with Tauri. [![Security Audit](https://github.com/Juwan-Hwang/Zephyr/actions/workflows/security.yml/badge.svg)](https://github.com/Juwan-Hwang/Zephyr/actions/workflows/security.yml)

### Audio and Music

* [AreevAI/flowcat](https://github.com/AreevAI/flowcat) - Native-Rust runtime for real-time voice AI agents (phone + WebRTC), self-hosted single binary, pipecat-compatible
* [dano](https://github.com/kimono-koans/dano) - A hashdeep/md5tree (but much more) for media files
* [enginesound](https://github.com/DasEtwas/enginesound) - A GUI and command line application used to procedurally generate semi-realistic engine sounds. Featuring in-depth configuration, variable sample rate and a frequency analysis window.
* [Festival](https://github.com/hinto-janai/festival) - A local music player/server/client [![build-badge](https://github.com/hinto-janai/festival/actions/workflows/ci.yml/badge.svg)](https://github.com/hinto-janai/festival/actions/workflows/ci.yml)
* [figsoda/mmtc](https://github.com/figsoda/mmtc) [[mmtc](https://crates.io/crates/mmtc)] - Minimal mpd terminal client that aims to be simple yet highly configurable [![build-badge](https://github.com/figsoda/mmtc/actions/workflows/ci.yml/badge.svg)](https://github.com/figsoda/mmtc/actions/workflows/ci.yml)
* [Glicol](https://github.com/chaosprint/glicol) - Graph-oriented live coding language, for collaborative musicking in browsers.
* [LargeModGames/spotatui](https://github.com/LargeModGames/spotatui) [[spotatui](https://crates.io/crates/spotatui)] - A Spotify terminal client with native streaming, synced lyrics, and real-time audio visualization [![Continuous Deployment](https://github.com/LargeModGames/spotatui/actions/workflows/cd.yml/badge.svg)](https://github.com/LargeModGames/spotatui/actions/workflows/cd.yml)
* [mierak/rmpc](https://github.com/mierak/rmpc) [[rmpc](https://crates.io/crates/rmpc)] - A modern and configurable, terminal based MPD Client with album art support
* [ncspot](https://github.com/hrkfdn/ncspot) - Cross-platform ncurses Spotify client, inspired by ncmpc and the likes. [![build badge](https://github.com/hrkfdn/ncspot/actions/workflows/ci.yml/badge.svg)](https://github.com/hrkfdn/ncspot/actions?query=workflow%3ABuild)
* [OpenMeters](https://github.com/httpsworldview/openmeters) - Fast, simple, and professional audio metering/visualization for Linux written in Rust.
* [Pinepods](https://github.com/madeofpendletonwool/PinePods) - A rust based podcast management system with multi-user support. Pinepods utilizes a central database so aspects like listen time and themes follow from device to device. With clients built using Tauri, it's a full cross-platform listening solution! [![Docker Container Build](https://github.com/madeofpendletonwool/PinePods/actions/workflows/docker-publish.yml/badge.svg)](https://github.com/madeofpendletonwool/PinePods/actions/workflows/docker-publish.yml)
* [PodFetch](https://github.com/SamTV12345/PodFetch) - A self-hosted podcast manager that automatically downloads new episodes, with a web UI for listening and a GPodder-compatible sync API for mobile apps like AntennaPod. [![build badge](https://github.com/SamTV12345/PodFetch/actions/workflows/rust.yml/badge.svg)](https://github.com/SamTV12345/PodFetch/actions/workflows/rust.yml)
* [Polaris](https://github.com/agersant/polaris) - A music streaming application.
* [Spotify Player](https://github.com/aome510/spotify-player) - A Spotify player in the terminal with full feature parity.
* [Spotifyd](https://github.com/Spotifyd/spotifyd) - An open source Spotify client running as a UNIX daemon. [![Continuous Integration](https://github.com/Spotifyd/spotifyd/actions/workflows/ci.yml/badge.svg)](https://github.com/Spotifyd/spotifyd/actions/workflows/ci.yml)
* [termusic](https://github.com/tramhao/termusic) - Music Player TUI written
* [tunein-cli](https://github.com/tsirysndr/tunein-cli) - Browse and listen to thousands of radio stations across the globe right from your terminal [![CI](https://github.com/tsirysndr/tunein-cli/actions/workflows/ci.yml/badge.svg)](https://github.com/tsirysndr/tunein-cli/actions/workflows/ci.yml)
* [WhatBPM](https://github.com/sergree/whatbpm) - A daily statically generated information resource for electronic dance music producers. Provides daily analytics on the most frequently used values for each EDM genre: tempos, keys, root notes, and so on, using publicly available data such as Beatport and Spotify.

### Blockchain

* [Anchor](https://github.com/solana-foundation/anchor) - Anchor is the leading development framework for building secure Solana programs (smart contracts).
* [artemis](https://github.com/paradigmxyz/artemis) - A simple, modular, and fast framework for writing MEV bots.
* [Bitcoin Satoshi's Vision](https://github.com/brentongunning/rust-sv) [[sv](https://crates.io/crates/sv)] - A library for working with Bitcoin SV.
* [cairo](https://github.com/starkware-libs/cairo) - Cairo is the first Turing-complete language for creating provable programs for general computation. This is also the native language of [StarkNet](https://www.starknet.io), a ZK-Rollup using STARK proofs ![GitHub Workflow Status](https://img.shields.io/github/workflow/status/starkware-libs/cairo/CI?style=flat-square&logo=github)
* [ChainX](https://github.com/chainx-org/ChainX) - Fully Decentralized Interchain Crypto Asset Management on Polkadot.
* [CITA](https://github.com/citahub/cita) - A high performance blockchain kernel for enterprise users.
* [coinbase-pro-rs](https://github.com/inv2004/coinbase-pro-rs) - Coinbase pro client, supports sync/async/websocket
* [datahaven-xyz/datahaven](https://github.com/datahaven-xyz/datahaven) - AI-First Decentralized Storage secured by EigenLayer.
* [Diem](https://github.com/diem/diem) - Diem’s mission is to enable a simple global currency and financial infrastructure that empowers billions of people.
* [dusk-network/rusk](https://github.com/dusk-network/rusk) - Reference implementation of Dusk, a privacy-focused, scalable FMI for real-world assets (RWA) and compliant financial applications. [![Build Status](https://github.com/dusk-network/rusk/actions/workflows/rusk_ci.yml/badge.svg)](https://github.com/dusk-network/rusk/actions/workflows/rusk_ci.yml)
* [electrumrs](https://github.com/romanz/electrs) - An efficient re-implementation of Electrum Server.
* [equilibriumco/beerus](https://github.com/equilibriumco/beerus) - Beerus is a trustless StarkNet Light Client, ⚡blazing fast ⚡ [![GitHub Workflow Status](https://github.com/equilibriumco/beerus/actions/workflows/check.yml/badge.svg)](https://github.com/equilibriumco/beerus/actions/workflows/check.yml)
* [ethabi](https://github.com/rust-ethereum/ethabi) - Encode and decode smart contract invocations.
* [ethaddrgen](https://github.com/Limeth/ethaddrgen) - Custom Ethereum vanity address generator
* [etk](https://github.com/quilt/etk) - etk is a collection of tools for writing, reading, and analyzing EVM bytecode.
* [Forest](https://github.com/ChainSafe/forest) - Filecoin implementation [![Build Status](https://img.shields.io/circleci/build/gh/ChainSafe/forest/main?branch=master)](https://app.circleci.com/pipelines/github/ChainSafe/forest?branch=main)
* [Foundry](https://github.com/foundry-rs/foundry) - Foundry is a blazing fast, portable and modular toolkit for Ethereum application development. ![Build Status](https://img.shields.io/github/workflow/status/foundry-rs/foundry/test?style=flat-square)
* [Grin](https://github.com/mimblewimble/grin/) - Evolution of the MimbleWimble protocol
* [hdwallet](https://github.com/jjyr/hdwallet) [[hdwallet](https://crates.io/crates/hdwallet)] - BIP-32 HD wallet related key derivation utilities.
* [Holochain](https://github.com/holochain/holochain) - Scalable P2P alternative to blockchain for all those distributed apps you always wanted to build. [![detect critical check failures](https://github.com/holochain/holochain/actions/workflows/autorebase.yml/badge.svg)](https://github.com/holochain/holochain/actions/)
* [Hyperlane](https://github.com/hyperlane-xyz/hyperlane-monorepo) - Framework for permissionless, modular interoperability. The offchain clients are written in Rust, as well as the smart contracts for Solana VM and CosmWasm.
* [ibc-rs](https://github.com/informalsystems/hermes) - Implementation of the [Interblockchain Communication](https://docs.cosmos.network/ibc) protocol
* [infincia/bip39-rs](https://github.com/infincia/bip39-rs) [[bip39](https://crates.io/crates/bip39)] - Implementation of BIP39.
* [interBTC](https://github.com/interlay/interbtc) - Trustless and fully decentralized Bitcoin bridge to Polkadot and Kusama.
* [Joystream](https://github.com/Joystream/joystream) - A user governed video platform
* [Kaspa](https://github.com/kaspanet/rusty-kaspa) - The fastest, open-source, decentralized & fully scalable Layer-1 in the world.
* [Lighthouse](https://github.com/sigp/lighthouse) - Ethereum Consensus Layer (CL) Client [![Build Status](https://github.com/sigp/lighthouse/actions/workflows/test-suite.yml/badge.svg)](https://github.com/sigp/lighthouse/actions)
* [linera-io/linera-protocol](https://github.com/linera-io/linera-protocol) - A decentralized blockchain infrastructure designed for highly scalable, low-latency Web3 applications [![Build Status](https://github.com/linera-io/linera-protocol/actions/workflows/rust.yml/badge.svg)](https://github.com/linera-io/linera-protocol/actions/workflows/rust.yml)
* [near/nearcore](https://github.com/near/nearcore) - decentralized smart-contract platform for low-end mobile devices.
* [Nervos CKB](https://github.com/nervosnetwork/ckb) - Nervos CKB is a public permissionless blockchain, the common knowledge layer of Nervos network.
* [opensea-rs](https://github.com/gakonst/opensea-rs) - Bindings & CLI to the Opensea API and Contracts.
* [Parity-Bitcoin](https://github.com/paritytech/parity-bitcoin) - The Parity Bitcoin client
* [Phala-Network/phala-blockchain](https://github.com/Phala-Network/phala-blockchain) - Confidential smart contract blockchain based on Intel SGX and Substrate
* [polkadot-sdk](https://github.com/paritytech/polkadot-sdk) - The Parity Polkadot Blockchain SDK
* [pragma-org/amaru](https://github.com/pragma-org/amaru) - A Cardano node client written in Rust.
* [reth](https://github.com/paradigmxyz/reth) - Modular, contributor-friendly and blazing-fast implementation of the Ethereum protocol.
* [revm](https://github.com/bluealloy/revm) - Revolutionary Machine (revm) is a fast Ethereum virtual machine.
* [rust-bitcoin](https://github.com/rust-bitcoin/rust-bitcoin) - Library with support for de/serialization, parsing and executing on data structures and network messages related to Bitcoin.

_…превью ограничено; полный список — в репозитории._

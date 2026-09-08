---
title: "awesome-ios"
description: "Курируемый awesome-список: awesome-ios"
layout: awesome/single
awesome_repo: "https://github.com/vsouza/awesome-ios"
awesome_readme: "README.md"
---

> Источник: [awesome-ios](https://github.com/vsouza/awesome-ios) — синхронизируется из внешнего репозитория как sparse-субмодуль (только список).

<div align="center">
    <img src="https://github.com/vsouza/awesome-ios/blob/master/header.png?raw=true" alt="Awesome">
    <br>
    <p align="center">
        <img alt="awesome" src="https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg" />
        <a href="https://ko-fi.com/M4M3WPRD"><img width="110" alt="Buy  Me a Coffee" src="buy_me_a_coffee.png" /></a>
    </p>
    <a href="http://github.com/Doloffer-g/guide">
        <img src="sponsor_banner.png" alt="Sponsor">
    </a>
</div>




## Contributing and Collaborating

Please see [CONTRIBUTING](https://github.com/vsouza/awesome-ios/blob/master/.github/CONTRIBUTING.md) and [CODE-OF-CONDUCT](https://github.com/vsouza/awesome-ios/blob/master/CODE_OF_CONDUCT.md) for details.

## Contents

- [Analytics](#analytics)
- [App Routing](#app-routing)
- [Apple TV](#apple-tv)
- [App Store](#app-store)
- [Architecture Patterns](#architecture-patterns)
- [ARKit](#arkit)
- [Authentication](#authentication)
- [Blockchain](#blockchain)
- [Books](#books)
- [Cache](#cache)
- [Charts](#charts)
- [Code Injection](#code-injection)
- [Code Quality](#code-quality)
    - [Linter](#linter)
- [Color](#color)
- [Command Line](#command-line)
- [Concurrency](#concurrency)
- [Core Data](#core-data)
- [Courses](#courses)
    - [Getting Started](#getting-started)
- [Database](#database)
- [Data Structures / Algorithms](#data-structures--algorithms)
- [Date & Time](#date--time)
- [Debugging](#debugging)
- [Dependency Injection](#dependency-injection)
- [Dependency / Package Manager](#dependency--package-manager)
- [Deployment / Distribution](#deployment--distribution)
- [EventBus](#eventbus)
- [Files](#files)
- [Functional Programming](#functional-programming)
- [Games](#games)
- [GCD](#gcd)
- [Gesture](#gesture)
- [Graphics](#graphics)
- [Hardware](#hardware)
    - [Bluetooth](#bluetooth)
    - [Camera](#camera)
    - [Force Touch](#force-touch)
    - [iBeacon](#ibeacon)
    - [Location](#location)
    - [Other Hardware](#other-hardware)
- [Layout](#layout)
- [Localization](#localization)
- [Logging](#logging)
- [Machine Learning](#machine-learning)
- [Maps](#maps)
- [Math](#math)
- [Media](#media)
    - [Audio](#audio)
    - [GIF](#gif)
    - [Image](#image)
    - [Media Processing](#media-processing)
    - [PDF](#pdf)
    - [Streaming](#streaming)
    - [Video](#video)
- [Messaging](#messaging)
- [Networking](#networking)
- [Newsletters](#newsletters)
- [Notifications](#notifications)
    - [Push Notifications](#push-notifications)
    - [Push Notification Providers](#push-notification-providers)
- [Objective-C Runtime](#objective-c-runtime)
- [Optimization](#optimization)
- [Other Awesome Lists](#other-awesome-lists)
- [Parsing](#parsing)
    - [CSV](#csv)
    - [JSON](#json)
    - [XML & HTML](#xml--html)
    - [Other Parsing](#other-parsing)
- [Passbook](#passbook)
- [Payments](#payments)
- [Permissions](#permissions)
- [Podcasts](#podcasts)
- [Project setup](#project-setup)
- [Prototyping](#prototyping)
- [Rapid Development](#rapid-development)
- [Reactive Programming](#reactive-programming)
    - [React-Like](#react-like)
- [Reference](#reference)
- [Reflection](#reflection)
- [Regex](#regex)
- [SDK](#sdk)
    - [Official](#official)
    - [Unofficial](#unofficial)
- [Security](#security)
    - [Encryption](#encryption)
    - [Keychain](#keychain)
- [Server](#server)
- [Style Guides](#style-guides)
- [Testing](#testing)
    - [TDD / BDD](#tdd--bdd)
    - [A/B Testing](#ab-testing)
    - [UI Testing](#ui-testing)
    - [Other Testing](#other-testing)
- [Text](#text)
    - [Font](#font)
- [UI](#ui)
    - [Activity Indicator](#activity-indicator)
    - [Alert & Action Sheet](#alert--action-sheet)
    - [Animation](#animation)
    - [Transition](#transition)
    - [Badge](#badge)
    - [Button](#button)
    - [Calendar](#calendar)
    - [Cards](#cards)
    - [Form & Settings](#form--settings)
    - [Keyboard](#keyboard)
    - [Label](#label)
    - [Login](#login)
    - [Menu](#menu)
    - [Navigation Bar](#navigation-bar)
    - [PickerView](#pickerview)
    - [Popup](#popup)
    - [Progress View](#progress-view)
    - [Pull to Refresh](#pull-to-refresh)
    - [Rating Stars](#rating-stars)
    - [ScrollView](#scrollview)
    - [Segmented Control](#segmented-control)
    - [Slider](#slider)
    - [Splash View](#splash-view)
    - [Status Bar](#status-bar)
    - [Stepper](#stepper)
    - [Switch](#switch)
    - [Tab Bar](#tab-bar)
    - [Table View / Collection View](#table-view--collection-view)
      - [Table View](#table-view)
      - [Collection View](#collection-view)
      - [Expandable Cell](#expandable-cell)
      - [Header](#header)
      - [Placeholder](#placeholder)
      - [Collection View Layout](#collection-view-layout)
    - [Tag](#tag)
    - [TextField & TextView](#textfield--textview)
    - [UIPageControl](#uipagecontrol)
    - [Web View](#web-view)
- [Utility](#utility)
- [User Consent](#user-consent)
- [VR](#vr)
- [Walkthrough / Intro / Tutorial](#walkthrough--intro--tutorial)
- [Websites](#websites)
- [Websocket](#websocket)
- [Tools](#tools)
- [Tutorials and Keynotes](#tutorials-and-keynotes)
- [UI Templates](#ui-templates)
- [Xcode](#xcode)
    - [Extensions (Xcode 8+)](#extensions-xcode-8)
    - [Themes](#themes)
    - [Other Xcode](#other-xcode)


## 🔥 Premium Resources | Follow

Check out our premium resources for further learning:
- [Premium Guide](http://github.com/Doloffer-g/guide)

<a href="http://github.com/Doloffer-g/guide">
        <img src="sponsor_banner_2.png" alt="Sponsor">
    </a>

## Analytics

 *Analytics platforms, SDK's, error tracking and real-time answers about your app*

- [Answers by Fabric](https://get.fabric.io) - Answers gives you real-time insight into people’s experience in your app.
- [Aptabase](https://aptabase.com/for-swift) - Open Source, Privacy-First and Simple Analytics for Swift Apps.
- [Bugsnag](https://www.bugsnag.com/platforms/ios-crash-reporting) - Error tracking with a free tier. Error reports include data on device, release, user, and allows arbitrary data.
- [Countly](https://count.ly) - Open source, mobile & web analytics, crash reports and push notifications platform for iOS & Android.
- [devtodev](https://www.devtodev.com/) - Comprehensive analytics service that improves your project and saves time for product development.
- [Embrace](http://embrace.io) - Mobile observability, built on OpenTelemetry, to provide user-focused, reliable apps.
- [Emerge Tools](https://www.emergetools.com) - Prevent app size & performance regressions on every pull request, get automated insights on how to improve.
- [Instabug](https://instabug.com) - In-app feedback, Bug and Crash reporting, Fix Bugs Faster through user-steps, video recordings, screen annotation, network requests logging.
- [Matomo](https://github.com/matomo-org/matomo-sdk-ios) - The MatomoTracker is an iOS, tvOS and macOS SDK for sending app analytics to a Matomo server.
- [Measure](https://measure.sh/) - Open source, self-hostable mobile app monitoring with error tracking, performance tracing and full session timelines to spend less time stitching context and fix issues faster.
- [Mixpanel](https://mixpanel.com/) - Advanced analytics platform.
- [MOCA Analytics](https://www.mocaplatform.com/features) - Paid cross-platform analytics backend.
- [Segment](https://github.com/segmentio/analytics-ios) - The hassle-free way to integrate analytics into any iOS application.
- [Sentry](https://sentry.io/) - Sentry provides self-hosted and cloud-based error monitoring that helps all software teams discover, triage, and prioritize errors in real-time.
- [Shake](https://www.shakebugs.com/) - In-app feedback and bug reporting tool. Fix app bugs up to 50x faster with detailed device data, repro steps, video recording, black box data, network requests and custom logging.

**[back to top](#contributing-and-collaborating)**

## App Routing

  *Elegant URL routing, navigation frameworks, deep links and more*

- [ApplicationCoordinator](https://github.com/AndreyPanov/ApplicationCoordinator) - Coordinator is an object that handles navigation flow and shares flow’s handling for the next coordinator after switching on the next chain.
- [Appz](https://github.com/SwiftKitz/Appz) - Easily launch and deeplink into external applications, falling back to web if not installed.
- [Composable Navigator](https://github.com/Bahn-X/swift-composable-navigator) - An open source library for building deep-linkable SwiftUI applications with composition, testing and ergonomics in mind
- [Crossroad](https://github.com/giginet/Crossroad) - Crossroad is an URL router focused on handling Custom URL Schemes. Using this, you can route multiple URL schemes and fetch arguments and parameters easily.
- [DeepLinkKit](https://github.com/button/DeepLinkKit) - A splendid route-matching, block-based way to handle your deep links.
- [JLRoutes](https://github.com/joeldev/JLRoutes) - URL routing library for iOS with a simple block-based API.
- [Linker](https://github.com/MaksimKurpa/Linker) - Lightweight way to handle internal and external deeplinks for iOS.
- [Marshroute](https://github.com/avito-tech/Marshroute) - Marshroute is an iOS Library for making your Routers simple but extremely powerful.
- [RouteComposer](https://github.com/ekazaev/route-composer) - Library that helps to handle view controllers composition, routing and deeplinking tasks.
- [RxFlow](https://github.com/RxSwiftCommunity/RxFlow) - Navigation framework for iOS applications based on a Reactive Flow Coordinator pattern.
- [SwiftCurrent](https://github.com/wwt/SwiftCurrent) - A library for managing complex workflows.
- [SwiftRouter](https://github.com/skyline75489/SwiftRouter) - A URL Router for iOS.
- [URLNavigator](https://github.com/devxoul/URLNavigator) - Elegant URL Routing for Swift
- [WAAppRouting](https://github.com/Wasappli/WAAppRouting) - iOS routing done right. Handles both URL recognition and controller displaying with parsed parameters. All in one line, controller stack preserved automatically!

**[back to top](#contributing-and-collaborating)**

## App Store

*Apple Guidelines and version notification libraries*

- [Apple Review Guidelines](https://developer.apple.com/app-store/review/#common-app-rejections) - Highlighted some of the most common issues that cause apps to get rejected.
- [Free App Store Optimization Tool](https://www.mobileaction.co) - Lets you track your App Store visibility in terms of keywords and competitors.

**[back to top](#contributing-and-collaborating)**

## Apple TV

*tvOS view controllers, wrappers, template managers and video players.*

- [ParallaxView](https://github.com/PGSSoft/ParallaxView) - iOS controls and extensions that add parallax effect to your application.
- [TvOSPinKeyboard](https://github.com/zattoo/TvOSPinKeyboard) - PIN keyboard for tvOS.
- [XCDYouTubeKit](https://github.com/0xced/XCDYouTubeKit) - YouTube video player for iOS, tvOS and macOS.

**[back to top](#contributing-and-collaborating)**

## Architecture Patterns

*Clean architecture, Viper, MVVM, Reactive... choose your weapon.*

- [Clean Architecture for SwiftUI + Combine](https://github.com/nalexn/clean-architecture-swiftui) - A demo project showcasing the production setup of the SwiftUI app with Clean Architecture.
- [CleanArchitectureRxSwift](https://github.com/sergdort/CleanArchitectureRxSwift) - Example of Clean Architecture of iOS app using RxSwift.
- [ios-architecture](https://github.com/tailec/ios-architecture) - A collection of iOS architectures - MVC, MVVM, MVVM+RxSwift, VIPER, RIBs and many others.
- [iOS-Viper-Architecture](https://github.com/MindorksOpenSource/iOS-Viper-Architecture) - This repository contains a detailed sample app that implements VIPER architecture in iOS using libraries and frameworks like Alamofire, AlamofireImage, PKHUD, CoreData etc.
- [Reactant](https://github.com/Brightify/Reactant) - Reactant is a reactive architecture for iOS.
- [Spin](https://github.com/Spinners/Spin.Swift) - A universal implementation of a Feedback Loop system for RxSwift, ReactiveSwift and Combine
- [SwiftyVIPER](https://github.com/codytwinton/SwiftyVIPER) - Makes implementing VIPER architecture much easier and cleaner.
- [The Composable Architecture](https://github.com/pointfreeco/swift-composable-architecture) - The Composable Architecture is a library for building applications in a consistent and understandable way, with composition, testing, and ergonomics in mind.
- [Viperit](https://github.com/ferranabello/Viperit) - Viper Framework for iOS. Develop an app following VIPER architecture in an easy way. Written and tested in Swift.

**[back to top](#contributing-and-collaborating)**

## ARKit

_…превью ограничено; полный список — в репозитории._

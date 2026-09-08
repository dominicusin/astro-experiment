---
title: "awesome-php"
description: "Курируемый awesome-список: awesome-php"
layout: awesome/single
awesome_repo: "https://github.com/ziadoz/awesome-php"
awesome_readme: "README.md"
---

> Источник: [awesome-php](https://github.com/ziadoz/awesome-php) — синхронизируется из внешнего репозитория как sparse-субмодуль (только список).


A curated list of awesome PHP libraries, resources, and useful tools.

## Contributing and Collaborating
Please see [CONTRIBUTING](https://github.com/ziadoz/awesome-php/blob/master/CONTRIBUTING.md), [CODE-OF-CONDUCT](https://github.com/ziadoz/awesome-php/blob/master/CODE-OF-CONDUCT.md) and [COLLABORATING](https://github.com/ziadoz/awesome-php/blob/master/COLLABORATING.md) for details.

## Table of Contents
- [Awesome PHP](#awesome-php)
  - [Composer Repositories](#composer-repositories)
  - [Dependency Management](#dependency-management)
  - [Dependency Management Extras](#dependency-management-extras)
  - [Frameworks](#frameworks)
  - [Framework Extras](#framework-extras)
  - [Content Management Systems](#content-management-systems-cms)
  - [Components](#components)
  - [Micro Frameworks](#micro-frameworks)
  - [Micro Framework Extras](#micro-framework-extras)
  - [Routers](#routers)
  - [Templating](#templating)
  - [Static Site Generators](#static-site-generators)
  - [HTTP](#http)
  - [Scraping](#scraping)
  - [Middlewares](#middlewares)
  - [URL](#url)
  - [Email](#email)
  - [Files](#files)
  - [Streams](#streams)
  - [Dependency Injection](#dependency-injection)
  - [Imagery](#imagery)
  - [Testing](#testing)
  - [Continuous Integration](#continuous-integration)
  - [Documentation](#documentation)
  - [Security](#security)
  - [Passwords](#passwords)
  - [Code Analysis](#code-analysis)
  - [Code Quality](#code-quality)
  - [Static Analysis](#static-analysis)
  - [Architectural](#architectural)
  - [Debugging and Profiling](#debugging-and-profiling)
  - [Error Tracking and Monitoring Services](#error-tracking-and-monitoring-services)
  - [Build Tools](#build-tools)
  - [Task Runners](#task-runners)
  - [Navigation](#navigation)
  - [Asset Management](#asset-management)
  - [Geolocation](#geolocation)
  - [Date and Time](#date-and-time)
  - [Event](#event)
  - [Logging](#logging)
  - [E-commerce](#e-commerce)
  - [PDF](#pdf)
  - [Office](#office)
  - [Database](#database)
  - [Migrations](#migrations)
  - [NoSQL](#nosql)
  - [Queue](#queue)
  - [Search](#search)
  - [Command Line](#command-line)
  - [Authentication and Authorization](#authentication-and-authorization)
  - [Markup and CSS](#markup-and-css)
  - [JSON](#json)
  - [Strings](#strings)
  - [Numbers](#numbers)
  - [Filtering, Sanitizing and Validation](#filtering-sanitizing-and-validation)
  - [API](#api)
  - [Caching and Locking](#caching-and-locking)
  - [Data Structure and Storage](#data-structure-and-storage)
  - [Notifications](#notifications)
  - [Deployment](#deployment)
  - [Internationalisation and Localisation](#internationalisation-and-localisation)
  - [Serverless](#serverless)
  - [Configuration](#configuration)
  - [LLMs](#llms)
  - [Third Party APIs](#third-party-apis)
  - [Extensions](#extensions)
  - [Miscellaneous](#miscellaneous)
- [Software](#software)
  - [PHP Installation](#php-installation)
  - [Development Environment](#development-environment)
  - [Virtual Machines](#virtual-machines)
  - [Text Editors and IDEs](#text-editors-and-ides)
  - [Web Applications](#web-applications)
  - [Infrastructure](#infrastructure)
- [Resources](#resources)
  - [PHP Websites](#php-websites)
  - [PHP Books](#php-books)
  - [PHP Videos](#php-videos)
  - [PHP Conferences](#php-conferences)
  - [PHP Podcasts](#php-podcasts)
  - [PHP Newsletters](#php-newsletters)
  - [PHP Reading](#php-reading)
  - [PHP Internals Reading](#php-internals-reading)

### Composer Repositories
*Composer Repositories.*

* [Firegento](https://packages.firegento.com/) - Magento Module Composer Repository.
* [Packagist](https://packagist.org/) - The PHP Package Repository.
* [Packalyst](https://packalyst.com/) - The Laravel package repository.
* [Private Packagist](https://packagist.com/) - Composer package archive as a service for PHP.
* [WordPress Packagist](https://wpackagist.org/) - Manage your plugins with Composer.

### Dependency Management
*Libraries for dependency and package management.*

* [Composer](https://getcomposer.org/) - A package and dependency manager.
* [Composer Installers](https://github.com/composer/installers) - A multi-framework Composer library installer.
* [Phive](https://phar.io/) - A PHAR manager.
* [Pickle](https://github.com/FriendsOfPHP/pickle) - A PHP extension installer.
* [Pie](https://github.com/php/pie) - The official PHP installer for extensions.

### Dependency Management Extras
*Extras related to dependency management.*

* [Composer Merge Plugin](https://github.com/wikimedia/composer-merge-plugin) - A composer plugin to merge several `composer.json` files.
* [Composer Normalize](https://github.com/ergebnis/composer-normalize) - A plugin for normalizing `composer.json` files.
* [Composer Patches](https://github.com/cweagans/composer-patches) - A plugin for Composer to apply patches.
* [Composer Prefer Lowest Validator](https://github.com/dereuromark/composer-prefer-lowest) - A plugin to check if minimum dependencies can be installed and tested.
* [Composer Require Checker](https://github.com/maglnet/ComposerRequireChecker) - CLI tool to analyze composer dependencies and verify that no unknown symbols are used in the sources of a package.
* [Composer Unused](https://github.com/composer-unused/composer-unused) - A CLI Tool to scan for unused composer packages.
* [Repman](https://repman.io) - A private PHP package repository manager and Packagist proxy.
* [Satis](https://github.com/composer/satis) - A static Composer repository generator.

### Frameworks
*Web development frameworks.*

* [CakePHP](https://cakephp.org/) - A rapid application development framework.
* [CodeIgniter](https://codeigniter.com/) - A powerful PHP framework with a very small footprint.
* [Ecotone](https://docs.ecotone.tech/) - A Service Bus for PHP based on architectural principles of DDD CQRS and Event Sourcing.
* [Laminas](https://getlaminas.org/) - A framework comprised of individual components (previously Zend Framework).
* [Laravel](https://laravel.com/) - A web application framework with expressive, elegant syntax.
* [Nette](https://nette.org) - A web framework comprised of mature components.
* [Phalcon](https://phalcon.io/en-us) - A framework implemented as a C extension.
* [Spiral](https://spiral.dev/) - A high-performance PHP/Go framework.
* [Symfony](https://symfony.com/) - A set of reusable components and a web framework.
* [Tempest](https://github.com/tempestphp/tempest-framework) - A framework that gets out of your way.
* [Yii2](https://github.com/yiisoft/yii2/) - A fast, secure, and efficient web framework.

### Framework Extras
*Extras related to web development frameworks.*

* [CakePHP CRUD](https://github.com/friendsofcake/crud) - A Rapid Application Development (RAD) plugin for CakePHP.
* [Filament PHP](https://filamentphp.com/) - A powerful open source UI framework for Laravel.
* [Inertia.js](https://inertiajs.com/) - An adapter for building single-page applications using server-side routing and controllers, without a separate API.
* [LaravelS](https://github.com/hhxsv5/laravel-s) - An out-of-the-box adapter between Laravel/Lumen and Swoole.
* [Livewire](https://livewire.laravel.com/) - Powerful, dynamic, front-end UIs without leaving PHP.

### Content Management Systems (CMS)
*Tools for managing digital content.*

* [Backdrop](https://backdropcms.org) - A CMS targeting small-to-medium-sized business and non-profits (a fork of Drupal).
* [Concrete5](https://www.concretecms.com/) - A CMS targeting users with a minimum of technical skills.
* [CraftCMS](https://github.com/craftcms/cms) - A flexible, user-friendly CMS for creating custom digital experiences on the web and beyond.
* [Drupal](https://new.drupal.org/home) - An enterprise level CMS.
* [Grav](https://github.com/getgrav/grav) - A modern flat-file CMS.
* [Joomla](https://www.joomla.org/) - Another leading CMS.
* [Kirby](https://getkirby.com/) - A flat-file CMS that adapts to any project.
* [Magento](https://github.com/magento/magento2) - A widely used open-source e-commerce platform.
* [Moodle](https://moodle.org/) - An open-source learning platform.
* [OctoberCMS](https://octobercms.com/) - A CMS built on Laravel.
* [OpenMage](https://github.com/OpenMage/magento-lts) - Fork of EoL Magento 1 e-commerce platform.
* [Pico CMS](https://picocms.org/) - A lightweight flat-file CMS.
* [Silverstripe](https://www.silverstripe.org/) - A simple, flexible, and secure CMS.
* [Statamic](https://statamic.com/) - A flat-file and Git-based CMS built on Laravel.
* [Sulu](https://sulu.io/) - A user- and developer-friendly CMS built on the Symfony Framework.
* [TYPO3](https://typo3.org) - An enterprise level CMS.
* [WinterCMS](https://wintercms.com) - A community-maintained fork of OctoberCMS built on Laravel.
* [WordPress](https://github.com/WordPress/WordPress) - A blogging platform and CMS.

### Components
*Standalone components from web development frameworks and development groups.*

* [Aura](https://auraphp.com/) - Independent components, fully decoupled from each other and from any framework.
* [CakePHP Plugins](https://plugins.cakephp.org/) - A directory of CakePHP plugins.
* [Laminas Components](https://docs.laminas.dev/components/) - The components that make the Laminas Framework.
* [Laravel Components](https://github.com/illuminate) - The Laravel Framework components.
* [League of Extraordinary Packages](https://thephpleague.com/) - A PHP package development group.
* [Spatie Open Source](https://spatie.be/open-source) - A collection of open-source PHP and Laravel packages.
* [Symfony Packages](https://symfony.com/packages) - Decoupled libraries for PHP applications.

### Micro Frameworks
*Micro frameworks and routers.*

* [Laravel Zero](https://laravel-zero.com) - A micro-framework for console applications.
* [Mezzio](https://getexpressive.org/) - A micro-framework by Laminas.
* [Minicli](https://github.com/minicli/minicli) - Minimalist, dependency-free framework for building CLI-centric PHP applications.
* [Silly](https://github.com/mnapoli/silly) - A micro-framework for CLI applications.
* [Slim](https://www.slimframework.com/) - Another simple micro framework.

### Micro Framework Extras
*Extras related to micro frameworks and routers.*

* [Slim Skeleton](https://github.com/slimphp/Slim-Skeleton) - A skeleton for Slim.
* [Slim PHP View](https://github.com/slimphp/PHP-View) - A simple PHP renderer for Slim.

### Routers
*Libraries for handling application routing.*

* [Aura.Router](https://github.com/auraphp/Aura.Router) - A full-featured routing library.
* [Fast Route](https://github.com/nikic/FastRoute) - A fast routing library.
* [Klein](https://github.com/klein/klein.php) - A flexible router.
* [Route](https://github.com/thephpleague/route) - A routing library built on top of Fast Route.

### Templating
*Libraries and tools for templating and lexing.*

* [Latte](https://latte.nette.org/) - The safest and truly intuitive templates for PHP.
* [MtHaml](https://github.com/arnaud-lb/MtHaml) - A PHP implementation of the HAML template language.
* [Mustache](https://github.com/bobthecow/mustache.php) - A PHP implementation of the Mustache template language.
* [PHPTAL](https://phptal.org/) - A PHP implementation of the [TAL](https://en.wikipedia.org/wiki/Template_Attribute_Language) templating language.
* [Plates](https://platesphp.com/) - A native PHP templating library.
* [Smarty](https://www.smarty.net/) - A template engine to complement PHP.
* [Twig](https://twig.symfony.com/) - A comprehensive templating language.

### Static Site Generators
*Tools for pre-processing content to generate web pages.*

* [Cecil](https://cecil.app/) - A simple and powerful content-driven static site generator.
* [Couscous](https://couscous.io) - A tool for converting Markdown documentation into websites.
* [Jigsaw](https://jigsaw.tighten.com/) - Simple static sites with Laravel's Blade.
* [Sculpin](https://sculpin.io) - A tool that converts Markdown and Twig into static HTML.

### HTTP
*Libraries for working with HTTP.*

* [Buzz](https://github.com/kriswallsmith/Buzz) - Another HTTP client.
* [Guzzle](https://github.com/guzzle/guzzle) - A comprehensive HTTP client.
* [HTTPlug](https://httplug.io) - An HTTP client abstraction without binding to a specific implementation.
* [Nyholm PSR-7](https://github.com/Nyholm/psr7) - A super lightweight PSR-7 implementation. Very strict and very fast.
* [PHP VCR](https://php-vcr.github.io/) - A library for recording and replaying HTTP requests.
* [Requests](https://github.com/WordPress/Requests) - A simple HTTP library.
* [Retrofit](https://github.com/tebru/retrofit-php) - A library to ease creation of REST API clients.
* [Saloon](https://github.com/saloonphp/saloon) - A framework for building beautiful API integrations and SDKs.
* [Symfony HTTP Client](https://github.com/symfony/http-client) - A component to fetch HTTP resources synchronously or asynchronously.
* [Laminas Diactoros](https://github.com/laminas/laminas-diactoros) - PSR-7 HTTP Message implementation.

### Scraping
*Libraries for scraping websites and detecting crawlers.*

* [Chrome PHP](https://github.com/chrome-php/chrome) - Instrument headless Chrome/Chromium instances from PHP.
* [CrawlerDetect](https://github.com/JayBizzle/Crawler-Detect) - A PHP class for detecting bots/crawlers/spiders via the user agent.
* [DiDOM](https://github.com/Imangazaliev/DiDOM) - A super-fast HTML scrapper and parser.
* [Embed](https://github.com/php-embed/Embed) - An information extractor from any web service or page.
* [PHP Spider](https://github.com/mvdbos/php-spider) - A configurable and extensible PHP web spider.
* [Symfony Panther](https://github.com/symfony/panther) - A browser testing and web crawling library for PHP and Symfony.

### Middlewares
*Libraries for building application using middlewares.*

* [PSR-15 Middlewares](https://github.com/middlewares/psr15-middlewares) - Inspiring collection of handy middlewares.
* [Stack](https://github.com/stackphp) - A library of stackable middleware for Symfony.
* [Laminas Stratigility](https://github.com/laminas/laminas-stratigility) - Middleware for PHP built on top of PSR-7.

### URL
*Libraries for parsing URLs.*

* [PHP Domain Parser](https://github.com/jeremykendall/php-domain-parser) - A domain suffix parser library.
* [sabre/uri](https://github.com/sabre-io/uri) - A functional URI manipulation library.
* [Uri](https://github.com/thephpleague/uri) - Another URL manipulation library.

### Email

_…превью ограничено; полный список — в репозитории._

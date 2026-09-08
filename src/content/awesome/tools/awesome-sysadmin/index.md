---
title: "awesome-sysadmin"
description: "Курируемый awesome-список: awesome-sysadmin"
layout: awesome/single
awesome_repo: "https://github.com/awesome-foss/awesome-sysadmin"
awesome_readme: "README.md"
---

> Источник: [awesome-sysadmin](https://github.com/awesome-foss/awesome-sysadmin) — синхронизируется из внешнего репозитория как sparse-субмодуль (только список).


[![Awesome](https://github.com/awesome-foss/awesome-sysadmin/blob/main/_static/awesome.png)](https://github.com/sindresorhus/awesome) [![](https://github.com/awesome-foss/awesome-sysadmin-data/actions/workflows/dead-links.yml/badge.svg)](https://github.com/awesome-foss/awesome-sysadmin-data/issues/1) [![](https://github.com/awesome-foss/awesome-sysadmin-data/actions/workflows/unmaintained-projects.yml/badge.svg)](https://github.com/awesome-foss/awesome-sysadmin-data/issues/1)

**A curated list of amazingly awesome Free and Open-Source sysadmin resources.** Please read the [Contributing](#contributing) if you wish to add software and consider [donating](https://github.com/n1trux/awesome-donations) to the FLOSS projects you use regularly. Please consider contributing to fix one of the pinned [issues](https://github.com/awesome-foss/awesome-sysadmin-data/issues) if your time allows.

**[HTML version](https://sysadmin.awesome-selfhosted.net/) (recommended)**, **[Markdown version](https://github.com/awesome-foss/awesome-sysadmin)** (legacy).

See [Contributing](#contributing).

--------------------

## Table of contents

- [Software](#software)
  - [Automation](#automation)
  - [Backups](#backups)
  - [Build and software organization tools](#build-and-software-organization-tools)
  - [ChatOps](#chatops)
  - [Cloud Computing](#cloud-computing)
  - [Code Review](#code-review)
  - [Configuration Management](#configuration-management)
  - [Configuration Management Database](#configuration-management-database)
  - [Continuous Integration & Continuous Deployment](#continuous-integration--continuous-deployment)
  - [Control Panels](#control-panels)
  - [Databases](#databases)
  - [Deployment Automation](#deployment-automation)
  - [Diagramming](#diagramming)
  - [Distributed Filesystems](#distributed-filesystems)
  - [DNS - Control Panels & Domain Management](#dns---control-panels--domain-management)
  - [DNS - Servers](#dns---servers)
  - [Editors](#editors)
  - [Identity Management](#identity-management)
  - [Identity Management - LDAP](#identity-management---ldap)
  - [Identity Management - Single Sign-On (SSO)](#identity-management---single-sign-on-sso)
  - [Identity Management - Tools and web interfaces](#identity-management---tools-and-web-interfaces)
  - [IT Asset Management](#it-asset-management)
  - [Log Management](#log-management)
  - [Mail Clients](#mail-clients)
  - [Metrics & Metric Collection](#metrics--metric-collection)
  - [Miscellaneous](#miscellaneous)
  - [Monitoring & Status Pages](#monitoring--status-pages)
  - [Network Configuration Management](#network-configuration-management)
  - [PaaS](#paas)
  - [Packaging](#packaging)
  - [Project Management](#project-management)
  - [Queuing](#queuing)
  - [Remote Desktop Clients](#remote-desktop-clients)
  - [Router](#router)
  - [Service Discovery](#service-discovery)
  - [Software Containers](#software-containers)
  - [Time Servers](#time-servers)
  - [Troubleshooting](#troubleshooting)
  - [Version control](#version-control)
  - [Virtualization](#virtualization)
  - [VPN](#vpn)
  - [Web](#web)
- [List of Licenses](#list-of-licenses)
- [Anti-features](#anti-features)
- [External links](#external-links)
  - [Communities / Forums](#communities--forums)
  - [Repositories](#repositories)
  - [Websites](#websites)
- [Contributing](#contributing)
- [License](#license)

--------------------

## Software

### Automation

**[`^        back to top        ^`](#awesome-sysadmin)**

Build automation.

- [Apache Ant](https://ant.apache.org/) - Automation build tool, similar to make, a library and command-line tool whose mission is to drive processes described in build files as targets and extension points dependent upon each other. ([Source Code](https://github.com/apache/ant)) `Apache-2.0` `Java`
- [Apache Maven](https://maven.apache.org/) - Build automation tool mainly for Java. A software project management and comprehension tool. Based on the concept of a project object model (POM), Maven can manage a project's build, reporting and documentation from a central piece of information. ([Source Code](https://github.com/apache/maven)) `Apache-2.0` `Java`
- [Bazel](https://www.bazel.io/) - A fast, scalable, multi-language and extensible build system. Used by Google. ([Source Code](https://github.com/bazelbuild/bazel/)) `Apache-2.0` `Java`
- [GNU Make](https://www.gnu.org/software/make/) - The most popular automation build tool for many purposes, make is a tool which controls the generation of executables and other non-source files of a program from the program's source files. ([Source Code](https://git.savannah.gnu.org/cgit/make.git)) `GPL-3.0` `C`
- [Gradle](https://gradle.org/) - Another build automation system. ([Source Code](https://github.com/gradle/gradle)) `Apache-2.0` `Groovy/Java`
- [OpenBolt](https://voxpupuli.org/openvox/) - Orchestration tool to run orchestration workflows or one-off tasks/scripts to automate the provisioning and management of nodes. Community fork of the last open source version of [Puppet Bolt](https://help.puppet.com/bolt/current/topics/bolt.htm). ([Source Code](https://github.com/OpenVoxProject/openbolt)) `Apache-2.0` `Ruby`
- [Rake](https://ruby.github.io/rake/) - Build automation tool similar to Make, written in and extensible in Ruby. ([Source Code](https://github.com/ruby/rake)) `MIT` `Ruby`


### Backups

**[`^        back to top        ^`](#awesome-sysadmin)**

[Backup](https://en.wikipedia.org/wiki/Backup) software.

_See also: [Restic's list of Linux backup software](https://github.com/restic/others)_

- [Backrest](https://garethgeorge.github.io/backrest/) - Backrest is a web UI and orchestrator for restic backup. ([Source Code](https://github.com/garethgeorge/backrest)) `GPL-3.0` `Docker/Go`
- [Backupninja](https://0xacab.org/liberate/backupninja) - Lightweight, extensible meta-backup system, provides a centralized way to configure and coordinate many different backup utilities. `GPL-2.0` `Shell`
- [Bareos](https://www.bareos.org/) - Cross-network backup solution which preserves, archives, and recovers data from all major operating systems. ([Source Code](https://github.com/bareos/bareos)) `AGPL-3.0` `C++/C`
- [Barman](https://pgbarman.org) - Backup and Recovery Manager for PostgreSQL. ([Source Code](https://github.com/EnterpriseDB/barman)) `GPL-3.0` `Python`
- [BorgBackup](https://www.borgbackup.org/) - Deduplicating archiver with compression and authenticated encryption. ([Source Code](https://github.com/borgbackup/borg)) `BSD-3-Clause` `Python`
- [Burp](https://burp.grke.org/) - Network backup and restore program. ([Source Code](https://github.com/grke/burp)) `AGPL-3.0` `C`
- [Dar](http://dar.linux.free.fr/) - Which stands for Disk ARchive, is a robust and rich featured archiving and backup software of the tar style. ([Source Code](https://github.com/Edrusb/DAR)) `GPL-2.0` `C++`
- [Databasus](https://databasus.com/) - PostgreSQL, MySQL, MariaDB and MongoDB backup tool with web UI, external storages (local, S3, FTP, Google Drive, etc.), notifications (webhook, Discord, Slack, etc.) and team management. ([Source Code](https://github.com/databasus/databasus)) `Apache-2.0` `Docker`
- [Duplicati](https://www.duplicati.com) - Backup client that securely stores encrypted, incremental, compressed backups on cloud storage services and remote file servers. ([Source Code](https://github.com/duplicati/duplicati)) `LGPL-2.1` `C#`
- [Duplicity](https://duplicity.gitlab.io/) - Encrypted bandwidth-efficient backup using the rsync algorithm. ([Source Code](https://gitlab.com/duplicity/duplicity)) `GPL-2.0` `Python`
- [Minarca](https://minarca.org/) - Client–server backup platform with a centralized web console to manage and restore Linux, Windows, and macOS backups via GUI or CLI. ([Source Code](https://gitlab.com/ikus-soft/minarca)) `AGPL-3.0` `Python`
- [Portabase](https://portabase.io/) - Server dashboard tool that simplifies the backup and restoration of your database instances. ([Source Code](https://github.com/Portabase/portabase)) `Apache-2.0` `Docker`
- [Proxmox Backup Server](https://www.proxmox.com/en/proxmox-backup-server) - Proxmox Backup Server is an enterprise-class, client-server backup solution thatis capable of backing up virtual machines, containers, and physical hosts. ([Source Code](https://git.proxmox.com/?p=proxmox-backup.git;a=tree)) `GPL-3.0` `Rust`
- [rclone](https://rclone.org/) - Command-line program to sync files and directories to and from different cloud storage providers.. ([Source Code](https://github.com/rclone/rclone)) `MIT` `Go`
- [Rdiff-backup](https://rdiff-backup.net/) - Reverse differential backup tool, over a network or locally. ([Source Code](https://github.com/rdiff-backup/rdiff-backup)) `GPL-2.0` `Python`
- [Restic](https://restic.net/) - Easy, fast, verifiable, secure and efficient remote backup tool. ([Source Code](https://github.com/restic/restic)) `BSD-2-Clause` `Go`
- [Rsnapshot](https://rsnapshot.org/) - Filesystem snapshot utility based on rsync. ([Source Code](https://github.com/rsnapshot/rsnapshot)) `GPL-2.0` `Perl`
- [Shield](https://github.com/shieldproject/shield) - A pluggable architecture for backup and restore of database systems. `MIT` `Go`
- [UrBackup](https://www.urbackup.org/) - Client/Server Open Source Network Backup for Windows, MacOS and Linux. ([Source Code](https://github.com/uroni/urbackup_backend)) `AGPL-3.0` `C/C++`


### Build and software organization tools

**[`^        back to top        ^`](#awesome-sysadmin)**

Build and software organization tools.

- [EasyBuild](https://easybuild.io/) - EasyBuild builds software and modulefiles for High Performance Computing (HPC) systems in an efficient way. ([Source Code](https://github.com/easybuilders/easybuild-easyconfigs)) `GPL-2.0` `Python`
- [Environment Modules](https://envmodules.io/) - Environment Modules provides for the dynamic modification of a user's environment via modulefiles. ([Source Code](https://github.com/envmodules/modules)) `GPL-2.0` `Tcl`
- [Lmod](https://www.tacc.utexas.edu/research-development/tacc-projects/lmod) - Lmod is a Lua based module system that easily handles the MODULEPATH Hierarchical problem. ([Source Code](https://github.com/TACC/Lmod)) `MIT` `Lua`
- [Spack](https://spack.io/) - A flexible package manager that supports multiple versions, configurations, platforms, and compilers. ([Source Code](https://github.com/spack/spack)) `MIT/Apache-2.0` `Python`


### ChatOps

**[`^        back to top        ^`](#awesome-sysadmin)**

Conversation-driven development and management.

_See also: [/r/chatops](https://old.reddit.com/r/chatops)_

- [Eggdrop](https://www.eggheads.org/) - The oldest Internet Relay Chat (IRC) bot still in active development. ([Source Code](https://github.com/eggheads/eggdrop)) `GPL-2.0` `C`
- [Errbot](https://errbot.io/) - Plugin based chatbot designed to be easily deployable, extensible and maintainable. ([Source Code](https://github.com/errbotio/errbot)) `GPL-3.0` `Python`
- [Hubot](https://hubot.github.com/) - A customizable, life embetterment robot. ([Source Code](https://github.com/hubotio/hubot)) `MIT` `Nodejs`


### Cloud Computing

**[`^        back to top        ^`](#awesome-sysadmin)**

[Cloud computing](https://en.wikipedia.org/wiki/Cloud_computing) is the on-demand availability of computer system resources, especially data storage (cloud storage) and computing power, without direct active management by the user.

**Please visit [Cloud Native Software Landscape](https://landscape.cncf.io/?group=projects-and-products&view-mode=card)**



### Code Review

**[`^        back to top        ^`](#awesome-sysadmin)**

[Code review](https://en.wikipedia.org/wiki/Code_review) is a software quality assurance activity in which one or several people check a program mainly by viewing and reading parts of its source code.

**Please visit [awesome-selfhosted/Software Development - Project Management](https://awesome-selfhosted.net/tags/software-development---project-management.html)**



### Configuration Management

**[`^        back to top        ^`](#awesome-sysadmin)**

[Configuration management (CM)](https://en.wikipedia.org/wiki/Configuration_management) is a systems engineering process for establishing and maintaining consistency of a product's performance, functional, and physical attributes with its requirements, design, and operational information throughout its life.

- [Ansible](https://www.ansible.com/) - Provisioning, configuration management, and application-deployment tool. ([Source Code](https://github.com/ansible/ansible)) `GPL-3.0` `Python`
- [CFEngine](https://cfengine.com/) - Configuration management system for automated configuration and maintenance of large-scale computer systems. ([Source Code](https://github.com/cfengine/core)) `GPL-3.0` `C`
- [CINC](https://cinc.sh/) - Free distribution of [Chef](https://www.chef.io/products/chef-infra), a configuration management tool using a pure-Ruby, domain-specific language (DSL) for writing system configuration "recipes". ([Source Code](https://gitlab.com/cinc-project/upstream/chef)) `Apache-2.0` `Ruby`
- [cloud-init](https://cloud-init.io/) - Initialization tool to automate the configuration of VMs, cloud instances, or machines on a network. ([Source Code](https://github.com/canonical/cloud-init)) `GPL-3.0/Apache-2.0` `Python`
- [OpenVox](https://voxpupuli.org/openvox/) - Community fork of the last open source version of [Puppet](https://www.puppet.com/), a software configuration management tool which includes its own declarative language to describe system configuration. ([Source Code](https://github.com/OpenVoxProject/openvox)) `Apache-2.0` `Ruby/C`
- [Rudder](https://www.rudder.io/) - Scalable and dynamic configuration management system for patching, security & compliance, based on CFEngine. ([Source Code](https://github.com/Normation/rudder)) `GPL-3.0` `Scala`
- [Salt](https://docs.saltproject.io/) - Event-driven IT automation, remote task execution, and configuration management software. ([Source Code](https://github.com/saltstack/salt)) `Apache-2.0` `Python`


### Configuration Management Database

**[`^        back to top        ^`](#awesome-sysadmin)**

Configuration management database (CMDB) software.

_Related: [IT Asset Management](#it-asset-management)_

- [i-doit](https://www.i-doit.org/) - IT Documentation and CMDB. `AGPL-3.0` `PHP`
- [iTop](https://combodo.com/) - Complete ITIL web based service management tool. ([Source Code](https://github.com/Combodo/iTop)) `AGPL-3.0` `PHP`
- [netbox](https://netbox.dev/) - IP address management (IPAM) and data center infrastructure management (DCIM) tool. ([Demo](https://demo.netbox.dev/), [Source Code](https://github.com/netbox-community/netbox)) `Apache-2.0` `Python`


### Continuous Integration & Continuous Deployment

**[`^        back to top        ^`](#awesome-sysadmin)**

[Continuous integration](https://en.wikipedia.org/wiki/Continuous_integration)/[deployment](https://en.wikipedia.org/wiki/Continuous_deployment) software.

- [ArgoCD](https://argo-cd.readthedocs.io/en/stable/) - Declarative, GitOps continuous delivery tool for Kubernetes. ([Source Code](https://github.com/argoproj/argo-cd)) `Apache-2.0` `Go`
- [Buildbot](https://buildbot.net/) - Python-based toolkit for continuous integration. ([Source Code](https://github.com/buildbot/buildbot)) `GPL-2.0` `Python`
- [CDS](https://ovh.github.io/cds/) - Enterprise-Grade Continuous Delivery & DevOps Automation Open Source Platform. ([Source Code](https://github.com/ovh/cds)) `BSD-3-Clause` `Go`
- [Concourse](https://concourse-ci.org/) - Concourse is a CI tool that treats pipelines as first class objects and containerizes every step along the way. ([Demo](https://ci.concourse-ci.org/), [Source Code](https://github.com/concourse/concourse)) `Apache-2.0` `Go`
- [GitLab CI](https://about.gitlab.com/solutions/continuous-integration/) - Gitlab's built-in, full-featured CI/CD solution. ([Source Code](https://gitlab.com/gitlab-org/gitlab-foss)) `MIT` `Ruby`
- [GoCD](https://www.go.cd/) - Continuous delivery server. ([Source Code](https://github.com/gocd/gocd)) `Apache-2.0` `Java/Ruby`
- [Harness](https://www.harness.io/open-source) - End-to-end developer platform with Source Control Management, CI/CD Pipelines, Hosted Developer Environments, and Artifact Registries (fork of Drone). ([Source Code](https://github.com/harness/harness)) `Apache-2.0` `Go`
- [Jenkins](https://jenkins-ci.org/) - Continuous Integration Server. ([Source Code](https://github.com/jenkinsci/jenkins/)) `MIT` `Java`
- [Laminar](https://laminar.ohwg.net) - Fast, lightweight, simple and flexible Continuous Integration. ([Source Code](https://github.com/ohwgiles/laminar)) `GPL-3.0` `C++`
- [PHP Censor](https://github.com/php-censor/php-censor) - Open source self-hosted continuous integration server for PHP projects. `BSD-2-Clause` `PHP`
- [Stategraph](https://stategraph.com) - GitOps-first automation platform for Terraform and OpenTofu workflows with support for self-hosted runners. ([Source Code](https://github.com/stategraph/stategraph)) `MPL-2.0` `OCaml/Docker`
- [werf](https://werf.io/) - Open Source CI/CD tool for building Docker images and deploying to Kubernetes via GitOps. ([Source Code](https://github.com/werf/werf)) `Apache-2.0` `Go`
- [Woodpecker](https://woodpecker-ci.org/) - Community fork of Drone that uses Docker containers. ([Source Code](https://github.com/woodpecker-ci/woodpecker)) `Apache-2.0` `Go`


### Control Panels

**[`^        back to top        ^`](#awesome-sysadmin)**

Web hosting and server or service control panels.

- [Ajenti](https://ajenti.org/) - Control panel for Linux and BSD. ([Source Code](https://github.com/ajenti/ajenti)) `MIT` `Python/Shell`
- [Cockpit](https://cockpit-project.org/) - Web-based graphical interface for servers. ([Source Code](https://github.com/cockpit-project/cockpit)) `LGPL-2.1` `C`
- [Froxlor](https://froxlor.org/) - Lightweight server management software with Nginx and PHP-FPM support. ([Source Code](https://github.com/Froxlor/Froxlor/)) `GPL-2.0` `PHP`
- [HestiaCP](https://hestiacp.com/) - Web server control panel (fork of VestaCP). ([Demo](https://demo.hestiacp.com:8083/login/), [Source Code](https://github.com/hestiacp/hestiacp)) `GPL-3.0` `PHP/Shell/Other`
- [ISPConfig](https://www.ispconfig.org) - Manage Linux servers directly through your browser. ([Source Code](https://git.ispconfig.org/ispconfig/ispconfig3)) `BSD-3-Clause` `PHP`
- [MeshCentral](https://meshcentral.com) - A complete web-based remote monitoring and management web site. ([Source Code](https://github.com/ylianst/meshcentral)) `Apache-2.0` `JavaScript/HTML`
- [Virtualmin](https://www.virtualmin.com/) - Powerful and flexible web hosting control panel for Linux and BSD systems. ([Source Code](https://github.com/virtualmin)) `GPL-3.0` `Shell/Perl/Other`
- [Webmin](https://www.webmin.com/) - Web-based interface for system administration for Unix. ([Source Code](https://github.com/webmin/webmin)) `BSD-3-Clause` `Perl`


### Databases

**[`^        back to top        ^`](#awesome-sysadmin)**

Database servers.

**Please visit [dbdb.io - Database of Databases](https://dbdb.io/)**

_See also: [awesome-selfhosted/Database Management](https://awesome-selfhosted.net/tags/database-management.html)_



### Deployment Automation

**[`^        back to top        ^`](#awesome-sysadmin)**

Tools and scripts to support deployments to your servers.

- [Capistrano](https://capistranorb.com/) - Deploy your application to any number of machines simultaneously, in sequence or as a rolling set via SSH (rake based). ([Source Code](https://github.com/capistrano/capistrano)) `MIT` `Ruby`
- [CloudSlang](https://www.cloudslang.io/) - Flow-based orchestration tool for managing deployed applications, with Docker capabilities. ([Source Code](https://github.com/CloudSlang/score)) `Apache-2.0` `Java`
- [CloudStack](https://cloudstack.apache.org/) - Cloud computing software for creating, managing, and deploying infrastructure cloud services. ([Source Code](https://github.com/apache/cloudstack)) `Apache-2.0` `Java/Python`
- [Cobbler](https://cobbler.github.io/) - Cobbler is a Linux installation server that allows for rapid setup of network installation environments. ([Source Code](https://github.com/cobbler/cobbler)) `GPL-2.0` `Python`
- [Fabric](https://www.fabfile.org/) - Python library and cli tool for streamlining the use of SSH for application deployment or systems administration tasks. ([Source Code](https://github.com/fabric/fabric)) `BSD-2-Clause` `Python`
- [FaynoSync](https://faynosync.com) - Self-hosted Dynamic Update Server with statistics, supporting multiple updaters. Flexible features for seamless app updates and insights. ([Source Code](https://github.com/ku9nov/faynoSync), [Clients](https://github.com/ku9nov/faynoSync-dashboard)) `Apache-2.0` `Docker/Go`
- [Genesis](https://github.com/genesis-community/genesis) - A template framework for multi-environment BOSH deployments. `MIT` `Perl`
- [munki](https://www.munki.org/munki/) - Webserver-based repository of packages and package metadata, that allows macOS administrators to manage software installs. ([Source Code](https://github.com/munki/munki)) `Apache-2.0` `Python`
- [Overcast](https://andrewchilds.github.io/overcast/) - Deploy VMs across different cloud providers, and run commands and scripts across any or all of them in parallel via SSH. ([Source Code](https://github.com/andrewchilds/overcast)) `MIT` `Nodejs`


### Diagramming

**[`^        back to top        ^`](#awesome-sysadmin)**

Tools used to create diagrams of networks, flows, etc.

- [Diagrams.net](https://app.diagrams.net/) - A.K.A. [Draw.io](https://app.diagrams.net/). Easy to use Diagram UI with a plethora of templates. ([Source Code](https://github.com/jgraph/drawio)) `Apache-2.0` `JavaScript/Docker`
- [Kroki](https://kroki.io) - API for generating diagrams from textual descriptions. ([Source Code](https://github.com/yuzutech/kroki)) `MIT` `Java`

_…превью ограничено; полный список — в репозитории._

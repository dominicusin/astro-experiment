---
title: "awesome-docker"
description: "Курируемый awesome-список: awesome-docker"
layout: awesome/single
awesome_repo: "https://github.com/veggiemonk/awesome-docker"
awesome_readme: "README.md"
---

> Источник: [awesome-docker](https://github.com/veggiemonk/awesome-docker) — синхронизируется из внешнего репозитория как sparse-субмодуль (только список).


> A curated list of projects for Docker.

If you would like to contribute, please read [CONTRIBUTING.md](https://github.com/veggiemonk/awesome-docker/blob/master/.github/CONTRIBUTING.md) first.
If this list is not complete, you can contribute to make it so.
If you see a link here that is not (any longer) a good fit, you can fix it by submitting a [pull request][editreadme] to improve this file. Thank you!

**The project has to be for Docker, not just using Docker.**

> Rule of thumb: if removing the Docker integration wouldn't kill the project's value proposition, it doesn't belong in the this list.

The creators and maintainers of this list do not receive any form of payment to accept a change made by any contributor.
This page is not an official Docker product in any way.
It is a list of links to projects and is maintained by volunteers.
Everybody is welcome to contribute.
The goal of this repo is to index open-source projects, not to advertise for profit.

> Docker is an open platform for developers and sysadmins to build, ship, and run distributed applications. Consisting of Docker Engine, a portable, lightweight runtime and packaging tool, and Docker Hub, a cloud service for sharing applications and automating workflows, Docker enables apps to be quickly assembled from components and eliminates the friction between development, QA, and production environments. As a result, IT can ship faster and run the same app, unchanged, on laptops, data center VMs, and any cloud.

_Source:_ [What is Docker](https://www.docker.com/why-docker/)

# Contents <!-- omit in toc -->

<!-- TOC -->

- [Projects](#projects)
    - [Engine \& Runtime](#engine--runtime)
    - [Building Images](#building-images)
        - [Builder](#builder)
        - [Base Images](#base-images)
        - [Dockerfile](#dockerfile)
        - [Linter](#linter)
    - [Image Lifecycle](#image-lifecycle)
        - [Registry](#registry)
        - [Registry CLI](#registry-cli)
        - [Image Scanning \& SBOM](#image-scanning--sbom)
        - [Supply Chain](#supply-chain)
    - [Running Containers](#running-containers)
        - [Composition](#composition)
        - [Orchestration](#orchestration)
        - [Deployment \& Platforms](#deployment--platforms)
        - [Garbage Collection](#garbage-collection)
    - [Networking \& Proxies](#networking--proxies)
        - [Networking](#networking)
        - [Reverse Proxy](#reverse-proxy)
    - [Storage \& Data](#storage--data)
    - [Observability](#observability)
    - [Security](#security)
    - [User Interfaces](#user-interfaces)
        - [Desktop](#desktop)
        - [Terminal](#terminal)
        - [Web](#web)
        - [IDE Integrations](#ide-integrations)
    - [Developer Workflow](#developer-workflow)
        - [API Client](#api-client)
        - [CI/CD](#cicd)
        - [Development Environment](#development-environment)
        - [Serverless](#serverless)
        - [Testing](#testing)
        - [Wrappers](#wrappers)
    - [In-Container Tooling](#in-container-tooling)
- [Learning Resources](#learning-resources)
    - [Where to Start](#where-to-start)
    - [Where to Start (Windows)](#where-to-start-windows)
    - [Books \& Tutorials](#books--tutorials)
    - [Awesome Lists](#awesome-lists)
    - [Demos and Examples](#demos-and-examples)
    - [Good Tips](#good-tips)
    - [Raspberry Pi \& ARM](#raspberry-pi--arm)
    - [Security Articles](#security-articles)
    - [Videos](#videos)
    - [Communities and Meetups](#communities-and-meetups)
        - [Brazilian](#brazilian)
        - [English](#english)
        - [Russian](#russian)
        - [Spanish](#spanish)
- [Stargazers over time](#stargazers-over-time)

<!-- /TOC -->

# Projects

## Official Projects

- [Moby](https://github.com/moby/moby)
- [Docker Hub](https://hub.docker.com)
- [Docker Compose](https://github.com/docker/compose/) - Define and run multi-container applications with Docker.
- [Docker Registry][distribution] - The Docker toolset to pack, ship, store, and deliver content

## Engine & Runtime

- [colima](https://github.com/abiosoft/colima) - Container runtimes on macOS (and Linux) with minimal setup.
- [containerd](https://github.com/containerd/containerd) - An open and reliable container runtime.
- [cri-o](https://github.com/cri-o/cri-o) - Open Container Initiative-based implementation of Kubernetes Container Runtime Interface.
- [gVisor](https://github.com/google/gvisor) - Application Kernel for Containers.
- [lxc](https://github.com/lxc/lxc) - LXC - Linux Containers.
- [Mocker](https://github.com/us/mocker) - Docker-compatible container CLI for macOS, built on Apple's Containerization framework.
- [podman](https://github.com/containers/libpod) - Libpod is a library used to create container pods. Home of Podman.
- [runc](https://github.com/opencontainers/runc) - CLI tool for spawning and running containers according to the OCI specification.
- [runtime-tools](https://github.com/opencontainers/runtime-tools) - Oci-runtime-tool is a collection of tools for working with the OCI runtime specification.
- [youki](https://github.com/youki-dev/youki) - Container runtime written in Rust, implementing the OCI runtime specification.

## Building Images

### Builder

Applications designed to help or simplify building **new** images

- [ansible-bender](https://github.com/ansible-community/ansible-bender) - A tool utilising `ansible` and `buildah`.
- [apko](https://github.com/chainguard-dev/apko) - Declarative OCI image builder from apk packages; reproducible by design.
- [buildah](https://github.com/containers/buildah) - A tool that facilitates building OCI images.
- [BuildKit](https://github.com/moby/buildkit) - Concurrent, cache-efficient, and Dockerfile-agnostic builder toolkit.
- [buildx](https://github.com/docker/buildx) - Official Docker CLI plugin for multi-platform builds backed by BuildKit.
- [cekit](https://github.com/cekit/cekit) - A tool used by openshift to build base images using different build engines.
- [dlayer](https://github.com/orisano/dlayer) - Docker layer analyzer.
- [docker-companion](https://github.com/mudler/docker-companion) - A command line tool written in Golang to squash and unpack docker images.
- [docker-repack](https://github.com/orf/docker-repack) - Repacks a Docker image into a smaller, more efficient version that makes it significantly faster to pull.
- [DockerSlim](https://github.com/docker-slim/docker-slim) shrinks fat Docker images creating the smallest possible images.
- [earthly](https://github.com/earthly/earthly) - Containerized build automation with Dockerfile-meets-Makefile syntax.
- [essex](https://github.com/utensils/essex) - Boilerplate for Docker Based Projects: Essex is a CLI utility written in bash to quickly setup clean and consistent Docker projects with Makefile driven workflows.
- [HPC Container Maker](https://github.com/NVIDIA/hpc-container-maker) - Generates Dockerfiles from a high level Python recipe, including building blocks for High-Performance Computing components.
- [img](https://github.com/genuinetools/img) - Standalone, daemon-less, unprivileged Dockerfile and OCI compatible container image builder.
- [ko](https://github.com/ko-build/ko) - Build and deploy Go applications as container images without a Dockerfile.
- [nix2container](https://github.com/nlewo/nix2container) - Build OCI images with Nix without `docker load` round-trips.
- [packer](https://developer.hashicorp.com/packer/integrations/hashicorp/docker/latest/components/builder/docker) - Hashicorp tool to build machine images including docker image integrated with configuration management tools like chef, puppet, ansible.
- [Production-Ready Python Containers](https://pythonspeed.com/products/pythoncontainer/) - :yen: A template for creating production-ready Docker images for Python applications.
- [RAUDI](https://github.com/cybersecsi/RAUDI) - A tool to automatically update (and optionally push to Docker Hub) Docker Images for 3rd party software whenever theres is a new release/update/commit.
- [runlike](https://github.com/lavie/runlike) - Generate `docker run`command and options from running containers.
- [Whaler](https://github.com/P3GLEG/Whaler) - Program to reverse Docker images into Dockerfiles.


### Base Images

Minimal, hardened, or purpose-built container base images.

- [Chainguard Images](https://github.com/chainguard-images/images) - Minimal, signed, SBOM-attested container images built on Wolfi.
- [distroless](https://github.com/GoogleContainerTools/distroless) - Language focused docker images, minus the operating system.
- [melange](https://github.com/chainguard-dev/melange) - Build apk packages from declarative YAML for use with apko.
- [pglayers](https://github.com/pglayers/pglayers) - Pre-built PostgreSQL extensions as composable Docker layers. 50+ extensions, ready-to-use combined images (full, Azure-compatible).
- [Wolfi](https://github.com/wolfi-dev/os) - Undistro Linux designed for containers; glibc-based, signed, daily SBOMs.


### Dockerfile

- [Dockerfile Generator](https://github.com/ozankasikci/dockerfile-generator) `dfg` is both a Go library and an executable that produces valid Dockerfiles using various input channels.
- [Dockershelf](https://github.com/Dockershelf/dockershelf) - A repository that serves as a collector for docker recipes that are universal, efficient and slim. Images are updated, tested and published daily via a Travis cron job.
- [Dofigen](https://github.com/lenra-io/dofigen) - A Dockerfile generator using a simplified description in YAML or JSON format.
- [Trsuted Builds](https://dockerfile.github.io/) - Trusted Automated Docker Builds. Dockerfile Project maintains a central repository of Dockerfile for various popular open source software services runnable on a Docker container.

### Linter

- [Dockadvisor](https://github.com/deckrun/dockadvisor) - Lightweight Dockerfile linter with 60+ rules, quality scoring, and security checks.
- [docker-image-size-limit](https://github.com/wemake-services/docker-image-size-limit) - A tool to keep an eye on your docker images size.
- [Hadolint](https://github.com/hadolint/hadolint) - A Dockerfile linter that checks for best practices, common mistakes, and is also able to lint any bash written in `RUN` instructions;.

## Image Lifecycle

### Registry

Services to securely store your Docker images.

- [Amazon Elastic Container Registry](https://aws.amazon.com/ecr/) - :yen: Amazon Elastic Container Registry (ECR) is a fully-managed Docker container registry that makes it easy for developers to store, manage, and deploy Docker container images.
- [Azure Container Registry](https://azure.microsoft.com/en-us/products/container-registry/#overview) - :yen: Manage a Docker private registry as a first-class Azure resource.
- [Cloudsmith](https://cloudsmith.com/product/formats/docker-registry) - :yen: A fully managed package management SaaS, with first-class support for public and private Docker registries (and many others, incl. Helm charts for the Kubernetes ecosystem). Has a generous free-tier and is also completely free for open-source.
- [Container Registry Service](https://container-registry.com/) - :yen: Harbor based Container Management Solution as a Service for teams and organizations. Free tier offers 1 GB storage for private repositories.
- [Cycle.io](https://cycle.io/) - :yen: Bare-metal container hosting.
- [DigitalOcean](https://www.digitalocean.com/products/container-registry) - :yen: DigitalOcean Container Registry.
- [Docker Hub](https://hub.docker.com/) provided by Docker Inc.
- [Docker Registry v2][distribution] - The Docker toolset to pack, ship, store, and deliver content
- [Dragonfly](https://github.com/dragonflyoss/Dragonfly2) - Provide efficient, stable and secure file distribution and image acceleration based on p2p technology.
- [GCP Artifact Registry](https://docs.cloud.google.com/artifact-registry/docs) - :yen: Fast, private Docker image storage on Google Cloud Platform.
- [Gitea Container Registry](https://docs.gitea.com/usage/packages/container) - Integrated Docker registry in Gitea, ideal for private, small-scale image hosting.
- [GitHub Container Registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry) - GitHub's solution for storing and managing Docker images, with tight integration into GitHub Actions.
- [GitLab Container Registry](https://docs.gitlab.com/user/packages/container_registry/) - Registry focused on using its images in GitLab CI.
- [Granite Registry](https://granite.so/products/docker-registry) - :yen: Store private Docker images alongside the workloads that pull them, with scoped read-only and read-write keys.
- [Harbor](https://github.com/goharbor/harbor) An open source trusted cloud native registry project that stores, signs, and scans content. Supports replication, user management, access control and activity auditing.
- [JFrog Artifactory](https://jfrog.com/artifactory/) - :yen: Artifact Repository Manager, can be used as private Docker Registry as well.
- [kontain.me](https://github.com/imjasonh/kontain.me) - On-demand container image registry that builds and serves images when they are pulled.
- [Kraken](https://github.com/uber/kraken) - Uber's Highly scalable P2P docker registry, capable of distributing TBs of data in seconds.
- [NORA](https://github.com/getnora-io/nora) - Lightweight multi-protocol artifact registry supporting Docker, Maven, npm, Cargo and PyPI in a single 32MB binary. Pull-through cache, Web UI, Prometheus metrics, RBAC auth.
- [nscr](https://github.com/jhstatewide/nscr) - A light-weight, self-contained container registry that's easy to run and maintain.
- [Quay.io](https://quay.io/) - :yen: Secure hosting for private Docker repositories.
- [Registryo](https://github.com/inmagik/registryo) - UI and token based authentication server for onpremise docker registry.
- [RepoFlow](https://www.repoflow.io) - A simple and easy-to-use package management platform with Docker support alongside other formats like PyPI, Maven, npm, and Helm. Includes smart search, built-in Docker image scanning, and a great free option for both self-hosted and cloud use.
- [Sonatype Nexus Repository](https://www.sonatype.com/products/sonatype-nexus-repository) - Manage binaries and build artifacts across your software supply chain.

### Registry CLI

Daemonless command-line tools for inspecting, copying, and manipulating images in OCI/Docker registries.

- [crane](https://github.com/google/go-containerregistry/tree/main/cmd/crane) - Lightweight CLI to manipulate registry images, from `go-containerregistry`.
- [go-containerregistry](https://github.com/google/go-containerregistry) - Go library and CLI tools (`crane`, `gcrane`, `registry`) for working with container registries.
- [oras](https://github.com/oras-project/oras) - Push and pull arbitrary OCI artifacts to and from any OCI registry.
- [regctl](https://github.com/regclient/regclient) - Daemonless registry client; copy, inspect, modify, and sign OCI images.
- [skopeo](https://github.com/containers/skopeo) - Work with remote image registries: retrieve information, copy images, sign content.

### Image Scanning & SBOM

Image vulnerability scanners, SBOM generators, and digest pinning tools. Commercial entries marked `:yen:`.

- [Anchor](https://github.com/SongStitch/anchor/) - A tool to ensure reproducible builds by pinning dependencies inside your Dockerfiles.
- [Anchor Enterprise](https://anchore.com/) - :yen: Analyze images for CVE vulnerabilities and against custom security policies.
- [BomLens](https://github.com/sktelecom/bomlens) - Scan container images (plus source, binaries, and firmware) into CycloneDX SBOMs with vulnerability, license, and notice reports. Ships as a single Docker image with a web UI.
- [Clair](https://github.com/quay/clair) - Clair is an open source project for the static analysis of vulnerabilities in appc and docker containers.
- [Docker Scout](https://github.com/docker/scout-cli) - Official Docker CLI for SBOM generation, vulnerability analysis, and policy evaluation.
- [Grype](https://github.com/anchore/grype) - A vulnerability scanner for container images, filesystems and SBOMs.
- [oscap-docker](https://github.com/OpenSCAP/openscap) - OpenSCAP provides oscap-docker tool which is used to scan Docker containers and images.
- [pindock](https://github.com/deadnews/pindock) - Pin and update Docker image digests in Dockerfiles and compose files.
- [Syft](https://github.com/anchore/syft) - CLI tool and library for generating a Software Bill of Materials (SBOM) from container images and filesystems.
- [Trivy](https://github.com/aquasecurity/trivy) - Aqua Security's open source simple and comprehensive vulnerability scanner for containers (suitable for CI).

### Supply Chain

Signing, attestation, and provenance for container images.

- [cosign](https://github.com/sigstore/cosign) - Container signing, verification, and transparency log for OCI artifacts.
- [in-toto](https://github.com/in-toto/in-toto) - Framework for supply chain attestations; underpins SLSA and cosign provenance.
- [policy-controller](https://github.com/sigstore/policy-controller) - Kubernetes admission controller enforcing cosign signatures on container images.
- [witness](https://github.com/in-toto/witness) - Generate and verify in-toto attestations across the build pipeline.

## Running Containers

### Composition

- [Composerize](https://github.com/magicmark/composerize) - Convert docker run commands into docker-compose files.
- [ctk](https://github.com/ctk-hq/ctk) - Visual composer for container based workloads.
- [kompose](https://github.com/kubernetes/kompose) - Go from Docker Compose to Kubernetes.
- [plash](https://github.com/ihucos/plash) - A container run and build engine - runs inside docker.
- [podman-compose](https://github.com/containers/podman-compose) - A script to run docker-compose.yml using podman.
- [Smalte](https://github.com/roquie/smalte) – Dynamically configure applications that require static configuration in docker container.

### Orchestration

- [CloudSlang](https://github.com/CloudSlang/cloud-slang) - CloudSlang is a workflow engine to create Docker process automation.
- [docker rollout](https://github.com/Wowu/docker-rollout) - Zero downtime deployment for Docker Compose services.
- [Kubernetes](https://github.com/kubernetes/kubernetes) - Open source orchestration system for Docker containers by Google.
- [Mesos](https://github.com/apache/mesos) - Resource/Job scheduler for containers, VM's and physical hosts.
- [Nebula](https://github.com/nebula-orchestrator) - A Docker orchestration tool designed to manage massive scale distributed clusters.
- [Nomad](https://github.com/hashicorp/nomad) - Easily deploy applications at any scale. A Distributed, Highly Available, Datacenter-Aware Scheduler.
- [Rancher](https://github.com/rancher/rancher) - An open source project that provides a complete platform for operating Docker in production.
- [Swarm-cronjob](https://github.com/crazy-max/swarm-cronjob) - Create jobs on a time-based schedule on Swarm.

### Deployment & Platforms

Self-hosted and managed cloud platforms (PaaS/CaaS, deployment automation). Commercial entries marked `:yen:`.

- [Amazon ECS](https://aws.amazon.com/ecs/) - :yen: A management service on EC2 that supports Docker containers.
- [Appfleet](https://appfleet.com/) - :yen: Edge platform to deploy and manage containerized services globally; routes traffic to the closest location for low latency.
- [Azure AKS](https://azure.microsoft.com/en-us/products/kubernetes-service/) - :yen: Fully managed Kubernetes container orchestration service.
- [blackfish](https://gitlab.com/blackfish/blackfish) - A CoreOS VM to build swarm clusters for Dev & Production.
- [BosnD](https://gitlab.com/n0r1sk/bosnd) - BosnD, the boatswain daemon - A dynamic configuration file writer & service reloader for dynamically changing container environments.
- [caprover](https://github.com/caprover/caprover) - [Previously known as CaptainDuckDuck] Automated Scalable Webserver Package (automated Docker+nginx) - Heroku on Steroids.
- [Cloud 66](https://www.cloud66.com) - :yen: Full-stack hosted container management as a service.
- [Cloud Run Compose](https://docs.cloud.google.com/run/docs/deploy-run-compose) - :yen: Deploy `docker-compose.yaml` files directly to Google Cloud Run as a managed service.
- [Convox Rack](https://github.com/convox/rack) - Convox Rack is open source PaaS built on top of expert infrastructure automation and devops best practices.
- [docker-to-iac](https://github.com/deploystackio/docker-to-iac) - Translate docker run and commit into Infrastructure as Code templates for AWS, Render.com and DigitalOcean.
- [doco-cd](https://github.com/kimdre/doco-cd) - Lightweight GitOps and Continuous Deployment tool to deploy Docker Compose projects and Swarm stacks using polling and webhooks.
- [Dokku](https://github.com/dokku/dokku) - Docker powered mini-Heroku that helps you build and manage the lifecycle of applications.
- [Exoframe](https://github.com/exoframejs/exoframe) - A self-hosted tool that allows simple one-command deployments using Docker.
- [Giant Swarm](https://www.giantswarm.io/) - :yen: Simple microservice infrastructure. Deploy your containers in seconds.

_…превью ограничено; полный список — в репозитории._

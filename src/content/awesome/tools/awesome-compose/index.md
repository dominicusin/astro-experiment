---
title: "awesome-compose"
description: "Курируемый awesome-список: awesome-compose"
layout: awesome/single
awesome_repo: "https://github.com/docker/awesome-compose"
awesome_readme: "README.md"
---

> Источник: [awesome-compose](https://github.com/docker/awesome-compose) — синхронизируется из внешнего репозитория как sparse-субмодуль (только список).


![logo](https://github.com/docker/awesome-compose/blob/main/awesome-compose.jpg)

> A curated list of Docker Compose samples.

These samples provide a starting point for how to integrate different services using a Compose file and to manage their deployment with Docker Compose.

> **Note**
> The following samples are intended for use in local development environments such as project setups, tinkering with software stacks, etc. These samples must not be deployed in production environments.

<!--lint disable awesome-toc-->
## Contents

- [Samples of Docker Compose applications with multiple integrated services](#samples-of-docker-compose-applications-with-multiple-integrated-services).
- [Single service samples](#single-service-samples).
- [Basic setups for different platforms (not production ready - useful for personal use)](#basic-setups-for-different-platforms-not-production-ready---useful-for-personal-use).

## Samples of Docker Compose applications with multiple integrated services

<a href="https://docs.docker.com/desktop/wasm/"><img src="icon_wasm.svg" alt="Docker + wasm" height="30" align="top"/></a> Icon indicates Sample is compatible with [Docker+Wasm](https://docs.docker.com/desktop/wasm/).

- [`ASP.NET / MS-SQL`](https://github.com/docker/awesome-compose/blob/main/aspnet-mssql) - Sample ASP.NET core application
with MS SQL server database.
- [`Elasticsearch / Logstash / Kibana`](https://github.com/docker/awesome-compose/blob/main/elasticsearch-logstash-kibana) - Sample Elasticsearch, Logstash, and Kibana stack.
- [`Go / NGINX / MySQL`](https://github.com/docker/awesome-compose/blob/main/nginx-golang-mysql) - Sample Go application
with an Nginx proxy and a MySQL database.
- [`Go / NGINX / PostgreSQL`](https://github.com/docker/awesome-compose/blob/main/nginx-golang-postgres) - Sample Go
application with an Nginx proxy and a PostgreSQL database.
- [`Java Spark / MySQL`](https://github.com/docker/awesome-compose/blob/main/sparkjava-mysql) - Sample Java application and
a MySQL database.
- [`NGINX / ASP.NET / MySQL`](https://github.com/docker/awesome-compose/blob/main/nginx-aspnet-mysql) - Sample Nginx reverse proxy with an C# backend using ASP.NET.
- [`NGINX / Flask / MongoDB`](https://github.com/docker/awesome-compose/blob/main/nginx-flask-mongo) - Sample Python/Flask
application with Nginx proxy and a Mongo database.
- [`NGINX / Flask / MySQL`](https://github.com/docker/awesome-compose/blob/main/nginx-flask-mysql) - Sample Python/Flask application with an Nginx proxy and a MySQL database.
- [`NGINX / Node.js / Redis`](https://github.com/docker/awesome-compose/blob/main/nginx-nodejs-redis) - Sample Node.js application with Nginx proxy and a Redis database.
- [`NGINX / Go`](https://github.com/docker/awesome-compose/blob/main/nginx-golang) - Sample Nginx proxy with a Go backend.
- [`NGINX / WSGI / Flask`](https://github.com/docker/awesome-compose/blob/main/nginx-wsgi-flask) - Sample Nginx reverse proxy with a Flask backend using WSGI.
- [`PostgreSQL / pgAdmin`](https://github.com/docker/awesome-compose/blob/main/postgresql-pgadmin) - Sample setup for postgreSQL database with pgAdmin web interface.
- [`Python / Flask / Redis`](https://github.com/docker/awesome-compose/blob/main/flask-redis) - Sample Python/Flask and a Redis database.
- [`React / Spring / MySQL`](https://github.com/docker/awesome-compose/blob/main/react-java-mysql) - Sample React
application with a Spring backend and a MySQL database.
- [`React / Express / MySQL`](https://github.com/docker/awesome-compose/blob/main/react-express-mysql) - Sample React
application with a Node.js backend and a MySQL database.
- [`React / Express / MongoDB`](https://github.com/docker/awesome-compose/blob/main/react-express-mongodb) - Sample React
application with a Node.js backend and a Mongo database.
- [`React / Rust / PostgreSQL`](https://github.com/docker/awesome-compose/blob/main/react-rust-postgres) - Sample React
application with a Rust backend and a Postgres database.
- [`React / Nginx`](https://github.com/docker/awesome-compose/blob/main/react-nginx) - Sample React application with Nginx.
- [`Spring / PostgreSQL`](https://github.com/docker/awesome-compose/blob/main/spring-postgres) - Sample Java application
with Spring framework and a Postgres database.
- [`WasmEdge / MySQL / Nginx`](https://github.com/docker/awesome-compose/blob/main/wasmedge-mysql-nginx) - Sample Wasm-based web application with a static HTML frontend, using a MySQL (MariaDB) database. The frontend connects to a Wasm microservice written in Rust, that runs using the WasmEdge runtime.&nbsp;<a href="https://github.com/docker/awesome-compose/blob/main/wasmedge-mysql-nginx"><img src="icon_wasm.svg" alt="Compatible with Docker+wasm" height="30" align="top"/></a>
- [`WasmEdge / Kafka / MySQL`](https://github.com/docker/awesome-compose/blob/main/wasmedge-kafka-mysql) - Sample Wasm-based microservice that subscribes to a Kafka (Redpanda) queue topic, and transforms and saves any incoming message into a MySQL (MariaDB) database.&nbsp;<a href="https://github.com/docker/awesome-compose/blob/main/wasmedge-kafka-mysql"><img src="icon_wasm.svg" alt="Compatible with Docker+wasm" height="30" align="top"/></a>

## Single service samples

- [`Angular`](https://github.com/docker/awesome-compose/blob/main/angular)
- [`Spark`](https://github.com/docker/awesome-compose/blob/main/sparkjava)
- [`VueJS`](https://github.com/docker/awesome-compose/blob/main/vuejs)
- [`Flask`](https://github.com/docker/awesome-compose/blob/main/flask)
- [`PHP`](https://github.com/docker/awesome-compose/blob/main/apache-php)
- [`Traefik`](https://github.com/docker/awesome-compose/blob/main/traefik-golang)
- [`Django`](https://github.com/docker/awesome-compose/blob/main/django)
- [`Minecraft server`](https://github.com/docker/awesome-compose/tree/master/minecraft)
- [`Plex`](https://github.com/docker/awesome-compose/tree/master/plex)
- [`Portainer`](https://github.com/docker/awesome-compose/tree/master/portainer)
- [`Wireguard`](https://github.com/docker/awesome-compose/tree/master/wireguard)
- [`FastAPI`](https://github.com/docker/awesome-compose/blob/main/fastapi)

## Basic setups for different platforms (not production ready - useful for personal use)

- [`Gitea / PostgreSQL`](https://github.com/docker/awesome-compose/blob/main/gitea-postgres)
- [`Nextcloud / PostgreSQL`](https://github.com/docker/awesome-compose/blob/main/nextcloud-postgres)
- [`Nextcloud / Redis / MariaDB`](https://github.com/docker/awesome-compose/blob/main/nextcloud-redis-mariadb)
- [`Pi-hole / cloudflared`](https://github.com/docker/awesome-compose/blob/main/pihole-cloudflared-DoH) - Sample Pi-hole setup with use of DoH cloudflared service
- [`Prometheus / Grafana`](https://github.com/docker/awesome-compose/blob/main/prometheus-grafana)
- [`Wordpress / MySQL`](https://github.com/docker/awesome-compose/blob/main/wordpress-mysql)

<!--lint disable awesome-toc-->

## Getting started

These instructions will get you through the bootstrap phase of creating and
deploying samples of containerized applications with Docker Compose.

### Prerequisites

- Make sure that you have Docker and Docker Compose installed
  - Windows or macOS:
    [Install Docker Desktop](https://www.docker.com/get-started)
  - Linux: [Install Docker](https://www.docker.com/get-started) and then
    [Docker Compose](https://github.com/docker/compose)
- Download some or all of the samples from this repository.

### Running a sample

The root directory of each sample contains the `compose.yaml` which
describes the configuration of service components. All samples can be run in
a local environment by going into the root directory of each one and executing:

```console
docker compose up -d
```

Check the `README.md` of each sample to get more details on the structure and
what is the expected output.
To stop and remove all containers of the sample application run:

```console
docker compose down
```

### Quickstart guides

In addition to all the ready to run Compose samples listed above the folder [official-documentation-samples](https://github.com/docker/awesome-compose/blob/main/official-documentation-samples/README.md) contains quickstart guides. Each of these step by step guides explain which files need to be created to build and run a Docker Compose application.

<!--lint disable awesome-toc-->
## Contribute

We welcome examples that help people understand how to use Docker Compose for
common applications. Check the [Contribution Guide](https://github.com/docker/awesome-compose/blob/main/CONTRIBUTING.md) for more details.

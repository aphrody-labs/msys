# Codebase Digest: msys2-main-server

- Files analyzed: 37
- Total lines: 1571
- Total size: 50.9 KB
- Git branch: `main`
- Git HEAD commit: `8c9d21ed (maint: fixup docker build command)`
- Digest mode: `AST-Smart Outline`

## Directory Structure

```text
msys2-main-server/
├── LICENSE (28 lines, 1.5 KB, ~342 tokens)
├── README.md (77 lines, 1.9 KB, ~553 tokens)
├── docker-compose.dev.yml (331 lines, 9.9 KB, ~2.8k tokens)
├── docker-compose.yml (509 lines, 18.4 KB, ~5.2k tokens)
├── docs/
│   ├── HISTORY.md (175 lines, 6.3 KB, ~1.8k tokens)
│   └── MAINTENANCE.md (80 lines, 1.8 KB, ~508 tokens)
├── geoip.env.example (2 lines, 48 B, ~9 tokens)
├── github_token.env.example (1 lines, 14 B, ~3 tokens)
├── imbridge.env.example (3 lines, 110 B, ~19 tokens)
├── renovate.json (6 lines, 238 B, ~80 tokens)
├── services/
│   ├── autobuild-controller/
│   │   └── application.cfg.sample (23 lines, 745 B, ~186 tokens)
│   ├── cron/
│   │   └── Dockerfile (1 lines, 35 B, ~11 tokens)
│   ├── imbridge/
│   │   └── matterbridge.toml (58 lines, 936 B, ~300 tokens)
│   ├── mirrorbits/
│   │   ├── 0001-Rework-the-mirror-selection-logic.patch (98 lines, 3.5 KB, ~1.0k tokens)
│   │   ├── Dockerfile (1 lines, 35 B, ~11 tokens)
│   │   ├── add_mirrors.sh (1 lines, 35 B, ~11 tokens)
│   │   ├── init.sh (1 lines, 35 B, ~11 tokens)
│   │   ├── mirrorbits-del-stats-wrapper.sh (1 lines, 34 B, ~10 tokens)
│   │   ├── mirrorbits-edit-helper.sh (1 lines, 34 B, ~10 tokens)
│   │   └── mirrorbits.conf (24 lines, 521 B, ~131 tokens)
│   ├── repo/
│   │   └── nginx.conf (7 lines, 266 B, ~71 tokens)
│   ├── rsync/
│   │   ├── Dockerfile (1 lines, 35 B, ~11 tokens)
│   │   └── rsyncd.conf (10 lines, 231 B, ~68 tokens)
│   ├── staging/
│   │   ├── 0004-change-epoch-sep.patch (33 lines, 1.2 KB, ~422 tokens)
│   │   ├── 0014-fix-asciidoc-argparse.patch (17 lines, 649 B, ~201 tokens)
│   │   ├── Dockerfile (1 lines, 36 B, ~11 tokens)
│   │   ├── PKGBUILD.empty (12 lines, 134 B, ~46 tokens)
│   │   ├── install_to_host.sh (1 lines, 34 B, ~10 tokens)
│   │   └── runner.sh (3 lines, 74 B, ~26 tokens)
│   ├── stagingrepo/
│   │   └── nginx.conf (7 lines, 266 B, ~71 tokens)
│   ├── stats/
│   │   └── Dockerfile (1 lines, 35 B, ~11 tokens)
│   └── traefik/
│       └── traefik-tls.yml (12 lines, 453 B, ~91 tokens)
└── tests/
    ├── __init__.py (1 lines, 34 B, ~10 tokens)
    ├── test_mirrors.py (10 lines, 286 B, ~81 tokens)
    ├── test_rsync.py (10 lines, 308 B, ~84 tokens)
    ├── test_server.py (18 lines, 616 B, ~181 tokens)
    └── utils.py (6 lines, 172 B, ~52 tokens)
```

## Source Files

================================================
FILE: README.md
================================================
# MSYS2 main server

Provides:

* nginx service for serving installers and packages (ports 80 and 443)
* rsync server for serving the same (port 873, and 874 with SSL)
* daemon and http server for staging repositories
* letsencrypt integration
* packages web interface and API
* redirects from non-canonical domains
* network statistics
* instant messaging bridge between Discord and Gitter / OFTC IRC


## Setup

* Clone.
* The storage is pointed to `/srv/msys2repo` so `/srv/msys2repo/mingw/x86_64/` should exist.
* Run `docker compose up -d`.
* Assign DNS records for:
  * repo.msys2.org
  * packages.msys2.org
  * mirror.msys2.org
  * autobuildcontroller.msys2.org
  * msys2.org
  * NOT www.msys2.org, that is on GitHub Pages.
  * msys2.com
  * www.msys2.com
  * msys2.net
  * www.msys2.net
  * mingw-w64.net
  * www.mingw-w64.net
  * mingw-w64.org
  * NOT www.mingw-w64.org, that is on GitHub Pages.


## Test

Once everything is set up and running you can run `python3 -m unittest tests/test_server.py` which checks if all services are up and responding properly.


## Staging repositories

Add to `/etc/pacman.conf` above the official repositories like this:

```ini
[staging]
Server = https://repo.msys2.org/staging/
SigLevel = Never

[mingw32]
Include = /etc/pacman.d/mirrorlist.mingw32

[mingw64]
Include = /etc/pacman.d/mirrorlist.mingw64

[msys]
Include = /etc/pacman.d/mirrorlist.msys
```

## Local Development

There is a docker-compose variant in docker-compose.dev.yml that only uses HTTP and contains
a limited set of services for local testing.

It provides the following services:

* http://localhost:8080 - the traefik dashboard
* http://repo.localhost:9090/
* http://repo.localhost:9090/staging/
* http://mirror.localhost:9090/?mirrorstats
* http://packages.localhost:9090
* rsync://localhost/builds

Run it with `docker compose -f docker-compose.dev.yml ...`. For example
`docker compose -f docker-compose.dev.yml run repo` and then access
http://repo.localhost:9090/


================================================
FILE: LICENSE
================================================
Copyright (c) 2022, MSYS2 developers

All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice, this
  list of conditions and the following disclaimer in the documentation and/or
  other materials provided with the distribution.

* Neither the name of the {organization} nor the names of its
  contributors may be used to endorse or promote products derived from
  this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

================================================
FILE: docker-compose.dev.yml
================================================
name: 'msys2-repo-dev'

x-logging:
  &default-logging
  driver: 'local'

services:
  docker-socket-proxy:
    image: tecnativa/docker-socket-proxy:v0.5.0
    logging: *default-logging
    security_opt:
      - no-new-privileges:true
    cap_drop:
      - ALL
    environment:
      - CONTAINERS=1
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock:ro
    networks:
      - docker-socket-proxy
    restart: unless-stopped

  traefik:
    image: traefik:v3.7
    security_opt:
      - no-new-privileges:true
    cap_drop:
      - ALL
    cap_add:
      - NET_BIND_SERVICE
    depends_on:
      - docker-socket-proxy
    command:
      - "--api.insecure=true"
      - "--log.level=INFO"
      - "--providers.docker=true"
      - "--providers.docker.endpoint=tcp://docker-socket-proxy:2375"
      - "--providers.docker.exposedbydefault=false"
      - "--providers.file.directory=/configs/"
      - "--entrypoints.rsync.address=:873"
      - "--entryPoints.rsync.transport.respondingTimeouts.readTimeout=0"
      - "--entryPoints.web.address=:80"
      # Access logs: Which request+status from which IP using which User-Agent?
      - "--accesslog=true"
      - "--accesslog.bufferingsize=100"
      - "--accesslog.format=json"
      - "--accesslog.fields.defaultmode=drop"
      - "--accesslog.fields.names.RequestHost=keep"
      - "--accesslog.fields.names.RequestMethod=keep"
      - "--accesslog.fields.names.RequestPath=keep"
      - "--accesslog.fields.names.RequestPort=keep"
      - "--accesslog.fields.names.RequestProtocol=keep"
      - "--accesslog.fields.names.ClientHost=keep"
      - "--accesslog.fields.names.DownstreamStatus=keep"
      - "--accesslog.fields.headers.defaultmode=drop"
      - "--accesslog.fields.headers.names.User-Agent=keep"
    logging: *default-logging
    ports:
      - "9090:80"
      - "8080:8080"
      - "873:873"
    volumes:
      - ./services/traefik/traefik-tls.yml:/configs/traefik-tls.yml:ro
    networks:
      - default
      - docker-socket-proxy
      - rsync
      - mirrorbits
      - stagingrepo
      - repo
      - packages
      - stats
    restart: unless-stopped

  stats:
    build: ./services/stats
    logging: *default-logging
    security_opt:
      - no-new-privileges:true
    cap_drop:
      - ALL
    cap_add:
      - NET_BIND_SERVICE
      - SETGID
      - SETUID
    networks:
      - stats
    labels:
      - "traefik.enable=true"
      - "traefik.http.services.stats.loadbalancer.server.port=80"
      - "traefik.docker.network=msys2-repo-dev_stats"
      - "traefik.http.middlewares.stats-strip.stripprefix.prefixes=/stats"
      - "traefik.http.middlewares.stats-slash-redir.redirectregex.regex=^http(s?)://([^/]*)/stats($$|[?].*)"
      - "traefik.http.middlewares.stats-slash-redir.redirectregex.replacement=http$${1}://$${2}/stats/$${3}"
      # http
      - "traefik.http.routers.stats.rule=Host(`repo.localhost`) && (Path(`/stats`) || PathPrefix(`/stats/`))"
      - "traefik.http.routers.stats.middlewares=stats-slash-redir,stats-strip"
      - "traefik.http.routers.stats.entrypoints=web"
    restart: unless-stopped

  packages:
    image: ghcr.io/msys2/msys2-web:latest
    logging: *default-logging
    security_opt:
      - no-new-privileges:true
    cap_drop:
      - ALL
    cap_add:
      - NET_BIND_SERVICE
    networks:
      - packages
    labels:
      - "traefik.enable=true"
      - "traefik.docker.network=msys2-repo-dev_packages"
      - "traefik.http.middlewares.packages-compress.compress=true"
      # http
      - "traefik.http.routers.packages.rule=Host(`packages.localhost`)"
      - "traefik.http.routers.packages.middlewares=packages-compress"
      - "traefik.http.routers.packages.entrypoints=web"
    environment:
      - FORWARDED_ALLOW_IPS=*
    restart: unless-stopped

  repo:
    image: nginx:1.30
    logging: *default-logging
    security_opt:
      - no-new-privileges:true
    cap_drop:
      - ALL
    cap_add:
      - NET_BIND_SERVICE
      - CHOWN
      - SETGID
      - SETUID
    networks:
      - repo
    volumes:
      - ./devrepo/:/usr/share/nginx/html/:ro
      - ./services/repo/nginx.conf:/etc/nginx/conf.d/repo.conf:ro
    labels:
      - "traefik.enable=true"
      - "traefik.http.services.repo.loadbalancer.server.port=80"
      - "traefik.docker.network=msys2-repo-dev_repo"
      - "traefik.http.middlewares.repo-legacy-mingw32-redir.redirectregex.regex=^http(s?)://([^/]*)/mingw/i686($$|/.*)"
      - "traefik.http.middlewares.repo-legacy-mingw32-redir.redirectregex.replacement=http$${1}://$${2}/mingw/mingw32$${3}"
      - "traefik.http.middlewares.repo-legacy-mingw64-redir.redirectregex.regex=^http(s?)://([^/]*)/mingw/x86_64($$|/.*)"
      - "traefik.http.middlewares.repo-legacy-mingw64-redir.redirectregex.replacement=http$${1}://$${2}/mingw/mingw64$${3}"
      # http
      - "traefik.http.routers.repo.rule=Host(`repo.localhost`)"
      - "traefik.http.routers.repo.entrypoints=web"
      - "traefik.http.routers.repo.middlewares=repo-legacy-mingw32-redir,repo-legacy-mingw64-redir"
    restart: unless-stopped

  staging:
    build: ./services/staging/
    logging: *default-logging
    security_opt:
      - no-new-privileges:true
    cap_drop:
      - ALL
    networks:
      - staging
    volumes:
      - staging-gnupg:/root/.gnupg/
      - staging-repos:/srv/msys2staging/
    env_file:
      - ./github_token.env
    restart: unless-stopped

  stagingrepo:
    image: nginx:1.30
    logging: *default-logging
    security_opt:
      - no-new-privileges:true
    cap_drop:
      - ALL
    cap_add:
      - NET_BIND_SERVICE
      - CHOWN
      - SETGID
      - SETUID
    networks:
      - stagingrepo
    volumes:
      - staging-repos:/usr/share/nginx/html/:ro
      - ./services/stagingrepo/nginx.conf:/etc/nginx/conf.d/repo.conf:ro
    labels:
      - "traefik.enable=true"
      - "traefik.docker.network=msys2-repo-dev_stagingrepo"
      - "traefik.http.services.stagingrepo.loadbalancer.server.port=80"
      - "traefik.http.middlewares.staging-strip.stripprefix.prefixes=/staging"
      - "traefik.http.middlewares.staging-slash-redir.redirectregex.regex=^http(s?)://([^/]*)/staging($$|[?].*)"
      - "traefik.http.middlewares.staging-slash-redir.redirectregex.replacement=http$${1}://$${2}/staging/$${3}"
      # http
      - "traefik.http.routers.staging.rule=Host(`repo.localhost`) && (Path(`/staging`) || PathPrefix(`/staging/`))"
      - "traefik.http.routers.staging.middlewares=staging-slash-redir,staging-strip"
      - "traefik.http.routers.staging.entrypoints=web"
    restart: unless-stopped

  rsync:
    build: ./services/rsync/
    logging: *default-logging
    security_opt:
      - no-new-privileges:true
    cap_drop:
      - ALL
    cap_add:
      - NET_BIND_SERVICE
    volumes:
      - ./devrepo/:/rsync-volume/:ro
      - ./services/rsync/rsyncd.conf:/etc/rsyncd.conf:ro
    networks:
      - rsync
    labels:
      - "traefik.enable=true"
      - "traefik.docker.network=msys2-repo-dev_rsync"
      - "traefik.tcp.routers.rsync.rule=HostSNI(`*`)"
      - "traefik.tcp.routers.rsync.entrypoints=rsync"
      - "traefik.tcp.services.rsync.loadbalancer.server.port=873"
      - "traefik.tcp.services.rsync.loadbalancer.proxyprotocol.version=2"
    restart: unless-stopped

  valkey:
    image: valkey/valkey:9.1
    user: "999:999"
    restart: unless-stopped
    logging: *default-logging
    security_opt:
      - no-new-privileges:true
    cap_drop:
      - ALL
    networks:
      - mirrorbits-valkey
    environment:
      - VALKEY_EXTRA_FLAGS=--save 3600 1 --loglevel warning
    volumes:
      - valkey-data:/data

  geoipupdate:
    image: ghcr.io/maxmind/geoipupdate:v7.1
    restart: unless-stopped
    logging: *default-logging
    security_opt:
      - no-new-privileges:true
    cap_drop:
      - ALL
    networks:
      - geoipupdate
    env_file:
      - ./geoip.env
    environment:
      - GEOIPUPDATE_EDITION_IDS=GeoLite2-City GeoLite2-ASN
      - GEOIPUPDATE_FREQUENCY=24
      - GEOIPUPDATE_VERBOSE=1
    volumes:
      - geoip-data:/usr/share/GeoIP

  cron:
    build: ./services/cron
    restart: unless-stopped
    network_mode: "none"
    logging: *default-logging
    security_opt:
      - no-new-privileges:true
    cap_drop:
      - ALL
    cap_add:
      - SETGID
      - SETUID
      - DAC_OVERRIDE
    volumes:
      - ./devrepo:/repo-volume

  mirrorbits:
    build: ./services/mirrorbits
    restart: unless-stopped
    logging: *default-logging
    security_opt:
      - no-new-privileges:true
    cap_drop:
      - ALL
    cap_add:
      - NET_BIND_SERVICE
    depends_on:
      - valkey
      - geoipupdate
    networks:
      - mirrorbits
      - mirrorbits-valkey
    volumes:
      - geoip-data:/usr/share/GeoIP:ro
      - ./devrepo:/repo-volume:ro
      - ./services/mirrorbits/mirrorbits.conf:/etc/mirrorbits.conf:ro
      - ./services/mirrorbits/add_mirrors.sh:/add_mirrors.sh:ro
    labels:
      - "traefik.enable=true"
      - "traefik.docker.network=msys2-repo-dev_mirrorbits"
      - "traefik.http.middlewares.mirrorbits-legacy-mingw32-redir.redirectregex.regex=^http(s?)://([^/]*)/mingw/i686($$|/.*)"
      - "traefik.http.middlewares.mirrorbits-legacy-mingw32-redir.redirectregex.replacement=http$${1}://$${2}/mingw/mingw32$${3}"
      - "traefik.http.middlewares.mirrorbits-legacy-mingw64-redir.redirectregex.regex=^http(s?)://([^/]*)/mingw/x86_64($$|/.*)"
      - "traefik.http.middlewares.mirrorbits-legacy-mingw64-redir.redirectregex.replacement=http$${1}://$${2}/mingw/mingw64$${3}"
      # http
      - "traefik.http.routers.mirrorbits.rule=Host(`mirror.localhost`)"
      - "traefik.http.routers.mirrorbits.entrypoints=web"
      - "traefik.http.routers.mirrorbits.middlewares=mirrorbits-legacy-mingw32-redir,mirrorbits-legacy-mingw64-redir"

volumes:
  staging-gnupg:
  staging-repos:
  geoip-data:
  valkey-data:

networks:
  default:
  docker-socket-proxy:
    internal: true
  rsync:
    internal: true
  mirrorbits:
  mirrorbits-valkey:
    internal: true
  geoipupdate:
  stagingrepo:
    internal: true
  staging:
  repo:
    internal: true
  packages:
  stats:
    internal: true


================================================
FILE: docker-compose.yml
================================================
name: 'msys2-repo'

x-logging:
  &default-logging
  driver: 'journald'

services:
  docker-socket-proxy:
    image: tecnativa/docker-socket-proxy:v0.5.0
    logging: *default-logging
    security_opt:
      - no-new-privileges:true
    cap_drop:
      - ALL
    environment:
      - CONTAINERS=1
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock:ro
    networks:
      - docker-socket-proxy
    restart: unless-stopped

  traefik:
    image: traefik:v3.7
    security_opt:
      - no-new-privileges:true
    cap_drop:
      - ALL
    cap_add:
      - NET_BIND_SERVICE
    depends_on:
      - docker-socket-proxy
    command:
      # - "--api.insecure=true" # for debug interface on 8080
      # - "--log.level=INFO"
      - "--providers.docker=true"
      - "--providers.docker.endpoint=tcp://docker-socket-proxy:2375"
      - "--providers.docker.exposedbydefault=false"
      - "--providers.file.directory=/configs/"
      - "--entrypoints.rsync.address=:873"
      - "--entryPoints.rsync.transport.respondingTimeouts.readTimeout=0"
      - "--entrypoints.rsync-ssl.address=:874"
      - "--entryPoints.rsync-ssl.transport.respondingTimeouts.readTimeout=0"
      - "--entryPoints.web.address=:80"
      - "--entryPoints.web-secure.address=:443"
      - "--certificatesResolvers.le.acme.email=david.macek.0@gmail.com"
      - "--certificatesResolvers.le.acme.storage=/letsencrypt/acme.json"
      - "--certificatesResolvers.le.acme.keyType=EC256"
      - "--certificatesResolvers.le.acme.httpChallenge=true"
      - "--certificatesResolvers.le.acme.httpChallenge.entryPoint=web"
      - "--entrypoints.web-secure.http3"
      # Access logs: Which request+status from which IP using which User-Agent?
      - "--accesslog=true"
      - "--accesslog.bufferingsize=100"
      - "--accesslog.format=json"
      - "--accesslog.fields.defaultmode=drop"
      - "--accesslog.fields.names.RequestHost=keep"
      - "--accesslog.fields.names.RequestMethod=keep"
      - "--accesslog.fields.names.RequestPath=keep"
      - "--accesslog.fields.names.RequestPort=keep"
      - "--accesslog.fields.names.RequestProtocol=keep"
      - "--accesslog.fields.names.ClientHost=keep"
      - "--accesslog.fields.names.DownstreamStatus=keep"
      - "--accesslog.fields.headers.defaultmode=drop"
      - "--accesslog.fields.headers.names.User-Agent=keep"
    logging: *default-logging
    ports:
      - "80:80"
      - "443:443/tcp"
      - "443:443/udp"
      - "873:873"
      - "874:874"
      # - "8080:8080" # for debug interface on 8080
    volumes:
      - ./services/traefik/traefik-tls.yml:/configs/traefik-tls.yml:ro
      - letsencrypt:/letsencrypt/
    networks:
      - default
      - docker-socket-proxy
      - rsync
      - mirrorbits
      - stagingrepo
      - repo
      - packages
      - stats
      - redir
      - mingw-w64-redir
    restart: unless-stopped

  stats:
    build: ./services/stats
    logging: *default-logging
    security_opt:
      - no-new-privileges:true
    cap_drop:
      - ALL
    cap_add:
      - NET_BIND_SERVICE
      - SETGID
      - SETUID
    networks:
      - stats
    labels:
      - "traefik.enable=true"
      - "traefik.http.services.stats.loadbalancer.server.port=80"
      - "traefik.docker.network=msys2-repo_stats"
      - "traefik.http.middlewares.stats-strip.stripprefix.prefixes=/stats"
      - "traefik.http.middlewares.stats-slash-redir.redirectregex.regex=^http(s?)://([^/]*)/stats($$|[?].*)"
      - "traefik.http.middlewares.stats-slash-redir.redirectregex.replacement=http$${1}://$${2}/stats/$${3}"
      - "traefik.http.middlewares.stats-scheme-redir.redirectscheme.scheme=https"
      - "traefik.http.middlewares.stats-headers.headers.stsseconds=31536000"
      # http
      - "traefik.http.routers.stats.rule=Host(`repo.msys2.org`) && (Path(`/stats`) || PathPrefix(`/stats/`))"
      - "traefik.http.routers.stats.middlewares=stats-scheme-redir,stats-slash-redir,stats-strip"
      - "traefik.http.routers.stats.entrypoints=web"
      # https
      - "traefik.http.routers.stats-secure.rule=Host(`repo.msys2.org`) && (Path(`/stats`) || PathPrefix(`/stats/`))"
      - "traefik.http.routers.stats-secure.tls=true"
      - "traefik.http.routers.stats-secure.tls.certresolver=le"
      - "traefik.http.routers.stats-secure.middlewares=stats-headers,stats-slash-redir,stats-strip"
      - "traefik.http.routers.stats-secure.entrypoints=web-secure"
    volumes:
      - /var/lib/vnstat/:/var/lib/vnstat/:ro
      - /usr/bin/vnstat:/usr/bin/vnstat:ro
    restart: unless-stopped

  packages:
    image: ghcr.io/msys2/msys2-web:latest
    logging: *default-logging
    security_opt:
      - no-new-privileges:true
    cap_drop:
      - ALL
    cap_add:
      - NET_BIND_SERVICE
    networks:
      - packages
    labels:
      - "traefik.enable=true"
      - "traefik.docker.network=msys2-repo_packages"
      - "traefik.http.middlewares.packages-compress.compress=true"
      - "traefik.http.middlewares.packages-scheme-redir.redirectscheme.scheme=https"
      - "traefik.http.middlewares.packages-headers.headers.stsseconds=31536000"
      # http
      - "traefik.http.routers.packages.rule=Host(`packages.msys2.org`)"
      - "traefik.http.routers.packages.middlewares=packages-scheme-redir,packages-compress"
      - "traefik.http.routers.packages.entrypoints=web"
      # https
      - "traefik.http.routers.packages-secure.rule=Host(`packages.msys2.org`)"
      - "traefik.http.routers.packages-secure.tls=true"
      - "traefik.http.routers.packages-secure.tls.certresolver=le"
      - "traefik.http.routers.packages-secure.middlewares=packages-headers,packages-compress"
      - "traefik.http.routers.packages-secure.entrypoints=web-secure"
    environment:
      - FORWARDED_ALLOW_IPS=*
    restart: unless-stopped

  redir:
    image: nginx:1.30
    logging: *default-logging
    security_opt:
      - no-new-privileges:true
    cap_drop:
      - ALL
    cap_add:
      - NET_BIND_SERVICE
      - CHOWN
      - SETGID
      - SETUID
    networks:
      - redir
    labels:
      - "traefik.enable=true"
      - "traefik.http.services.redir.loadbalancer.server.port=80"
      - "traefik.docker.network=msys2-repo_redir"
      - "traefik.http.middlewares.homepage-redir.redirectregex.regex=^http(s?)://(?:www[.])?msys2[.](?:org|com|net)/(.*)$$"
      - "traefik.http.middlewares.homepage-redir.redirectregex.replacement=http$${1}://www.msys2.org/$${2}"
      - "traefik.http.middlewares.homepage-headers.headers.stsseconds=31536000"
      # http
      - "traefik.http.routers.homepage.rule=Host(`msys2.org`) || Host(`msys2.com`) || Host(`www.msys2.com`) || Host(`msys2.net`) || Host(`www.msys2.net`)"
      - "traefik.http.routers.homepage.middlewares=homepage-redir"
      - "traefik.http.routers.homepage.entrypoints=web"
      # https
      - "traefik.http.routers.homepage-secure.rule=Host(`msys2.org`) || Host(`msys2.com`) || Host(`www.msys2.com`) || Host(`msys2.net`) || Host(`www.msys2.net`)"
      - "traefik.http.routers.homepage-secure.tls=true"
      - "traefik.http.routers.homepage-secure.tls.certresolver=le"
      - "traefik.http.routers.homepage-secure.middlewares=homepage-headers,homepage-redir"
      - "traefik.http.routers.homepage-secure.entrypoints=web-secure"
    restart: unless-stopped

  mingw-w64-redir:
    image: nginx:1.30
    logging: *default-logging
    security_opt:
      - no-new-privileges:true
    cap_drop:
      - ALL
    cap_add:
      - NET_BIND_SERVICE
      - CHOWN
      - SETGID
      - SETUID
    networks:
      - mingw-w64-redir
    labels:
      - "traefik.enable=true"
      - "traefik.http.services.mingw-w64-redir.loadbalancer.server.port=80"
      - "traefik.docker.network=msys2-repo_mingw-w64-redir"
      - "traefik.http.middlewares.mingw-w64-redir.redirectregex.regex=^http(s?)://(?:www[.])?mingw-w64[.](?:org|net)/(.*)$$"
      - "traefik.http.middlewares.mingw-w64-redir.redirectregex.replacement=http$${1}://www.mingw-w64.org/$${2}"
      - "traefik.http.middlewares.mingw-w64-headers.headers.stsseconds=31536000"
      # http
      - "traefik.http.routers.mingw-w64.rule=Host(`mingw-w64.org`) || Host(`mingw-w64.net`) || Host(`www.mingw-w64.net`)"
      - "traefik.http.routers.mingw-w64.middlewares=mingw-w64-redir"
      - "traefik.http.routers.mingw-w64.entrypoints=web"
      # https
      - "traefik.http.routers.mingw-w64-secure.rule=Host(`mingw-w64.org`) || Host(`mingw-w64.net`) || Host(`www.mingw-w64.net`)"
      - "traefik.http.routers.mingw-w64-secure.tls=true"
      - "traefik.http.routers.mingw-w64-secure.tls.certresolver=le"
      - "traefik.http.routers.mingw-w64-secure.middlewares=mingw-w64-headers,mingw-w64-redir"
      - "traefik.http.routers.mingw-w64-secure.entrypoints=web-secure"
    restart: unless-stopped

  repo:
    image: nginx:1.30
    logging: *default-logging
    security_opt:
      - no-new-privileges:true
    cap_drop:
      - ALL
    cap_add:
      - NET_BIND_SERVICE
      - CHOWN
      - SETGID
      - SETUID
    networks:
      - repo
    volumes:
      - /srv/msys2repo/:/usr/share/nginx/html/:ro
      - ./services/repo/nginx.conf:/etc/nginx/conf.d/repo.conf:ro
    labels:
      - "traefik.enable=true"
      - "traefik.http.services.repo.loadbalancer.server.port=80"
      - "traefik.docker.network=msys2-repo_repo"
      - "traefik.http.middlewares.repo-scheme-redir.redirectscheme.scheme=https"
      - "traefik.http.middlewares.repo-headers.headers.stsseconds=31536000"
      - "traefik.http.middlewares.repo-legacy-mingw32-redir.redirectregex.regex=^http(s?)://([^/]*)/mingw/i686($$|/.*)"
      - "traefik.http.middlewares.repo-legacy-mingw32-redir.redirectregex.replacement=http$${1}://$${2}/mingw/mingw32$${3}"
      - "traefik.http.middlewares.repo-legacy-mingw64-redir.redirectregex.regex=^http(s?)://([^/]*)/mingw/x86_64($$|/.*)"
      - "traefik.http.middlewares.repo-legacy-mingw64-redir.redirectregex.replacement=http$${1}://$${2}/mingw/mingw64$${3}"
      # http
      - "traefik.http.routers.repo.rule=Host(`repo.msys2.org`)"
      - "traefik.http.routers.repo.middlewares=repo-scheme-redir"
      - "traefik.http.routers.repo.entrypoints=web"
      # https
      - "traefik.http.routers.repo-secure.rule=Host(`repo.msys2.org`)"
      - "traefik.http.routers.repo-secure.tls=true"
      - "traefik.http.routers.repo-secure.tls.certresolver=le"
      - "traefik.http.routers.repo-secure.middlewares=repo-headers,repo-legacy-mingw32-redir,repo-legacy-mingw64-redir"
      - "traefik.http.routers.repo-secure.entrypoints=web-secure"
    restart: unless-stopped

  staging:
    build: ./services/staging/
    logging: *default-logging
    security_opt:
      - no-new-privileges:true
    cap_drop:
      - ALL
    networks:
      - staging
    volumes:
      - staging-gnupg:/root/.gnupg/
      - staging-repos:/srv/msys2staging/
    env_file:
      - ./github_token.env
    restart: unless-stopped

  stagingrepo:
    image: nginx:1.30
    logging: *default-logging
    security_opt:
      - no-new-privileges:true
    cap_drop:
      - ALL
    cap_add:
      - NET_BIND_SERVICE
      - CHOWN
      - SETGID
      - SETUID
    networks:
      - stagingrepo
    volumes:
      - staging-repos:/usr/share/nginx/html/:ro
      - ./services/stagingrepo/nginx.conf:/etc/nginx/conf.d/repo.conf:ro
    labels:
      - "traefik.enable=true"
      - "traefik.docker.network=msys2-repo_stagingrepo"
      - "traefik.http.services.stagingrepo.loadbalancer.server.port=80"
      - "traefik.http.middlewares.staging-strip.stripprefix.prefixes=/staging"
      - "traefik.http.middlewares.staging-slash-redir.redirectregex.regex=^http(s?)://([^/]*)/staging($$|[?].*)"
      - "traefik.http.middlewares.staging-slash-redir.redirectregex.replacement=http$${1}://$${2}/staging/$${3}"
      - "traefik.http.middlewares.staging-scheme-redir.redirectscheme.scheme=https"
      - "traefik.http.middlewares.staging-headers.headers.stsseconds=31536000"
      # http
      - "traefik.http.routers.staging.rule=Host(`repo.msys2.org`) && (Path(`/staging`) || PathPrefix(`/staging/`))"
      - "traefik.http.routers.staging.middlewares=staging-scheme-redir,staging-slash-redir,staging-strip"
      - "traefik.http.routers.staging.entrypoints=web"
      # https
      - "traefik.http.routers.staging-secure.rule=Host(`repo.msys2.org`) && (Path(`/staging`) || PathPrefix(`/staging/`))"
      - "traefik.http.routers.staging-secure.tls=true"
      - "traefik.http.routers.staging-secure.tls.certresolver=le"
      - "traefik.http.routers.staging-secure.middlewares=staging-headers,staging-slash-redir,staging-strip"
      - "traefik.http.routers.staging-secure.entrypoints=web-secure"
    restart: unless-stopped

  rsync:
    build: ./services/rsync/
    logging: *default-logging
    security_opt:
      - no-new-privileges:true
    cap_drop:
      - ALL
    cap_add:
      - NET_BIND_SERVICE
    volumes:
      - /srv/msys2repo/:/rsync-volume/:ro
      - ./services/rsync/rsyncd.conf:/etc/rsyncd.conf:ro
    networks:
      - rsync
    labels:
      - "traefik.enable=true"
      - "traefik.docker.network=msys2-repo_rsync"
      - "traefik.tcp.routers.rsync.rule=HostSNI(`*`)"
      - "traefik.tcp.routers.rsync.entrypoints=rsync"
      - "traefik.tcp.routers.rsync-ssl.rule=HostSNI(`repo.msys2.org`)"
      - "traefik.tcp.routers.rsync-ssl.entrypoints=rsync-ssl"
      - "traefik.tcp.routers.rsync-ssl.tls=true"
      - "traefik.tcp.routers.rsync-ssl.tls.certresolver=le"
      - "traefik.tcp.services.rsync.loadbalancer.server.port=873"
      - "traefik.tcp.services.rsync.loadbalancer.proxyprotocol.version=2"
    restart: unless-stopped

  valkey:
    image: valkey/valkey:9.1
    user: "999:999"
    restart: unless-stopped
    logging: *default-logging
    security_opt:
      - no-new-privileges:true
    cap_drop:
      - ALL
    networks:
      - mirrorbits-valkey
    environment:
      - VALKEY_EXTRA_FLAGS=--save 3600 1 --loglevel warning
    volumes:
      - valkey-data:/data

  geoipupdate:
    image: ghcr.io/maxmind/geoipupdate:v7.1
    restart: unless-stopped
    logging: *default-logging
    security_opt:
      - no-new-privileges:true
    cap_drop:
      - ALL
    networks:
      - geoipupdate
    env_file:
      - ./geoip.env
    environment:
      - GEOIPUPDATE_EDITION_IDS=GeoLite2-City GeoLite2-ASN
      - GEOIPUPDATE_FREQUENCY=24
      - GEOIPUPDATE_VERBOSE=1
    volumes:
      - geoip-data:/usr/share/GeoIP

  cron:
    build: ./services/cron
    restart: unless-stopped
    network_mode: "none"
    logging: *default-logging
    security_opt:
      - no-new-privileges:true
    cap_drop:
      - ALL
    cap_add:
      - SETGID
      - SETUID
      - DAC_OVERRIDE
    volumes:
      - /srv/msys2repo:/repo-volume

  mirrorbits:
    build: ./services/mirrorbits
    restart: unless-stopped
    logging: *default-logging
    security_opt:
      - no-new-privileges:true
    cap_drop:
      - ALL
    cap_add:
      - NET_BIND_SERVICE
    depends_on:
      - valkey
      - geoipupdate
    networks:
      - mirrorbits
      - mirrorbits-valkey
    volumes:
      - geoip-data:/usr/share/GeoIP:ro
      - /srv/msys2repo:/repo-volume:ro
      - ./services/mirrorbits/mirrorbits.conf:/etc/mirrorbits.conf:ro
      - ./services/mirrorbits/add_mirrors.sh:/add_mirrors.sh:ro
    labels:
      - "traefik.enable=true"
      - "traefik.docker.network=msys2-repo_mirrorbits"
      - "traefik.http.middlewares.mirrorbits-scheme-redir.redirectscheme.scheme=https"
      - "traefik.http.middlewares.mirrorbits-headers.headers.stsseconds=31536000"
      - "traefik.http.middlewares.mirrorbits-legacy-mingw32-redir.redirectregex.regex=^http(s?)://([^/]*)/mingw/i686($$|/.*)"
      - "traefik.http.middlewares.mirrorbits-legacy-mingw32-redir.redirectregex.replacement=http$${1}://$${2}/mingw/mingw32$${3}"
      - "traefik.http.middlewares.mirrorbits-legacy-mingw64-redir.redirectregex.regex=^http(s?)://([^/]*)/mingw/x86_64($$|/.*)"
      - "traefik.http.middlewares.mirrorbits-legacy-mingw64-redir.redirectregex.replacement=http$${1}://$${2}/mingw/mingw64$${3}"
      # http
      - "traefik.http.routers.mirrorbits.rule=Host(`mirror.msys2.org`)"
      - "traefik.http.routers.mirrorbits.entrypoints=web"
      - "traefik.http.routers.mirrorbits.middlewares=mirrorbits-scheme-redir"
      # https
      - "traefik.http.routers.mirrorbits-secure.rule=Host(`mirror.msys2.org`)"
      - "traefik.http.routers.mirrorbits-secure.tls=true"
      - "traefik.http.routers.mirrorbits-secure.tls.certresolver=le"
      - "traefik.http.routers.mirrorbits-secure.middlewares=mirrorbits-headers,mirrorbits-legacy-mingw32-redir,mirrorbits-legacy-mingw64-redir"
      - "traefik.http.routers.mirrorbits-secure.entrypoints=web-secure"

  autobuild-controller:
    image: ghcr.io/msys2/msys2-autobuild-controller:latest
    restart: unless-stopped
    logging: *default-logging
    security_opt:
      - no-new-privileges:true
    cap_drop:
      - ALL
    cap_add:
      - NET_BIND_SERVICE
    volumes:
      - ./services/autobuild-controller:/app/instance:ro
    labels:
      - "traefik.enable=true"
      - "traefik.http.middlewares.autobuild-controller-scheme-redir.redirectscheme.scheme=https"
      - "traefik.http.middlewares.autobuild-controller-headers.headers.stsseconds=31536000"
      # http
      - "traefik.http.routers.autobuild-controller.rule=Host(`autobuildcontroller.msys2.org`)"
      - "traefik.http.routers.autobuild-controller.entrypoints=web"
      - "traefik.http.routers.autobuild-controller.middlewares=autobuild-controller-scheme-redir"
      # https
      - "traefik.http.routers.autobuild-controller-secure.rule=Host(`autobuildcontroller.msys2.org`)"
      - "traefik.http.routers.autobuild-controller-secure.tls=true"
      - "traefik.http.routers.autobuild-controller-secure.tls.certresolver=le"
      - "traefik.http.routers.autobuild-controller-secure.middlewares=autobuild-controller-headers"
      - "traefik.http.routers.autobuild-controller-secure.entrypoints=web-secure"
    environment:
      - FORWARDED_ALLOW_IPS=*

  imbridge:
    image: 42wim/matterbridge:1
    restart: unless-stopped
    logging: *default-logging
    security_opt:
      - no-new-privileges:true
    cap_drop:
      - ALL
    networks:
      - imbridge
    env_file:
      - ./imbridge.env
    volumes:
      - ./services/imbridge/matterbridge.toml:/etc/matterbridge/matterbridge.toml:ro

volumes:
  letsencrypt:
  staging-gnupg:
  staging-repos:
  geoip-data:
  valkey-data:

networks:
  default:
  docker-socket-proxy:
    internal: true
  rsync:
    internal: true
  mirrorbits:
  mirrorbits-valkey:
    internal: true
  geoipupdate:
  stagingrepo:
    internal: true
  staging:
  repo:
    internal: true
  packages:
  stats:
    internal: true
  imbridge:
  redir:
    internal: true
  mingw-w64-redir:
    internal: true


================================================
FILE: docs/HISTORY.md
================================================
# How the server was set up

As *root*:

```bash
apt update
apt upgrade

apt install man

apt install git
cat >> ~/.profile
if [ -z "${debian_chroot:-}" ] && [ -r /etc/debian_chroot ]; then
    debian_chroot=$(cat /etc/debian_chroot)
fi
export PS1='\[\e]0;\u@\h: \w\a\]\n${debian_chroot:+($debian_chroot)}\[\033[32m\]\u@\h \[\e[33m\]\w\[\e[0m\]\n\[\e[1m\]#\[\e[0m\] '
^D

apt install mc
select-editor
echo "export EDITOR=mcedit" >> ~/.profile

dpkg-reconfigure locales
echo "export LANG=en_US.UTF-8" >> ~/.profile

dpkg-reconfigure tzdata

apt install unattended-upgrades
dpkg-reconfigure -plow unattended-upgrades

touch /etc/ssh/authorized_keys
chmod go+r /etc/ssh/authorized_keys
echo 'ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIMbpK0BaU5Sscbe5S0chHb2dFlgExTK7LXOXLdN8HWb0 lazka' >> /etc/ssh/authorized_keys
echo 'ssh-rsa AAAAB3NzaC1yc2EAAAABJQAAAgEAuwjmwYMkJrI31YmHVIx4D/6rkz3PjatRkd27PQDmP6DF54i0gTWZUaDVCGTf2JujNcdGKbPH4QpY2N69K8lG2T5dCrB61eTiYiF7H+xXV3fuVIhq7JLjg4IEkSp3i5QPjECbq0HYbmMaehZwo+ChuaO/D6rp/okoZTkJU21OCbch9y0n3t0qOLdfoFfVrXpwl5DVFZraXqo2BwRhI5plj3M6BxQl30tiqrz5U1lcJe6ZpigbqbajQqK2Z946UpqxjxN/kT3Vw6epj00F8phJdxyAKHCuQohVTm31j1z21c1qjlGpnV2UtnMVL+2/MtksvGtrSW6HPrv1IIze5UiELL12ObJezf+rAnrLcldXE9YglQC+coEvPzwhUIntdz8IP5wzk29nzeVaoNaHym2GyTi+FWzma1dHpoPW9vGAhOa7t2zXs6kPLyZwMWidLOpeG8ZEoVpDZbzCZdZzcfVFbwwzzE8Zo/+oZCriqTPlncc/HkQuTyjKxYfTMY+bdxx2o/zaHVNscX6GBsKw7j74+3h+Q7/baKvdo3QAawolyl1JMzvMkMskAvsbuF7UWQ5MPOTUKUZKlHvUoxjWPzTnepOSvWc6kJEMr/ZtEY6H3/VqqRkcdho4CmG8I7c7hstwls2JvQxVX3lYB1s5fH3GMAHHUvh4CH3M1pDruxFub9k= elieux' >> /etc/ssh/authorized_keys
echo "AuthorizedKeysFile /etc/ssh/authorized_keys .ssh/authorized_keys
PasswordAuthentication no
PermitEmptyPasswords no
AuthenticationMethods publickey
PubkeyAuthentication yes
StreamLocalBindUnlink yes" > /etc/ssh/sshd_config.d/msys2.conf
service ssh reload
# test that pubkey login works

iptables -F
ip6tables -F
iptables -A INPUT -i lo -j ACCEPT
ip6tables -A INPUT -i lo -j ACCEPT
iptables -A INPUT -s 127.0.0.0/8 -j DROP
ip6tables -A INPUT -s ::1/128 -j DROP
iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT
ip6tables -A INPUT -m state --state RELATED,ESTABLISHED -j ACCEPT
iptables -A INPUT -m state --state INVALID -j REJECT
ip6tables -A INPUT -m state --state INVALID -j REJECT
iptables -A INPUT -p tcp --dport ssh -j ACCEPT
ip6tables -A INPUT -p tcp --dport ssh -j ACCEPT
iptables -A INPUT -p icmp -j ACCEPT
ip6tables -A INPUT -p icmpv6 -j ACCEPT
iptables -A INPUT -m limit --limit 5/min -j LOG --log-prefix "iptables denied: " --log-level 7
ip6tables -A INPUT -m limit --limit 5/min -j LOG --log-prefix "ip6tables denied: " --log-level 7
iptables -A INPUT -j REJECT
ip6tables -A INPUT -j REJECT
iptables -P FORWARD DROP
ip6tables -P FORWARD DROP
iptables -P OUTPUT ACCEPT
ip6tables -P OUTPUT ACCEPT

apt install iptables-persistent
netfilter-persistent save

apt install vnstat

useradd -s /bin/bash repo
usermod -p '*' repo
mkdir /home/repo
chown -R repo:repo /home/repo
chmod go-rwx -R /home/repo

# logging config
mkdir /etc/systemd/journald.conf.d/
echo "[Journal]
Storage=persistent
MaxFileSec=1day
MaxRetentionSec=2week
RateLimitIntervalSec=0
RateLimitBurst=0
SystemMaxUse=20G
SystemMaxFileSize=1G
ForwardToSyslog=no" > /etc/systemd/journald.conf.d/zzz-msys2.conf
systemctl force-reload systemd-journald
# Confirm with "systemd-analyze cat-config systemd/journald.conf"

# use journald for docker logging
echo '{"log-driver": "journald"}' > /etc/docker/daemon.json
```

As `repo`:

```bash
cat >> ~/.profile
if [ -z "${debian_chroot:-}" ] && [ -r /etc/debian_chroot ]; then
    debian_chroot=$(cat /etc/debian_chroot)
fi
. /usr/lib/git-core/git-sh-prompt
export PS1='\[\e]0;\u@\h: \w\a\]\n${debian_chroot:+($debian_chroot)}\[\033[32m\]\u@\h \[\e[33m\]\w\[\e[0m\]$(__git_ps1 " (%s)")\n\[\e[1m\]$\[\e[0m\] '
^D
select-editor
echo "export EDITOR=mcedit" >> ~/.profile
echo "export LANG=en_US.UTF-8" >> ~/.profile

sudo apt install rsync
sudo mkdir /srv/msys2repo
sudo chown repo:repo /srv/msys2repo
rsync -rtlvH --delete-after --delay-updates --safe-links rsync://repo.msys2.org/builds/ /srv/msys2repo/

sudo apt install docker.io docker-compose-v2
sudo iptables -I INPUT 5 -p tcp -m multiport --dports http,https,rsync -j ACCEPT
sudo ip6tables -I INPUT 5 -p tcp -m multiport --dports http,https,rsync -j ACCEPT
sudo netfilter-persistent save
git clone https://github.com/msys2/msys2-main-server
echo "GITHUB_TOKEN=<token from https://github.com/settings/tokens with nothing enabled>" > msys2-main-server/github_token.env
sudo docker compose up -d --build -f msys2-main-server/docker-compose.yml --project-directory msys2-main-server

sudo apt install gnupg
gpg --update-trustdb
curl -L https://github.com/msys2/msys2-keyring/raw/main/msys2.gpg | gpg --import
echo $'5\ny\n' | gpg --command-fd 0 --no-tty --edit-key 87771331B3F1FF5263856A6D974C8BE49078F532 trust
echo $'5\ny\n' | gpg --command-fd 0 --no-tty --edit-key 5F944B027F7FE2091985AA2EFA11531AA0AA7F57 trust
cat > .gnupg/gpg.conf
no-greeting
require-cross-certification
charset utf-8
utf8-strings
no-mangle-dos-filenames
keyserver-options auto-key-retrieve
#keyserver-options no-self-sigs-only
keyserver-options no-import-clean
# From https://github.com/ioerror/duraconf/blob/master/configs/gnupg/gpg.conf
no-emit-version
no-comments
keyid-format 0xlong
with-fingerprint
list-options show-uid-validity
verify-options show-uid-validity
use-agent
no-autostart
keyserver-options no-honor-keyserver-url
keyserver-options include-revoked
# Intersection
# From https://sparkslinux.wordpress.com/2013/02/21/hashing-algorithm-is-your-gpg-configuration-secure/
# From https://github.com/ioerror/duraconf/blob/master/configs/gnupg/gpg.conf
personal-cipher-preferences AES256 AES192 AES
personal-digest-preferences SHA512 SHA384 SHA256
personal-compress-preferences ZLIB BZIP2 ZIP Uncompressed
cert-digest-algo SHA512
# Composed from above personal preferences
default-preference-list SHA512 SHA384 SHA256 AES256 AES192 AES ZLIB BZIP2 ZIP Uncompressed
^D
cat > .gnupg/dirmngr.conf
allow-ocsp
nameserver 9.9.9.9
keyserver hkp://keyserver.ubuntu.com:11371
^D

sudo apt install pipx
pipx install uv
echo "export $(cat msys2-main-server/github_token.env)" >> ~/.profile
uv tool install git+https://github.com/msys2/msys2-autobuild
git clone https://github.com/msys2/msys2-devtools
(cd msys2-devtools; uv sync --all-extras)
mkdir -p staging/{mingw,msys}/{sources,i686,x86_64}/

cd msys2-main-server/staging
sudo ./install_to_host.sh
sudo pacman --version
```


================================================
FILE: docs/MAINTENANCE.md
================================================
# Maintenance

## Rebooting

```bash
ssh root@msys2.appfleet.io
# "up -d" all docker containers and see if everything works if re-created, to avoid changes there
reboot
# wait until it's up again (~1-2 minutes)
gpgconf --launch dirmngr
```

## Updating the Server

```bash
ssh root@msys2.appfleet.io
apt update
apt full-upgrade
```

```bash
# Update Python packages
pipx upgrade-all
uv tool upgrade --all
```

## Update Docker Services

```bash
ssh root@msys2.appfleet.io
cd /home/repo/msys2-main-server/
docker compose pull
docker compose build --pull --parallel --no-cache
docker compose up -d
docker system prune --all --force
```

## Updating the Repo

```bash
cd msys2-devtools
./msys2-dbssh # connects via SSH

# Add packages to repo
export GPGKEY="5F944B027F7FE2091985AA2EFA11531AA0AA7F57"
msys2-autobuild fetch-assets --delete ./staging
./msys2-devtools/msys2-dbadd

# Prune repo (optional)
(cd msys2-devtools && uv run python msys2-repo-prune /srv/msys2repo/)

# Process package removals (if there are any)
(cd msys2-devtools && uv run python msys2-dbremove-api)

# Refresh mirrorbits after repo changes (will happen anyway every 5 minutes otherwise)
exit
ssh root@msys2.appfleet.io
(cd /home/repo/msys2-main-server/ && docker compose exec mirrorbits mirrorbits refresh)
```

## Removing old mirrorbits download stats

```bash
(cd /home/repo/msys2-main-server/ && docker compose exec mirrorbits mirrorbits-del-stats -f daily:1 monthly:1 yearly:1)
```

## Block an IP that is misusing the service

```bash
iptables -I DOCKER-USER 1 -s x.x.x.x -j REJECT
netfilter-persistent save
```

## Update installer

Pulls the installer from github and adjusts the "latest" symlinks.

```bash
./msys2-devtools/update-installer 2021-02-28
```


================================================
FILE: geoip.env.example
================================================
GEOIPUPDATE_ACCOUNT_ID=
GEOIPUPDATE_LICENSE_KEY=

================================================
FILE: github_token.env.example
================================================
GITHUB_TOKEN=


================================================
FILE: imbridge.env.example
================================================
MATTERBRIDGE_DISCORD_MSYS2_TOKEN=
MATTERBRIDGE_MATRIX_MSYS2_PASSWORD=
MATTERBRIDGE_IRC_OFTC_NICKSERVPASSWORD=


================================================
FILE: renovate.json
================================================
// [OUTLINE - 5 symbols, 12 lines]
// L2: "$schema": "https://docs.renovatebot.com/renovate-schema.json"
// L3-L5: "extends": [
// L6-L11: "packageRules": [
// L8: "matchPackageNames": ["nginx"]
// L9: "allowedVersions": "<1.31 || >1.31"


================================================
FILE: services/autobuild-controller/application.cfg.sample
================================================
# vim: set ft=python :

from flask_app.permissions import *

SECRET_KEY = ''
FERNET_SECRET_KEY = '' # generate with cryptography.fernet.Fernet.generate_key()
DEBUG = True
SESSION_COOKIE_SECURE = False

# Set these values to match your GitHub app settings.
GITHUB_APP_ID = 123456
GITHUB_APP_KEY_FILE = '' # will be loaded via open_instance_resource, contents stored in GITHUB_APP_KEY
GITHUB_CLIENT_ID = ''
GITHUB_CLIENT_SECRET = ''
GITHUB_WEBHOOK_SECRET = ''

ACL = AccessControlList({
    Principal('User', 'admin'): AccessRights.ALL_ACCESS,
    Principal('User', 'lurker'): AccessRights.NO_ACCESS,
    Principal('User', 'collaborator'): AccessRights.TRIGGER_RUN|AccessRights.BREAK_CYCLES
})

AUTOBUILD_FORKS = frozenset(('msys2', 'msys2-arm'))


================================================
FILE: services/cron/Dockerfile
================================================
// [OUTLINE - 0 symbols, 12 lines]


================================================
FILE: services/imbridge/matterbridge.toml
================================================
[discord.msys2]
Token=""
Server="792780131906617355"
RemoteNickFormat="<{NICK}> "
AutoWebhooks=true

[matrix.msys2]
Server="https://matrix.org"
Login="minivox"
Password=""
RemoteNickFormat="<{NICK}> "
NoHomeServerSuffix=false

[irc.oftc]
Server="irc.oftc.net:6697"
Nick="msys2-on-discord"
NickServNick="nickserv"
NickServPassword=""
UseTLS=true
SkipTLSVerify=false
RemoteNickFormat="<{NICK}> "
IgnoreNicks="minifox"

[[gateway]]
name="gitter-msys2"
enable=true

[[gateway.inout]]
account="discord.msys2"
channel="matrix-msys2"

[[gateway.inout]]
account="matrix.msys2"
channel="#msys2_msys2:gitter.im"

[[gateway]]
name="oftc-msys2"
enable=true

[[gateway.inout]]
account="discord.msys2"
channel="irc-msys2"

[[gateway.inout]]
account="irc.oftc"
channel="#msys2"

[[gateway]]
name="oftc-mingw-w64"
enable=true

[[gateway.inout]]
account="discord.msys2"
channel="irc-mingw-w64"

[[gateway.inout]]
account="irc.oftc"
channel="#mingw-w64"


================================================
FILE: services/mirrorbits/0001-Rework-the-mirror-selection-logic.patch
================================================
From f41762ca1298f66a95bf0d975aa3f126ed6f0614 Mon Sep 17 00:00:00 2001
From: Christoph Reiter <reiter.christoph@gmail.com>
Date: Mon, 14 Jun 2021 22:55:25 +0200
Subject: [PATCH] Rework the mirror selection logic

It basically comes down to: We never want to skip the closest mirror
and if there many mirrors near the closest one we want them all
("near" being constant here)
---
 http/selection.go | 47 ++++++++++++++++++++---------------------------
 1 file changed, 20 insertions(+), 27 deletions(-)

diff --git a/http/selection.go b/http/selection.go
index ad312e5..345d27a 100644
--- a/http/selection.go
+++ b/http/selection.go
@@ -47,7 +47,7 @@ func (h DefaultEngine) Selection(ctx *Context, cache *mirrors.Cache, fileInfo *f
 	}
 
 	// Filter the list of mirrors
-	mlist, excluded, closestMirror, farthestMirror := Filter(mlist, ctx.SecureOption(), fileInfo, clientInfo)
+	mlist, excluded, closestMirror, _ := Filter(mlist, ctx.SecureOption(), fileInfo, clientInfo)
 
 	if !clientInfo.IsValid() {
 		// Shuffle the list
@@ -65,11 +65,6 @@ func (h DefaultEngine) Selection(ctx *Context, cache *mirrors.Cache, fileInfo *f
 		return
 	}
 
-	// We're not interested in divisions by zero
-	if closestMirror == 0 {
-		closestMirror = math.SmallestNonzeroFloat32
-	}
-
 	/* Weight distribution for random selection [Probabilistic weight] */
 
 	// Compute score for each mirror and return the mirrors eligible for weight distribution.
@@ -78,38 +73,36 @@ func (h DefaultEngine) Selection(ctx *Context, cache *mirrors.Cache, fileInfo *f
 	// - mirrors targeting the given country (as primary or secondary)
 	// - mirrors being in the same AS number
 	totalScore := 0
-	baseScore := int(farthestMirror)
 	weights := map[int]int{}
 	for i := 0; i < len(mlist); i++ {
 		m := &mlist[i]
+		var boost float32
 
-		m.ComputedScore = baseScore - int(m.Distance) + 1
-
-		if m.Distance <= closestMirror*GetConfig().WeightDistributionRange {
-			score := (float32(baseScore) - m.Distance)
-			if !network.IsPrimaryCountry(clientInfo, m.CountryFields) {
-				score /= 2
-			}
-			m.ComputedScore += int(score)
-		} else if network.IsPrimaryCountry(clientInfo, m.CountryFields) {
-			m.ComputedScore += int(float32(baseScore) - (m.Distance * 5))
+		// calculate a boost factor based on the config
+		boost = 1
+		if network.IsPrimaryCountry(clientInfo, m.CountryFields) {
+			boost *= 1.5
 		} else if network.IsAdditionalCountry(clientInfo, m.CountryFields) {
-			m.ComputedScore += int(float32(baseScore) - closestMirror)
+			boost *= 1.25
 		}
-
 		if m.Asnum == clientInfo.ASNum {
-			m.ComputedScore += baseScore / 2
+			boost *= 1.5
 		}
+		boost *= 1 + (float32(m.Score) / 100)
 
-		floatingScore := float64(m.ComputedScore) + (float64(m.ComputedScore) * (float64(m.Score) / 100)) + 0.5
+		// use the closest mirror and allow some more distance based on it,
+		// boost will allow it to be farther away (default=1000km * 1.5)
+		var thousandKM float32 = 1000
+		var maxDistance float32 = (closestMirror + (thousandKM * GetConfig().WeightDistributionRange * boost))
 
-		// The minimum allowed score is 1
-		m.ComputedScore = int(math.Max(floatingScore, 1))
+		// score based on distance
+		var score int = int(10000 * ((closestMirror + 1) / (m.Distance + 1)) * boost)
+		m.ComputedScore = 0;
 
-		if m.ComputedScore > baseScore {
-			// The weight must always be > 0 to not break the randomization below
-			totalScore += m.ComputedScore - baseScore
-			weights[m.ID] = m.ComputedScore - baseScore
+		if m.Distance <= maxDistance {
+			m.ComputedScore = score;
+			totalScore += score
+			weights[m.ID] = score
 		}
 	}
 
-- 
2.48.1



================================================
FILE: services/mirrorbits/Dockerfile
================================================
// [OUTLINE - 0 symbols, 38 lines]


================================================
FILE: services/mirrorbits/add_mirrors.sh
================================================
// [OUTLINE - 0 symbols, 73 lines]


================================================
FILE: services/mirrorbits/init.sh
================================================
// [OUTLINE - 0 symbols, 34 lines]


================================================
FILE: services/mirrorbits/mirrorbits-del-stats-wrapper.sh
================================================
// [OUTLINE - 0 symbols, 6 lines]


================================================
FILE: services/mirrorbits/mirrorbits-edit-helper.sh
================================================
// [OUTLINE - 0 symbols, 9 lines]


================================================
FILE: services/mirrorbits/mirrorbits.conf
================================================
Repository: /repo-volume
TraceFileLocation: /lastsync
Templates: /usr/share/mirrorbits/
OutputMode: auto
ListenAddress: :80
Gzip: false
RedisAddress: valkey:6379
GeoipDatabasePath: /usr/share/GeoIP/
ConcurrentSync: 5
ScanInterval: 30
CheckInterval: 5
RepositoryScanInterval: 5
Hashes:
    SHA1: Off
    SHA256: Off
    MD5: Off
DisallowRedirects: false
WeightDistributionRange: 1.5
DisableOnMissingFile: false
MaxLinkHeaders: 10
Fallbacks:
    - URL: https://repo.msys2.org/
      CountryCode: de
      ContinentCode: eu


================================================
FILE: services/repo/nginx.conf
================================================
autoindex on;
autoindex_exact_size off;
absolute_redirect off;
gzip on;
access_log off;
add_header Content-Security-Policy "default-src 'none'; frame-ancestors 'none'; base-uri 'none'; form-action 'none';" always;
add_header X-Content-Type-Options "nosniff" always;


================================================
FILE: services/rsync/Dockerfile
================================================
// [OUTLINE - 0 symbols, 14 lines]


================================================
FILE: services/rsync/rsyncd.conf
================================================
log file = /dev/stdout
reverse lookup = no
timeout = 600
use chroot = false
proxy protocol = true
[builds]
    read only = true
    path = /rsync-volume
    dont compress = *
    outgoing chmod = Du=rwx,Dg=rx,Do=rx,Fu=rw,Fg=r,Fo=r


================================================
FILE: services/staging/0004-change-epoch-sep.patch
================================================
diff -Naur pacman-5.1.0-orig/lib/libalpm/version.c pacman-5.1.0/lib/libalpm/version.c
--- pacman-5.1.0-orig/lib/libalpm/version.c	2018-05-14 03:02:18.000000000 +0300
+++ pacman-5.1.0/lib/libalpm/version.c	2018-06-21 12:53:58.862056200 +0300
@@ -50,7 +50,7 @@
 	/* se points to version terminator */
 	se = strrchr(s, '-');

-	if(*s == ':') {
+	if(*s == '~') {
 		epoch = evr;
 		*s++ = '\0';
 		version = s;
@@ -250,7 +254,7 @@
 		return 0;
 	}

-	/* Parse both versions into [epoch:]version[-release] triplets. We probably
+	/* Parse both versions into [epoch:|~]version[-release] triplets. We probably
 	 * don't need epoch and release to support all the same magic, but it is
 	 * easier to just run it all through the same code. */
 	full1 = strdup(a);
diff -Naur pacman-5.1.0-orig/scripts/libmakepkg/util/pkgbuild.sh.in pacman-5.1.0/scripts/libmakepkg/util/pkgbuild.sh.in
--- pacman-5.1.0-orig/scripts/libmakepkg/util/pkgbuild.sh.in	2018-05-12 16:15:04.000000000 +0300
+++ pacman-5.1.0/scripts/libmakepkg/util/pkgbuild.sh.in	2018-06-21 12:53:58.872056200 +0300
@@ -149,7 +149,7 @@
 ##
 get_full_version() {
 	if (( epoch > 0 )); then
-		printf "%s\n" "$epoch:$pkgver-$pkgrel"
+		printf "%s\n" "${epoch}~${pkgver}-${pkgrel}"
 	else
 		printf "%s\n" "$pkgver-$pkgrel"
 	fi


================================================
FILE: services/staging/0014-fix-asciidoc-argparse.patch
================================================
a2x seems to fail when a value to an argument looks like an argument itself.
The best fix seems to be to attach the value to the argument using an equal
sign.

https://bugs.python.org/issue9334

--- pacman-5.2.1/doc/meson.build	2019-08-12 03:26:42.000000000 +0200
+++ pacman-5.2.1/doc/meson.build	2020-05-16 09:46:38.677111500 +0200
@@ -57,7 +57,7 @@
       '-f', 'manpage',
       '--xsltproc-opts', '-param man.endnotes.list.enabled 0 -param man.endnotes.are.numbered 0',
       '-D', '@OUTDIR@',
-      '--asciidoc-opts', ' '.join(asciidoc_opts),
+      '--asciidoc-opts=' + ' '.join(asciidoc_opts),
       '@INPUT@',
     ],
     input : input,


================================================
FILE: services/staging/Dockerfile
================================================
// [OUTLINE - 0 symbols, 104 lines]


================================================
FILE: services/staging/PKGBUILD.empty
================================================
pkgname=("__empty__")
pkgver=0
pkgrel=1
pkgdesc=Placeholder
arch=('any')
license=('MIT')
source=()
md5sums=()

package() {
    true
}


================================================
FILE: services/staging/install_to_host.sh
================================================
// [OUTLINE - 0 symbols, 8 lines]


================================================
FILE: services/staging/runner.sh
================================================
// [OUTLINE - 2 symbols, 53 lines]
// L9-L19: init()
// L21-L43: update()


================================================
FILE: services/stagingrepo/nginx.conf
================================================
autoindex on;
autoindex_exact_size off;
absolute_redirect off;
gzip on;
access_log off;
add_header Content-Security-Policy "default-src 'none'; frame-ancestors 'none'; base-uri 'none'; form-action 'none';" always;
add_header X-Content-Type-Options "nosniff" always;


================================================
FILE: services/stats/Dockerfile
================================================
// [OUTLINE - 0 symbols, 32 lines]


================================================
FILE: services/traefik/traefik-tls.yml
================================================
# https://ssl-config.mozilla.org/#server=traefik&version=2.4&config=intermediate
tls:
  options:
    default:
      minVersion: VersionTLS12
      cipherSuites:
        - TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256
        - TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256
        - TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384
        - TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384
        - TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305
        - TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305


================================================
FILE: tests/__init__.py
================================================
// [OUTLINE - 0 symbols, 0 lines]


================================================
FILE: tests/test_mirrors.py
================================================
// [OUTLINE - 3 symbols, 53 lines]
// import os
// import unittest
// import ssl
// import time
// import urllib.request
// import tests.utils
// L12-L50: class TestMirrors(unittest.TestCase):
// L16-L27: def test_mirrors_support_tls12(self):
// L29-L50: def test_download_speed(self):


================================================
FILE: tests/test_rsync.py
================================================
// [OUTLINE - 3 symbols, 53 lines]
// import os
// import unittest
// import subprocess
// import tempfile
// import urllib.request
// import tests.utils
// L12-L50: class TestMirrors(unittest.TestCase):
// L16-L26: def test_mirrors_support_rsync(self):
// L28-L50: def test_rsync_not_newer_than_http(self):


================================================
FILE: tests/test_server.py
================================================
// [OUTLINE - 12 symbols, 138 lines]
// import os
// import unittest
// import subprocess
// import itertools
// import urllib.request
// L10-L134: class TestServer(unittest.TestCase):
// L14-L15: def assertHSTS(self, response):
// L17-L24: def test_rsync(self):
// L26-L33: def test_rsync_ssl(self):
// L35-L42: def test_repo(self):
// L44-L50: def test_repo_redirects(self):
// L52-L56: def test_legacy_repo_redirects(self):
// L58-L74: def test_stagingrepo(self):
// L76-L89: def test_stats(self):
// L91-L105: def test_redirects(self):
// L107-L125: def test_packages(self):
// L127-L134: def test_mirror(self):


================================================
FILE: tests/utils.py
================================================
// [OUTLINE - 3 symbols, 30 lines]
// import os
// import re
// L6-L18: def get_mirror_urls():
// L21-L24: def get_mirrors():
// L27-L30: def get_rsync_command(rsync_url):



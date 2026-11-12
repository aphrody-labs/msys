# Codebase Digest: msys2-autobuild-controller

- Files analyzed: 15
- Total lines: 181
- Total size: 6.4 KB
- Git branch: `main`
- Git HEAD commit: `5fa23dbf (Update deps)`
- Digest mode: `AST-Smart Outline`

## Directory Structure

```text
msys2-autobuild-controller/
├── Dockerfile (1 lines, 35 B, ~11 tokens)
├── LICENSE (21 lines, 1.0 KB, ~254 tokens)
├── README.md (25 lines, 649 B, ~182 tokens)
├── application.cfg.sample (26 lines, 1.0 KB, ~267 tokens)
├── docker-compose.yml (5 lines, 59 B, ~18 tokens)
├── flask_app/
│   ├── __init__.py (48 lines, 1.8 KB, ~529 tokens)
│   ├── permissions.py (12 lines, 686 B, ~189 tokens)
│   ├── static/
│   │   └── style.css (1 lines, 36 B, ~11 tokens)
│   ├── templates/
│   │   ├── base.html (1 lines, 35 B, ~11 tokens)
│   │   ├── index.html (1 lines, 35 B, ~11 tokens)
│   │   ├── index_anonymous.html (1 lines, 34 B, ~10 tokens)
│   │   ├── maint.html (1 lines, 35 B, ~11 tokens)
│   │   └── trigger.html (1 lines, 35 B, ~11 tokens)
│   └── validate_autobuild_inputs.py (5 lines, 287 B, ~73 tokens)
└── pyproject.toml (32 lines, 623 B, ~227 tokens)
```

## Source Files

================================================
FILE: README.md
================================================
# MSYS2 Autobuild Controller

Get it running:

* copy `application.cfg.sample` to `instance/application.cfg`
* fill out `instance/application.cfg`

```console
uv run flask --app flask_app run
```

## GitHub App Registration

* Organization > Developer Settings > GitHub Apps > New GitHub App
* Fill out "GitHub App name" and "Homepage URL"
* "Callback URL": `https://thisismyapp.example.org/github-callback`
* "Webhook URL": `https://thisismyapp.example.org/github-webhook`
* Fill out "Webhook secret"
* Repository permissions:
  * Metadata: `Read-Only`
  * Actions: `Read and write`

## GitHub App Installation

![](doc/github-app-permissions.png)


================================================
FILE: pyproject.toml
================================================
[project]
name = "msys2-autobuild-controller"
version = "0.1.0"
description = ""
authors = [{ name = "Jeremy Drake", email = "github@jdrake.com" }]
requires-python = ">=3.12.0,<4.0"
dependencies = [
    "Flask>=3.0.2,<4",
    "requests>=2.25.1,<3",
    "cryptography>=3.4.7",
    "PyGithub>=2.2.0,<3",
    "gunicorn>=26.0.0,<27",
]

[dependency-groups]
dev = [
    "ruff>=0.17.0,<0.18.0",
    "ty>=0.0.61",
    "types-requests>=2.31.0.20240125,<3",
]

[tool.uv]
package = false
exclude-newer = "3 days"

[tool.ruff]
line-length = 133
exclude = [".venv"]

[tool.ruff.lint]
select = ["E", "F", "W"]
ignore = ["E741", "E402"]


================================================
FILE: Dockerfile
================================================
// [OUTLINE - 0 symbols, 12 lines]


================================================
FILE: LICENSE
================================================
MIT License

Copyright (c) 2022 Jeremy Drake

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


================================================
FILE: application.cfg.sample
================================================
# vim: set ft=python :

from flask_app.permissions import *

# Flask config
SECRET_KEY = '' # see https://flask.palletsprojects.com/en/2.2.x/config/#SECRET_KEY
DEBUG = True # https://flask.palletsprojects.com/en/2.2.x/config/#DEBUG
SESSION_COOKIE_SECURE = False # https://flask.palletsprojects.com/en/2.2.x/config/#SESSION_COOKIE_SECURE

# For storing the GH access token encrypted in the session cookie
FERNET_SECRET_KEY = '' # generate with cryptography.fernet.Fernet.generate_key()

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
FILE: docker-compose.yml
================================================
services:
  app:
    build: .
    ports:
      - "5000:80"


================================================
FILE: flask_app/__init__.py
================================================
// [OUTLINE - 29 symbols, 336 lines]
// import functools
// import hmac
// import json
// import logging
// import secrets
// import sys
// import threading
// import urllib.parse
// import typing
// import requests
// import cryptography.fernet
// import flask
// import github.Repository
// import github
// import github.Auth
// import github.Workflow
// import .validate_autobuild_inputs
// import .permissions
// L37-L39: class GithubClientDefaults(TypedDict):
// L62-L63: def audit_log(principal: Principal, fork: str, action: str, params: dict[str, str]):
// L66-L67: def encrypt_protected_var(cleartext: str) -> str:
// L70-L71: def decrypt_protected_var(ciphertext: str) -> str:
// L74-L77: def _current_url() -> str:
// L80-L88: def _get_autobuild_repo(fork: str, *, _gh_cache: dict[str, Github] =
// L91-L92: def clear_login_session():
// L95-L100: def handle_login(next=None):
// L103-L114: def verify_github_webhook_signature(func):
// L105-L113: def wrapper_github_webhook_signature_verification(*args, **kwargs):
// L117-L123: def check_app_token(access_token: str) -> bool:
// L126-L137: def verify_login_token(func):
// L128-L136: def wrapper_verify_login_token(*args, **kwargs):
// L141-L147: def load_principal():
// L151-L156: def index():
// L159-L164: def get_lazy_repo_workflow(repo: Repository, id_or_file_name: str | int) -> Workflow:
// L167-L172: def _get_fork() -> str:
// L176-L184: def authenticated_index():
// L188-L198: def trigger():
// L202-L212: def maint():
// L217-L218: def github_webhook():
// L221-L224: def _workflow_dispatch(fork: str, workflow_yml: str, inputs) -> bool:
// L229-L246: def workflow_dispatch():
// L251-L269: def maint_dispatch():
// L274-L283: def cancel():
// L287-L292: def login():
// L295-L302: def revoke_app_token(access_token: str) -> bool:
// L306-L311: def logout():
// L315-L336: def authorized():


================================================
FILE: flask_app/permissions.py
================================================
// [OUTLINE - 9 symbols, 45 lines]
// import enum
// import typing
// L9-L14: class Principal(NamedTuple):
// L13-L14: def __str__(self):
// L17-L23: class AccessRights(Flag):
// L26-L45: class AccessControlList(Dict[Principal, AccessRights]):
// L28-L32: def check(self, principal: Principal, access_requested: AccessRights) -> Optional[AccessRights]:
// L34-L35: def is_granted(self, principal: Principal, access_requested: AccessRights) -> bool:
// L37-L39: def grant(self, principal: Principal, access_rights: AccessRights) -> None:
// L41-L42: def revoke(self, principal: Principal, access_rights: AccessRights) -> None:
// L44-L45: def remove(self, principal: Principal) -> None:


================================================
FILE: flask_app/static/style.css
================================================
// [OUTLINE - 0 symbols, 138 lines]


================================================
FILE: flask_app/templates/base.html
================================================
// [OUTLINE - 0 symbols, 45 lines]


================================================
FILE: flask_app/templates/index.html
================================================
// [OUTLINE - 0 symbols, 29 lines]


================================================
FILE: flask_app/templates/index_anonymous.html
================================================
// [OUTLINE - 0 symbols, 5 lines]


================================================
FILE: flask_app/templates/maint.html
================================================
// [OUTLINE - 0 symbols, 17 lines]


================================================
FILE: flask_app/templates/trigger.html
================================================
// [OUTLINE - 0 symbols, 15 lines]


================================================
FILE: flask_app/validate_autobuild_inputs.py
================================================
// [OUTLINE - 3 symbols, 47 lines]
// import re
// L17-L31: def validate_optional_deps(optional_deps: str) -> str:
// L34-L39: def validate_clear_failed_build_types(clear_failed_build_types: str) -> str:
// L42-L47: def validate_clear_failed_packages(clear_failed_packages: str) -> str:



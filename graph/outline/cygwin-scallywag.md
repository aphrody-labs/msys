# Codebase Digest: cygwin-scallywag

- Files analyzed: 24
- Total lines: 1219
- Total size: 38.5 KB
- Git branch: `master`
- Git HEAD commit: `d425ee67 (When cross-building, handle some well-known packages specially)`
- Digest mode: `AST-Smart Outline`

## Directory Structure

```text
cygwin-scallywag/
├── README (49 lines, 1.4 KB, ~378 tokens)
├── README.md (55 lines, 1.6 KB, ~420 tokens)
├── TODO (7 lines, 336 B, ~81 tokens)
├── analyze.py (16 lines, 651 B, ~188 tokens)
├── appveyor-yml-update (13 lines, 454 B, ~124 tokens)
├── appveyor.py (11 lines, 486 B, ~130 tokens)
├── appveyor_token.py (3 lines, 78 B, ~25 tokens)
├── backends.py (5 lines, 126 B, ~37 tokens)
├── build.sh (1 lines, 35 B, ~11 tokens)
├── carpetbag.py (12 lines, 367 B, ~114 tokens)
├── fetch.py (17 lines, 372 B, ~107 tokens)
├── gh-hook.cgi (89 lines, 2.1 KB, ~602 tokens)
├── gh.py (28 lines, 890 B, ~247 tokens)
├── gh_token.py (13 lines, 317 B, ~96 tokens)
├── hook.cgi (110 lines, 2.9 KB, ~824 tokens)
├── jobs (124 lines, 3.3 KB, ~950 tokens)
├── jobs.cgi (219 lines, 7.9 KB, ~2.2k tokens)
├── migrations.py (3 lines, 73 B, ~21 tokens)
├── post-receive (44 lines, 1.4 KB, ~393 tokens)
├── reconcile.py (6 lines, 137 B, ~40 tokens)
├── request_build.py (12 lines, 417 B, ~114 tokens)
├── scallywag (282 lines, 10.3 KB, ~2.8k tokens)
├── scallywagd (95 lines, 2.9 KB, ~720 tokens)
└── utils.py (5 lines, 114 B, ~34 tokens)
```

## Source Files

================================================
FILE: README.md
================================================
# Scallywag, or how does this daisy-chain of hacks work?

## (GitHub backend edition)

1. `gitolite`

    In `.gitolite.rc`, `LOCAL_CODE` points to `$HOME/.gitlite/local`.

    `$LOCAL_CODE/hooks/common` contains a link to the `post-receive` script,
    which is thus linked to in all repositories hooks directory.

2. `post-receive`

    `GL_REPO` is set in the environment by `gitolite`.

    `CYGNAME` is set in the environment by `.ssh/authorized_keys`.

    If the git receive updated a reference, this queues a build using the GitHub
    repository dispatch REST API, parameterized by BUILDNUMBER, PACKAGE,
    MAINTAINER, COMMIT etc.

3. `.github/workflows/scallywag.yml`

    a. Installs Cygwin.

    b. Invokes `scallywag`.

    Stores BUILDNUMBER, PACKAGE, MAINTAINER, COMMIT and ARCH etc. in a JSON
    build artifact.

    Checks out the specific COMMIT of the PACKAGE repository which triggered
    this build.

    Builds package artifacts using `cygport`.

    c. GitHub POSTs a workflow_run event to a GitHub App webhook when the
    workflow is complete.

4. `gh-hook.cgi`

    Extracts status and artifacts information from the event.

    Extracts BUILDNUMBER, PACKAGE, MAINTAINER, COMMIT from the JSON artifact.

    Stores all that information in an sqlite db. `jobs.cgi` provides a web interface
    to examine that information.

    If the git reference updated was 'master', deploy is enabled for this
    maintainer, and not disabled for this package, mark the package artifacts as
    ready to fetch.

5. `fetch.py`

    Fetch the build artifacts, unpack them into CYGNAME's upload area on sourceware,
    and request upload processing by calm.


================================================
FILE: README
================================================
Scallywag, or how does this daisy-chain of hacks work?
======================================================

1. gitolite

In .gitolite.rc, LOCAL_CODE points to $HOME/.gitlite/local.

$LOCAL_CODE/hooks/common contains a link to the post-receive script, which is
linked to in all repositories hooks directory.

2. post-receive

GL_REPO is set in the environment by gitolite.
CYGNAME is set in the environment by .ssh/authorized_keys.

If the git receive updated the master reference, this queues build using the
Appveyor REST API, with PACKAGE and MAINTAINER environment variables.

3. .appveyor.yml

a. Installs Cygwin
b. Invokes scallywag

Stores PACKAGE, MAINTAINER, COMMIT and ARCH in a log message using the AppVeyor
build worker API.

Builds packages using cygport.

c. POSTs to a notification webhook when the build is complete

4. hook.cgi

Extracts status and artifacts information from the job result.
Extracts PACKAGE, MAINTAINER, COMMIT and ARCH from log message in the job result.

Stores all that information in an sqlite db.  Marks the artifacts as ready to
fetch (for an opt-in list of packages, at the moment).

jobs.cgi provides a web interface to examine that information.

5. fetch.py

Fetch the build artifacts from Appveyor, unpack them into CYGNAME's upload area
on sourceware, and request upload processing by calm.


TODO:
- don't use appveyor as our build backend
- don't be terrible


================================================
FILE: TODO
================================================
## TODO

- Do not build in subdir of scallywag checkout, to avoid 'git describe' potentially finding a scallywag .git dir
- use a venv to avoid depending on user installation of required python modules
- don't be terrible

- fetcher should check if pending jobs have completed, in case we've missed a job conclusion status notification


================================================
FILE: analyze.py
================================================
// [OUTLINE - 10 symbols, 408 lines]
// import logging
// import os
// import re
// import subprocess
// import sys
// L31-L45: class PackageKind:
// L32-L45: def __init__(self, kind=None, script='', depends=None, arches=None, tokens=None, announce=''):
// L62-L119: def cygport_vars(fn, cross):
// L122-L131: def get_var(var, default=None):
// L134-L175: def parse_cygport(fn):
// L182-L273: def analyze(repodir, default_tokens, cross):
// L289-L338: def depends_from_inherits(inherits, tokens):
// L349-L363: def depends_from_depend(depend):
// L372-L387: def generalize_python_depends(depends, tokens):
// L397-L398: def aarch64_whitelist(tokens):


================================================
FILE: appveyor-yml-update
================================================
#!/bin/sh -x
#
# Unfortunately, Appveyor doesn't read the .appveyor.yml before cloning
# when using a custom git repository localtion
#
#
# use this script to update the .appveyor.yml stored by Appveyor, after changing
# it in this repository
#

APPVEYOR_TOKEN=$(git config appveyor.token)

curl -H "Authorization: Bearer $APPVEYOR_TOKEN" -H "Content-Type: plain/text" -T .appveyor.yml https://ci.appveyor.com/api/projects/cygwin/scallywag/settings/yaml


================================================
FILE: appveyor.py
================================================
// [OUTLINE - 6 symbols, 66 lines]
// import json
// import urllib.error
// import urllib.request
// import appveyor_token
// L10-L23: class Backend():
// L12-L13: def cancel_build(bbid):
// L16-L19: def request_build(package, maintainer, commit, reference, default_tokens, buildnumber):
// L22-L23: def check_build_status(bbid):
// L26-L62: def _appveyor_build_request(package, maintainer, commit, reference, default_tokens, buildnumber):
// L65-L66: def _appveyor_check_status(bbid):


================================================
FILE: appveyor_token.py
================================================
// [OUTLINE - 1 symbols, 21 lines]
// import os
// L9-L17: def fetch_token():


================================================
FILE: backends.py
================================================
// [OUTLINE - 1 symbols, 27 lines]
// import logging
// import appveyor
// import gh
// L19-L27: def lookup_by_name(backend):


================================================
FILE: build.sh
================================================
// [OUTLINE - 0 symbols, 14 lines]


================================================
FILE: carpetbag.py
================================================
// [OUTLINE - 8 symbols, 91 lines]
// import logging
// import os
// import sqlite3
// L12-L14: class Update:
// L13-L14: def __init__(self):
// L17-L24: def deployable_token(tokens):
// L27-L31: def deployable_job(u):
// L34-L40: def update_backend_id(u):
// L43-L58: def update_status(u):
// L61-L79: def update_metadata(u):
// L84-L91: def deploy(u, force=False):


================================================
FILE: fetch.py
================================================
// [OUTLINE - 3 symbols, 160 lines]
// import logging
// import logging.handlers
// import os
// import pathlib
// import shutil
// import socket
// import sqlite3
// import subprocess
// import tempfile
// import urllib.request
// import carpetbag
// import gh
// import gh_token
// L22-L109: def fetch():
// L112-L149: def fetch_metadata():
// L152-L160: def process():


================================================
FILE: gh-hook.cgi
================================================
#!/usr/bin/env python3

import cgitb
import hashlib
import hmac
import json
import os
import sys
import traceback

import carpetbag
import gh


basedir = os.path.dirname(os.path.realpath(__file__))
secretfile = os.path.join(basedir, 'secret')


def process(data):
    j = json.loads(data)
    with open(os.path.join(basedir, 'last.json'), 'w') as f:
        print(json.dumps(j, sort_keys=True, indent=4), file=f)

    # XXX: also handle 'requested', 'in_progress'
    if j.get('action', '') != 'completed':
        return None

    # ensure this event is for the repository we are installed on
    if j.get('repository', {}).get('full_name', '') != 'cygwin/scallywag':
        return None

    wfr = j.get('workflow_run', None)
    if not wfr:
        return None

    return gh.process_wfr(wfr)


def hook():
    if os.environ['REQUEST_METHOD'] != 'POST':
        return '400 Bad Request', ''

    if not os.path.exists(secretfile):
        return '401 Unauthorized', ''
    with open(secretfile) as f:
        secret = f.read().strip()

    data = sys.stdin.read()

    sig = 'sha256=' + hmac.new(secret.encode(), data.encode(),
                               hashlib.sha256).hexdigest()
    trysig = os.environ.get('HTTP_X_HUB_SIGNATURE_256', '')
    if trysig != sig:
        return '401 Unauthorized', ''

    u = process(data)
    if u:
        # ensure backend_id is set, if it was previously unknown due to timeout waiting for it to be assigned
        if hasattr(u, 'buildnumber'):
            carpetbag.update_backend_id(u)

        carpetbag.update_status(u)

    return '200 OK', ''


def test():
    with open(os.path.join(basedir, 'last.json')) as f:
        data = f.read()
    u = process(data)
    if u:
        carpetbag.update_status(u)


if __name__ == '__main__':
    cgitb.enable()
    try:
        status, content = hook()
        print('Status: %s' % status)
        print()
        print(content)
    except BaseException:
        # log exception to stderr
        traceback.print_exc()
        # allow cgitb to do it's thing
        print('Content-Type: text/plain')
        print('Status: 422')
        print()
        raise


================================================
FILE: gh.py
================================================
// [OUTLINE - 11 symbols, 260 lines]
// import contextlib
// import fcntl
// import json
// import logging
// import os
// import re
// import shutil
// import tempfile
// import time
// import urllib.error
// import urllib.request
// import zipfile
// import carpetbag
// import gh_token
// import sys
// import types
// L20-L33: class Backend():
// L22-L23: def cancel_build(bbid):
// L26-L29: def request_build(package, maintainer, commit, reference, default_tokens, buildnumber):
// L32-L33: def check_build_status(bbid):
// L37-L48: def locked():
// L51-L96: def _github_workflow_trigger(package, maintainer, commit, reference, default_tokens, buildnumber):
// L99-L113: def _github_workflow_cancel(wfr_id):
// L116-L140: def _github_check_status(wfr_id):
// L143-L169: def process_wfr(wfr):
// L172-L176: def parse_iso8601_time(s):
// L179-L251: def examine_run_artifacts(wfr_id, u):


================================================
FILE: gh_token.py
================================================
// [OUTLINE - 4 symbols, 91 lines]
// import sys
// import cryptography.hazmat.backends
// import json
// import jwt
// import os
// import time
// import urllib.error
// import urllib.request
// L20-L29: def _get_private_key():
// L32-L44: def _make_jwt():
// L47-L72: def fetch_iat():
// L75-L87: def fetch_auth():


================================================
FILE: hook.cgi
================================================
#!/usr/bin/env python3

import cgitb
import json
import os
import re
import sys
import time
import traceback

import carpetbag

basedir = os.path.dirname(os.path.realpath(__file__))
authfile = os.path.join(basedir, 'auth')


def parse_time(s):
    time_format = '%m/%d/%Y %I:%M %p'  # e.g. "8/17/2019 4:41 PM"
    st = time.strptime(s, time_format)
    t = time.mktime(st)
    return int(t)


def hook():
    if os.environ['REQUEST_METHOD'] != 'POST':
        return '400 Bad Request', ''

    # request originates from appveyor
    if os.environ['REMOTE_ADDR'] not in ['138.91.141.243']:
        return '403 Forbidden', ''

    if not os.path.exists(authfile):
        return '401 Unauthorized', ''
    with open(authfile) as f:
        auth = f.read().strip()

    tryauth = os.environ.get('HTTP_AUTHORIZATION', '')
    tryauth = re.sub('^Basic ', '', auth)
    if tryauth != auth:
        return '401 Unauthorized', ''

    data = sys.stdin.read()
    j = json.loads(data)
    with open(os.path.join(basedir, 'last.json'), 'w') as f:
        print(json.dumps(j, sort_keys=True, indent=4), file=f)

    buildurl = j['eventData']['buildUrl']
    passed = j['eventData']['passed']
    started = parse_time(j['eventData']['started'])
    finished = parse_time(j['eventData']['finished'])
    artifacts = {}

    for job in j['eventData']['jobs']:
        messages = job['messages']

        for m in messages:
            message = m['message']
            if 'ARCH' not in message:
                continue

            evars = {i[0]: i[1] for i in map(lambda m: m.split(': ', 1), message.split('; '))}
            buildnumber = evars['BUILDNUMBER']
            package = evars['PACKAGE']
            commit = evars['COMMIT']
            reference = evars['REFERENCE']
            arch = evars['ARCH'].replace('i686', 'x86')
            maintainer = evars['MAINTAINER']
            tokens = evars['TOKENS']
            announce = evars['ANNOUNCE']

            if arch != 'skip':
                if len(job['artifacts']):
                    artifacts[arch] = job['id']

            break

    u = carpetbag.Update()
    u.buildurl = buildurl
    u.duration = finished - started
    u.status = 'build succeeded' if passed else 'build failed'
    u.buildnumber = buildnumber
    u.package = package
    u.commit = commit
    u.reference = reference
    u.maintainer = maintainer
    u.tokens = tokens
    u.announce = announce
    u.artifacts = artifacts

    carpetbag.update_status(u)
    carpetbag.update_metadata(u)

    return '200 OK', ''


if __name__ == '__main__':
    cgitb.enable()
    try:
        status, content = hook()
        print('Status: %s' % status)
        print()
        print(content)
    except BaseException:
        # log exception to stderr
        traceback.print_exc()
        # allow cgitb to do it's thing
        print('Content-Type: text/plain')
        print('Status: 422')
        print()
        raise


================================================
FILE: jobs
================================================
#!/usr/bin/env python3
#
# cli interface to manipulate a job
#

import argparse
import contextlib
import sqlite3
import sys

import carpetbag
from request_build import request_build, cancel_build
from utils import get_maintainer


def lookup_id(id):
    with contextlib.closing(sqlite3.connect(carpetbag.dbfile)) as conn:
        conn.row_factory = sqlite3.Row
        cursor = conn.execute('SELECT * FROM jobs WHERE id = ?', (id,))
        row = cursor.fetchone()

    if not row:
        sys.exit("job id {} not found".format(id))

    return row


def owns_job(row):
    # check for matching maintainer name
    owner = row['user']
    maintainer = get_maintainer()
    if owner != maintainer:
        sys.exit("job id {} is owned by maintainer {}, not {}".format(row['id'], owner, maintainer))

    return True

#
# subcommands
#


def cancel(id):
    row = lookup_id(id)
    owns_job(row)

    backend = row['backend']
    bbid = row['backend_id']

    # ask backend to cancel build
    cancel_build(backend, bbid)


def deploy(id):
    row = lookup_id(id)
    owns_job(row)

    if row['status'] != 'build succeeded':
        sys.exit("job id {} isn't deployable from status '{}'".format(row['id'], row['status']))

    # convert db row to an Update object
    u = carpetbag.Update()
    for k in row.keys():

        attr = k
        if k == 'ref':
            attr = 'reference'
        elif k == 'srcpkg':
            attr = 'package'
        elif k == 'id':
            attr = 'buildnumber'

        setattr(u, attr, row[k])

    # if deployable, update to 'fetching' status, irrespective of token
    if not carpetbag.deploy(u, force=True):
        sys.exit("job id {} isn't deployable due to branch or package name restrictions".format(row['id']))


def rerun(id, override_tokens):
    row = lookup_id(id)

    commit = row['hash']
    ref = row['ref']
    package = row['srcpkg']
    maintainer = row['user']
    tokens = row['tokens']

    if override_tokens is not None:
        tokens = ' '.join(override_tokens)

    print(commit, ref, package, maintainer, tokens)
    request_build(commit, ref, package, maintainer, tokens)


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description='build job control')
    subparsers = parser.add_subparsers(title='subcommands', dest='subcommand')
    # required=True not supported till python 3.7

    parser_cancel = subparsers.add_parser('cancel', help='cancel job')
    parser_cancel.add_argument('id', metavar='ID', type=int, help='job id')

    parser_deploy = subparsers.add_parser('deploy', help='deploy job')
    parser_deploy.add_argument('id', metavar='ID', type=int, help='job id')

    parser_help = subparsers.add_parser('help', help='this help')

    parser_rerun = subparsers.add_parser('rerun', help='re-run job')
    parser_rerun.add_argument('id', metavar='ID', type=int, help='job id')
    parser_rerun.add_argument('--token', metavar='TOKEN', action='append', help='tokens (default: as previous run)', default=None)

    args = parser.parse_args()

    if args.subcommand == 'help' or args.subcommand is None:
        parser.print_help()
    elif args.subcommand == 'deploy':
        deploy(args.id)
    elif args.subcommand == 'cancel':
        cancel(args.id)
    elif args.subcommand == 'rerun':
        rerun(args.id, args.token)
    else:
        print("Unknown subcommand '{}'".format(args.subcommand))
        sys.exit(1)


================================================
FILE: jobs.cgi
================================================
#!/usr/bin/env python3
#
# Copyright (c) 2019 Jon Turney
#
# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice shall be included in
# all copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
# THE SOFTWARE.
#

import cgi
import cgitb
import datetime
import re
import sqlite3
import textwrap
from urllib.parse import urlencode

import carpetbag

dbfn = carpetbag.dbfile
rows_per_page = 25
conn = sqlite3.connect('file:%s?mode=ro' % dbfn, uri=True)
conn.row_factory = sqlite3.Row


def results(parse):
    page = int(parse.get('page', 1))
    highlight = int(parse.get('id', 0))

    result = textwrap.dedent('''\
                             <!DOCTYPE html>
                             <html lang="en">
                             <head>
                             <meta http-equiv="refresh" content="300">
                             <link rel="stylesheet" type="text/css" href="/style.css" />
                             <title>Cygwin package builds</title>
                             </head>
                             <body>
                             <table class="grid">''')

    result += textwrap.dedent('''<tr><th>id</th>
                                 <th>source package</th>
                                 <th>status</th>
                                 <th>by</th>
                                 <th>commit</th>
                                 <th>ref</th>
                                 <th>logs</th>
                                 <th>arch</th>
                                 <th>when</th>
                                 <th>duration</th></tr>''')

    def options_list(column):
        selected = parse.get(column, '')
        sql = 'SELECT DISTINCT %s FROM jobs ORDER BY %s' % (column, column)
        c = conn.execute(sql)
        opts = [''] + [r[0] for r in c]
        return ('<select name="%s" form="filter">' % (column) +
                ''.join(['<option%s>%s</option>' % (' selected' if o == selected else '', o) for o in opts]) +
                '</select>')

    result += textwrap.dedent('''<tr><td><form id="filter" method="get"><button>Filter</button></form></td>
                                 <td>%s</td>
                                 <td>%s</td>
                                 <td>%s</td>
                                 <td></td>
                                 <td></td>
                                 <td></td>
                                 <td></td>
                                 <td></td>
                                 <td></td></tr>''' % (options_list('srcpkg'),
                                                      options_list('status'),
                                                      options_list('user')))

    where_list = []
    where_params = ()
    for w in ['user', 'status', 'srcpkg']:
        if w in parse:
            where_list.append("%s = ?" % (w))
            where_params = where_params + (parse[w],)
    where_clause = ''
    if where_list:
        where_clause = 'WHERE ' + 'AND '.join(where_list)

    sql = 'SELECT COUNT(*) FROM jobs %s' % (where_clause)
    c = conn.execute(sql, where_params)
    (rows,) = c.fetchone()
    maxpages = int((rows + (rows_per_page - 1)) / rows_per_page)
    if page < 1:
        page = 1
    if page > maxpages:
        page = maxpages

    sql = 'SELECT * FROM jobs %s' % where_clause + 'ORDER BY id DESC LIMIT ?,?'
    c = conn.execute(sql, where_params + ((page - 1) * rows_per_page, rows_per_page))
    for row in c:
        jobid = row['id']
        srcpkg = row['srcpkg']
        commit = row['hash']
        username = row['user']
        status = row['status']
        logurl = row['logurl']
        timestamp = row['timestamp']
        duration = row['duration']
        arches = row['arches']
        # artifacts = row['artifacts']
        ref = row['ref']

        commiturl = 'https://cygwin.com/cgit/cygwin-packages/%s/commit/?id=%s' % (srcpkg, commit)
        shorthash = commit[0:8]

        if jobid == highlight:
            result += '<tr class="highlight">'
        else:
            result += '<tr>'

        if srcpkg != 'playground':
            srcpkglink = '<a href="https://cygwin.com/packages/summary/%s-src.html">%s</a>' % (srcpkg, srcpkg)
        else:
            srcpkglink = '%s' % (srcpkg)

        def status_to_class(s):
            if s.endswith('succeeded') or s == 'deployed':
                return 'succeeded'  # green
            elif s.endswith('failed'):
                return 'failed'   # red
            else:
                return 'normal'

        def filenameify(m):
            return 'maintainer_' + re.sub(r'[ .]', r'_', m.lower()) + '.html'

        usernamelink = '<a href="https://cygwin.com/packages/reports/%s">%s</a>' % (filenameify(username), username)

        result += textwrap.dedent('''<td>%d</td>
                                     <td>%s</td>
                                     <td class="%s">%s</td>
                                     <td>%s</td>
                                     <td><a href="%s">%s</a></td>''') % (jobid, srcpkglink, status_to_class(status), status, usernamelink, commiturl, shorthash)

        if ref:
            ref = ref.replace('refs/heads/', '')
            ref = ref.replace('refs/tags/', '')
            result += '<td>%s</td>' % (ref)
        else:
            result += '<td></td>'

        if logurl:
            result += '<td><a href="%s">[log]</a></td>' % (logurl)
        else:
            result += '<td></td>'

        if arches:
            result += '<td>%s</td>' % (' '.join(a for a in arches.split() if a != 'source'))
        else:
            result += '<td></td>'

        if timestamp:
            result += '<td>%s</td>' % (datetime.datetime.fromtimestamp(timestamp).strftime('%Y-%m-%d %H:%M:%S'))
        else:
            result += '<td></td>'

        if duration:
            result += '<td>%s</td>' % (str(datetime.timedelta(seconds=int(duration))))
        else:
            result += '<td></td>'

        result += '</tr>'

    result += '</table>'

    def query_string_modify_page(page):
        parse['page'] = page
        return urlencode(parse)

    result += '<div class="gridfooter container">'
    result += '<span class="floatleft">'
    result += 'powered by <a href="https://cygwin.com/cgit/cygwin-apps/scallywag/">scallywag</a>, duct-tape and optimism'
    result += '</span>'
    result += '<span class="center">'
    if page > 1:
        result += '<a href="?%s">previous</a>' % query_string_modify_page(page - 1)
    result += ' page %d of %d ' % (page, maxpages)
    if page < maxpages:
        result += '<a href="?%s">next</a>' % query_string_modify_page(page + 1)
    result += '</span>'
    result += '<span class="right"></span>'
    result += '</div>'

    result += textwrap.dedent('''</body>
                                 </html>''')
    return result


if __name__ == "__main__":
    cgitb.enable()
    print('Content-Type: text/html')
    print()

    parse = cgi.parse()

    # if any query variable appears more than once, use the value of the last
    # occurence.
    parse = {k: v[-1] for k, v in parse.items()}

    print(results(parse))


================================================
FILE: migrations.py
================================================
// [OUTLINE - 0 symbols, 39 lines]
// import sqlite3
// import carpetbag


================================================
FILE: post-receive
================================================
#!/usr/bin/env python3
#
# post-receive hook to start a package build
#

import os
import sys

from request_build import request_build
from utils import get_maintainer

if __name__ == '__main__':
    if 'GL_REPO' in os.environ:
        # set by gitolite
        repo = os.environ['GL_REPO']
    else:
        # otherwise, assume repository is the working directory
        repo = os.getcwd()

    maintainer = get_maintainer()

    # only do something on package repositories
    # (this hook should only be installed on them, but be safe...)
    path, _ = os.path.split(repo)
    _, dir = os.path.split(path)
    if dir != 'cygwin-packages':
        sys.exit(0)

    print('scallywag: invoked on repository {0}, by maintainer {1}'.format(repo, maintainer))

    tokens = ''
    for i in range(0, int(os.environ.get('GIT_PUSH_OPTION_COUNT', '0'))):
        print('%s: %s' % ('GIT_PUSH_OPTION_%s' % i, os.environ['GIT_PUSH_OPTION_%s' % i]))
        tokens += ' ' + os.environ['GIT_PUSH_OPTION_%s' % i].strip()

    _, package = os.path.split(repo)
    if package.endswith('.git'):
        package, _ = os.path.splitext(package)

    for line in sys.stdin.readlines():
        old, new, ref = line.strip().split()
        if ref.startswith('refs/heads/') and new != '0000000000000000000000000000000000000000':
            # only do something if a branch ref is updated
            request_build(new, ref, package, maintainer, tokens)


================================================
FILE: reconcile.py
================================================
// [OUTLINE - 1 symbols, 35 lines]
// import sqlite3
// import logging
// import backends
// import carpetbag
// L16-L35: def process():


================================================
FILE: request_build.py
================================================
// [OUTLINE - 4 symbols, 103 lines]
// import logging
// import logging.handlers
// import os
// import sqlite3
// import time
// import backends
// import carpetbag
// L17-L22: class SharedTimedRotatingFileHandler(logging.handlers.TimedRotatingFileHandler):
// L18-L22: def _open(self):
// L33-L97: def request_build(commit, reference, package, maintainer, tokens=''):
// L100-L103: def cancel_build(backend, bbid):


================================================
FILE: scallywag
================================================
#!/usr/bin/env python3

import argparse
import glob
import json
import logging
import os
import shutil
import subprocess
import sys
import urllib.error
import urllib.request

from analyze import analyze

logging.getLogger().setLevel(logging.INFO)
logging.basicConfig(format=os.path.basename(sys.argv[0]) + ': %(message)s')

parser = argparse.ArgumentParser(description='scallywag')
parser.add_argument('--inputs', dest='inputs', action='store', help='JSON encoded input parameters')
parser.add_argument('--cross', dest='cross', action='store', help='Target arch when cross-compiling')
args = parser.parse_args()

if args.inputs:
    args_dict = json.loads(args.inputs)
    logging.info('input args are %s' % (args_dict))
else:
    args_dict = os.environ

buildnumber = args_dict['BUILDNUMBER']
name = args_dict['PACKAGE']
maintainer = args_dict['MAINTAINER']
commit = args_dict['COMMIT']
reference = args_dict['REFERENCE']
default_tokens = args_dict.get('DEFAULT_TOKENS', '')

arch = os.environ['BUILD'].split('-')[0]

logging.info('package is %s' % (name))

# make a directory for working with the package repo
mydir = os.getcwd()
os.chdir(os.path.join(mydir, '..'))
os.mkdir(name)
os.chdir(name)
workdir = os.getcwd()

if (arch == 'source') or ('APPVEYOR' in os.environ):
    # clone the package repo
    # 'git clone' can't do a shallow clone of a specific commit.
    #
    # (This requires allowReachableSHA1InWant to be true at the remote, to allow
    # non-branch/tag tip commits to be fetched)
    try:
        logging.info('cloning the packaging repository')
        subprocess.check_call(['git', 'config', '--global', 'init.defaultBranch', 'master'])
        subprocess.check_call(['git', 'init'])
        subprocess.check_call(['git', 'remote', 'add', 'origin', 'git://cygwin.com/git/cygwin-packages/%s.git' % (name)])
        subprocess.check_call(['git', 'fetch', '--depth=1', 'origin', commit])
        subprocess.check_call(['git', 'checkout', '-B', 'master', 'FETCH_HEAD'])
        subprocess.check_call(['git', 'submodule', 'update', '--init', '--recursive'])
        # Using '--depth=1' with a submodule will fail if the remote doesn't have
        # allowReachableSHA1InWant set.  If it does, the submodule should be
        # configured as shallow in .gitmodules, so '--recommend-shallow' turns that
        # on.
    except (subprocess.CalledProcessError, FileNotFoundError):
        logging.info('something went wrong cloning the packaging repository')
        sys.exit(1)
else:
    # unpack the source package
    # use '--strip-components' option to drop leading 'P-V-R.src/'
    try:
        logging.info('unpacking the source package')
        subprocess.check_call('tar -C %s --strip-components=1 -Jxvf %s' % (workdir,
                                                                           os.path.join(mydir, 'srcpkg', '*', '*-*-src.tar.xz')),
                              shell=True)
    except (subprocess.CalledProcessError, FileNotFoundError):
        logging.info('something went wrong unpacking the source package')
        sys.exit(1)

# analyze the source
package = analyze(workdir, default_tokens.split(), args.cross)

if package.kind != 'cygport':
    logging.error('package analysis failed')
    sys.exit(1)

# compare target arch(es) and build environment
logging.info('build ARCH: %s, cygport ARCHes: %s' % (arch, package.arches))

if ('noarch' in package.arches) and ('APPVEYOR' in os.environ):
    # noarch packages get built using x86_64 environment on AppVeyor
    if arch == 'x86_64':
        arch = 'noarch'
    else:
        arch = 'skip'
elif package.arches:
    # otherwise, build if it builds on this environment
    if arch not in package.arches + ['source']:
        arch = 'skip'
else:
    logging.info('arch(es) to build for could not be determined')
    sys.exit(1)

if 'GITHUB_OUTPUT' in os.environ:
    with open(os.environ['GITHUB_OUTPUT'], 'w') as f:
        print('arches="%s"' % (' '.join(package.arches)), file=f)

data_items = {
    'BUILDNUMBER': buildnumber,
    'PACKAGE': name,
    'COMMIT': commit,
    'ARCH': arch,
    'MAINTAINER': maintainer,
    'REFERENCE': reference,
    'TOKENS': (' '.join(package.tokens)),
    'ANNOUNCE': package.announce,
}

if 'APPVEYOR' in os.environ:
    # record package details using build worker API (so they appear in build notification)
    data = {"message": '; '.join('%s: %s' % (k, v) for k, v in data_items.items())}
    req = urllib.request.Request(os.environ['APPVEYOR_API_URL'] + 'api/build/messages')
    req.add_header('Content-Type', 'application/json')
    response = urllib.request.urlopen(req, json.dumps(data).encode('utf-8'))
elif 'GITHUB_JOB' in os.environ:
    # record package details in .json file
    with open(os.path.join(mydir, 'scallywag.json'), 'w') as f:
        print(json.dumps(data_items, sort_keys=True, indent=4), file=f)

if arch == 'skip':
    logging.info('nothing to build on this arch')
    sys.exit(0)

if 'nobuild' in package.tokens:
    logging.info('not building due to nobuild')
    sys.exit(0)

not_cross = 'SETUP' in os.environ

if package.kind == 'cygport':
    if not_cross:
        logging.info('installing build dependencies')

        setup_exe = subprocess.check_output(['cygpath', os.environ['SETUP']]).strip()

        setup_opts = []
        if 'testpackages' in package.tokens:
            setup_opts.append('-t')

        # simply ignore the ':native' arch-qualifier when not cross-building
        build_depends = [p.removesuffix(':native') for p in package.depends]

        subprocess.check_call([setup_exe,
                               '-q', '-n', '-O'] + setup_opts +
                              ['-R', os.environ['CYGWIN_ROOT'],
                               '-s', os.environ['CYGWIN_MIRROR'],
                               '-l', os.environ['CACHE'],
                               '-P', ','.join(build_depends)])

        # preserve setup.log.full
        shutil.move('/var/log/setup.log.full', os.path.join(mydir, 'setup.log.full'))
    else:
        depends = package.depends

        # (the equivalent to) certain packages are already provided by the cross
        # environment, so we can drop them from the build-dependencies
        cross_packages = [
            'gettext-devel',
            'libasprintf-devel',
            'libgettextpo-devel',
            'libiconv-devel',
            'libintl-devel',
            'libtextstyle-devel',
            'zlib-devel',
        ]
        depends = [p for p in depends if p not in cross_packages]

        # certain build-dependencies can be assumed to be native
        implicit_native = [
            'autoconf',
            'automake',
            'binutils',
            'cmake',
            'cygport',
            'gcc-core',
            'gcc-g++',
            'gnupg',
            'make',
            'meson',
            'ninja',
            'pkg-config',
        ]
        depends = [p + ':native' if p in implicit_native else p for p in depends]

        # install cygwin packages into cross sys-root
        cross_depends = [p for p in depends if not p.endswith(':native')]
        logging.info('installing cross-build dependencies: %s', sorted(cross_depends))
        if cross_depends:
            try:
                subprocess.check_call(['cygwin-pkg-tool', '--arch', arch, 'install'] + cross_depends)
            except (subprocess.CalledProcessError, FileNotFoundError):
                logging.error('cygwin-pkg-tool failed')

        # install native packages for anything marked with the ':native' arch
        # qualifier
        #
        # XXX: these have to be Cygwin package names, so we might also need to
        # remap them here to Fedora package names in rare cases
        native_depends = [p.removesuffix(':native') for p in depends if p.endswith(':native')]
        logging.info('installing native build dependencies: %s', sorted(native_depends))
        if native_depends:
            subprocess.check_call(['dnf', 'install', '-y'] + native_depends)

    # assemble the series of cygoprt subcommands for the build
    subcommands = []
    opts = []

    if arch != 'source':
        if args.cross:
            opts.extend(['--arch', args.cross])

        # no separate source package stage on AppVeyor, so fetch upstream sources
        if 'APPVEYOR' in os.environ:
            subcommands.append('download')

        # 'all' (prep/compile/install/package), or 'all-test' if label token is
        # present, and then 'test'
        if 'label' in package.tokens:
            subcommands.append('all-test')
        else:
            subcommands.append('all')

        if 'notest' not in package.tokens:
            if not_cross:
                subcommands.append('test')
            else:
                logging.info("skipping tests since cross-compiling")
    else:
        # 'download'; then 'srcpackage' (if we're making a source package)
        subcommands.append('download prep')

        if 'label' in package.tokens:
            subcommands.append('srcpackage-test')
        else:
            subcommands.append('srcpackage')

    if 'debug' in package.tokens:
        opts.append('--debug')

    args = opts + [package.script] + subcommands
    logging.info("running 'cygport %s'" % (' '.join(args)))
    rc = subprocess.call([os.path.join(mydir, 'build.sh')] + args,
                         stdin=subprocess.DEVNULL)

    # publish contents of dist as artifacts
    dist = glob.glob(os.path.join('*', 'dist'))
    if dist:
        logging.info('publishing package artifacts')
        stagingdir = os.path.join(mydir, 'staging')
        shutil.move(dist[0], stagingdir)
        for (dirpath, _, files) in os.walk(stagingdir):
            for f in files:
                # since cygport currently lacks a command to produce the install
                # package only, we use 'all' above and filter out the source
                # package here
                if 'APPVEYOR' not in os.environ:
                    if ('-src.' in f) != (arch == 'source'):
                        os.remove(os.path.join(dirpath, f))
                        continue

                logging.info(os.path.relpath(os.path.join(dirpath, f), mydir))

    # publish an archive with contents of builddir
    logging.info('publishing builddir artifact')
    subprocess.check_call('tar -Jcf %s -- *' % (os.path.join(mydir, 'builddir.tar.xz')),
                          shell=True)

    sys.exit(rc)
else:
    logging.info("don't know how to build this package")
    sys.exit(1)


================================================
FILE: scallywagd
================================================
#!/usr/bin/env python3
#

import daemon
import logging
import logging.handlers
import os
import pidlockfile
import signal
import sys
import time

try:
    import inotify.adapters
    has_inotify = True
except ImportError:
    has_inotify = False

import carpetbag
import fetch
import reconcile

logging.getLogger('inotify.adapters').propagate = False


def logging_setup():
    # setup logging to a file
    rfh = logging.handlers.TimedRotatingFileHandler('/sourceware/cygwin-staging/logs/scallywagd.log', backupCount=48, when='midnight')
    rfh.setFormatter(logging.Formatter('%(asctime)s - %(levelname)-8s - %(message)s'))
    rfh.setLevel(logging.DEBUG)
    logging.getLogger().addHandler(rfh)

    # setup logging to stdout
    ch = logging.StreamHandler(sys.stdout)
    ch.setFormatter(logging.Formatter(os.path.basename(sys.argv[0]) + ': %(message)s'))
    ch.setLevel(logging.INFO)
    logging.getLogger().addHandler(ch)

    # turn off filtering on level in root logger (which defaults to WARNING, and
    # which all non-root loggers delegate to by default)
    logging.getLogger().setLevel(logging.NOTSET)


def main():
    context = daemon.DaemonContext(stdout=sys.stdout,
                                   stderr=sys.stderr,
                                   umask=0o002,
                                   pidfile=pidlockfile.PIDLockFile('/sourceware/cygwin-staging/lock/scallywagd.pid'))

    def sigterm(signum, frame):
        logging.debug("SIGTERM")
        context.terminate(signum, frame)

    context.signal_map = {
        signal.SIGTERM: sigterm,
        signal.SIGHUP: None,
    }

    with context:
        logging_setup()
        logging.info("scallywag daemon started, pid %d" % (os.getpid()))
        logging.info('has_inotify %s' % has_inotify)

        try:
            incomplete = True
            # wake when db is changed, or periodically if we have incompletely
            # processed changes
            while True:
                if has_inotify and not incomplete:
                    i = inotify.adapters.Inotify()

                    i.add_watch(carpetbag.dbfile)
                    for event in i.event_gen(yield_nones=False, timeout_s=300):
                        (_, type_names, path, filename) = event
                        if 'IN_CLOSE_WRITE' in type_names:
                            # remove watch so we don't see events generated by
                            # our own changes
                            i.remove_watch(carpetbag.dbfile)
                            incomplete = fetch.process()
                            break

                else:
                    incomplete = fetch.process()
                    time.sleep(300)

                reconcile.process()

        except Exception as e:
            logging.error("exception %s" % (type(e).__name__), exc_info=True)

    logging.info("scallywag daemon stopped")


if __name__ == '__main__':
    main()


================================================
FILE: utils.py
================================================
// [OUTLINE - 1 symbols, 24 lines]
// import getpass
// import os
// import pwd
// L11-L24: def get_maintainer():



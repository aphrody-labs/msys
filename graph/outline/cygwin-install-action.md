# Codebase Digest: cygwin-install-action

- Files analyzed: 16
- Total lines: 1634
- Total size: 61.7 KB
- Git branch: `master`
- Git HEAD commit: `c5eb27ed (Bump the action version in the initial example)`
- Digest mode: `AST-Smart Outline`

## Directory Structure

```text
cygwin-install-action/
├── LICENSE (674 lines, 34.3 KB, ~8.2k tokens)
├── README.md (373 lines, 9.2 KB, ~2.7k tokens)
├── action.yml (82 lines, 2.6 KB, ~676 tokens)
├── src/
│   ├── _functions.ps1 (151 lines, 4.0 KB, ~1.1k tokens)
│   └── install.ps1 (113 lines, 3.3 KB, ~967 tokens)
└── tests/
    ├── Check-Installer-Sig.Tests.ps1 (29 lines, 1.2 KB, ~330 tokens)
    ├── Get-Validated-Platform.Tests.ps1 (38 lines, 1.0 KB, ~266 tokens)
    ├── Get-Validated-Sites.Tests.ps1 (30 lines, 894 B, ~252 tokens)
    ├── Get-Validated-Work-Volume.Tests.ps1 (38 lines, 1.1 KB, ~308 tokens)
    ├── Invoke-Cygwin-Setup.Tests.ps1 (15 lines, 483 B, ~135 tokens)
    ├── Invoke-WebRequest-With-Retry.Tests.ps1 (61 lines, 2.5 KB, ~655 tokens)
    ├── repo/
    │   └── x86_64/
    │       ├── release/
    │       │   └── cygwin-install-action-test/
    │       │       ├── cygwin-install-action-test-1.0.0-1-src.hint (4 lines, 67 B, ~20 tokens)
    │       │       └── cygwin-install-action-test-1.0.0-1.hint (4 lines, 61 B, ~18 tokens)
    │       └── setup.ini (20 lines, 889 B, ~221 tokens)
    ├── script.sh (1 lines, 34 B, ~10 tokens)
    └── symlink.sh (1 lines, 35 B, ~11 tokens)
```

## Source Files

================================================
FILE: README.md
================================================
Cygwin Install GitHub Action
============================

This GitHub Action can be used in a workflow to install Cygwin.

e.g.

```yaml
- run: git config --global core.autocrlf input
- uses: actions/checkout@v6

- uses: cygwin/cygwin-install-action@v7
  with:
    packages: |
      git
      python3
      python3-pip

- run: bash tests/script.sh  # see note below
```

> [!NOTE]
>
> The [Workflow documentation][github-workflow-documentation]
> suggests you should also use bash options `-eo pipefail`.
> It's omitted here for clarity.


Table of Contents
-----------------

* [Inputs](#inputs)

  * [`packages`](#packages)
  * [`allow-test-packages`](#allow-test-packages)
  * [`work-vol`](#work-vol)
  * [`install-dir`](#install-dir)
  * [`platform`](#platform)
  * [`add-to-path`](#add-to-path)
  * [`site`](#site)
  * [`pubkeys`](#pubkeys)
  * [`check-hash`](#check-hash)
  * [`check-installer-sig`](#check-installer-sig)
  * [`check-sig`](#check-sig)

* [Outputs](#outputs)

  * [`root`](#root)
  * [`setup`](#setup)
  * [`package-cache`](#package-cache)

* [Line endings](#line-endings)
* [PATH](#path)
* [Symlinks](#symlinks)
* [Mirrors and signatures](#mirrors-and-signatures)


Inputs
------

### `packages`

A list of additional packages to install.

Example usage:

```yaml
- uses: 'cygwin/cygwin-install-action@<version>'
  with:
    packages: |
      git
      python3
      python3-pip
```

> [!NOTE]
>
> For historical reasons and due to limitations of the current implementation,
> the installer only *warns* if any of the specified packages cannot be found
> (which may subsequently lead to confusing errors in the workflow). You can
> verify package names at https://cygwin.com/packages .

### `allow-test-packages`

By default, packages marked test are not considered for installation.

Setting this input to `'true'` will allow test packages
to be found and installed.

```yaml
- uses: 'cygwin/cygwin-install-action@<version>'
  with:
    allow-test-packages: 'true'
    packages: |
      my-cool-package
```

### `work-vol`

The Windows volume to which the installer and packages are downloaded.

By default, `work-vol` is also the volume where Cygwin will be installed,
but the install location can be customized using the
[`install-dir`](#install-dir) input.

The default value is `'D:'` for performance reasons.

Example:

```yaml
- uses: 'cygwin/cygwin-install-action@<version>'
  with:
    work-vol: 'C:' # This affects the Cygwin install directory, too.
```

### `install-dir`

The absolute path to the directory where Cygwin will be installed.

The default install directory is `'D:\cygwin'`,
which is calculated using the [`work-vol`](#work-vol) input.

Example:

```yaml
- uses: 'cygwin/cygwin-install-action@<version>'
  with:
    install-dir: 'D:\cygwin64'
```

### `platform`

Select the architecture to install.

`'x86_64'` is the default value, but `'x86'` can also be specified.

> [!NOTE]
>
> Cygwin no longer supports the `'x86'` architecture.
>
> If `platform: 'x86'` is set, the [`site`](#site) input will change defaults
> to select the final 2022-11-23 archive of `'x86'` Cygwin, and the
> `--allow-unsupported-windows` option will be passed to the installer.
>
> Please refer to the Cygwin Installation documentation regarding
> [the limitations of Cygwin on the x86 architecture][unsupported].

Example usage:

```yaml
- uses: 'cygwin/cygwin-install-action@<version>'
  with:
    platform: 'x86_64'
```

### `add-to-path`

By default, Cygwin's `/usr/bin` directory is added to the system `$PATH`.

This behavior can be disabled by setting this input to `'false'`.

```yaml
- uses: 'cygwin/cygwin-install-action@<version>'
  with:
    add-to-path: 'false'
```

### `site`

Mirror sites to install from, separated by whitespace.

The default site is selected based on the value of the [`platform`](#platform):

| `platform` | `site` default                                                  |
|------------|-----------------------------------------------------------------|
| `'x86_64'` | `https://mirrors.kernel.org/sourceware/cygwin/`                 |
| `'x86'`    | `https://mirrors.kernel.org/sourceware/cygwin-archive/20221123` |

Example:

```yaml
- uses: 'cygwin/cygwin-install-action@<version>'
  with:
    site: |
      https://mirrors.kernel.org/sourceware/cygwin/
      https://domain.example/path/
```

### `pubkeys`

Absolute paths to extra public key files (RFC4880 format).

Example:

```yaml
# Prior to reaching this step in the workflow
# you would need to download the keys referenced below.
- uses: 'cygwin/cygwin-install-action@<version>'
  with:
    pubkeys: |
      D:\key1.pub
      D:\key2.pub
```

### `check-hash`

By default, the hash of the Cygwin installer will be verified.

This behavior can be disabled by setting this input to `'false'`.

> [!WARNING]
>
> Disabling hash verification may create a security risk.
>
> Only disable this if you are very confident
> that this is appropriate and necessary.

Example:

```yaml
- uses: 'cygwin/cygwin-install-action@<version>'
  with:
    check-hash: 'true'  # Change to 'false' only if required.
```

### `check-installer-sig`

By default, the Authenticode signature of the installer file will be verified.

This behavior can be disabled by setting this input to `'false'`.

> [!WARNING]
>
> Disabling signature verification may create a security risk.
>
> Only disable this if you are very confident
> that this is appropriate and necessary.

Example:

```yaml
- uses: 'cygwin/cygwin-install-action@<version>'
  with:
    check-installer-sig: 'true'  # Change to 'false' only if required.
```

### `check-sig`

By default, the installer will verify the signature of the package manifest.

This behavior can be disabled by setting this input to `'false'`.

> [!WARNING]
>
> Disabling signature verification may create a security risk.
>
> Only disable this if you are very confident
> that this is appropriate and necessary.

Example:

```yaml
- uses: 'cygwin/cygwin-install-action@<version>'
  with:
    check-sig: 'true'  # Change to 'false' only if required.
```


Outputs
-------

### `root`

The root directory of the Cygwin installation.

By default, this value will be `'D:\cygwin'`, but it is affected by the
[`work-vol`](#work-vol) and [`install-dir`](#install-dir) options.

### `setup`

The absolute path to the Cygwin installer.

### `package-cache`

The absolute path to the package cache directory.


Line endings
------------

### in the checkout

If you're going to use `actions/checkout` in your workflow, you should
precede that with

    - run: git config --global core.autocrlf input

to ensure that any shell scripts etc. in your repository don't get checked out
with `\r\n` line endings (leading to `'\r': command not found` errors).

### in the workflow

Likewise, if you have multiple lines of shell script in a YAML block for `run:`
in your workflow file, the file this is written into on the runner ends up with
`\r\n` line endings.

You can use `>-` (rather than `|`) to ensure that it doesn't contain any
newlines.

Alternatively, you can invoke `bash` with `-o igncr`.

**Warning:**
Putting `igncr` in the `SHELLOPTS` environment variable seems like it should
have the same effect, but this can have unintended side-effects (by default,
`SHELLOPTS` is a shell variable and moving it to the environment causes **all**
shell options to propagate to child shells).


PATH
----

By default, this action prepends Cygwin's `/usr/bin` directory to the PATH.

If you do not want the system PATH changed,
set [`add-to-path`](#add-to-path) to `'false'`.

### A clean PATH

However, if you want to ensure that PATH only contains Cygwin executables,
and other stuff installed in the VM image isn't going to get picked up:

- Set PATH to something like `/usr/bin:$(cygpath ${SYSTEMROOT})/system32` in
  your shell script

or,

- Put `CYGWIN_NOWINPATH=1` into the environment
- start a login shell with `bash --login`
- because the profile script does `cd ${HOME}`, either:
  * `cd ${GITHUB_WORKSPACE}` in your shell script, or
  * prevent the profile script from changing directory by putting
    `CHERE_INVOKING` into the environment


Symlinks
--------

Cygwin's installer creates Cygwin-style symlinks by default, and some
executables (e.g. `python`) are symlinks.

Since CMD and PowerShell don't understand those symlinks, you cannot run
those executables directly in a `run:` in your workflow. Execute them via
`bash` or `env` instead.

Alternatively, putting e.g. `CYGWIN=winsymlinks:native` into the workflow's
environment works, since the installer now honours that.


Mirrors and signatures
----------------------

You probably don't need to change the setting for [`site`](#site),
and you shouldn't change [`check-hash`](#check-hash),
[`check-installer-sig`](#check-installer-sig), or [`check-sig`](#check-sig)
unless you're very confident it's appropriate and necessary.

These options are very unlikely to be useful except in some very isolated
circumstances, such as using the [Cygwin Time Machine][cygwin-time-machine].


[github-workflow-documentation]: https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions#exit-codes-and-error-action-preference
[cygwin-time-machine]: http://www.crouchingtigerhiddenfruitbat.org/Cygwin/timemachine.html
[unsupported]: https://cygwin.com/install.html#unsupported


================================================
FILE: LICENSE
================================================
                    GNU GENERAL PUBLIC LICENSE
                       Version 3, 29 June 2007

 Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>
 Everyone is permitted to copy and distribute verbatim copies
 of this license document, but changing it is not allowed.

                            Preamble

  The GNU General Public License is a free, copyleft license for
software and other kinds of works.

  The licenses for most software and other practical works are designed
to take away your freedom to share and change the works.  By contrast,
the GNU General Public License is intended to guarantee your freedom to
share and change all versions of a program--to make sure it remains free
software for all its users.  We, the Free Software Foundation, use the
GNU General Public License for most of our software; it applies also to
any other work released this way by its authors.  You can apply it to
your programs, too.

  When we speak of free software, we are referring to freedom, not
price.  Our General Public Licenses are designed to make sure that you
have the freedom to distribute copies of free software (and charge for
them if you wish), that you receive source code or can get it if you
want it, that you can change the software or use pieces of it in new
free programs, and that you know you can do these things.

  To protect your rights, we need to prevent others from denying you
these rights or asking you to surrender the rights.  Therefore, you have
certain responsibilities if you distribute copies of the software, or if
you modify it: responsibilities to respect the freedom of others.

  For example, if you distribute copies of such a program, whether
gratis or for a fee, you must pass on to the recipients the same
freedoms that you received.  You must make sure that they, too, receive
or can get the source code.  And you must show them these terms so they
know their rights.

  Developers that use the GNU GPL protect your rights with two steps:
(1) assert copyright on the software, and (2) offer you this License
giving you legal permission to copy, distribute and/or modify it.

  For the developers' and authors' protection, the GPL clearly explains
that there is no warranty for this free software.  For both users' and
authors' sake, the GPL requires that modified versions be marked as
changed, so that their problems will not be attributed erroneously to
authors of previous versions.

  Some devices are designed to deny users access to install or run
modified versions of the software inside them, although the manufacturer
can do so.  This is fundamentally incompatible with the aim of
protecting users' freedom to change the software.  The systematic
pattern of such abuse occurs in the area of products for individuals to
use, which is precisely where it is most unacceptable.  Therefore, we
have designed this version of the GPL to prohibit the practice for those
products.  If such problems arise substantially in other domains, we
stand ready to extend this provision to those domains in future versions
of the GPL, as needed to protect the freedom of users.

  Finally, every program is threatened constantly by software patents.
States should not allow patents to restrict development and use of
software on general-purpose computers, but in those that do, we wish to
avoid the special danger that patents applied to a free program could
make it effectively proprietary.  To prevent this, the GPL assures that
patents cannot be used to render the program non-free.

  The precise terms and conditions for copying, distribution and
modification follow.

                       TERMS AND CONDITIONS

  0. Definitions.

  "This License" refers to version 3 of the GNU General Public License.

  "Copyright" also means copyright-like laws that apply to other kinds of
works, such as semiconductor masks.

  "The Program" refers to any copyrightable work licensed under this
License.  Each licensee is addressed as "you".  "Licensees" and
"recipients" may be individuals or organizations.

  To "modify" a work means to copy from or adapt all or part of the work
in a fashion requiring copyright permission, other than the making of an
exact copy.  The resulting work is called a "modified version" of the
earlier work or a work "based on" the earlier work.

  A "covered work" means either the unmodified Program or a work based
on the Program.

  To "propagate" a work means to do anything with it that, without
permission, would make you directly or secondarily liable for
infringement under applicable copyright law, except executing it on a
computer or modifying a private copy.  Propagation includes copying,
distribution (with or without modification), making available to the
public, and in some countries other activities as well.

  To "convey" a work means any kind of propagation that enables other
parties to make or receive copies.  Mere interaction with a user through
a computer network, with no transfer of a copy, is not conveying.

  An interactive user interface displays "Appropriate Legal Notices"
to the extent that it includes a convenient and prominently visible
feature that (1) displays an appropriate copyright notice, and (2)
tells the user that there is no warranty for the work (except to the
extent that warranties are provided), that licensees may convey the
work under this License, and how to view a copy of this License.  If
the interface presents a list of user commands or options, such as a
menu, a prominent item in the list meets this criterion.

  1. Source Code.

  The "source code" for a work means the preferred form of the work
for making modifications to it.  "Object code" means any non-source
form of a work.

  A "Standard Interface" means an interface that either is an official
standard defined by a recognized standards body, or, in the case of
interfaces specified for a particular programming language, one that
is widely used among developers working in that language.

  The "System Libraries" of an executable work include anything, other
than the work as a whole, that (a) is included in the normal form of
packaging a Major Component, but which is not part of that Major
Component, and (b) serves only to enable use of the work with that
Major Component, or to implement a Standard Interface for which an
implementation is available to the public in source code form.  A
"Major Component", in this context, means a major essential component
(kernel, window system, and so on) of the specific operating system
(if any) on which the executable work runs, or a compiler used to
produce the work, or an object code interpreter used to run it.

  The "Corresponding Source" for a work in object code form means all
the source code needed to generate, install, and (for an executable
work) run the object code and to modify the work, including scripts to
control those activities.  However, it does not include the work's
System Libraries, or general-purpose tools or generally available free
programs which are used unmodified in performing those activities but
which are not part of the work.  For example, Corresponding Source
includes interface definition files associated with source files for
the work, and the source code for shared libraries and dynamically
linked subprograms that the work is specifically designed to require,
such as by intimate data communication or control flow between those
subprograms and other parts of the work.

  The Corresponding Source need not include anything that users
can regenerate automatically from other parts of the Corresponding
Source.

  The Corresponding Source for a work in source code form is that
same work.

  2. Basic Permissions.

  All rights granted under this License are granted for the term of
copyright on the Program, and are irrevocable provided the stated
conditions are met.  This License explicitly affirms your unlimited
permission to run the unmodified Program.  The output from running a
covered work is covered by this License only if the output, given its
content, constitutes a covered work.  This License acknowledges your
rights of fair use or other equivalent, as provided by copyright law.

  You may make, run and propagate covered works that you do not
convey, without conditions so long as your license otherwise remains
in force.  You may convey covered works to others for the sole purpose
of having them make modifications exclusively for you, or provide you
with facilities for running those works, provided that you comply with
the terms of this License in conveying all material for which you do
not control copyright.  Those thus making or running the covered works
for you must do so exclusively on your behalf, under your direction
and control, on terms that prohibit them from making any copies of
your copyrighted material outside their relationship with you.

  Conveying under any other circumstances is permitted solely under
the conditions stated below.  Sublicensing is not allowed; section 10
makes it unnecessary.

  3. Protecting Users' Legal Rights From Anti-Circumvention Law.

  No covered work shall be deemed part of an effective technological
measure under any applicable law fulfilling obligations under article
11 of the WIPO copyright treaty adopted on 20 December 1996, or
similar laws prohibiting or restricting circumvention of such
measures.

  When you convey a covered work, you waive any legal power to forbid
circumvention of technological measures to the extent such circumvention
is effected by exercising rights under this License with respect to
the covered work, and you disclaim any intention to limit operation or
modification of the work as a means of enforcing, against the work's
users, your or third parties' legal rights to forbid circumvention of
technological measures.

  4. Conveying Verbatim Copies.

  You may convey verbatim copies of the Program's source code as you
receive it, in any medium, provided that you conspicuously and
appropriately publish on each copy an appropriate copyright notice;
keep intact all notices stating that this License and any
non-permissive terms added in accord with section 7 apply to the code;
keep intact all notices of the absence of any warranty; and give all
recipients a copy of this License along with the Program.

  You may charge any price or no price for each copy that you convey,
and you may offer support or warranty protection for a fee.

  5. Conveying Modified Source Versions.

  You may convey a work based on the Program, or the modifications to
produce it from the Program, in the form of source code under the
terms of section 4, provided that you also meet all of these conditions:

    a) The work must carry prominent notices stating that you modified
    it, and giving a relevant date.

    b) The work must carry prominent notices stating that it is
    released under this License and any conditions added under section
    7.  This requirement modifies the requirement in section 4 to
    "keep intact all notices".

    c) You must license the entire work, as a whole, under this
    License to anyone who comes into possession of a copy.  This
    License will therefore apply, along with any applicable section 7
    additional terms, to the whole of the work, and all its parts,
    regardless of how they are packaged.  This License gives no
    permission to license the work in any other way, but it does not
    invalidate such permission if you have separately received it.

    d) If the work has interactive user interfaces, each must display
    Appropriate Legal Notices; however, if the Program has interactive
    interfaces that do not display Appropriate Legal Notices, your
    work need not make them do so.

  A compilation of a covered work with other separate and independent
works, which are not by their nature extensions of the covered work,
and which are not combined with it such as to form a larger program,
in or on a volume of a storage or distribution medium, is called an
"aggregate" if the compilation and its resulting copyright are not
used to limit the access or legal rights of the compilation's users
beyond what the individual works permit.  Inclusion of a covered work
in an aggregate does not cause this License to apply to the other
parts of the aggregate.

  6. Conveying Non-Source Forms.

  You may convey a covered work in object code form under the terms
of sections 4 and 5, provided that you also convey the
machine-readable Corresponding Source under the terms of this License,
in one of these ways:

    a) Convey the object code in, or embodied in, a physical product
    (including a physical distribution medium), accompanied by the
    Corresponding Source fixed on a durable physical medium
    customarily used for software interchange.

    b) Convey the object code in, or embodied in, a physical product
    (including a physical distribution medium), accompanied by a
    written offer, valid for at least three years and valid for as
    long as you offer spare parts or customer support for that product
    model, to give anyone who possesses the object code either (1) a
    copy of the Corresponding Source for all the software in the
    product that is covered by this License, on a durable physical
    medium customarily used for software interchange, for a price no
    more than your reasonable cost of physically performing this
    conveying of source, or (2) access to copy the
    Corresponding Source from a network server at no charge.

    c) Convey individual copies of the object code with a copy of the
    written offer to provide the Corresponding Source.  This
    alternative is allowed only occasionally and noncommercially, and
    only if you received the object code with such an offer, in accord
    with subsection 6b.

    d) Convey the object code by offering access from a designated
    place (gratis or for a charge), and offer equivalent access to the
    Corresponding Source in the same way through the same place at no
    further charge.  You need not require recipients to copy the
    Corresponding Source along with the object code.  If the place to
    copy the object code is a network server, the Corresponding Source
    may be on a different server (operated by you or a third party)
    that supports equivalent copying facilities, provided you maintain
    clear directions next to the object code saying where to find the
    Corresponding Source.  Regardless of what server hosts the
    Corresponding Source, you remain obligated to ensure that it is
    available for as long as needed to satisfy these requirements.

    e) Convey the object code using peer-to-peer transmission, provided
    you inform other peers where the object code and Corresponding
    Source of the work are being offered to the general public at no
    charge under subsection 6d.

  A separable portion of the object code, whose source code is excluded
from the Corresponding Source as a System Library, need not be
included in conveying the object code work.

  A "User Product" is either (1) a "consumer product", which means any
tangible personal property which is normally used for personal, family,
or household purposes, or (2) anything designed or sold for incorporation
into a dwelling.  In determining whether a product is a consumer product,
doubtful cases shall be resolved in favor of coverage.  For a particular
product received by a particular user, "normally used" refers to a
typical or common use of that class of product, regardless of the status
of the particular user or of the way in which the particular user
actually uses, or expects or is expected to use, the product.  A product
is a consumer product regardless of whether the product has substantial
commercial, industrial or non-consumer uses, unless such uses represent
the only significant mode of use of the product.

  "Installation Information" for a User Product means any methods,
procedures, authorization keys, or other information required to install
and execute modified versions of a covered work in that User Product from
a modified version of its Corresponding Source.  The information must
suffice to ensure that the continued functioning of the modified object
code is in no case prevented or interfered with solely because
modification has been made.

  If you convey an object code work under this section in, or with, or
specifically for use in, a User Product, and the conveying occurs as
part of a transaction in which the right of possession and use of the
User Product is transferred to the recipient in perpetuity or for a
fixed term (regardless of how the transaction is characterized), the
Corresponding Source conveyed under this section must be accompanied
by the Installation Information.  But this requirement does not apply
if neither you nor any third party retains the ability to install
modified object code on the User Product (for example, the work has
been installed in ROM).

  The requirement to provide Installation Information does not include a
requirement to continue to provide support service, warranty, or updates
for a work that has been modified or installed by the recipient, or for
the User Product in which it has been modified or installed.  Access to a
network may be denied when the modification itself materially and
adversely affects the operation of the network or violates the rules and
protocols for communication across the network.

  Corresponding Source conveyed, and Installation Information provided,
in accord with this section must be in a format that is publicly
documented (and with an implementation available to the public in
source code form), and must require no special password or key for
unpacking, reading or copying.

  7. Additional Terms.

  "Additional permissions" are terms that supplement the terms of this
License by making exceptions from one or more of its conditions.
Additional permissions that are applicable to the entire Program shall
be treated as though they were included in this License, to the extent
that they are valid under applicable law.  If additional permissions
apply only to part of the Program, that part may be used separately
under those permissions, but the entire Program remains governed by
this License without regard to the additional permissions.

  When you convey a copy of a covered work, you may at your option
remove any additional permissions from that copy, or from any part of
it.  (Additional permissions may be written to require their own
removal in certain cases when you modify the work.)  You may place
additional permissions on material, added by you to a covered work,
for which you have or can give appropriate copyright permission.

  Notwithstanding any other provision of this License, for material you
add to a covered work, you may (if authorized by the copyright holders of
that material) supplement the terms of this License with terms:

    a) Disclaiming warranty or limiting liability differently from the
    terms of sections 15 and 16 of this License; or

    b) Requiring preservation of specified reasonable legal notices or
    author attributions in that material or in the Appropriate Legal
    Notices displayed by works containing it; or

    c) Prohibiting misrepresentation of the origin of that material, or
    requiring that modified versions of such material be marked in
    reasonable ways as different from the original version; or

    d) Limiting the use for publicity purposes of names of licensors or
    authors of the material; or

    e) Declining to grant rights under trademark law for use of some
    trade names, trademarks, or service marks; or

    f) Requiring indemnification of licensors and authors of that
    material by anyone who conveys the material (or modified versions of
    it) with contractual assumptions of liability to the recipient, for
    any liability that these contractual assumptions directly impose on
    those licensors and authors.

  All other non-permissive additional terms are considered "further
restrictions" within the meaning of section 10.  If the Program as you
received it, or any part of it, contains a notice stating that it is
governed by this License along with a term that is a further
restriction, you may remove that term.  If a license document contains
a further restriction but permits relicensing or conveying under this
License, you may add to a covered work material governed by the terms
of that license document, provided that the further restriction does
not survive such relicensing or conveying.

  If you add terms to a covered work in accord with this section, you
must place, in the relevant source files, a statement of the
additional terms that apply to those files, or a notice indicating
where to find the applicable terms.

  Additional terms, permissive or non-permissive, may be stated in the
form of a separately written license, or stated as exceptions;
the above requirements apply either way.

  8. Termination.

  You may not propagate or modify a covered work except as expressly
provided under this License.  Any attempt otherwise to propagate or
modify it is void, and will automatically terminate your rights under
this License (including any patent licenses granted under the third
paragraph of section 11).

  However, if you cease all violation of this License, then your
license from a particular copyright holder is reinstated (a)
provisionally, unless and until the copyright holder explicitly and
finally terminates your license, and (b) permanently, if the copyright
holder fails to notify you of the violation by some reasonable means
prior to 60 days after the cessation.

  Moreover, your license from a particular copyright holder is
reinstated permanently if the copyright holder notifies you of the
violation by some reasonable means, this is the first time you have
received notice of violation of this License (for any work) from that
copyright holder, and you cure the violation prior to 30 days after
your receipt of the notice.

  Termination of your rights under this section does not terminate the
licenses of parties who have received copies or rights from you under
this License.  If your rights have been terminated and not permanently
reinstated, you do not qualify to receive new licenses for the same
material under section 10.

  9. Acceptance Not Required for Having Copies.

  You are not required to accept this License in order to receive or
run a copy of the Program.  Ancillary propagation of a covered work
occurring solely as a consequence of using peer-to-peer transmission
to receive a copy likewise does not require acceptance.  However,
nothing other than this License grants you permission to propagate or
modify any covered work.  These actions infringe copyright if you do
not accept this License.  Therefore, by modifying or propagating a
covered work, you indicate your acceptance of this License to do so.

  10. Automatic Licensing of Downstream Recipients.

  Each time you convey a covered work, the recipient automatically
receives a license from the original licensors, to run, modify and
propagate that work, subject to this License.  You are not responsible
for enforcing compliance by third parties with this License.

  An "entity transaction" is a transaction transferring control of an
organization, or substantially all assets of one, or subdividing an
organization, or merging organizations.  If propagation of a covered
work results from an entity transaction, each party to that
transaction who receives a copy of the work also receives whatever
licenses to the work the party's predecessor in interest had or could
give under the previous paragraph, plus a right to possession of the
Corresponding Source of the work from the predecessor in interest, if
the predecessor has it or can get it with reasonable efforts.

  You may not impose any further restrictions on the exercise of the
rights granted or affirmed under this License.  For example, you may
not impose a license fee, royalty, or other charge for exercise of
rights granted under this License, and you may not initiate litigation
(including a cross-claim or counterclaim in a lawsuit) alleging that
any patent claim is infringed by making, using, selling, offering for
sale, or importing the Program or any portion of it.

  11. Patents.

  A "contributor" is a copyright holder who authorizes use under this
License of the Program or a work on which the Program is based.  The
work thus licensed is called the contributor's "contributor version".

  A contributor's "essential patent claims" are all patent claims
owned or controlled by the contributor, whether already acquired or
hereafter acquired, that would be infringed by some manner, permitted
by this License, of making, using, or selling its contributor version,
but do not include claims that would be infringed only as a
consequence of further modification of the contributor version.  For
purposes of this definition, "control" includes the right to grant
patent sublicenses in a manner consistent with the requirements of
this License.

  Each contributor grants you a non-exclusive, worldwide, royalty-free
patent license under the contributor's essential patent claims, to
make, use, sell, offer for sale, import and otherwise run, modify and
propagate the contents of its contributor version.

  In the following three paragraphs, a "patent license" is any express
agreement or commitment, however denominated, not to enforce a patent
(such as an express permission to practice a patent or covenant not to
sue for patent infringement).  To "grant" such a patent license to a
party means to make such an agreement or commitment not to enforce a
patent against the party.

  If you convey a covered work, knowingly relying on a patent license,
and the Corresponding Source of the work is not available for anyone
to copy, free of charge and under the terms of this License, through a
publicly available network server or other readily accessible means,
then you must either (1) cause the Corresponding Source to be so
available, or (2) arrange to deprive yourself of the benefit of the
patent license for this particular work, or (3) arrange, in a manner
consistent with the requirements of this License, to extend the patent
license to downstream recipients.  "Knowingly relying" means you have
actual knowledge that, but for the patent license, your conveying the
covered work in a country, or your recipient's use of the covered work
in a country, would infringe one or more identifiable patents in that
country that you have reason to believe are valid.

  If, pursuant to or in connection with a single transaction or
arrangement, you convey, or propagate by procuring conveyance of, a
covered work, and grant a patent license to some of the parties
receiving the covered work authorizing them to use, propagate, modify
or convey a specific copy of the covered work, then the patent license
you grant is automatically extended to all recipients of the covered
work and works based on it.

  A patent license is "discriminatory" if it does not include within
the scope of its coverage, prohibits the exercise of, or is
conditioned on the non-exercise of one or more of the rights that are
specifically granted under this License.  You may not convey a covered
work if you are a party to an arrangement with a third party that is
in the business of distributing software, under which you make payment
to the third party based on the extent of your activity of conveying
the work, and under which the third party grants, to any of the
parties who would receive the covered work from you, a discriminatory
patent license (a) in connection with copies of the covered work
conveyed by you (or copies made from those copies), or (b) primarily
for and in connection with specific products or compilations that
contain the covered work, unless you entered into that arrangement,
or that patent license was granted, prior to 28 March 2007.

  Nothing in this License shall be construed as excluding or limiting
any implied license or other defenses to infringement that may
otherwise be available to you under applicable patent law.

  12. No Surrender of Others' Freedom.

  If conditions are imposed on you (whether by court order, agreement or
otherwise) that contradict the conditions of this License, they do not
excuse you from the conditions of this License.  If you cannot convey a
covered work so as to satisfy simultaneously your obligations under this
License and any other pertinent obligations, then as a consequence you may
not convey it at all.  For example, if you agree to terms that obligate you
to collect a royalty for further conveying from those to whom you convey
the Program, the only way you could satisfy both those terms and this
License would be to refrain entirely from conveying the Program.

  13. Use with the GNU Affero General Public License.

  Notwithstanding any other provision of this License, you have
permission to link or combine any covered work with a work licensed
under version 3 of the GNU Affero General Public License into a single
combined work, and to convey the resulting work.  The terms of this
License will continue to apply to the part which is the covered work,
but the special requirements of the GNU Affero General Public License,
section 13, concerning interaction through a network will apply to the
combination as such.

  14. Revised Versions of this License.

  The Free Software Foundation may publish revised and/or new versions of
the GNU General Public License from time to time.  Such new versions will
be similar in spirit to the present version, but may differ in detail to
address new problems or concerns.

  Each version is given a distinguishing version number.  If the
Program specifies that a certain numbered version of the GNU General
Public License "or any later version" applies to it, you have the
option of following the terms and conditions either of that numbered
version or of any later version published by the Free Software
Foundation.  If the Program does not specify a version number of the
GNU General Public License, you may choose any version ever published
by the Free Software Foundation.

  If the Program specifies that a proxy can decide which future
versions of the GNU General Public License can be used, that proxy's
public statement of acceptance of a version permanently authorizes you
to choose that version for the Program.

  Later license versions may give you additional or different
permissions.  However, no additional obligations are imposed on any
author or copyright holder as a result of your choosing to follow a
later version.

  15. Disclaimer of Warranty.

  THERE IS NO WARRANTY FOR THE PROGRAM, TO THE EXTENT PERMITTED BY
APPLICABLE LAW.  EXCEPT WHEN OTHERWISE STATED IN WRITING THE COPYRIGHT
HOLDERS AND/OR OTHER PARTIES PROVIDE THE PROGRAM "AS IS" WITHOUT WARRANTY
OF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO,
THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
PURPOSE.  THE ENTIRE RISK AS TO THE QUALITY AND PERFORMANCE OF THE PROGRAM
IS WITH YOU.  SHOULD THE PROGRAM PROVE DEFECTIVE, YOU ASSUME THE COST OF
ALL NECESSARY SERVICING, REPAIR OR CORRECTION.

  16. Limitation of Liability.

  IN NO EVENT UNLESS REQUIRED BY APPLICABLE LAW OR AGREED TO IN WRITING
WILL ANY COPYRIGHT HOLDER, OR ANY OTHER PARTY WHO MODIFIES AND/OR CONVEYS
THE PROGRAM AS PERMITTED ABOVE, BE LIABLE TO YOU FOR DAMAGES, INCLUDING ANY
GENERAL, SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE
USE OR INABILITY TO USE THE PROGRAM (INCLUDING BUT NOT LIMITED TO LOSS OF
DATA OR DATA BEING RENDERED INACCURATE OR LOSSES SUSTAINED BY YOU OR THIRD
PARTIES OR A FAILURE OF THE PROGRAM TO OPERATE WITH ANY OTHER PROGRAMS),
EVEN IF SUCH HOLDER OR OTHER PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF
SUCH DAMAGES.

  17. Interpretation of Sections 15 and 16.

  If the disclaimer of warranty and limitation of liability provided
above cannot be given local legal effect according to their terms,
reviewing courts shall apply local law that most closely approximates
an absolute waiver of all civil liability in connection with the
Program, unless a warranty or assumption of liability accompanies a
copy of the Program in return for a fee.

                     END OF TERMS AND CONDITIONS

            How to Apply These Terms to Your New Programs

  If you develop a new program, and you want it to be of the greatest
possible use to the public, the best way to achieve this is to make it
free software which everyone can redistribute and change under these terms.

  To do so, attach the following notices to the program.  It is safest
to attach them to the start of each source file to most effectively
state the exclusion of warranty; and each file should have at least
the "copyright" line and a pointer to where the full notice is found.

    <one line to give the program's name and a brief idea of what it does.>
    Copyright (C) <year>  <name of author>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.

Also add information on how to contact you by electronic and paper mail.

  If the program does terminal interaction, make it output a short
notice like this when it starts in an interactive mode:

    <program>  Copyright (C) <year>  <name of author>
    This program comes with ABSOLUTELY NO WARRANTY; for details type `show w'.
    This is free software, and you are welcome to redistribute it
    under certain conditions; type `show c' for details.

The hypothetical commands `show w' and `show c' should show the appropriate
parts of the General Public License.  Of course, your program's commands
might be different; for a GUI interface, you would use an "about box".

  You should also get your employer (if you work as a programmer) or school,
if any, to sign a "copyright disclaimer" for the program, if necessary.
For more information on this, and how to apply and follow the GNU GPL, see
<https://www.gnu.org/licenses/>.

  The GNU General Public License does not permit incorporating your program
into proprietary programs.  If your program is a subroutine library, you
may consider it more useful to permit linking proprietary applications with
the library.  If this is what you want to do, use the GNU Lesser General
Public License instead of this License.  But first, please read
<https://www.gnu.org/licenses/why-not-lgpl.html>.


================================================
FILE: action.yml
================================================
name: Install Cygwin Action
description: GitHub Action to install Cygwin

inputs:
  platform:
    description: Platform [x86, x86_64]
    required: false
    default: x86_64
  packages:
    description: Packages to install
    required: false
  install-dir:
    # For consistency and simplicity, install to <work-dir>:\cygwin rather
    # than to the platform dependent default (e.g. <work-dir>:\cygwin64)
    description: Installation directory (overrides work-vol)
    required: false
    default: ''
  check-sig:
    description: Should the setup.ini file signature be checked?
    required: false
    default: 'true'
  pubkeys:
    description: Absolute paths of extra public key files (RFC4880 format), separated by whitespace
    required: false
  site:
    description: Download site URLs separated by whitespace
    required: false
  add-to-path:
    description: Should Cygwin's bin directory be added to the system PATH?
    required: false
    default: 'true'
  allow-test-packages:
    description: Consider package versions marked test
    required: false
    default: 'false'
  check-hash:
    description: Check the hash of the installer
    required: false
    default: 'true'
  check-installer-sig:
    description: Check the Autheticode signature of the installer
    required: false
    default: 'true'
  work-vol:
    description: Volume on which to store setup and packages, and install Cygwin
    required: false
    default: ''

outputs:
  setup:
    description: Pathname of the Cygwin setup executable
    value: ${{ steps.cygwin-install-action.outputs.setup }}
  root:
    description: Root directory of Cygwin installation (equal to install-dir input)
    value: ${{ steps.cygwin-install-action.outputs.root }}
  package-cache:
    description: Package cache directory
    value: ${{ steps.cygwin-install-action.outputs.package-cache }}

runs:
  using: "composite"
  steps:
    - id: cygwin-install-action
      env:
        inputs_platform: "${{ inputs.platform }}"
        inputs_packages: "${{ inputs.packages }}"
        inputs_install_dir: "${{ inputs.install-dir }}"
        inputs_check_sig: "${{ inputs.check-sig }}"
        inputs_pubkeys: "${{ inputs.pubkeys }}"
        inputs_site: "${{ inputs.site }}"
        inputs_add_to_path: "${{ inputs.add-to-path }}"
        inputs_allow_test_packages: "${{ inputs.allow-test-packages }}"
        inputs_check_hash: "${{ inputs.check-hash }}"
        inputs_check_installer_sig: "${{ inputs.check-installer-sig }}"
        inputs_work_vol: "${{ inputs.work-vol }}"
      run: |
        & $Env:GITHUB_ACTION_PATH\src\install.ps1
      shell: powershell

branding:
  color: green
  icon: terminal


================================================
FILE: src/_functions.ps1
================================================
function Get-Validated-Platform {
    param (
        $Platform
    )

    switch ($platform) {
        # Valid values
        'x86_64'    { return 'x86_64'   }
        'x86'       { return 'x86'      }

        # Default value
        ''          { return 'x86_64'   }

        # Backwards-compatibility strings
        'x64'       { return 'x86_64'   }
        'amd64'     { return 'x86_64'   }
        'i686'      { return 'x86'      }

        # Unrecognized platform
        default     { throw "Unknown platform $Platform." }
    }
}


function Get-Validated-Sites {
    param (
        $Platform,
        $Sites
    )

    if ("$Sites" -eq '') {
        switch ("$Platform") {
            'x86'   { return @( 'https://mirrors.kernel.org/sourceware/cygwin-archive/20221123' ) }
            # This is the default site for x86_64 platforms.
            default { return @( 'https://mirrors.kernel.org/sourceware/cygwin/' ) }
        }
    }

    return "$Sites" -Split '\s+' | Where-Object { $_ }
}


function Invoke-Cygwin-Setup {
    param (
        $SetupExePath,
        $SetupExeArgs
    )

    # Because setup is a Windows GUI app, make it part of a pipeline
    # to make PowerShell wait for it to exit.
    Write-Host $SetupExePath $SetupExeArgs
    & $SetupExePath $SetupExeArgs | Out-Default

    # Check the exit code.
    if ($LASTEXITCODE -ne 0) {
        throw "$SetupExePath exited with error code $LASTEXITCODE"
    }
}


function Get-Validated-Work-Volume {
    param (
        $WorkVolume
    )

    # Prefer the user's chosen volume.
    if ("$WorkVolume" -ne '') {
        if ("$WorkVolume" -notmatch '^[A-Za-z]:$') {
            throw "The work-vol parameter, '$WorkVolume', must be only a drive letter and a colon, like 'D:'."
        }
        if (-Not (Test-Path -LiteralPath "$WorkVolume\")) {
            throw "The work-vol parameter, '$WorkVolume', is not a valid drive."
        }
        return "$WorkVolume".ToUpper()
    }

    # Prefer the 'D:' drive but fall back to SYSTEMDRIVE.
    # 'D:' is preferred on hosted runners for performance reasons.
    if (Test-Path -LiteralPath 'D:\') {
        return 'D:'
    }

    return Get-SystemDrive
}


function Invoke-WebRequest-With-Retry {
    param (
        $Uri,
        $OutFile
    )

    $maxRetries = 5

    for ($attempt = 1; $attempt -le $maxRetries; $attempt++) {
        try {
            Invoke-WebRequest -Uri $Uri -OutFile $OutFile
            return
        } catch {
            $statusCode = $_.Exception.Response.StatusCode.value__
            if ($attempt -ne $maxRetries) {
                $delaySeconds = [Math]::Pow(2, $attempt)
                Write-Output "Attempt $attempt failed (HTTP Status $statusCode). Retrying in $delaySeconds seconds..."
                Start-Sleep -Seconds $delaySeconds
            }
            else {
                Write-Output "Attempt $attempt failed (HTTP Status $statusCode)."
            }
        }
    }

    throw "Failed to download '$Uri' after $maxRetries attempts."
}

function Check-Installer-Sig {
   param (
         $SetupExePath
   )

   $signature = Get-AuthenticodeSignature -FilePath $SetupExePath
   if ($signature.SignerCertificate) {
      $signature_certhash = $signature.SignerCertificate.GetCertHashString("SHA256")
   } else {
      $signature_certhash = '-'
   }

   echo "Signature status: $($signature.Status) fingerprint: $signature_certhash"

   if (!$signature.Status -ne 'Valid') {
      throw "Invalid CodeSign signature on the downloaded setup!"
   }

   # check against a list of fingerprints for valid certs we have used
   $certhashes = Get-CertHashes

   if ($signature_certhash -notin $certhashes) {
      throw "Unexpected key certificate made CodeSign signature on the downloaded setup!"
   }
}

# ---------------------------------------------------------------------
# Functions below this line exist so the test suite can mock them.

function Get-SystemDrive { "$Env:SYSTEMDRIVE" }

function Get-CertHashes {
  (
    '2CE11DA3A675A9D631E06A28DDFD6F730B9CC6989B43BD30AD7CC79D219CF2BD',
    '3AB2B14363B58A1856D4902C737797C899118095F7025DF7832C1B52483865A0'
  )
}


================================================
FILE: src/install.ps1
================================================
$ErrorActionPreference = 'Stop'

# Import functions.
. "$PSScriptRoot/_functions.ps1"

$platform = Get-Validated-Platform -Platform "$env:inputs_platform"
$vol = Get-Validated-Work-Volume -WorkVolume "$env:inputs_work_vol"

$setupExe = "$vol\setup.exe"
$setupFileName = "setup-$platform.exe"
Invoke-WebRequest-With-Retry "https://cygwin.com/$setupFileName" $setupExe

if ((Get-Item -LiteralPath $setupExe).Length -eq 0) {
    throw "The downloaded setup has a zero length!"
}

if ("$env:inputs_check_installer_sig" -ne 'false') {
   Check-Installer-Sig -SetupExePath $setupExe
}

if ("$env:inputs_check_hash" -eq 'true') {
    $hashFile = "$vol\sha512.sum"
    Invoke-WebRequest-With-Retry https://cygwin.com/sha512.sum $hashFile
    $expectedHashLines = Get-Content $hashFile
    $expectedHash = ''
    foreach ($expectedHashLine in $expectedHashLines) {
        if ($expectedHashLine.EndsWith(" $setupFileName")) {
            $expectedHash = $($expectedHashLine -split '\s+')[0]
            break
        }
    }
    if ($expectedHash -eq '') {
        Write-Output -InputObject "::warning::Unable to find the hash for the file $setupFileName in https://cygwin.com/sha512.sum"
    } else {
        $actualHash = $(Get-FileHash -LiteralPath $setupExe -Algorithm SHA512).Hash
        if ($actualHash -ine $expectedHash) {
            throw "Invalid hash of the downloaded setup!`nExpected: $expectedHash`nActual  : $actualHash"
        } else {
            Write-Output -InputObject "The downloaded file has the expected hash ($expectedHash)"
        }
    }
}

$installDir = "$vol\cygwin"
if ("$env:inputs_install_dir" -ne '') {
    $installDir = "$env:inputs_install_dir"
}

$packageDir = "$vol\cygwin-packages"

$packages = "$env:inputs_packages"
$pkg_list = $packages.Split('', [System.StringSplitOptions]::RemoveEmptyEntries)
$pkg_list = $pkg_list | % { $_.Trim() }
$pkg_list = $pkg_list | % { $_.Trim(',') }

$args = @(
 '-qnO',
 '-l', "$packageDir",
 '-R', "$installDir"
)

if ( "$env:inputs_allow_test_packages" -eq 'true' ) {
    $args += '-t' # --allow-test-packages
}

$site_list = Get-Validated-Sites -Platform "$platform" -Sites "$env:inputs_site"
foreach ($site in $site_list) {
    $args += '-s'
    $args += $site
}

if ($pkg_list.Count -gt 0) {
    $args += '-P'
    $args += $pkg_list -Join(',')
}

if ("$env:inputs_check_sig" -eq $false) {
    $args += '-X'
}

if ( "$env:inputs_pubkeys" ) {
    $pubkeys = "$env:inputs_pubkeys"
    $pubkey_list = $pubkeys.Split('', [System.StringSplitOptions]::RemoveEmptyEntries)
    $pubkey_list = $pubkey_list | % { $_.Trim() }
    foreach ($pubkey in $pubkey_list) {
        $args += '-K'
        $args += $pubkey
    }
}

if ($platform -eq 'x86') {
    $args += '--allow-unsupported-windows'
}

Invoke-Cygwin-Setup -SetupExePath $setupExe -SetupExeArgs $args

if ("$env:inputs_work_vol" -eq '' -and "$env:inputs_install_dir" -eq '') {
    # Create a symlink for compatibility with previous versions of this
    # action, just in case something relies upon C:\cygwin existing
    cmd /c mklink /d C:\cygwin $installDir
}

if ("$env:inputs_add_to_path" -eq 'true') {
    echo "$installDir\bin" >> $env:GITHUB_PATH
}

# run login shell to copy skeleton profile files
& "$installDir\bin\bash.exe" --login

# set outputs
echo "setup=$setupExe" >> $env:GITHUB_OUTPUT
echo "root=$installDir" >> $env:GITHUB_OUTPUT
echo "package-cache=$packageDir" >> $env:GITHUB_OUTPUT


================================================
FILE: tests/Check-Installer-Sig.Tests.ps1
================================================
BeforeAll {
    . "$PSScriptRoot/../src/_functions.ps1"
}

Describe 'Check-Installer-Sig' {
   # should succeed on a selection of installer versions covering all expected certs
   It 'Correct signature' -ForEach "setup-2.938", "setup-2.937" {
       Invoke-WebRequest-With-Retry -Uri "https://cygwin.com/setup/$_.x86_64.exe" -Outfile "setup.exe"
       Check-Installer-Sig -SetupExePath "setup.exe"
   }

   # should fail on missing signature
   It 'Missing signature' -ForEach "setup-2.932" {
       Invoke-WebRequest-With-Retry -Uri "https://cygwin.com/setup/$_.x86_64.exe" -Outfile "setup.exe"
       { Check-Installer-Sig -SetupExePath "setup.exe" }
       | Should -Throw "Invalid CodeSign signature on the downloaded setup!"
   }

   # should fail on unexpected signature key cert
   It 'Incorrect signature' -ForEach "setup-2.937" {
       Mock Get-CertHashes {
         return ('8B9867F6585CC76A7C27AC60B7E3EC35AEC739B448BB07CA863335E056CEA593')  # 256 bits of randomness
       }

       Invoke-WebRequest-With-Retry -Uri "https://cygwin.com/setup/$_.x86_64.exe" -Outfile "setup.exe"
       { Check-Installer-Sig -SetupExePath "setup.exe" }
       | Should -Throw "Unexpected key certificate made CodeSign signature on the downloaded setup!"
   }
}


================================================
FILE: tests/Get-Validated-Platform.Tests.ps1
================================================
BeforeAll {
    . "$PSScriptRoot/../src/_functions.ps1"
}

Describe 'Get-Validated-Platform' {
    Context 'canonical strings' {
        It 'x86_64' {
            Get-Validated-Platform -Platform 'x86_64' | Should -Be 'x86_64'
        }
        It 'x86' {
            Get-Validated-Platform -Platform 'x86' | Should -Be 'x86'
        }
    }

    Context 'backwards-compatibility strings' {
        It 'amd64' {
            Get-Validated-Platform -Platform 'amd64' | Should -Be 'x86_64'
        }
        It 'i686' {
            Get-Validated-Platform -Platform 'i686' | Should -Be 'x86'
        }
        It 'x64' {
            Get-Validated-Platform -Platform 'x64' | Should -Be 'x86_64'
        }
    }

    Context 'default value' {
        It 'default value' {
            Get-Validated-Platform -Platform '' | Should -Be 'x86_64'
        }
    }

    Context 'unknown value' {
        It 'unknown value' {
            { Get-Validated-Platform -Platform 'bogus' } | Should -Throw 'Unknown platform bogus.'
        }
    }
}


================================================
FILE: tests/Get-Validated-Sites.Tests.ps1
================================================
BeforeAll {
    . "$PSScriptRoot/../src/_functions.ps1"
}

Describe 'Get-Validated-Sites' {
    Context 'Platform defaults' {
        It 'Default (x86_64)' {
            $sites = Get-Validated-Sites
            Should -ActualValue $sites -Be @( 'https://mirrors.kernel.org/sourceware/cygwin/' )
        }
        It 'x86' {
            $sites = Get-Validated-Sites -Platform 'x86'
            Should -ActualValue $sites -Be @( 'https://mirrors.kernel.org/sourceware/cygwin-archive/20221123' )
        }
    }

    Context 'Custom sites' {
        It 'Single value' {
            Get-Validated-Sites -Sites 'a' | Should -Be @( 'a' )
        }

        It 'Spaces' {
            Get-Validated-Sites -Sites ' a  b   c ' | Should -Be @( 'a', 'b', 'c' )
        }

        It 'Newlines and tabs' {
            Get-Validated-Sites -Sites "`n`ta`n`tb`n`t" | Should -Be @( 'a', 'b' )
        }
    }
}


================================================
FILE: tests/Get-Validated-Work-Volume.Tests.ps1
================================================
BeforeAll {
    . "$PSScriptRoot/../src/_functions.ps1"
}

Describe 'Get-Validated-Work-Volume' {
    Context '-WorkVolume parameter' {
        It 'Wrong format' {
            Mock Test-Path { $false }
            { Get-Validated-Work-Volume -WorkVolume 'A:\' } | Should -Throw "*must be only a drive letter and a colon*"
        }
        It 'Does not exist' {
            Mock Test-Path { $false }
            { Get-Validated-Work-Volume -WorkVolume 'A:' } | Should -Throw "*not a valid drive*"
        }
        It 'Lowercase success' {
            Mock Test-Path { $true }
            Get-Validated-Work-Volume -WorkVolume 'a:' | Should -Be "A:"
        }
        It 'Uppercase success' {
            Mock Test-Path { $true }
            Get-Validated-Work-Volume -WorkVolume 'A:' | Should -Be "A:"
        }
    }

    It 'D: drive default' {
        Mock Test-Path { $true }
        Get-Validated-Work-Volume | Should -Be 'D:'
    }

    It 'Fallback to SYSTEMDRIVE' {
        # Setup
        Mock Test-Path { $false }
        Mock Get-SystemDrive { 'A:' }

        # Verify
        Get-Validated-Work-Volume | Should -Be 'A:'
    }
}


================================================
FILE: tests/Invoke-Cygwin-Setup.Tests.ps1
================================================
BeforeAll {
    . "$PSScriptRoot/../src/_functions.ps1"
}

Describe 'Invoke-Cygwin-Setup' {
    It 'success' {
        $arguments = @('-Command', 'Write-Host "success"')
        Invoke-Cygwin-Setup -SetupExePath 'pwsh' -SetupExeArgs $arguments | Should -Be $null
    }

    It 'non-zero exit code' {
        $arguments = @('-Command', 'throw "error!"')
        { Invoke-Cygwin-Setup -SetupExePath 'pwsh' -SetupExeArgs $arguments } | Should -Throw "*exited with error code 1"
    }
}


================================================
FILE: tests/Invoke-WebRequest-With-Retry.Tests.ps1
================================================
BeforeAll {
    . "$PSScriptRoot/../src/_functions.ps1"
}

Describe 'Invoke-WebRequest-With-Retry' {
    Context 'HTTP 404' {
        BeforeAll {
            Mock Invoke-WebRequest {
                $response = New-MockObject -type 'System.Net.HttpWebResponse'
                $code = [System.Net.HttpStatusCode]::NotFound
                $response | Add-Member -MemberType NoteProperty -Name StatusCode -Value $code -Force
                $status = [System.Net.WebExceptionStatus]::ProtocolError
                $exception = [System.Net.WebException]::new("404", $null, $status, $response)

                Throw $exception
            }
            Mock Start-Sleep { }
        }

        It 'Throws an error' {
            { Invoke-WebRequest-With-Retry -Uri 'https://404' -Outfile 'bogus' | Out-Null } `
            | Should -Throw "Failed to download 'https://404' after 5 attempts."
        }

        It 'Calls Invoke-WebRequest 5 times' {
            try { Invoke-WebRequest-With-Retry -Uri 'https://404' -Outfile 'bogus' | Out-Null } catch {}
            Should -Invoke -CommandName 'Invoke-WebRequest' -Times 5
        }

        It 'Calls Start-Sleep 4 times with increasing delays' {
            try { Invoke-WebRequest-With-Retry -Uri 'https://404' -Outfile 'bogus' | Out-Null } catch {}
            Should -Invoke -CommandName 'Start-Sleep' -Times 4
            Should -Invoke -CommandName 'Start-Sleep' -Times 1 -ParameterFilter { $Seconds -eq 2 }
            Should -Invoke -CommandName 'Start-Sleep' -Times 1 -ParameterFilter { $Seconds -eq 4 }
            Should -Invoke -CommandName 'Start-Sleep' -Times 1 -ParameterFilter { $Seconds -eq 8 }
            Should -Invoke -CommandName 'Start-Sleep' -Times 1 -ParameterFilter { $Seconds -eq 16 }
        }
    }

    Context 'Success' {
        BeforeAll {
            Mock Invoke-WebRequest { }
            Mock Start-Sleep { throw 'Start-Sleep should never be called in this context' }
        }

        It 'Throws no errors' {
            { Invoke-WebRequest-With-Retry -Uri 'https://200' -Outfile 'bogus' | Out-Null } `
            | Should -Not -Throw
        }

        It 'Calls Invoke-WebRequest only once' {
            Invoke-WebRequest-With-Retry -Uri 'https://200' -Outfile 'bogus' | Out-Null `
            | Should -Invoke -CommandName 'Invoke-WebRequest' -Times 1
        }

        It 'Never calls Start-Sleep' {
            Invoke-WebRequest-With-Retry -Uri 'https://200' -Outfile 'bogus' | Out-Null `
            | Should -Invoke -CommandName 'Start-Sleep' -Times 0
        }
    }
}


================================================
FILE: tests/repo/x86_64/release/cygwin-install-action-test/cygwin-install-action-test-1.0.0-1-src.hint
================================================
category: Debug
build-depends: cygport
sdesc: "test"
ldesc: "test"


================================================
FILE: tests/repo/x86_64/release/cygwin-install-action-test/cygwin-install-action-test-1.0.0-1.hint
================================================
category: Debug
requires: cygwin
sdesc: "test"
ldesc: "test"


================================================
FILE: tests/repo/x86_64/setup.ini
================================================
# This file was automatically generated at 2023-04-06 23:08:13 CEST.
#
# If you edit it, your edits will be discarded next time the file is
# generated.
#
# See https://sourceware.org/cygwin-apps/setup.ini.html for a description
# of the format.
release: cygwin
arch: x86_64
setup-timestamp: 1680815293

@ cygwin-install-action-test
sdesc: "test"
ldesc: "test"
category: Debug
version: 1.0.0-1
install: x86_64/release/cygwin-install-action-test/cygwin-install-action-test-1.0.0-1.tar.xz 232 87295610f57d118b9c7f80949c220a71578d1e89ef4cf8d63ff785d0e1ba98b285fbc16ede73a66712aaa5f5ab3729bbbd1968247ee1e8bfb19f3fcbc3c8a576
source: x86_64/release/cygwin-install-action-test/cygwin-install-action-test-1.0.0-1-src.tar.xz 232 87295610f57d118b9c7f80949c220a71578d1e89ef4cf8d63ff785d0e1ba98b285fbc16ede73a66712aaa5f5ab3729bbbd1968247ee1e8bfb19f3fcbc3c8a576
depends2: cygwin
build-depends: cygport


================================================
FILE: tests/script.sh
================================================
// [OUTLINE - 0 symbols, 4 lines]


================================================
FILE: tests/symlink.sh
================================================
// [OUTLINE - 0 symbols, 27 lines]



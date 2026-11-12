# Codebase Digest: pactoys

- Files analyzed: 30
- Total lines: 587
- Total size: 20.0 KB
- Git branch: `main`
- Git HEAD commit: `b5fcc0f3 (help: note that "repo::package:p" works too)`
- Digest mode: `AST-Smart Outline`

## Directory Structure

```text
pactoys/
├── LICENSE (31 lines, 1.7 KB, ~402 tokens)
├── Makefile (34 lines, 1.7 KB, ~484 tokens)
├── README.md (16 lines, 665 B, ~188 tokens)
├── library/
│   ├── default.sh (12 lines, 396 B, ~113 tokens)
│   ├── output.sh (11 lines, 357 B, ~103 tokens)
│   ├── pactoys.sh (1 lines, 35 B, ~11 tokens)
│   ├── recipe.sh (7 lines, 247 B, ~68 tokens)
│   └── util.sh (11 lines, 373 B, ~105 tokens)
└── source/
    ├── makepatch/
    │   ├── README.md (28 lines, 399 B, ~118 tokens)
    │   └── makepatch.sh (8 lines, 186 B, ~65 tokens)
    ├── pacboy/
    │   ├── README.md (45 lines, 1.1 KB, ~315 tokens)
    │   ├── pacboy.completion (91 lines, 3.1 KB, ~910 tokens)
    │   └── pacboy.sh (12 lines, 355 B, ~108 tokens)
    ├── repman/
    │   ├── README.md (15 lines, 317 B, ~87 tokens)
    │   ├── native/
    │   │   ├── Makefile (7 lines, 114 B, ~37 tokens)
    │   │   ├── inih/
    │   │   │   ├── LICENSE.txt (27 lines, 1.5 KB, ~356 tokens)
    │   │   │   ├── Makefile (19 lines, 339 B, ~113 tokens)
    │   │   │   ├── ini.c (15 lines, 609 B, ~193 tokens)
    │   │   │   └── ini.h (2 lines, 55 B, ~18 tokens)
    │   │   └── repman.c (18 lines, 873 B, ~245 tokens)
    │   ├── ruby/
    │   │   ├── bin/
    │   │   │   └── repman (3 lines, 38 B, ~13 tokens)
    │   │   ├── lib/
    │   │   │   └── repman.rb (94 lines, 2.9 KB, ~794 tokens)
    │   │   └── repman.gemspec (13 lines, 638 B, ~153 tokens)
    │   └── tests.sh (1 lines, 35 B, ~11 tokens)
    ├── saneman/
    │   ├── README.md (5 lines, 80 B, ~23 tokens)
    │   ├── modules/
    │   │   ├── default.sane.sh (11 lines, 416 B, ~111 tokens)
    │   │   └── msys2.sane.sh (2 lines, 82 B, ~22 tokens)
    │   └── saneman.sh (6 lines, 173 B, ~54 tokens)
    └── updpkgver/
        ├── README.md (5 lines, 214 B, ~51 tokens)
        └── updpkgver.sh (37 lines, 1.1 KB, ~329 tokens)
```

## Source Files

================================================
FILE: README.md
================================================
# Pactoys

A set of pacman packaging utilities.

Name                             | Platform   | Description
:------------------------------- | :--------- | :----------
[Makepatch](source/makepatch)    | Arch-like  | Patch manager.
[Pacboy](source/pacboy)          | MSYS2      | Agile package management.
[Repman](source/repman)          | Arch-like  | Repository manager.
[Saneman](source/saneman)        | Arch-like  | Recipe quality checker.
[Updpkgver](source/updpkgver)    | Arch-like  | Version update checker.

## License and copyright

Copyright (c) 2009, 2014-2016 Renato Silva and others.
Licensed under the terms of the [3-clause BSD license](LICENSE).


================================================
FILE: source/makepatch/README.md
================================================
# Makepatch

Makepatch is a patch manager for pacman packages.

## Examples

Initialize working directory:

```bash
tar xf tarball.tar.gz
makepatch init extracted
```

Edit existing patches:

```bash
vim patches/001/some/source/file.c
makepatch diff 001
makepatch refresh
```

Create new patches:

```bash
cp -r patches/{001,002}
vim patches/002/edit/files.c
makepatch diff 002 > 002-name.patch
```


================================================
FILE: source/pacboy/README.md
================================================
# Pacboy

Pacboy is a pacman wrapper for MSYS2 which manages the package prefixes automatically and provides easy commands for common tasks. It also supports autocompletion of package and repository names.

## Examples

Under MinGW shell, for 64-bit MSYS2, install both `mingw-w64-x86_64-python2-nuitka` and `mingw-w64-i686-python2-nuitka`, or just the i686 version for 32-bit MSYS2:

```
pacboy sync python2-nuitka
```

Remove `mingw-w64-x86_64-perl` and unnecessary dependencies under any shell:

```
pacboy remove perl:x
```

Show information and list files from `mingw-w64-x86_64-libmongoose-git` under 64-bit MinGW shell:

```
pacboy libmongoose info
pacboy libmongoose files
```

List content and install a package file:

```
pacboy files repman-git-r23.87bf865-1-x86_64.pkg.tar.xz
pacboy sync  repman-git-r23.87bf865-1-x86_64.pkg.tar.xz
```

Install MinGW and MSYS versions of libiconv from a configured repository named `mozilla`, with debug output enabled:

```
pacboy debug sync mozilla::libiconv
pacboy debug sync mozilla::libiconv:
```

Find packages that provide a specific file:

```
pacboy origin rsync.exe
pacboy origin /usr/bin/rsync.exe
```


================================================
FILE: source/repman/README.md
================================================
# Repman

Repman is a Pacman repository manager. You can use it for managing additional repositories in `/etc/pacman.d/repman.conf` using the command line. You can install the Ruby implementation with:

```
gem install repman
```

## Example

```
repman add name http://example.com
repman remove name
repman list
```


================================================
FILE: source/saneman/README.md
================================================
# Saneman

Saneman is a `PKGBUILD` quality checker.

![Screenshot](saneman.png)


================================================
FILE: source/updpkgver/README.md
================================================
# Updpkgver

Updpkgver is a tool for automatically checking and updating the `PKGBUILD` version. It can be used in a recipe repository for integrating automatically buildable updates.

![Screenshot](updpkgver.png)


================================================
FILE: LICENSE
================================================
Pactoys is distributed under the terms of the New BSD License (3-clause):

Copyright (c) 2014-2016 Renato Silva <br.renatosilva@gmail.com>
Copyright (c) 2014 David Macek <david.macek.0@gmail.com>
Copyright (c) 2009 Brush Technology
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.

    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.

    * Neither the names of the copyright holders nor the names of the project
      contributors may be used to endorse or promote products derived from this
      software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDERS OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR
TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


================================================
FILE: Makefile
================================================
system_version := $(shell uname -r | cut --delimiter=. --fields=1)
system_type    := $(shell uname -o)$(system_version)

all:
	$(MAKE) -C source/repman/native

clean:
	$(MAKE) -C source/repman/native clean

install:

# Main programs
	install -Dm755 source/makepatch/makepatch.sh           "$(DESTDIR)/usr/bin/makepatch"
	install -Dm755 source/repman/native/repman             "$(DESTDIR)/usr/bin/repman"
	install -Dm755 source/saneman/saneman.sh               "$(DESTDIR)/usr/bin/saneman"
	install -Dm755 source/updpkgver/updpkgver.sh           "$(DESTDIR)/usr/bin/updpkgver"
	install -Dm644 source/saneman/modules/default.sane.sh  "$(DESTDIR)/usr/share/saneman/modules/default.sane"

# Library
	install -Dm644 library/pactoys.sh                      "$(DESTDIR)/usr/bin/pactoys"
	install -Dm644 library/default.sh                      "$(DESTDIR)/usr/share/pactoys/library/default.sh"
	install -Dm644 library/output.sh                       "$(DESTDIR)/usr/share/pactoys/library/output.sh"
	install -Dm644 library/recipe.sh                       "$(DESTDIR)/usr/share/pactoys/library/recipe.sh"
	install -Dm644 library/util.sh                         "$(DESTDIR)/usr/share/pactoys/library/util.sh"

# Licenses
	install -Dm644 LICENSE                                 "$(DESTDIR)/usr/share/licenses/pactoys/LICENSE"
	install -Dm644 source/repman/native/inih/LICENSE.txt   "$(DESTDIR)/usr/share/licenses/pactoys/inih/LICENSE"

# MSYS2
	mkdir -p "$(DESTDIR)/var/cache/pacboy"
	install -Dm755 source/pacboy/pacboy.sh                 "$(DESTDIR)/usr/bin/pacboy"
	install -Dm644 source/pacboy/pacboy.completion         "$(DESTDIR)/usr/share/bash-completion/completions/pacboy"
	install -Dm644 source/saneman/modules/msys2.sane.sh    "$(DESTDIR)/usr/share/saneman/modules/msys2.sane"


================================================
FILE: library/default.sh
================================================
// [OUTLINE - 11 symbols, 97 lines]
// L9-L13: _pactoys_imported()
// L15-L19: _pactoys_register_import()
// L21-L30: _pactoys_import_object()
// L32-L41: _pactoys_import_function()
// L43-L63: _pactoys_import()
// L65-L68: import()
// L70-L73: pactoys_is_variable()
// L75-L78: pactoys_is_function()
// L80-L82: pactoys_interactive()
// L84-L87: pactoys_silent()
// L89-L92: pactoys_noiseless()


================================================
FILE: library/output.sh
================================================
// [OUTLINE - 10 symbols, 130 lines]
// L16-L23: pactoys_terminal()
// L25-L28: pactoys_clearline()
// L30-L35: pactoys_warning()
// L37-L42: pactoys_error()
// L44-L48: pactoys_terminate()
// L50-L59: pactoys_progress()
// L61-L64: pactoys_progress_done()
// L66-L71: pactoys_truncate()
// L73-L102: pactoys_print_format()
// L104-L108: pactoys_colorize()


================================================
FILE: library/pactoys.sh
================================================
// [OUTLINE - 0 symbols, 12 lines]


================================================
FILE: library/recipe.sh
================================================
// [OUTLINE - 6 symbols, 97 lines]
// L13-L20: pactoys_recipe_location()
// L22-L30: pactoys_recipe_folder()
// L32-L49: pactoys_recipe_type()
// L51-L65: pactoys_recipe_info()
// L67-L77: pactoys_package_name()
// L79-L97: pactoys_find_recipes()


================================================
FILE: library/util.sh
================================================
// [OUTLINE - 10 symbols, 137 lines]
// L11-L25: pactoys_separate()
// L27-L36: pactoys_lines_to_list()
// L38-L51: pactoys_path_to_list()
// L53-L61: pactoys_init_hash()
// L63-L70: pactoys_merge_hash()
// L72-L83: pactoys_print_hash()
// L85-L97: pactoys_load_object()
// L99-L105: pactoys_filter()
// L107-L115: pactoys_find_pattern()
// L117-L137: pactoys_find_files()


================================================
FILE: source/makepatch/makepatch.sh
================================================
// [OUTLINE - 7 symbols, 132 lines]
// L3-L22: usage()
// L24-L28: msg2()
// L30-L35: status()
// L37-L41: validate_number()
// L43-L78: init()
// L80-L96: diff()
// L98-L114: refresh()


================================================
FILE: source/pacboy/pacboy.completion
================================================
# Bash completion for Pacboy
# Copyright (C) 2015 Renato Silva
# Licensed under BSD

_pacboy_repositories() {
    local repositories
    local current="${1}"
    local suffix="${2}"
    for database in /var/lib/pacman/sync/*.db; do
        database="${database##*/}"
        repositories="${repositories} ${database%.db}${suffix}"
    done
    COMPREPLY+=($(compgen -W "${repositories}" -- ${current}))
    __ltrim_colon_completions "${current}"
}

_pacboy() {
    local commands='sync update refresh find packages files info origin remove'
    local current command
    local debug='enabled'
    local help='enabled'
    local repository
    _get_comp_words_by_ref -n : -c current
    COMPREPLY=()

    # Commands
    for argument in "${COMP_WORDS[@]}"; do
        if [[ "${argument}" != "${current}" ]]; then
            case "${argument}" in
                help)  unset help;  continue ;;
                debug) unset debug; continue ;;
            esac
        fi
        test -n "${command}" && continue
        for valid_command in ${commands}; do
            if [[ "${argument}" = "${valid_command}" ]]; then
                command="${argument}"
                break
            fi
        done
    done
    COMPREPLY+=($(compgen -W "${help:+help}" -- ${current}))
    COMPREPLY+=($(compgen -W "${debug:+debug}" -- ${current}))
    if [[ -z "${command}" ]]; then
        COMPREPLY+=($(compgen -W "${commands}" -- ${current}))
        COMPREPLY=("${COMPREPLY[@]/%/ }")
        return
    fi

    # Repositories
    if [[ "${command}" = packages ]]; then
        _pacboy_repositories "${current}"
        COMPREPLY=("${COMPREPLY[@]/%/ }")
        return
    fi
    if [[ "${command}" = sync ]]; then
        if [[ "${current}" != *::* ]]
            then _pacboy_repositories "${current}" ::
            else repository="${current%::*}"
                 current="${current##*::}"
        fi
    fi

    # Packages
    if [[ "${command}" =~ ^(sync|files|info|remove)$ ]]; then
        local packages=$(cat /var/cache/pacboy/${repository:-*}.packages 2>/dev/null)
        if [[ -z "${packages}" ]]; then
            local mingw_suffix="${MSYSTEM/MSYS/:m}"
            local msys_suffix="${MSYSTEM/MINGW*/:}"
            for package in $(pacman --sync --list --quiet ${repository}); do
                case "${package}" in
                    mingw-w64-x86_64-*) package="${package/mingw-w64-x86_64-/}${mingw_suffix}" ;;
                    mingw-w64-i686-*)   package="${package/mingw-w64-i686-/}${mingw_suffix}" ;;
                    *)                  package="${package}${msys_suffix}"
                esac
                packages="${packages} ${package}"
            done
        elif [[ "${MSYSTEM}" = MSYS ]]; then
            packages=$(sed -e 's/\([^:]\)$/\1:m/' -e 's/:$//' <<<"${packages}")
        fi
        COMPREPLY+=($(compgen -W "${packages}" -- ${current}))
        __ltrim_colon_completions "${current}"
    fi

    if [[ "${current}" != *: || "${COMPREPLY[@]}" != : ]]; then
        COMPREPLY=("${COMPREPLY[@]/%/ }")
        COMPREPLY=("${COMPREPLY[@]/:: /::}")
    fi
}

complete -F _pacboy -o nospace -o bashdefault -o default pacboy


================================================
FILE: source/pacboy/pacboy.sh
================================================
// [OUTLINE - 11 symbols, 239 lines]
// L3-L41: help_and_exit()
// L43-L53: parse_mingw_argument()
// L55-L64: realname()
// L66-L73: status()
// L75-L82: warning()
// L84-L90: execute()
// L92-L106: packages()
// L108-L120: refresh_cache()
// L122-L129: refresh_database_checksum()
// L131-L140: refresh_package_names()
// L142-L157: refresh_databases()


================================================
FILE: source/repman/native/Makefile
================================================
all:
	$(MAKE) -C inih
	gcc -Iinih -o repman repman.c inih/libinih.a

clean:
	$(MAKE) -C inih clean
	rm -vf repman


================================================
FILE: source/repman/native/inih/LICENSE.txt
================================================

The "inih" library is distributed under the New BSD license:

Copyright (c) 2009, Brush Technology
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:
    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.
    * Neither the name of Brush Technology nor the names of its contributors
      may be used to endorse or promote products derived from this software
      without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY BRUSH TECHNOLOGY ''AS IS'' AND ANY
EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL BRUSH TECHNOLOGY BE LIABLE FOR ANY
DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


================================================
FILE: source/repman/native/inih/Makefile
================================================
# Simple makefile to build inih as a static library

SOURCE = ini.c
OBJECT = $(SOURCE:.c=.o)
OUTPUT = libinih.a
INCLUDES = -I.
CCFLAGS = -g -O2
CC = gcc

default: $(OUTPUT)

.c.o:
	$(CC) $(INCLUDES) $(CCFLAGS) $(EXTRACCFLAGS) -c $< -o $@

$(OUTPUT): $(OBJECT)
	ar rcs $(OUTPUT) $(OBJECT) $(EXTRAARFLAGS)

clean:
	rm -f $(OBJECT) $(OUTPUT)


================================================
FILE: source/repman/native/inih/ini.c
================================================
// [OUTLINE - 9 symbols, 181 lines]
// import <stdio.h>
// import <ctype.h>
// import <string.h>
// import "ini.h"
// import <stdlib.h>
// L24-L30: static char* rstrip(char* s)
// L33-L38: static char* lskip(const char* s)
// L43-L51: static char* find_char_or_comment(const char* s, char c)
// L54-L59: static char* strncpy0(char* dest, const char* src, size_t size)
// L62-L158: int ini_parse_file(FILE* file,
// L108-L113: else if (*prev_name && *start && start > line)
// L115-L126: else if (*start == '[')
// L128-L152: else if (*start && *start != ';')
// L168-L181: int ini_parse(const char* filename,


================================================
FILE: source/repman/native/inih/ini.h
================================================
// [OUTLINE - 0 symbols, 77 lines]
// import <stdio.h>


================================================
FILE: source/repman/native/repman.c
================================================
// [OUTLINE - 9 symbols, 197 lines]
// import <stdio.h>
// import <stdlib.h>
// import <stdbool.h>
// import <string.h>
// import <fcntl.h>
// import <errno.h>
// import <unistd.h>
// import <ini.h>
// L40-L50: static int parse_pacman_config(void* data, const char* section, const char* name, const char* value)
// L52-L64: static int parse_repositories(void* data, const char* section, const char* name, const char* value)
// L66-L73: static void write_repository(simple_repository repository, FILE* ini)
// L75-L83: static bool write_repositories()
// L85-L101: static bool pacman_refresh(simple_repository repository)
// L103-L111: static bool add_repository(const char* name, const char* url, const char* siglevel)
// L113-L122: static bool remove_repository(const char* name)
// L124-L130: static void list_repositories()
// L132-L197: int main(int argc, char** argv)


================================================
FILE: source/repman/ruby/bin/repman
================================================
#!/usr/bin/env ruby

require 'repman'


================================================
FILE: source/repman/ruby/lib/repman.rb
================================================
#!/usr/bin/env ruby
# Encoding: UTF-8

##
##     Pacman Repository Manager 16.2
##     Copyright (c) 2014, 2016 Renato Silva
##     Licensed under BSD
##
## This program manages pacman repositories. It uses a separate included file
## /etc/pacman.d/repman.conf instead of /etc/pacman.conf. Usage:
##
##     repman add NAME URL  Add a repository and refresh database.
##     repman remove NAME   Remove a repository and refresh database.
##     repman list          List all repositories.
##

$0 = __FILE__
require 'fileutils'
require 'tempfile'
require 'inifile'
require 'easyoptions'
if ARGV.empty?
    puts EasyOptions.documentation
    exit
end

class Repository
    def initialize(name, url, siglevel)
        @name = name
        @url = url
        @siglevel = siglevel
    end
    def save(config)
        config[@name] = { 'Server' => @url, 'SigLevel' => @siglevel }
        config.write
    end
    def remove(config)
        config.delete_section(@name)
        config.write
    end
    def self.load(config, name)
        return nil unless config.has_section?(name)
        siglevel = config[name]['SigLevel']
        url = config[name]['Server']
        self.new(name, url, siglevel)
    end
    def self.all(config)
        config.sections.map do |name|
            Repository.load(config, name)
        end
    end
    attr_accessor :name
    attr_accessor :url
    attr_accessor :siglevel
end

pacman_file = '/etc/pacman.conf'
config_file = '/etc/pacman.d/repman.conf'
command, name, url = EasyOptions.arguments
include_regex = /^\s*Include\s+=\s+#{config_file}/
config = (IniFile.load(config_file) or IniFile.new(:filename => config_file).write)
repository = Repository.new(name, url, 'Optional')

begin
    File.open(pacman_file, 'a') do |file|
        file.puts("\n# Automatically included by repman")
        file.puts("Include = #{config_file}")
    end if not File.readlines(pacman_file).grep(include_regex).any?
rescue
    EasyOptions.finish "could not check #{pacman_file}"
end

case command
when 'add'
    EasyOptions.finish 'name and URL required' unless url
    temp_config = IniFile.new(:filename => Tempfile.new('repman').path)
    repository.save(temp_config)
    system("pacman --noprogressbar --sync --refresh --config #{temp_config.filename}") and repository.save(config) or
    EasyOptions.finish "could not add repository #{name}"
when 'remove'
    EasyOptions.finish 'name is required' unless name
    repository = Repository.load(config, name)
    repository and FileUtils.rm_f("/var/lib/pacman/sync/#{name}.db") and repository.remove(config) or
    EasyOptions.finish "could not remove repository #{name}"
when 'list' then
    EasyOptions.finish "extra arguments to #{command} command" if EasyOptions.arguments[1]
    Repository.all(config).each do |repository|
        puts repository.name
        puts "\tServer: #{repository.url}"
        puts "\tSigLevel: #{repository.siglevel}"
    end
else
    EasyOptions.finish "unknown command #{command}"
end


================================================
FILE: source/repman/ruby/repman.gemspec
================================================
Gem::Specification.new do |spec|
    spec.name                      = 'repman'
    spec.version                   = '16.2.0'
    spec.license                   = 'BSD'
    spec.author                    = 'Renato Silva'
    spec.email                     = 'br.renatosilva@gmail.com'
    spec.summary                   = 'Pacman repository manager'
    spec.homepage                  = 'https://github.com/renatosilva/repman'
    spec.files                     = ['lib/repman.rb']
    spec.executables               << 'repman'
    spec.add_runtime_dependency    'easyoptions'
    spec.add_runtime_dependency    'inifile', '>= 3.0.0'
end


================================================
FILE: source/repman/tests.sh
================================================
// [OUTLINE - 0 symbols, 47 lines]


================================================
FILE: source/saneman/modules/default.sane.sh
================================================
// [OUTLINE - 10 symbols, 176 lines]
// L65-L90: _check_license()
// L92-L97: check_missing()
// L99-L103: check_missing_checksums()
// L105-L111: check_deprecated()
// L113-L123: check_unrecognized()
// L125-L131: check_unrecognized_name()
// L133-L151: check_unrecognized_references()
// L153-L158: check_unrecognized_license()
// L160-L165: check_unformatted_license()
// L167-L176: check_mismatching_directory()


================================================
FILE: source/saneman/modules/msys2.sane.sh
================================================
// [OUTLINE - 1 symbols, 31 lines]
// L10-L16: check_unrecognized_depends_mingw()


================================================
FILE: source/saneman/saneman.sh
================================================
// [OUTLINE - 5 symbols, 441 lines]
// L3-L44: usage()
// L46-L80: read_arguments()
// L82-L91: option_format()
// L93-L111: option_width()
// L113-L134: configure_colors()


================================================
FILE: source/updpkgver/updpkgver.sh
================================================
// [OUTLINE - 36 symbols, 547 lines]
// L3-L28: usage()
// L30-L61: read_arguments()
// L63-L69: option_bump()
// L71-L78: option_commit()
// L80-L86: option_makepkg()
// L88-L91: configure_colors()
// L93-L101: recipe_paths()
// L103-L108: message()
// L110-L115: header()
// L117-L129: status()
// L131-L143: report()
// L145-L156: collect()
// L158-L167: restore()
// L169-L173: recipe_filename()
// L175-L180: temporary_recipe()
// L182-L196: bump_version()
// L198-L203: replace_version()
// L205-L227: download_available()
// L229-L235: downloadable_url()
// L237-L246: downloadable_urls()
// L248-L260: unreferenced_version()
// L262-L271: check_version()
// L273-L278: reset_recipes()
// L280-L293: pending_updates()
// L295-L305: detect_version()
// L307-L325: detect_versions()
// L327-L334: report_versions()
// L336-L384: check_update()
// L386-L397: check_updates()
// L399-L413: makepkg_command()
// L415-L420: make_package()
// L422-L425: build_filter()
// L427-L444: build_status()
// L446-L462: build_update()
// L464-L481: build_updates()
// L483-L508: commit_updates()



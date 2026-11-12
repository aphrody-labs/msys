# Codebase Digest: msys2-docker

- Files analyzed: 17
- Total lines: 944
- Total size: 46.1 KB
- Git branch: `main`
- Git HEAD commit: `4e146f08 (Update to msys2-hacks-25)`
- Digest mode: `AST-Smart Outline`

## Directory Structure

```text
msys2-docker/
├── LICENSE (11 lines, 1.4 KB, ~330 tokens)
├── README.md (46 lines, 1.4 KB, ~407 tokens)
├── build-base/
│   ├── Dockerfile (1 lines, 35 B, ~11 tokens)
│   ├── patches/
│   │   ├── 0001-ntdll-tests-Test-opening-read-only-files-only-for-re.patch (38 lines, 1.7 KB, ~480 tokens)
│   │   ├── 0002-ntdll-tests-Test-that-read-only-files-deny-write-dat.patch (34 lines, 1.7 KB, ~460 tokens)
│   │   ├── 0003-server-Don-t-require-Unix-read-or-write-permission-f.patch (87 lines, 4.0 KB, ~1.1k tokens)
│   │   ├── 0004-ntdll-Add-read-and-write-to-new-guard-pages.patch (33 lines, 1.4 KB, ~397 tokens)
│   │   ├── 0005-ntdll-test-Add-tests-for-FILE_RENAME_POSIX_SEMANTICS.patch (221 lines, 11.5 KB, ~3.0k tokens)
│   │   ├── 0006-ntdll-test-Add-tests-for-FILE_LINK_POSIX_SEMANTICS.patch (230 lines, 11.8 KB, ~3.1k tokens)
│   │   └── 0007-ntdll-Add-support-for-FILE_-RENAME-LINK-_POSIX_SEMAN.patch (206 lines, 9.9 KB, ~2.5k tokens)
│   └── update-wine-patches.sh (1 lines, 35 B, ~11 tokens)
├── cygwin/
│   ├── Dockerfile (1 lines, 35 B, ~11 tokens)
│   └── cygwin (3 lines, 161 B, ~52 tokens)
├── devcontainer/
│   └── Dockerfile (1 lines, 35 B, ~11 tokens)
├── docker-compose.yml (27 lines, 750 B, ~200 tokens)
└── msys2/
    ├── Dockerfile (1 lines, 35 B, ~11 tokens)
    └── msys2 (3 lines, 184 B, ~61 tokens)
```

## Source Files

================================================
FILE: README.md
================================================
# MSYS2 Docker Images (Experimental)

This repository provides Docker images including MSYS2.

## Linux & Wine

**WARNING:** Package and database signature checks are currently disabled to
speed up the build process. This Docker image is not recommended for production
use.

Simply run the image to get a shell:

```console
$ docker run -it ghcr.io/msys2/msys2-docker-experimental
D406664E7A3F+root@d406664e7a3f UCRT64 ~
# uname -a
MINGW64_NT-10.0-19043 d406664e7a3f 3.4.10.x86_64 2024-04-08 18:11 UTC x86_64 Msys
```

It defaults to the `UCRT64` environment. Pass `-eMSYSTEM=CLANG64` etc to change the default environment.

Or alternatively use the included `msys2` command which runs bash:

```console
$ docker run -it ghcr.io/msys2/msys2-docker-experimental msys2 -c "uname -a"
MINGW64_NT-10.0-19043 51eee8aa4763 3.4.10.x86_64 2024-04-08 18:11 UTC x86_64 Msys
```

Acknowledgments:

* The Dockerfile is inspired by the following
  [Dockerfile](https://github.com/pojntfx/hydrapp/blob/main/hydrapp/pkg/builders/msi/Dockerfile)
  by [@pojntfx (Felicitas Pojtinger)](https://github.com/pojntfx)
* The necessary Wine patches for MSYS2/Cygwin are developed in the
  [Wine fork](https://gitlab.winehq.org/jhol/wine) by [@jhol (Joel
  Holdsworth)](https://github.com/jhol).

## Windows

Would they be useful? Let us know.

## License

Everything in this repository is licensed under the
[BSD-3-Clause](https://spdx.org/licenses/BSD-3-Clause.html) License unless
otherwise noted.


================================================
FILE: LICENSE
================================================
Copyright (c) 2024 Christoph Reiter.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


================================================
FILE: build-base/Dockerfile
================================================
// [OUTLINE - 0 symbols, 24 lines]


================================================
FILE: build-base/patches/0001-ntdll-tests-Test-opening-read-only-files-only-for-re.patch
================================================
From 64376e73535091acce293c67b946ad9ad02a9849 Mon Sep 17 00:00:00 2001
From: Joel Holdsworth <joel@airwebreathe.org.uk>
Date: Tue, 13 May 2025 11:46:19 -0700
Subject: [PATCH 1/7] ntdll/tests: Test opening read-only files only for
 read/write attributes.
MIME-Version: 1.0
Content-Type: text/plain; charset=UTF-8
Content-Transfer-Encoding: 8bit

Co-authored-by: Bernhard Übelacker <bernhardu@mailbox.org>
---
 dlls/ntdll/tests/file.c | 10 ++++++++++
 1 file changed, 10 insertions(+)

diff --git a/dlls/ntdll/tests/file.c b/dlls/ntdll/tests/file.c
index f741ffbfd3..fe7b6e1910 100644
--- a/dlls/ntdll/tests/file.c
+++ b/dlls/ntdll/tests/file.c
@@ -6001,6 +6001,16 @@ static void test_file_readonly_access(void)
     status = pNtOpenFile(&handle, GENERIC_WRITE, &attr, &io, default_sharing, FILE_NON_DIRECTORY_FILE);
     ok(status == STATUS_ACCESS_DENIED, "expected STATUS_ACCESS_DENIED, got %#lx.\n", status);
 
+    /* NtOpenFile FILE_{READ,WRITE}_ATTRIBUTES */
+    status = pNtOpenFile(&handle, FILE_READ_ATTRIBUTES | FILE_WRITE_ATTRIBUTES, &attr, &io, default_sharing, FILE_NON_DIRECTORY_FILE);
+    todo_wine ok(status == STATUS_SUCCESS, "expected STATUS_SUCCESS, got %#lx.\n", status);
+    CloseHandle(handle);
+
+    /* NtOpenFile FILE_{READ,WRITE}_EA */
+    status = pNtOpenFile(&handle, FILE_READ_EA | FILE_WRITE_EA, &attr, &io, default_sharing, FILE_NON_DIRECTORY_FILE);
+    todo_wine ok(status == STATUS_SUCCESS, "expected STATUS_SUCCESS, got %#lx.\n", status);
+    CloseHandle(handle);
+
     /* NtOpenFile DELETE without FILE_DELETE_ON_CLOSE */
     status = pNtOpenFile(&handle, DELETE, &attr, &io, default_sharing, FILE_NON_DIRECTORY_FILE);
     ok(status == STATUS_SUCCESS, "expected STATUS_SUCCESS, got %#lx.\n", status);
-- 
2.55.0.windows.4



================================================
FILE: build-base/patches/0002-ntdll-tests-Test-that-read-only-files-deny-write-dat.patch
================================================
From 6b96ee62400a27a3ad743a3d37058345259621ef Mon Sep 17 00:00:00 2001
From: =?UTF-8?q?Bernhard=20=C3=9Cbelacker?= <bernhardu@mailbox.org>
Date: Tue, 13 May 2025 11:46:19 -0700
Subject: [PATCH 2/7] ntdll/tests: Test that read-only files deny write-data
 access combined with FILE_READ_ATTRIBUTES.

---
 dlls/ntdll/tests/file.c | 10 ++++++++++
 1 file changed, 10 insertions(+)

diff --git a/dlls/ntdll/tests/file.c b/dlls/ntdll/tests/file.c
index fe7b6e1910..ce899b4edc 100644
--- a/dlls/ntdll/tests/file.c
+++ b/dlls/ntdll/tests/file.c
@@ -6001,6 +6001,16 @@ static void test_file_readonly_access(void)
     status = pNtOpenFile(&handle, GENERIC_WRITE, &attr, &io, default_sharing, FILE_NON_DIRECTORY_FILE);
     ok(status == STATUS_ACCESS_DENIED, "expected STATUS_ACCESS_DENIED, got %#lx.\n", status);
 
+    /* NtOpenFile FILE_READ_ATTRIBUTES with FILE_WRITE_DATA */
+    status = pNtOpenFile(&handle, FILE_READ_ATTRIBUTES | FILE_WRITE_DATA, &attr, &io, default_sharing, FILE_NON_DIRECTORY_FILE);
+    ok(status == STATUS_ACCESS_DENIED, "expected STATUS_ACCESS_DENIED, got %#lx.\n", status);
+    CloseHandle(handle);
+
+    /* NtOpenFile FILE_READ_ATTRIBUTES with FILE_APPEND_DATA */
+    status = pNtOpenFile(&handle, FILE_READ_ATTRIBUTES | FILE_APPEND_DATA, &attr, &io, default_sharing, FILE_NON_DIRECTORY_FILE);
+    ok(status == STATUS_ACCESS_DENIED, "expected STATUS_ACCESS_DENIED, got %#lx.\n", status);
+    CloseHandle(handle);
+
     /* NtOpenFile FILE_{READ,WRITE}_ATTRIBUTES */
     status = pNtOpenFile(&handle, FILE_READ_ATTRIBUTES | FILE_WRITE_ATTRIBUTES, &attr, &io, default_sharing, FILE_NON_DIRECTORY_FILE);
     todo_wine ok(status == STATUS_SUCCESS, "expected STATUS_SUCCESS, got %#lx.\n", status);
-- 
2.55.0.windows.4



================================================
FILE: build-base/patches/0003-server-Don-t-require-Unix-read-or-write-permission-f.patch
================================================
From 3ae41e5683dd21b5afb1321bde824a97538e5049 Mon Sep 17 00:00:00 2001
From: Joel Holdsworth <joel@airwebreathe.org.uk>
Date: Sun, 5 Apr 2026 17:06:41 -0700
Subject: [PATCH 3/7] server: Don't require Unix read or write permission for
 reading or writing only attributes.

Wine-Bug: https://bugs.winehq.org/show_bug.cgi?id=56925
---
 dlls/ntdll/tests/file.c |  4 ++--
 server/fd.c             | 17 ++++++++++-------
 server/file.h           |  4 ++--
 3 files changed, 14 insertions(+), 11 deletions(-)

diff --git a/dlls/ntdll/tests/file.c b/dlls/ntdll/tests/file.c
index ce899b4edc..e2ae123237 100644
--- a/dlls/ntdll/tests/file.c
+++ b/dlls/ntdll/tests/file.c
@@ -6013,12 +6013,12 @@ static void test_file_readonly_access(void)
 
     /* NtOpenFile FILE_{READ,WRITE}_ATTRIBUTES */
     status = pNtOpenFile(&handle, FILE_READ_ATTRIBUTES | FILE_WRITE_ATTRIBUTES, &attr, &io, default_sharing, FILE_NON_DIRECTORY_FILE);
-    todo_wine ok(status == STATUS_SUCCESS, "expected STATUS_SUCCESS, got %#lx.\n", status);
+    ok(status == STATUS_SUCCESS, "expected STATUS_SUCCESS, got %#lx.\n", status);
     CloseHandle(handle);
 
     /* NtOpenFile FILE_{READ,WRITE}_EA */
     status = pNtOpenFile(&handle, FILE_READ_EA | FILE_WRITE_EA, &attr, &io, default_sharing, FILE_NON_DIRECTORY_FILE);
-    todo_wine ok(status == STATUS_SUCCESS, "expected STATUS_SUCCESS, got %#lx.\n", status);
+    ok(status == STATUS_SUCCESS, "expected STATUS_SUCCESS, got %#lx.\n", status);
     CloseHandle(handle);
 
     /* NtOpenFile DELETE without FILE_DELETE_ON_CLOSE */
diff --git a/server/fd.c b/server/fd.c
index 68745a47ee..1ae7ebe6ce 100644
--- a/server/fd.c
+++ b/server/fd.c
@@ -1921,7 +1921,7 @@ struct fd *open_fd( struct fd *root, const char *name, struct unicode_str nt_nam
         flags &= ~(O_CREAT | O_EXCL | O_TRUNC);
     }
 
-    if ((access & FILE_UNIX_WRITE_ACCESS) && !(options & FILE_DIRECTORY_FILE))
+    if (((access & FILE_UNIX_WRITE_ACCESS) && !(options & FILE_DIRECTORY_FILE)) || (flags & O_TRUNC))
     {
         if (access & FILE_UNIX_READ_ACCESS) rw_mode = O_RDWR;
         else rw_mode = O_WRONLY;
@@ -1930,12 +1930,15 @@ struct fd *open_fd( struct fd *root, const char *name, struct unicode_str nt_nam
 
     if ((fd->unix_fd = open( name, rw_mode | (flags & ~O_TRUNC), *mode )) == -1)
     {
-        /* if we tried to open a directory for write access, retry read-only */
-        if (errno == EISDIR)
-        {
-            if ((access & FILE_UNIX_WRITE_ACCESS) || (flags & O_CREAT))
-                fd->unix_fd = open( name, O_RDONLY | (flags & ~(O_TRUNC | O_CREAT | O_EXCL)), *mode );
-        }
+        /* retry read-only if we tried to open a directory for write/create/truncate */
+        const int retry_directory = (errno == EISDIR &&
+            ((access & FILE_UNIX_WRITE_ACCESS) || (flags & (O_CREAT | O_TRUNC))));
+        /* also retry if write mode was only needed for truncation, not actual write access */
+        const int retry_truncate = ((errno == EISDIR || errno == EACCES) && (flags & O_TRUNC) &&
+            !(access & (FILE_UNIX_WRITE_ACCESS | FILE_WRITE_ATTRIBUTES | FILE_WRITE_EA)));
+
+        if (retry_directory || retry_truncate)
+            fd->unix_fd = open( name, O_RDONLY | (flags & ~(O_TRUNC | O_CREAT | O_EXCL)), *mode );
 
         if (fd->unix_fd == -1)
         {
diff --git a/server/file.h b/server/file.h
index a1c8a3f636..89c99c055e 100644
--- a/server/file.h
+++ b/server/file.h
@@ -284,10 +284,10 @@ static inline int async_queued( struct async_queue *queue )
 
 
 /* access rights that require Unix read permission */
-#define FILE_UNIX_READ_ACCESS (FILE_READ_DATA|FILE_READ_ATTRIBUTES|FILE_READ_EA)
+#define FILE_UNIX_READ_ACCESS (FILE_READ_DATA)
 
 /* access rights that require Unix write permission */
-#define FILE_UNIX_WRITE_ACCESS (FILE_WRITE_DATA|FILE_APPEND_DATA|FILE_WRITE_ATTRIBUTES|FILE_WRITE_EA)
+#define FILE_UNIX_WRITE_ACCESS (FILE_WRITE_DATA|FILE_APPEND_DATA)
 
 /* magic file access rights for mappings */
 #define FILE_MAPPING_IMAGE  0x80000000  /* set for SEC_IMAGE mappings */
-- 
2.55.0.windows.4



================================================
FILE: build-base/patches/0004-ntdll-Add-read-and-write-to-new-guard-pages.patch
================================================
From 37778f24cafaa123c5d1fb91b3ee435b66d4c44b Mon Sep 17 00:00:00 2001
From: =?UTF-8?q?Bernhard=20=C3=9Cbelacker?= <bernhardu@mailbox.org>
Date: Sat, 23 Dec 2023 16:04:40 +0100
Subject: [PATCH 4/7] ntdll: Add read and write to new guard pages.

cygwin64: LANG=C wine c:/cygwin64/bin/mintty.exe
msys2-64: LANG=C wine c:/msys64/usr/bin/mintty.exe

Based on patch by Zeb Figura:
  https://bugs.winehq.org/attachment.cgi?id=70483
  https://bugs.winehq.org/show_bug.cgi?id=47808

Wine-Bug: https://bugs.winehq.org/show_bug.cgi?id=55138
---
 dlls/ntdll/unix/virtual.c | 2 +-
 1 file changed, 1 insertion(+), 1 deletion(-)

diff --git a/dlls/ntdll/unix/virtual.c b/dlls/ntdll/unix/virtual.c
index db820a8952..026f13920c 100644
--- a/dlls/ntdll/unix/virtual.c
+++ b/dlls/ntdll/unix/virtual.c
@@ -4581,7 +4581,7 @@ static NTSTATUS grow_thread_stack( struct thread_data *data, char *page, struct
     mprotect_range( page, host_page_size, 0, 0 );
     if (page >= stack_info->start + host_page_size + stack_info->guaranteed)
     {
-        set_page_vprot_bits( page - host_page_size, host_page_size, VPROT_COMMITTED | VPROT_GUARD, 0 );
+        set_page_vprot_bits( page - host_page_size, host_page_size, VPROT_COMMITTED | VPROT_READ | VPROT_WRITE | VPROT_GUARD, 0 );
         mprotect_range( page - host_page_size, host_page_size, 0, 0 );
     }
     else  /* inside guaranteed space -> overflow exception */
-- 
2.55.0.windows.4



================================================
FILE: build-base/patches/0005-ntdll-test-Add-tests-for-FILE_RENAME_POSIX_SEMANTICS.patch
================================================
From b1c270340d0141fbcdcb87ed51bd437e91d3037d Mon Sep 17 00:00:00 2001
From: Joel Holdsworth <joel@airwebreathe.org.uk>
Date: Wed, 6 May 2026 16:16:26 -0700
Subject: [PATCH 5/7] ntdll/test: Add tests for FILE_RENAME_POSIX_SEMANTICS.

Signed-off-by: Joel Holdsworth <joel@airwebreathe.org.uk>
---
 dlls/ntdll/tests/file.c | 190 +++++++++++++++++++++++++++++++++++++++-
 1 file changed, 189 insertions(+), 1 deletion(-)

diff --git a/dlls/ntdll/tests/file.c b/dlls/ntdll/tests/file.c
index e2ae123237..fba9825b25 100644
--- a/dlls/ntdll/tests/file.c
+++ b/dlls/ntdll/tests/file.c
@@ -2305,7 +2305,7 @@ static void test_file_rename_information_ex(void)
     static const WCHAR fooW[] = {'f','o','o',0};
     WCHAR tmp_path[MAX_PATH], oldpath[MAX_PATH + 16], newpath[MAX_PATH + 16];
     FILE_RENAME_INFORMATION *fri;
-    BOOL fileDeleted;
+    BOOL success, fileDeleted;
     UNICODE_STRING name_str;
     HANDLE handle, handle2;
     IO_STATUS_BLOCK io;
@@ -2396,6 +2396,194 @@ static void test_file_rename_information_ex(void)
     HeapFree( GetProcessHeap(), 0, fri );
     delete_object( oldpath );
     delete_object( newpath );
+
+    /* oldpath is a file, newpath is a file, with FILE_RENAME_REPLACE_IF_EXISTS, with
+     * FILE_RENAME_POSIX_SEMANTICS, target file opened without sharing mode */
+    res = GetTempFileNameW( tmp_path, fooW, 0, oldpath );
+    ok( res != 0, "failed to create temp file\n" );
+    handle = CreateFileW( oldpath, GENERIC_WRITE | DELETE, 0, NULL, CREATE_ALWAYS, 0, 0 );
+    ok( handle != INVALID_HANDLE_VALUE, "CreateFileW failed\n" );
+
+    res = GetTempFileNameW( tmp_path, fooW, 0, newpath );
+    ok( res != 0, "failed to create temp file\n" );
+    handle2 = CreateFileW( newpath, GENERIC_WRITE | DELETE, 0, NULL, CREATE_ALWAYS, 0, 0 );
+    ok( handle2 != INVALID_HANDLE_VALUE, "CreateFileW failed\n" );
+
+    pRtlDosPathNameToNtPathName_U( newpath, &name_str, NULL, NULL );
+    fri = HeapAlloc( GetProcessHeap(), 0, sizeof(FILE_RENAME_INFORMATION) + name_str.Length );
+    fri->Flags = FILE_RENAME_REPLACE_IF_EXISTS | FILE_RENAME_POSIX_SEMANTICS;
+    fri->RootDirectory = NULL;
+    fri->FileNameLength = name_str.Length;
+    memcpy( fri->FileName, name_str.Buffer, name_str.Length );
+    pRtlFreeUnicodeString( &name_str );
+
+    io.Status = 0xdeadbeef;
+    res = pNtSetInformationFile( handle, &io, fri, sizeof(FILE_RENAME_INFORMATION) + fri->FileNameLength, FileRenameInformationEx );
+    todo_wine ok( io.Status == 0xdeadbeef, "io.Status expected 0xdeadbeef, got %lx\n", io.Status );
+    ok( res == STATUS_SHARING_VIOLATION, "res expected STATUS_SHARING_VIOLATION, got %lx\n", res );
+    fileDeleted = GetFileAttributesW( oldpath ) == INVALID_FILE_ATTRIBUTES && GetLastError() == ERROR_FILE_NOT_FOUND;
+    ok( !fileDeleted, "file should exist\n" );
+    fileDeleted = GetFileAttributesW( newpath ) == INVALID_FILE_ATTRIBUTES && GetLastError() == ERROR_FILE_NOT_FOUND;
+    ok( !fileDeleted, "file should exist\n" );
+
+    CloseHandle( handle );
+    CloseHandle( handle2 );
+    HeapFree( GetProcessHeap(), 0, fri );
+    delete_object( oldpath );
+    delete_object( newpath );
+
+    /* oldpath is a file, newpath is a file, with FILE_RENAME_REPLACE_IF_EXISTS, with
+     * FILE_RENAME_POSIX_SEMANTICS, target file opened with sharing mode */
+    res = GetTempFileNameW( tmp_path, fooW, 0, oldpath );
+    ok( res != 0, "failed to create temp file\n" );
+    handle = CreateFileW( oldpath, GENERIC_WRITE | DELETE, 0, NULL, CREATE_ALWAYS, 0, 0 );
+    ok( handle != INVALID_HANDLE_VALUE, "CreateFileW failed\n" );
+
+    res = GetTempFileNameW( tmp_path, fooW, 0, newpath );
+    ok( res != 0, "failed to create temp file\n" );
+    handle2 = CreateFileW( newpath, GENERIC_WRITE | DELETE, FILE_SHARE_DELETE,
+        NULL, CREATE_ALWAYS, 0, 0 );
+    ok( handle2 != INVALID_HANDLE_VALUE, "CreateFileW failed\n" );
+
+    pRtlDosPathNameToNtPathName_U( newpath, &name_str, NULL, NULL );
+    fri = HeapAlloc( GetProcessHeap(), 0, sizeof(FILE_RENAME_INFORMATION) + name_str.Length );
+    fri->Flags = FILE_RENAME_REPLACE_IF_EXISTS | FILE_RENAME_POSIX_SEMANTICS;
+    fri->RootDirectory = NULL;
+    fri->FileNameLength = name_str.Length;
+    memcpy( fri->FileName, name_str.Buffer, name_str.Length );
+    pRtlFreeUnicodeString( &name_str );
+
+    io.Status = 0xdeadbeef;
+    res = pNtSetInformationFile( handle, &io, fri, sizeof(FILE_RENAME_INFORMATION) + fri->FileNameLength, FileRenameInformationEx );
+    todo_wine ok( io.Status == STATUS_SUCCESS, "io.Status expected STATUS_SUCCESS, got %lx\n", io.Status );
+    todo_wine ok( res == STATUS_SUCCESS, "res expected STATUS_SUCCESS, got %lx\n", res );
+    fileDeleted = GetFileAttributesW( oldpath ) == INVALID_FILE_ATTRIBUTES && GetLastError() == ERROR_FILE_NOT_FOUND;
+    todo_wine ok( fileDeleted, "file should not exist\n" );
+    fileDeleted = GetFileAttributesW( newpath ) == INVALID_FILE_ATTRIBUTES && GetLastError() == ERROR_FILE_NOT_FOUND;
+    ok( !fileDeleted, "file should exist\n" );
+
+    CloseHandle( handle );
+    CloseHandle( handle2 );
+    HeapFree( GetProcessHeap(), 0, fri );
+    delete_object( oldpath );
+    delete_object( newpath );
+
+    /* oldpath is a directory, newpath is a file, with FILE_RENAME_REPLACE_IF_EXISTS, with
+     * FILE_RENAME_POSIX_SEMANTICS, target file opened */
+    res = GetTempFileNameW( tmp_path, fooW, 0, oldpath );
+    ok( res != 0, "failed to create temp file\n" );
+    DeleteFileW( oldpath );
+    success = CreateDirectoryW( oldpath, NULL );
+    ok( success != 0, "failed to create temp directory\n" );
+    handle = CreateFileW( oldpath, GENERIC_WRITE | DELETE, 0, NULL, OPEN_EXISTING, FILE_FLAG_BACKUP_SEMANTICS, 0 );
+    ok( handle != INVALID_HANDLE_VALUE, "CreateFileW failed\n" );
+
+    res = GetTempFileNameW( tmp_path, fooW, 0, newpath );
+    ok( res != 0, "failed to create temp file\n" );
+    handle2 = CreateFileW( newpath, GENERIC_WRITE | DELETE, FILE_SHARE_DELETE,
+        NULL, CREATE_ALWAYS, 0, 0 );
+    ok( handle2 != INVALID_HANDLE_VALUE, "CreateFileW failed\n" );
+
+    pRtlDosPathNameToNtPathName_U( newpath, &name_str, NULL, NULL );
+    fri = HeapAlloc( GetProcessHeap(), 0, sizeof(FILE_RENAME_INFORMATION) + name_str.Length );
+    fri->Flags = FILE_RENAME_REPLACE_IF_EXISTS | FILE_RENAME_POSIX_SEMANTICS;
+    fri->RootDirectory = NULL;
+    fri->FileNameLength = name_str.Length;
+    memcpy( fri->FileName, name_str.Buffer, name_str.Length );
+    pRtlFreeUnicodeString( &name_str );
+
+    io.Status = 0xdeadbeef;
+    res = pNtSetInformationFile( handle, &io, fri, sizeof(FILE_RENAME_INFORMATION) + fri->FileNameLength, FileRenameInformationEx );
+    todo_wine ok( io.Status == 0xdeadbeef, "io.Status expected 0xdeadbeef, got %lx\n", io.Status );
+    ok( res == STATUS_NOT_A_DIRECTORY, "res expected STATUS_NOT_A_DIRECTORY, got %lx\n", res );
+    fileDeleted = GetFileAttributesW( oldpath ) == INVALID_FILE_ATTRIBUTES && GetLastError() == ERROR_FILE_NOT_FOUND;
+    ok( !fileDeleted, "file should exist\n" );
+    fileDeleted = GetFileAttributesW( newpath ) == INVALID_FILE_ATTRIBUTES && GetLastError() == ERROR_FILE_NOT_FOUND;
+    ok( !fileDeleted, "file should exist\n" );
+
+    CloseHandle( handle );
+    CloseHandle( handle2 );
+    HeapFree( GetProcessHeap(), 0, fri );
+    delete_object( oldpath );
+    delete_object( newpath );
+
+    /* oldpath is a directory, newpath is a directory, with FILE_RENAME_REPLACE_IF_EXISTS, with
+     * FILE_RENAME_POSIX_SEMANTICS, target file opened */
+    res = GetTempFileNameW( tmp_path, fooW, 0, oldpath );
+    ok( res != 0, "failed to create temp file\n" );
+    DeleteFileW( oldpath );
+    success = CreateDirectoryW( oldpath, NULL );
+    ok( success != 0, "failed to create temp directory\n" );
+    handle = CreateFileW( oldpath, GENERIC_WRITE | DELETE, 0,
+        NULL, OPEN_EXISTING, FILE_FLAG_BACKUP_SEMANTICS, 0 );
+    ok( handle != INVALID_HANDLE_VALUE, "CreateFileW failed\n" );
+
+    res = GetTempFileNameW( tmp_path, fooW, 0, newpath );
+    ok( res != 0, "failed to create temp file\n" );
+    DeleteFileW( newpath );
+    success = CreateDirectoryW( newpath, NULL );
+    ok( success != 0, "failed to create temp directory\n" );
+    handle2 = CreateFileW( newpath, GENERIC_WRITE | DELETE, FILE_SHARE_DELETE,
+        NULL, OPEN_EXISTING, FILE_FLAG_BACKUP_SEMANTICS, 0 );
+    ok( handle2 != INVALID_HANDLE_VALUE, "CreateFileW failed\n" );
+
+    pRtlDosPathNameToNtPathName_U( newpath, &name_str, NULL, NULL );
+    fri = HeapAlloc( GetProcessHeap(), 0, sizeof(FILE_RENAME_INFORMATION) + name_str.Length );
+    fri->Flags = FILE_RENAME_REPLACE_IF_EXISTS | FILE_RENAME_POSIX_SEMANTICS;
+    fri->RootDirectory = NULL;
+    fri->FileNameLength = name_str.Length;
+    memcpy( fri->FileName, name_str.Buffer, name_str.Length );
+    pRtlFreeUnicodeString( &name_str );
+
+    io.Status = 0xdeadbeef;
+    res = pNtSetInformationFile( handle, &io, fri, sizeof(FILE_RENAME_INFORMATION) + fri->FileNameLength, FileRenameInformationEx );
+    ok( io.Status == STATUS_SUCCESS || io.Status == 0xdeadbeef,
+        "io.Status expected STATUS_SUCCESS or 0xdeadbeef, got %lx\n", io.Status );
+    ok( res == STATUS_SUCCESS, "res expected STATUS_SUCCESS, got %lx\n", res );
+    fileDeleted = GetFileAttributesW( oldpath ) == INVALID_FILE_ATTRIBUTES && GetLastError() == ERROR_FILE_NOT_FOUND;
+    ok( fileDeleted, "file should not exist\n" );
+    fileDeleted = GetFileAttributesW( newpath ) == INVALID_FILE_ATTRIBUTES && GetLastError() == ERROR_FILE_NOT_FOUND;
+    ok( !fileDeleted, "file should exist\n" );
+
+    CloseHandle( handle );
+    CloseHandle( handle2 );
+    HeapFree( GetProcessHeap(), 0, fri );
+    delete_object( oldpath );
+    delete_object( newpath );
+
+    /* oldpath is a file, newpath is a directory, with FILE_RENAME_REPLACE_IF_EXISTS, with
+     * FILE_RENAME_POSIX_SEMANTICS */
+    res = GetTempFileNameW( tmp_path, fooW, 0, oldpath );
+    ok( res != 0, "failed to create temp file\n" );
+    handle = CreateFileW( oldpath, GENERIC_WRITE | DELETE, 0, NULL, CREATE_ALWAYS, 0, 0 );
+    ok( handle != INVALID_HANDLE_VALUE, "CreateFileW failed\n" );
+
+    res = GetTempFileNameW( tmp_path, fooW, 0, newpath );
+    ok( res != 0, "failed to create temp file\n" );
+    DeleteFileW( newpath );
+    success = CreateDirectoryW( newpath, NULL );
+    ok( success != 0, "failed to create temp directory\n" );
+    pRtlDosPathNameToNtPathName_U( newpath, &name_str, NULL, NULL );
+    fri = HeapAlloc( GetProcessHeap(), 0, sizeof(FILE_RENAME_INFORMATION) + name_str.Length );
+    fri->Flags = FILE_RENAME_REPLACE_IF_EXISTS | FILE_RENAME_POSIX_SEMANTICS;
+    fri->RootDirectory = NULL;
+    fri->FileNameLength = name_str.Length;
+    memcpy( fri->FileName, name_str.Buffer, name_str.Length );
+    pRtlFreeUnicodeString( &name_str );
+
+    io.Status = 0xdeadbeef;
+    res = pNtSetInformationFile( handle, &io, fri, sizeof(FILE_RENAME_INFORMATION) + fri->FileNameLength, FileRenameInformationEx );
+    todo_wine ok( io.Status == 0xdeadbeef, "io.Status expected 0xdeadbeef, got %lx\n", io.Status );
+    ok( res == STATUS_FILE_IS_A_DIRECTORY, "res expected STATUS_FILE_IS_A_DIRECTORY, got %lx\n", res );
+    fileDeleted = GetFileAttributesW( oldpath ) == INVALID_FILE_ATTRIBUTES && GetLastError() == ERROR_FILE_NOT_FOUND;
+    ok( !fileDeleted, "file should exist\n" );
+    fileDeleted = GetFileAttributesW( newpath ) == INVALID_FILE_ATTRIBUTES && GetLastError() == ERROR_FILE_NOT_FOUND;
+    ok( !fileDeleted, "file should exist\n" );
+
+    CloseHandle( handle );
+    HeapFree( GetProcessHeap(), 0, fri );
+    delete_object( oldpath );
+    delete_object( newpath );
 }
 
 static void test_file_link_information(FILE_INFORMATION_CLASS class)
-- 
2.55.0.windows.4



================================================
FILE: build-base/patches/0006-ntdll-test-Add-tests-for-FILE_LINK_POSIX_SEMANTICS.patch
================================================
From f93aeaa8f68c74085a68d4cfdc2f2746684ad28d Mon Sep 17 00:00:00 2001
From: Joel Holdsworth <joel@airwebreathe.org.uk>
Date: Wed, 20 Sep 2023 11:29:26 +0100
Subject: [PATCH 6/7] ntdll/test: Add tests for FILE_LINK_POSIX_SEMANTICS.

Signed-off-by: Joel Holdsworth <joel@airwebreathe.org.uk>
---
 dlls/ntdll/tests/file.c | 199 +++++++++++++++++++++++++++++++++++++++-
 1 file changed, 198 insertions(+), 1 deletion(-)

diff --git a/dlls/ntdll/tests/file.c b/dlls/ntdll/tests/file.c
index fba9825b25..78b65fb16e 100644
--- a/dlls/ntdll/tests/file.c
+++ b/dlls/ntdll/tests/file.c
@@ -3350,7 +3350,7 @@ static void test_file_link_information_ex(void)
     static const WCHAR fooW[] = {'f','o','o',0};
     WCHAR tmp_path[MAX_PATH], oldpath[MAX_PATH + 16], newpath[MAX_PATH + 16];
     FILE_LINK_INFORMATION *fli;
-    BOOL fileDeleted;
+    BOOL success, fileDeleted;
     UNICODE_STRING name_str;
     HANDLE handle, handle2;
     IO_STATUS_BLOCK io;
@@ -3435,6 +3435,203 @@ static void test_file_link_information_ex(void)
     HeapFree( GetProcessHeap(), 0, fli );
     delete_object( oldpath );
     delete_object( newpath );
+
+    /* oldpath is a file, newpath is a file, with FILE_LINK_REPLACE_IF_EXISTS, with
+     * FILE_LINK_POSIX_SEMANTICS, target file opened without sharing mode */
+    res = GetTempFileNameW( tmp_path, fooW, 0, oldpath );
+    ok( res != 0, "failed to create temp file\n" );
+    handle = CreateFileW( oldpath, GENERIC_WRITE | DELETE, 0,
+        NULL, CREATE_ALWAYS, 0, 0 );
+    ok( handle != INVALID_HANDLE_VALUE, "CreateFileW failed\n" );
+
+    res = GetTempFileNameW( tmp_path, fooW, 0, newpath );
+    ok( res != 0, "failed to create temp file\n" );
+    handle2 = CreateFileW( newpath, GENERIC_WRITE | DELETE, 0,
+        NULL, CREATE_ALWAYS, 0, 0 );
+    ok( handle2 != INVALID_HANDLE_VALUE, "CreateFileW failed\n" );
+
+    pRtlDosPathNameToNtPathName_U( newpath, &name_str, NULL, NULL );
+    fli = HeapAlloc( GetProcessHeap(), 0, sizeof(FILE_LINK_INFORMATION) + name_str.Length );
+    fli->Flags = FILE_LINK_REPLACE_IF_EXISTS | FILE_LINK_POSIX_SEMANTICS;
+    fli->RootDirectory = NULL;
+    fli->FileNameLength = name_str.Length;
+    memcpy( fli->FileName, name_str.Buffer, name_str.Length );
+    pRtlFreeUnicodeString( &name_str );
+
+    io.Status = 0xdeadbeef;
+    res = pNtSetInformationFile( handle, &io, fli, sizeof(FILE_LINK_INFORMATION) + fli->FileNameLength, FileLinkInformationEx );
+    todo_wine ok( io.Status == 0xdeadbeef, "io.Status expected 0xdeadbeef, got %lx\n", io.Status );
+    todo_wine ok( res == STATUS_SHARING_VIOLATION || res == STATUS_NOT_SUPPORTED,
+                  "res expected STATUS_SHARING_VIOLATION or STATUS_NOT_SUPPORTED, got %lx\n", res );
+    fileDeleted = GetFileAttributesW( oldpath ) == INVALID_FILE_ATTRIBUTES && GetLastError() == ERROR_FILE_NOT_FOUND;
+    ok( !fileDeleted, "file should exist\n" );
+    fileDeleted = GetFileAttributesW( newpath ) == INVALID_FILE_ATTRIBUTES && GetLastError() == ERROR_FILE_NOT_FOUND;
+    ok( !fileDeleted, "file should exist\n" );
+
+    CloseHandle( handle );
+    CloseHandle( handle2 );
+    HeapFree( GetProcessHeap(), 0, fli );
+    delete_object( oldpath );
+    delete_object( newpath );
+
+    /* oldpath is a file, newpath is a file, with FILE_LINK_REPLACE_IF_EXISTS, with
+     * FILE_LINK_POSIX_SEMANTICS, target file opened with sharing mode */
+    res = GetTempFileNameW( tmp_path, fooW, 0, oldpath );
+    ok( res != 0, "failed to create temp file\n" );
+    handle = CreateFileW( oldpath, GENERIC_WRITE | DELETE, 0,
+        NULL, CREATE_ALWAYS, 0, 0 );
+    ok( handle != INVALID_HANDLE_VALUE, "CreateFileW failed\n" );
+
+    res = GetTempFileNameW( tmp_path, fooW, 0, newpath );
+    ok( res != 0, "failed to create temp file\n" );
+    handle2 = CreateFileW( newpath, GENERIC_WRITE | DELETE, FILE_SHARE_DELETE,
+        NULL, CREATE_ALWAYS, 0, 0 );
+    ok( handle2 != INVALID_HANDLE_VALUE, "CreateFileW failed\n" );
+
+    pRtlDosPathNameToNtPathName_U( newpath, &name_str, NULL, NULL );
+    fli = HeapAlloc( GetProcessHeap(), 0, sizeof(FILE_LINK_INFORMATION) + name_str.Length );
+    fli->Flags = FILE_LINK_REPLACE_IF_EXISTS | FILE_LINK_POSIX_SEMANTICS;
+    fli->RootDirectory = NULL;
+    fli->FileNameLength = name_str.Length;
+    memcpy( fli->FileName, name_str.Buffer, name_str.Length );
+    pRtlFreeUnicodeString( &name_str );
+
+    io.Status = 0xdeadbeef;
+    res = pNtSetInformationFile( handle, &io, fli, sizeof(FILE_LINK_INFORMATION) + fli->FileNameLength, FileLinkInformationEx );
+    todo_wine ok( io.Status == 0xdeadbeef || io.Status == STATUS_SUCCESS,
+                  "io.Status expected 0xdeadbeef or STATUS_SUCCESS, got %lx\n", io.Status );
+    todo_wine ok( res == STATUS_SUCCESS || res == STATUS_NOT_SUPPORTED,
+                  "res expected STATUS_SUCCESS or STATUS_NOT_SUPPORTED, got %lx\n", res );
+    fileDeleted = GetFileAttributesW( oldpath ) == INVALID_FILE_ATTRIBUTES && GetLastError() == ERROR_FILE_NOT_FOUND;
+    ok( !fileDeleted, "file should exist\n" );
+    fileDeleted = GetFileAttributesW( newpath ) == INVALID_FILE_ATTRIBUTES && GetLastError() == ERROR_FILE_NOT_FOUND;
+    ok( !fileDeleted, "file should exist\n" );
+
+    CloseHandle( handle );
+    CloseHandle( handle2 );
+    HeapFree( GetProcessHeap(), 0, fli );
+    delete_object( oldpath );
+    delete_object( newpath );
+
+    /* oldpath is a directory, newpath is a file, with FILE_LINK_REPLACE_IF_EXISTS, with
+     * FILE_LINK_POSIX_SEMANTICS, target file opened */
+    res = GetTempFileNameW( tmp_path, fooW, 0, oldpath );
+    ok( res != 0, "failed to create temp file\n" );
+    DeleteFileW( oldpath );
+    success = CreateDirectoryW( oldpath, NULL );
+    ok( success != 0, "failed to create temp directory\n" );
+    handle = CreateFileW( oldpath, GENERIC_WRITE | DELETE, 0,
+        NULL, OPEN_EXISTING, FILE_FLAG_BACKUP_SEMANTICS, 0 );
+    ok( handle != INVALID_HANDLE_VALUE, "CreateFileW failed\n" );
+
+    res = GetTempFileNameW( tmp_path, fooW, 0, newpath );
+    ok( res != 0, "failed to create temp file\n" );
+    handle2 = CreateFileW( newpath, GENERIC_WRITE | DELETE, FILE_SHARE_DELETE,
+        NULL, CREATE_ALWAYS, 0, 0 );
+    ok( handle2 != INVALID_HANDLE_VALUE, "CreateFileW failed\n" );
+
+    pRtlDosPathNameToNtPathName_U( newpath, &name_str, NULL, NULL );
+    fli = HeapAlloc( GetProcessHeap(), 0, sizeof(FILE_LINK_INFORMATION) + name_str.Length );
+    fli->Flags = FILE_LINK_REPLACE_IF_EXISTS | FILE_LINK_POSIX_SEMANTICS;
+    fli->RootDirectory = NULL;
+    fli->FileNameLength = name_str.Length;
+    memcpy( fli->FileName, name_str.Buffer, name_str.Length );
+    pRtlFreeUnicodeString( &name_str );
+
+    io.Status = 0xdeadbeef;
+    res = pNtSetInformationFile( handle, &io, fli, sizeof(FILE_LINK_INFORMATION) + fli->FileNameLength, FileLinkInformationEx );
+    todo_wine ok( io.Status == 0xdeadbeef, "io.Status expected 0xdeadbeef, got %lx\n", io.Status );
+    ok( res == STATUS_FILE_IS_A_DIRECTORY || res == STATUS_NOT_SUPPORTED,
+        "res expected STATUS_FILE_IS_A_DIRECTORY or STATUS_NOT_SUPPORTED, got %lx\n", res );
+    fileDeleted = GetFileAttributesW( oldpath ) == INVALID_FILE_ATTRIBUTES && GetLastError() == ERROR_FILE_NOT_FOUND;
+    ok( !fileDeleted, "file should exist\n" );
+    fileDeleted = GetFileAttributesW( newpath ) == INVALID_FILE_ATTRIBUTES && GetLastError() == ERROR_FILE_NOT_FOUND;
+    ok( !fileDeleted, "file should exist\n" );
+
+    CloseHandle( handle );
+    CloseHandle( handle2 );
+    HeapFree( GetProcessHeap(), 0, fli );
+    delete_object( oldpath );
+    delete_object( newpath );
+
+    /* oldpath is a directory, newpath is a directory, with FILE_LINK_REPLACE_IF_EXISTS, with
+     * FILE_LINK_POSIX_SEMANTICS, target file opened */
+    res = GetTempFileNameW( tmp_path, fooW, 0, oldpath );
+    ok( res != 0, "failed to create temp file\n" );
+    DeleteFileW( oldpath );
+    success = CreateDirectoryW( oldpath, NULL );
+    ok( success != 0, "failed to create temp directory\n" );
+    handle = CreateFileW( oldpath, GENERIC_WRITE | DELETE, 0,
+        NULL, OPEN_EXISTING, FILE_FLAG_BACKUP_SEMANTICS, 0 );
+    ok( handle != INVALID_HANDLE_VALUE, "CreateFileW failed\n" );
+
+    res = GetTempFileNameW( tmp_path, fooW, 0, newpath );
+    ok( res != 0, "failed to create temp file\n" );
+    DeleteFileW( newpath );
+    success = CreateDirectoryW( newpath, NULL );
+    ok( success != 0, "failed to create temp directory\n" );
+    handle2 = CreateFileW( newpath, GENERIC_WRITE | DELETE, FILE_SHARE_DELETE,
+        NULL, OPEN_EXISTING, FILE_FLAG_BACKUP_SEMANTICS, 0 );
+    ok( handle2 != INVALID_HANDLE_VALUE, "CreateFileW failed\n" );
+
+    pRtlDosPathNameToNtPathName_U( newpath, &name_str, NULL, NULL );
+    fli = HeapAlloc( GetProcessHeap(), 0, sizeof(FILE_LINK_INFORMATION) + name_str.Length );
+    fli->Flags = FILE_LINK_REPLACE_IF_EXISTS | FILE_LINK_POSIX_SEMANTICS;
+    fli->RootDirectory = NULL;
+    fli->FileNameLength = name_str.Length;
+    memcpy( fli->FileName, name_str.Buffer, name_str.Length );
+    pRtlFreeUnicodeString( &name_str );
+
+    io.Status = 0xdeadbeef;
+    res = pNtSetInformationFile( handle, &io, fli, sizeof(FILE_LINK_INFORMATION) + fli->FileNameLength, FileLinkInformationEx );
+    todo_wine ok( io.Status == 0xdeadbeef, "io.Status expected 0xdeadbeef, got %lx\n", io.Status );
+    ok( res == STATUS_FILE_IS_A_DIRECTORY || res == STATUS_NOT_SUPPORTED,
+        "res expected STATUS_FILE_IS_A_DIRECTORY or STATUS_NOT_SUPPORTED, got %lx\n", res );
+    fileDeleted = GetFileAttributesW( oldpath ) == INVALID_FILE_ATTRIBUTES && GetLastError() == ERROR_FILE_NOT_FOUND;
+    ok( !fileDeleted, "file should exist\n" );
+    fileDeleted = GetFileAttributesW( newpath ) == INVALID_FILE_ATTRIBUTES && GetLastError() == ERROR_FILE_NOT_FOUND;
+    ok( !fileDeleted, "file should exist\n" );
+
+    CloseHandle( handle );
+    CloseHandle( handle2 );
+    HeapFree( GetProcessHeap(), 0, fli );
+    delete_object( oldpath );
+    delete_object( newpath );
+
+    /* oldpath is a file, newpath is a directory, with FILE_LINK_REPLACE_IF_EXISTS, with
+     * FILE_LINK_POSIX_SEMANTICS */
+    res = GetTempFileNameW( tmp_path, fooW, 0, oldpath );
+    ok( res != 0, "failed to create temp file\n" );
+    handle = CreateFileW( oldpath, GENERIC_WRITE | DELETE, 0, NULL, CREATE_ALWAYS, 0, 0 );
+    ok( handle != INVALID_HANDLE_VALUE, "CreateFileW failed\n" );
+
+    res = GetTempFileNameW( tmp_path, fooW, 0, newpath );
+    ok( res != 0, "failed to create temp file\n" );
+    DeleteFileW( newpath );
+    success = CreateDirectoryW( newpath, NULL );
+    ok( success != 0, "failed to create temp directory\n" );
+    pRtlDosPathNameToNtPathName_U( newpath, &name_str, NULL, NULL );
+    fli = HeapAlloc( GetProcessHeap(), 0, sizeof(FILE_LINK_INFORMATION) + name_str.Length );
+    fli->Flags = FILE_LINK_REPLACE_IF_EXISTS | FILE_LINK_POSIX_SEMANTICS;
+    fli->RootDirectory = NULL;
+    fli->FileNameLength = name_str.Length;
+    memcpy( fli->FileName, name_str.Buffer, name_str.Length );
+    pRtlFreeUnicodeString( &name_str );
+
+    io.Status = 0xdeadbeef;
+    res = pNtSetInformationFile( handle, &io, fli, sizeof(FILE_LINK_INFORMATION) + fli->FileNameLength, FileLinkInformationEx );
+    todo_wine ok( io.Status == 0xdeadbeef, "io.Status expected 0xdeadbeef, got %lx\n", io.Status );
+    todo_wine ok( res == STATUS_FILE_IS_A_DIRECTORY || res == STATUS_NOT_SUPPORTED,
+                  "res expected STATUS_FILE_IS_A_DIRECTORY or STATUS_NOT_SUPPORTED, got %lx\n", res );
+    fileDeleted = GetFileAttributesW( oldpath ) == INVALID_FILE_ATTRIBUTES && GetLastError() == ERROR_FILE_NOT_FOUND;
+    ok( !fileDeleted, "file should exist\n" );
+    fileDeleted = GetFileAttributesW( newpath ) == INVALID_FILE_ATTRIBUTES && GetLastError() == ERROR_FILE_NOT_FOUND;
+    ok( !fileDeleted, "file should exist\n" );
+
+    CloseHandle( handle );
+    HeapFree( GetProcessHeap(), 0, fli );
+    delete_object( oldpath );
+    delete_object( newpath );
 }
 
 static void test_file_both_information(void)
-- 
2.55.0.windows.4



================================================
FILE: build-base/patches/0007-ntdll-Add-support-for-FILE_-RENAME-LINK-_POSIX_SEMAN.patch
================================================
From bdcee9e75bd0d98c0330c47242ae71ce209ef3b0 Mon Sep 17 00:00:00 2001
From: Joel Holdsworth <joel@airwebreathe.org.uk>
Date: Mon, 7 Aug 2023 12:05:47 +0100
Subject: [PATCH 7/7] ntdll: Add support for
 FILE_{RENAME,LINK}_POSIX_SEMANTICS.

Signed-off-by: Joel Holdsworth <joel@airwebreathe.org.uk>
---
 dlls/ntdll/tests/file.c | 22 +++++------
 dlls/ntdll/unix/file.c  |  8 +++-
 server/fd.c             | 85 ++++++++++++++++++++++++++++++++---------
 3 files changed, 84 insertions(+), 31 deletions(-)

diff --git a/dlls/ntdll/tests/file.c b/dlls/ntdll/tests/file.c
index 78b65fb16e..80516f473e 100644
--- a/dlls/ntdll/tests/file.c
+++ b/dlls/ntdll/tests/file.c
@@ -2455,10 +2455,10 @@ static void test_file_rename_information_ex(void)
 
     io.Status = 0xdeadbeef;
     res = pNtSetInformationFile( handle, &io, fri, sizeof(FILE_RENAME_INFORMATION) + fri->FileNameLength, FileRenameInformationEx );
-    todo_wine ok( io.Status == STATUS_SUCCESS, "io.Status expected STATUS_SUCCESS, got %lx\n", io.Status );
-    todo_wine ok( res == STATUS_SUCCESS, "res expected STATUS_SUCCESS, got %lx\n", res );
+    ok( io.Status == STATUS_SUCCESS, "io.Status expected STATUS_SUCCESS, got %lx\n", io.Status );
+    ok( res == STATUS_SUCCESS, "res expected STATUS_SUCCESS, got %lx\n", res );
     fileDeleted = GetFileAttributesW( oldpath ) == INVALID_FILE_ATTRIBUTES && GetLastError() == ERROR_FILE_NOT_FOUND;
-    todo_wine ok( fileDeleted, "file should not exist\n" );
+    ok( fileDeleted, "file should not exist\n" );
     fileDeleted = GetFileAttributesW( newpath ) == INVALID_FILE_ATTRIBUTES && GetLastError() == ERROR_FILE_NOT_FOUND;
     ok( !fileDeleted, "file should exist\n" );
 
@@ -3461,8 +3461,8 @@ static void test_file_link_information_ex(void)
     io.Status = 0xdeadbeef;
     res = pNtSetInformationFile( handle, &io, fli, sizeof(FILE_LINK_INFORMATION) + fli->FileNameLength, FileLinkInformationEx );
     todo_wine ok( io.Status == 0xdeadbeef, "io.Status expected 0xdeadbeef, got %lx\n", io.Status );
-    todo_wine ok( res == STATUS_SHARING_VIOLATION || res == STATUS_NOT_SUPPORTED,
-                  "res expected STATUS_SHARING_VIOLATION or STATUS_NOT_SUPPORTED, got %lx\n", res );
+    ok( res == STATUS_SHARING_VIOLATION || res == STATUS_NOT_SUPPORTED,
+        "res expected STATUS_SHARING_VIOLATION or STATUS_NOT_SUPPORTED, got %lx\n", res );
     fileDeleted = GetFileAttributesW( oldpath ) == INVALID_FILE_ATTRIBUTES && GetLastError() == ERROR_FILE_NOT_FOUND;
     ok( !fileDeleted, "file should exist\n" );
     fileDeleted = GetFileAttributesW( newpath ) == INVALID_FILE_ATTRIBUTES && GetLastError() == ERROR_FILE_NOT_FOUND;
@@ -3498,10 +3498,10 @@ static void test_file_link_information_ex(void)
 
     io.Status = 0xdeadbeef;
     res = pNtSetInformationFile( handle, &io, fli, sizeof(FILE_LINK_INFORMATION) + fli->FileNameLength, FileLinkInformationEx );
-    todo_wine ok( io.Status == 0xdeadbeef || io.Status == STATUS_SUCCESS,
-                  "io.Status expected 0xdeadbeef or STATUS_SUCCESS, got %lx\n", io.Status );
-    todo_wine ok( res == STATUS_SUCCESS || res == STATUS_NOT_SUPPORTED,
-                  "res expected STATUS_SUCCESS or STATUS_NOT_SUPPORTED, got %lx\n", res );
+    ok( io.Status == 0xdeadbeef || io.Status == STATUS_SUCCESS,
+        "io.Status expected 0xdeadbeef or STATUS_SUCCESS, got %lx\n", io.Status );
+    ok( res == STATUS_SUCCESS || res == STATUS_NOT_SUPPORTED,
+        "res expected STATUS_SUCCESS or STATUS_NOT_SUPPORTED, got %lx\n", res );
     fileDeleted = GetFileAttributesW( oldpath ) == INVALID_FILE_ATTRIBUTES && GetLastError() == ERROR_FILE_NOT_FOUND;
     ok( !fileDeleted, "file should exist\n" );
     fileDeleted = GetFileAttributesW( newpath ) == INVALID_FILE_ATTRIBUTES && GetLastError() == ERROR_FILE_NOT_FOUND;
@@ -3621,8 +3621,8 @@ static void test_file_link_information_ex(void)
     io.Status = 0xdeadbeef;
     res = pNtSetInformationFile( handle, &io, fli, sizeof(FILE_LINK_INFORMATION) + fli->FileNameLength, FileLinkInformationEx );
     todo_wine ok( io.Status == 0xdeadbeef, "io.Status expected 0xdeadbeef, got %lx\n", io.Status );
-    todo_wine ok( res == STATUS_FILE_IS_A_DIRECTORY || res == STATUS_NOT_SUPPORTED,
-                  "res expected STATUS_FILE_IS_A_DIRECTORY or STATUS_NOT_SUPPORTED, got %lx\n", res );
+    ok( res == STATUS_FILE_IS_A_DIRECTORY || res == STATUS_NOT_SUPPORTED,
+        "res expected STATUS_FILE_IS_A_DIRECTORY or STATUS_NOT_SUPPORTED, got %lx\n", res );
     fileDeleted = GetFileAttributesW( oldpath ) == INVALID_FILE_ATTRIBUTES && GetLastError() == ERROR_FILE_NOT_FOUND;
     ok( !fileDeleted, "file should exist\n" );
     fileDeleted = GetFileAttributesW( newpath ) == INVALID_FILE_ATTRIBUTES && GetLastError() == ERROR_FILE_NOT_FOUND;
diff --git a/dlls/ntdll/unix/file.c b/dlls/ntdll/unix/file.c
index d9b9e578d6..cb035c263d 100644
--- a/dlls/ntdll/unix/file.c
+++ b/dlls/ntdll/unix/file.c
@@ -5443,7 +5443,9 @@ NTSTATUS WINAPI NtSetInformationFile( HANDLE handle, IO_STATUS_BLOCK *io,
             else
                 flags = info->Flags;
 
-            if (flags & ~(FILE_RENAME_REPLACE_IF_EXISTS | FILE_RENAME_IGNORE_READONLY_ATTRIBUTE))
+            if (flags & ~(FILE_RENAME_REPLACE_IF_EXISTS |
+                          FILE_RENAME_IGNORE_READONLY_ATTRIBUTE |
+                          FILE_RENAME_POSIX_SEMANTICS))
                 FIXME( "unsupported flags: %#x\n", flags );
 
             name_str.Buffer = info->FileName;
@@ -5488,7 +5490,9 @@ NTSTATUS WINAPI NtSetInformationFile( HANDLE handle, IO_STATUS_BLOCK *io,
             else
                 flags = info->Flags;
 
-            if (flags & ~(FILE_LINK_REPLACE_IF_EXISTS | FILE_LINK_IGNORE_READONLY_ATTRIBUTE))
+            if (flags & ~(FILE_LINK_REPLACE_IF_EXISTS |
+                          FILE_LINK_IGNORE_READONLY_ATTRIBUTE |
+                          FILE_LINK_POSIX_SEMANTICS))
                 FIXME( "unsupported flags: %#x\n", flags );
 
             name_str.Buffer = info->FileName;
diff --git a/server/fd.c b/server/fd.c
index 1ae7ebe6ce..f2b11cc74a 100644
--- a/server/fd.c
+++ b/server/fd.c
@@ -2812,13 +2812,6 @@ static void set_fd_name( struct fd *fd, struct fd *root, const char *nameptr, da
             goto failed;
         }
 
-        /* can't replace directories or special files */
-        if (!S_ISREG( st.st_mode ))
-        {
-            set_error( STATUS_ACCESS_DENIED );
-            goto failed;
-        }
-
         /* read-only files cannot be replaced */
         if (!(st.st_mode & (S_IWUSR | S_IWGRP | S_IWOTH)) &&
             !(flags & FILE_RENAME_IGNORE_READONLY_ATTRIBUTE))
@@ -2827,23 +2820,79 @@ static void set_fd_name( struct fd *fd, struct fd *root, const char *nameptr, da
             goto failed;
         }
 
-        /* can't replace an opened file */
-        if ((inode = get_inode( st.st_dev, st.st_ino, -1 )))
+        if (flags & FILE_RENAME_POSIX_SEMANTICS)
         {
-            int is_empty = list_empty( &inode->open );
-            release_object( inode );
-            if (!is_empty)
+            /* can't replace a file with a directory with FILE_RENAME_POSIX_SEMANTICS */
+            if (S_ISDIR( st2.st_mode ) && !S_ISDIR( st.st_mode ))
             {
-                set_error( STATUS_ACCESS_DENIED );
+                set_error( STATUS_NOT_A_DIRECTORY );
                 goto failed;
             }
-        }
 
-        /* link() expects that the target doesn't exist */
-        /* rename() cannot replace files with directories */
-        if (create_link || S_ISDIR( st2.st_mode ))
+            /* can't replace an open file that was not opened with FILE_SHARE_DELETE */
+            if ((inode = get_inode( st.st_dev, st.st_ino, -1 )))
+            {
+                unsigned int sharing = FILE_SHARE_READ | FILE_SHARE_WRITE | FILE_SHARE_DELETE;
+                struct fd *fd_ptr;
+
+                LIST_FOR_EACH_ENTRY( fd_ptr, &inode->open, struct fd, inode_entry )
+                {
+                    /* if access mode is 0, sharing mode is ignored */
+                    if (fd_ptr->access &
+                        (FILE_READ_DATA | FILE_EXECUTE | FILE_WRITE_DATA | FILE_APPEND_DATA | DELETE))
+                    {
+                        sharing &= fd_ptr->sharing;
+                    }
+                }
+
+                release_object( inode );
+
+                if (!(sharing & FILE_SHARE_DELETE)) {
+                    set_error( STATUS_SHARING_VIOLATION );
+                    goto failed;
+                }
+            }
+
+            /* link() expects that the target doesn't exist */
+            /* rename() cannot replace files with directories */
+            if (S_ISDIR( st2.st_mode ) && S_ISDIR( st.st_mode ))
+            {
+                if (rmdir( name ))
+                {
+                    file_set_error();
+                    goto failed;
+                }
+            }
+            else if ((create_link || S_ISDIR( st2.st_mode )) && unlink(name))
+            {
+                file_set_error();
+                goto failed;
+            }
+        }
+        else
         {
-            if (unlink( name ))
+            /* can't replace directories or special files */
+            if (!S_ISREG( st.st_mode ))
+            {
+                set_error( STATUS_ACCESS_DENIED );
+                goto failed;
+            }
+
+            /* can't replace an opened file without FILE_RENAME_POSIX_SEMANTICS */
+            if ((inode = get_inode( st.st_dev, st.st_ino, -1 )))
+            {
+                int is_empty = list_empty( &inode->open );
+                release_object( inode );
+                if (!is_empty)
+                {
+                    set_error( STATUS_ACCESS_DENIED );
+                    goto failed;
+                }
+            }
+
+            /* link() expects that the target doesn't exist */
+            /* rename() cannot replace files with directories */
+            if ((create_link || S_ISDIR( st2.st_mode )) && unlink( name ))
             {
                 file_set_error();
                 goto failed;
-- 
2.55.0.windows.4



================================================
FILE: build-base/update-wine-patches.sh
================================================
// [OUTLINE - 0 symbols, 24 lines]


================================================
FILE: cygwin/Dockerfile
================================================
// [OUTLINE - 0 symbols, 48 lines]


================================================
FILE: cygwin/cygwin
================================================
#!/bin/bash

WINEDEBUG="-all" WINEDLLOVERRIDES="${WINEDLLOVERRIDES:-mshtml=d;mscoree=d}" WINEPATH="C:\\cygwin64\\bin" xvfb-run -a wine bash.exe -o igncr -l "$@"


================================================
FILE: devcontainer/Dockerfile
================================================
// [OUTLINE - 0 symbols, 12 lines]


================================================
FILE: docker-compose.yml
================================================
services:
  build-base:
    build:
      context: ./build-base
    image: ghcr.io/msys2/msys2-docker-build-base:latest
    pull_policy: never

  msys2:
    build:
      context: ./msys2
      additional_contexts:
        ghcr.io/msys2/msys2-docker-build-base: "service:build-base"
    image: ghcr.io/msys2/msys2-docker-experimental:latest

  cygwin:
    build:
      context: ./cygwin
      additional_contexts:
        ghcr.io/msys2/msys2-docker-build-base: "service:build-base"
    image: ghcr.io/msys2/cygwin-docker-experimental:latest

  devcontainer:
    build:
      context: ./devcontainer
      additional_contexts:
        ghcr.io/msys2/msys2-docker-build-base: "service:build-base"
    image: ghcr.io/msys2/msys2-docker-devcontainer:latest


================================================
FILE: msys2/Dockerfile
================================================
// [OUTLINE - 0 symbols, 48 lines]


================================================
FILE: msys2/msys2
================================================
#!/bin/bash

WINEDEBUG="-all" WINEDLLOVERRIDES="${WINEDLLOVERRIDES:-mshtml=d;mscoree=d}" WINEPATH="C:\\msys64\\usr\\bin" MSYSTEM="${MSYSTEM:-UCRT64}" xvfb-run -a wine bash.exe -l "$@"



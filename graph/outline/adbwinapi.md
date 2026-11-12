# Codebase Digest: adbwinapi

- Files analyzed: 5
- Total lines: 325
- Total size: 14.7 KB
- Git branch: `main`
- Git HEAD commit: `630c5466 (update to 37.0.0 (android-17.0.0_r1))`
- Digest mode: `AST-Smart Outline`

## Directory Structure

```text
adbwinapi/
├── 0001-adbwinusb-fix-build.patch (23 lines, 604 B, ~176 tokens)
├── CMakeLists.txt (51 lines, 1.9 KB, ~479 tokens)
├── LICENSE (201 lines, 11.1 KB, ~2.6k tokens)
├── README.md (11 lines, 373 B, ~101 tokens)
└── build.cmd (39 lines, 769 B, ~242 tokens)
```

## Source Files

================================================
FILE: README.md
================================================
# adbwinapi

This repository is to provide the shared libraries required for the
[android-tools](https://packages.msys2.org/base/mingw-w64-android-tools) package
in MINGW-packages.

## License

This repository is licensed with the same [Apache-2.0 license](LICENSE) used in
AOSP [platform/development](https://android.googlesource.com/platform/development.git)
repository.


================================================
FILE: 0001-adbwinusb-fix-build.patch
================================================
--- a/host/windows/usb/api/adb_api_instance.h
+++ b/host/windows/usb/api/adb_api_instance.h
@@ -46,6 +46,9 @@
      decremented.
   So, at the end, this object destroys itself when refcount drops to zero.
 */
+
+typedef void *ADBAPIINSTANCEHANDLE;
+
 class AdbApiInstance {
  public:
   /** \brief Constructs the object
--- a/host/windows/usb/winusb/adb_winusb_interface.h
+++ b/host/windows/usb/winusb/adb_winusb_interface.h
@@ -24,6 +24,8 @@
 
 #include "..\api\adb_interface.h"
 
+#include <winusb.h>
+
 /** \brief Encapsulates an interface on our USB device that is accessible
   via WinUsb API.
 */


================================================
FILE: CMakeLists.txt
================================================
cmake_minimum_required(VERSION 3.15)
project(android-tools-win)

if(NOT MSVC)
    message(FATAL_ERROR "ADB API for Windows can only be built using MSVC.")
endif()

# For static linking
set(CMAKE_MSVC_RUNTIME_LIBRARY "MultiThreaded$<$<CONFIG:Debug>:Debug>")

set(adbwinapi_SOURCES
host/windows/usb/api/AdbWinApi.cpp
host/windows/usb/api/AdbWinApi.def
host/windows/usb/api/AdbWinApi.rc
host/windows/usb/api/adb_api.cpp
host/windows/usb/api/adb_api_instance.cpp
host/windows/usb/api/adb_endpoint_object.cpp
host/windows/usb/api/adb_helper_routines.cpp
host/windows/usb/api/adb_interface.cpp
host/windows/usb/api/adb_interface_enum.cpp
host/windows/usb/api/adb_io_completion.cpp
host/windows/usb/api/adb_legacy_endpoint_object.cpp
host/windows/usb/api/adb_legacy_interface.cpp
host/windows/usb/api/adb_legacy_io_completion.cpp
host/windows/usb/api/adb_object_handle.cpp
host/windows/usb/api/stdafx.cpp
)

add_library(AdbWinApi SHARED ${adbwinapi_SOURCES})
target_compile_definitions(AdbWinApi PRIVATE
ADBWIN_EXPORTS _CRT_NON_CONFORMING_SWPRINTFS _CRT_SECURE_NO_WARNINGS _UNICODE UNICODE
NTDDI_VERSION=NTDDI_WIN10 _WIN32_WINNT=_WIN32_WINNT_WIN10 WINVER=_WIN32_WINNT_WIN10)
target_link_libraries(AdbWinApi PRIVATE setupapi)

set(adbwinusbapi_SOURCES
host/windows/usb/winusb/AdbWinUsbApi.cpp
host/windows/usb/winusb/AdbWinUsbApi.def
host/windows/usb/winusb/AdbWinUsbApi.rc
host/windows/usb/winusb/adb_winusb_endpoint_object.cpp
host/windows/usb/winusb/adb_winusb_interface.cpp
host/windows/usb/winusb/adb_winusb_io_completion.cpp
host/windows/usb/winusb/stdafx.cpp
)

add_library(AdbWinUsbApi SHARED ${adbwinusbapi_SOURCES})
target_compile_definitions(AdbWinUsbApi PRIVATE
ADBWIN_EXPORTS _CRT_NON_CONFORMING_SWPRINTFS _CRT_SECURE_NO_WARNINGS _UNICODE UNICODE
NTDDI_VERSION=NTDDI_WIN10 _WIN32_WINNT=_WIN32_WINNT_WIN10 WINVER=_WIN32_WINNT_WIN10)
target_link_libraries(AdbWinUsbApi PRIVATE AdbWinApi winusb)

install(TARGETS AdbWinApi AdbWinUsbApi RUNTIME DESTINATION bin)


================================================
FILE: LICENSE
================================================
                                 Apache License
                           Version 2.0, January 2004
                        http://www.apache.org/licenses/

   TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

   1. Definitions.

      "License" shall mean the terms and conditions for use, reproduction,
      and distribution as defined by Sections 1 through 9 of this document.

      "Licensor" shall mean the copyright owner or entity authorized by
      the copyright owner that is granting the License.

      "Legal Entity" shall mean the union of the acting entity and all
      other entities that control, are controlled by, or are under common
      control with that entity. For the purposes of this definition,
      "control" means (i) the power, direct or indirect, to cause the
      direction or management of such entity, whether by contract or
      otherwise, or (ii) ownership of fifty percent (50%) or more of the
      outstanding shares, or (iii) beneficial ownership of such entity.

      "You" (or "Your") shall mean an individual or Legal Entity
      exercising permissions granted by this License.

      "Source" form shall mean the preferred form for making modifications,
      including but not limited to software source code, documentation
      source, and configuration files.

      "Object" form shall mean any form resulting from mechanical
      transformation or translation of a Source form, including but
      not limited to compiled object code, generated documentation,
      and conversions to other media types.

      "Work" shall mean the work of authorship, whether in Source or
      Object form, made available under the License, as indicated by a
      copyright notice that is included in or attached to the work
      (an example is provided in the Appendix below).

      "Derivative Works" shall mean any work, whether in Source or Object
      form, that is based on (or derived from) the Work and for which the
      editorial revisions, annotations, elaborations, or other modifications
      represent, as a whole, an original work of authorship. For the purposes
      of this License, Derivative Works shall not include works that remain
      separable from, or merely link (or bind by name) to the interfaces of,
      the Work and Derivative Works thereof.

      "Contribution" shall mean any work of authorship, including
      the original version of the Work and any modifications or additions
      to that Work or Derivative Works thereof, that is intentionally
      submitted to Licensor for inclusion in the Work by the copyright owner
      or by an individual or Legal Entity authorized to submit on behalf of
      the copyright owner. For the purposes of this definition, "submitted"
      means any form of electronic, verbal, or written communication sent
      to the Licensor or its representatives, including but not limited to
      communication on electronic mailing lists, source code control systems,
      and issue tracking systems that are managed by, or on behalf of, the
      Licensor for the purpose of discussing and improving the Work, but
      excluding communication that is conspicuously marked or otherwise
      designated in writing by the copyright owner as "Not a Contribution."

      "Contributor" shall mean Licensor and any individual or Legal Entity
      on behalf of whom a Contribution has been received by Licensor and
      subsequently incorporated within the Work.

   2. Grant of Copyright License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      copyright license to reproduce, prepare Derivative Works of,
      publicly display, publicly perform, sublicense, and distribute the
      Work and such Derivative Works in Source or Object form.

   3. Grant of Patent License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      (except as stated in this section) patent license to make, have made,
      use, offer to sell, sell, import, and otherwise transfer the Work,
      where such license applies only to those patent claims licensable
      by such Contributor that are necessarily infringed by their
      Contribution(s) alone or by combination of their Contribution(s)
      with the Work to which such Contribution(s) was submitted. If You
      institute patent litigation against any entity (including a
      cross-claim or counterclaim in a lawsuit) alleging that the Work
      or a Contribution incorporated within the Work constitutes direct
      or contributory patent infringement, then any patent licenses
      granted to You under this License for that Work shall terminate
      as of the date such litigation is filed.

   4. Redistribution. You may reproduce and distribute copies of the
      Work or Derivative Works thereof in any medium, with or without
      modifications, and in Source or Object form, provided that You
      meet the following conditions:

      (a) You must give any other recipients of the Work or
          Derivative Works a copy of this License; and

      (b) You must cause any modified files to carry prominent notices
          stating that You changed the files; and

      (c) You must retain, in the Source form of any Derivative Works
          that You distribute, all copyright, patent, trademark, and
          attribution notices from the Source form of the Work,
          excluding those notices that do not pertain to any part of
          the Derivative Works; and

      (d) If the Work includes a "NOTICE" text file as part of its
          distribution, then any Derivative Works that You distribute must
          include a readable copy of the attribution notices contained
          within such NOTICE file, excluding those notices that do not
          pertain to any part of the Derivative Works, in at least one
          of the following places: within a NOTICE text file distributed
          as part of the Derivative Works; within the Source form or
          documentation, if provided along with the Derivative Works; or,
          within a display generated by the Derivative Works, if and
          wherever such third-party notices normally appear. The contents
          of the NOTICE file are for informational purposes only and
          do not modify the License. You may add Your own attribution
          notices within Derivative Works that You distribute, alongside
          or as an addendum to the NOTICE text from the Work, provided
          that such additional attribution notices cannot be construed
          as modifying the License.

      You may add Your own copyright statement to Your modifications and
      may provide additional or different license terms and conditions
      for use, reproduction, or distribution of Your modifications, or
      for any such Derivative Works as a whole, provided Your use,
      reproduction, and distribution of the Work otherwise complies with
      the conditions stated in this License.

   5. Submission of Contributions. Unless You explicitly state otherwise,
      any Contribution intentionally submitted for inclusion in the Work
      by You to the Licensor shall be under the terms and conditions of
      this License, without any additional terms or conditions.
      Notwithstanding the above, nothing herein shall supersede or modify
      the terms of any separate license agreement you may have executed
      with Licensor regarding such Contributions.

   6. Trademarks. This License does not grant permission to use the trade
      names, trademarks, service marks, or product names of the Licensor,
      except as required for reasonable and customary use in describing the
      origin of the Work and reproducing the content of the NOTICE file.

   7. Disclaimer of Warranty. Unless required by applicable law or
      agreed to in writing, Licensor provides the Work (and each
      Contributor provides its Contributions) on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
      implied, including, without limitation, any warranties or conditions
      of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
      PARTICULAR PURPOSE. You are solely responsible for determining the
      appropriateness of using or redistributing the Work and assume any
      risks associated with Your exercise of permissions under this License.

   8. Limitation of Liability. In no event and under no legal theory,
      whether in tort (including negligence), contract, or otherwise,
      unless required by applicable law (such as deliberate and grossly
      negligent acts) or agreed to in writing, shall any Contributor be
      liable to You for damages, including any direct, indirect, special,
      incidental, or consequential damages of any character arising as a
      result of this License or out of the use or inability to use the
      Work (including but not limited to damages for loss of goodwill,
      work stoppage, computer failure or malfunction, or any and all
      other commercial damages or losses), even if such Contributor
      has been advised of the possibility of such damages.

   9. Accepting Warranty or Additional Liability. While redistributing
      the Work or Derivative Works thereof, You may choose to offer,
      and charge a fee for, acceptance of support, warranty, indemnity,
      or other liability obligations and/or rights consistent with this
      License. However, in accepting such obligations, You may act only
      on Your own behalf and on Your sole responsibility, not on behalf
      of any other Contributor, and only if You agree to indemnify,
      defend, and hold each Contributor harmless for any liability
      incurred by, or claims asserted against, such Contributor by reason
      of your accepting any such warranty or additional liability.

   END OF TERMS AND CONDITIONS

   APPENDIX: How to apply the Apache License to your work.

      To apply the Apache License to your work, attach the following
      boilerplate notice, with the fields enclosed by brackets "[]"
      replaced with your own identifying information. (Don't include
      the brackets!)  The text should be enclosed in the appropriate
      comment syntax for the file format. We also recommend that a
      file or class name and description of purpose be included on the
      same "printed page" as the copyright notice for easier
      identification within third-party archives.

   Copyright [yyyy] [name of copyright owner]

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.


================================================
FILE: build.cmd
================================================
:: Build script for adbwinapi

:: newer platform-tools-"%GIT_TAG%" are not tagged in AOSP
:: sync this with nmeum/android-tools project
set "GIT_BRANCH=android-17.0.0_r1"
set "GIT_DIR=development"
set "BUILD_ARCH=%~1"

if not exist "%cd%\%GIT_DIR%\" (
git clone ^
--depth=1 ^
--branch "%GIT_BRANCH%" ^
https://android.googlesource.com/platform/development.git ^
"%GIT_DIR%"

git apply ^
--directory="%GIT_DIR%" ^
0001-adbwinusb-fix-build.patch
)

if "%BUILD_ARCH%" == "" (
set "BUILD_ARCH=x64"
)

copy CMakeLists.txt "%GIT_DIR%\CMakeLists.txt"

cmake ^
-G "Visual Studio 18 2026" ^
-A "%BUILD_ARCH%" ^
-B "build-%BUILD_ARCH%" ^
-S "%GIT_DIR%"

cmake ^
--build "build-%BUILD_ARCH%" ^
--config Release

7z a ^
-tzip "adbwinapi_sources.zip" ^
"%GIT_DIR%\host\windows\usb"



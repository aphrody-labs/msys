# formats/msix

MSIX packaging of the installer/launcher: AppxManifest, execution aliases per env shell, signed with the distro cert, .appinstaller for updates. makeappx/signtool (Win11 SDK) or winapp CLI on CI. Windows App SDK only if the launcher gets a UI.

BINARY_NAME_MACOS="Keep Command.app"

BINARY_NAME_WINDOWS=Keep Command.exe
APP_ID_WINDOWS=com.keepcommand.aa

APP_NAME="Keep Command"
VERSION=0.1.1
BUILD_NO=2

build-macos:
	rm -rf ${BINARY_NAME_MACOS}
	fyne package -appVersion ${VERSION} -appBuild ${BUILD_NO} -name ${APP_NAME} -release -icon Icon.png

build-windows:
	rm ${BINARY_NAME_WINDOWS}
	fyne package -os windows -name ${BINARY_NAME_WINDOWS} -appID ${APP_ID_WINDOWS} -release

create-dmg:
	create-dmg 'Keep Command.app'
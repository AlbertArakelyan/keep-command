package newfolder

import (
	"image/color"

	"fyne.io/fyne/v2"
	"fyne.io/fyne/v2/canvas"
	"fyne.io/fyne/v2/container"
	"fyne.io/fyne/v2/layout"
	"fyne.io/fyne/v2/widget"
	"github.com/AlbertArakelyan/keep-command/constants"
)

func NewFolderPage() *fyne.Container {
	createBarTitle := canvas.NewText("Create new folder", nil)
	createBarTitle.Alignment = fyne.TextAlignCenter
	createBarTitle.TextSize = constants.PageTitleFontSize
	createBarTitle.TextStyle = fyne.TextStyle{Bold: true}

	backButton := widget.NewButton("⬅️ Back", func() {})

	createBar := container.NewHBox(
		createBarTitle,
		layout.NewSpacer(),
		backButton,
	)

	newFolderPageContent := container.NewVBox(
		createBar,
		canvas.NewLine(color.White),
	)

	return newFolderPageContent
}

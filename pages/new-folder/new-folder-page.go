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

	titleEntry := widget.NewEntry()
	titleEntry.SetPlaceHolder("Folder Title")

	descriptionEntry := widget.NewMultiLineEntry()
	descriptionEntry.SetPlaceHolder("Folder Description")

	tasgEntry := widget.NewEntry()
	tasgEntry.SetPlaceHolder("Tags")

	saveFolderButton := widget.NewButton("💾 Save Folder", func() {})
	// saveFolderButton.Importance = widget.HighImportance

	formContainer := container.NewVBox(
		titleEntry,
		descriptionEntry,
		container.NewVBox(
			tasgEntry,
			widget.NewLabel("*Separate by commas, e.g. go,docker,javascript"),
		),
		saveFolderButton,
	)

	newFolderPageContent := container.NewVBox(
		createBar,
		canvas.NewLine(color.White),
		formContainer,
	)

	return newFolderPageContent
}

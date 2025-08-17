package newcommand

import (
	"image/color"

	"fyne.io/fyne/v2"
	"fyne.io/fyne/v2/canvas"
	"fyne.io/fyne/v2/container"
	"fyne.io/fyne/v2/layout"
	"fyne.io/fyne/v2/widget"
	"github.com/AlbertArakelyan/keep-command/constants"
)

func NewCommandPage() *fyne.Container {
	createBarTitle := canvas.NewText("Create new command", nil)
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
	titleEntry.SetPlaceHolder("Command Title")

	descriptionEntry := widget.NewMultiLineEntry()
	descriptionEntry.SetPlaceHolder("Command Description")

	commandEntry := widget.NewMultiLineEntry()
	commandEntry.SetPlaceHolder("Command")
	commandEntry.SetMinRowsVisible(7)

	tasgEntry := widget.NewEntry()
	tasgEntry.SetPlaceHolder("Tags")

	saveCommandButton := widget.NewButton("💾 Save Command", func() {})
	// saveCommandButton.Importance = widget.HighImportance

	formContainer := container.NewVBox(
		titleEntry,
		descriptionEntry,
		commandEntry,
		container.NewVBox(
			tasgEntry,
			widget.NewLabel("*Separate by commas, e.g. go,docker,javascript"),
		),
		saveCommandButton,
	)

	newCommandPageContent := container.NewVBox(
		createBar,
		canvas.NewLine(color.White),
		formContainer,
	)

	return newCommandPageContent
}

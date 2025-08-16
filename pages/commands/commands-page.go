package commands

import (
	"image/color"

	"fyne.io/fyne/v2"
	"fyne.io/fyne/v2/canvas"
	"fyne.io/fyne/v2/container"
	"fyne.io/fyne/v2/layout"
	"fyne.io/fyne/v2/theme"
	"fyne.io/fyne/v2/widget"
	"github.com/AlbertArakelyan/keep-command/constants"
	"github.com/AlbertArakelyan/keep-command/state"
)

func CommandsPage() *fyne.Container {
	if state.SelectedFolder == nil {
		return container.NewVBox(
			widget.NewLabel("No folder selected"),
		)
	}

	title := canvas.NewText("🗂 "+state.SelectedFolder.Name, nil)
	title.Alignment = fyne.TextAlignCenter
	title.TextSize = constants.PageTitleFontSize
	title.TextStyle = fyne.TextStyle{Bold: true}

	backButton := widget.NewButton("⬅️ Back", func() {
		state.MyApp.SetActiveContent(state.MyApp.HomePage)
	})

	titleBar := container.NewHBox(
		title,
		layout.NewSpacer(),
		backButton,
	)

	newCommandButton := widget.NewButtonWithIcon("New Command", theme.ContentAddIcon(), func() {})

	commandsPageContent := container.NewBorder(
		nil,
		newCommandButton,
		nil,
		nil,
		container.NewVBox(
			titleBar,
			canvas.NewLine(color.White),
		),
	)

	return commandsPageContent
}

package newcommand

import (
	"errors"
	"image/color"

	"fyne.io/fyne/v2"
	"fyne.io/fyne/v2/canvas"
	"fyne.io/fyne/v2/container"
	"fyne.io/fyne/v2/dialog"
	"fyne.io/fyne/v2/layout"
	"fyne.io/fyne/v2/widget"
	"github.com/AlbertArakelyan/keep-command/constants"
	"github.com/AlbertArakelyan/keep-command/models"
	"github.com/AlbertArakelyan/keep-command/state"
)

func NewCommandPage() *fyne.Container {
	createBarTitle := canvas.NewText("Create new command", nil)
	createBarTitle.Alignment = fyne.TextAlignCenter
	createBarTitle.TextSize = constants.PageTitleFontSize
	createBarTitle.TextStyle = fyne.TextStyle{Bold: true}

	backButton := widget.NewButton("⬅️ Back", func() {
		state.MyApp.SetActiveContent(state.MyApp.CommandsPage())
	})

	createBar := container.NewHBox(
		createBarTitle,
		layout.NewSpacer(),
		backButton,
	)

	titleEntry := widget.NewEntry()
	titleEntry.SetPlaceHolder("Command Title *")

	descriptionEntry := widget.NewMultiLineEntry()
	descriptionEntry.SetPlaceHolder("Command Description")

	commandEntry := widget.NewMultiLineEntry()
	commandEntry.SetPlaceHolder("Command *")
	commandEntry.SetMinRowsVisible(7)

	tasgEntry := widget.NewEntry()
	tasgEntry.SetPlaceHolder("Tags *")

	saveCommandButton := widget.NewButton("💾 Save Command", func() {
		if titleEntry.Text == "" || commandEntry.Text == "" || tasgEntry.Text == "" {
			dialog.ShowError(
				errors.New("title, command and tags are required"),
				state.MyApp.MainWindow,
			)

			return
		}

		command := models.Command{
			Name:         titleEntry.Text,
			Description:  descriptionEntry.Text,
			CommandValue: commandEntry.Text,
			CommandTags:  tasgEntry.Text,
			FolderId:     state.SelectedFolder.ID,
		}

		err := command.Create()
		if err != nil {
			dialog.ShowError(err, state.MyApp.MainWindow)

			return
		}

		state.MyApp.SetActiveContent(state.MyApp.CommandsPage())
	})
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

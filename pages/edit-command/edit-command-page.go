package editcommand

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
	"github.com/AlbertArakelyan/keep-command/state"
)

func EditCommandPage() *fyne.Container {
	editBarTitle := canvas.NewText("Create new command", nil)
	editBarTitle.Alignment = fyne.TextAlignCenter
	editBarTitle.TextSize = constants.PageTitleFontSize
	editBarTitle.TextStyle = fyne.TextStyle{Bold: true}

	backButton := widget.NewButton("⬅️ Back", func() {
		state.EditingCommand = nil
		state.MyApp.SetActiveContent(state.MyApp.CommandPage())
	})

	editBar := container.NewHBox(
		editBarTitle,
		layout.NewSpacer(),
		backButton,
	)

	titleEntry := widget.NewEntry()
	titleEntry.SetPlaceHolder("Command Title *")
	titleEntry.SetText(state.EditingCommand.Name)

	descriptionEntry := widget.NewMultiLineEntry()
	descriptionEntry.SetPlaceHolder("Command Description")
	descriptionEntry.SetText(state.EditingCommand.Description)

	commandEntry := widget.NewMultiLineEntry()
	commandEntry.SetPlaceHolder("Command *")
	commandEntry.SetMinRowsVisible(7)
	commandEntry.SetText(state.EditingCommand.CommandValue)

	tasgEntry := widget.NewEntry()
	tasgEntry.SetPlaceHolder("Tags *")
	tasgEntry.SetText(state.EditingCommand.CommandTags)

	saveCommandButton := widget.NewButton("💾 Edit Command", func() {
		if titleEntry.Text == "" || commandEntry.Text == "" || tasgEntry.Text == "" {
			dialog.ShowError(
				errors.New("title, command and tags are required"),
				state.MyApp.MainWindow,
			)

			return
		}

		state.EditingCommand.Name = titleEntry.Text
		state.EditingCommand.Description = descriptionEntry.Text
		state.EditingCommand.CommandValue = commandEntry.Text
		state.EditingCommand.CommandTags = tasgEntry.Text

		err := state.EditingCommand.Update()
		if err != nil {
			dialog.ShowError(err, state.MyApp.MainWindow)

			return
		}

		state.EditingCommand = nil
		state.MyApp.SetActiveContent(state.MyApp.CommandPage())
	})

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

	editCommandPageContent := container.NewVBox(
		editBar,
		canvas.NewLine(color.White),
		formContainer,
	)

	return editCommandPageContent
}

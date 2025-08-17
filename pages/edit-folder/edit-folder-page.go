package editfolder

import (
	"errors"
	"fmt"
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

func EditFolderPage() *fyne.Container {
	editBarTitle := canvas.NewText(fmt.Sprintf("✏️ Editing \"%s\" Folder", state.EditingFolder.Name), nil)
	editBarTitle.Alignment = fyne.TextAlignCenter
	editBarTitle.TextSize = constants.PageTitleFontSize
	editBarTitle.TextStyle = fyne.TextStyle{Bold: true}

	backButton := widget.NewButton("⬅️ Back", func() {
		state.EditingFolder = nil
		state.MyApp.SetActiveContent(state.MyApp.CommandsPage())
	})

	editBar := container.NewHBox(
		editBarTitle,
		layout.NewSpacer(),
		backButton,
	)

	titleEntry := widget.NewEntry()
	titleEntry.SetPlaceHolder("Folder Title *")
	titleEntry.SetText(state.EditingFolder.Name)

	descriptionEntry := widget.NewMultiLineEntry()
	descriptionEntry.SetPlaceHolder("Folder Description")
	descriptionEntry.SetText(state.EditingFolder.Description)

	tasgEntry := widget.NewEntry()
	tasgEntry.SetPlaceHolder("Tags *")
	tasgEntry.SetText(state.EditingFolder.FolderTags)

	editFolderButton := widget.NewButton("💾 Edit Folder", func() {
		if titleEntry.Text == "" || tasgEntry.Text == "" {
			dialog.ShowError(
				errors.New("title and tags are required"),
				state.MyApp.MainWindow,
			)

			return
		}

		state.EditingFolder.Name = titleEntry.Text
		state.EditingFolder.Description = descriptionEntry.Text
		state.EditingFolder.FolderTags = tasgEntry.Text

		err := state.EditingFolder.Update()
		if err != nil {
			dialog.ShowError(
				err,
				state.MyApp.MainWindow,
			)

			return
		}

		state.EditingFolder = nil
		state.MyApp.SetActiveContent(state.MyApp.CommandsPage())
	})
	// editFolderButton.Importance = widget.HighImportance

	formContainer := container.NewVBox(
		titleEntry,
		descriptionEntry,
		container.NewVBox(
			tasgEntry,
			widget.NewLabel("*Separate by commas, e.g. go,docker,javascript"),
		),
		editFolderButton,
	)

	editFolderPageContent := container.NewVBox(
		editBar,
		canvas.NewLine(color.White),
		formContainer,
	)

	return editFolderPageContent
}

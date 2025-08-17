package editfolder

import (
	"fmt"
	"image/color"

	"fyne.io/fyne/v2"
	"fyne.io/fyne/v2/canvas"
	"fyne.io/fyne/v2/container"
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

	editFolderButton := widget.NewButton("💾 Edit Folder", func() {})
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

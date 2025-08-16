package newfolder

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

func NewFolderPage() *fyne.Container {
	createBarTitle := canvas.NewText("Create new folder", nil)
	createBarTitle.Alignment = fyne.TextAlignCenter
	createBarTitle.TextSize = constants.PageTitleFontSize
	createBarTitle.TextStyle = fyne.TextStyle{Bold: true}

	backButton := widget.NewButton("⬅️ Back", func() {
		state.MyApp.SetActiveContent(state.MyApp.HomePage)
	})

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

	saveFolderButton := widget.NewButton("💾 Save Folder", func() {
		if titleEntry.Text == "" {
			dialog.ShowError(
				errors.New("title is required"),
				state.MyApp.MainWindow,
			)

			return
		}

		folder := models.Folder{
			Name:        titleEntry.Text,
			Description: descriptionEntry.Text,
			FolderTags:  tasgEntry.Text,
		}

		err := folder.Create()
		if err != nil {
			dialog.ShowError(err, state.MyApp.MainWindow)

			return
		}

		state.MyApp.SetActiveContent(state.MyApp.HomePage)
	})
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

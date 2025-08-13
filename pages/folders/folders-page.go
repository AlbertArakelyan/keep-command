package folders

import (
	"strconv"

	"fyne.io/fyne/v2"
	"fyne.io/fyne/v2/container"
	"fyne.io/fyne/v2/dialog"
	"fyne.io/fyne/v2/theme"
	"fyne.io/fyne/v2/widget"
	"github.com/AlbertArakelyan/keep-command/models"
	newfolder "github.com/AlbertArakelyan/keep-command/pages/new-folder"
	state "github.com/AlbertArakelyan/keep-command/state"
)

func FoldersPage() *fyne.Container {
	myApp := state.MyApp
	mainWindow := myApp.MainWindow

	folders, err := models.GetFolders()
	if err != nil {
		dialog.ShowError(
			err,
			mainWindow,
		)
	}

	grid := container.NewAdaptiveGrid(3) // Adjust the number of columns as needed
	for _, folder := range folders {
		openButton := widget.NewButtonWithIcon("Open", theme.FolderIcon(), func() {
			dialog.ShowInformation(
				"Folder Details",
				"ID: "+strconv.Itoa(folder.ID)+"\nName: "+folder.Name+"\nDescription: "+folder.Description,
				mainWindow,
			)
		})

		deleteButton := widget.NewButtonWithIcon("Delete", theme.DeleteIcon(), func() {})

		card := widget.NewCard(
			"🗂 "+folder.Name,
			folder.Description,
			container.NewGridWithColumns(2,
				// widget.NewLabel("ID: "+strconv.Itoa(folder.ID)),
				// widget.NewLabel("Created: "+folder.CreatedAt.Format(time.RFC822)),
				// widget.NewLabel("Updated: "+folder.UpdatedAt.Format(time.RFC822)),
				openButton,
				deleteButton,
			),
		)

		grid.Add(container.NewVBox(card)) // NewVBox is for height: auto
	}

	newFolderButton := widget.NewButtonWithIcon("New Folder", theme.ContentAddIcon(), func() {
		myApp.SetActiveContent(newfolder.NewFolderPage())
	})
	newFolderButton.Importance = widget.LowImportance
	newFolderButton.Resize(fyne.NewSize(150, 30))
	newFolderButton.Move(fyne.NewPos(mainWindow.Canvas().Size().Width-newFolderButton.MinSize().Width, mainWindow.Canvas().Size().Height-newFolderButton.MinSize().Height))

	foldersPageContent := container.NewBorder(
		nil,
		newFolderButton,
		nil,
		nil,
		container.NewVScroll(grid),
	)

	return foldersPageContent
}

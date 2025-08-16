package folders

import (
	"fmt"

	"fyne.io/fyne/v2"
	"fyne.io/fyne/v2/container"
	"fyne.io/fyne/v2/dialog"
	"fyne.io/fyne/v2/theme"
	"fyne.io/fyne/v2/widget"
	"github.com/AlbertArakelyan/keep-command/models"
	"github.com/AlbertArakelyan/keep-command/pages/commands"
	state "github.com/AlbertArakelyan/keep-command/state"
)

func FoldersPage() *fyne.Container {
	myApp := state.MyApp
	mainWindow := myApp.MainWindow

	var err error = nil

	state.Folders, err = models.GetFolders()
	if err != nil {
		dialog.ShowError(
			err,
			mainWindow,
		)
	}

	grid := container.NewAdaptiveGrid(3) // Adjust the number of columns as needed
	for _, folder := range state.Folders {
		openButton := widget.NewButtonWithIcon("Open", theme.FolderIcon(), func() {
			state.SelectedFolder = &folder
			myApp.SetActiveContent(commands.CommandsPage())
		})

		deleteButton := widget.NewButtonWithIcon("Delete", theme.DeleteIcon(), func() {
			dialog.ShowConfirm(
				"Delete Folder",
				"Are you sure you want to delete this folder?",
				func(b bool) {
					if b {
						err := models.DeleteFolder(folder.ID)
						if err != nil {
							dialog.ShowError(
								err,
								mainWindow,
							)
						}
						state.Folders, err = models.GetFolders()
						if err != nil {
							dialog.ShowError(
								err,
								mainWindow,
							)
						}
						myApp.SetActiveContent(FoldersPage())
					}
				},
				mainWindow,
			)
		})

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
		if myApp.NewFolderPage == nil {
			fmt.Println("myApp.NewFolderPage is nil")
		}
		myApp.SetActiveContent(myApp.NewFolderPage)
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

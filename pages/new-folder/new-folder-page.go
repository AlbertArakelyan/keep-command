package newfolder

import (
	"fyne.io/fyne/v2"
	"fyne.io/fyne/v2/container"
	"fyne.io/fyne/v2/widget"
)

func NewFolderPage() *fyne.Container {
	newFolderPageContent := container.NewVBox(
		widget.NewLabel("New folder"),
	)

	return newFolderPageContent
}

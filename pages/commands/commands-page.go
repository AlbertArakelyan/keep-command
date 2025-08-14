package commands

import (
	"fyne.io/fyne/v2"
	"fyne.io/fyne/v2/container"
	"fyne.io/fyne/v2/widget"
	"github.com/AlbertArakelyan/keep-command/state"
)

func CommandsPage() *fyne.Container {
	if state.SelectedFolder == nil {
		return container.NewVBox(
			widget.NewLabel("No folder selected"),
		)
	}

	return container.NewVBox(
		widget.NewLabel(state.SelectedFolder.Name),
	)
}

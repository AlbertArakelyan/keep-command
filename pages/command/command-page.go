package command

import (
	"fyne.io/fyne/v2"
	"fyne.io/fyne/v2/container"
	"fyne.io/fyne/v2/widget"
	"github.com/AlbertArakelyan/keep-command/state"
)

func CommandPage() *fyne.Container {
	return container.NewVBox(
		widget.NewLabel(state.SelectedCommand.CommandValue),
	)
}

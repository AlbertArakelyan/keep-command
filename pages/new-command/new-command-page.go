package newcommand

import (
	"fyne.io/fyne/v2"
	"fyne.io/fyne/v2/container"
	"fyne.io/fyne/v2/widget"
)

func NewCommandPage() *fyne.Container {
	return container.NewVBox(
		widget.NewLabel("New Command"),
	)
}

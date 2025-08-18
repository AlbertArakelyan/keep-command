package mainlayout

import (
	"fyne.io/fyne/v2"
	"fyne.io/fyne/v2/container"
)

func NewMainLayout(mainWindow fyne.Window) func(page *fyne.Container) *fyne.Container {
	return func(page *fyne.Container) *fyne.Container {
		return container.NewBorder(nil, nil, nil, nil, page)
	}
}

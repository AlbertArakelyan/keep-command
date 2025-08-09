package myapp

import (
	"fyne.io/fyne/v2"
	"github.com/AlbertArakelyan/keep-command/layout"
)

type App struct {
	App           fyne.App
	MainWindow    fyne.Window
	ActiveContent *fyne.Container
	HomePage      *fyne.Container // folders-page
}

var MyApp App

func (app *App) MakeUI() {
	mainLayout := layout.NewMainLayout(app.MainWindow)

	app.MainWindow.SetContent(mainLayout(app.ActiveContent))
}

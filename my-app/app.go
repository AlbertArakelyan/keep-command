package myapp

import (
	"fyne.io/fyne/v2"
	"github.com/AlbertArakelyan/keep-command/layout"
	// "github.com/AlbertArakelyan/keep-command/pages/folders"
)

type App struct {
	App           fyne.App
	MainWindow    fyne.Window
	ActiveContent *fyne.Container
}

var MyApp App

func (app *App) MakeUI() {
	mainLayout := layout.NewMainLayout(app.MainWindow)

	// foldersPage := folders.FoldersPage(app.MainWindow)

	app.MainWindow.SetContent(mainLayout(app.ActiveContent))
}

package myapp

import (
	"fyne.io/fyne/v2"
	"github.com/AlbertArakelyan/keep-command/layouts"
	"github.com/AlbertArakelyan/keep-command/models"
)

type App struct {
	App            fyne.App
	MainWindow     fyne.Window
	SelectedFolder models.Folder
	ActiveContent  *fyne.Container
	HomePage       *fyne.Container // folders-page
}

var MyApp App

func (app *App) MakeUI() {
	mainLayout := layouts.NewMainLayout(app.MainWindow)

	app.MainWindow.SetContent(mainLayout(app.ActiveContent))
}

func (app *App) SetActiveContent(page *fyne.Container) {
	app.ActiveContent = page
	app.MainWindow.SetContent(layouts.NewMainLayout(app.MainWindow)(app.ActiveContent))
}

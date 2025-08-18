package state

import (
	"fyne.io/fyne/v2"
	"github.com/AlbertArakelyan/keep-command/layouts"
	"github.com/AlbertArakelyan/keep-command/models"
)

type App struct {
	App            fyne.App
	MainWindow     fyne.Window
	Clipboard      fyne.Clipboard
	SelectedFolder models.Folder
	ActiveContent  *fyne.Container
	HomePage       *fyne.Container // folders-page
	AppPages
}

type AppPages struct {
	FoldersPage     func() *fyne.Container
	NewFolderPage   *fyne.Container
	CommandsPage    func() *fyne.Container
	NewCommandPage  *fyne.Container
	EditFolderPage  func() *fyne.Container
	CommandPage     func() *fyne.Container
	EditCommandPage func() *fyne.Container
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

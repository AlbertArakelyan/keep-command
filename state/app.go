package state

import (
	"fyne.io/fyne/v2"
	mainlayout "github.com/AlbertArakelyan/keep-command/layouts/main-layout"
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
	mainLayout := mainlayout.NewMainLayout(app.MainWindow)

	app.MainWindow.SetContent(mainLayout(app.ActiveContent))
}

func (app *App) SetActiveContent(page *fyne.Container) {
	app.ActiveContent = page
	app.MainWindow.SetContent(mainlayout.NewMainLayout(app.MainWindow)(app.ActiveContent))
}

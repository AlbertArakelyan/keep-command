package main

import (
	"fyne.io/fyne/v2"
	"fyne.io/fyne/v2/app"
	"github.com/AlbertArakelyan/keep-command/constants"
	"github.com/AlbertArakelyan/keep-command/db"
	"github.com/AlbertArakelyan/keep-command/pages/commands"
	"github.com/AlbertArakelyan/keep-command/pages/folders"
	newcommand "github.com/AlbertArakelyan/keep-command/pages/new-command"
	newfolder "github.com/AlbertArakelyan/keep-command/pages/new-folder"
	state "github.com/AlbertArakelyan/keep-command/state"
)

func main() {
	state.MyApp.App = app.NewWithID("com.keepcommand.aa")
	state.MyApp.MainWindow = state.MyApp.App.NewWindow("Keep Command")
	state.MyApp.MainWindow.Resize(fyne.NewSize(constants.WinWidth, constants.WinHeight))

	db.InitDB()

	registerPages()
	setInitialPage()

	state.MyApp.MakeUI()

	state.MyApp.MainWindow.ShowAndRun()
}

func setInitialPage() {
	state.MyApp.HomePage = folders.FoldersPage()
	state.MyApp.ActiveContent = folders.FoldersPage() // TODO change with state.MyApp.HomePage
}

func registerPages() {
	state.MyApp.FoldersPage = folders.FoldersPage
	state.MyApp.NewFolderPage = newfolder.NewFolderPage()
	state.MyApp.CommandsPage = commands.CommandsPage
	state.MyApp.NewCommandPage = newcommand.NewCommandPage()
}

package main

import (
	"fyne.io/fyne/v2"
	"fyne.io/fyne/v2/app"
	"fyne.io/fyne/v2/theme"
	"github.com/AlbertArakelyan/keep-command/constants"
	"github.com/AlbertArakelyan/keep-command/db"
	"github.com/AlbertArakelyan/keep-command/pages/command"
	"github.com/AlbertArakelyan/keep-command/pages/commands"
	editfolder "github.com/AlbertArakelyan/keep-command/pages/edit-folder"
	"github.com/AlbertArakelyan/keep-command/pages/folders"
	newcommand "github.com/AlbertArakelyan/keep-command/pages/new-command"
	newfolder "github.com/AlbertArakelyan/keep-command/pages/new-folder"
	state "github.com/AlbertArakelyan/keep-command/state"
)

func main() {
	state.MyApp.App = app.NewWithID("com.keepcommand.aa")
	state.MyApp.App.Settings().SetTheme(theme.DarkTheme()) // TODO: temporary, remove once our own theme is created
	state.MyApp.MainWindow = state.MyApp.App.NewWindow("Keep Command")
	state.MyApp.MainWindow.Resize(fyne.NewSize(constants.WinWidth, constants.WinHeight))
	state.MyApp.Clipboard = state.MyApp.App.Clipboard()

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
	state.MyApp.EditFolderPage = editfolder.EditFolderPage
	state.MyApp.CommandPage = command.CommandPage
}

package main

import (
	"fyne.io/fyne/v2"
	"fyne.io/fyne/v2/app"
	"github.com/AlbertArakelyan/keep-command/constants"
	"github.com/AlbertArakelyan/keep-command/db"
	"github.com/AlbertArakelyan/keep-command/pages/folders"
	state "github.com/AlbertArakelyan/keep-command/state"
)

func main() {
	state.MyApp.App = app.NewWithID("com.keepcommand.aa")
	state.MyApp.MainWindow = state.MyApp.App.NewWindow("Keep Command")
	state.MyApp.MainWindow.Resize(fyne.NewSize(constants.WinWidth, constants.WinHeight))

	setInitialPage()

	db.InitDB()

	state.MyApp.MakeUI()

	state.MyApp.MainWindow.ShowAndRun()
}

func setInitialPage() {
	state.MyApp.HomePage = folders.FoldersPage()
	state.MyApp.ActiveContent = folders.FoldersPage()
}

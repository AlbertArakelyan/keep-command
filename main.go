package main

import (
	"fyne.io/fyne/v2"
	"fyne.io/fyne/v2/app"
	"github.com/AlbertArakelyan/keep-command/constants"
	"github.com/AlbertArakelyan/keep-command/db"
	myapp "github.com/AlbertArakelyan/keep-command/my-app"
	"github.com/AlbertArakelyan/keep-command/pages/folders"
)

func main() {
	myapp.MyApp.App = app.NewWithID("com.keepcommand.aa")
	myapp.MyApp.MainWindow = myapp.MyApp.App.NewWindow("Keep Command")
	myapp.MyApp.MainWindow.Resize(fyne.NewSize(constants.WinWidth, constants.WinHeight))

	myapp.MyApp.ActiveContent = folders.FoldersPage()

	db.InitDB()

	myapp.MyApp.MakeUI()

	myapp.MyApp.MainWindow.ShowAndRun()
}

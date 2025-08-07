package main

import (
	"fyne.io/fyne/v2"
	"fyne.io/fyne/v2/app"
	"github.com/AlbertArakelyan/keep-command/constants"
	"github.com/AlbertArakelyan/keep-command/db"
)

type App struct {
	App        fyne.App
	MainWindow fyne.Window
}

func main() {
	var myApp App

	myApp.App = app.NewWithID("com.keepcommand.aa")
	myApp.MainWindow = myApp.App.NewWindow("Keep Command")
	myApp.MainWindow.Resize(fyne.NewSize(constants.WinWidth, constants.WinHeight))

	db.InitDB()

	myApp.makeUI()

	myApp.MainWindow.ShowAndRun()
}

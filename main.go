package main

import (
	"fyne.io/fyne/v2"
	"fyne.io/fyne/v2/app"
)

type App struct {
	App        fyne.App
	MainWindow fyne.Window
}

func main() {
	var myApp App

	myApp.App = app.NewWithID("com.keepcommand.aa")
	myApp.MainWindow = myApp.App.NewWindow("Keep Command")
	myApp.MainWindow.Resize(fyne.NewSize(800, 600))

	myApp.MainWindow.ShowAndRun()
}

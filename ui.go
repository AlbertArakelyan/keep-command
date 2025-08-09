package main

import (
	"github.com/AlbertArakelyan/keep-command/layout"
	"github.com/AlbertArakelyan/keep-command/pages/folders"
)

func (app *App) makeUI() {
	mainLayout := layout.NewMainLayout(app.MainWindow)

	foldersPage := folders.FoldersPage(app.MainWindow)

	app.MainWindow.SetContent(mainLayout(foldersPage))
}

package main

import "github.com/AlbertArakelyan/keep-command/pages/folders"

func (app *App) makeUI() {
	foldersPage := folders.FoldersPage(app.MainWindow)

	app.MainWindow.SetContent(foldersPage)
}

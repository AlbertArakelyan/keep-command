package helpers

import (
	"fyne.io/fyne/v2"
	"github.com/AlbertArakelyan/keep-command/constants"
	"github.com/AlbertArakelyan/keep-command/pages/folders"
	newfolder "github.com/AlbertArakelyan/keep-command/pages/new-folder"
)

func GetActiveContent(page constants.PageTypes) *fyne.Container {
	switch page {
	case constants.FoldersPageType:
		return folders.FoldersPage()
	case constants.NewFolderPageType:
		return newfolder.NewFolderPage()
	default:
		return folders.FoldersPage()
	}
}

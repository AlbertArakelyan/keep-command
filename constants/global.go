package constants

// Sizes
var WinWidth = float32(1280)
var WinHeight = float32(720)
var PageTitleFontSize = float32(24)

// Page Types
type PageTypes string

const (
	FoldersPageType PageTypes = "folders"
	NewFolderPageType PageTypes = "new-folder"
)
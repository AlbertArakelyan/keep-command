package command

import (
	"fmt"
	"image/color"

	"fyne.io/fyne/v2"
	"fyne.io/fyne/v2/canvas"
	"fyne.io/fyne/v2/container"
	"fyne.io/fyne/v2/layout"
	"fyne.io/fyne/v2/theme"
	"fyne.io/fyne/v2/widget"
	"github.com/AlbertArakelyan/keep-command/constants"
	"github.com/AlbertArakelyan/keep-command/state"
)

func CommandPage() *fyne.Container {
	title := canvas.NewText("Command Details", nil)
	title.Alignment = fyne.TextAlignCenter
	title.TextSize = constants.PageTitleFontSize
	title.TextStyle = fyne.TextStyle{Bold: true}

	backButton := widget.NewButton("⬅️ Back", func() {
		state.SelectedCommand = nil
		state.MyApp.SetActiveContent(state.MyApp.CommandsPage())
	})

	editButton := widget.NewButton("✏️ Edit", func() {
		state.EditingCommand = state.SelectedCommand
		state.MyApp.SetActiveContent(state.MyApp.EditCommandPage())
	})

	titleBar := container.NewHBox(
		title,
		layout.NewSpacer(),
		editButton,
		backButton,
	)

	commandPreview := widget.NewRichTextFromMarkdown(fmt.Sprintf("```bash\n%s\n```\n", state.SelectedCommand.CommandValue))
	borderedCommandPreview := container.NewBorder(
		canvas.NewRectangle(color.Gray{Y: 64}),
		canvas.NewRectangle(color.Gray{Y: 64}),
		canvas.NewRectangle(color.Gray{Y: 64}),
		canvas.NewRectangle(color.Gray{Y: 64}),
		commandPreview,
	)

	copyButton := widget.NewButtonWithIcon("Copy", theme.ContentCopyIcon(), func() {
		state.MyApp.Clipboard.SetContent(state.SelectedCommand.CommandValue)
	})

	detailsBar := container.NewVBox(
		canvas.NewText(fmt.Sprintf("Title: %s", state.SelectedCommand.Name), nil),              // TODO: style better, with separate title and value
		canvas.NewText(fmt.Sprintf("Description: %s", state.SelectedCommand.Description), nil), // TODO: style better, with separate title and value
		container.NewVBox(
			canvas.NewText("Command:", nil),
			borderedCommandPreview,
			copyButton,
		),
		canvas.NewText(fmt.Sprintf("Tags: %s", state.SelectedCommand.CommandTags), nil), // TODO: style better, with separate title and value
	)

	commandPageContent := container.NewVBox(
		titleBar,
		canvas.NewLine(color.White),
		detailsBar,
	)

	return commandPageContent
}

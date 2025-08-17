package commands

import (
	"fmt"
	"image/color"

	"fyne.io/fyne/v2"
	"fyne.io/fyne/v2/canvas"
	"fyne.io/fyne/v2/container"
	"fyne.io/fyne/v2/dialog"
	"fyne.io/fyne/v2/layout"
	"fyne.io/fyne/v2/theme"
	"fyne.io/fyne/v2/widget"
	"github.com/AlbertArakelyan/keep-command/constants"
	"github.com/AlbertArakelyan/keep-command/models"
	"github.com/AlbertArakelyan/keep-command/state"
)

func CommandsPage() *fyne.Container {
	myApp := state.MyApp

	var err error = nil

	state.Commands, err = models.GetCommands(state.SelectedFolder.ID)
	if err != nil {
		dialog.ShowError(
			err,
			myApp.MainWindow,
		)
	}

	grid := container.NewAdaptiveGrid(3) // Adjust the number of columns as needed
	for _, command := range state.Commands {
		openButton := widget.NewButtonWithIcon("Open", theme.FolderOpenIcon(), func() {})

		deleteButton := widget.NewButtonWithIcon("Delete", theme.DeleteIcon(), func() {
			dialog.ShowConfirm(
				"Delete Command",
				"Are you sure you want to delete this command?",
				func(b bool) {
					if b {
						// err := models.DeleteCommand(command.ID)
						// if err != nil {
						// 	dialog.ShowError(
						// 		err,
						// 		myApp.MainWindow,
						// 	)
						// }
					}
				},
				myApp.MainWindow,
			)
		})

		commandPreview := widget.NewRichTextFromMarkdown(fmt.Sprintf("```bash\n%s\n```\n", command.CommandValue))
		borderedCommandPreview := container.NewBorder(
			nil,
			nil,
			nil,
			nil,
			commandPreview,
		)

		card := widget.NewCard(
			command.Name,
			command.Description,
			container.NewVBox(
				borderedCommandPreview,
				container.NewGridWithColumns(2,
					// widget.NewLabel("ID: "+strconv.Itoa(command.ID)),
					// widget.NewLabel("Created: "+command.CreatedAt.Format(time.RFC822)),
					// widget.NewLabel("Updated: "+command.UpdatedAt.Format(time.RFC822)),
					openButton,
					deleteButton,
				),
			),
		)

		grid.Add(container.NewVBox(card))
	}

	if state.SelectedFolder == nil {
		return container.NewVBox(
			widget.NewLabel("No folder selected"),
		)
	}

	title := canvas.NewText("🗂 "+state.SelectedFolder.Name, nil)
	title.Alignment = fyne.TextAlignCenter
	title.TextSize = constants.PageTitleFontSize
	title.TextStyle = fyne.TextStyle{Bold: true}

	backButton := widget.NewButton("⬅️ Back", func() {
		state.MyApp.SetActiveContent(state.MyApp.HomePage)
		state.SelectedFolder = nil
	})

	titleBar := container.NewHBox(
		title,
		layout.NewSpacer(),
		backButton,
	)

	newCommandButton := widget.NewButtonWithIcon("New Command", theme.ContentAddIcon(), func() {
		myApp.SetActiveContent(myApp.NewCommandPage)
	})

	commandsPageContent := container.NewBorder(
		container.NewVBox(
			titleBar,
			canvas.NewLine(color.White),
		),
		newCommandButton,
		nil,
		nil,
		container.NewVScroll(grid),
	)

	return commandsPageContent
}

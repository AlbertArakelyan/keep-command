package folders

import (
	"strconv"
	"time"

	"fyne.io/fyne/v2"
	"fyne.io/fyne/v2/container"
	"fyne.io/fyne/v2/dialog"
	"fyne.io/fyne/v2/widget"
)

func FoldersPage(mainWindow fyne.Window) fyne.CanvasObject {
	folders := []struct {
		Name        string
		Description string
		ID          int
		CreatedAt   time.Time
		UpdatedAt   time.Time
	}{
		{"Test1", "Test folder 1", 1, time.Now(), time.Now()},
		{"Test2", "Test folder 2", 2, time.Now(), time.Now()},
		{"Test3", "Test folder 3", 3, time.Now(), time.Now()},
		{"Test1", "Test folder 1", 1, time.Now(), time.Now()},
		{"Test2", "Test folder 2", 2, time.Now(), time.Now()},
		{"Test3", "Test folder 3", 3, time.Now(), time.Now()},
		{"Test1", "Test folder 1", 1, time.Now(), time.Now()},
		{"Test2", "Test folder 2", 2, time.Now(), time.Now()},
		{"Test3", "Test folder 3", 3, time.Now(), time.Now()},
		{"Test1", "Test folder 1", 1, time.Now(), time.Now()},
		{"Test2", "Test folder 2", 2, time.Now(), time.Now()},
		{"Test3", "Test folder 3", 3, time.Now(), time.Now()},
		{"Test1", "Test folder 1", 1, time.Now(), time.Now()},
		{"Test2", "Test folder 2", 2, time.Now(), time.Now()},
		{"Test3", "Test folder 3", 3, time.Now(), time.Now()},
		{"Test1", "Test folder 1", 1, time.Now(), time.Now()},
		{"Test2", "Test folder 2", 2, time.Now(), time.Now()},
		{"Test3", "Test folder 3", 3, time.Now(), time.Now()},
		{"Test1", "Test folder 1", 1, time.Now(), time.Now()},
		{"Test2", "Test folder 2", 2, time.Now(), time.Now()},
		{"Test3", "Test folder 3", 3, time.Now(), time.Now()},
	}

	grid := container.NewAdaptiveGrid(3) // Adjust the number of columns as needed
	for _, folder := range folders {
		card := widget.NewCard(
			folder.Name,
			folder.Description,
			container.NewVBox(
				// widget.NewLabel("ID: "+strconv.Itoa(folder.ID)),
				// widget.NewLabel("Created: "+folder.CreatedAt.Format(time.RFC822)),
				// widget.NewLabel("Updated: "+folder.UpdatedAt.Format(time.RFC822)),
				widget.NewButton("Open", func() {
					dialog.ShowInformation(
						"Folder Details",
						"ID: "+strconv.Itoa(folder.ID)+"\nName: "+folder.Name+"\nDescription: "+folder.Description,
						mainWindow,
					)
				}),
			),
		)

		grid.Add(card)
	}

	foldersPageContent := container.NewScroll(grid)

	return foldersPageContent
}

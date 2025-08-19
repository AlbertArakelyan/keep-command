package models

import (
	"time"

	sqlitedb "github.com/AlbertArakelyan/keep-command/db/sqlite-db"
)

type Folder struct {
	ID          int    `gorm:"primary_key;auto_increment"`
	Name        string `gorm:"not null"`
	Description string
	FolderTags  string    `gorm:"not null"`
	CreatedAt   time.Time `gorm:"autoCreateTime"`
	UpdatedAt   time.Time `gorm:"autoUpdateTime"`
}

func (folder *Folder) Create() error {
	return sqlitedb.DB.Create(&folder).Error
}

func GetFolders() ([]Folder, error) {
	var folders []Folder
	err := sqlitedb.DB.Order("created_at desc").Find(&folders).Error

	return folders, err
}

func GetFoldersBySearch(search string) ([]Folder, error) {
	var folders []Folder
	err := sqlitedb.DB.Distinct("folders.*").Joins("LEFT JOIN commands ON folders.id = commands.folder_id").Where("folders.name LIKE ? OR folders.folder_tags LIKE ? OR commands.name LIKE ? OR commands.command_tags LIKE ?", "%"+search+"%", "%"+search+"%", "%"+search+"%", "%"+search+"%").Order("folders.created_at desc").Find(&folders).Error

	return folders, err
}

func DeleteFolder(id int) error {
	return sqlitedb.DB.Where("id = ?", id).Delete(&Folder{}).Error
}

func (folder *Folder) Update() error {
	return sqlitedb.DB.Save(&folder).Error
}

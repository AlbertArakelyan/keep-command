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
	err := sqlitedb.DB.Find(&folders).Error
	
	return folders, err
}

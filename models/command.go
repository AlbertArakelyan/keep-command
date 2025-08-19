package models

import (
	"time"

	sqlitedb "github.com/AlbertArakelyan/keep-command/db/sqlite-db"
)

type Command struct {
	ID           int    `gorm:"primary_key;auto_increment"`
	Name         string `gorm:"not null"`
	Description  string
	CommandValue string    `gorm:"not null"`
	CommandTags  string    `gorm:"not null"`
	FolderId     int       `gorm:"not null"`
	Folder       Folder    `gorm:"foreignKey:FolderId;references:ID;constraint:OnUpdate:CASCADE,OnDelete:CASCADE"`
	CreatedAt    time.Time `gorm:"autoCreateTime"`
	UpdatedAt    time.Time `gorm:"autoUpdateTime"`
}

func (command *Command) Create() error {
	return sqlitedb.DB.Create(&command).Error
}

func GetCommands(folderId int) ([]Command, error) {
	var commands []Command
	err := sqlitedb.DB.Where("folder_id = ?", folderId).Order("created_at desc").Find(&commands).Error

	return commands, err
}

func GetCommandsBySearch(search string, folderId int) ([]Command, error) {
	var commands []Command
	err := sqlitedb.DB.Where("folder_id = ?", folderId).Where("name LIKE ? OR command_tags LIKE ? OR command_value LIKE ?", "%"+search+"%", "%"+search+"%", "%"+search+"%", "%"+search+"%").Order("created_at desc").Find(&commands).Error

	return commands, err
}

func DeleteCommand(id int) error {
	return sqlitedb.DB.Where("id = ?", id).Delete(&Command{}).Error
}

func (command *Command) Update() error {
	return sqlitedb.DB.Save(&command).Error
}

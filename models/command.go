package models

import "time"

type Command struct {
	ID           int    `gorm:"primary_key;auto_increment"`
	Name         string `gorm:not null;unique" binding:"required"`
	Description  string
	CommandValue string    `gorm:"not null"`
	CommandTags  string    `gorm:"not null"`
	FolderId     int       `gorm:"not null"`
	Folder       Folder    `gorm:"foreignKey:FolderId;references:ID;constraint:OnUpdate:CASCADE,OnDelete:CASCADE"`
	CreatedAt    time.Time `gorm:"autoCreateTime"`
	UpdatedAt    time.Time `gorm:"autoUpdateTime"`
}

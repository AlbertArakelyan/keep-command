package models

import "time"

type Folder struct {
	ID          int    `gorm:"primary_key;auto_increment"`
	Name        string `gorm:not null;unique"`
	Description string
	CreatedAt   time.Time `gorm:"autoCreateTime"`
	UpdatedAt   time.Time `gorm:"autoUpdateTime"`
}

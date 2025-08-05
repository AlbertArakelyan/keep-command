package db

import (
	"github.com/AlbertArakelyan/keep-command/models"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var DB *gorm.DB

func InitDB() {
	var err error

	DB, err = gorm.Open(sqlite.Open("sql.db"), &gorm.Config{})
	if err != nil {
		panic(err)
	}

	// Automigrate models
	err = DB.AutoMigrate(&models.Folder{}, &models.Command{})
	if err != nil {
		panic(err)
	}
}

package db

import (
	sqlitedb "github.com/AlbertArakelyan/keep-command/db/sqlite-db"
	"github.com/AlbertArakelyan/keep-command/models"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

func InitDB() {
	var err error

	sqlitedb.DB, err = gorm.Open(sqlite.Open("sql.db"), &gorm.Config{})
	if err != nil {
		panic(err)
	}

	// Automigrate models
	err = sqlitedb.DB.AutoMigrate(&models.Folder{}, &models.Command{})
	if err != nil {
		panic(err)
	}
}

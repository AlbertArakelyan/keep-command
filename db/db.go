package db

import (
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
}

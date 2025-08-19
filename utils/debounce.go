package utils

import (
	"sync"
	"time"
)

type Debouncer struct {
	delay time.Duration
	timer *time.Timer
	mu    sync.Mutex
}

func NewDebouncer(delay time.Duration) *Debouncer {
	return &Debouncer{delay: delay}
}

func (d *Debouncer) Call(f func()) {
	d.mu.Lock()
	defer d.mu.Unlock()

	if d.timer != nil {
		d.timer.Stop()
	}

	d.timer = time.AfterFunc(d.delay, f)
}

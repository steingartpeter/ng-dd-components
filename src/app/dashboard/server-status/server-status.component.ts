import { Component, effect, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit, OnDestroy {
  currentStatus = signal<'online' | 'offline' | 'unknown'>('online');
  private interval?: ReturnType<typeof setInterval>;

  constructor() {
    effect(() => {
      console.log(`Current status: ${this.currentStatus()}`);
    });
  }

  ngOnInit() {
    this.interval = setInterval(() => {
      const rnd = Math.random(); // 0 - 0.99999999
      if (rnd < 0.5) {
        this.currentStatus.set('online');
      } else if (rnd < 0.9) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
      console.log(`NEW STATE: ${this.currentStatus}`);
    }, 5000);
  }

  ngOnDestroy() {
    // throw new Error('Method not implemented.');
    clearTimeout(this.interval);
  }
}

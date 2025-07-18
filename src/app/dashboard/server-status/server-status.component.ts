import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit {
  currentStatus:'online'|'offline'|'unknown' = 'online';

  constructor(){
    
  }

  ngOnInit(){
    setInterval(()=>{
      const rnd = Math.random(); // 0 - 0.99999999
      if(rnd < 0.5){
        this.currentStatus = 'online';
      }else if(rnd < .9){
        this.currentStatus = 'offline';
      }else{
        this.currentStatus = 'unknown';
      }
      console.log(`NEW STATE: ${this.currentStatus}`);
    },5000);
  }
}

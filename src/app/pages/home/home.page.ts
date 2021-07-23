import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('playerVideo') playerVideo: ElementRef;

  feed: any;

  constructor() {
    this.feed = [
      {
        username:'@karanne 1-28',
        description:'#avicii #wflove',
        song:'Avicii - Waiting for love (ft. Martin Garrix)',
        video: '../../../assets/videos/pexels.mp4'
      },
    ];
   }

  ngOnInit() {

  }

}

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('video') public videoTag: ElementRef;
  
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    /* if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
          this.videoTag.nativeElement.srcObject = stream;
          this.videoTag.nativeElement.play();
      });
    } */
  }

  btn_click() {
    console.log("BOTON CLIQUEADO");
  }
}

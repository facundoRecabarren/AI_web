import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-fake-cursor',
  templateUrl: './fake-cursor.component.html',
  styleUrls: ['./fake-cursor.component.scss']
})
export class FakeCursorComponent implements OnInit {

  x: number = 10;
  y: number = 95;
  @ViewChild('fakeCursor') public fakeCursor: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    document.addEventListener('click', (event) => {
      console.log("EVENTO CLICK: ", event);
    })

    this.fakeCursor.nativeElement.setAttribute('style', `transform: translate(${this.x}px, ${this.y}px)`);
    setTimeout(() => {
      this.x = 40;
      this.y = 125;
      this.fakeCursor.nativeElement.setAttribute('style', `transform: translate(${this.x}px, ${this.y}px)`);

      let element: any = document.elementFromPoint(this.x-1, this.y-1);
      element.click();
      console.log("AXES CLICKED: ", this.x, this.y);
      console.log("ELEMENTO: ", element);
    }, 2000);
  }

}

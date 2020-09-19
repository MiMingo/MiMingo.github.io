import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {
    let time = 0;
    setInterval(() => {
      time = time + .5 % 360;
      console.log();
      this.renderer.setStyle(this.el.nativeElement, 'background', `conic-gradient(from ${time}deg, #2c2c54, #b33939`);
    }, 10);
  }

}

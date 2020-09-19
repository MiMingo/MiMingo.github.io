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
    let x = 50;
    let y = 50;
    setInterval(() => {
      time = time + .5 % 360;
      if (Math.floor(Math.random() * 1000) % 300 === 0) { x = Math.random() * 100; }
      if (Math.floor(Math.random() * 1000) % 650 === 0) { y = Math.random() * 100; }
      this.renderer.setStyle(this.el.nativeElement, 'background', `conic-gradient(from ${time}deg at ${x}% ${y}%, #2c2c54, #b33939`);
    }, 10);
  }

}

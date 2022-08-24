import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'instello-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss']
})
export class UserAvatarComponent implements OnInit {

  @Input() size = 96;
  @Input() imagePadding = 4;
  @Input() image = '';
  @Input() imageAltText = '';

  borderRadius = Math.round(this.size / 2);
  childDivSize = this.size - (this.imagePadding * 2);
  imageSize = this.childDivSize - this.borderRadius;
  gradientDivStyle = {}
  imageStyle = {}

  constructor() {
  }

  ngOnInit(): void {
    this.gradientDivStyle = {
      width: `${this.size}px`,
      height: `${this.size}px`,
      borderRadius: `${this.borderRadius}px`,
      padding: `${this.imagePadding}px`
    }

    this.imageStyle = {
      width: `${this.childDivSize}px`,
      height: `${this.childDivSize}px`,
      borderRadius: `${this.borderRadius}px`,
      border: `${this.imagePadding}px solid white`,
      backgroundColor: 'white'
    }
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'instello-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.scss']
})
export class SidebarItemComponent {

  @Input() title = '';
  @Input() route = '#';
}

import { Component, OnInit } from '@angular/core';

import { sidebarItems } from "@core/constants/sidebar.constant";

@Component({
  selector: 'instello-layout-sidebar',
  templateUrl: './layout-sidebar.component.html',
  styleUrls: ['./layout-sidebar.component.scss']
})
export class LayoutSidebarComponent implements OnInit {

  sidebarItems = sidebarItems;

  constructor() {
  }

  ngOnInit(): void {
  }
}

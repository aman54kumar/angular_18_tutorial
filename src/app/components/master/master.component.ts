import { Component } from '@angular/core';
import { RolesComponent } from '../roles/roles.component';
import { DesignationComponent } from '../designation/designation.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-master',
  imports: [CommonModule, RolesComponent, DesignationComponent],
  templateUrl: './master.component.html',
  styleUrl: './master.component.css',
})
export class MasterComponent {
  currentComponent = 'roles';
  // currentComponent = 'designation';
  // currentComponent = 12;
  changeTab(tabName: string) {
    this.currentComponent = tabName;
  }
}

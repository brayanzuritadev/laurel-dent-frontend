import { Component, ViewChild, } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { StyleClass } from 'primeng/styleclass';
import { AvatarModule } from 'primeng/avatar';
import { Drawer } from 'primeng/drawer';


@Component({
  selector: 'app-dashboard',
  imports: [DrawerModule, ButtonModule, AvatarModule, StyleClass],
  templateUrl: './dashboard.html'
})
export class Dashboard {
   @ViewChild('drawerRef') drawerRef!: Drawer;

    closeCallback(e:any): void {
        this.drawerRef.close(e);
    }

    visible: boolean = false;
}

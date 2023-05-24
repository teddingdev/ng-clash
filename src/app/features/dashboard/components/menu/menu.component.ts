import {
  Input,
  Output,
  Component,
  ViewChild,
  EventEmitter,
} from '@angular/core';
import { MatSelectionList } from '@angular/material/list';
import { Nav } from '@model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  @ViewChild(MatSelectionList)
  matSelectionList!: MatSelectionList;

  @Input()
  navList: Nav[] = [];

  @Output()
  onChange = new EventEmitter<Nav>();
}

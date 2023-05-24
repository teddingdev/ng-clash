import { Component, OnInit } from '@angular/core';
import { Nav, NavValue } from '../../models/feature/menu.model';
import { ActivatedRoute, Router } from '@angular/router';
import { LogService } from '../../services/feature/log.service';
import { ConnectionService } from 'src/app/services/feature/connection.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  navList: Nav[] = [
    {
      name: '代理',
      value: NavValue.proxies,
      icon: 'vpn_key',
      activated: true,
    },
    {
      name: '日志',
      value: NavValue.logs,
      icon: 'terminal',
      activated: false,
    },
    {
      name: '规则',
      value: NavValue.rules,
      icon: 'rule',
      activated: false,
    },
    {
      name: '连接',
      value: NavValue.links,
      icon: 'link',
      activated: false,
    },
    {
      name: '设置',
      value: NavValue.settings,
      icon: 'settings',
      activated: false,
    },
  ];

  handleSideNavActive(menu: Nav) {
    this.navList = this.toggleSideNavActiveStatus(
      this.navList,
      (menuItem) => menuItem.value === menu.value
    );
    this.router.navigate([menu.value], {
      relativeTo: this.route,
    });
  }

  /** toggle sideNav highlight */
  toggleSideNavActiveStatus(
    menuList: Nav[],
    compareFn: (menuItem: Nav) => boolean
  ) {
    return menuList.map((menuItem) => {
      if (compareFn(menuItem)) {
        menuItem.activated = true;
      } else {
        menuItem.activated = false;
      }
      return menuItem;
    });
  }

  ngOnInit(): void {
    this.navList = this.toggleSideNavActiveStatus(this.navList, (menuItem) =>
      location.pathname.includes(menuItem.value)
    );

    // todo 获取日志
    this.logService.initLog();
    this.connectionService.initConnection();
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private logService: LogService,
    private connectionService: ConnectionService
  ) {}
}

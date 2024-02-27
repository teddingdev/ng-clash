import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Rule } from '@model';
import { ClashApiService } from '@service';

@Component({
  selector: 'app-rule-list',
  templateUrl: './rule-list.component.html',
  styleUrls: ['./rule-list.component.scss'],
})
export class RuleListComponent implements OnInit {
  rules: Rule[] = [];
  constructor(@Inject(PLATFORM_ID) private platformId: Object, private clashApiService: ClashApiService) {}
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.clashApiService.fetchRules().subscribe((res) => {
        this.rules = res.rules;
      });
    }
  }
}

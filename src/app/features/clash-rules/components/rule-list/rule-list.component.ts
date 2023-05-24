import { Component, OnInit } from '@angular/core';
import { Rule } from '@model';
import { ClashApiService } from '@service';

@Component({
  selector: 'app-rule-list',
  templateUrl: './rule-list.component.html',
  styleUrls: ['./rule-list.component.scss'],
})
export class RuleListComponent implements OnInit {
  rules: Rule[] = [];
  constructor(private clashApiService: ClashApiService) {}
  ngOnInit(): void {
    this.clashApiService.fetchRules().subscribe((res) => {
      this.rules = res.rules;
    });
  }
}

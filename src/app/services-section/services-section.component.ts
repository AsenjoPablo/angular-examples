import { Component, OnInit } from '@angular/core';
import { DatabaseService } from './database.service';

@Component({
  selector: 'app-services-section',
  templateUrl: './services-section.component.html',
  styleUrls: ['./services-section.component.css'],
  providers: [DatabaseService],
})
export class ServicesSectionComponent implements OnInit {
  people = [];
  constructor(private databaseService: DatabaseService) {}

  ngOnInit(): void {}

  getPeople() {
    this.people = this.databaseService.retrieveData();
  }
}

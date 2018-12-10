import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {HTTPService} from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './manualTrading.component.html',
  styleUrls: ['./manualTrading.component.css']
})
export class ManualTrading {
  title = 'Trading systems Made In Italy';
  all_infos = [];

  constructor(private httpService: HTTPService) {}

  ngOnInit(): void {
    this.httpService.getAllManualInfos().subscribe(
      (data: JSON[]) => this.all_infos = data, // success path
      error => alert(error) // error path
    );
  }

  refreshInfo(): void{
    this.httpService.refresh().subscribe(
      (data: JSON[]) => this.all_infos = data, // success path
      error => alert(error) // error path
    );
  }
}

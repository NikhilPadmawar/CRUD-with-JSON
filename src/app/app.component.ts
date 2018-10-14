import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'KnorexTest';
  dropDownData: any;
  cols:any[];
  displayDialog: boolean;


  data: any = {};

  selectedData: any;


  newData: boolean;


  constructor(private app: AppService) {

    this.cols = [
      { field: 'label', header: 'City' },
      { field: 'value', header: 'Acronym' }
  ];

  }

  ngOnInit() {
    this.getData();
  }

  public getData() {
    this.app.getDropDownData().then(res => {
      this.dropDownData = res.options;
    })
  }


showDialogToAdd() {
  this.newData = true;
  this.data = {};
  this.displayDialog = true;
}

save() {
  let dropDownData = [...this.dropDownData];
  if (this.newData)
  dropDownData.push(this.data);
  else
  dropDownData[this.dropDownData.indexOf(this.selectedData)] = this.data;
  this.dropDownData = dropDownData;
  this.data = null;
  this.displayDialog = false;
}

delete() {
  let index = this.dropDownData.indexOf(this.selectedData);
  this.dropDownData = this.dropDownData.filter((val, i) => i != index);
  this.data = null;
  this.displayDialog = false;
}

onRowSelect(event) {
  this.newData = false;
  this.data = this.cloneCar(event.data);
  this.displayDialog = true;
}

cloneCar(c: any): any {
  let data = {};
  for (let prop in c) {
    data[prop] = c[prop];
  }
  return data;
}

  
}

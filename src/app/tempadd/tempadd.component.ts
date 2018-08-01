import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tempadd',
  templateUrl: './tempadd.component.html',
  styleUrls: ['./tempadd.component.scss']
})
export class TempaddComponent implements OnInit {

  // all_items = [];
  all_items = [{'id': 10, 'name': 'Raghu'}, {'id': 11, 'name': 'Ram'}];
  item: Object;
  edit_item_index: number;
  action_btn_label: string;
  titlee:string;

  constructor() { }

  ngOnInit() {
    this.reset_btn();
  }

  save_item(item) {
    if (this.action_btn_label == 'Save') {
      this.all_items[this.edit_item_index].id = item.id;
      this.all_items[this.edit_item_index].name = item.name;
    } else {
      this.all_items.push(item);
    } 
    this.reset_btn();
  }


  get_item_value(result) {
    this.item['id'] = result.id;
    this.item['name'] = result.name;
    this.edit_item_index = this.all_items.indexOf(result);
    this.action_btn_label = "Save";
    this.titlee = "Edit : " + result.name;
  }

  delete_item(result) {
    if(confirm("Are you sure to delete?")) {
      var index = this.all_items.indexOf(result);
      this.all_items.splice(index, 1); 
      this.reset_btn();
    }
  }

  reset_btn() {
    this.item = [];
    this.edit_item_index = 0;
    this.action_btn_label = "Add";
    this.titlee = "Create";
  }

}

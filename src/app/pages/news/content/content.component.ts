import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ErrorExceptionResult, NewsContentModel} from 'ntk-cms-api';
import {PublicHelper} from '../../../_helpers/services/publicHelper';
import {QueryBuilderConfig} from 'angular2-query-builder';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  query;
  checked = false;
  config: QueryBuilderConfig = {
    fields: {
      age: {name: 'Age', type: 'number'},
      gender: {
        name: 'Gender',
        type: 'category',
        options: [
          {name: 'Male', value: 'm'},
          {name: 'Female', value: 'f'}
        ]
      }
    }
  };
  displayedColumns: string[] = [
    'LinkSiteId',
    'RecordStatus',
    'Title',
    'CreatedDate',
    'UpdatedDate'];
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource: any;
  dataModelResult: ErrorExceptionResult<NewsContentModel> = new ErrorExceptionResult<NewsContentModel>();

  constructor(
    private activatedRoute: ActivatedRoute,
    public publicHelper: PublicHelper) {
  }

  ngOnInit(): void {
    this.dataModelResult = this.activatedRoute.snapshot.data.list.ListItems;
    this.dataSource = this.dataModelResult;
  }

  changed(event): void {
    this.checked = event.checked;
  }
}

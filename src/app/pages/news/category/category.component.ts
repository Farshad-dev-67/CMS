import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';

interface FoodNode {
  Children: [];
  AntiInjectionDate: string;
  AntiInjectionExpiredMinute: number;
  AntiInjectionRun: boolean;
  AntiInjectionToken: string;
  AntiInjectionTokenActionState: number;
  CreatedBy: number;
  CreatedDate: string;
  Description: string;
  Id: number;
  LinkParentIdNode: string;
  LinkSiteId: number;
  RecordStatus: number;
  Title: string;
}

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  TREE_DATA: FoodNode[] = [];

  private transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.Children && node.Children.length > 0,
      name: node.Title,
      level,
    };
  }
  constructor(private activatedRoute: ActivatedRoute) {
  }

  // tslint:disable-next-line
  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level, node => node.expandable);
  // tslint:disable-next-line
  treeFlattener = new MatTreeFlattener(
    this.transformer, node => node.level, node => node.expandable, node => node.Children);
  // tslint:disable-next-line
  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  ngOnInit(): void {
    this.TREE_DATA = this.activatedRoute.snapshot.data.categoryList.ListItems;
    this.dataSource.data = this.TREE_DATA;
  }

}

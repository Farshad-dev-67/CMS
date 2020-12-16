import {Component, Injectable} from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
import {CollectionViewer, SelectionChange} from '@angular/cdk/collections';
import {map} from 'rxjs/operators';
import {BehaviorSubject, merge, Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

/** Flat node with expandable and level information */
export class DynamicFlatNode {
  Children: any;

  constructor(
    public item: string,
    public level: number = 1,
    public expandable: boolean = false,
    public data: any = '',
    public isLoading: boolean = false) {
  }
}

@Injectable()
export class DynamicDataSource {
  children: any;
  dataChange: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  database: any;

  get data(): DynamicFlatNode[] {
    return this.dataChange.value;
  }

  set data(value: DynamicFlatNode[]) {
    this.treeControl.dataNodes = value;
    this.dataChange.next(value);
  }

  constructor(private treeControl: FlatTreeControl<DynamicFlatNode>,
              private activatedRoute: ActivatedRoute,
  ) {
    this.database = this.activatedRoute;
  }

  connect(collectionViewer: CollectionViewer): Observable<DynamicFlatNode[]> {
    this.treeControl.expansionModel.changed.subscribe(change => {
      if ((change as SelectionChange<DynamicFlatNode>).added ||
        (change as SelectionChange<DynamicFlatNode>).removed) {
        this.handleTreeControl(change as SelectionChange<DynamicFlatNode>);
      }
    });
    return merge(collectionViewer.viewChange, this.dataChange).pipe(map(() => this.data));
  }

  /** Handle expand/collapse behaviors */
  handleTreeControl(change: SelectionChange<DynamicFlatNode>): void {
    if (change.added) {
      change.added.forEach((node) => this.toggleNode(node, true));
    }
    if (change.removed) {
      change.removed.reverse().forEach((node) => this.toggleNode(node, false));
    }
  }

  toggleNode(node: DynamicFlatNode, expand: boolean): boolean {
    if (typeof node.Children === 'undefined') {
      return;
    }
    this.children = node.Children.map((res) => {
      return res.Title;
    });
    const index = this.data.indexOf(node);
    if (!this.children || index < 0) {
      return;
    }
    if (expand) {
      node.isLoading = true;
      const nodes = this.children.map(name =>
        new DynamicFlatNode(name, node.level = 1, node.expandable = true, this.database));
      this.data.splice(index + 1, 0, ...nodes);
      this.dataChange.next(this.data);
      node.isLoading = false;
    } else {
      this.data.splice(index + 1, this.children.length);
      this.dataChange.next(this.data);
    }
  }
}


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  list: any;
  getChildren: any;
  database: any;

  constructor(activatedRoute: ActivatedRoute) {
    this.treeControl = new FlatTreeControl<DynamicFlatNode>(this.getLevel, this.isExpandable);
    this.dataSource = new DynamicDataSource(this.treeControl,
      activatedRoute.snapshot.data.categoryList.ListItems);
    this.database = activatedRoute.snapshot.data.categoryList.ListItems;

    this.dataSource.data = activatedRoute.snapshot.data.categoryList.ListItems;
  }

  treeControl: FlatTreeControl<DynamicFlatNode>;

  dataSource: DynamicDataSource;

  getLevel(node: DynamicFlatNode): any {
    return node.level;
  }

  isExpandable(node: DynamicFlatNode): boolean {
    return node.expandable;
  }

  hasChild(_: number, nodeData: DynamicFlatNode): any {
    if (typeof nodeData.Children !== 'undefined' && nodeData.Children.length > 0) {
      return nodeData.expandable = true;
    }
    if (typeof nodeData.item !== 'undefined') {
      return nodeData.expandable = true;
    }
  }
}

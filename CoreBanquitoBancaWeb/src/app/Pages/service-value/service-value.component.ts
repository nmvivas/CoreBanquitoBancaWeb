import { FlatTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule } from '@angular/material/tree';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-service-value',
  standalone: true,
  imports: [RouterOutlet, MatIconModule, MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule, MatTreeModule],
  templateUrl: './service-value.component.html',
  styleUrl: './service-value.component.css'
})
export class ServiceValueComponent {

  accountNumber = '2205618154';
  balance = '$ 330.30';
  userName = 'JUANITO JOSÉ QUEZADA OLIVARES';

  private _transformer = (node: ProductNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;



}

interface ProductNode {
  name: string;
  children?: ProductNode[];
}

const TREE_DATA: ProductNode[] = [
  {
    name: 'TRANSFERENCIAS',
    children: [{ name: 'Directas' }],
  },
  {
    name: 'PAGOS DE SERVICOS',
    children: [{ name: 'Pagos y Facturas' }],
  },
  {
    name: 'MI PERFIL',
    children: [],
  },

];

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}


import { FlatTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule } from '@angular/material/tree';
import { RouterOutlet } from '@angular/router';
import {OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {AsyncPipe} from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

export interface User {
  name: string;
}


@Component({
  selector: 'app-service-pay',
  standalone: true,
  imports: [RouterOutlet, 
    MatIconModule, 
    MatFormFieldModule, 
    MatSelectModule, 
    MatInputModule, 
    FormsModule, 
    MatTreeModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe],
  templateUrl: './service-pay.component.html',
  styleUrl: './service-pay.component.css'
})
export class ServicePayComponent implements OnInit  {
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


  
  myControl = new FormControl<string | User>('');
  options: User[] = [{name: 'ULTRALINK'}, {name: 'EMPRESA ELECTRICA'}, {name: 'TOUWOLF TECHNOLOGY'}];
  filteredOptions: Observable<User[]> | undefined;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.options.slice();
      }),
    );
  }

  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }
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

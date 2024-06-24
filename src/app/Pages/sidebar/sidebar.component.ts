import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule } from '@angular/material/tree';
import { Router, RouterOutlet } from '@angular/router';
import { AuthenticationService } from '../../services/auth.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterOutlet, MatIconModule, MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule, MatTreeModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent implements OnInit {

  accountNumber = '2205618154';
  balance = '$ 330.30';
  userName: string = '';

  usuario: string = '';
  authenticationService: AuthenticationService;
  router: Router;

  constructor(authenticationService: AuthenticationService, router: Router) {
    this.authenticationService = authenticationService;
    this.router = router;
    this.dataSource.data = TREE_DATA;
  }

  ngOnInit() {
    this.setUserNameFromLocalStorage();
  }

  setUserNameFromLocalStorage() {
    const userJson = localStorage.getItem('user');
    if (userJson) {
      try {
        const user = JSON.parse(userJson);
        this.userName = user.fullName;
      } catch (error) {
        console.error('Error parsing JSON from localStorage', error);
      }
    } else {
      console.error('No user found in localStorage');
    }
  }

  logout() {
    this.authenticationService.logout();
    console.log('Logout exitoso');
    this.router.navigate([""]);
  }

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

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}

interface ProductNode {
  name: string;
  children?: ProductNode[];
  path?: string;
}

const TREE_DATA: ProductNode[] = [
  {
    name: 'TRANSFERENCIAS',
    children: [{ name: 'Directas', path: 'tranferences' }],
  },
  {
    name: 'PAGOS DE SERVICOS',
    children: [{ name: 'Pagos y Facturas', path: 'service-pay' }],
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

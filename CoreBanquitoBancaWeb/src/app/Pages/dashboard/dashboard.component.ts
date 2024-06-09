import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  accountNumber = '2205618154';
  balance = '$ 330.30';
  userName = 'JUANITO JOSÉ QUEZADA OLIVARES';

}

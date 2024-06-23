import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ClientService } from '../../services/client.service';
import { AccountService } from '../../services/account.service';
import { DataSharingService } from '../../services/accountDetails.service';
import { SessionService } from '../../services/session.Service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  number = '';
  currentBalance = '';
  userName = '';

  constructor(
    private clientService: ClientService,
    private accountService: AccountService, 
    private sessionService: SessionService,
    private dataSharingService: DataSharingService
  ) { }

  ngOnInit(): void {
    const email = this.sessionService.getEmail();
    if (email) {
      this.clientService.getClientIdByEmail(email).subscribe({
        next: (clientData) => {
          const clientId = clientData.id;
          console.log(clientId);
          this.accountService.getAccountDetails("2").subscribe({
            next: (accountData) => {
              console.log(accountData.number);
              console.log(accountData.availableBalance);
              this.currentBalance = accountData.availableBalance;
              this.number = accountData.number;
              this.dataSharingService.setAccountDetails(this.number, this.currentBalance);

              // Guardar los detalles de la cuenta en el almacenamiento local
              localStorage.setItem('accountNumber', this.number);
              localStorage.setItem('accountBalance', this.currentBalance);

              console.log(this.dataSharingService.getAccountNumber());
            },
            error: (error) => {
              console.error('Error fetching account details:', error);
            }
          });
        },
        error: (error) => {
          console.error('Error fetching client ID:', error);
        }
      });
    }
  }
}
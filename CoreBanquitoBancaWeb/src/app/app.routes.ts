import { Routes } from '@angular/router';
import { SidebarComponent } from './Pages/sidebar/sidebar.component';
import { LoginComponent } from './Pages/login/login.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { TranferencesComponent } from './Pages/tranferences/tranferences.component';
import { TranferencesPagoComponent } from './Pages/tranferences-pago/tranferences-pago.component';
import { TranferencesSuccessfulComponent } from './Pages/tranferences-successful/tranferences-successful.component';
import { ServicePayComponent } from './Pages/service-pay/service-pay.component';
import { ServiceValueComponent } from './Pages/service-value/service-value.component';
import { ServiceCheckComponent } from './Pages/service-check/service-check.component';
import { ServiceSuccessfulComponent } from './Pages/service-successful/service-successful.component';


export const routes: Routes = [
    {
        path: '', redirectTo: 'login', pathMatch: 'full'
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'',
        component:SidebarComponent,
        children: [
            {
                path: 'dashboard',
                component:DashboardComponent
            }
        ]
    },
    {
        path:'tranferences',
        component:TranferencesComponent
    },
    {
        path:'tranferences-pago',
        component:TranferencesPagoComponent
    },
    {
        path:'tranferences-successful',
        component:TranferencesSuccessfulComponent
    },
    {
        path:'service-pay',
        component:ServicePayComponent
    },
    {
        path:'service-value',
        component:ServiceValueComponent
    },
    {
        path:'service-check',
        component:ServiceCheckComponent
    },
    {
        path:'service-successful',
        component:ServiceSuccessfulComponent
    },






];

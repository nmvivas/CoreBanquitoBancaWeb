import { Routes } from '@angular/router';
import { SidebarComponent } from './Pages/sidebar/sidebar.component';
import { LoginComponent } from './Pages/login/login.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { TranferencesComponent } from './Pages/tranferences/tranferences.component';
import { TranferencesPagoComponent } from './Pages/tranferences/tranferences-pago/tranferences-pago.component';
import { TranferencesSuccessfulComponent } from './Pages/tranferences/tranferences-successful/tranferences-successful.component';
import { ServicePayComponent } from './Pages/service-pay/service-pay.component';
import { ServiceValueComponent } from './Pages/service-pay/service-value/service-value.component';
import { ServiceCheckComponent } from './Pages/service-pay/service-check/service-check.component';
import { ServiceSuccessfulComponent } from './Pages/service-pay/service-successful/service-successful.component';
import { RegisterComponent } from './Pages/register/register.component';
import { RegisterUserComponent } from './Pages/register/register-user/register-user.component';
import { RegisterSuccessComponent } from './Pages/register/register-success/register-success.component';


export const routes: Routes = [
    {
        path: '', redirectTo: 'login', pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        component: SidebarComponent,
        children: [
            {
                path: 'tranferences',
                component: TranferencesComponent
            },
            {
                path: 'tranferences-pago',
                component: TranferencesPagoComponent
            },
            {
                path: 'tranferences-successful',
                component: TranferencesSuccessfulComponent
            },
            {
                path: 'service-pay',
                component: ServicePayComponent
            },
            {
                path: 'service-value',
                component: ServiceValueComponent
            },
            {
                path: 'service-check',
                component: ServiceCheckComponent
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'service-successful',
                component: ServiceSuccessfulComponent
            }
        ]

    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'register-user',
        component: RegisterUserComponent
    },
    {
        path: 'register-success',
        component: RegisterSuccessComponent
    }



];

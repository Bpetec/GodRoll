import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component'


const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
        resolve: {},
        // resolve makes sure data gets returned first before we enter a route
        data: {
            name: 'Login'
        }
        },
        {
            path: 'Home',
            component: AppComponent,
            data: {
                name: 'Home'
            }
        }

];

export const routerModule = RouterModule.forRoot(routes)
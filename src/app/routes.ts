import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component'
import { AboutComponent } from './about/about.component'


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
            path: 'home',
            component: AppComponent,
            data: {
                name: 'Home'
            }
        },
        {
            path: 'about',
            component: AboutComponent,
            data: {
                name: 'about'
            }
        }

];

export const routerModule = RouterModule.forRoot(routes)
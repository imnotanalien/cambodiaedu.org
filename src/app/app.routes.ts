import { Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { AboutComponent } from './about/about/about.component';
import { FollowComponent } from './about/follow/follow.component';
import { LegalComponent } from './legal/legal.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BasicComponent } from './calculator/basic/basic.component';
import { CalculatorComponent } from './calculator/calculator/calculator.component';
import { BlogComponent } from './home/blog/blog.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', redirectTo: '', pathMatch: 'full' },

    // Blog
    { path: 'blog', component: BlogComponent },

    // About
    { path: 'about', component: AboutComponent },
    { path: 'follow', component: FollowComponent },

    // Legal
    { path: 'legal', component: LegalComponent },

    // Calculators
    { path: 'calculator', component: CalculatorComponent },
    { path: 'calculator/basic', component: BasicComponent },
    { path: 'calculator/graphing', component: LegalComponent },
    
    // 404 Page not found.
    { path: '**', component: PageNotFoundComponent }
];

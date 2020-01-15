import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './_guards/auth.guard';

export const appRoutes: Routes = [
// each route is an object
    // {path: 'home', component: HomeComponent},
    // {path: 'members', component: MemberListComponent, canActivate: [AuthGuard]},
    // {path: 'messages', component: MessagesComponent},
    // {path: 'lists', component: ListsComponent},
    // {path: '*', redirectTo: 'home', pathMatch: 'full'},

    // above approach fully working but below approach is better

    {path: '', component: HomeComponent},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            {path: 'members', component: MemberListComponent},
            {path: 'messages', component: MessagesComponent},
            {path: 'lists', component: ListsComponent},
        ]
    },

    {path: '**', redirectTo: '', pathMatch: 'full'},

];

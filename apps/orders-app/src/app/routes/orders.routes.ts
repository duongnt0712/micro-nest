import { Route } from '@angular/router';
import { OrderListComponent } from '../components/order-list/order-list.component';

export const orderRoutes: Route[] = [
    { path: '', component: OrderListComponent },
];
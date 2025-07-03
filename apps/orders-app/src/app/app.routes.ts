import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        loadChildren: () =>
            import('./routes/orders.routes').then((m) => m.orderRoutes),
    },
];

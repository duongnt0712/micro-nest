import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderButtonComponent } from '../order-button/order-button.component';

@Component({
    selector: 'mfe-order-order-list',
    standalone: true,
    imports: [CommonModule, OrderButtonComponent],
    templateUrl: './order-list.component.html',
    styleUrl: './order-list.component.css',
})
export class OrderListComponent {}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

const ORDER_KEY = 'orderItems';

@Component({
    selector: 'mfe-order-order-button',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './order-button.component.html',
    styleUrl: './order-button.component.css',
})
export class OrderButtonComponent implements OnInit, OnDestroy{

    count = 0;

    private handler = (e: CustomEvent) => {
        const items = this.getOrderItems();
        items.push(e.detail);
        this.setOrderItems(items);
        this.count = items.length;
    };


    ngOnInit() {
        this.count = this.getOrderItems().length;
        window.addEventListener('order:add', this.handler as EventListener);
    }


    ngOnDestroy() {
        window.removeEventListener('order:add', this.handler as EventListener);
    }

    private getOrderItems(): any[] {
        try {
            return JSON.parse(localStorage.getItem(ORDER_KEY) || '[]');
        } catch {
            return [];
        }
    }

    private setOrderItems(items: any[]): void {
        localStorage.setItem(ORDER_KEY, JSON.stringify(items));
    }
}

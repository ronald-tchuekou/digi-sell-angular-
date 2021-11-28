import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'app-new-products',
    templateUrl: './new-products.component.html',
    styleUrls: ['./new-products.component.scss'],
})
export class NewProductsComponent implements OnInit {
    current_tab: number = 1

    constructor() {}

    ngOnInit(): void {}

    setCurrentTab(position: number): void {
        this.current_tab = position
    }
}

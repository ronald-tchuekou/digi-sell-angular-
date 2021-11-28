import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core'

declare const initDrawer: any

@Component({
    selector: 'app-testimonies',
    templateUrl: './testimonies.component.html',
    styleUrls: ['./testimonies.component.scss'],
})
export class TestimoniesComponent implements OnInit, AfterViewInit {
    @ViewChild('new_drawer_id') view_drawer: any

    current_page: number = 0
    drawer: any

    constructor() {}

    ngOnInit(): void {}

    ngAfterViewInit(): void {
        this.drawer = initDrawer(this.view_drawer.nativeElement)
        this.drawer.gotToItem(this.current_page)
        setInterval(() => {
            let p = this.current_page + 1
            if (p > 2) this.current_page = 0
            else this.current_page = p
            this.drawer.gotToItem(this.current_page)
        }, 5100)
    }

    setCurrentPage(page: number): void {
        this.current_page = page
        this.drawer.gotToItem(this.current_page)
    }
}

import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
    menu_contents: { title: string; url: string }[] = []
    show: boolean = false

    constructor() {}

    ngOnInit(): void {
        this.getMenuContent()
    }

    showMenu(): void {
        this.show = !this.show
    }

    getMenuContent(): void {
        for (let index = 0; index < 5; index++) {
            this.menu_contents.push({
                title: 'Dropdown menu item ' + index,
                url: '#dropdown-menu-item' + index,
            })
        }
    }
}

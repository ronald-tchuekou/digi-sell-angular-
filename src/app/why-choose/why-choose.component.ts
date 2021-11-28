import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'app-why-choose',
    templateUrl: './why-choose.component.html',
    styleUrls: ['./why-choose.component.scss'],
})
export class WhyChooseComponent implements OnInit {
    current: number = -1

    constructor() {}

    ngOnInit(): void {}

    setCurrentPosition(position: number): void {
        this.current = position
    }
}

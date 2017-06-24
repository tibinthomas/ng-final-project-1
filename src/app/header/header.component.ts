import { Component, EventEmitter, Output } from '@angular/core';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent {

    @Output() selectedComponentEvent = new EventEmitter<string>();

    onSelect(componentSelected: string) {
        this.selectedComponentEvent.emit(componentSelected);
    }

}

import { AuthService } from './../auth/auth.service';
import { DataStorageService } from './../shared/data-storage.service';
import { Component } from '@angular/core';
import { Response } from '@angular/http'


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent {

    constructor(private dataStorageService: DataStorageService,
                public authService: AuthService) {}

    onSaveData() {
        this.dataStorageService.saveData().subscribe(
            (response: Response) => { console.log(response); }
        );
    }

    onFetchData() {
        this.dataStorageService.retriveData();
    }

    onLogout() {
        this.authService.logout();
    }
}


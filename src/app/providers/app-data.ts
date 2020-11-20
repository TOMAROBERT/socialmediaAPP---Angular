import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface AppDataInterface {
    posts: any[];
    messagesUser: any[];
}

@Injectable({
    providedIn: 'root'
})
export class AppData {
    data: AppDataInterface;

    constructor(public http: HttpClient) { }

    load(): Promise<AppDataInterface> {
        if (this.data) { return of(this.data).toPromise(); }

        return this.http.get('assets/data/data.json').pipe(
            tap((data: AppDataInterface) => this.data = data)
        ).toPromise();
    }


    async getPosts() {
        return this.load().then((data) => {
            return data.posts;
        });
    }

    async getMessagesUser(id: number) {
        this.load().then((data) => {
            const res = data.messagesUser.find(mes => mes.id === id);
            return res;
        });
    }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';
// import Post from './../../model/Post'

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

    // async getPosts() : Post[]
    async getPosts(){
        return this.load().then((data) => {
            return data.posts;
        });
    }

    async getMessagesUser() {
        return this.load().then((data) => {
            return data.messagesUser;
        });
    }
}

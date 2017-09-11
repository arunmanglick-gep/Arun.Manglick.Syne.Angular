import { Injectable } from "@angular/core";
import { Http, Response, Request, Headers } from "@angular/http";

@Injectable()
export class DataService {
    private url = "https://jsonplaceholder.typicode.com/posts";

    constructor(private http: Http) { }

    getAllPosts() {
        var headers = new Headers();
        headers.append('Authorization', 'MyCheck');

        return this.http.get(this.url, {
            headers: headers
        }).map((res) => res.json());
    }
}
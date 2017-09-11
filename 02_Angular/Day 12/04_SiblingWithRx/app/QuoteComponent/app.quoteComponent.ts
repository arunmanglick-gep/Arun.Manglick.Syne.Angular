import { Component } from '@angular/core';

import { Author } from "../Models/app.author";
import { DataService } from "../Services/app.dataService";

@Component({
    selector: 'quote',
    templateUrl: 'app.quoteComponent.html',
    styles: [require('./app.quoteComponent.css').toString()]
})

export class QuoteComponent {
    sAuthor: Author;
    constructor(private dService: DataService) { 
        this.dService.authorSubjectChanged.subscribe(() => {
            this.sAuthor = this.dService.getAuthor();
        })
    }
}
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'my-counter',
    template: `<h2>Counter Component</h2>                            
                <input type="text" [(ngModel)]="counter">                
                <button (click)=plusCount() [disabled]="flagMe"> + </button>
                <button (click)=minusCount() [disabled]="flagMe"> - </button>                
                <button (click)=reset()> Reset </button>  
    `
})

export class CounterComponent implements OnInit {
    @Input() interval: number = 1;
    @Output() onCountReached = new EventEmitter<boolean>();

    counter: number = 0;
    flagMe = false;
    clickCount = 0;


    constructor() {
    }

    ngOnInit() { }

    plusCount() {
        this.counter += this.interval;
        this.clickCount += 1;
        if (this.clickCount > 2) {
            this.flagMe = true;
            this.onCountReached.emit(this.flagMe);
        }
    }

    minusCount() {
        this.counter -= this.interval;;
    }

    reset(){
        this.counter = 0;
        this.clickCount = 0;
        this.flagMe = false;

        this.onCountReached.emit(this.flagMe);
    }
}
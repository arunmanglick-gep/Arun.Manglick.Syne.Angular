import { Component, ViewChild} from "@angular/core";
import { CounterComponent } from './app.counterComponent';

@Component({
    selector: 'my-app',
    template: `<h2>Root Component</h2>
               <h2 class = "alert alert-danger">{{message}}</h2>
               <my-list></my-list>
               <my-datalist [personDataList]=pList></my-datalist>   
               <my-counter [interval]=10 (onCountReached)="countReached($event)" #c1></my-counter> 
               <button class="btn btn-danger" (click)=c1.reset()> Reset from Parent </button>            
               `
})
export class RootComponent {
    pList: Array<string> =  ["David1", "John1", "Neel1"];
    message:string ="";

    @ViewChild(CounterComponent) counter:CounterComponent; // Required when required to function of component which is referred here.

    ngAfterViewInit()
    {
        // this.counter.interval = 7;
    }

    countReached(flag:boolean)
    {       
        if(flag)
        {
            this.message = "Max Count Reached";
        }
        else{
            this.message = "";
        }
    }
}
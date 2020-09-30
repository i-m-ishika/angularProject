import { viewClassName } from '@angular/compiler';
import {Component, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import {Observable,interval,of} from 'rxjs';
import {switchMap, reduce,scan, map, debounceTime,distinctUntilChanged,pluck, mergeMap} from 'rxjs/operators';
import * as Rx from 'rxjs';
@Component({
    templateUrl: 'practice.component.html',
    styleUrls: ['practice.component.css']
})
export class PracticeComponent implements AfterViewInit{
    @ViewChild('button1') button1:ElementRef;
    @ViewChild('button2') button2:ElementRef;
    @ViewChild('button3') button3:ElementRef;
    @ViewChild('input1') input1:ElementRef;
    @ViewChild('input2') input2:ElementRef;
    @ViewChild('input3') input3:ElementRef;

    searchValue;
    combinedValue;
    numbers = [1,2,3,4,5];
    operators = ['reduce scan map debounceTime pluck distinctUntilChanged mergeMap switchMap'];

    ngAfterViewInit(){
        //1
        Rx.fromEvent(this.button1.nativeElement,'click')
        .subscribe(()=>{
           return of(1,2,3,4,5).pipe(
               reduce((total,val)=>total+val,0)
           ).subscribe((total)=>console.log(`using reduce: ${total}`));

        })


        Rx.fromEvent(this.button2.nativeElement,'click')
        .subscribe(()=>{
           return of(1,2,3,4,5).pipe(
               scan((total,val)=>total+val,0)
           ).subscribe((total)=>console.log(`using scan: ${total}`));

        });

        //2
        Rx.fromEvent(this.input1.nativeElement, 'input')
        .pipe(
            pluck('target','value'), //map(event => event.target.value),
            debounceTime(1000),
            distinctUntilChanged()
        )
        .subscribe((value)=>{
            this.searchValue = value;
        });

        //3
        let intervalObs = interval(500);
        Rx.fromEvent(this.button3.nativeElement,'click')
        .pipe(
            switchMap(event=>{
                return intervalObs;
            })
        )
        .subscribe(value=>console.log(value));


        //4
        
        let inputObs2 = Rx.fromEvent(this.input3.nativeElement,'input');

        Rx.fromEvent(this.input2.nativeElement,'input').pipe(
            mergeMap(
                event1=>{
                    return inputObs2.pipe(
                        map(event2=>event1.target.value +' '+event2.target.value)
                    );
                }
            )
        ).subscribe(val=>this.combinedValue=val);


    }

}

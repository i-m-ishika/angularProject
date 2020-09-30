import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'prefixPipe'
})
export class PrefixPipe{
    transform(value: string, gender: string){
        return gender.toLowerCase()=='male'? `Mr ${value}`: `Ms ${value}`;

    }
}
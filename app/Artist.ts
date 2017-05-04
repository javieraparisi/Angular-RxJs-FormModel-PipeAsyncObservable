import {Artist_Image}              from './Artist_Image';

export class Artist {
  constructor(
    
    public genres:string[],
    public href:string,
    public id:string,
    public images2:Artist_Image[]
    public name:string,
    public popularity:number
    public type:string,
    public uri:string) { 
       
    }
}
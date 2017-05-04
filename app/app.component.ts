import {Component} from 'angular2/core';
import {Control, ControlGroup, FormBuilder} from 'angular2/common';
import {SearchService} from './services/Search';
import {HTTP_BINDINGS} from 'angular2/http'
import 'rxjs/Rx';   
import {Artist} from './Artist';
 
@Component({
	selector: 'app-root',
	templateUrl: 'app/app.component.html'
})

export class AppComponent {
	searchField:Control;
	coolForm:ControlGroup; 
	
	constructor(private searchService:SearchService, private fb:FormBuilder) {
		this.searchField = new Control();
		this.searchField2 = new Control();
		this.coolForm = fb.group({search: this.searchField, search2: this.searchField2});
		this.searchInit = this.searchService.search("rock");
		 

		this.coolForm.valueChanges
						.flatMap(term => this.searchWorldFn(term))
						.subscribe((results) => {
						  this.resultF = results
						});
						
		this.searchWorldFn = (term) => 
  	{
  		var searchWorld="";
  		if (this.searchField.value){
  			searchWorld=this.searchField.value	
  			if (this.searchField2.value){
  				searchWorld += " " + this.searchField2.value	
  			} 
  		} 
  		return this.searchService.search(searchWorld)
  	}
	}
	
	
}
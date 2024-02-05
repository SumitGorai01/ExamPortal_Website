import { Component } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrl: './add-quiz.component.css'
})
export class AddQuizComponent {
[x: string]: any;

  categories =[
{
  cid:23,
  title:'programming',

}
,
{
  cid:23,
  title:'Aptitude',

}

  ]

constructor(private _cat:CategoryService){}
ngOnInit():void{
  this._cat.categories().subscribe(
    (data:any)=>
    {
      // category load

      this.categories=data;
      console.log(this.categories);
    },

    (error)=>{
      console.log.apply(error);
      Swal.fire('Error!!', 'error in loading data from server','error');
    }
  );
}

}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

name!:string;
speed!:number;
model!:string;
colors!: Colors;
options!:string[];
img!:string;
  constructor() {   }

ngOnInit() {
this.img ='assets/img/6-5-7.jpg';
this.name = 'Ford';
this.speed = 235;
this.model = 'Explorer';
this.colors  = {
car:'Зеленый',
salon:'Белый',
wheels:'Серый'
};
this.options = ['ABS', 'ESP', 'ASR'];
}

addOpt(option:any){
this.options.unshift(option);
return false;
}

deleteOpt(option:any){
for(let i = 0; i < this.options.length; i++){
if(this.options[i] == option)
this.options.splice(i, 1);
}
}
bmwSelect(){
  this.img ='assets/img/6-7-5.jpg';
  this.name = 'BMW';
this.speed = 255;
this.model = 'X5';
this.colors  = {
car:'Красный',
salon:'Серый',
wheels:'Белый'
};
this.options = ['Камера заднего вида', 'Самоочистка фар', ' Мониторинг «слепых зон»'];
}

audiSelect(){
  this.img ='assets/img/7-5-6.jpg';
  this.name = 'AUDI';
this.speed = 290;
this.model = 'Q7';
this.colors  = {
car:'Синий',
salon:'Синий',
wheels:'Белый'
};
this.options = ['Электропривод бокового зеркала', 'Подушки безопасности', 'Полноразмерная запаска'];
}

nissanSelect(){
  this.img ='assets/img/7-6-5.jpg';
  this.name = 'Nissan';
this.speed = 220;
this.model = 'Murano';
this.colors  = {
car:'Красный',
salon:'Белый',
wheels:'Серый'
};
this.options = ['Обогрев  дворников на лобовом стекле', 'Обогрев передних и задних сидений', 'Подогрев руля'];
}

}

interface Colors{
  car:string;
  salon:string;
  wheels:string;
}
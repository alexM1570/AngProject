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
  constructor() {   }

ngOnInit() {
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

bmwSelect(){
  this.name = 'BMW';
this.speed = 255;
this.model = 'X5';
this.colors  = {
car:'Красный',
salon:'Серый',
wheels:'Белый'
};
this.options = ['Камера заднего вида', 'Самоочистка фар', 'Круговой обзор. Мониторинг «слепых зон»'];
}

audiSelect(){
  this.name = 'AUDI';
this.speed = 290;
this.model = 'Q7';
this.colors  = {
car:'Синий',
salon:'Синий',
wheels:'Белый'
};
this.options = ['Электропривод бокового зеркала, подсветка', 'Подушки безопасности', 'Полноразмерная запаска'];
}

nissanSelect(){
  this.name = 'Nissan';
this.speed = 220;
this.model = 'Murano';
this.colors  = {
car:'Красный',
salon:'Белый',
wheels:'Серый'
};
this.options = ['Обогрев покоя дворников на лобовом стекле', 'Обогрев передних и задних сидений', 'Подогрев руля'];
}

}

interface Colors{
  car:string;
  salon:string;
  wheels:string;
}
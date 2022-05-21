import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Cat } from 'src/app/models/cat.interface';
import { CatsService } from 'src/app/services/cats.service';

@Component({
  selector: 'app-images',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css'],
  animations: [
    trigger('fadeInOut', [
      state(
        'void',
        style({
          opacity: 0.2,
        })
      ),
      transition('void<=>*', animate(1500)),
    ]),
  ],
})
export class CatsComponent implements OnInit {
  cats: Cat[] = [];
  //cats: any[] = [];
  constructor(private catsService: CatsService) {}

  ngOnInit(): void {
    /*for (let i = 0; i < 10; i++) {
      this.catsService.getRandomCat().subscribe((cat) => {
        this.cats.push(cat);
      });
    }*/

    //this.catsService.getPicture().subscribe((pics) => {
    //this.cats = pics;
    //console.log(this.cats);
    //});

    //this.catsService.getFavorites().subscribe((cats) => {
    //this.cats = cats;
    //});

    this.catsService.getCats().subscribe((cats) => {
      this.cats = cats;
      console.log(this.cats);
    });
  }
}

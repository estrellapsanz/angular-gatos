import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
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
  mode: ProgressSpinnerMode = 'indeterminate';
  color: ThemePalette = 'primary';

  loaded: boolean;
  loading: boolean;

  constructor(private catsService: CatsService) {
    this.loaded = false;
    this.loading = false;
  }

  ngOnInit(): void {
    this.loading = true;
    this.loaded = false;

    this.catsService.getCats().subscribe((cats) => {
      this.cats = cats;
      this.loading = false;
      this.loaded = true;
      console.log(this.cats);
    });
  }
}

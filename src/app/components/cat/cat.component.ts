import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CatsService } from 'src/app/services/cats.service';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css'],
})
export class CatComponent implements OnInit {
  cat!: any;
  img!: string;
  showDetails: boolean;
  default_cat: any;

  constructor(
    private catService: CatsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const identifier: any = this.activatedRoute.snapshot.paramMap.get('id');

    //when cat not found
    if (identifier == '123') {
      this.cat.breeds[0].name = 'Isidoro';
      this.cat.breeds[0].origin = 'Cartoons';
      this.cat.url = 'assets/default.jpg';
      this.cat.breeds[0].description = 'The best cartoon of a cat ever seen!';
      this.cat.breeds[0].temperament = 'Lovely and sweet althougt very smart.';
      this.cat.breeds[0].affection_level = '10';
      this.cat.breeds[0].wikipedia_url =
        'https://es.wikipedia.org/wiki/Heathcliff';
      this.cat.breeds[0].vetstreet_url = 'cat.breeds[0].vetstreet_url';
      this.cat.breeds[0].child_friendly = 10;
    }

    this.catService.getCatImageById(identifier).subscribe((cat) => {
      if (!cat) {
      
        this.cat.breeds[0].name = 'Isidoro';
        this.cat.breeds[0].origin = 'Cartoons';
        this.cat.url = 'assets/default.jpg';
        this.cat.breeds[0].description = 'The best cartoon of a cat ever seen!';
        this.cat.breeds[0].temperament =
          'Lovely and sweet althougt very smart.';
        this.cat.breeds[0].affection_level = '10';
        this.cat.breeds[0].wikipedia_url =
          'https://es.wikipedia.org/wiki/Heathcliff';
        this.cat.breeds[0].vetstreet_url = 'cat.breeds[0].vetstreet_url';
        this.cat.breeds[0].child_friendly = 10;
        return this.router.navigateByUrl('/');
      }

      this.cat = cat;
      return this.router.navigateByUrl('/cat/' + identifier);
    });
  }

  toggleShow(): void {
    this.showDetails = true;
  }
}

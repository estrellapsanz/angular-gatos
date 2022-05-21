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
  constructor(
    private catService: CatsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const identifier: any = this.activatedRoute.snapshot.paramMap.get('id');

    console.log('Identifier -->' + identifier);
    this.catService.getCatImageById(identifier).subscribe((cat) => {
      if (!cat) {
        return this.router.navigateByUrl('/');
      }

      this.cat = cat;
      console.log(this.cat.id);
      console.log(this.cat.breeds[0].description);
      console.log(this.cat.url);
      return this.router.navigateByUrl('/cat/' + identifier);
    });
  }
}

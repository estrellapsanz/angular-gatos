import { HttpErrorResponse } from '@angular/common/http';
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
  loading: boolean;
  loaded: boolean;

  constructor(
    private catService: CatsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.loading = false;
    this.loaded = false;
  }

  ngOnInit(): void {
    const identifier: any = this.activatedRoute.snapshot.paramMap.get('id');
    let errorResponse: any;
    this.loading = true;
    this.loaded = false;

    this.catService.getCatImageById(identifier).subscribe(
      (cat) => {
        if (!cat) {
          return this.router.navigateByUrl('/');
        } else {
          this.loading = false;
          this.loaded = true;
          this.cat = cat;
        }
        return this.router.navigateByUrl('/cat/' + identifier);
      },
      (error: HttpErrorResponse) => {
        errorResponse = error.error;
        this.loaded = false;
        this.loading = false;
        console.log(errorResponse);
        return this.router.navigateByUrl('/cat/' + identifier);
      }
    );
  }

  toggleShow(): void {
    this.showDetails = true;
  }
}

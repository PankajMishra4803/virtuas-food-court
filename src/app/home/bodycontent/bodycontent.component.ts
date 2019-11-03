import { Resturents } from './../../shared/models/resturent';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bodycontent',
  templateUrl: './bodycontent.component.html',
  styleUrls: ['./bodycontent.component.css']
})
export class BodycontentComponent implements OnInit {
  public returentDetails: Resturents[];

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.returentDetails = [
      {
        returentName: 'Delhi dhaba', resturentImage: 'assets/images/south-thali.jpg',
        costPerson: 400, estimateTime: 30, minPrice: 100, startDate: new Date(),
        categoryOFResturent: 'vegeterian'
      },
      {
        returentName: 'Punjabi dhaba', resturentImage: 'assets/images/Bengali-food.jpg',
        costPerson: 400, estimateTime: 45, minPrice: 100, startDate: new Date(),
        categoryOFResturent: 'vegeterian'
      },
      {
        returentName: 'South Indian dhaba', resturentImage: 'assets/images/south-thali.jpg',
        costPerson: 200, estimateTime: 20, minPrice: 150, startDate: new Date(),
        categoryOFResturent: 'Non-vegeterian'
      },
      {
        returentName: 'Rajashthani Thali', resturentImage: 'assets/images/mumbai-thali.jpg',
        costPerson: 350, estimateTime: 15, minPrice: 100, startDate: new Date(),
        categoryOFResturent: 'vegeterian'
      },
      {
        returentName: 'Chinees Dhaba', resturentImage: 'assets/images/south-thali.jpg',
        costPerson: 200, estimateTime: 20, minPrice: 50, startDate: new Date(),
        categoryOFResturent: 'Non-vegeterian'
      },
      {
        returentName: 'Italian food Point', resturentImage: 'assets/images/mumbai thali.jpg',
        costPerson: 600, estimateTime: 45, minPrice: 200, startDate: new Date(), categoryOFResturent: 'Non-vegeterian'
      }
    ];
  }
  orderOnline(resturentName) {
    this.router.navigate(['order/', resturentName.name]);
  }
  editFoodItem(resturentName) {
    this.router.navigate(['edit/', resturentName.name]);
  }
  filterResutent() {
    this.ngOnInit();
  }
  vegResturent() {
    this.ngOnInit();
    this.returentDetails = this.returentDetails.filter(resturent => resturent.categoryOFResturent === 'vegeterian');
    console.log(this.returentDetails);
    return this.returentDetails;
  }
  nonVegResturent() {
    this.ngOnInit();
    this.returentDetails = this.returentDetails.filter(resturent => resturent.categoryOFResturent === 'Non-vegeterian');
    console.log(this.returentDetails);
    return this.returentDetails;
  }

}

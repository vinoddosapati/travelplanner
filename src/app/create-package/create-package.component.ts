import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataintegrateService } from '../dataintegrate.service';
import { Router } from '@angular/router';
import { FlightsService } from '../flights.service';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { HotelsService } from '../hotels.service';


@Component({
  selector: 'app-create-package',
  templateUrl: './create-package.component.html',
  styleUrls: ['./create-package.component.css']
})
export class CreatePackageComponent implements OnInit {
  datePickerConfig: Partial<BsDatepickerConfig>;
  returnQuotes: any;
  returnPlaces: any;
  returnCarriers: any;
  returnCurrencies: any;
  returnflight: any;
  sourceDate: any;
  returnDate: any;
  hotels: any;
  travelFrom: any;
  travelTo: any;
  selectedHotel: any;
  finalPackage: any;

  // tslint:disable-next-line: max-line-length
  constructor(private router: Router, private dataservice: DataintegrateService, private flightService: FlightsService, private hotelService: HotelsService) {
    this.datePickerConfig = Object.assign({}, {
      containerClass: 'theme-dark-blue',
      showWeekNumbers: true,
      dateInputFormat: 'YYYY-MM-DD'
    });
   }

  packages: any;
  temp: any;
  Quotes: any;
  Places: Array<any>;
  Carriers: Array<any>;
  Currencies: any;
  source: any;
  travelstartdate: any;
  packageDetails: any;
  flightSelected: any;
  sourceairports: any;
  destairports: any;
  sourceairport: any;
  destairport: any;

  getPlaceName(carrierId: number) {
    // tslint:disable-next-line: prefer-for-of
    for (let index = 0; index < this.Places.length; index++) {
      const element = this.Places[index];
      // tslint:disable-next-line: triple-equals
      if (element.PlaceId == carrierId) {
        return element.Name;
      }
    }
  }

  getFlightName(carrierId: number) {
    // tslint:disable-next-line: prefer-for-of
    for (let index = 0; index < this.Carriers.length; index++) {
      const element = this.Carriers[index];
      // tslint:disable-next-line: triple-equals
      if (element.CarrierId == carrierId) {
        return element.Name;
      }
    }
  }

  getReturnPlaceName(carrierId: number) {
    // tslint:disable-next-line: prefer-for-of
    for (let index = 0; index < this.returnPlaces.length; index++) {
      const element = this.returnPlaces[index];
      // tslint:disable-next-line: triple-equals
      if (element.PlaceId == carrierId) {
        return element.Name;
      }
    }
  }

  getReturnFlightName(carrierId: number) {
    // tslint:disable-next-line: prefer-for-of
    for (let index = 0; index < this.returnCarriers.length; index++) {
      const element = this.returnCarriers[index];
      // tslint:disable-next-line: triple-equals
      if (element.CarrierId == carrierId) {
        return element.Name;
      }
    }
  }

  ngOnInit() {
    // console.log('inital ' + localStorage.getItem('user'));
    // if (localStorage.getItem('user') == null || localStorage.length <= 0) {
    //   this.router.navigate(['/']);
    // }
    console.log('create package session ' + localStorage.getItem('user'));
    if (localStorage.getItem('user') == null || localStorage.length <= 0) {
      this.router.navigate(['/']);
    // tslint:disable-next-line: triple-equals
    } else if (JSON.parse((localStorage.getItem('user'))).usertype != 'AGENT') {
      this.router.navigate(['/']);
    }
  }

  viewFlights(sourceairport: any, destairport: any, travelDate: any) {
    this.flightService.getSkyScannerFlights(sourceairport, destairport, travelDate).subscribe(flights => {
      this.Quotes = flights.Quotes;
      this.Places = flights.Places;
      this.Carriers = flights.Carriers;
      this.Currencies = flights.Currencies;
      console.log('All flights : ' + JSON.stringify(flights));
    });
  }

  viewReturnFlights(sourceairport: any, destairport: any, travelDate: any) {
    this.flightService.getSkyScannerFlights(sourceairport, destairport, travelDate).subscribe(flights => {
      this.returnQuotes = flights.Quotes;
      this.returnPlaces = flights.Places;
      this.returnCarriers = flights.Carriers;
      this.returnCurrencies = flights.Currencies;
      console.log('All flights : ' + JSON.stringify(flights));
    });
  }

  viewhotels() {
    console.log('view all hotels');
    this.hotelService.getHotels(this.travelTo).subscribe(hotels => {
      console.log('hotels found: ' + JSON.stringify(hotels.results));
      this.hotels = hotels.results;
    });
  }

  selectHotel(hotel: any) {
    console.log('selected hotel: ' + JSON.stringify(hotel));
    this.selectedHotel = hotel;
    this.packageUpload();
  }

  filghtBook(flightBooked: any) {
    console.log('Booked flight: ' + JSON.stringify(flightBooked));
    console.log('Selected values: ' + this.packageDetails);
    this.flightSelected = this.flightDetailsModify(flightBooked);
    console.log('Booked flight: ' + JSON.stringify(flightBooked));
    if (this.returnflight == null || this.returnflight == undefined) {

    } else {
      this.viewhotels();
      // this.packageUpload();
    }
    // this.packageUpload();
  }

  returnfilghtBook(flightBooked: any) {
    this.returnflight = this.returnflightDetailsModify(flightBooked);
    console.log('return flight ' + JSON.stringify(this.returnflight));
    if (this.flightSelected == null || this.flightSelected == undefined) {

    } else {
      // this.packageUpload();
      this.viewhotels();
    }
  }

  returnflightDetailsModify(flightBooked: any) {
    console.log('carries' + flightBooked.OutboundLeg.CarrierIds[0]);
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < flightBooked.OutboundLeg.CarrierIds.length; i++) {
      flightBooked.OutboundLeg.CarrierIds[i] = this.getReturnFlightName(flightBooked.OutboundLeg.CarrierIds);
    }
    flightBooked.OutboundLeg.OriginId = this.getReturnPlaceName(flightBooked.OutboundLeg.OriginId);
    flightBooked.OutboundLeg.DestinationId = this.getReturnPlaceName(flightBooked.OutboundLeg.DestinationId);

    return flightBooked;
  }

  flightDetailsModify(flightBooked: any) {
    console.log('carries' + flightBooked.OutboundLeg.CarrierIds[0]);
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < flightBooked.OutboundLeg.CarrierIds.length; i++) {
      flightBooked.OutboundLeg.CarrierIds[i] = this.getFlightName(flightBooked.OutboundLeg.CarrierIds);
    }
    flightBooked.OutboundLeg.OriginId = this.getPlaceName(flightBooked.OutboundLeg.OriginId);
    flightBooked.OutboundLeg.DestinationId = this.getPlaceName(flightBooked.OutboundLeg.DestinationId);

    return flightBooked;
  }

  packageUpload() {
    // Convert JSON array to JavaScript object
    // tslint:disable-next-line: variable-name
    const json_obj = JSON.parse(this.temp);

    // Add new key value pair "myData": "Helo World" to object
    if (localStorage.getItem('user') != null && localStorage.length > 0) {
      json_obj.uploadedby = JSON.parse((localStorage.getItem('user')))._id;
      // json_obj.allflight = [this.flightSelected, this.returnflight];

      json_obj.QuoteId = this.flightSelected.QuoteId;
      json_obj.MinPrice = this.flightSelected.MinPrice;
      json_obj.Direct = this.flightSelected.Direct;
      json_obj.CarrierIds = this.flightSelected.OutboundLeg.CarrierIds;
      // json_obj.CarrierIds = ['india', 'alska'];
      json_obj.OriginId = this.flightSelected.OutboundLeg.OriginId;
      json_obj.DestinationId = this.flightSelected.OutboundLeg.DestinationId;
      json_obj.DepartureDate = this.flightSelected.OutboundLeg.DepartureDate;
      json_obj.QuoteDateTime = this.flightSelected.QuoteDateTime;

      // returnflight
      json_obj.QuoteId2 = this.returnflight.QuoteId;
      json_obj.MinPrice2 = this.returnflight.MinPrice;
      json_obj.Direct2 = this.returnflight.Direct;
      json_obj.CarrierIds2 = this.returnflight.OutboundLeg.CarrierIds;
      json_obj.OriginId2 = this.returnflight.OutboundLeg.OriginId;
      json_obj.DestinationId2 = this.returnflight.OutboundLeg.DestinationId;
      json_obj.DepartureDate2 = this.returnflight.OutboundLeg.DepartureDate;
      json_obj.QuoteDateTime2 = this.returnflight.QuoteDateTime;

      // hotel
      json_obj.hotelName = this.selectedHotel.name;
      json_obj.rating = this.selectedHotel.rating;
      json_obj.address = this.selectedHotel.formatted_address;

      this.finalPackage = json_obj;
    }

    console.log('test ' + JSON.stringify(json_obj));

    // this.dataservice.createPackage(json_obj).subscribe(data => {
    //   this.packages = data;
    //   console.log('packages upfdated ' + data);
    //   console.log('session in package' + localStorage.getItem('user'));
    //   if (data == null) {
    //     console.log('Error');
    //   } else {
    //     console.log('packages upfdated ' + data);
    //     this.router.navigate(['/package/viewAll']);
    //   }
    // });
  }

  submitPackage() {
    if (this.finalPackage != null) {
    this.dataservice.createPackage(this.finalPackage).subscribe(data => {
      this.packages = data;
      console.log('packages upfdated ' + data);
      console.log('session in package' + localStorage.getItem('user'));
      if (data == null) {
        console.log('Error package upload');
      } else {
        console.log('packages upfdated ' + data);
        localStorage.setItem('package', data._id);
        this.router.navigate(['/package/viewAll']);
      }
    });
  } else {
    console.log('select flights and hotels');
  }
  }

  onSubmit(it: NgForm) {
    this.temp = JSON.stringify(it.value);
    console.log(this.temp);
    this.sourceDate = it.value.travelstartdate;
    this.returnDate = it.value.travelreturndate;
    this.travelFrom = it.value.source;
    this.travelTo = it.value.dest;
    this.packageDetails = JSON.stringify(it.value);
    this.getSourceAirports(it);
    this.getDestAirports(it);
    // this.viewFlights();
    // this.viewReturnFlights();
  }

  getSourceAirports(it: NgForm) {
    const paramatersAirport = {city: it.value.source};
    this.flightService.getAirportsList(paramatersAirport).subscribe(airports => {
      console.log('airports: ' + JSON.stringify(airports));
      this.sourceairports = airports.Places;
    });
  }

  getDestAirports(it: NgForm) {
    const paramatersAirport = {city: it.value.dest};
    this.flightService.getAirportsList(paramatersAirport).subscribe(airports => {
      console.log('airports: ' + JSON.stringify(airports));
      this.destairports = airports.Places;
    });
  }

  selectSourceAirport(airport: any) {
    console.log(airport + 'choosen source');
    this.sourceairport = airport.PlaceId;
    if (this.destairport == null || this.destairport == undefined) {
      console.log('need to select dest airport');
    } else {
      this.viewFlights(this.sourceairport, this.destairport, this.sourceDate);
      this.viewReturnFlights(this.destairport, this.sourceairport, this.returnDate);
    }
  }

  selectDestAirport(airport: any) {
    console.log(airport + 'choosen source');
    this.destairport = airport.PlaceId;
    if (this.sourceairport == null || this.sourceairport == undefined) {
      console.log('need to select source airport');
    } else {
      this.viewFlights(this.sourceairport, this.destairport, this.sourceDate);
      this.viewReturnFlights(this.destairport, this.sourceairport, this.returnDate);
    }
  }

}

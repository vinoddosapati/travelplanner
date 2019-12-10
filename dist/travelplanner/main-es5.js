(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-nav></app-nav>\n<div class=\"container\">\n      <router-outlet></router-outlet>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/bookedpackage/bookedpackage.component.html": 
        /*!**************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bookedpackage/bookedpackage.component.html ***!
          \**************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h2>Booked packages</h2>\n<div class=\"card-deck\" #book>\n  <div *ngFor=\"let package of packagesList\">\n    <div class=\"card\" style=\"width: 20rem;\">\n      <div class=\"card-body text-center\">\n        <h5 class=\"card-title\">Package Name : {{ package.packageName }}</h5>\n        <p class=\"card-text\">ID : {{ package._id }}</p>\n        <p class=\"card-text\">Source : {{ package.source }}</p>\n        <p class=\"card-text\">Destination : {{ package.dest }}</p>\n        <p class=\"card-text\">From : {{ package.from | date}}</p>\n        <p class=\"card-text\">Till : {{ package.till | date}}</p>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"profilePackage(package)\" data-toggle=\"modal\"\n          data-target=\"#exampleModalCenter\">\n          View Full Package\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"exampleModalCenter\" #exampleModalCenter tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Modal title</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"card\" style=\"width:400px\">\n          <div class=\"card-header text-center\">\n            <h5>User Information: </h5>\n          </div>\n          <img class=\"card-img-top\" src={{userInfo.pic}} alt=\"Card image\" style=\"width:100%\">\n          <div class=\"card-body\">\n            <h4 class=\"card-title\">{{userInfo.name}}</h4>\n            <p class=\"card-text\">{{userInfo.email}}</p>\n          </div>\n        </div>\n        <div *ngIf=\"isCurrentPackage()\">\n        <div class=\"card\" style=\"width:400px\">\n          <div class=\"card-header text-center\">\n            <h5>Selected Trip: </h5>\n          </div>\n          <div class=\"card-body\">\n            <h4 class=\"card-title\">Package Name: {{ currentPackage.packageName }}</h4>\n            <p class=\"card-text\">Source : {{ currentPackage.source }}</p>\n            <p class=\"card-text\">Destination : {{ currentPackage.dest }}</p>\n            <p class=\"card-text\">From : {{ currentPackage.from | date}}</p>\n            <p class=\"card-text\">Till : {{ currentPackage.till | date}}</p>\n          </div>\n        </div>\n\n        <div class=\"card\" style=\"width:400px\">\n            <div class=\"card-header text-center\">\n              <h5>Depart Flight Info: </h5>\n            </div>\n            <div class=\"card-body\">\n              <h4 class=\"card-title\">From : {{ currentPackage.flight.OutboundLeg.OriginId }}</h4>\n              <p class=\"card-text\">To : {{ currentPackage.flight.OutboundLeg.DestinationId }}</p>\n              <p class=\"card-text\">Airlines : {{currentPackage.flight.OutboundLeg.CarrierIds}} </p>\n              <p class=\"card-text\">Price : {{currentPackage.flight.MinPrice }} </p>\n              <!-- <div *ngFor=\"let flightname of currentPackage.flight.OutboundLeg.CarrierIds\">\n                <p>flightname</p>\n              </div> -->\n            </div>\n          </div>\n\n          <div class=\"card\" style=\"width:400px\">\n              <div class=\"card-header text-center\">\n                <h5>Return Flight Info: </h5>\n              </div>\n              <div class=\"card-body\">\n                <h4 class=\"card-title\">From : {{ currentPackage.returnflight.OutboundLeg.OriginId }}</h4>\n                <p class=\"card-text\">To : {{ currentPackage.returnflight.OutboundLeg.DestinationId }}</p>\n                <p class=\"card-text\">Airlines : {{currentPackage.returnflight.OutboundLeg.CarrierIds}} </p>\n                <p class=\"card-text\">Price : {{currentPackage.returnflight.MinPrice }} </p>\n              </div>\n            </div>\n\n            <div class=\"card\" style=\"width:400px\">\n                <div class=\"card-header text-center\">\n                  <h5>Hotel Info: </h5>\n                </div>\n                <div class=\"card-body\">\n                  <h4 class=\"card-title\">Hotel Name : {{ currentPackage.hotel.hotelname }}</h4>\n                  <p class=\"card-text\">Rating : {{ currentPackage.hotel.rating }}</p>\n                  <p class=\"card-text\">Address : {{currentPackage.hotel.hoteladdress }} </p>\n                </div>\n              </div>\n        </div>\n\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        <!-- <button type=\"button\" class=\"btn btn-primary\" (click)=\"downloadPDF()\">Save to pdf</button> -->\n      </div>\n    </div>\n  </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/create-package/create-package.component.html": 
        /*!****************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/create-package/create-package.component.html ***!
          \****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<section>\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-12 col-md-8 col-lg-8 col-xl-6\">\n        <div class=\"row\">\n          <div class=\"col text-center\">\n            <h1>Create Package</h1>\n          </div>\n        </div>\n        <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link active\" id=\"home-tab\" data-toggle=\"tab\" href=\"#home\" role=\"tab\" aria-controls=\"home\"\n              aria-selected=\"true\">Details</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" id=\"airport-tab\" data-toggle=\"tab\" href=\"#airport\" role=\"tab\" aria-controls=\"airport\"\n              aria-selected=\"false\">Airport</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" id=\"profile-tab\" data-toggle=\"tab\" href=\"#profile\" role=\"tab\" aria-controls=\"profile\"\n              aria-selected=\"false\">Flights</a>\n          </li>\n          <li class=\"nav-item\">\n              <a class=\"nav-link\" id=\"return-tab\" data-toggle=\"tab\" href=\"#return\" role=\"tab\" aria-controls=\"return\"\n                aria-selected=\"false\">Return Flights</a>\n            </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" id=\"contact-tab\" data-toggle=\"tab\" href=\"#contact\" role=\"tab\" aria-controls=\"contact\"\n              aria-selected=\"false\">Hotels</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" id=\"send-tab\" data-toggle=\"tab\" href=\"#send\" role=\"tab\" aria-controls=\"send\"\n              aria-selected=\"false\">Submit</a>\n          </li>\n        </ul>\n        <div class=\"tab-content\" id=\"myTabContent\">\n          <div class=\"tab-pane fade show active\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\n            <form #it=\"ngForm\" (ngSubmit)=\"onSubmit(it)\" novalidate>\n              <div class=\"row align-items-center\">\n                <div class=\"col mt-4\">\n                  <input ngModel name=\"packageName\" #packageName=\"ngModel\" type=\"text\" required class=\"form-control\"\n                    placeholder=\"Package Name\">\n                </div>\n              </div>\n              <div class=\"row align-items-center mt-4\">\n                <div class=\"col\">\n                  <input ngModel name=\"source\" #source=\"ngModel\" required type=\"text\" class=\"form-control\"\n                    placeholder=\"Source\">\n                </div>\n              </div>\n              <div class=\"row align-items-center mt-4\">\n                <div class=\"col\">\n                  <input ngModel name=\"dest\" #dest=\"ngModel\" required type=\"text\" class=\"form-control\"\n                    placeholder=\"Destination\">\n                </div>\n              </div>\n              <div class=\"row align-items-center mt-4\">\n                <div class=\"col\">\n                  <input ngModel name=\"travelstartdate\" #travelstartdate=\"ngModel\" required type=\"text\" bsDatepicker\n                    class=\"form-control\" placeholder=\"Travel Start Date\">\n                </div>\n              </div>\n              <div class=\"row align-items-center mt-4\">\n                <div class=\"col\">\n                  <input ngModel name=\"travelreturndate\" #travelreturndate=\"ngModel\" required type=\"text\" bsDatepicker\n                    class=\"form-control\" placeholder=\"Travel Return Date\">\n                </div>\n              </div>\n              <button class=\"btn btn-primary mt-4\">Generate</button>\n            </form>\n          </div>\n          <div class=\"tab-pane fade\" id=\"airport\" role=\"tabpanel\" aria-labelledby=\"airport-tab\">Get Source Airports\n            <div *ngFor=\"let airport of sourceairports\">\n              <div class=\"card\">\n                <div class=\"card-body\">\n                  <p class=\"card-title\">{{airport.PlaceName}}, {{airport.CountryName}}  ({{airport.PlaceId}})</p>\n                  <p class=\"btn btn-primary\" (click)=\"selectSourceAirport(airport)\">Choose {{airport.PlaceId}}</p>\n                </div>\n              </div>\n            </div>\n\n            Destination Airports:\n            <div *ngFor=\"let airport of destairports\">\n                <div class=\"card\">\n                  <div class=\"card-body\">\n                    <p class=\"card-title\">{{airport.PlaceName}}, {{airport.CountryName}}  ({{airport.PlaceId}})</p>\n                    <p class=\"btn btn-primary\" (click)=\"selectDestAirport(airport)\">Choose {{airport.PlaceId}}</p>\n                  </div>\n                </div>\n              </div>\n          </div>\n          <div class=\"tab-pane fade\" id=\"profile\" role=\"tabpanel\" aria-labelledby=\"profile-tab\">Get Flights\n\n            <div *ngFor=\"let flight of Quotes\">\n              <div class=\"card\">\n                <div class=\"card-body\">\n                  <p class=\"card-text\">From {{ getPlaceName(flight.OutboundLeg.OriginId) }} to\n                    {{ getPlaceName(flight.OutboundLeg.DestinationId) }} </p>\n                    <p class=\"card-text\">Airlines: {{getFlightName(flight.OutboundLeg.CarrierIds)}}</p>\n                  <p class=\"card-text\">Price {{ flight.MinPrice }}</p>\n                  <p class=\"btn btn-primary\" (click)=\"filghtBook(flight)\">Book</p>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"tab-pane fade\" id=\"return\" role=\"tabpanel\" aria-labelledby=\"return-tab\">Get return Flights\n\n              <div *ngFor=\"let flight of returnQuotes\">\n                <div class=\"card\">\n                  <div class=\"card-body\">\n                    <p class=\"card-text\">From {{ getReturnPlaceName(flight.OutboundLeg.OriginId) }} to\n                      {{ getReturnPlaceName(flight.OutboundLeg.DestinationId) }} </p>\n                    <p class=\"card-text\">Airlines: {{getReturnFlightName(flight.OutboundLeg.CarrierIds)}}</p>\n                    <p class=\"card-text\">Price {{ flight.MinPrice }}</p>\n                    <p class=\"btn btn-primary\" (click)=\"returnfilghtBook(flight)\">Book</p>\n                  </div>\n                </div>\n              </div>\n            </div>\n          <div class=\"tab-pane fade\" id=\"contact\" role=\"tabpanel\" aria-labelledby=\"contact-tab\">Get Hotels\n            <div *ngFor=\"let hotel of hotels\">\n              <div class=\"card\">\n                <div class=\"card-body\">\n                  <p class=\"card-text\">Hotel Name:  {{ hotel.name }}</p>\n                  <p class=\"card-text\">Rating: {{ hotel.rating }}</p>\n                  <p class=\"card-text\">Address:  {{ hotel.formatted_address }}</p>\n                  <p class=\"btn btn-primary\" (click)=\"selectHotel(hotel)\">Book</p>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"tab-pane fade\" id=\"send\" role=\"tabpanel\" aria-labelledby=\"send-tab\">Get Hotels\n            <button type=\"btn-primary\" (click)=\"submitPackage()\">Create Package</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!--Flights Modal -->\n<div class=\"modal fade\" id=\"Modal1\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"ModalLabel1\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"ModalLabel1\">Flights</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div *ngFor=\"let flight of Quotes\">\n          <div class=\"radio\">\n            <label><input type=\"radio\" name=\"{{flight.QuoteId}}\">From {{ flight.OutboundLeg.OriginId }} to\n              {{ flight.OutboundLeg.DestinationId }} Price {{ flight.MinPrice }}</label>\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\">Done</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!--Hotel Modal -->\n<div class=\"modal fade\" id=\"Modal2\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"ModalLabel2\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"ModalLabel2\">Hotels</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        ...\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\">Done</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<!-- <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\n  <li class=\"nav-item\">\n    <a class=\"nav-link active\" id=\"home-tab\" data-toggle=\"tab\" href=\"#home\" role=\"tab\" aria-controls=\"home\" aria-selected=\"true\">Home</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" id=\"profile-tab\" data-toggle=\"tab\" href=\"#profile\" role=\"tab\" aria-controls=\"profile\" aria-selected=\"false\">Profile</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" id=\"contact-tab\" data-toggle=\"tab\" href=\"#contact\" role=\"tab\" aria-controls=\"contact\" aria-selected=\"false\">Contact</a>\n  </li>\n</ul>\n<div class=\"tab-content\" id=\"myTabContent\">\n  <div class=\"tab-pane fade show active\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\">...</div>\n  <div class=\"tab-pane fade\" id=\"profile\" role=\"tabpanel\" aria-labelledby=\"profile-tab\">...</div>\n  <div class=\"tab-pane fade\" id=\"contact\" role=\"tabpanel\" aria-labelledby=\"contact-tab\">...</div>\n</div> -->\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/createspecialholiday/createspecialholiday.component.html": 
        /*!****************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/createspecialholiday/createspecialholiday.component.html ***!
          \****************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<form #it=\"ngForm\" (ngSubmit)=\"onSubmit(it)\" novalidate>\n    <div class=\"row align-items-center\">\n      <div class=\"col mt-4\">\n        <input ngModel name=\"packageName\" #packageName=\"ngModel\" type=\"text\" required class=\"form-control\"\n          placeholder=\"Holiday Package Name\">\n      </div>\n    </div>\n    <div class=\"row align-items-center mt-4\">\n      <div class=\"col\">\n        <input ngModel name=\"travelstartdate\" #travelstartdate=\"ngModel\" required type=\"text\" bsDatepicker\n          class=\"form-control\" placeholder=\"Travel Start Date\">\n      </div>\n    </div>\n    <div class=\"row align-items-center mt-4\">\n      <div class=\"col\">\n        <input ngModel name=\"travelreturndate\" #travelreturndate=\"ngModel\" required type=\"text\" bsDatepicker\n          class=\"form-control\" placeholder=\"Travel Return Date\">\n      </div>\n    </div>\n    <button class=\"btn btn-primary mt-4\">Add Holiday</button>\n  </form>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html": 
        /*!******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card-deck\">\n  <div *ngFor=\"let user of usersList\">\n    <div class=\"card\" style=\"width: 20rem;\">\n      <div class=\"card-body text-center\">\n        <h5 class=\"card-title\">Name : {{ user.name }}</h5>\n        <p class=\"card-text\">EmailID : {{ user.email }}</p>\n        <p class=\"card-text\">Customer Type : {{ user.usertype }}</p>\n        <a href=\"#\" class=\"btn btn-primary\">Convert to AGENT</a>\n      </div>\n    </div>\n  </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/details/details.component.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/details/details.component.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>details works!</p>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<section>\n    <div class=\"container\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-12 col-md-8 col-lg-8 col-xl-6\">\n          <div class=\"row\">\n            <div class=\"col text-center\">\n              <h1>Login</h1>\n            </div>\n          </div>\n          <div class=\"card-block\">\n              <button class=\"btn btn-social-icon btn-google\" (click)=\"signInWithGoogle()\">Google Login<span class=\"fa fa-google\"></span></button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/menudrop/menudrop.component.html": 
        /*!****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menudrop/menudrop.component.html ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"dropdown-content\">\n    <a href=\"#\">Profile</a>\n    <a href=\"#\">Logout</a>\n    <!-- <a href=\"#\">Link 3</a> -->\n  </div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav/nav.component.html": 
        /*!******************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav/nav.component.html ***!
          \******************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">Navbar</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\"\n    aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <div *ngIf=\"sendAgentType()\">\n        <li class=\"nav-item dropdown\" id=\"agent\">\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\"\n            aria-haspopup=\"true\" aria-expanded=\"false\">\n            Package\n          </a>\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n            <a class=\"dropdown-item\" routerLink=\"/package/create\" routerLinkActive=\"active\">Create Package</a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" routerLink=\"/package/viewcreated\" routerLinkActive=\"active\">View Created Packages</a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" routerLink=\"/holiday/create\" routerLinkActive=\"active\">Add Special Holidays</a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" routerLink=\"/holiday/view\" routerLinkActive=\"active\">View Special Holidays</a>\n          </div>\n\n        </li>\n      </div>\n      <div *ngIf=\"sendUserType()\">\n        <li class=\"nav-item dropdown\" id=\"user\">\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\"\n            aria-haspopup=\"true\" aria-expanded=\"false\">\n            Package\n          </a>\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n              <a class=\"dropdown-item\" routerLink=\"user/package/create\" routerLinkActive=\"active\">Create Package</a>\n              <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" routerLink=\"/package/booked\" routerLinkActive=\"active\">Booked Package</a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" routerLink=\"/package/viewAll\" routerLinkActive=\"active\">View Available Packages</a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" routerLink=\"/package/viewAll\" routerLinkActive=\"active\">Created Packages</a>\n          </div>\n        </li>\n      </div>\n      <div *ngIf=\"sendUserType()\">\n        <li class=\"nav-item dropdown\" id=\"user\">\n          <a (click)=\"reqAgent()\" class=\"btn btn-danger\">Convert to Agent</a>\n        </li>\n      </div>\n      <div *ngIf=\"sendAdminType()\">\n        <li class=\"nav-item dropdown\" id=\"admin\">\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\"\n            aria-haspopup=\"true\" aria-expanded=\"false\">\n            Dashboard\n          </a>\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n            <a class=\"dropdown-item\" routerLink=\"/user/request\" routerLinkActive=\"active\">Requests</a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" routerLink=\"/package/viewAll\" routerLinkActive=\"active\">View Packages</a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" routerLink=\"/holiday/create\" routerLinkActive=\"active\">Add Special Holiday</a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" routerLink=\"/holiday/view\" routerLinkActive=\"active\">View Special Holidays</a>\n          </div>\n        </li>\n      </div>\n      <div *ngIf=\"!isLoggedIn()\">\n      <li>\n          <button class=\"btn btn-social-icon btn-google\" (click)=\"signInWithGoogle()\">Google Login<span class=\"fa fa-google\"></span></button>\n      </li>\n    </div>\n    <div *ngIf= \"isLoggedIn()\">\n      <li>\n          <a class=\"nav-link\" (click)=\"signOut()\" >Logout<span class=\"sr-only\">(current)</span></a>\n      </li>\n    </div>\n    </ul>\n  </div>\n</nav>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/package/package.component.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/package/package.component.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h2>Available packages</h2>\r\n<div class=\"card-deck\">\r\n    <div *ngFor=\"let package of packagesList\">\r\n      <div class=\"card\" style=\"width: 20rem;\">\r\n        <div class=\"card-body text-center\">\r\n            <h5 class=\"card-title\">Package Name : {{ package.packageName }}</h5>\r\n            <p class=\"card-text\">ID : {{ package._id }}</p>\r\n            <p class=\"card-text\">Source : {{ package.source }}</p>\r\n            <p class=\"card-text\">Destination : {{ package.dest }}</p>\r\n            <p class=\"card-text\">From : {{ package.from | date}}</p>\r\n            <p class=\"card-text\">Till : {{ package.till | date}}</p>\r\n            <div *ngIf=\"!usertype()\"><a (click)=\"bookpackage(package)\" class=\"btn btn-primary\">Book</a></div>\r\n            <div *ngIf=\"usertype()\"><a (click)=\"deletepackage(package)\" class=\"btn btn-danger\">Delete Package</a></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/request/request.component.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/request/request.component.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h2>Requesting Users to Agents</h2>\n\n<div *ngFor=\"let reqUser of reqUsers\">\n<div class=\"card\">\n  <div class=\"card-header text-center\">\n    <h5>{{reqUser.name}}</h5>\n  </div>\n  <div class=\"card-body\">\n    <img class=\"img-fluid rounded float-left\" src=\"{{reqUser.pic}}\" alt=\"Card image cap\">\n    <div class=\"text-center\">\n      <h5 class=\"card-title\">Email: </h5>\n      <p>{{reqUser.email}}</p>\n      <h5 class=\"card-title\">Google ID: </h5>\n      <p>{{reqUser.id}}</p>\n      <h5 class=\"card-title\">Type: </h5>\n      <p>{{reqUser.usertype}}</p>\n      <a routerLink=\"/user/request\" routerLinkActive=\"active\" (click)=\"reqApprove(reqUser)\" class=\"btn btn-success\">Approve</a>\n      <a routerLink=\"/user/request\" routerLinkActive=\"active\" (click)=\"deletereqUser(reqUser)\" class=\"btn btn-danger\">Decline</a>\n    </div>\n  </div>\n  <div class=\"card-footer text-muted text-center\">\n    2 days ago\n  </div>\n</div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<section>\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-12 col-md-8 col-lg-8 col-xl-6\">\n        <div class=\"row\">\n          <div class=\"col text-center\">\n            <h1>Register</h1>\n          </div>\n        </div>\n        <form #it=\"ngForm\" (ngSubmit)=\"onSubmit(it)\" novalidate>\n        <div class=\"row align-items-center\">\n          <div class=\"col mt-4\">\n            <input ngModel name = \"Email\" #Email=\"ngModel\" type=\"email\" required class=\"form-control\" placeholder=\"Email\">\n          </div>\n        </div>\n        <div class=\"row align-items-center mt-4\">\n          <div class=\"col\">\n            <input ngModel name=\"firstName\" #firstName=\"ngModel\" required type=\"text\" class=\"form-control\" placeholder=\"Full Name\">\n          </div>\n        </div>\n        <div class=\"row align-items-center mt-4\">\n          <div class=\"col\">\n            <input ngModel name=\"pswd\" #pswd=\"ngModel\" required type=\"password\" class=\"form-control\" placeholder=\"Password\">\n          </div>\n          <div class=\"col\">\n            <input ngModel name=\"newpswd\" #newpswd=\"ngModel\" required type=\"password\" class=\"form-control\" placeholder=\"Confirm Password\">\n          </div>\n        </div>\n        <div class=\"row justify-content-start mt-4\">\n          <div class=\"col\">\n            <!-- <div class=\"form-check\">\n              <label class=\"form-check-label\">\n                <input type=\"checkbox\" class=\"form-check-input\">\n                I Read and Accept <a href=\"\">Terms and Conditions</a>\n              </label>\n            </div> -->\n\n            <button (click)=\"signUp(Email)\" class=\"btn btn-primary mt-4\">Submit</button>\n          </div>\n        </div>\n      </form>\n      </div>\n    </div>\n  </div>\n</section>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/specialholidayview/specialholidayview.component.html": 
        /*!************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/specialholidayview/specialholidayview.component.html ***!
          \************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div *ngFor=\"let holiday of holidaysList\">\n  <div class=\"card\" style=\"width:400px\">\n    <div class=\"card-header text-center\">\n      <h5>Holiday Name: {{ holiday.name }} </h5>\n    </div>\n    <div class=\"card-body\">\n      <p class=\"card-title\">From Date: {{ holiday.from }}</p>\n      <p class=\"card-text\">To Date : {{ holiday.till }}</p>\n      <button class=\"btn btn-danger\" *ngIf=\"adminType()\" (click)=\"deleteHoliday(holiday)\">Delete Holiday</button>\n    </div>\n  </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-packet-create/user-packet-create.component.html": 
        /*!************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-packet-create/user-packet-create.component.html ***!
          \************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/view-created-package/view-created-package.component.html": 
        /*!****************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view-created-package/view-created-package.component.html ***!
          \****************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h2>Available packages</h2>\n<div class=\"card-deck\">\n  <div *ngFor=\"let package of packagesList\">\n    <div class=\"card\" style=\"width: 20rem;\">\n      <div class=\"card-body text-center\">\n        <h5 class=\"card-title\">Package Name : {{ package.packageName }}</h5>\n        <p class=\"card-text\">Source : {{ package.source }}</p>\n        <p class=\"card-text\">Destination : {{ package.dest }}</p>\n        <p class=\"card-text\">From : {{ package.from }}</p>\n        <p class=\"card-text\">Till : {{ package.till }}</p>\n        <button type=\"button\" (click)=\"viewPackage(package)\" class=\"btn btn-primary\" data-toggle=\"modal\"\n          data-target=\"#exampleModalCenter\">\n          View Full Itinerary\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Itinerary</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\" *ngIf=\"isSelected()\">\n        <div class=\"card\" style=\"width:400px\">\n          <div class=\"card-header text-center\">\n            <h5>Package Details: </h5>\n          </div>\n          <div class=\"card-body\">\n            <h4 class=\"card-title\">{{ selectedPackage.packageName }}</h4>\n            <p class=\"card-text\">Source : {{ selectedPackage.source }}</p>\n            <p class=\"card-text\">Destination : {{ selectedPackage.dest }}</p>\n            <p class=\"card-text\">From : {{ selectedPackage.from }}</p>\n            <p class=\"card-text\">Till : {{ selectedPackage.till }}</p>\n          </div>\n        </div>\n        <div class=\"card\" style=\"width:400px\">\n          <div class=\"card-header text-center\">\n            <h5>Departure Flight: </h5>\n          </div>\n          <div class=\"card-body\">\n            <h4 class=\"card-title\">Airlines: {{ selectedPackage.flight.OutboundLeg.CarrierIds }}</h4>\n            <p class=\"card-text\">From : {{ selectedPackage.flight.OutboundLeg.OriginId }}</p>\n            <p class=\"card-text\">To : {{ selectedPackage.flight.OutboundLeg.DestinationId }}</p>\n            <p class=\"card-text\">Departs at : {{ selectedPackage.flight.OutboundLeg.DepartureDate }}</p>\n          </div>\n        </div>\n        <div class=\"card\" style=\"width:400px\">\n          <div class=\"card-header text-center\">\n            <h5>Return Flight: </h5>\n          </div>\n          <div class=\"card-body\">\n            <h4 class=\"card-title\">Airlines: {{ selectedPackage.returnflight.OutboundLeg.CarrierIds }}</h4>\n            <p class=\"card-text\">From : {{ selectedPackage.returnflight.OutboundLeg.OriginId }}</p>\n            <p class=\"card-text\">To : {{ selectedPackage.returnflight.OutboundLeg.DestinationId }}</p>\n            <p class=\"card-text\">Departs at : {{ selectedPackage.returnflight.OutboundLeg.DepartureDate }}</p>\n          </div>\n        </div>\n        <div class=\"card\" style=\"width:400px\">\n          <div class=\"card-header text-center\">\n            <h5>Hotel: </h5>\n          </div>\n          <div class=\"card-body\">\n            <h4 class=\"card-title\">Hotel Name: {{ selectedPackage.hotel.hotelname }}</h4>\n            <p class=\"card-text\">Rating : {{ selectedPackage.hotel.rating }}</p>\n            <p class=\"card-text\">Address : {{ selectedPackage.hotel.hoteladdress }}</p>\n          </div>\n        </div>\n        <div class=\"card\" style=\"width:400px\">\n          <div class=\"card-header text-center\">\n            <h5>Booked Users </h5>\n          </div>\n          <div class=\"card-body\">\n            <div *ngFor=\"let user of users\">\n              <p class=\"card-text\">User Name : {{ user.username }} and Email: {{ user.useremail }}</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/viewtrip/viewtrip.component.html": 
        /*!****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/viewtrip/viewtrip.component.html ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div #content>\n<div class=\"card\" style=\"width:400px\" *ngIf=\"isPackageThere()\">\n  <div class=\"card-header text-center\">\n    <h5>Package Details: </h5>\n  </div>\n  <div class=\"card-body\">\n    <h4 class=\"card-title\">{{ selectedPackage.packageName }}</h4>\n    <p class=\"card-text\">Source : {{ selectedPackage.source }}</p>\n    <p class=\"card-text\">Destination : {{ selectedPackage.dest }}</p>\n    <p class=\"card-text\">From : {{ selectedPackage.from }}</p>\n    <p class=\"card-text\">Till : {{ selectedPackage.till }}</p>\n  </div>\n</div>\n<div class=\"card\" style=\"width:400px\">\n  <div class=\"card-header text-center\">\n    <h5>Departure Flight: </h5>\n  </div>\n  <div class=\"card-body\">\n    <h4 class=\"card-title\">Airlines: {{ selectedPackage.flight.OutboundLeg.CarrierIds }}</h4>\n    <p class=\"card-text\">From : {{ selectedPackage.flight.OutboundLeg.OriginId }}</p>\n    <p class=\"card-text\">To : {{ selectedPackage.flight.OutboundLeg.DestinationId }}</p>\n    <p class=\"card-text\">Departs at : {{ selectedPackage.flight.OutboundLeg.DepartureDate }}</p>\n  </div>\n</div>\n<div class=\"card\" style=\"width:400px\">\n  <div class=\"card-header text-center\">\n    <h5>Return Flight: </h5>\n  </div>\n  <div class=\"card-body\">\n    <h4 class=\"card-title\">Airlines: {{ selectedPackage.returnflight.OutboundLeg.CarrierIds }}</h4>\n    <p class=\"card-text\">From : {{ selectedPackage.returnflight.OutboundLeg.OriginId }}</p>\n    <p class=\"card-text\">To : {{ selectedPackage.returnflight.OutboundLeg.DestinationId }}</p>\n    <p class=\"card-text\">Departs at : {{ selectedPackage.returnflight.OutboundLeg.DepartureDate }}</p>\n  </div>\n</div>\n<div class=\"card\" style=\"width:400px\">\n  <div class=\"card-header text-center\">\n    <h5>Hotel: </h5>\n  </div>\n  <div class=\"card-body\">\n    <h4 class=\"card-title\">Hotel Name: {{ selectedPackage.hotel.hotelname }}</h4>\n    <p class=\"card-text\">Rating : {{ selectedPackage.hotel.rating }}</p>\n    <p class=\"card-text\">Address : {{ selectedPackage.hotel.hoteladdress }}</p>\n  </div>\n</div>\n<button class=\"btn btn-primary\" (click)=\"downloadPDF()\">Save as PDF</button>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
            /* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
            /* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");
            /* harmony import */ var _package_package_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./package/package.component */ "./src/app/package/package.component.ts");
            /* harmony import */ var _create_package_create_package_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./create-package/create-package.component */ "./src/app/create-package/create-package.component.ts");
            /* harmony import */ var _request_request_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./request/request.component */ "./src/app/request/request.component.ts");
            /* harmony import */ var _viewtrip_viewtrip_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./viewtrip/viewtrip.component */ "./src/app/viewtrip/viewtrip.component.ts");
            /* harmony import */ var _bookedpackage_bookedpackage_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bookedpackage/bookedpackage.component */ "./src/app/bookedpackage/bookedpackage.component.ts");
            /* harmony import */ var _view_created_package_view_created_package_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./view-created-package/view-created-package.component */ "./src/app/view-created-package/view-created-package.component.ts");
            /* harmony import */ var _createspecialholiday_createspecialholiday_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./createspecialholiday/createspecialholiday.component */ "./src/app/createspecialholiday/createspecialholiday.component.ts");
            /* harmony import */ var _specialholidayview_specialholidayview_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./specialholidayview/specialholidayview.component */ "./src/app/specialholidayview/specialholidayview.component.ts");
            /* harmony import */ var _user_packet_create_user_packet_create_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user-packet-create/user-packet-create.component */ "./src/app/user-packet-create/user-packet-create.component.ts");
            var routes = [
                { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
                { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"] },
                { path: 'details', component: _details_details_component__WEBPACK_IMPORTED_MODULE_5__["DetailsComponent"] },
                { path: 'agentsdetails', component: _package_package_component__WEBPACK_IMPORTED_MODULE_6__["PackageComponent"] },
                { path: 'package/create', component: _create_package_create_package_component__WEBPACK_IMPORTED_MODULE_7__["CreatePackageComponent"] },
                { path: 'package/viewAll', component: _package_package_component__WEBPACK_IMPORTED_MODULE_6__["PackageComponent"] },
                { path: 'user/request', component: _request_request_component__WEBPACK_IMPORTED_MODULE_8__["RequestComponent"] },
                { path: 'package/booked', component: _bookedpackage_bookedpackage_component__WEBPACK_IMPORTED_MODULE_10__["BookedpackageComponent"] },
                { path: 'package/viewcreated', component: _view_created_package_view_created_package_component__WEBPACK_IMPORTED_MODULE_11__["ViewCreatedPackageComponent"] },
                { path: 'view/ticket', component: _viewtrip_viewtrip_component__WEBPACK_IMPORTED_MODULE_9__["ViewtripComponent"] },
                { path: 'holiday/create', component: _createspecialholiday_createspecialholiday_component__WEBPACK_IMPORTED_MODULE_12__["CreatespecialholidayComponent"] },
                { path: 'holiday/view', component: _specialholidayview_specialholidayview_component__WEBPACK_IMPORTED_MODULE_13__["SpecialholidayviewComponent"] },
                { path: 'user/package/create', component: _user_packet_create_user_packet_create_component__WEBPACK_IMPORTED_MODULE_14__["UserPacketCreateComponent"] }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'travelplanner';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: provideConfig, AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "provideConfig", function () { return provideConfig; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
            /* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
            /* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
            /* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _package_package_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./package/package.component */ "./src/app/package/package.component.ts");
            /* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
            /* harmony import */ var _menudrop_menudrop_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./menudrop/menudrop.component */ "./src/app/menudrop/menudrop.component.ts");
            /* harmony import */ var _create_package_create_package_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./create-package/create-package.component */ "./src/app/create-package/create-package.component.ts");
            /* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.js");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
            /* harmony import */ var _request_request_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./request/request.component */ "./src/app/request/request.component.ts");
            /* harmony import */ var _viewtrip_viewtrip_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./viewtrip/viewtrip.component */ "./src/app/viewtrip/viewtrip.component.ts");
            /* harmony import */ var _bookedpackage_bookedpackage_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./bookedpackage/bookedpackage.component */ "./src/app/bookedpackage/bookedpackage.component.ts");
            /* harmony import */ var _view_created_package_view_created_package_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./view-created-package/view-created-package.component */ "./src/app/view-created-package/view-created-package.component.ts");
            /* harmony import */ var _createspecialholiday_createspecialholiday_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./createspecialholiday/createspecialholiday.component */ "./src/app/createspecialholiday/createspecialholiday.component.ts");
            /* harmony import */ var _specialholidayview_specialholidayview_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./specialholidayview/specialholidayview.component */ "./src/app/specialholidayview/specialholidayview.component.ts");
            /* harmony import */ var _user_packet_create_user_packet_create_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./user-packet-create/user-packet-create.component */ "./src/app/user-packet-create/user-packet-create.component.ts");
            var config = new angularx_social_login__WEBPACK_IMPORTED_MODULE_15__["AuthServiceConfig"]([
                {
                    id: angularx_social_login__WEBPACK_IMPORTED_MODULE_15__["GoogleLoginProvider"].PROVIDER_ID,
                    provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_15__["GoogleLoginProvider"]('279742459867-96eiak7ttri8660i9np3ps0demb3at0f.apps.googleusercontent.com')
                }
            ]);
            function provideConfig() {
                return config;
            }
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                        _nav_nav_component__WEBPACK_IMPORTED_MODULE_6__["NavComponent"],
                        _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                        _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"],
                        _details_details_component__WEBPACK_IMPORTED_MODULE_9__["DetailsComponent"],
                        _package_package_component__WEBPACK_IMPORTED_MODULE_11__["PackageComponent"],
                        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"],
                        _menudrop_menudrop_component__WEBPACK_IMPORTED_MODULE_13__["MenudropComponent"],
                        _create_package_create_package_component__WEBPACK_IMPORTED_MODULE_14__["CreatePackageComponent"],
                        _request_request_component__WEBPACK_IMPORTED_MODULE_19__["RequestComponent"],
                        _viewtrip_viewtrip_component__WEBPACK_IMPORTED_MODULE_20__["ViewtripComponent"],
                        _bookedpackage_bookedpackage_component__WEBPACK_IMPORTED_MODULE_21__["BookedpackageComponent"],
                        _view_created_package_view_created_package_component__WEBPACK_IMPORTED_MODULE_22__["ViewCreatedPackageComponent"],
                        _createspecialholiday_createspecialholiday_component__WEBPACK_IMPORTED_MODULE_23__["CreatespecialholidayComponent"],
                        _specialholidayview_specialholidayview_component__WEBPACK_IMPORTED_MODULE_24__["SpecialholidayviewComponent"],
                        _user_packet_create_user_packet_create_component__WEBPACK_IMPORTED_MODULE_25__["UserPacketCreateComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                        angularx_social_login__WEBPACK_IMPORTED_MODULE_15__["SocialLoginModule"],
                        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"],
                        ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_18__["BsDatepickerModule"].forRoot()
                    ],
                    providers: [{
                            provide: angularx_social_login__WEBPACK_IMPORTED_MODULE_15__["AuthServiceConfig"],
                            useFactory: provideConfig
                        }],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/bookedpackage/bookedpackage.component.css": 
        /*!***********************************************************!*\
          !*** ./src/app/bookedpackage/bookedpackage.component.css ***!
          \***********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2tlZHBhY2thZ2UvYm9va2VkcGFja2FnZS5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/bookedpackage/bookedpackage.component.ts": 
        /*!**********************************************************!*\
          !*** ./src/app/bookedpackage/bookedpackage.component.ts ***!
          \**********************************************************/
        /*! exports provided: BookedpackageComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookedpackageComponent", function () { return BookedpackageComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _dataintegrate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dataintegrate.service */ "./src/app/dataintegrate.service.ts");
            /* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
            /* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_4__);
            var BookedpackageComponent = /** @class */ (function () {
                function BookedpackageComponent(router, dataservice) {
                    this.router = router;
                    this.dataservice = dataservice;
                }
                BookedpackageComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.userInfo = JSON.parse(localStorage.getItem('user'));
                    console.log('package session ' + localStorage.getItem('user'));
                    if (localStorage.getItem('user') == null || localStorage.length <= 0) {
                        this.router.navigate(['/']);
                        // tslint:disable-next-line: triple-equals
                    }
                    else if (JSON.parse((localStorage.getItem('user'))).usertype == 'ADMIN') {
                        this.router.navigate(['/']);
                    }
                    var userId = JSON.parse((localStorage.getItem('user')))._id;
                    this.dataservice.getBookedPackages(userId).subscribe(function (data) {
                        _this.packagesList = data;
                        console.log('all booked packages ' + JSON.stringify(data));
                    });
                };
                BookedpackageComponent.prototype.profilePackage = function (packageselect) {
                    this.currentPackage = packageselect;
                };
                BookedpackageComponent.prototype.isCurrentPackage = function () {
                    if (this.currentPackage == undefined || this.currentPackage == null) {
                        return false;
                    }
                    else {
                        return true;
                    }
                };
                BookedpackageComponent.prototype.downloadPDF = function () {
                    var doc = new jspdf__WEBPACK_IMPORTED_MODULE_4__();
                    var specialElementHandler = {
                        '#editor': function (element, renderer) {
                            return true;
                        }
                    };
                    var content = this.book.nativeElement;
                    doc.fromHTML(content.innerHTML, 15, 15, {
                        'width': 190,
                        'elementHandlers': specialElementHandler
                    });
                    doc.save(this.currentPackage.packageName + '.pdf');
                };
                return BookedpackageComponent;
            }());
            BookedpackageComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _dataintegrate_service__WEBPACK_IMPORTED_MODULE_3__["DataintegrateService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('book', { static: true })
            ], BookedpackageComponent.prototype, "book", void 0);
            BookedpackageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-bookedpackage',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bookedpackage.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/bookedpackage/bookedpackage.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bookedpackage.component.css */ "./src/app/bookedpackage/bookedpackage.component.css")).default]
                })
            ], BookedpackageComponent);
            /***/ 
        }),
        /***/ "./src/app/create-package/create-package.component.css": 
        /*!*************************************************************!*\
          !*** ./src/app/create-package/create-package.component.css ***!
          \*************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS1wYWNrYWdlL2NyZWF0ZS1wYWNrYWdlLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/create-package/create-package.component.ts": 
        /*!************************************************************!*\
          !*** ./src/app/create-package/create-package.component.ts ***!
          \************************************************************/
        /*! exports provided: CreatePackageComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePackageComponent", function () { return CreatePackageComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _dataintegrate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dataintegrate.service */ "./src/app/dataintegrate.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _flights_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../flights.service */ "./src/app/flights.service.ts");
            /* harmony import */ var _hotels_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hotels.service */ "./src/app/hotels.service.ts");
            var CreatePackageComponent = /** @class */ (function () {
                // tslint:disable-next-line: max-line-length
                function CreatePackageComponent(router, dataservice, flightService, hotelService) {
                    this.router = router;
                    this.dataservice = dataservice;
                    this.flightService = flightService;
                    this.hotelService = hotelService;
                    this.datePickerConfig = Object.assign({}, {
                        containerClass: 'theme-dark-blue',
                        showWeekNumbers: true,
                        dateInputFormat: 'YYYY-MM-DD'
                    });
                }
                CreatePackageComponent.prototype.getPlaceName = function (carrierId) {
                    // tslint:disable-next-line: prefer-for-of
                    for (var index = 0; index < this.Places.length; index++) {
                        var element = this.Places[index];
                        // tslint:disable-next-line: triple-equals
                        if (element.PlaceId == carrierId) {
                            return element.Name;
                        }
                    }
                };
                CreatePackageComponent.prototype.getFlightName = function (carrierId) {
                    // tslint:disable-next-line: prefer-for-of
                    for (var index = 0; index < this.Carriers.length; index++) {
                        var element = this.Carriers[index];
                        // tslint:disable-next-line: triple-equals
                        if (element.CarrierId == carrierId) {
                            return element.Name;
                        }
                    }
                };
                CreatePackageComponent.prototype.getReturnPlaceName = function (carrierId) {
                    // tslint:disable-next-line: prefer-for-of
                    for (var index = 0; index < this.returnPlaces.length; index++) {
                        var element = this.returnPlaces[index];
                        // tslint:disable-next-line: triple-equals
                        if (element.PlaceId == carrierId) {
                            return element.Name;
                        }
                    }
                };
                CreatePackageComponent.prototype.getReturnFlightName = function (carrierId) {
                    // tslint:disable-next-line: prefer-for-of
                    for (var index = 0; index < this.returnCarriers.length; index++) {
                        var element = this.returnCarriers[index];
                        // tslint:disable-next-line: triple-equals
                        if (element.CarrierId == carrierId) {
                            return element.Name;
                        }
                    }
                };
                CreatePackageComponent.prototype.ngOnInit = function () {
                    // console.log('inital ' + localStorage.getItem('user'));
                    // if (localStorage.getItem('user') == null || localStorage.length <= 0) {
                    //   this.router.navigate(['/']);
                    // }
                    console.log('create package session ' + localStorage.getItem('user'));
                    if (localStorage.getItem('user') == null || localStorage.length <= 0) {
                        this.router.navigate(['/']);
                        // tslint:disable-next-line: triple-equals
                    }
                    else if (JSON.parse((localStorage.getItem('user'))).usertype != 'AGENT') {
                        this.router.navigate(['/']);
                    }
                };
                CreatePackageComponent.prototype.viewFlights = function (sourceairport, destairport, travelDate) {
                    var _this = this;
                    this.flightService.getSkyScannerFlights(sourceairport, destairport, travelDate).subscribe(function (flights) {
                        _this.Quotes = flights.Quotes;
                        _this.Places = flights.Places;
                        _this.Carriers = flights.Carriers;
                        _this.Currencies = flights.Currencies;
                        console.log('All flights : ' + JSON.stringify(flights));
                    });
                };
                CreatePackageComponent.prototype.viewReturnFlights = function (sourceairport, destairport, travelDate) {
                    var _this = this;
                    this.flightService.getSkyScannerFlights(sourceairport, destairport, travelDate).subscribe(function (flights) {
                        _this.returnQuotes = flights.Quotes;
                        _this.returnPlaces = flights.Places;
                        _this.returnCarriers = flights.Carriers;
                        _this.returnCurrencies = flights.Currencies;
                        console.log('All flights : ' + JSON.stringify(flights));
                    });
                };
                CreatePackageComponent.prototype.viewhotels = function () {
                    var _this = this;
                    console.log('view all hotels');
                    this.hotelService.getHotels(this.travelTo).subscribe(function (hotels) {
                        console.log('hotels found: ' + JSON.stringify(hotels.results));
                        _this.hotels = hotels.results;
                    });
                };
                CreatePackageComponent.prototype.selectHotel = function (hotel) {
                    console.log('selected hotel: ' + JSON.stringify(hotel));
                    this.selectedHotel = hotel;
                    this.packageUpload();
                };
                CreatePackageComponent.prototype.filghtBook = function (flightBooked) {
                    console.log('Booked flight: ' + JSON.stringify(flightBooked));
                    console.log('Selected values: ' + this.packageDetails);
                    this.flightSelected = this.flightDetailsModify(flightBooked);
                    console.log('Booked flight: ' + JSON.stringify(flightBooked));
                    // tslint:disable-next-line: triple-equals
                    if (this.returnflight == null || this.returnflight == undefined) {
                    }
                    else {
                        this.viewhotels();
                        // this.packageUpload();
                    }
                    // this.packageUpload();
                };
                CreatePackageComponent.prototype.returnfilghtBook = function (flightBooked) {
                    this.returnflight = this.returnflightDetailsModify(flightBooked);
                    console.log('return flight ' + JSON.stringify(this.returnflight));
                    // tslint:disable-next-line: triple-equals
                    if (this.flightSelected == null || this.flightSelected == undefined) {
                    }
                    else {
                        // this.packageUpload();
                        this.viewhotels();
                    }
                };
                CreatePackageComponent.prototype.returnflightDetailsModify = function (flightBooked) {
                    console.log('carries' + flightBooked.OutboundLeg.CarrierIds[0]);
                    // tslint:disable-next-line: prefer-for-of
                    for (var i = 0; i < flightBooked.OutboundLeg.CarrierIds.length; i++) {
                        flightBooked.OutboundLeg.CarrierIds[i] = this.getReturnFlightName(flightBooked.OutboundLeg.CarrierIds);
                    }
                    flightBooked.OutboundLeg.OriginId = this.getReturnPlaceName(flightBooked.OutboundLeg.OriginId);
                    flightBooked.OutboundLeg.DestinationId = this.getReturnPlaceName(flightBooked.OutboundLeg.DestinationId);
                    return flightBooked;
                };
                CreatePackageComponent.prototype.flightDetailsModify = function (flightBooked) {
                    console.log('carries' + flightBooked.OutboundLeg.CarrierIds[0]);
                    // tslint:disable-next-line: prefer-for-of
                    for (var i = 0; i < flightBooked.OutboundLeg.CarrierIds.length; i++) {
                        flightBooked.OutboundLeg.CarrierIds[i] = this.getFlightName(flightBooked.OutboundLeg.CarrierIds);
                    }
                    flightBooked.OutboundLeg.OriginId = this.getPlaceName(flightBooked.OutboundLeg.OriginId);
                    flightBooked.OutboundLeg.DestinationId = this.getPlaceName(flightBooked.OutboundLeg.DestinationId);
                    return flightBooked;
                };
                CreatePackageComponent.prototype.packageUpload = function () {
                    // Convert JSON array to JavaScript object
                    // tslint:disable-next-line: variable-name
                    var json_obj = JSON.parse(this.temp);
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
                };
                CreatePackageComponent.prototype.submitPackage = function () {
                    var _this = this;
                    if (this.finalPackage != null) {
                        this.dataservice.createPackage(this.finalPackage).subscribe(function (data) {
                            _this.packages = data;
                            console.log('packages upfdated ' + data);
                            console.log('session in package' + localStorage.getItem('user'));
                            if (data == null) {
                                console.log('Error package upload');
                            }
                            else {
                                console.log('packages upfdated ' + data);
                                localStorage.setItem('package', data._id);
                                _this.router.navigate(['/view/ticket']);
                            }
                        });
                    }
                    else {
                        console.log('select flights and hotels');
                    }
                };
                CreatePackageComponent.prototype.onSubmit = function (it) {
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
                };
                CreatePackageComponent.prototype.getSourceAirports = function (it) {
                    var _this = this;
                    var paramatersAirport = { city: it.value.source };
                    this.flightService.getAirportsList(paramatersAirport).subscribe(function (airports) {
                        console.log('airports: ' + JSON.stringify(airports));
                        _this.sourceairports = airports.Places;
                    });
                };
                CreatePackageComponent.prototype.getDestAirports = function (it) {
                    var _this = this;
                    var paramatersAirport = { city: it.value.dest };
                    this.flightService.getAirportsList(paramatersAirport).subscribe(function (airports) {
                        console.log('airports: ' + JSON.stringify(airports));
                        _this.destairports = airports.Places;
                    });
                };
                CreatePackageComponent.prototype.selectSourceAirport = function (airport) {
                    console.log(airport + 'choosen source');
                    this.sourceairport = airport.PlaceId;
                    // tslint:disable-next-line: triple-equals
                    if (this.destairport == null || this.destairport == undefined) {
                        console.log('need to select dest airport');
                    }
                    else {
                        this.viewFlights(this.sourceairport, this.destairport, this.sourceDate);
                        this.viewReturnFlights(this.destairport, this.sourceairport, this.returnDate);
                    }
                };
                CreatePackageComponent.prototype.selectDestAirport = function (airport) {
                    console.log(airport + 'choosen source');
                    this.destairport = airport.PlaceId;
                    // tslint:disable-next-line: triple-equals
                    if (this.sourceairport == null || this.sourceairport == undefined) {
                        console.log('need to select source airport');
                    }
                    else {
                        this.viewFlights(this.sourceairport, this.destairport, this.sourceDate);
                        this.viewReturnFlights(this.destairport, this.sourceairport, this.returnDate);
                    }
                };
                return CreatePackageComponent;
            }());
            CreatePackageComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _dataintegrate_service__WEBPACK_IMPORTED_MODULE_2__["DataintegrateService"] },
                { type: _flights_service__WEBPACK_IMPORTED_MODULE_4__["FlightsService"] },
                { type: _hotels_service__WEBPACK_IMPORTED_MODULE_5__["HotelsService"] }
            ]; };
            CreatePackageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-create-package',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-package.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/create-package/create-package.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-package.component.css */ "./src/app/create-package/create-package.component.css")).default]
                })
            ], CreatePackageComponent);
            /***/ 
        }),
        /***/ "./src/app/createspecialholiday/createspecialholiday.component.css": 
        /*!*************************************************************************!*\
          !*** ./src/app/createspecialholiday/createspecialholiday.component.css ***!
          \*************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZXNwZWNpYWxob2xpZGF5L2NyZWF0ZXNwZWNpYWxob2xpZGF5LmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/createspecialholiday/createspecialholiday.component.ts": 
        /*!************************************************************************!*\
          !*** ./src/app/createspecialholiday/createspecialholiday.component.ts ***!
          \************************************************************************/
        /*! exports provided: CreatespecialholidayComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatespecialholidayComponent", function () { return CreatespecialholidayComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _dataintegrate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dataintegrate.service */ "./src/app/dataintegrate.service.ts");
            var CreatespecialholidayComponent = /** @class */ (function () {
                function CreatespecialholidayComponent(router, dataservice) {
                    this.router = router;
                    this.dataservice = dataservice;
                }
                CreatespecialholidayComponent.prototype.ngOnInit = function () {
                    console.log('special package session ' + localStorage.getItem('user'));
                    if (localStorage.getItem('user') == null || localStorage.length <= 0) {
                        this.router.navigate(['/']);
                        // tslint:disable-next-line: triple-equals
                    }
                    else if (JSON.parse((localStorage.getItem('user'))).usertype == 'USER') {
                        this.router.navigate(['/']);
                    }
                };
                CreatespecialholidayComponent.prototype.onSubmit = function (it) {
                    this.dataservice.addspecialPackage(it.value).subscribe(function (special) {
                        console.log('special added ' + special);
                    });
                };
                return CreatespecialholidayComponent;
            }());
            CreatespecialholidayComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _dataintegrate_service__WEBPACK_IMPORTED_MODULE_3__["DataintegrateService"] }
            ]; };
            CreatespecialholidayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-createspecialholiday',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./createspecialholiday.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/createspecialholiday/createspecialholiday.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./createspecialholiday.component.css */ "./src/app/createspecialholiday/createspecialholiday.component.css")).default]
                })
            ], CreatespecialholidayComponent);
            /***/ 
        }),
        /***/ "./src/app/dashboard/dashboard.component.css": 
        /*!***************************************************!*\
          !*** ./src/app/dashboard/dashboard.component.css ***!
          \***************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/dashboard/dashboard.component.ts": 
        /*!**************************************************!*\
          !*** ./src/app/dashboard/dashboard.component.ts ***!
          \**************************************************/
        /*! exports provided: DashboardComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () { return DashboardComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _dataintegrate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dataintegrate.service */ "./src/app/dataintegrate.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var DashboardComponent = /** @class */ (function () {
                function DashboardComponent(router, dataservice) {
                    this.router = router;
                    this.dataservice = dataservice;
                }
                DashboardComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    // console.log('inital ' + localStorage.getItem('user'));
                    // if (localStorage.getItem('user') == null || localStorage.length <= 0) {
                    //   this.router.navigate(['/']);
                    // }
                    console.log('package session ' + JSON.parse((localStorage.getItem('user'))).usertype + localStorage.getItem('user'));
                    if (localStorage.getItem('user') == null || localStorage.length <= 0) {
                        this.router.navigate(['/']);
                        // tslint:disable-next-line: triple-equals
                    }
                    else if (JSON.parse((localStorage.getItem('user'))).usertype != 'ADMIN') {
                        this.router.navigate(['/']);
                    }
                    else {
                        this.dataservice.getAllUsers().subscribe(function (data) {
                            _this.usersList = data;
                            console.log('all requesting users ' + JSON.stringify(data));
                        });
                    }
                };
                return DashboardComponent;
            }());
            DashboardComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _dataintegrate_service__WEBPACK_IMPORTED_MODULE_2__["DataintegrateService"] }
            ]; };
            DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-dashboard',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")).default]
                })
            ], DashboardComponent);
            /***/ 
        }),
        /***/ "./src/app/dataintegrate.service.ts": 
        /*!******************************************!*\
          !*** ./src/app/dataintegrate.service.ts ***!
          \******************************************/
        /*! exports provided: DataintegrateService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataintegrateService", function () { return DataintegrateService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var DataintegrateService = /** @class */ (function () {
                // tslint:disable-next-line: variable-name
                function DataintegrateService(_httpClient) {
                    this._httpClient = _httpClient;
                }
                DataintegrateService.prototype.createUser = function (it) {
                    console.log(it);
                    console.log(it.value); // { first: '', last: '' }
                    return this._httpClient.post('/user/userCreate', '', { params: it.value });
                    // .subscribe(data => { data = data.status; });
                };
                DataintegrateService.prototype.loginUser = function (it) {
                    console.log(it);
                    return this._httpClient.get('/user/userSearch', { params: it.value });
                };
                DataintegrateService.prototype.login_google = function (it) {
                    console.log('login ' + it);
                    return this._httpClient.get('/user/userSearch', { params: it });
                };
                DataintegrateService.prototype.signup_google = function (it) {
                    console.log('signup ' + it);
                    return this._httpClient.post('/user/userCreate', '', { params: it });
                };
                // request
                DataintegrateService.prototype.getAllUsers = function () {
                    return this._httpClient.get('/user/allusers');
                };
                DataintegrateService.prototype.createPackage = function (it) {
                    console.log('dataservice ' + JSON.stringify(it));
                    return this._httpClient.post('/package/packagecreate', '', { params: it });
                };
                // createUserPackage(it: any) {
                //   console.log('dataservice ' + JSON.stringify(it));
                //   return this._httpClient.post<any>('/userpackage/pckcreate', '', {params: it});
                // }
                DataintegrateService.prototype.getAllPackages = function () {
                    return this._httpClient.get('/package/allpackages');
                };
                DataintegrateService.prototype.generateRequest = function () {
                    return this._httpClient.post('/request/generate', '', { params: JSON.parse((localStorage.getItem('user'))) });
                };
                DataintegrateService.prototype.getRequests = function () {
                    return this._httpClient.get('/request/getrequests');
                };
                DataintegrateService.prototype.updateUserType = function (objid) {
                    console.log('update user req in user with ' + objid);
                    return this._httpClient.put('user/userreqUpdate', '', { params: objid }).subscribe(function (updatedUser) {
                        console.log('after update user info: ' + updatedUser);
                    });
                };
                DataintegrateService.prototype.deletereqUser = function (id) {
                    console.log('delete user reqed user with :' + id);
                    return this._httpClient.delete('request/deleteReq', { params: id }).subscribe(function (deletereq) {
                        console.log('deleted user info: ' + deletereq);
                    });
                };
                DataintegrateService.prototype.updatePackageUserID = function (jsonObj) {
                    return this._httpClient.put('/package/updateUserID', '', { params: jsonObj });
                };
                DataintegrateService.prototype.getBookedPackages = function (userId) {
                    var userID = { userid: userId };
                    return this._httpClient.get('/package/getBooked', { params: userID });
                };
                DataintegrateService.prototype.getCreatedPackages = function (userId) {
                    var userID = { userid: userId };
                    return this._httpClient.get('/package/getCreated', { params: userID });
                };
                DataintegrateService.prototype.deletePackage = function (packageID) {
                    var packID = { packid: packageID };
                    return this._httpClient.delete('package/deletebyid', { params: packID });
                };
                DataintegrateService.prototype.getPackageByPackageID = function (packageID) {
                    var packID = { packid: packageID };
                    return this._httpClient.get('package/packagebypackid', { params: packID });
                };
                // getUserPackageByPackageID(packageID: any) {
                //   const packID = {packid: packageID};
                //   return this._httpClient.get<any>('userpackage/packagebypackid', {params: packID});
                // }
                DataintegrateService.prototype.addspecialPackage = function (specialholiday) {
                    console.log('data holiday : ' + JSON.stringify(specialholiday));
                    return this._httpClient.post('holiday/addspecial', '', { params: specialholiday });
                };
                DataintegrateService.prototype.getHolidays = function () {
                    return this._httpClient.get('holiday/getAllSpecial');
                };
                DataintegrateService.prototype.deleteHoliday = function (holidayId) {
                    var holiID = { holidayid: holidayId };
                    return this._httpClient.delete('holiday/deleteHolidayByID', { params: holiID });
                };
                return DataintegrateService;
            }());
            DataintegrateService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            DataintegrateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], DataintegrateService);
            /***/ 
        }),
        /***/ "./src/app/details/details.component.css": 
        /*!***********************************************!*\
          !*** ./src/app/details/details.component.css ***!
          \***********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbHMvZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/details/details.component.ts": 
        /*!**********************************************!*\
          !*** ./src/app/details/details.component.ts ***!
          \**********************************************/
        /*! exports provided: DetailsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function () { return DetailsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _dataintegrate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dataintegrate.service */ "./src/app/dataintegrate.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var DetailsComponent = /** @class */ (function () {
                function DetailsComponent(router, dataservice) {
                    this.router = router;
                    this.dataservice = dataservice;
                }
                DetailsComponent.prototype.ngOnInit = function () {
                    // console.log('inital ' + localStorage.getItem('user'));
                    // if (localStorage.getItem('user') == null || localStorage.length <= 0) {
                    //   this.router.navigate(['/']);
                    // }
                    console.log('package session ' + localStorage.getItem('user'));
                    if (localStorage.getItem('user') == null || localStorage.length <= 0) {
                        this.router.navigate(['/']);
                        // tslint:disable-next-line: triple-equals
                    }
                    else if (JSON.parse((localStorage.getItem('user'))).usertype != 'USER') {
                        this.router.navigate(['/']);
                    }
                    this.dataservice.getAllUsers().subscribe(function (data) {
                        console.log('all users ' + JSON.stringify(data));
                    });
                };
                return DetailsComponent;
            }());
            DetailsComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _dataintegrate_service__WEBPACK_IMPORTED_MODULE_2__["DataintegrateService"] }
            ]; };
            DetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-details',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/details/details.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./details.component.css */ "./src/app/details/details.component.css")).default]
                })
            ], DetailsComponent);
            /***/ 
        }),
        /***/ "./src/app/flights.service.ts": 
        /*!************************************!*\
          !*** ./src/app/flights.service.ts ***!
          \************************************/
        /*! exports provided: FlightsService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightsService", function () { return FlightsService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var FlightsService = /** @class */ (function () {
                // tslint:disable-next-line: variable-name
                function FlightsService(_httpClient) {
                    this._httpClient = _httpClient;
                }
                FlightsService.prototype.getSkyScannerFlights = function (sourceairport, destairport, traveldate) {
                    var sourceDest = { source: sourceairport, dest: destairport, flightdate: traveldate };
                    return this._httpClient.get('api/flights', { params: sourceDest });
                };
                FlightsService.prototype.getAirportsList = function (paramatersAirport) {
                    return this._httpClient.get('api/fetchAirports', { params: paramatersAirport });
                };
                return FlightsService;
            }());
            FlightsService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            FlightsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], FlightsService);
            /***/ 
        }),
        /***/ "./src/app/hotels.service.ts": 
        /*!***********************************!*\
          !*** ./src/app/hotels.service.ts ***!
          \***********************************/
        /*! exports provided: HotelsService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelsService", function () { return HotelsService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var HotelsService = /** @class */ (function () {
                // tslint:disable-next-line: variable-name
                function HotelsService(_httpClient) {
                    this._httpClient = _httpClient;
                }
                HotelsService.prototype.getHotels = function (query) {
                    var dest = { city: query };
                    return this._httpClient.get('/api/hotels', { params: dest });
                };
                return HotelsService;
            }());
            HotelsService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            HotelsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], HotelsService);
            /***/ 
        }),
        /***/ "./src/app/login/login.component.css": 
        /*!*******************************************!*\
          !*** ./src/app/login/login.component.css ***!
          \*******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/login/login.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/login/login.component.ts ***!
          \******************************************/
        /*! exports provided: LoginComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function () { return LoginComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _dataintegrate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dataintegrate.service */ "./src/app/dataintegrate.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.js");
            var LoginComponent = /** @class */ (function () {
                // tslint:disable-next-line: variable-name
                function LoginComponent(router, dataservice, authService) {
                    this.router = router;
                    this.dataservice = dataservice;
                    this.authService = authService;
                }
                LoginComponent.prototype.ngOnInit = function () {
                    // console.log('session ' + localStorage.getItem('user'));
                    // console.log('user type ' + JSON.parse((localStorage.getItem('user'))).usertype);
                    if (localStorage.length >= 0 && localStorage.getItem('user')) {
                        // tslint:disable-next-line: triple-equals
                        if (JSON.parse((localStorage.getItem('user'))).usertype == 'USER') {
                            this.router.navigate(['/package/viewAll']);
                            // tslint:disable-next-line: triple-equals
                        }
                        else if (JSON.parse((localStorage.getItem('user'))).usertype == 'AGENT') {
                            this.router.navigate(['/package/viewcreated']);
                            // tslint:disable-next-line: triple-equals
                        }
                        else if (JSON.parse((localStorage.getItem('user'))).usertype == 'ADMIN') {
                            this.router.navigate(['/dashboard']);
                        }
                    }
                    else {
                        // this.authService.authState.subscribe((user) => {
                        //   this.loggedIn = (user != null);
                        //   // localStorage.setItem('user', JSON.stringify(user));
                        //   console.log(user);
                        //   this.dataservice.login_google(user).subscribe(data => {
                        //     console.log(data);
                        //     if (data == null) {
                        //       console.log('user not found');
                        //       // this.router.navigate(['/signup']);
                        //       this.dataservice.signup_google(user).subscribe(usersignup => {
                        //         console.log('signup ' + usersignup);
                        //         if (usersignup == null) {
                        //           this.signOut();
                        //           localStorage.clear();
                        //         } else {
                        //           localStorage.setItem('user', JSON.stringify(usersignup));
                        //           this.router.navigate(['/details']);
                        //         }
                        //       });
                        //     } else {
                        //       console.log('user found' + data);
                        //       localStorage.setItem('user', JSON.stringify(data));
                        //       this.router.navigate(['/details']);
                        //     }
                        //   });
                        // });
                    }
                };
                LoginComponent.prototype.signInWithGoogle = function () {
                    this.authService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_4__["GoogleLoginProvider"].PROVIDER_ID);
                };
                LoginComponent.prototype.signOut = function () {
                    console.log('signing out');
                    this.authService.signOut();
                };
                LoginComponent.prototype.onSubmit = function (it) {
                    var _this = this;
                    console.log('cred ' + JSON.stringify(it.value));
                    console.log('cred ' + it.value);
                    this.dataservice.loginUser(it).subscribe(function (data) {
                        if (data == null) {
                            console.log('user not found');
                            _this.router.navigate(['/signup']);
                        }
                        else {
                            console.log('---' + data.name);
                            // tslint:disable-next-line: triple-equals
                            localStorage.setItem('user', JSON.stringify(data));
                            console.log('session values1 ' + (localStorage.getItem('user')));
                            console.log('session values2 ' + JSON.parse((localStorage.getItem('user'))).usertype);
                            // tslint:disable-next-line: triple-equals
                            if (data.usertype == 'USER') {
                                _this.router.navigate(['/details']);
                                // tslint:disable-next-line: triple-equals
                            }
                            else if (data.usertype == 'AGENT') {
                                _this.router.navigate(['/agentsdetails']);
                                // tslint:disable-next-line: triple-equals
                            }
                            else if (data.usertype == 'ADMIN') {
                                _this.router.navigate(['/dashboard']);
                            }
                        }
                    });
                };
                return LoginComponent;
            }());
            LoginComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _dataintegrate_service__WEBPACK_IMPORTED_MODULE_2__["DataintegrateService"] },
                { type: angularx_social_login__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
            ]; };
            LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-login',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
                })
            ], LoginComponent);
            /***/ 
        }),
        /***/ "./src/app/menudrop/menudrop.component.css": 
        /*!*************************************************!*\
          !*** ./src/app/menudrop/menudrop.component.css ***!
          \*************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnVkcm9wL21lbnVkcm9wLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/menudrop/menudrop.component.ts": 
        /*!************************************************!*\
          !*** ./src/app/menudrop/menudrop.component.ts ***!
          \************************************************/
        /*! exports provided: MenudropComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenudropComponent", function () { return MenudropComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var MenudropComponent = /** @class */ (function () {
                function MenudropComponent() {
                }
                MenudropComponent.prototype.ngOnInit = function () {
                };
                return MenudropComponent;
            }());
            MenudropComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-menudrop',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./menudrop.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/menudrop/menudrop.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./menudrop.component.css */ "./src/app/menudrop/menudrop.component.css")).default]
                })
            ], MenudropComponent);
            /***/ 
        }),
        /***/ "./src/app/nav/nav.component.css": 
        /*!***************************************!*\
          !*** ./src/app/nav/nav.component.css ***!
          \***************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/nav/nav.component.ts": 
        /*!**************************************!*\
          !*** ./src/app/nav/nav.component.ts ***!
          \**************************************/
        /*! exports provided: NavComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function () { return NavComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.js");
            /* harmony import */ var _dataintegrate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dataintegrate.service */ "./src/app/dataintegrate.service.ts");
            var NavComponent = /** @class */ (function () {
                function NavComponent(router, authService, dataservice) {
                    this.router = router;
                    this.authService = authService;
                    this.dataservice = dataservice;
                }
                NavComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.authService.authState.subscribe(function (user) {
                        _this.loggedIn = (user != null);
                        // localStorage.setItem('user', JSON.stringify(user));
                        console.log(user);
                        _this.dataservice.login_google(user).subscribe(function (data) {
                            console.log(data);
                            if (data == null) {
                                console.log('user not found');
                                // this.router.navigate(['/signup']);
                                _this.dataservice.signup_google(user).subscribe(function (usersignup) {
                                    console.log('signup ' + usersignup);
                                    if (usersignup == null) {
                                        _this.signOut();
                                        localStorage.clear();
                                    }
                                    else {
                                        localStorage.setItem('user', JSON.stringify(usersignup));
                                        _this.router.navigate(['/package/viewAll']);
                                    }
                                });
                            }
                            else {
                                console.log('user found' + data);
                                localStorage.setItem('user', JSON.stringify(data));
                                _this.router.navigate(['/package/viewAll']);
                            }
                        });
                    });
                };
                NavComponent.prototype.signInWithGoogle = function () {
                    this.authService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_3__["GoogleLoginProvider"].PROVIDER_ID);
                };
                NavComponent.prototype.findLoginType = function () {
                    if (localStorage.getItem('user') == null || localStorage.length <= 0) {
                        return 'NONE';
                        // tslint:disable-next-line: triple-equals
                    }
                    else if (JSON.parse((localStorage.getItem('user'))).usertype == 'AGENT') {
                        return 'AGENT';
                        // tslint:disable-next-line: triple-equals
                    }
                    else if (JSON.parse((localStorage.getItem('user'))).usertype == 'ADMIN') {
                        return 'ADMIN';
                        // tslint:disable-next-line: triple-equals
                    }
                    else if (JSON.parse((localStorage.getItem('user'))).usertype == 'USER') {
                        return 'USER';
                    }
                };
                NavComponent.prototype.sendAdminType = function () {
                    // tslint:disable-next-line: triple-equals
                    if (this.findLoginType() == 'ADMIN') {
                        return true;
                    }
                    return false;
                };
                NavComponent.prototype.sendUserType = function () {
                    // tslint:disable-next-line: triple-equals
                    if (this.findLoginType() == 'USER') {
                        return true;
                    }
                    return false;
                };
                NavComponent.prototype.sendAgentType = function () {
                    // tslint:disable-next-line: triple-equals
                    if (this.findLoginType() == 'AGENT') {
                        return true;
                    }
                    return false;
                };
                NavComponent.prototype.signOut = function () {
                    console.log('signing out');
                    this.authService.signOut();
                    localStorage.clear();
                    this.router.navigate(['/']);
                    // tslint:disable-next-line: max-line-length
                    // window.location.href = 'https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=http://localhost:3001/logout';
                };
                NavComponent.prototype.isLoggedIn = function () {
                    if (this.loggedIn) {
                        return true;
                    }
                    this.loggedIn = false;
                    return false;
                };
                NavComponent.prototype.reqAgent = function () {
                    if (this.sendUserType()) {
                        this.dataservice.generateRequest().subscribe(function (data) {
                            console.log('data of request: ' + data);
                        });
                    }
                };
                return NavComponent;
            }());
            NavComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: angularx_social_login__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
                { type: _dataintegrate_service__WEBPACK_IMPORTED_MODULE_4__["DataintegrateService"] }
            ]; };
            NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-nav',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav/nav.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")).default]
                })
            ], NavComponent);
            /***/ 
        }),
        /***/ "./src/app/package/package.component.css": 
        /*!***********************************************!*\
          !*** ./src/app/package/package.component.css ***!
          \***********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhY2thZ2UvcGFja2FnZS5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/package/package.component.ts": 
        /*!**********************************************!*\
          !*** ./src/app/package/package.component.ts ***!
          \**********************************************/
        /*! exports provided: PackageComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackageComponent", function () { return PackageComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _dataintegrate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dataintegrate.service */ "./src/app/dataintegrate.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var PackageComponent = /** @class */ (function () {
                function PackageComponent(router, dataservice) {
                    this.router = router;
                    this.dataservice = dataservice;
                }
                PackageComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    console.log('package session ' + localStorage.getItem('user'));
                    if (localStorage.getItem('user') == null || localStorage.length <= 0) {
                        this.router.navigate(['/']);
                        // tslint:disable-next-line: triple-equals
                    }
                    else if (JSON.parse((localStorage.getItem('user'))).usertype == 'AGENT') {
                        this.router.navigate(['/']);
                    }
                    this.dataservice.getAllPackages().subscribe(function (data) {
                        _this.packagesList = data;
                        console.log('all packages ' + JSON.stringify(data));
                    });
                };
                PackageComponent.prototype.bookpackage = function (packageSelect) {
                    var jsonObj = JSON.parse((localStorage.getItem('user')));
                    jsonObj.packageid = packageSelect._id;
                    this.dataservice.updatePackageUserID(jsonObj).subscribe(function (update) {
                        console.log('updated package with user id' + update);
                    });
                    this.router.navigate(['/package/booked']);
                };
                PackageComponent.prototype.deletepackage = function (packageselect) {
                    var packageID = packageselect._id;
                    console.log('delete package with id ' + packageID);
                    this.dataservice.deletePackage(packageID).subscribe(function (data) {
                        console.log('delete package ' + JSON.stringify(data));
                    });
                    this.router.navigate(['/package/viewAll']);
                };
                PackageComponent.prototype.usertype = function () {
                    // tslint:disable-next-line: triple-equals
                    if (JSON.parse((localStorage.getItem('user'))).usertype == 'ADMIN') {
                        return true;
                        // tslint:disable-next-line: triple-equals
                    }
                    else if (JSON.parse((localStorage.getItem('user'))).usertype == 'USER') {
                        return false;
                    }
                };
                return PackageComponent;
            }());
            PackageComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _dataintegrate_service__WEBPACK_IMPORTED_MODULE_2__["DataintegrateService"] }
            ]; };
            PackageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-package',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./package.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/package/package.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./package.component.css */ "./src/app/package/package.component.css")).default]
                })
            ], PackageComponent);
            /***/ 
        }),
        /***/ "./src/app/request/request.component.css": 
        /*!***********************************************!*\
          !*** ./src/app/request/request.component.css ***!
          \***********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcXVlc3QvcmVxdWVzdC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/request/request.component.ts": 
        /*!**********************************************!*\
          !*** ./src/app/request/request.component.ts ***!
          \**********************************************/
        /*! exports provided: RequestComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestComponent", function () { return RequestComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _dataintegrate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dataintegrate.service */ "./src/app/dataintegrate.service.ts");
            var RequestComponent = /** @class */ (function () {
                function RequestComponent(dataservice) {
                    this.dataservice = dataservice;
                }
                RequestComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.dataservice.getRequests().subscribe(function (requests) {
                        console.log('requested users: ' + requests);
                        _this.reqUsers = requests;
                    });
                };
                RequestComponent.prototype.reqApprove = function (reqUser) {
                    this.updatereqUser(reqUser); // in user
                    this.deletereqUser(reqUser); // in req
                };
                RequestComponent.prototype.updatereqUser = function (objid) {
                    this.dataservice.updateUserType(objid);
                };
                RequestComponent.prototype.deletereqUser = function (id) {
                    this.dataservice.deletereqUser(id);
                };
                return RequestComponent;
            }());
            RequestComponent.ctorParameters = function () { return [
                { type: _dataintegrate_service__WEBPACK_IMPORTED_MODULE_2__["DataintegrateService"] }
            ]; };
            RequestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-request',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./request.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/request/request.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./request.component.css */ "./src/app/request/request.component.css")).default]
                })
            ], RequestComponent);
            /***/ 
        }),
        /***/ "./src/app/signup/signup.component.css": 
        /*!*********************************************!*\
          !*** ./src/app/signup/signup.component.css ***!
          \*********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/signup/signup.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/signup/signup.component.ts ***!
          \********************************************/
        /*! exports provided: SignupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function () { return SignupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _dataintegrate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dataintegrate.service */ "./src/app/dataintegrate.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var SignupComponent = /** @class */ (function () {
                function SignupComponent(router, dataService) {
                    this.router = router;
                    this.dataService = dataService;
                }
                SignupComponent.prototype.ngOnInit = function () {
                    // if (localStorage.length >= 0 && localStorage.getItem('user')) {
                    //   // tslint:disable-next-line: triple-equals
                    //   if (JSON.parse((localStorage.getItem('user'))).usertype == 'USER') {
                    //     this.router.navigate(['/details']);
                    //   // tslint:disable-next-line: triple-equals
                    //   } else if (JSON.parse((localStorage.getItem('user'))).usertype == 'AGENT') {
                    //     this.router.navigate(['/agentsdetails']);
                    //   // tslint:disable-next-line: triple-equals
                    //   } else if (JSON.parse((localStorage.getItem('user'))).usertype == 'ADMIN') {
                    //     this.router.navigate(['/dashboard']);
                    //   }
                    // }
                };
                SignupComponent.prototype.signUp = function (Email) {
                    console.log('----' + Email.value);
                };
                SignupComponent.prototype.onSubmit = function (it) {
                    var _this = this;
                    this.dataService.createUser(it).subscribe(function (data) {
                        console.log('signup user ' + data);
                        if (data == null) {
                            _this.router.navigate(['/signup']);
                        }
                        else {
                            _this.router.navigate(['/']);
                        }
                    });
                };
                return SignupComponent;
            }());
            SignupComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _dataintegrate_service__WEBPACK_IMPORTED_MODULE_2__["DataintegrateService"] }
            ]; };
            SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-signup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")).default]
                })
            ], SignupComponent);
            /***/ 
        }),
        /***/ "./src/app/specialholidayview/specialholidayview.component.css": 
        /*!*********************************************************************!*\
          !*** ./src/app/specialholidayview/specialholidayview.component.css ***!
          \*********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NwZWNpYWxob2xpZGF5dmlldy9zcGVjaWFsaG9saWRheXZpZXcuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/specialholidayview/specialholidayview.component.ts": 
        /*!********************************************************************!*\
          !*** ./src/app/specialholidayview/specialholidayview.component.ts ***!
          \********************************************************************/
        /*! exports provided: SpecialholidayviewComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialholidayviewComponent", function () { return SpecialholidayviewComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _dataintegrate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dataintegrate.service */ "./src/app/dataintegrate.service.ts");
            var SpecialholidayviewComponent = /** @class */ (function () {
                function SpecialholidayviewComponent(router, dataservice) {
                    this.router = router;
                    this.dataservice = dataservice;
                }
                SpecialholidayviewComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.dataservice.getHolidays().subscribe(function (allspecial) {
                        _this.holidaysList = allspecial;
                    });
                };
                SpecialholidayviewComponent.prototype.adminType = function () {
                    // tslint:disable-next-line: triple-equals
                    if (JSON.parse((localStorage.getItem('user'))).usertype == 'ADMIN') {
                        return true;
                    }
                    else {
                        return false;
                    }
                };
                SpecialholidayviewComponent.prototype.deleteHoliday = function (holiday) {
                    this.dataservice.deleteHoliday(holiday._id).subscribe(function (holidayDeleted) {
                        console.log('deleted holiday ' + holidayDeleted);
                    });
                };
                return SpecialholidayviewComponent;
            }());
            SpecialholidayviewComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _dataintegrate_service__WEBPACK_IMPORTED_MODULE_3__["DataintegrateService"] }
            ]; };
            SpecialholidayviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-specialholidayview',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./specialholidayview.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/specialholidayview/specialholidayview.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./specialholidayview.component.css */ "./src/app/specialholidayview/specialholidayview.component.css")).default]
                })
            ], SpecialholidayviewComponent);
            /***/ 
        }),
        /***/ "./src/app/user-packet-create/user-packet-create.component.css": 
        /*!*********************************************************************!*\
          !*** ./src/app/user-packet-create/user-packet-create.component.css ***!
          \*********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcGFja2V0LWNyZWF0ZS91c2VyLXBhY2tldC1jcmVhdGUuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/user-packet-create/user-packet-create.component.ts": 
        /*!********************************************************************!*\
          !*** ./src/app/user-packet-create/user-packet-create.component.ts ***!
          \********************************************************************/
        /*! exports provided: UserPacketCreateComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPacketCreateComponent", function () { return UserPacketCreateComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _dataintegrate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dataintegrate.service */ "./src/app/dataintegrate.service.ts");
            /* harmony import */ var _flights_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../flights.service */ "./src/app/flights.service.ts");
            /* harmony import */ var _hotels_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hotels.service */ "./src/app/hotels.service.ts");
            var UserPacketCreateComponent = /** @class */ (function () {
                // tslint:disable-next-line: max-line-length
                function UserPacketCreateComponent(router, dataservice, flightService, hotelService) {
                    this.router = router;
                    this.dataservice = dataservice;
                    this.flightService = flightService;
                    this.hotelService = hotelService;
                }
                UserPacketCreateComponent.prototype.ngOnInit = function () {
                    console.log('create package session ' + localStorage.getItem('user'));
                    if (localStorage.getItem('user') == null || localStorage.length <= 0) {
                        this.router.navigate(['/']);
                        // tslint:disable-next-line: triple-equals
                    }
                    else if (JSON.parse((localStorage.getItem('user'))).usertype != 'USER') {
                        this.router.navigate(['/']);
                    }
                };
                return UserPacketCreateComponent;
            }());
            UserPacketCreateComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _dataintegrate_service__WEBPACK_IMPORTED_MODULE_3__["DataintegrateService"] },
                { type: _flights_service__WEBPACK_IMPORTED_MODULE_4__["FlightsService"] },
                { type: _hotels_service__WEBPACK_IMPORTED_MODULE_5__["HotelsService"] }
            ]; };
            UserPacketCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-user-packet-create',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-packet-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-packet-create/user-packet-create.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-packet-create.component.css */ "./src/app/user-packet-create/user-packet-create.component.css")).default]
                })
            ], UserPacketCreateComponent);
            /***/ 
        }),
        /***/ "./src/app/view-created-package/view-created-package.component.css": 
        /*!*************************************************************************!*\
          !*** ./src/app/view-created-package/view-created-package.component.css ***!
          \*************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXctY3JlYXRlZC1wYWNrYWdlL3ZpZXctY3JlYXRlZC1wYWNrYWdlLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/view-created-package/view-created-package.component.ts": 
        /*!************************************************************************!*\
          !*** ./src/app/view-created-package/view-created-package.component.ts ***!
          \************************************************************************/
        /*! exports provided: ViewCreatedPackageComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCreatedPackageComponent", function () { return ViewCreatedPackageComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _dataintegrate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dataintegrate.service */ "./src/app/dataintegrate.service.ts");
            var ViewCreatedPackageComponent = /** @class */ (function () {
                function ViewCreatedPackageComponent(router, dataservice) {
                    this.router = router;
                    this.dataservice = dataservice;
                }
                ViewCreatedPackageComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var userId = JSON.parse((localStorage.getItem('user')))._id;
                    this.dataservice.getCreatedPackages(userId).subscribe(function (data) {
                        _this.packagesList = data;
                        console.log('all packages ' + JSON.stringify(data));
                    });
                };
                ViewCreatedPackageComponent.prototype.viewPackage = function (packageselct) {
                    this.selectedPackage = packageselct;
                };
                ViewCreatedPackageComponent.prototype.isSelected = function () {
                    // tslint:disable-next-line: triple-equals
                    if (this.selectedPackage == null || this.selectedPackage == undefined) {
                        return false;
                    }
                    else {
                        this.getUsers(this.selectedPackage.bookings);
                        return true;
                    }
                };
                ViewCreatedPackageComponent.prototype.getUsers = function (bookings) {
                    this.users = bookings;
                };
                return ViewCreatedPackageComponent;
            }());
            ViewCreatedPackageComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _dataintegrate_service__WEBPACK_IMPORTED_MODULE_3__["DataintegrateService"] }
            ]; };
            ViewCreatedPackageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-view-created-package',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view-created-package.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/view-created-package/view-created-package.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view-created-package.component.css */ "./src/app/view-created-package/view-created-package.component.css")).default]
                })
            ], ViewCreatedPackageComponent);
            /***/ 
        }),
        /***/ "./src/app/viewtrip/viewtrip.component.css": 
        /*!*************************************************!*\
          !*** ./src/app/viewtrip/viewtrip.component.css ***!
          \*************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXd0cmlwL3ZpZXd0cmlwLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/viewtrip/viewtrip.component.ts": 
        /*!************************************************!*\
          !*** ./src/app/viewtrip/viewtrip.component.ts ***!
          \************************************************/
        /*! exports provided: ViewtripComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewtripComponent", function () { return ViewtripComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _dataintegrate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dataintegrate.service */ "./src/app/dataintegrate.service.ts");
            /* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
            /* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_4__);
            var ViewtripComponent = /** @class */ (function () {
                function ViewtripComponent(router, dataservice) {
                    this.router = router;
                    this.dataservice = dataservice;
                }
                ViewtripComponent.prototype.ngOnInit = function () {
                    // tslint:disable-next-line: triple-equals
                    if (localStorage.length > 0 && (localStorage.getItem('package') != null || localStorage.getItem('package') != undefined)) {
                        var packageID = localStorage.getItem('package');
                        console.log('package id ' + packageID);
                        this.there = true;
                        this.getPackagebyPackageId(packageID);
                        // tslint:disable-next-line: max-line-length
                        // } else if (localStorage.length > 0 && (localStorage.getItem('userpackage') != null || localStorage.getItem('userpackage') != undefined )) {
                        //   const packageID = localStorage.getItem('userpackage');
                        //   console.log('package id ' + packageID);
                        //   this.there = true;
                        //   this.getUserPackagebyPackageId(packageID);
                        // }
                    }
                    else {
                        this.there = false;
                        console.log('missing package');
                    }
                };
                ViewtripComponent.prototype.isPackageThere = function () {
                    if (this.there) {
                        return true;
                    }
                    return false;
                };
                ViewtripComponent.prototype.getPackagebyPackageId = function (packageID) {
                    var _this = this;
                    this.dataservice.getPackageByPackageID(packageID).subscribe(function (packagebyid) {
                        _this.selectedPackage = packagebyid;
                    });
                    localStorage.removeItem('package');
                };
                ViewtripComponent.prototype.downloadPDF = function () {
                    var doc = new jspdf__WEBPACK_IMPORTED_MODULE_4__();
                    var specialElementHandler = {
                        '#editor': function (element, renderer) {
                            return true;
                        }
                    };
                    var content = this.content.nativeElement;
                    doc.fromHTML(content.innerHTML, 15, 15, {
                        'width': 190,
                        'elementHandlers': specialElementHandler
                    });
                    doc.save(this.selectedPackage.packageName + '.pdf');
                };
                return ViewtripComponent;
            }());
            ViewtripComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _dataintegrate_service__WEBPACK_IMPORTED_MODULE_3__["DataintegrateService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content', { static: true })
            ], ViewtripComponent.prototype, "content", void 0);
            ViewtripComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-viewtrip',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./viewtrip.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/viewtrip/viewtrip.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./viewtrip.component.css */ "./src/app/viewtrip/viewtrip.component.css")).default]
                })
            ], ViewtripComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Users\dpati\OneDrive\Desktop\travelagent\travelplanner\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map
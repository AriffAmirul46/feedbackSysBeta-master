// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const environment = {
  production: true,
  firebase: {
    apiKey: "AIzaSyBAcJFgGqIkRDNeQywIkDoDt9ksiz6sWkw",
    authDomain: "uptmfeedbacksys.firebaseapp.com",
    projectId: "uptmfeedbacksys",
    storageBucket: "uptmfeedbacksys.appspot.com",
    messagingSenderId: "846225076234",
    appId: "1:846225076234:web:16c1554cd8bb3d0ad62ff3",
    measurementId: "G-Z4JM52ZDTE"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

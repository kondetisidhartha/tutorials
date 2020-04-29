// Windows Methods / Objects / Properties

// window.console.log(123);

// Alert
// window.alert(123); // same as alert(123)

//Prompt
// const input = window.prompt();
// alert(input);

// Confirm
// if (confirm("Are you sure?")) {
//   console.log("YES");
// } else {
//   console.log("NO");
// }

// Properties
let val;

// Outer height and width
val = window.outerHeight;
val = window.outerWidth;

// Inner height and width
val = window.innerHeight;
val = window.innerWidth;

// Scroll points
val = window.scrollY;
val = window.scrollX;

// Location Object
val = window.location;
val = window.location["port"];
val = window.location.href; // protocol + href + port
val = window.location.search;

// Redirect
// window.location.href = "http://google.com";

// Reload
// window.location.reload();

// History object of the tab
// window.history.go(-1);
val = window.history.length;

// navigator object
val = window.navigator;
// contains platform(win, mac) and browser name and so on
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;

console.log(val);

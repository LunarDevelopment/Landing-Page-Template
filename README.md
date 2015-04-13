Landing-Page-Template
=====================================

An AngularJS Based website template focused on reusability and room for its functionality to be expanded. 

This Repo was made from a combo of [jakemmarsh/angularjs-gulp-browserify-boilerplate](https://github.com/jakemmarsh/angularjs-gulp-browserify-boilerplate.git) and  [Script Tutorials](http://www.script-tutorials.com/responsive-website-using-angularjs/) 

I've added various other functionality such as ng animate and eliminated Script Tutorials need for Jquery with [AngularSlideables](https://github.com/EricWVGG/AngularSlideables)

I've also greatly expanded the SASS classes in this project to avoid the tediousness for anyone who wants to use the project. 

Further I've added functionality through ng-repeat so pages and sub pages are dynamically generated. 

This is distributed under the MIT licence and all credit goes to the various sources mentioned above that I've stiched together and expanded to provide a project base I found more useful. 

---

### Getting up and running

0. Ensure you have a basic understanding of NodeJS and npm
1. Clone this repo from `https://github.com/LunarDevelopment/Landing-Page-Template` 
    - `git clone https://github.com/LunarDevelopment/Landing-Page-Template.git MAKE-UP-A-FILE-NAME HERE && cd FILE-NAME-YOU-INVENTED`    
2. Run `npm install`
3. Run `npm install gulp -g`
4. Run `npm install gulp`
5. Run `gulp dev`
6. Your browser will automatically be opened and directed to the browser-sync proxy address
7. To prepare assets for production, run the `gulp prod` task (Note: the production task does not fire up the express server, and won't provide you with browser-sync's live reloading. Simply use `gulp dev` during development. More information below)
8. After running `gulp prod` you can copy the files out of `PROJECT-ROOT/build/` - changing the index.html's `<base href="/">` to wherever you're going to place this built project.  

Now that `gulp dev` is running, the server is up as well and serving files from the `/build` directory. Any changes in the `/app` directory will be automatically processed by Gulp and the changes will be injected to any open browsers pointed at the proxy address.

---

This boilerplate uses the latest versions of the following libraries:

- [AngularJS](http://angularjs.org/)
- [SASS](http://sass-lang.com/)
- [Gulp](http://gulpjs.com/)
- [Browserify](http://browserify.org/)
- [Bootstrap-angular](https://angular-ui.github.io/bootstrap/)


Along with many Gulp libraries (these can be seen in either `package.json`, or at the top of each task in `/gulp/tasks/`).

---

### Below is jakemmarsh's summary of this project's components
---
### AngularJS

AngularJS is a MVW (Model-View-Whatever) Javascript Framework for creating single-page web applications. In this boilerplate, it is used for all the application routing as well as all of the frontend views and logic.

The AngularJS files are all located within `/app/js`, structured in the following manner:

```
/controllers
  _index.js   (the main module on which to mount all controllers, loaded in main.js)
  example.js
/directives
  _index.js   (the main module on which to mount all directives, loaded in main.js)
  example.js
/services
  _index.js   (the main module on which to mount all services, loaded in main.js)
  example.js
constants.js  (any constant values that you want to make available to Angular)
main.js       (the main file read by Browserify, also where the application is defined and bootstrapped)
on_run.js     (any functions or logic that need to be executed on app.run)
routes.js     (all route definitions and logic)
templates.js  (this is created via Gulp by compiling your views, and will not be present beforehand)
```

Controllers, services, directives, etc. should all be placed within their respective folders and mounted on their respective `_index.js` module. Most other logic can be placed in an existing file, or added in new files as long as it is required inside `main.js`.

##### Dependency injection

Dependency injection is carried out with the `ng-annotate` library. In order to take advantage of this, a simple comment of the format:

```
/**
 * @ngInject
 */
```

needs to be added directly before any Angular functions/modules. The Gulp tasks will then take care of adding any dependency injection, requiring you only to specify the dependencies within the function call and nothing more.

---

### SASS

SASS, standing for 'Syntactically Awesome Style Sheets', is a CSS extension language adding things like extending, variables, and mixins to the language. This boilerplate provides a barebones file structure for your styles, with explicit imports into `app/styles/main.scss`. A Gulp task (discussed later) is provided for compilation and minification of the stylesheets based on this file.

---

### Browserify

Browserify is a Javascript file and module loader, allowing you to `require('modules')` in all of your files in the same manner as you would on the backend in a node.js environment. The bundling and compilation is then taken care of by Gulp, discussed below.

---

### Gulp

Gulp is a "streaming build system", providing a very fast and efficient method for running your build tasks.

##### Web Server

Gulp is used here to provide a very basic node/Express web server for viewing and testing your application as you build. It serves static files from the `build/` directory, leaving routing up to AngularJS. All Gulp tasks are configured to automatically reload the server upon file changes. The application is served to `localhost:3000` once you run the `gulp` task. To take advantage of the fast live reload injection provided by browser-sync, you must load the site at the proxy address (which usually defaults to `server port + 1`, and within this boilerplate will by default be `localhost:3001`.)

##### Scripts

A number of build processes are automatically run on all of our Javascript files, run in the following order:

- **JSHint:** Gulp is currently configured to run a JSHint task before processing any Javascript files. This will show any errors in your code in the console, but will not prevent compilation or minification from occurring.
- **Browserify:** The main build process run on any Javascript files. This processes any of the `require('module')` statements, compiling the files as necessary.
- **Debowerify:** Parses `require()` statements in your code, mapping them to `bower_components` when necessary. This allows you to use and include bower components just as you would npm modules.
- **ngAnnotate:** This will automatically add the correct dependency injection to any AngularJS files, as mentioned previously.
- **Uglifyify:** This will minify the file created by Browserify and ngAnnotate.

The resulting file (`main.js`) is placed inside the directory `/build/js/`.

##### Styles

Just one task is necessary for processing our SASS files, and that is `gulp-sass`. This will read the `main.scss` file, processing and importing any dependencies and then minifying the result. This file (`main.css`) is placed inside the directory `/build/css/`.

- **gulp-autoprefixer:** Gulp is currently configured to run autoprefixer after compiling the scss.  Autoprefixer will use the data based on current browser popularity and property support to apply prefixes for you. Autoprefixer is recommended by Google and used in Twitter, WordPress, Bootstrap and CodePen.

##### Images

Any images placed within `/app/images` will be automatically copied to the `build/images` directory. If running `gulp prod`, they will also be compressed via imagemin.

##### Views

When any changes are made to the `index.html` file, the new file is simply copied to the `/build/` directory without any changes occurring.

Files inside `/app/views/`, on the other hand, go through a slightly more complex process. The `gulp-angular-templatecache` module is used in order to process all views/partials, creating the `template.js` file briefly mentioned earlier. This file will contain all the views, now in Javascript format inside Angular's `$templateCache` service. This will allow us to include them in our Javascript minification process, as well as avoid extra HTTP requests for our views.

##### Watching files

All of the Gulp processes mentioned above are run automatically when any of the corresponding files in the `/app` directory are changed, and this is thanks to our Gulp watch tasks. Running `gulp dev` will begin watching all of these files, while also serving to `localhost:3000`, and with browser-sync proxy running at `localhost:3001` (by default).

##### Production Task

Just as there is the `gulp dev` task for development, there is also a `gulp prod` task for putting your project into a production-ready state. This will run each of the tasks, while also adding the image minification task discussed above. There is also an empty `gulp deploy` task that is included when running the production task. This deploy task can be fleshed out to automatically push your production-ready site to your hosting setup.

**Reminder:** When running the production task, gulp will not fire up the express server and serve your index.html. This task is designed to be run before the `deploy` step that may copy the files from `/build` to a production web server.

##### Pre-compressing text assets

When running with `gulp prod`, a pre-compressed file is generated in addition to uncompressed file (.html.gz, .js.gz, css.gz). This is done to enable web servers serve compressed content without having to compress it on the fly. Pre-compression is handled by `gzip` task.

##### Testing

A Gulp tasks also exists for running the test framework (discussed in detail below). Running `gulp test` will run any and all tests inside the `/test` directory and show the results (and any errors) in the terminal.

---

### Testing

This boilerplate also includes a simple framework for unit and end-to-end (e2e) testing via [Karma](http://karma-runner.github.io/) and [Jasmine](http://jasmine.github.io/). In order to test AngularJS modules, the [angular.mocks](https://docs.angularjs.org/api/ngMock/object/angular.mock) module is used.

All of the tests can be run at once with the command `gulp test`. However, the tests are broken up into two main categories:

##### End-to-End (e2e) Tests

e2e tests, as hinted at by the name, consist of tests that involve multiple modules or require interaction between modules, similar to integration tests. These tests are carried out using the Angular library [Protractor](https://github.com/angular/protractor), which also utilizes Jasmine. The goal is to ensure that the flow of your application is performing as designed from start to finish.

In this boilerplate, two end-to-end test examples are provided:

- `routes_spec.js`, which tests the functionality of our AngularJS routing
- `example_spec.js`, which tests the functionality of the example route, controller, and view

More examples can be seen at the above link for Protractor.

All e2e tests are run with `gulp protractor`. The command `npm run-script preprotractor` should be run once before running any Protractor tests (in order to update the webdrivers used by Selenium).

**Notes:**

- before running the Protractor tests, the application server must be running (start it with `gulp dev`)
- the Protractor library used for the end-to-end tests may require installing the [Java JDK](http://www.oracle.com/technetwork/java/javase/downloads/index-jsp-138363.html) beforehand.

##### Unit Tests

Unit tests are used to test a single module (or "unit") at a time in order to ensure that each module performs as intended individually. In AngularJS this could be thought of as a single controller, directive, filter, service, etc. That is how the unit tests are organized in this boilerplate.

An example test is provided for the following types of AngularJS modules:

- `unit/controllers/example_spec.js`
- `unit/services/example_spec.js`
- `unit/constants_spec.js`

Testing AngularJS directives becomes a bit more complex involving mock data and DOM traversal, and so has been omitted from this boilerplate. This can be read about in detail [here](http://newtriks.com/2013/04/26/how-to-test-an-angularjs-directive/).

All unit tests are run with `gulp unit`. When running unit tests, code coverage is simultaneously calculated and output as an HTML file to the `/coverage` directory.
# Landing-Page-Template 

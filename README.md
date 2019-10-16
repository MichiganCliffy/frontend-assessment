# front-end-assessment
An assignment for front end developer applicants

## dependencies

* [Ruby](https://www.ruby-lang.org/en/)
* [Bundler](http://bundler.io/)
* [NodeJS](https://nodejs.org/)
* [Bower](http://bower.io/)

## set up and development

1. install dependencies
2. run the following command to install the Ruby dependencies:

        $ bundle install

3. run the following command to install the NodeJS dependencies:

        $ npm install

4. run the following command to install the bower components:

        $ bower install

To compile SASS and JavaScript files, run:

    $ gulp build

The default gulp command will spin up a web server and will watch for changes. This makes it very quick to develop and test updates.

    $ gulp

## deploying updates

You need to make sure you have a file called aws.json file present the root of the project. A sample file has been provided. You will need a *key* and *secret* to deploy changes live.

Once you have your aws.json file set up, you can deploy using the following command:

    $ gulp deploy
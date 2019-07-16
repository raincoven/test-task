const crew = require('serenity-js/lib/stage_crew');

exports.config = {
    chromeOnly: true,
    directConnect: true,
    // Framework definition - tells Protractor to use Serenity/JS
    framework: 'custom',
    frameworkPath: require.resolve('serenity-js'),

    specs: [ 'features/**/*.feature' ],

    cucumberOpts: {
        require:    [ 'features/**/*.ts' ], // loads step definitions
        format:     'pretty',               // enable console output
        compiler:   'ts:ts-node/register',   // interpret step definitions as TypeScript
    },

    serenity: {
        crew:    [
            crew.serenityBDDReporter(),
            crew.photographer()
        ],

        dialect: 'cucumber',  // or 'mocha'
    },

    onPrepare: () => {
        /**
         * If you are testing against a non-angular site - set ignoreSynchronization setting to true
         *
         * If true, Protractor will not attempt to synchronize with the page before
         * performing actions. This can be harmful because Protractor will not wait
         * until $timeouts and $http calls have been processed, which can cause
         * tests to become flaky. This should be used only when necessary, such as
         * when a page continuously polls an API using $timeout.
         *
         * @type {boolean}
         */
        browser.waitForAngularEnabled(false);
    },

    seleniumAddress: 'http://localhost:4444/wd/hub'
}
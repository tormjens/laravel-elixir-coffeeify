var Elixir = require('laravel-elixir');

Elixir.config.js.browserify.transformers.push({
    name: 'coffeeify',

    // https://github.com/jnordberg/coffeeify#options
    options: {}
});

# Usage

## Step 1: Install

```
npm install laravel-elixir-coffeeify
```

## Step 2: Require

Within your main `Gulpfile`, add:

```js
var elixir = require('laravel-elixir');

require('laravel-elixir-coffeeify');

elixir(function(mix) {
    mix.browserify('main.js');
});
```

Notice above, where we require `laravel-elixir-coffeeify`. That's all you need. Behind the scenes, all of the necessary dependencies have been installed, and Hbsfy has been inserted into Laravel Elixir's Browserify transformers list.

## Step 3. Build Amazing Things

You're done. :)

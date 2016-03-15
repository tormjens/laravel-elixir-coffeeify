# Usage

## Step 1: Install

```
npm install laravel-elixir-hbsfy
```

## Step 2: Require

Within your main `Gulpfile`, add:

```js
var elixir = require('laravel-elixir');

require('laravel-elixir-hbsfy');

elixir(function(mix) {
    mix.browserify('main.js');
});
```

Notice above, where we require `laravel-elixir-hbsfy`. That's all you need. Behind the scenes, all of the necessary dependencies have been installed, and Hbsfy has been inserted into Laravel Elixir's Browserify transformers list.

## Step 3. Build Amazing Things

You're done. :)

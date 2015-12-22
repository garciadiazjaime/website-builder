var path = require('path');
var express = require('express');
var webpack = require('webpack');
var webpackMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config.js');
var conf = require('./config');

// todo: remove comments
// const app from express();
// import routes from require('./routes');


// app.use(express.static(path.join(__dirname, 'public')));
// app.use('/', routes);
//
// app.listen((process.env.PORT || 3000), function(err) {
//     if (err) throw err;
//     console.log('Listening on ' + (process.env.PORT || 3000) + '...');
// });


const isDeveloping = true; //process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;
const app = express();

// app.use(express.static(__dirname + '/dist'));


app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  next();
});

app.use(express.static(path.join(__dirname, 'public')));

if (isDeveloping) {
  const compiler = webpack(config);

  app.use(webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  }));

  app.use(webpackHotMiddleware(compiler));
}

// app.get('*', function response(req, res) {
//   res.sendFile(path.join(__dirname, 'dist/index.html'));
// });

app.set('ipaddress', conf.get('ipaddress'));
app.set('port', conf.get('port'));

app.listen(app.get('port'), app.get('ipaddress'), function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port %s. Open up http://localhost:%s/ in your browser.', app.get('port'), app.get('ipaddress'));
});

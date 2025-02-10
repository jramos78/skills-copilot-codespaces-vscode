//Create web server
const http = require('http');
const { getComments, addComment } = require('./comments');
const { getPost, addPost } = require('./posts');
const { getComment, addComment } = require('./comments');
const { getPost, addPost } = require('./posts');
const port = 3000;
const server = http.createServer((req, res) => {
    if (req.url === '/posts' && req.method === 'GET') {
        getPosts(req, res);
    } else if (req.url === '/posts' && req.method === 'POST') {
        addPost(req, res);
    } else if (req.url.match(/\/posts\/\w+/) && req.method === 'GET') {
        const id = req.url.split('/')[2];
        getPost(req, res, id);
    } else if (req.url === '/comments' && req.method === 'GET') {
        getComments(req, res);
    } else if (req.url === '/comments' && req.method === 'POST') {
        addComment(req, res);
    } else if (req.url.match(/\/comments\/\w+/) && req.method === 'GET') {
        const id = req.url.split('/')[2];
        getComment(req, res, id);
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Route not found' }));
    }
});
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
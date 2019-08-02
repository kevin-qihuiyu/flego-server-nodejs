const express = require('express');
const router = express.Router();
const progressService = require('./progress.service');

// routes
router.get('/', getAll);
router.get('/:id', getById);
router.post('/create', create);
router.put('/:id', update);
router.delete('/:id', _delete);

module.exports = router;


function create(req, res, next) {
    progressService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    progressService.getAll()
        .then(allProgress => res.json(allProgress))
        .catch(err => next(err));
}


function getById(req, res, next) {
    progressService.getById(req.params.id)
        .then(progress => progress ? res.json(progress) : res.sendStatus(404))
        .catch(err => next(err));
}

function update(req, res, next) {
    progressService.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    progressService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}
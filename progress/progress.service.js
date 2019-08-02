const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const Progress = db.Progress;

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

async function getAll() {
    return await Progress.find();
}

async function getById(id) {
    return await Progress.findById(id);
}

async function create(progressParam) {
    // validate
    if (await Progress.findOne({ name: progressParam.name })) {
        throw 'name "' + progressParam.name + '" is already taken';
    }

    const progress = new Progress(progressParam);

    // save progress
    await progress.save();
}

async function update(id, progressParam) {
    const progress = await Progress.findById(id);

    // validate
    if (!progress) throw 'Progress not found';
    if (progress.name !== progressParam.name && await Progress.findOne({ name: progressParam.name })) {
        throw 'name "' + progressParam.name + '" is already taken';
    }

    // hash password if it was entered
    if (progressParam.password) {
        progressParam.hash = bcrypt.hashSync(progressParam.password, 10);
    }

    // copy progressParam properties to progress
    Object.assign(progress, progressParam);

    await progress.save();
}

async function _delete(id) {
    await Progress.findByIdAndRemove(id);
}
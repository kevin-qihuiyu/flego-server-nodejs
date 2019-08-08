const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    username: { type: String, unique: true, required: true },
    hash: { type: String, required: true },  // hashed password
    firstName: { type: String},
    lastName: { type: String },
    createdDate: { type: Date, default: Date.now },
    // TO Refactor: All progress by category hardcoded as attribute of user
    cat1doneQuestionIds: { type: Array },
    cat2doneQuestionIds: { type: Array },
    cat3doneQuestionIds: { type: Array },
    cat4doneQuestionIds: { type: Array },
    cat5doneQuestionIds: { type: Array },
    cat6doneQuestionIds: { type: Array },
    cat7doneQuestionIds: { type: Array },
    cat8doneQuestionIds: { type: Array },
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('User', schema);
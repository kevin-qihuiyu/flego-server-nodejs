const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    name: { type: String, unique: true, required: true },
    questionCount: { type: Number, required: true },
    doneQuestionIds: { type: Array },
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Progress', schema);
const { getWilders } = require('../models/Wilder/manager')

const get = async (req, res) => {

    const wilders = await getWilders();
    res.send(wilders)
};

module.exports = {
    get,
}
const registered = (req, res, next) => {


    next();
}

const unregistered = (req, res, next) => {


    next();
}

module.exports = {
    registered,
    unregistered
};

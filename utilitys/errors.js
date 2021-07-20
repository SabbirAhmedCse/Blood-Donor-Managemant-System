module.exports = {
    serverError: (res, error) => {
        res.json({
            massage: error
        })
    }
};
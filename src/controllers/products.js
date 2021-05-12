exports.createProduct = (req, res, next) => {
    res.json(
            {
                message: 'Create Product Success!!!',
                data: {
                    id: 1,
                    name: 'Teh Botol',
                    price: 8000
                }
            }
        );
    next()
}

exports.getAllProduct = (req, res, next) => {
    res.json(
            {
                message: 'Get Product Success',
                data: [
                {
                    id: 1,
                    name: 'Teh Botol',
                    price: 8000
                }
                ]
            }
              
        );
    next()
}
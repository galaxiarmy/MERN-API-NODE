exports.createProduct = (req, res, next) => {
    const name = req.body.name;
    const price = req.body.price;
    res.json(
            {
                message: 'Create Product Success!!!',
                data: {
                    id: 1,
                    name: name,
                    price: price
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
                },
                {
                    id: 2,
                    name: 'Teh Tarik',
                    price: 10000
                }
                ]
            }
              
        );
    next()
}
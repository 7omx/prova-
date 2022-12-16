// dependência express
const express = require("express");




const Products = require('./models/Products');
// recebe um valor



const app = express();
// json



app.use(express.json());

// rota



app.get("/products", async (req, res) => {

    await Products.findAll({
        attributes: ['id', 'name', 'price'], 
        order: [['id', 'DESC']]})
    .then((products) => {
        return res.json({
            erro: false,
           products
        });
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Nenhum produto"
        });
    });    
});

// rota



app.get("/product/:id", async (req, res) => {
    const { id } = req.params;

    await products.findByPk(id)
    .then((product) => {
        return res.json({
            erro: false,
           product: product
        });
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Nenhum produto"
        });
    });
});

// rota
app.post("/product", async (req, res) => {
    const { name, email } = req.body;   

    await Products.create(req.body)
    .then(() => {
        return res.json({
            erro: false,
            mensagem: "cadastrado com sucesso!"
        });
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: não cadastrado com sucesso!"
        });
    });    
});

// rota 



app.put("/product", async (req, res) => {
    const { id } = req.body;  
    
    await Products.update(req.body, {where: {id}})
    .then(() => {
        return res.json({
            erro: false,
            mensagem: "editado com sucesso!"
        });

    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: não editado com sucesso!"
        });
    });
});

// rota



app.delete("/product/:id", async (req, res) => {
    const { id } = req.params;    

    await Products.destroy({ where: {id}})
    .then(() => {
        return res.json({
            erro: false,
            mensagem: "apagado com sucesso!"
        });
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: não apagado com sucesso!"
        });
    });
});

// porta 8080
app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});
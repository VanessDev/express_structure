const db = require('../models');
const Product = db.Product;

//ici le controller pour mon crud products
let productID = 3;
const products = [
{id: 1,name: 'stylo',price:2},
{id: 2,name: 'feutre',price: 3}
];

exports.listProducts = (req,res)=>{
    res.status(200).json({
        success:true,
        message:'liste des produits',
        data:products
    });
};

//logique affichage d'un produit
exports.getProductById = (req,res)=>{
    //number convertit le string en nombre
    const id = Number(req.params.id);
    const produit = products.find(p => p.id === id);

 res.status(200).json({
        success:true,
        message:'Produits',
        data:produit
    });
    
    if(!produit){
    //gestion d'erreur si pas de produit trouvé
res.status(404).json({
    success:false,
    message:"produit non trouvé",
    data:null
})  
}
    //200 produit trouvé
    res.status(200).json({
        success:true,
        message:'produit trouvé',
        data: produit
    });
}

exports.createProduct =(req, res) =>{
    const {name,price} = req.body;
    console.log(name,price);
//Si on ne trouve pas de nom et si price est different de number (s'il n'estr pas un nombre)
    if(!name ||!price || typeof price !=='number'){
        res.status(400).json ({
            success: false,
            message: 'name string et price int obligatoire',
            data:null
        });
    };
    //création d'un objet produit avec id autoincrement
     const newProduct = {id: productID++,name,price};
     products.push(newProduct);
     //201: indique que la requête a reussi 
     res.status(201).json ({
        success:false,
        message:"produit crée",
        data: newProduct
     });
    
};

exports.test = async (req,res) => {

   try {
    //vérifier la connexion
    await db.sequelize.authenticate();

    //vérifier que le model fonctionne
    const products = await Product.findAll({limit:1});

    res.status(200).json({
   success:true,
     message:'test',
     data:products
    })
   }catch(error){
    console.error('error dans le test de product',error);
    res.status(500).json({
        success:false,
        message:'echec lors de test de product',
        error: error.message
    })
  
   }
}
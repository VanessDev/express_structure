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
    
}

// exports.test = (req, res) =>{
//     console.log('route test de mon controller product');
//     res.send('route test de mon controller product');
// }
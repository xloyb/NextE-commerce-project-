const express = require('express'); 
const router = express.Router(); 
const SCategorie=require("../models/scategorie") 
// afficher la liste des s/categories.
router.get('/', async (req, res, )=> { 
 try { 
 const scat = await SCategorie.find({}, null, {sort: {'_id': -
1}}).populate("categorieID")
 
 res.status(200).json(scat); 
 } catch (error) { 
 res.status(404).json({ message: error.message }); 
 } 
}); 
// créer une nouvelle s/catégorie
router.post('/', async (req, res) => { 
 const { nomscategorie, imagescat,categorieID} = req.body; 
 const newSCategorie = new SCategorie({nomscategorie:nomscategorie, 
imagescat:imagescat,categorieID:categorieID }) 
 try { 
 await newSCategorie.save(); 
 res.status(200).json(newSCategorie ); 
 } catch (error) { 
 res.status(404).json({ message: error.message }); 
 }
}); 
// chercher une sous catégorie 
router.get('/:scategorieId',async(req, res)=>{ 
 try { 
 const scat = await SCategorie.findById(req.params.scategorieId); 
 
 res.status(200).json(scat); 
 } catch (error) { 
 res.status(404).json({ message: error.message }); 
 } 
}); 
// modifier une s/catégorie
router.put('/:scategorieId', async (req, res)=> { 
 
 try { 
 
 const scat1 = await SCategorie.findByIdAndUpdate( 
 req.params.scategorieId, 
 { $set: req.body }, 
 { new: true } 
 ); 
 res.status(200).json(scat1); 
 
 } catch (error) { 
 res.status(404).json({ message: error.message }); 
 } 
}); 
// Supprimer une s/catégorie
router.delete('/:scategorieId', async (req, res)=> { 
 const id = req.params.scategorieId; 
 await SCategorie.findByIdAndDelete(id); 
 res.json({ message: "sous categorie deleted successfully." }); 
}); 
// chercher une sous catégorie par cat
router.get('/cat/:categorieID',async(req, res)=>{ 
 try { 
 const scat = await SCategorie.find({ categorieID:
req.params.categorieID}).exec(); 
 
 res.status(200).json(scat); 
 } catch (error) { 
 res.status(404).json({ message: error.message }); 
 }
});
module.exports = router;
const mongoose = require('mongoose');

const portfolio_modelSchema = new mongoose.Schema(
{
    userId: { 
        type: String,
        required: true,
        unique: false
    },
    balance: { 
        type: Number,
        required: false,
        unique: false
    },
portfolio : [
{ 
  
   stockName: { 
        type: String,
        required: false,
        unique: false
    
},
 stockBuyingPrice : [
{ 
  
   stockBuyQuantity: { 
        type: Number,
        required: false,
        unique: false
    
},
  
   stockBuyPrice: { 
        type: Number,
        required: false,
        unique: false
    
},
  
   stockBuyDate: { 
        type: String,
        required: false,
        unique: false
    
},
}
]
,
 stockSell : [
{ 
  
   stockSellQuantity: { 
        type: Number,
        required: false,
        unique: false
    
},
  
   stockSellPrice: { 
        type: Number,
        required: false,
        unique: false
    
},
  
   stockSellDate: { 
        type: String,
        required: false,
        unique: false
    
},
}
]
,
  
   stockRemainigQuantity: { 
        type: Number,
        required: false,
        unique: false
    
},
}
],
});

module.exports = mongoose.model('portfolio_model', portfolio_modelSchema);

// module.exports = (req, res, next) => {

//     // if(req.body.cliente){
//     //     req.body.cliente = req.body.cliente.replace('Dionisio','NÃO USE SAMUEL')
//     //     console.log(`Vi que vc postou ${req.body.cliente}`);
        
//     // }
//     next();

// };

exports.middlewareGlobal = (req,res,next) => {
    next();
};
exports.outroMiddleware = (req,res,next) => {
    // console.log('Sou seu outro middleware');
    
    next();
};
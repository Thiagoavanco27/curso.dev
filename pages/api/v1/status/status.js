function status(request, response){
    response.status(200).json({chave:"Pessoas acima da média"});
};

export default status;
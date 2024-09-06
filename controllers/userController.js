const userController = (req, res) => {
    try{
        res.status(200).send({
            success : true,
            status : "Api Working Successfully"
        })
    }
    catch(error){
        res.status(200).send({
            success : false,
            status : error
        })
    }

};

module.exports = {userController};
const bcrypt=require('bcrypt');
exports.hashPassword = function(password) {
    return bcrypt.hashSync(password, 10);
}
exports.comparePassword = function(password,dbPassword){
    return bcrypt.compareSync(password,dbPassword);
}
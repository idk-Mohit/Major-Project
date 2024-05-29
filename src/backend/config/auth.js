  function ensureAuth(req,res,next) {
        if(req.isAuthenticated()){
            return next();
        }
        req.flash('error_msg','Please login to view this resource');
        res.redirect('SignIn')
    }
module.exports = {
        ensureAuth:ensureAuth,
}
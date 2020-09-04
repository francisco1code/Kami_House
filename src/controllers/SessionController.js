
import User from '../models/User'

class SessionController{
   async store(req,res){
        const { email } = req.body;

        let user = await User.findOne({ email});
        if(!email){
            user = await User.create( {email});
        }

        //let user = await User.create( {email})

        res.json(user);

    }

}

export default new SessionController();
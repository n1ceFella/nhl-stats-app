const bcrypt = require('bcryptjs');
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var userSchema = new Schema({
  "userName":  {
    "type": String,
    "unique": true
  },
  "email": {
    "type": String,
    "unique": true
  },
  "password": String,
  "loginHistory": [{dateTime: Date, userAgent: String}]
});
let User;   

module.exports.initialize = function() {
    return new Promise((resolve, reject) => {
        let db = mongoose.createConnection("mongodb+srv://unix90:Vova1990@vlog.zrvet9x.mongodb.net/VLog?retryWrites=true&w=majority");

        db.on('error', (err)=>{
            reject(err); // reject the promise with the provided error
        });
        db.once('open', ()=>{
           User = db.model("users", userSchema);
           resolve();

        });
    });
}

module.exports.registerUser = (userData) => {
    return new Promise(async (resolve, reject) => {
        try {
            const { userName, email, password, password2 } = userData;

            // Check if the email is already registered
            const existingUser = await User.findOne({ $or: [{ userName: userName }, { email: email }],});
            if (existingUser) {
                reject("User already exists");
            }
            if(password != password2){
                reject("Password don't match");
            }

            // Hash the password
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            // Create a new user
            const newUser = new User({userName, email, password: hashedPassword });
            await newUser.save().then(()=>{
                resolve('User registered successfully');
            }).catch((error) => {
                if(error.code == 11000){
                    reject("Username already taken");
                    } else
                    reject("There was an error creating the user: " + error );
            });;
        } catch (error) {
            console.error(err);
            res.status(400).json({ error: err });
        }
    });
}

module.exports.checkUser = (userData) => {
    return new Promise( async (resolve, reject) => {

        try {
            const {email, password } = userData;
        
            // Find the user by email
            const user = await User.findOne({ email });
            if (!user) {
                reject('Invalid email or password');
            }
            // Compare the provided password with the stored hashed password
            const isPasswordValid = await bcrypt.compare(password, user.password).then((result) => {
                if(result){
                    user.loginHistory.push({dateTime: (new Date()).toString(), userAgent: userData.userAgent}); //check this
                    User.updateOne(
                        { userName: user.userName},
                        { $set: { loginHistory: user.loginHistory } }
                      ).exec().then(() => {
                        resolve(user)
                    }).catch((err) =>{
                        reject("There was an error in update");
                    }); 
                }else{
                    reject("Incorrect Password for user: " + userData.userName);
                }
            }).catch((err) =>{
                reject("There was an error verifying the user: " + err);
            });
            // if (!isPasswordValid) {
            //     console.log('Invalid email or password!!!');
            //     reject('Invalid email or password');
            // }
        
            // Create and sign a JWT token
            // const token = jwt.sign({ userId: user._id }, 'secret-key');
            // resolve({ user });
            // resolve({ token });
          } catch (error) {
            console.error(error);
            reject('Internal server error');
          }

        // User.find({userName: userData.userName}).exec()
        // .then((users) => {
        //     if(users.length == 0){
        //         reject("Unable to find user:" + users[0]);
        //     }
        //     else{
        //     bcrypt.compare(userData.password, users[0].password).then((result) => {
        //         if(result){
        //             users[0].loginHistory.push({dateTime: (new Date()).toString(), userAgent: userData.userAgent}); //check this
        //             User.updateOne(
        //                 { userName: users[0].userName},
        //                 { $set: { loginHistory: users[0].loginHistory } }
        //               ).exec().then(() => {
        //             console.log(users[0]);
        //             resolve(users[0])}); 
        //         }else{
        //             reject("Incorrect Password for user: " + userData.userName);
        //         }
        //     }).catch((err) =>{
        //         reject("There was an error verifying the user: " + err);
        //     })
        // }

        // }).catch((err) => {
        //     reject(reject("There was an error verifying the user: " + userData.userName));
        // });
    });
}
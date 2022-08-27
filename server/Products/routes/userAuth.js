const userDetails = require('../model/userSchema')
const mobileModel = require('../model/mobileModel')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')

//MOBILE VERIFICATION
const userMobileVerify = async (req, res) => {
    const { mobile } = req.body;
    var existData = await userDetails.findOne({ mobile });
    if (existData) {
        var otp = Math.floor((Math.random() * 1000000) + 1);
        var data = { newSavedNo:existData, otp, message: "OTP Verified Successfully !!" }
        return res.send(data);
    }
    if (existData === null) {
        const MobileNumber = new mobileModel({ mobile });
        var newSavedNo = await MobileNumber.save()
        var otp = Math.floor((Math.random() * 1000000) + 1);
        var TempData = { newSavedNo, otp, message: "OTP Created Successfully !!" }
        res.send(TempData);
    }
}



//SIGNUP

///////////////////   POST request sample for SIGNUP   ///////////////// 
// {
//     "firstname": "Arshad",
//     "lastname": "Khan",
//     "email": "arsh@gmail.com",
//     "password":"arsh",
//     "confirmPassword":"arsh"
// }

/////////////////////////////////////////////   METHOD-1    //////////////////////////////////////////

// userAuthRouter.post('/signup', async (req, res) => {
//     const { email, firstname, lastname, password, confirmPassword } = req.body;
//     // console.log(email,firstname,lastname,password,confirmPassword)
//     if(!firstname || !lastname || !email || !password || !confirmPassword){
//         return res.status(422).send("Please Add all fields")
//     }
//     await userDetails.findOne({email}).then((savedUser) => {
//         // console.log(savedUser)
//         if(savedUser){
//             return res.status(422).send("User already exists with that email")
//         }
//         if(password!==confirmPassword){
//             return res.status(422).send("Password didn't matched")
//         }
//         bcrypt.hash(password, 12).then((hashedPassword)=>{
//             // console.log(hashedPassword)
//             const result = new userDetails({
//                 email, 
//                 firstname, 
//                 lastname, 
//                 password : hashedPassword
//             })
//             result.save()
//             .then(user => {
//                 //here user will give all entered data that are name,email,hashed password and object id that have been posted on mongo atlas cluster
//                 // console.log(user)
//                 const token = jwt.sign({id: result._id }, "arshad", { expiresIn: "1h" });
//                 res.json({user,message: "Saved Successfully"})
//             })
//             .catch(err => res.status(500).send( "user.save() part error => " + err))
//         })
//         .catch(err => res.status(500).send( "User.findOne savedUser part error => " + err))
//     })
// })

/////////////////////////////////////////////   METHOD-2    //////////////////////////////////////////

const userRegistration = async (req, res) => {
    const { email, firstname, password, confirmPassword, mobile } = req.body;

    if (!firstname || !email || !password || !confirmPassword || !mobile) {
        return res.status(422).send("Please Add all fields")
    }
    userDetails.findOne({ email }).then(async (savedUser) => {
        if (savedUser) {
            return res.status(422).json({ message: "User already exists with that email" })
        }
        if (password !== confirmPassword) {
            return res.status(422).json({ message: "Password didn't matched" })
        }
        const hashedpassword = await bcrypt.hash(password, 12);
        const result = await userDetails.create({
            email,
            firstname,
            password: hashedpassword,
            mobile
        })
        res.status(200).json({ result, message: 'User saved successfully' })
    }).catch(err => res.status(500).json({ message: "User.findOne savedUser part error => ", err }))
}

//LOGIN

///////////////////   POST request sample for LOGIN   ///////////////// 


const userLogin = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(422).json({ error: "All fields required" });
    }
    userDetails.findOne({ email }).then(async (validation) => {
        const PasswordVarification = await bcrypt.compare(password, validation.password)
        if (PasswordVarification) {
            const token = jwt.sign({ id: validation._id, email: validation.email, role: validation.role }, "arshad", { expiresIn: "1h" });
            const ResponseToFrontEnd = { token, email, role: validation.role }
          
            return res.status(200).json({ ResponseToFrontEnd, message: "Account Verified" })
        } else {
            return res.status(422).json({ message: "Verification Failed" })
        }
    }).catch((err) => res.status(422).json({ message: "User not found, Please Sign-Up" }))
}

module.exports = { userRegistration, userLogin, userMobileVerify }
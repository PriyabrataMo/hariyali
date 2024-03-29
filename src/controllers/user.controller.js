import { asynchandler } from "../utils/asynchandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.models.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken";

const generateAccessandRefreshTokens = async(userId)=>{
    try {
        const user  = await User.findById(userId);
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()

        user.refreshToken = refreshToken
        await user.save({ validateBeforeSave:false })

        // console.log(accessToken);
        // console.log("\n")
        // console.log(refreshToken);
        // console.log("\n")

        return {accessToken , refreshToken}

    } catch (error) {
        throw new ApiError(500 , "Something went wrong while generting refresh and access token")
    }

}
const registerUser = asynchandler( async (req,res)=>{
    // get user detail from frontend
    // validation - not empty
    // check if user already exists: userName and email
    // check for images, check for avtar
    // upload them to cloudinary, avatar
    // create user object - create entry in db
    // remove password and refresh token field from response
    // check for user creation
    // return res

    //res.status(200).json({message:"register user"})
    const {fullName , email , userName , password } = req.body
    console.log(req.body);
    /*
    if(fullName===""){
        throw new ApiError(400,"fullname is required")
    }*/
    if(
        [fullName , email , userName , password].some((field)=>
        field?.trim() === "")
    ){
        throw new ApiError(400,"All fields are compulsary");
    }
    const exists = await User.findOne({
        $or: [{ userName }, { email }]
    })
    if(exists){
        throw new ApiError(409, "User already exists");
    }
    let avatarlocalpath;
    if(req.files && Array.isArray(req.files.avatar) && req.files.avatar.length>0){
        avatarlocalpath = req.files.avatar[0].path;
    }
    let coverimagelocalpath;
    if(req.files && Array.isArray(req.files.coverimage) && req.files.coverimage.length>0){
        coverimagelocalpath = req.files.coverimage[0].path;
    }
    // if(!avatarlocalpath){
    //     throw new ApiError(400,"Avatar is required")
    // }
    if(avatarlocalpath){
        console.log(avatarlocalpath);
    }

    const avtar = await uploadOnCloudinary(avatarlocalpath);
    const coverImage = await uploadOnCloudinary(coverimagelocalpath);

    //console.log(typeof(avtar.url));
    // if(!avtar){
    //     throw new ApiError(500,"Error in uploading avatar")
    // }
    const defaultUrl = "https://res.cloudinary.com/hariyali/image/upload/v1711700944/default.jpg";
    const user = await User.create({
        userName:userName.toLowerCase(),
        email:email,
        fullName:fullName,
        avatar: avtar?.url || defaultUrl,
        password:password,
        coverImage: coverImage?.url || "",

    })

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )
    if(!createdUser){
        throw new ApiError(500,"Error in creating user")
    }

    return res.status(201).json(new ApiResponse(200,createdUser,"User Created Successfully"))


})

const loginUser = asynchandler( async (req,res)=>{
    // req body -> data
    // username or with email
    // find user
    // check password
    // access and refresh token
    // send cookies
    console.log(req.body);
    const {email , userName , password} = req.body;

    if(!userName && !email){
        throw new ApiError(404 , "username or email required");
    }

    const user = await User.findOne({
        $or: [{email} , {userName}]
    })

    if(!user){
        throw new ApiError(404 , "user doesnot exist");
    }
    const isValid = await user.isPasswordCorrect(password)
    if(!isValid){
        throw new ApiError(401 , "incorrect password");
    }

    const { accessToken , refreshToken }= await generateAccessandRefreshTokens(user._id)

    const loggedInUser = await User.findById(user._id).select("-password -refreshtoken")

    const options = {
        httpOnly: true,
        secure: true
    }

    return res.status(200)
    .cookie("accessToken" , accessToken , options)
    .cookie("refreshToken" , refreshToken , options)
    .json(
        new ApiResponse(200,{
            user: loggedInUser,accessToken,refreshToken
        },
        "user logged in successfully"
    )
    )


})

const logoutUser = asynchandler( async (req , res)=>{
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $set: {
                refreshToken: undefined
            }
        }
    )
    const options = {
        httpOnly: true,
        secure: true
    }

    return res
    .status(200)
    .clearCookie("accessToken",options)
    .clearCookie("refreshToken",options)
    .json(new ApiResponse(200 , {} , "User Logged Out"))
})

const refreshAccessToken = asynchandler( async (req,res)=>{
    const incomingRefreshToken = req.cookies.refreshToken || req.body.refreshToken
    if(!incomingRefreshToken){
        throw new ApiError(401 , "Unauthorized Request")
    }
    try {
        const decodedToken = jwt.verify(incomingRefreshToken , process.env.REFRESH_TOKEN_SECRET)
    
        const user = await User.findById(decodedToken?._id);
    
        if(!user) {
            throw new ApiError(401 , "invalid token")
        }
    
        if(incomingRefreshToken !== user?.refreshToken){
            throw new ApiError(401 , "refresh token is expired or used")
        }
    
        const options = {
            httpOnly: true,
            secure: true,
        }
        //console.log(user?.refreshToken);
        console.log(await generateAccessandRefreshTokens(user._id));
        const { accessToken , refreshToken:newrefreshToken } = await generateAccessandRefreshTokens(user._id)
        console.log(accessToken);
        console.log("\n")
        console.log(newrefreshToken);
        console.log("\n")
        return res.status(200)
        .cookie("accessToken" ,accessToken , options )
        .cookie("refreshToken",newrefreshToken , options )
        .json(
            new ApiResponse(
                200,
                {accessToken ,refreshToken:newrefreshToken},
                "accesstoken refreshed successfully"
            )
        )
    } catch (error) {
        throw new ApiError(401 , error?.message||"invalid refresh token")
    }

})

export { registerUser, loginUser , logoutUser , 
    refreshAccessToken }
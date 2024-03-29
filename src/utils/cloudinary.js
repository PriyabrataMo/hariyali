import {v2 as cloudinary} from 'cloudinary';
          
cloudinary.config({ 
  cloud_name: 'hariyali', 
  api_key: '582742558659777', 
  api_secret: 'dxSQQxOvM_VT-NYeWi6dUOOXxhk' 
});
          
import fs from "fs"

// cloudinary.config({ 
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
//   api_key: process.env.CLOUDINARY_API_KEY, 
//   api_secret: process.env.CLOUDINARY_API_SECRET, 
// });

const uploadOnCloudinary = async (localfilepath) => {
  try {
      //console.log(localfilepath);
      if(!localfilepath) return null
      const response = await cloudinary.uploader.upload(localfilepath, {
        resource_type: "auto"
      })
      //console.log(response);
      console.log("Successfully uploaded on cloudinary " , response.url);
      fs.unlinkSync(localfilepath)
      return response
  } catch (error) {
    console.log(error);
    fs.unlinkSync(localfilepath) //remove local saved temporary file
    return null
  }
}

export { uploadOnCloudinary }
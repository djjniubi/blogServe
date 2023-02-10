import multer from "multer"
import {formatDate} from "../../utlis/date.js"
const storage = multer.diskStorage({
    destination:  (req, file, cb)=> {
      cb(null, './public/upload')
    },
    filename:  (req, file, cb) =>{
        console.log("file",file);
        const {originalname} = file
        const date= new Date()
        const timestamp = formatDate(date,"yyyy-mm-dd");
        const randomNum = parseInt(Math.random() * 9999).toString();
        const suffix =originalname.split('.')[originalname.split('.').length - 1]
      cb(null, `${timestamp}-${randomNum}.${suffix}`)
    }
  })
  
  const upload = multer({ storage: storage }).single('avatar')
 
  export default upload
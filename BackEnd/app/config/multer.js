const multer = require('multer');
const path = require('path');
const cryrto = require('crypto');


module.exports ={
    dest : path.resolve(__dirname, '..', '..', 'tmp', 'upload'),
    storage : multer.diskStorage({
        destination: (req,file,cd) =>{
            cd(null,path.resolve(__dirname, '..', '..', 'tmp', 'upload'));
        },
        filename:(req,file,cd)=>{
            cryrto.randomBytes(16,(err, hash)=>{
                if(err) cd(err);

                const fileName = `${hash.toString("hex")}-${file.originalname}`;
                cd(null,fileName)
            })
        }
    }),
    limits:{
        fileSize: 2 * 1024 * 1024,
    },
    fileSize:(req,file,cb)=>{
        const allowedMimes =[
            'image/jpeg',
            'image/pjpeg',
            'image/png',
            'image/gif'
        ];
        if(allowedMimes.includes(file.mimetype)){
            cb(null,null);
        }else{
            cd(new Error('Invalid file type'))
        }
    }
}
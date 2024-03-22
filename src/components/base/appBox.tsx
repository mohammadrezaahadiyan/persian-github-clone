import {Box, TextField} from "@mui/material";
import IAppBoxProps from "../../core/interfaces/appBoxProps.ts";
import AppLink from "./appLink.tsx";

const AppBox = ({title, description, image, inputText, inputId}: IAppBoxProps) => {

    return (
        <>
         <div className={`flex md:block`}>
             <Box
                 display={`flex`}
                 alignItems={`center`}
                 height={200}
                 m={2}
                 p={2}
                 sx={
                     {
                         border: '2px solid #eaeaea5c',
                         borderRadius: '10px',
                         boxShadow: '0px 0px 3px 1px #f4f4f421',
                         width: '80%'
                     }
                 }
                 className={`flex flex-col justify-center h-auto flex-auto bg-white gap-2 md:h-32 md:w-40 md:m-4`}
             >
                 <div className={`flex flex-row-reverse mt-5`}>
                     <div className={`mt-4 mr-5 sm:mt-0 sm:mr-4 text-center sm:text-right`}>
                         <h1 className={`font-bold text-2xl text-right`}>{title}</h1>
                         <hr className={`my-3`}/>
                         <p className={`text-right`}>{description}</p>
                     </div>
                     <img className={`block mx-auto sm:mx-0 sm:flex-shrink-0 h-16 sm:h-24 rounded-full`}
                          src={`/src/assets/images/${image}`} alt={image}/>
                 </div>

                 <form dir={`rtl`} className={`flex gap-4 my-5`}>
                     <TextField
                         dir={`rtl`}
                         id={inputId}
                         label={inputText}
                         size={`small`}
                     />
                     <button>
                         <AppLink title={`جست و جو`} path={'/'} additionalClasses={`!bg-[#181818] !py-2.5`}/>
                     </button>
                 </form>
             </Box>
         </div>
        </>
    )

}

export default AppBox;
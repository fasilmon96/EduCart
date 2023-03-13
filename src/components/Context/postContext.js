  import { createContext } from "react"
  import { useState } from "react"



export const PostContext =createContext(null)




function Post ({children}){

    const[post,setPost]=useState([])
    console.log(post)




    return(
     <PostContext.Provider value={{post,setPost}}>
         {children}
     </PostContext.Provider>

    )

}
    export default Post



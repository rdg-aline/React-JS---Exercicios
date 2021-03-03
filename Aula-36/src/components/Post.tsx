import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { FiHeart } from "react-icons/fi";
import { useSelector, useDispatch } from 'react-redux'
import { getPost, getLike } from '../store/ducks/Posts/actions'
import { InterfacePostItem, InterfacePostState } from '../store/ducks/Posts/types'


interface UpdateLikes{
    likes: number
  }


const Post = () => {

    const dispatch = useDispatch()
    const post = useSelector((state: InterfacePostState) => state.posts.arrayPost)
    
    

    useEffect(() => {
        axios.get("http://localhost:4000/posts")
            .then(resposta => dispatch(getPost(resposta.data)))
    }, [])

    
    const updateLike = (id: any, like : any) => {
        const requisicao : UpdateLikes = {
            likes: like + 1
        }
        axios.patch(`http://localhost:4000/posts/${id}`, requisicao)
            .then(resposta => dispatch(getLike(resposta.data)))
            window.location.reload();
    
    }


    return (
        <>

            {
                post?.map((item: InterfacePostItem) => (
                    <div className="post" key={item.id}>
                        <header>
                            <img src={item.userPicture} alt="user" />
                            <div className="post-user">
                                <strong>{item.user}</strong>
                                <span>{item.location}</span>
                            </div>
                        </header>
                        <div className="post-image">
                            <img src={item.postPicture} alt="post" />
                        </div>
                        <div className="post-likes"  >
                           <FiHeart onClick={() => updateLike(item.id,item.likes)} />
                                {item.likes}
                        </div>
                        <p>{item.description}</p>
                    </div>
                ))
            }



        </>

    );
}
export default Post;
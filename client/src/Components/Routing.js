import { Routes, Route} from 'react-router-dom';
import LoginForm from './LoginForm';
import Home from './Home';
import Buying from './Buying';
import React, { useState, useEffect } from 'react';
import Selling from './Selling';
import Requesting from './Requesting';
import Offering from './Offering';
import Account from './Account';


function Routing({ currentUser, setCurrentUser }) {
    const [posts, setPosts] = useState([])
    const [displayPost, setDisplayPost] = useState({})
    const [search, setSearch] = useState("")
    const [editToggle, setEditToggle] = useState(false)


    function handleUpdatePost(updatePost) {
        let filteredPosts = posts.map(post => {
            if (post.id === updatePost.id) {
                return updatePost
            }
            return post
        })
        setPosts(filteredPosts)
    }

    const addDisplayPost = (post) => {
        setDisplayPost(post)
    }
    const searchPost = posts.filter(post => (post.title.toLowerCase().includes(search.toLowerCase()) || 
    (post.content.toLowerCase().includes(search.toLocaleLowerCase()))))

    const addNewPost = (newPost) => {
        setPosts([...posts, newPost])
    }
    
    const handleEditToggle = (boolean) => {
        setEditToggle(boolean)
    }


    return (
    <Routes>
        <Route path="/home" element={<Home posts={posts} setPosts={setPosts} />} />
        <Route exact path="/" element={<LoginForm />} />
        <Route path="/account" element={<Account currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
        {/* <Route path="/signup" element={<LoginForm currentUser={currentUser} setCurrentUser={setCurrentUser} />} /> */}
        <Route path="/buying" element={<Buying
                                            addNewPost={addNewPost}
                                            currentUser={currentUser}
                                            setCurrentUser={setCurrentUser}
                                            posts={posts} 
                                            setPosts={setPosts}
                                            displayPosts={displayPost}
                                            handleUpdatePost={handleUpdatePost}
                                            setDisplayPost={setDisplayPost}
                                            editToggle={editToggle}
                                            handleEditToggle={handleEditToggle}
                                            />} />
        <Route path="/selling" element={<Selling
                                            currentUser={currentUser}
                                            setCurrentUser={setCurrentUser}
                                            posts={posts} 
                                            setPosts={setPosts}
                                            displayPosts={displayPost}
                                            handleUpdatePost={handleUpdatePost}
                                            setDisplayPost={setDisplayPost}
                                            editToggle={editToggle}
                                            handleEditToggle={handleEditToggle}
                                            />} />
        <Route path="/requesting" element={<Requesting 
                                            currentUser={currentUser}
                                            setCurrentUser={setCurrentUser}
                                            posts={posts} 
                                            setPosts={setPosts}
                                            displayPosts={displayPost}
                                            handleUpdatePost={handleUpdatePost}
                                            setDisplayPost={setDisplayPost}
                                            editToggle={editToggle}
                                            handleEditToggle={handleEditToggle}
                                            />} />
        <Route path="/offering" element={<Offering 
                                            currentUser={currentUser}
                                            setCurrentUser={setCurrentUser}
                                            posts={posts} 
                                            setPosts={setPosts}
                                            displayPosts={displayPost}
                                            handleUpdatePost={handleUpdatePost}
                                            setDisplayPost={setDisplayPost}
                                            editToggle={editToggle}
                                            handleEditToggle={handleEditToggle}
                                            />} />
    </Routes>
    )
}

export default Routing;
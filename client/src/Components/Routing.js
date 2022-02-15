import { Routes, Route} from 'react-router-dom';
import LoginForm from './LoginForm';
import Home from './Home';
import Buying from './Buying';
import React, { useEffect, useState } from 'react';
import Selling from './Selling';
import Requesting from './Requesting';
import Offering from './Offering';
import Account from './Account';
import New from './New';
import BuyPostViewer from './BuyPostViewer'
import SellPostViewer from './SellPostViewer'
import OfferPostViewer from './OfferPostViewer'
import RequestPostViewer from './RequestPostViewer'
import AccountPostViewer from './AccountPostViewer'


function Routing({ currentUser, setCurrentUser }) {
    const [posts, setPosts] = useState([])
    const [search, setSearch] = useState("")
    const [allPosts, setAllPosts] = useState([])

    
    const searchPost = posts.filter(post => (post.title.toLowerCase().includes(search.toLowerCase()) || 
    (post.content.toLowerCase().includes(search.toLocaleLowerCase()))))

    // const addNewPost = (newPost) => {
    //     setPosts([...posts, newPost])
    // }
    
    

    useEffect(() => {
        fetch('/posts')
        .then(res => res.json())
        .then(posts => setAllPosts(posts))
    }, [])


    return (
    <Routes>
        <Route path="/home" element={<Home posts={posts} setPosts={setPosts} />} />
        <Route exact path="/" element={<LoginForm />} />
        <Route path="/account/:id" element={<AccountPostViewer posts={posts}/>}/>
        <Route path="/account" element={<Account currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
        <Route path="/new" element={<New currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
        <Route path="/buying/:id" element={<BuyPostViewer posts={posts}/>}/>
        <Route path="/buying" element={<Buying
                                            currentUser={currentUser}
                                            setCurrentUser={setCurrentUser}
                                            posts={posts} 
                                            setPosts={setPosts}
                                            />} />
        <Route path="/selling/:id" element={<SellPostViewer posts={posts}/>}/>
        <Route path="/selling" element={<Selling
                                            currentUser={currentUser}
                                            setCurrentUser={setCurrentUser}
                                            posts={posts} 
                                            setPosts={setPosts}
                                            />} />
        <Route path="/offering/:id" element={<OfferPostViewer posts={posts}/>}/>
        <Route path="/requesting" element={<Requesting 
                                            currentUser={currentUser}
                                            setCurrentUser={setCurrentUser}
                                            posts={posts} 
                                            setPosts={setPosts}
                                            />} />
        <Route path="/requesting/:id" element={<RequestPostViewer posts={posts}/>}/>
        <Route path="/offering" element={<Offering 
                                            currentUser={currentUser}
                                            setCurrentUser={setCurrentUser}
                                            posts={posts} 
                                            setPosts={setPosts}
                                            />} />
    </Routes>
    )
}

export default Routing;
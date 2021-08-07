import {useState, useEffect} from "react"
import { verify} from "./services/user"
import { Route } from "react-router-dom"

import SignIn from "./screens/SignIn/SignIn";
import SignUp from "./screens/SignUp/SignUp";
import SignOut from './screens/SignOut/SignOut';
import EditThread from "./screens/Threads/EditThread";
import ThreadCard from "./screens/Threads/ThreadCard";
import Gaming from "./screens/Threadcss/Gaming";
import Comics from "./screens/Threadcss/Comics";
import CreateThread from "./screens/Threads/CreateThread";
import Home from "./screens/Home/Home";
// import Categories from "./screens/Categories/Categories";
import EditPost from "./screens/Posts/EditPost";
import PostCard from "./screens/Posts/PostCard";
import GetCategories from "./TestingFolder/GetCategories";
import GetThreads from "./TestingFolder/GetThreads";
import GetPosts from "./TestingFolder/GetPosts";



function App() {
  const [user, setUser] = useState(null)
  
  useEffect(() => {
    const verifyUser = async() => {
      setUser(await verify())
    }
    verifyUser()
  }, [])
  
  return (
    <div>
      <Route exact path="/">
        <Home user={user} setUser={setUser} />
      </Route>
      <Route path="/sign-in">
        <SignIn user={user} setUser={setUser} />
      </Route>
      <Route path="/threads-create">
        <CreateThread user={user} setUser={setUser} />
      </Route>
      <Route path="/sign-up">
        <SignUp user={user} setUser={setUser} />
      </Route>
      <Route path = "/threads-gaming">
        <Gaming user={user} setUser={setUser}/>
      </Route>
      <Route path ="/threads-comic">
        <Comics user={user} setUser={setUser}/>
      </Route>
      <Route path="/sign-out">
        <SignOut setUser={setUser} />
      </Route>
      <Route path="/threads-edit/:id">
        <EditThread user={user} setUser={setUser} />
      </Route>
      <Route path="/post-edit/:id">
        <EditPost user={user} setUser={setUser} />
      </Route>
      <Route path="/post/:id">
        <PostCard user={user} setUser={setUser} />
      </Route>
      <Route exact path="/threads/:id">
        <ThreadCard user={user} setUser={setUser}/>
      </Route>
      {/* <Route path="/categories">
        <Categories user={user} setUser={setUser} />
      </Route> */}


      <Route exact path="/categories">
        <GetCategories user={user} setUser={setUser}/>
      </Route>

      <Route path="/categories/:id/threads">
        <GetThreads user={user} setUser={setUser}/>
      </Route>

      <Route exact path="/threads/:id/posts">
        <GetPosts user={user} setUser={setUser}/>
      </Route>

      
    </div>
  )
}

export default App;


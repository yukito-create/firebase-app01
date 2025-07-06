import { useEffect, useState } from 'react';
import './App.css';
import db from "./firebase";
import { doc, collection, getDocs, onSnapshot } from "firebase/firestore"; 

function App() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postData = collection(db, "posts");

    getDocs(postData).then((snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ ...doc.data() })));
    });

    onSnapshot(postData, (post) => {
      setPosts(post.docs.map((doc) => ({ ...doc.data() })))
    });
  }, []);

  return (
    <div className='App'>
      <div>
        {posts.map((post) => (
          <div key={post.title}>
            <h1>{post.title}</h1>
            <p>{post.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App

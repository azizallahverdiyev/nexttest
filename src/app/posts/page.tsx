"use client"

import React, { useEffect } from 'react'



export default function Posts() {
    async function getPosts() {
        const res = await fetch("http://localhost:3000/api/posts")
        const data = await res.json()
        return data
    }
    async function fetchAndLogPosts() {
        const posts = await getPosts();
        console.log(posts.data);
    }
    
    useEffect(() => {
        
        fetchAndLogPosts()

    }, [])

  return (
    <div>Posts</div>
  )
}

"use client"

import React, { useEffect } from 'react'



export default function Posts() {
    async function getPosts() {
        const res = await fetch(`${window.location.origin}/api/posts`)
        const data = await res.json()
        return data
    }
    async function fetchAndLogPosts() {
        const posts = await getPosts();
        console.log(posts);
    }
    
    useEffect(() => {
        
        fetchAndLogPosts()

    }, [])

  return (
    <div>Posts</div>
  )
}

"use client"
import React, { use, useEffect } from 'react'

const BlogList = () => {
    const [posts, setPosts] = React.useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('/api/blog');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error('Failed to fetch posts:', error);
            }
        };
        fetchPosts();
    }, []);

    console.log(posts);

    return (
        <div>
            <div className='container mx-auto py-8'>
                <h1 className='text-3xl font-bold mb-6'>CSR Blog Posts</h1>
                <div className='space-y-4'>
                    {posts.map((post: { id: number; title: string; content: string }) => (
                        <div key={post.id} className='p-4 border rounded-lg shadow-sm'>
                            <h2 className='text-xl font-semibold'>{post.title}</h2>
                            <p className='mt-2 text-gray-700'>{post.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BlogList
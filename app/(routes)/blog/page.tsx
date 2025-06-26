import React from 'react'

const BlogPage = async() => {
    const res = await fetch('http://localhost:3000/api/blog');
    const posts = await res.json();
        
    console.log(posts);

    return (
        <div className='container mx-auto py-8'>
            <h1 className='text-3xl font-bold mb-6'>SSR Blog Posts</h1>
            <div className='space-y-4'>
                {posts.map((post: { id: number; title: string; content: string }) => (
                    <div key={post.id} className='p-4 border rounded-lg shadow-sm'>
                        <h2 className='text-xl font-semibold'>{post.title}</h2>
                        <p className='mt-2 text-gray-700'>{post.content}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BlogPage
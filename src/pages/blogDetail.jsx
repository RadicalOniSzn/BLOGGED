import React from 'react'
import { useParams } from 'react-router-dom'
import {
    useQuery,
} from '@tanstack/react-query';
import axios from 'axios';
import Card from '../components/Card';


const BlogDetail = () => {
    const { id } = useParams()

    const { data } = useQuery({
        queryKey: ["blogs"],
        queryFn: () => {
            const response = axios.get(`http://localhost:8000/blog/getById/${id}`)
            console.log("response", response)
            return response;
        }
    })

    console.log(data)

    const blog = data?.data?.data;

    return (
        <div>
            <h1 className='font-bold text-center text-2xl'>{id}</h1>
            <div className="md:p-10 p-5">
                <Card {...blog} />
            </div>
        </div>
    )
}

export default BlogDetail
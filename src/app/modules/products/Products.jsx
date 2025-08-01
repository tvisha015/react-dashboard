import { useGetAllProductsQuery } from '@/store/api/productApi'
import React, { useEffect, useState } from 'react'

const products = () => {
    const [productData, setProductData] = useState([])
    console.log("🚀 ~ products ~ productData:", productData)
    const {data, isLoading} = useGetAllProductsQuery(
        {
            limit: 10,
            offset: 0
        }, 
        { refetchOnMountOrArgChange: true }
    );

    useEffect(() => {
        if (data) {
            setProductData(data);
        }
    }, [data])
    

  return (
    <>
        <h1 className="text-2xl font-bold">Products</h1>
        {isLoading ? (
            <div>Loading...</div>
        ) : (
            <ul className="list-disc pl-5">
                {data.map((product) => (
                    <li key={product.id} className="mb-2">
                        {product.name} - ${product.price}
                    </li>
                ))}
            </ul>
        )}
        
    </>
  )
}

export default products
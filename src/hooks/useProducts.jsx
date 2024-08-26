import { useQuery } from "@tanstack/react-query"
import userAxiosPublic from "./userAxiosPublic"

const useProducts = () => {
   const axiosPublic = userAxiosPublic()

    // useEffect(()=>{
    //     fetch('http://localhost:5000/products')
    //     .then(res => res.json())
    //     .then(data => {
    //         setProducts(data)
    //         setLoading(false)
    //     })
    // },[])
    const {data: products=[], isPending : loading, refetch} = useQuery ({
        queryKey : ['product'],
        queryFn : async ()=> {
            const res = await axiosPublic.get("/products")
            return res.data
        }
    })
    return [products, loading, refetch]
}
export default useProducts
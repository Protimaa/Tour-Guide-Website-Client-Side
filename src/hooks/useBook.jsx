// api, axios (axios secure), tan stack 

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useBook = () => {
    const axiosSecure = useAxiosSecure();
    const { user} = useAuth();
    
    const { refetch, data: book = [] } = useQuery({
        queryKey: ['booked', user?.email],
        queryFn: async() => {
            const res = await axiosSecure.get(`/booked?email=${user.email}`);
            return res.data;
        }
    })

    return [book, refetch]

};

export default useBook;
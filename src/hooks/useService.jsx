// import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useService = () => {
    const axiosPublic = useAxiosPublic();
    // const [place, setPlace] = useState([]);
    // const [loading, setLoadding] = useState(true);

    // useEffect(() => {
    //     fetch('http://localhost:5000/service')
    //         .then(res => res.json())
    //         .then(data => {
    //             setPlace(data);
    //             setLoadding(false);
    //         });
    // }, [])


    const { data: service = [], isPending: loading, refetch } = useQuery({
        queryKey: ['place'],
        queryFn: async () => {
            const res = await axiosPublic.get('/service');
            return res.data;
        }
    })
    return [service, loading, refetch]
}

export default useService;
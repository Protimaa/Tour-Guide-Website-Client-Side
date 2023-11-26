import { useEffect, useState } from "react";

const useService = () => {
    const [place, setPlace] = useState([]);
    const [loading, setLoadding] = useState(true);

    useEffect(() => {
        fetch('touristPlaces.json')
            .then(res => res.json())
            .then(data => {
                setPlace(data);
                setLoadding(false);
            });
    }, [])
    return [place, loading]
}

export default useService;
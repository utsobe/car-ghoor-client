import { useEffect, useState } from "react"

const useItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://sleepy-escarpment-95192.herokuapp.com/car')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return [items, setItems];
}

export default useItems;
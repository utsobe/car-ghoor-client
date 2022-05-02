import { useEffect, useState } from "react"

const useUpdate = (id, car) => {
    const [updated, setUpdated] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/car/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(car)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                setUpdated(data);
                alert('user updated successfully!');
            });
    }, [id, car]);
    return updated;
}

export default useUpdate;
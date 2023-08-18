import { useEffect, useState } from 'react';

export default function useJsonFetch(url, opt) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        console.log(opt);
        setLoading(true)
        if (opt === 0) {
            try {
                fetch(url)
                    .then(response => response.json())
                    .then(data => setData(data))
            }
            catch (e) {
                setError(e)
            }
            finally {
                setLoading(true)
            }
        } else if (opt > 0) {
            url = url + opt + '.json';
            console.log(url);
            try {
                fetch(url)
                    .then(response => response.json())
                    .then(data => setData(data))
            }
            catch (e) {
                setError(e)
            }
            finally {
                setLoading(true)
            }
        }
    }, [opt])

    return ([data, loading, error])
}
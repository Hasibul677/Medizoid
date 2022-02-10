import { useEffect, useState } from 'react';

const ServiceData = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('/service.json')
        .then(res=> res.json())
        .then(data=> setServices(data))
    },[])
    return {
        services
    }
};

export default ServiceData;
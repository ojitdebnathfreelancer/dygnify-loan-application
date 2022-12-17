import { useEffect, useState } from "react";

const LoanData = () => {
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        fetch('https://loan-server.vercel.app/loan')
            .then(res => res.json())
            .then(data => setDatas(data));
    }, []);

    return [datas]
};
export default LoanData;
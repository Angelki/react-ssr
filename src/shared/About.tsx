import React, { useEffect, useState } from 'react';
import axios from 'axios';

function About() {
    const [data, setData] = useState('');
    console.log('�11🍎233333');
    // 服务端渲染不会被执行？
    useEffect(() => {
        console.log('🍎结果？？');
        axios.get('/getData').then((res) => {
            setData(res.data.data);
        });
    }, []);
    return (
        <div>
            <h2>{data}123</h2>
        </div>
    );
}

export default About;

import Autostory from './autostory';
import { useState } from 'react';
 
const Hello = () => {
  const [url, setUrl] = useState('');
  const [productData, setProductData] = useState<any>();

  const fetchData = async () => {
    const result = await fetch('https://bfm-qa.bringist.com/v1/guest/extract/?url=' + url, {
      method: 'POST',
    });
    const json = await result.json();
    setProductData(json.productData);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    
      <Autostory productData={productData} />
    </div>
  );
};

export default Hello;
 
   
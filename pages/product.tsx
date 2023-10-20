import Autostory from './autostory';
import { useState } from 'react';
import domtoimage from 'dom-to-image';


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

  const handleDownloadImage = () => {
    const element = document.getElementById('autostory-container');

    if (element) {
      domtoimage.toPng(element)
        .then(function (dataUrl) {
          var link = document.createElement('a');
          link.href = dataUrl;
          link.download = 'product-story.png';
          link.click();
        })
        .catch(function (error) {
          console.error('Error:', error);
        });
    }
  };

  return (
    <div className='wrapper'>
      <form onSubmit={handleSubmit}>
        <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
     {/* {JSON.stringify(productData)} */}
      <Autostory productData={productData} />
      
      {/* İndir düğmesi */}
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <button
          onClick={handleDownloadImage}
          style={{
            width: '400px',
            background: '#311b92',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            fontSize: '1rem',
            cursor: 'pointer',
            borderRadius: '4px',
          }}
        >
          İndir
        </button>
      </div>
    </div>
  );
};

export default Hello;
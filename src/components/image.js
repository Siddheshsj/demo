import React, { useEffect } from 'react';

const Image = ({id}) => {
    const [photo, setPhoto] = React.useState(null);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
        .then(res => res.json())
        .then((data) => {
            setPhoto(data);
        })
        .catch(console.log)
    },[id])
    if(photo) {
      return <img className="card-img-top w-25" style={{width: "200px !important"}} src={photo.url} alt={photo.title}/>;
    }
    return null;
}

export default Image;
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const OneTrain = () => {
  const { trainId } = useParams();
  const [train, setTrain] = useState(null);

//   useEffect(() => {

//   }, [trainId]);

  return (
    <div>
        Single Train Detail
    </div>
  );
};

export default OneTrain;
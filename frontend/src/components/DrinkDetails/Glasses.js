// import styled from 'styled-components';
// import { useParams } from 'react-router-dom';
// import { useState, useEffect, useContext } from 'react';
// import { UserContext } from '../UserContext';

const Glasses = () => {
  return <div>Coming Feature</div>;
  // const { glasses } = useParams();
  // const [getGlasses, setGetGlasses] = useState();
  // // const { loading, setLoading } = useContext(UserContext);
  // const [loading, setLoading] = useState(false);

  // console.log('glassglassglass', glasses);
  // useEffect(() => {
  //   setLoading(false);
  //   fetch(`/api/getGlasses/${glasses}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.status === 200) {
  //         console.log(data);
  //         setGetGlasses(data);
  //         setLoading(true);
  //       }
  //     })
  //     .catch((err) => {
  //       console.log('fetch data error: ' + err);
  //     });
  // }, [glasses]);
  // console.log('return glass', getGlasses);
  // return (
  //   loading && (
  //     <>
  //       <Title>ALL Glassessss</Title>

  //       {/* <div>
  //         {glasses.map((glasso) => {
  //           return (
  //             <div>
  //               <div>{glasso}</div>
  //             </div>
  //           );
  //         })}
  //       </div> */}
  //     </>
  //   )
  // );
};
// const Title = styled.div`
//   margin-top: 200px;
// `;
export default Glasses;

const SignIn = () => {
  return (
    <>
      <div>SIGN IN</div>
    </>
  );
};

export default SignIn;
// import styled from "styled-components";
// import { useState, useEffect, useContext } from "react";
// import { UserContext } from "./UserContext";

// const SignIn = () => {
//   const [currentUser, setCurrentUser] = useState();
//   const { setLoggedIn, setLogged, logged } = useContext(UserContext);

//   const submitForm = (ev) => {
//     ev.preventDefault();

//     fetch("/api/users", {
//       body: JSON.stringify({ name: currentUser }),
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.status === 200) {
//           window.sessionStorage.setItem("name", JSON.stringify(data.data));
//           setLoggedIn(data.data);
//           setLogged(true);
//         }
//       })
//       .catch((error) => {
//         console.log("error", error);
//       });

//     setCurrentUser(JSON.parse(window.sessionStorage.getItem("currentUser")));
//   };

//   return (
//     <>
//       <Img />
//       {logged ? (
//         ""
//       ) : (
//         <form onSubmit={submitForm}>
//           <Box>
//             <input
//               value={currentUser}
//               type="text"
//               placeholder="Your first name"
//               onChange={(e) => {
//                 setCurrentUser(e.target.value);
//               }}
//             />
//             <button type="submit">Submit</button>
//           </Box>
//         </form>
//       )}
//     </>
//   );
// };

// const Img = styled.div`
//   background: url(/images/facespace_bg.jpg);
//   height: 700px;
//   background-size: cover;
//   position: relative;
// `;

// const Box = styled.div`
//   display: flex;
//   flex-direction: column;
//   position: absolute;
//   top: 50%;
//   left: 50%;
// `;

// export default SignIn;

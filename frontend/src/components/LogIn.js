import styled from 'styled-components';

const LogIn = () => {
  return (
    <>
      <Div1>
        <Wrapper>
          <Div>
            <Title>Log In</Title>
            <Form>
              <Subheading>Email</Subheading>
              <Input></Input>
              <Subheading>Password</Subheading>
              <Input></Input>
              <Button>Start</Button>
            </Form>
          </Div>
        </Wrapper>
      </Div1>
    </>
  );
};

const Wrapper = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  font-family: 'Lato', sans-serif; ;
`;
const Div1 = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;
const Title = styled.div`
  font-size: 35px;
  margin: auto;
`;

const Form = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Input = styled.input`
  width: 250px;
  height: 30px;
  margin-bottom: 15px;
  border-radius: 3px;
`;
const Subheading = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
`;
const Button = styled.button`
  margin-top: 15px;
  background-color: orange;
  border-radius: 15px;
  padding: 7px 115px;
  border: none;
  font-size: 15px;
`;
export default LogIn;
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

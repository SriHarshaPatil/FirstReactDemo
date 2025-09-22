//     function Home() {
//         let Name = "Harsha";
//         let x=4;
//         let y=5;

//         const objj= {
//              Name: "Harsha",
//              Age: 21,
//              City: "Bangalore"

//         };
//         function sum(a,b) {
//         return a+b;
//     }

//     function alertt() {
//         alert("Thank you");
//     }
//     function cal(a,b,op) {
//         if(op==='+') return a+b;
//         else if(op==='-') return a-b;
//         else if(op==='*') return a*b;
//         else if(op==='/') return a/b;
//         else return "Invalid Operation";
//     }
    
//     return (
//         <>
//             <h1 style={{ color: 'blue', marginLeft: 500 }}>Home Page</h1>
//             <p>
//                 <b>
//                     <u style={{margin: 500}}>Welcome to the Home Page</u>
//                 </b>
//             </p>
//             <br />
//             <br />
//             <>My name is {objj.Name}</>
//             <br />
//             <br />
//             <>My age is {objj.Age}</>
//             <br />
//             <br />
//             <>I live in {objj.City}</>
//             <br />
//             <br />  
//             <>{x-y}</>

//             <>Sum of 4 and 5 = {sum(4,5)}</>
//             <br />
//             <br />
//             <>My name is {Name}</>
//             <br />
//             <br />
//             <>Value of x is {x}</>
//             <br />
//             <br />
//             <>Value of y is {y}</>
//             <br />
//             <br />
//             <>x + y = {x + y}</>
//             <br />
//             <br />
//             <> {cal(3,4,"+")}</>
//             <br />
//             <br />
//             <> {cal(3,4,"*")}</>
//             <br />
//             <br />
//             <button onClick={alertt} >Click Me</button>
//         </>
//     );
// }
// import { useState } from "react";

  // component/Home.jsx
// function Home(props) {
//   const { name, age } = props;
//   return (
//     <div>
//       <h1>Name: {name}</h1>
//       <h1>Age: {age}</h1>
//     </div>
//   );
// }

// export default Home;

// import React from "react";
// import "./Home.css";

// function Home() {
//   return (
//     <div className="container">
//       <div className="card">
//         {/* Name, Age, DOB */}
//         <h1 className="title">Gregorio Y. Zara , 25, 1902-03-08</h1>
//         <div className="content">
//           {/* Image */}
//           <img
//             src="harsha.jpg"
//             // alt="Gregorio Y. Zara"
//           />
//           {/* Achievements */}
//           <ul className="achievements">
//             <li>Improve the videophone</li>
//             <li>Prepare aeronautics lectures</li>
//             <li>Work on the alcohol-fueled engine</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;


import React from "react";
import harsha from "../assets/harsha.jpeg";
import "./Home.css";

function Profile() {
  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Student Profile</h1>

        <div className="section">
          <img src={harsha} alt="Profile" className="profile-pic"/>

          <p><span className="label">Name:</span>Sri Harsha Patil S B</p>
          <p><span className="label">Age:</span> 23</p>
          <p><span className="label">Course:</span> Bachelor of Information Science</p>
          <p><span className="label">Year:</span> 4rd Year</p>
          <p><span className="label">College:</span> East West Institute of Technology</p>
        </div>

        <div className="section">
          <h2 className="title">Skills</h2>
          <ul>
            <li>Java, Python, JavaScript</li>
            <li>HTML, CSS, React.js</li>
            <li>MySQL, MongoDB</li>
            <li>Time Management, Problem-Solving, Communication</li>
          </ul>
        </div>

        <div className="section">
          <h2 className="title">Projects</h2>
          <ul>
            <li><p>Project Link: <span><a href="https://github.com/SriHarshaPatil/Project2">View My Project</a></span></p></li>
            <li>Online Pizza Shop Management System</li>
            <li>Interactive Resume Builder</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Profile;

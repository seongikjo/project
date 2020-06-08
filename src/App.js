import React from "react";

import Login from "../src/pages/login";
import Home from "../src/pages/home";

// class App extends React.Component {
//   // state = {
//   //   isLoading: true,
//   //   home: [],
//   // };
//   // componentDidMount() {
//   //   setTimeout(() => {
//   //     this.setState({ isLoading: false });
//   //   }, 6000);
//   // }
//   render() {
//     // const { isLoading } = this.state;
//     return (
//       <div>
//         {/* {isLoading ? "loading..." : <Login />} */}
//         <Login />
//         <Home />
//       </div>
//     );
//   }
// }

function App() {
  return (
    <div>
      <Login />
      <Home />
    </div>
  );
}
export default App;

import React, { ReactNode } from 'react';
import Footer from "./Footer";
import Header from "./Header";
type WrapperProps = {
  children: ReactNode;
};

const Wrapper: React.FC<WrapperProps> = (props) => {
  // Custom logic or components here

  return <>{props.children}</>;
};

export default Wrapper;


// type MyComponentProps = {
//   children: ReactNode;
// };

// const MyComponent = ({ children }: MyComponentProps) => {
//   <>
//   {" "}
//   <div className="sticky top-0 z-50">
//     <Header />
//   </div>
//   <div className="m-auto ">{children}</div>
//   <div>
//    <Footer/>
//   </div>
// </>
// };

// export default MyComponent;


// const Wrapper: React.FC = ({ children }) => {
//   // Custom logic or components here

//   return( <>
//     {" "}
//     <div className="sticky top-0 z-50">
//       <Header />
//     </div>
//     <div className="m-auto ">{children}</div>
//     <div>
//      <Footer/>
//     </div>
//   </>)
    
// };

// export default Wrapper;


// export default function Wrapper({ children }) {
//   return (
//     <>
//       {" "}
//       <div className="sticky top-0 z-50">
//         <Header />
//       </div>
//       <div className="m-auto ">{children}</div>
//       <div>
//        <Footer/>
//       </div>
//     </>
//   );
// }

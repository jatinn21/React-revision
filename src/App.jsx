// import OnInputEvent from "./components/OnInputEvent";


// import { EventPropagtion } from "./components/EventPropagtion";

// import UseEffect,{SiblingComponent} from "./hooks/UseEffect";

// import DerivedState from "./components/DerivedState";

// import LiftingUpTheStateEx1 from "./components/LiftingUpTheStateEx1";

// import LiftingUpTheStateEx2 from "./components/LiftingUpTheStateEx2";

// import CleanUpFunction from "./components/CleanUpFunction";

// import KeysAreImportant from "./components/KeysAreImportant";

// import ControlledComponent from "./components/ControlledComponent";

// import UncontrolledComonent from "./components/UncontrolledComonent";

// import UseRef from "./hooks/UseRef";

// import ForwardRef from "./hooks/ForwardRef";

// function App() {
//   return (
//     <>
//       <ForwardRef />
//     </>
//   );
// }

// export default App;


// ------------REACT ROUTER---------------

import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import TermsAndConditions from "./components/TermsAndConditions";

const App = () => {
  // --------Way 1------------------
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Home />,
  //   },
  //   {
  //     path: "/about",
  //     element: <About />,
  //   },
  //   {
  //     path: "/contact",
  //     element: <Contact />,
  //   },
  //   {
  //     path: '/terms-and-conditions',
  //     element: <TermsAndConditions />,
  //   }
  // ]);

  // --------Way 2------------------
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      </Route>
    )
  )

  return <RouterProvider router={router} />
}

export default App;


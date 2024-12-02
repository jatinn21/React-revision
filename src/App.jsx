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

import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import TermsAndConditions from "./components/TermsAndConditions";
import AppLayout from "./layout/AppLayout";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/terms-and-conditions",
          element: <TermsAndConditions />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;

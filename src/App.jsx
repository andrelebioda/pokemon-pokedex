import "../src/scss/style.scss";

//import components
import Pokemon from "./components/Pokemon";
import PokemonDetailPage from "./components/PokemonDetailPage";

//import react query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

//import and config react router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Pokemon />,
  },
  {
    path: "/:pokemon",
    element: <PokemonDetailPage />,
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;

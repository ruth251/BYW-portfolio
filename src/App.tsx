import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";

import Home from "./pages/Home";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Products from "./pages/Products"; 
import Services from "./pages/Services";
import Bnosha from "./pages/companies/Bnosha";
import Welin from "./pages/companies/Welin";
import Yabon from "./pages/companies/Yabon";
import AgroContact from "./pages/AgroContact";
import NotFound from "./pages/NotFound";
import ProductDetails from "./pages/ProductDetails";
import NoshaTravel from "./pages/NoshaTravel";
import contact from "./pages/contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/*"
            element={
              <Layout>
                <Routes>
                  <Route path="/home" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/product/:id" element={<ProductDetails />} />
                  <Route path="/services" element={<Services />} />

                  {/* Sister Companies */}
                  <Route path="/companies/Bnosha" element={<Bnosha />} />
                  <Route path="/companies/Welin" element={<Welin />} />
                  <Route path="/companies/Yabon" element={<Yabon />} />

                  {/* Catch-all */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Layout>
            }
          />
          <Route path="/nosha-travel" element={<NoshaTravel />} />
          <Route path="/agro-contact" element={<AgroContact />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

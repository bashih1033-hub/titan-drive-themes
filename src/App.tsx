import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Header from "./components/Header";
import Footer from "./components/Footer";
import BlogArticle from "./components/BlogArticle";
import ScrollToTop from "./components/ScrollToTop";
import RouterWithScrollControl from "./components/RouterWithScrollControl";
import Breadcrumb from "./components/Breadcrumb";
import StickyFloatingCTA from "./components/StickyFloatingCTA";
import Index from "./pages/Index";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Endorsements from "./pages/Endorsements";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Minneapolis from "./pages/Minneapolis";
import StPaul from "./pages/StPaul";
import FAQ from "./pages/FAQ";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <RouterWithScrollControl>
            <StickyFloatingCTA />
            <div className="min-h-screen flex flex-col">
            <Header />
            <Breadcrumb />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/programs" element={<Programs />} />
                <Route path="/endorsements" element={<Endorsements />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogArticle />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/minneapolis" element={<Minneapolis />} />
                <Route path="/st-paul" element={<StPaul />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/admin" element={<Admin />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
            </div>
          </RouterWithScrollControl>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;

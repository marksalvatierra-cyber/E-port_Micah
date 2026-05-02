import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DashboardLayout } from "@/components/DashboardLayout";
import TitlePage from "./pages/TitlePage";
import Overview from "./pages/Overview";
import Introduction from "./pages/Introduction";
import Company from "./pages/Company";
import Weekly from "./pages/Weekly";
import Daily from "./pages/Daily";
import ProgressReport from "./pages/ProgressReport";
import AnalysisReport from "./pages/AnalysisReport";
import Assessment from "./pages/Assessment";
import Reflections from "./pages/Reflections";
import Appendices from "./pages/Appendices";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<DashboardLayout />}>
            <Route path="/title" element={<TitlePage />} />
            <Route path="/" element={<Overview />} />
            <Route path="/introduction" element={<Introduction />} />
            <Route path="/company" element={<Company />} />
            <Route path="/weekly" element={<Weekly />} />
            <Route path="/daily" element={<Daily />} />
            <Route path="/progress" element={<ProgressReport />} />
            <Route path="/analysis" element={<AnalysisReport />} />
            <Route path="/assessment" element={<Assessment />} />
            <Route path="/reflections" element={<Reflections />} />
            <Route path="/appendices" element={<Appendices />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

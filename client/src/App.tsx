import { Switch, Route } from "wouter";
import { lazy, Suspense } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "next-themes";
import { CookieBanner } from "@/components/ui/CookieBanner";
import { CustomCursor } from "@/components/ui/CustomCursor";
import Home from "@/pages/home";

const Contact = lazy(() => import("@/pages/contact"));
const Services = lazy(() => import("@/pages/services"));
const Approche = lazy(() => import("@/pages/approche"));
const MentionsLegales = lazy(() => import("@/pages/mentions-legales"));
const PolitiqueConfidentialite = lazy(() => import("@/pages/politique-confidentialite"));
const CGU = lazy(() => import("@/pages/cgu"));
const PolitiqueCookies = lazy(() => import("@/pages/politique-cookies"));
const NotFound = lazy(() => import("@/pages/not-found"));

function PageLoader() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-primary/20 border-t-primary rounded-full animate-spin" />
    </div>
  );
}

function Router() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/approche" component={Approche} />
        <Route path="/contact" component={Contact} />
        <Route path="/mentions-legales" component={MentionsLegales} />
        <Route path="/politique-confidentialite" component={PolitiqueConfidentialite} />
        <Route path="/cgu" component={CGU} />
        <Route path="/politique-cookies" component={PolitiqueCookies} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <CustomCursor />
          <Router />
          <Toaster />
          <CookieBanner />
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;


import React, { Suspense } from "react";
import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import { motion } from "framer-motion";

// Lazy load the ProjectDetail component
const ProjectDetailPage = React.lazy(() => import('./pages/ProjectDetail'));

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/projects/:id">
        <Suspense fallback={<div className="h-screen w-full flex items-center justify-center">Loading project details...</div>}>
          <ProjectDetailPage />
        </Suspense>
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <TooltipProvider>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Toaster />
        <Router />
      </motion.div>
    </TooltipProvider>
  );
}

export default App;

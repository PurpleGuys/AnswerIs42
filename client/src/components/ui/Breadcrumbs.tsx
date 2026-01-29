import { Link, useLocation } from "wouter";
import { ChevronRight, Home } from "lucide-react";
import { Helmet } from "react-helmet";

const ROUTE_LABELS: Record<string, string> = {
  "/": "Accueil",
  "/services": "Services",
  "/approche": "Approche",
  "/contact": "Contact",
  "/mentions-legales": "Mentions légales",
  "/politique-confidentialite": "Confidentialité",
  "/cgu": "CGU",
  "/politique-cookies": "Cookies",
};

export function Breadcrumbs() {
  const [location] = useLocation();
  
  if (location === "/") return null;
  
  const pathSegments = location.split("/").filter(Boolean);
  const breadcrumbItems = [
    { path: "/", label: "Accueil" },
    ...pathSegments.map((_, index) => {
      const path = "/" + pathSegments.slice(0, index + 1).join("/");
      return { path, label: ROUTE_LABELS[path] || path };
    }),
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": `https://answeris42.fr${item.path === "/" ? "" : item.path}`,
    })),
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>
      
      <nav 
        aria-label="Fil d'Ariane" 
        className="flex items-center gap-2 text-sm text-white/40"
        data-testid="breadcrumbs"
      >
        {breadcrumbItems.map((item, index) => (
          <div key={item.path} className="flex items-center gap-2">
            {index > 0 && <ChevronRight className="w-3 h-3" aria-hidden="true" />}
            {index === breadcrumbItems.length - 1 ? (
              <span className="text-white/60" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link 
                href={item.path}
                className="hover:text-white transition-colors flex items-center gap-1"
              >
                {index === 0 && <Home className="w-3 h-3" aria-hidden="true" />}
                {item.label}
              </Link>
            )}
          </div>
        ))}
      </nav>
    </>
  );
}

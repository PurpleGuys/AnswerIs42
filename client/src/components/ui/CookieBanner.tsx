import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Cookie, X, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "wouter";

type CookiePreferences = {
  necessary: boolean;
  analytics: boolean;
  functional: boolean;
};

const COOKIE_CONSENT_KEY = "cookie_consent";
const COOKIE_PREFERENCES_KEY = "cookie_preferences";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    functional: false,
  });
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "true");
    localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(prefs));
    setIsVisible(false);
  };

  const acceptAll = () => {
    savePreferences({ necessary: true, analytics: true, functional: true });
  };

  const acceptSelected = () => {
    savePreferences(preferences);
  };

  const rejectAll = () => {
    savePreferences({ necessary: true, analytics: false, functional: false });
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
        className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        data-testid="cookie-banner"
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#0a0a0f] border border-white/10 rounded-lg shadow-2xl shadow-black/50 overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Cookie className="w-5 h-5 text-primary" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-medium text-white mb-2" data-testid="text-cookie-title">
                        Nous respectons votre vie privée
                      </h3>
                      <p className="text-white/50 text-sm leading-relaxed" data-testid="text-cookie-description">
                        Ce site utilise des cookies pour améliorer votre expérience. 
                        Consultez notre{" "}
                        <Link href="/politique-cookies" className="text-primary hover:text-primary/80 transition-colors">
                          politique des cookies
                        </Link>{" "}
                        pour en savoir plus.
                      </p>
                    </div>
                    
                    <button
                      onClick={() => setIsVisible(false)}
                      className="text-white/40 hover:text-white transition-colors p-1"
                      aria-label="Fermer temporairement"
                      data-testid="button-cookie-close"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <button
                    onClick={() => setShowDetails(!showDetails)}
                    className="flex items-center gap-2 text-sm text-white/60 hover:text-white mt-4 transition-colors"
                    data-testid="button-cookie-details"
                  >
                    Personnaliser mes choix
                    {showDetails ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>

                  <AnimatePresence>
                    {showDetails && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-6 space-y-4">
                          <label className="flex items-center justify-between p-4 bg-white/[0.02] border border-white/5 rounded-sm cursor-not-allowed">
                            <div>
                              <p className="text-white text-sm font-medium">Cookies nécessaires</p>
                              <p className="text-white/40 text-xs mt-1">Indispensables au fonctionnement du site</p>
                            </div>
                            <div className="w-10 h-6 bg-primary/30 rounded-full flex items-center justify-end px-1">
                              <div className="w-4 h-4 bg-primary rounded-full" />
                            </div>
                          </label>

                          <label className="flex items-center justify-between p-4 bg-white/[0.02] border border-white/5 rounded-sm cursor-pointer hover:border-white/10 transition-colors">
                            <div>
                              <p className="text-white text-sm font-medium">Cookies analytiques</p>
                              <p className="text-white/40 text-xs mt-1">Nous aident à comprendre l'utilisation du site</p>
                            </div>
                            <button
                              onClick={() => setPreferences(p => ({ ...p, analytics: !p.analytics }))}
                              className={`w-10 h-6 rounded-full flex items-center px-1 transition-colors ${
                                preferences.analytics ? "bg-primary/30 justify-end" : "bg-white/10 justify-start"
                              }`}
                              data-testid="toggle-analytics"
                            >
                              <div className={`w-4 h-4 rounded-full transition-colors ${
                                preferences.analytics ? "bg-primary" : "bg-white/40"
                              }`} />
                            </button>
                          </label>

                          <label className="flex items-center justify-between p-4 bg-white/[0.02] border border-white/5 rounded-sm cursor-pointer hover:border-white/10 transition-colors">
                            <div>
                              <p className="text-white text-sm font-medium">Cookies fonctionnels</p>
                              <p className="text-white/40 text-xs mt-1">Mémorisent vos préférences</p>
                            </div>
                            <button
                              onClick={() => setPreferences(p => ({ ...p, functional: !p.functional }))}
                              className={`w-10 h-6 rounded-full flex items-center px-1 transition-colors ${
                                preferences.functional ? "bg-primary/30 justify-end" : "bg-white/10 justify-start"
                              }`}
                              data-testid="toggle-functional"
                            >
                              <div className={`w-4 h-4 rounded-full transition-colors ${
                                preferences.functional ? "bg-primary" : "bg-white/40"
                              }`} />
                            </button>
                          </label>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="flex flex-col sm:flex-row gap-3 mt-6">
                    <button
                      onClick={acceptAll}
                      className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-sm text-sm font-medium transition-colors"
                      data-testid="button-accept-all"
                    >
                      Tout accepter
                    </button>
                    {showDetails && (
                      <button
                        onClick={acceptSelected}
                        className="bg-white/10 hover:bg-white/15 text-white px-6 py-3 rounded-sm text-sm font-medium transition-colors"
                        data-testid="button-accept-selected"
                      >
                        Accepter la sélection
                      </button>
                    )}
                    <button
                      onClick={rejectAll}
                      className="text-white/50 hover:text-white px-6 py-3 text-sm font-medium transition-colors"
                      data-testid="button-reject-all"
                    >
                      Tout refuser
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

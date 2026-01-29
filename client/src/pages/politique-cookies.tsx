import { Helmet } from "react-helmet";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GrainTexture } from "@/components/ui/GrainTexture";
import { Reveal } from "@/lib/animations";

export default function PolitiqueCookies() {
  return (
    <>
      <Helmet>
        <title>Politique des Cookies | Answer is 42</title>
        <meta name="description" content="Politique des cookies et gestion de vos préférences - Answer is 42, consulting IT." />
        <link rel="canonical" href="https://answeris42.fr/politique-cookies" />
        <meta name="robots" content="noindex, follow" />
        <meta property="og:title" content="Politique des Cookies | Answer is 42" />
        <meta property="og:description" content="Politique des cookies - Answer is 42." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://answeris42.fr/politique-cookies" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Politique des Cookies | Answer is 42" />
        <meta name="twitter:description" content="Politique des cookies - Answer is 42." />
      </Helmet>
      
      <div className="min-h-screen bg-background flex flex-col">
        <GrainTexture />
        <Navbar />
      
      <main className="flex-grow pt-32 md:pt-40 px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <p className="text-primary/80 text-xs font-medium tracking-[0.3em] uppercase mb-6" data-testid="text-cookies-label">
              Cookies
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-medium text-white mb-12 tracking-tight" data-testid="text-cookies-title">
              Politique des cookies
            </h1>
          </Reveal>

          <div className="space-y-12 text-white/70 leading-relaxed">
            <Reveal delay={0.2}>
              <section data-testid="section-definition">
                <h2 className="text-2xl font-medium text-white mb-4">1. Qu'est-ce qu'un cookie ?</h2>
                <p className="mb-4">
                  Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette, 
                  smartphone) lors de la visite d'un site web. Il permet au site de mémoriser des 
                  informations sur votre visite, comme votre langue préférée et d'autres paramètres.
                </p>
                <p>
                  Les cookies peuvent être « persistants » (ils restent jusqu'à leur expiration ou leur 
                  suppression) ou « de session » (ils sont supprimés à la fermeture du navigateur).
                </p>
              </section>
            </Reveal>

            <Reveal delay={0.3}>
              <section data-testid="section-utilisation">
                <h2 className="text-2xl font-medium text-white mb-4">2. Comment utilisons-nous les cookies ?</h2>
                <p className="mb-4">Notre site peut utiliser différents types de cookies :</p>
                
                <div className="space-y-6">
                  <div className="p-4 bg-white/5 rounded-sm border border-white/10">
                    <h3 className="text-lg font-medium text-white mb-2">Cookies strictement nécessaires</h3>
                    <p className="mb-2">
                      Ces cookies sont indispensables au fonctionnement du site. Ils permettent d'utiliser 
                      les fonctionnalités principales du site et ne peuvent pas être désactivés.
                    </p>
                    <p className="text-sm text-white/50">Exemple : sécurité, équilibrage de charge</p>
                  </div>

                  <div className="p-4 bg-white/5 rounded-sm border border-white/10">
                    <h3 className="text-lg font-medium text-white mb-2">Cookies de performance/analytiques</h3>
                    <p className="mb-2">
                      Ces cookies nous permettent de comprendre comment les visiteurs utilisent notre site 
                      (pages les plus visitées, temps passé sur le site, etc.) afin d'améliorer notre service.
                    </p>
                    <p className="text-sm text-white/50">Ces données sont anonymisées et agrégées.</p>
                  </div>

                  <div className="p-4 bg-white/5 rounded-sm border border-white/10">
                    <h3 className="text-lg font-medium text-white mb-2">Cookies de fonctionnalité</h3>
                    <p className="mb-2">
                      Ces cookies permettent de mémoriser vos choix (langue, région, préférences d'affichage) 
                      pour vous offrir une expérience personnalisée.
                    </p>
                    <p className="text-sm text-white/50">Exemple : préférences de langue, paramètres d'accessibilité</p>
                  </div>
                </div>
              </section>
            </Reveal>

            <Reveal delay={0.4}>
              <section data-testid="section-liste">
                <h2 className="text-2xl font-medium text-white mb-4">3. Liste des cookies utilisés</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border border-white/10 text-sm">
                    <thead className="bg-white/5">
                      <tr>
                        <th className="p-3 text-left text-white font-medium border-b border-white/10">Nom</th>
                        <th className="p-3 text-left text-white font-medium border-b border-white/10">Type</th>
                        <th className="p-3 text-left text-white font-medium border-b border-white/10">Durée</th>
                        <th className="p-3 text-left text-white font-medium border-b border-white/10">Finalité</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-3 border-b border-white/10">_session</td>
                        <td className="p-3 border-b border-white/10">Nécessaire</td>
                        <td className="p-3 border-b border-white/10">Session</td>
                        <td className="p-3 border-b border-white/10">Gestion de la session utilisateur</td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-white/10">cookie_consent</td>
                        <td className="p-3 border-b border-white/10">Nécessaire</td>
                        <td className="p-3 border-b border-white/10">12 mois</td>
                        <td className="p-3 border-b border-white/10">Mémorisation du consentement cookies</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 text-sm text-white/50">
                  Cette liste peut être mise à jour en fonction de l'évolution du site.
                </p>
              </section>
            </Reveal>

            <Reveal delay={0.5}>
              <section data-testid="section-consentement">
                <h2 className="text-2xl font-medium text-white mb-4">4. Votre consentement</h2>
                <p className="mb-4">
                  Conformément à la directive européenne 2009/136/CE et aux recommandations de la CNIL, 
                  nous recueillons votre consentement avant le dépôt de cookies non essentiels sur votre 
                  terminal.
                </p>
                <p className="mb-4">
                  Lors de votre première visite, une bannière vous informe de la présence de cookies et 
                  vous propose d'accepter ou de refuser leur utilisation.
                </p>
                <p>
                  Vous pouvez modifier vos choix à tout moment via les paramètres de votre navigateur 
                  ou en nous contactant.
                </p>
              </section>
            </Reveal>

            <Reveal delay={0.6}>
              <section data-testid="section-gestion">
                <h2 className="text-2xl font-medium text-white mb-4">5. Comment gérer les cookies ?</h2>
                <p className="mb-4">
                  Vous pouvez à tout moment choisir de désactiver les cookies. Votre navigateur peut 
                  également être paramétré pour vous signaler les cookies qui sont déposés et vous 
                  demander de les accepter ou non.
                </p>
                
                <h3 className="text-lg font-medium text-white mb-3 mt-6">Configuration par navigateur :</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong className="text-white">Google Chrome :</strong>{" "}
                    <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">
                      Gérer les cookies
                    </a>
                  </li>
                  <li>
                    <strong className="text-white">Mozilla Firefox :</strong>{" "}
                    <a href="https://support.mozilla.org/fr/kb/protection-renforcee-contre-pistage-firefox-ordinateur" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">
                      Gérer les cookies
                    </a>
                  </li>
                  <li>
                    <strong className="text-white">Safari :</strong>{" "}
                    <a href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">
                      Gérer les cookies
                    </a>
                  </li>
                  <li>
                    <strong className="text-white">Microsoft Edge :</strong>{" "}
                    <a href="https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">
                      Gérer les cookies
                    </a>
                  </li>
                </ul>

                <div className="mt-6 p-4 bg-primary/10 border border-primary/20 rounded-sm">
                  <p className="text-white/80">
                    <strong className="text-white">Attention :</strong> La désactivation des cookies peut 
                    affecter votre navigation et vous empêcher d'accéder à certaines fonctionnalités du site.
                  </p>
                </div>
              </section>
            </Reveal>

            <Reveal delay={0.7}>
              <section data-testid="section-tiers">
                <h2 className="text-2xl font-medium text-white mb-4">6. Cookies tiers</h2>
                <p className="mb-4">
                  Notre site peut contenir des cookies déposés par des services tiers (réseaux sociaux, 
                  outils d'analyse, etc.). Le dépôt et l'utilisation de ces cookies sont soumis aux 
                  politiques de confidentialité de ces tiers.
                </p>
                <p>
                  Nous vous recommandons de consulter les politiques de confidentialité de ces services 
                  pour plus d'informations sur leur utilisation des cookies.
                </p>
              </section>
            </Reveal>

            <Reveal delay={0.8}>
              <section data-testid="section-duree">
                <h2 className="text-2xl font-medium text-white mb-4">7. Durée de conservation</h2>
                <p className="mb-4">
                  Conformément aux recommandations de la CNIL, les cookies ont une durée de vie maximale 
                  de 13 mois après leur dépôt. Au-delà de ce délai, votre consentement sera à nouveau 
                  sollicité.
                </p>
                <p>
                  Les données collectées via les cookies sont conservées pour une durée maximale de 
                  25 mois.
                </p>
              </section>
            </Reveal>

            <Reveal delay={0.9}>
              <section data-testid="section-droits">
                <h2 className="text-2xl font-medium text-white mb-4">8. Vos droits</h2>
                <p className="mb-4">
                  Conformément au RGPD et à la loi Informatique et Libertés, vous disposez de droits sur 
                  les données collectées via les cookies. Pour plus d'informations sur vos droits et 
                  leur exercice, consultez notre{" "}
                  <a href="/politique-confidentialite" className="text-primary hover:text-primary/80 transition-colors">
                    Politique de confidentialité
                  </a>.
                </p>
              </section>
            </Reveal>

            <Reveal delay={1.0}>
              <section data-testid="section-contact">
                <h2 className="text-2xl font-medium text-white mb-4">9. Contact</h2>
                <p>
                  Pour toute question concernant notre utilisation des cookies, vous pouvez nous 
                  contacter à : <strong className="text-white">contact@answeris42.com</strong>
                </p>
              </section>
            </Reveal>

            <Reveal delay={1.1}>
              <p className="text-sm text-white/40 pt-8 border-t border-white/10" data-testid="text-cookies-update">
                Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
              </p>
            </Reveal>
          </div>
        </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
}

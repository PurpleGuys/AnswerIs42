import { Helmet } from "react-helmet";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GrainTexture } from "@/components/ui/GrainTexture";
import { Reveal } from "@/lib/animations";

export default function MentionsLegales() {
  return (
    <>
      <Helmet>
        <title>Mentions Légales | Answer is 42</title>
        <meta name="description" content="Mentions légales du site Answer is 42 - Cabinet de consulting IT. Informations sur l'éditeur, l'hébergeur et les conditions d'utilisation." />
        <link rel="canonical" href="https://answeris42.fr/mentions-legales" />
        <meta name="robots" content="noindex, follow" />
        <meta property="og:title" content="Mentions Légales | Answer is 42" />
        <meta property="og:description" content="Mentions légales du site Answer is 42 - Cabinet de consulting IT." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://answeris42.fr/mentions-legales" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Mentions Légales | Answer is 42" />
        <meta name="twitter:description" content="Mentions légales - Answer is 42." />
      </Helmet>
      
      <div className="min-h-screen bg-background flex flex-col">
        <GrainTexture />
        <Navbar />
      
      <main id="main-content" className="flex-grow pt-32 md:pt-40 px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <p className="text-primary/80 text-xs font-medium tracking-[0.3em] uppercase mb-6" data-testid="text-legal-label">
              Informations légales
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-medium text-white mb-12 tracking-tight" data-testid="text-legal-title">
              Mentions légales
            </h1>
          </Reveal>

          <div className="space-y-12 text-white/70 leading-relaxed">
            <Reveal delay={0.2}>
              <section data-testid="section-editeur">
                <h2 className="text-2xl font-medium text-white mb-4">1. Éditeur du site</h2>
                <div className="space-y-2">
                  <p><strong className="text-white">Raison sociale :</strong> Answer is 42</p>
                  <p><strong className="text-white">Forme juridique :</strong> [À compléter - SAS, SARL, Auto-entrepreneur, etc.]</p>
                  <p><strong className="text-white">Capital social :</strong> [À compléter] euros</p>
                  <p><strong className="text-white">Siège social :</strong> [Adresse complète à compléter]</p>
                  <p><strong className="text-white">SIRET :</strong> [Numéro SIRET à compléter]</p>
                  <p><strong className="text-white">RCS :</strong> [Ville et numéro RCS à compléter]</p>
                  <p><strong className="text-white">Numéro de TVA intracommunautaire :</strong> [À compléter]</p>
                  <p><strong className="text-white">Directeur de la publication :</strong> [Nom du responsable légal]</p>
                  <p><strong className="text-white">Email :</strong> contact@is42.fr</p>
                  <p><strong className="text-white">Téléphone :</strong> [À compléter]</p>
                </div>
              </section>
            </Reveal>

            <Reveal delay={0.3}>
              <section data-testid="section-hebergeur">
                <h2 className="text-2xl font-medium text-white mb-4">2. Hébergeur du site</h2>
                <div className="space-y-2">
                  <p><strong className="text-white">Raison sociale :</strong> OVH SAS</p>
                  <p><strong className="text-white">Adresse :</strong> 2 rue Kellermann, 59100 Roubaix, France</p>
                  <p><strong className="text-white">Téléphone :</strong> 1007 (depuis la France)</p>
                  <p><strong className="text-white">Site web :</strong> https://www.ovhcloud.com</p>
                </div>
              </section>
            </Reveal>

            <Reveal delay={0.4}>
              <section data-testid="section-propriete">
                <h2 className="text-2xl font-medium text-white mb-4">3. Propriété intellectuelle</h2>
                <p className="mb-4">
                  L'ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, sons, logiciels, etc.) 
                  est la propriété exclusive de Answer is 42 ou de ses partenaires et est protégé par les lois 
                  françaises et internationales relatives à la propriété intellectuelle.
                </p>
                <p className="mb-4">
                  Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des 
                  éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation 
                  écrite préalable de Answer is 42.
                </p>
                <p>
                  Toute exploitation non autorisée du site ou de son contenu, des informations qui y sont divulguées, 
                  engagerait la responsabilité de l'utilisateur et constituerait une contrefaçon sanctionnée par les 
                  articles L.335-2 et suivants du Code de la propriété intellectuelle.
                </p>
              </section>
            </Reveal>

            <Reveal delay={0.5}>
              <section data-testid="section-responsabilite">
                <h2 className="text-2xl font-medium text-white mb-4">4. Limitation de responsabilité</h2>
                <p className="mb-4">
                  Answer is 42 s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce 
                  site. Toutefois, Answer is 42 ne peut garantir l'exactitude, la précision ou l'exhaustivité des 
                  informations mises à disposition sur ce site.
                </p>
                <p className="mb-4">
                  Answer is 42 décline toute responsabilité pour toute imprécision, inexactitude ou omission portant 
                  sur des informations disponibles sur le site, ainsi que pour tous dommages résultant d'une intrusion 
                  frauduleuse d'un tiers ayant entraîné une modification des informations mises à disposition.
                </p>
                <p>
                  Les liens hypertextes présents sur ce site peuvent renvoyer vers d'autres sites internet. 
                  Answer is 42 ne saurait être tenue responsable du contenu de ces sites externes.
                </p>
              </section>
            </Reveal>

            <Reveal delay={0.6}>
              <section data-testid="section-cookies">
                <h2 className="text-2xl font-medium text-white mb-4">5. Cookies</h2>
                <p className="mb-4">
                  Ce site peut utiliser des cookies pour améliorer l'expérience utilisateur. Pour en savoir plus 
                  sur notre utilisation des cookies, veuillez consulter notre{" "}
                  <a href="/politique-cookies" className="text-primary hover:text-primary/80 transition-colors">
                    Politique des cookies
                  </a>.
                </p>
              </section>
            </Reveal>

            <Reveal delay={0.7}>
              <section data-testid="section-donnees">
                <h2 className="text-2xl font-medium text-white mb-4">6. Protection des données personnelles</h2>
                <p className="mb-4">
                  Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique 
                  et Libertés du 6 janvier 1978 modifiée, vous disposez de droits sur vos données personnelles.
                </p>
                <p>
                  Pour plus d'informations sur le traitement de vos données et l'exercice de vos droits, 
                  veuillez consulter notre{" "}
                  <a href="/politique-confidentialite" className="text-primary hover:text-primary/80 transition-colors">
                    Politique de confidentialité
                  </a>.
                </p>
              </section>
            </Reveal>

            <Reveal delay={0.8}>
              <section data-testid="section-litiges">
                <h2 className="text-2xl font-medium text-white mb-4">7. Droit applicable et juridiction compétente</h2>
                <p className="mb-4">
                  Les présentes mentions légales sont régies par le droit français. En cas de litige, et après 
                  échec de toute tentative de recherche d'une solution amiable, les tribunaux français seront 
                  seuls compétents.
                </p>
                <p>
                  Conformément aux dispositions du Code de la consommation concernant le règlement amiable des 
                  litiges, le client peut recourir au service de médiation proposé par Answer is 42. Le médiateur 
                  peut être saisi via [coordonnées du médiateur à compléter].
                </p>
              </section>
            </Reveal>

            <Reveal delay={0.9}>
              <section data-testid="section-credits">
                <h2 className="text-2xl font-medium text-white mb-4">8. Crédits</h2>
                <p>
                  Conception et développement : Answer is 42<br />
                  Design : Answer is 42
                </p>
              </section>
            </Reveal>

            <Reveal delay={1.0}>
              <p className="text-sm text-white/60 pt-8 border-t border-white/10" data-testid="text-legal-update">
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

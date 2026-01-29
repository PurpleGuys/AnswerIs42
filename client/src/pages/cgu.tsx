import { Helmet } from "react-helmet";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GrainTexture } from "@/components/ui/GrainTexture";
import { Reveal } from "@/lib/animations";

export default function CGU() {
  return (
    <>
      <Helmet>
        <title>Conditions Générales d'Utilisation | Answer is 42</title>
        <meta name="description" content="Conditions générales d'utilisation du site Answer is 42 - Cabinet de consulting IT." />
        <link rel="canonical" href="https://answeris42.fr/cgu" />
        <meta name="robots" content="noindex, follow" />
        <meta property="og:title" content="CGU | Answer is 42" />
        <meta property="og:description" content="Conditions générales d'utilisation - Answer is 42." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://answeris42.fr/cgu" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="CGU | Answer is 42" />
        <meta name="twitter:description" content="Conditions générales d'utilisation - Answer is 42." />
      </Helmet>
      
      <div className="min-h-screen bg-background flex flex-col">
        <GrainTexture />
        <Navbar />
      
      <main id="main-content" className="flex-grow pt-32 md:pt-40 px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <p className="text-primary/80 text-xs font-medium tracking-[0.3em] uppercase mb-6" data-testid="text-cgu-label">
              Conditions d'utilisation
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-medium text-white mb-12 tracking-tight" data-testid="text-cgu-title">
              Conditions Générales d'Utilisation
            </h1>
          </Reveal>

          <div className="space-y-12 text-white/70 leading-relaxed">
            <Reveal delay={0.2}>
              <section data-testid="section-objet">
                <h2 className="text-2xl font-medium text-white mb-4">Article 1 - Objet</h2>
                <p className="mb-4">
                  Les présentes Conditions Générales d'Utilisation (ci-après « CGU ») ont pour objet de 
                  définir les modalités et conditions d'utilisation du site internet answeris42.com 
                  (ci-après « le Site »), ainsi que de définir les droits et obligations des parties 
                  dans ce cadre.
                </p>
                <p>
                  L'accès et l'utilisation du Site impliquent l'acceptation sans réserve des présentes CGU.
                </p>
              </section>
            </Reveal>

            <Reveal delay={0.3}>
              <section data-testid="section-definitions">
                <h2 className="text-2xl font-medium text-white mb-4">Article 2 - Définitions</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong className="text-white">« Éditeur » :</strong> désigne Answer is 42, société éditrice du Site</li>
                  <li><strong className="text-white">« Utilisateur » :</strong> désigne toute personne qui accède et navigue sur le Site</li>
                  <li><strong className="text-white">« Contenu » :</strong> désigne l'ensemble des éléments présents sur le Site (textes, images, vidéos, etc.)</li>
                  <li><strong className="text-white">« Services » :</strong> désigne les prestations de conseil IT proposées par Answer is 42</li>
                </ul>
              </section>
            </Reveal>

            <Reveal delay={0.4}>
              <section data-testid="section-acces">
                <h2 className="text-2xl font-medium text-white mb-4">Article 3 - Accès au Site</h2>
                <p className="mb-4">
                  Le Site est accessible gratuitement à tout Utilisateur disposant d'un accès à Internet. 
                  Tous les coûts afférents à l'accès au Site (matériel informatique, connexion Internet, etc.) 
                  sont à la charge exclusive de l'Utilisateur.
                </p>
                <p className="mb-4">
                  L'Éditeur met en œuvre tous les moyens raisonnables pour assurer un accès continu au Site, 
                  sans pour autant être tenu à une obligation de résultat. L'Éditeur peut interrompre l'accès 
                  au Site à tout moment pour des raisons de maintenance, de mise à jour ou pour tout autre 
                  motif jugé nécessaire.
                </p>
                <p>
                  L'Éditeur ne saurait être tenu responsable des dommages de toute nature résultant d'une 
                  indisponibilité du Site.
                </p>
              </section>
            </Reveal>

            <Reveal delay={0.5}>
              <section data-testid="section-utilisation">
                <h2 className="text-2xl font-medium text-white mb-4">Article 4 - Utilisation du Site</h2>
                <p className="mb-4">L'Utilisateur s'engage à utiliser le Site de manière conforme aux présentes CGU et à :</p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>Ne pas porter atteinte aux droits de l'Éditeur ou de tiers</li>
                  <li>Ne pas perturber le fonctionnement normal du Site</li>
                  <li>Ne pas introduire de virus ou programmes malveillants</li>
                  <li>Ne pas tenter d'accéder de manière non autorisée aux systèmes informatiques de l'Éditeur</li>
                  <li>Ne pas collecter des données personnelles d'autres utilisateurs</li>
                  <li>Ne pas utiliser le Site à des fins illégales ou frauduleuses</li>
                </ul>
                <p>
                  Tout manquement à ces obligations pourra entraîner la suspension ou l'interdiction d'accès 
                  au Site, sans préjudice de tout dommage et intérêt que l'Éditeur pourrait réclamer.
                </p>
              </section>
            </Reveal>

            <Reveal delay={0.6}>
              <section data-testid="section-pi">
                <h2 className="text-2xl font-medium text-white mb-4">Article 5 - Propriété intellectuelle</h2>
                <p className="mb-4">
                  L'ensemble des éléments du Site (textes, graphismes, images, logos, icônes, sons, logiciels, 
                  base de données, etc.) sont protégés par le droit de la propriété intellectuelle et 
                  appartiennent à l'Éditeur ou font l'objet d'une autorisation d'utilisation.
                </p>
                <p className="mb-4">
                  Toute reproduction, représentation, modification, publication, transmission, dénaturation, 
                  totale ou partielle du Site ou de son Contenu, par quelque procédé que ce soit, et sur 
                  quelque support que ce soit, est interdite sans l'autorisation écrite préalable de l'Éditeur.
                </p>
                <p>
                  Toute utilisation non autorisée du Contenu du Site engage la responsabilité de l'Utilisateur 
                  et constitue une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la 
                  propriété intellectuelle.
                </p>
              </section>
            </Reveal>

            <Reveal delay={0.7}>
              <section data-testid="section-formulaire">
                <h2 className="text-2xl font-medium text-white mb-4">Article 6 - Formulaire de contact</h2>
                <p className="mb-4">
                  Le Site met à disposition un formulaire de contact permettant aux Utilisateurs d'adresser 
                  des demandes d'information à l'Éditeur.
                </p>
                <p className="mb-4">
                  L'Utilisateur s'engage à fournir des informations exactes et à ne pas usurper l'identité 
                  d'un tiers. Tout message comportant des propos diffamatoires, injurieux, menaçants ou 
                  contraires à l'ordre public pourra être supprimé et son auteur pourra faire l'objet de 
                  poursuites.
                </p>
                <p>
                  L'Éditeur s'efforce de répondre aux demandes dans un délai raisonnable, sans pour autant 
                  être tenu à une obligation de réponse.
                </p>
              </section>
            </Reveal>

            <Reveal delay={0.8}>
              <section data-testid="section-liens">
                <h2 className="text-2xl font-medium text-white mb-4">Article 7 - Liens hypertextes</h2>
                <p className="mb-4">
                  Le Site peut contenir des liens hypertextes vers d'autres sites internet. L'Éditeur n'exerce 
                  aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu ou aux 
                  éventuels dommages résultant de leur utilisation.
                </p>
                <p>
                  La création de liens hypertextes vers le Site est soumise à l'accord préalable de l'Éditeur. 
                  Toute demande doit être adressée à contact@is42.fr.
                </p>
              </section>
            </Reveal>

            <Reveal delay={0.9}>
              <section data-testid="section-donnees-perso">
                <h2 className="text-2xl font-medium text-white mb-4">Article 8 - Données personnelles</h2>
                <p>
                  La collecte et le traitement des données personnelles des Utilisateurs sont régis par notre{" "}
                  <a href="/politique-confidentialite" className="text-primary hover:text-primary/80 transition-colors">
                    Politique de confidentialité
                  </a>, qui fait partie intégrante des présentes CGU.
                </p>
              </section>
            </Reveal>

            <Reveal delay={1.0}>
              <section data-testid="section-responsabilite">
                <h2 className="text-2xl font-medium text-white mb-4">Article 9 - Limitation de responsabilité</h2>
                <p className="mb-4">
                  Les informations présentes sur le Site sont fournies « en l'état », sans garantie d'aucune 
                  sorte, expresse ou implicite. L'Éditeur ne garantit pas l'exactitude, l'exhaustivité ou 
                  l'actualité des informations diffusées.
                </p>
                <p className="mb-4">
                  L'Éditeur ne saurait être tenu responsable des dommages directs ou indirects résultant de :
                </p>
                <ul className="list-disc list-inside space-y-1 mb-4">
                  <li>L'utilisation ou l'impossibilité d'utiliser le Site</li>
                  <li>L'inexactitude ou l'omission d'informations sur le Site</li>
                  <li>L'intrusion d'un tiers ou d'un virus informatique</li>
                  <li>La perte de données ou de profits</li>
                </ul>
                <p>
                  En tout état de cause, la responsabilité de l'Éditeur est limitée au montant des sommes 
                  effectivement perçues de l'Utilisateur.
                </p>
              </section>
            </Reveal>

            <Reveal delay={1.1}>
              <section data-testid="section-modification">
                <h2 className="text-2xl font-medium text-white mb-4">Article 10 - Modification des CGU</h2>
                <p className="mb-4">
                  L'Éditeur se réserve le droit de modifier les présentes CGU à tout moment et sans préavis. 
                  Les CGU applicables sont celles en vigueur à la date de l'utilisation du Site.
                </p>
                <p>
                  La poursuite de l'utilisation du Site après modification des CGU vaut acceptation des 
                  nouvelles conditions.
                </p>
              </section>
            </Reveal>

            <Reveal delay={1.2}>
              <section data-testid="section-droit-applicable">
                <h2 className="text-2xl font-medium text-white mb-4">Article 11 - Droit applicable et juridiction</h2>
                <p className="mb-4">
                  Les présentes CGU sont régies par le droit français.
                </p>
                <p className="mb-4">
                  En cas de litige relatif à l'interprétation ou à l'exécution des présentes CGU, les parties 
                  s'efforceront de trouver une solution amiable. À défaut, le litige sera porté devant les 
                  tribunaux compétents du ressort de [ville à compléter].
                </p>
                <p>
                  Conformément aux articles L.616-1 et R.616-1 du Code de la consommation, l'Utilisateur 
                  consommateur peut recourir gratuitement au service de médiation de la consommation. 
                  Le médiateur compétent est : [coordonnées du médiateur à compléter].
                </p>
              </section>
            </Reveal>

            <Reveal delay={1.3}>
              <section data-testid="section-contact">
                <h2 className="text-2xl font-medium text-white mb-4">Article 12 - Contact</h2>
                <p>
                  Pour toute question relative aux présentes CGU, vous pouvez nous contacter à l'adresse 
                  suivante : <strong className="text-white">contact@is42.fr</strong>
                </p>
              </section>
            </Reveal>

            <Reveal delay={1.4}>
              <p className="text-sm text-white/60 pt-8 border-t border-white/10" data-testid="text-cgu-update">
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

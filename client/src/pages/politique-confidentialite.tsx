import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GrainTexture } from "@/components/ui/GrainTexture";
import { Reveal } from "@/lib/animations";

export default function PolitiqueConfidentialite() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <GrainTexture />
      <Navbar />
      
      <main className="flex-grow pt-32 md:pt-40 px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <p className="text-primary/80 text-xs font-medium tracking-[0.3em] uppercase mb-6" data-testid="text-privacy-label">
              RGPD
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-medium text-white mb-12 tracking-tight" data-testid="text-privacy-title">
              Politique de confidentialité
            </h1>
          </Reveal>

          <div className="space-y-12 text-white/70 leading-relaxed">
            <Reveal delay={0.2}>
              <section data-testid="section-intro">
                <h2 className="text-2xl font-medium text-white mb-4">1. Introduction</h2>
                <p className="mb-4">
                  Answer is 42 s'engage à protéger la vie privée des utilisateurs de son site internet. 
                  La présente politique de confidentialité a pour objet de vous informer sur la manière 
                  dont nous collectons, utilisons et protégeons vos données personnelles, conformément au 
                  Règlement Général sur la Protection des Données (RGPD - Règlement UE 2016/679) et à la 
                  loi Informatique et Libertés du 6 janvier 1978 modifiée.
                </p>
              </section>
            </Reveal>

            <Reveal delay={0.3}>
              <section data-testid="section-responsable">
                <h2 className="text-2xl font-medium text-white mb-4">2. Responsable du traitement</h2>
                <div className="space-y-2">
                  <p><strong className="text-white">Responsable :</strong> Answer is 42</p>
                  <p><strong className="text-white">Adresse :</strong> [Adresse à compléter]</p>
                  <p><strong className="text-white">Email :</strong> contact@answeris42.com</p>
                  <p><strong className="text-white">DPO (Délégué à la Protection des Données) :</strong> [À compléter si applicable]</p>
                </div>
              </section>
            </Reveal>

            <Reveal delay={0.4}>
              <section data-testid="section-donnees-collectees">
                <h2 className="text-2xl font-medium text-white mb-4">3. Données collectées</h2>
                <p className="mb-4">Nous collectons les données personnelles suivantes :</p>
                
                <h3 className="text-lg font-medium text-white mb-2">3.1 Données collectées directement</h3>
                <ul className="list-disc list-inside mb-4 space-y-1">
                  <li>Nom et prénom</li>
                  <li>Adresse email</li>
                  <li>Nom de la société (facultatif)</li>
                  <li>Contenu du message envoyé via le formulaire de contact</li>
                </ul>

                <h3 className="text-lg font-medium text-white mb-2">3.2 Données collectées automatiquement</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Adresse IP</li>
                  <li>Type de navigateur et version</li>
                  <li>Système d'exploitation</li>
                  <li>Pages visitées et durée de visite</li>
                  <li>Date et heure de connexion</li>
                </ul>
              </section>
            </Reveal>

            <Reveal delay={0.5}>
              <section data-testid="section-finalites">
                <h2 className="text-2xl font-medium text-white mb-4">4. Finalités du traitement</h2>
                <p className="mb-4">Vos données personnelles sont collectées pour les finalités suivantes :</p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong className="text-white">Gestion des demandes de contact :</strong> répondre à vos demandes d'information ou de devis</li>
                  <li><strong className="text-white">Relation commerciale :</strong> suivi des prospects et clients potentiels</li>
                  <li><strong className="text-white">Amélioration du site :</strong> analyse de l'utilisation pour optimiser notre site</li>
                  <li><strong className="text-white">Obligations légales :</strong> respect de nos obligations légales et réglementaires</li>
                  <li><strong className="text-white">Sécurité :</strong> prévention des abus et protection contre les activités frauduleuses</li>
                </ul>
              </section>
            </Reveal>

            <Reveal delay={0.6}>
              <section data-testid="section-base-legale">
                <h2 className="text-2xl font-medium text-white mb-4">5. Base légale du traitement</h2>
                <p className="mb-4">Le traitement de vos données repose sur les bases légales suivantes :</p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong className="text-white">Votre consentement :</strong> pour l'envoi de communications commerciales</li>
                  <li><strong className="text-white">L'exécution d'un contrat :</strong> pour la gestion de la relation commerciale</li>
                  <li><strong className="text-white">L'intérêt légitime :</strong> pour l'amélioration de nos services et la sécurité du site</li>
                  <li><strong className="text-white">Les obligations légales :</strong> pour le respect de nos obligations réglementaires</li>
                </ul>
              </section>
            </Reveal>

            <Reveal delay={0.7}>
              <section data-testid="section-destinataires">
                <h2 className="text-2xl font-medium text-white mb-4">6. Destinataires des données</h2>
                <p className="mb-4">Vos données personnelles peuvent être transmises aux destinataires suivants :</p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong className="text-white">Personnel interne :</strong> les membres de l'équipe Answer is 42 habilités</li>
                  <li><strong className="text-white">Sous-traitants :</strong> hébergeur (Replit), prestataires d'envoi d'emails</li>
                  <li><strong className="text-white">Autorités :</strong> sur réquisition judiciaire ou légale uniquement</li>
                </ul>
                <p className="mt-4">
                  Nous ne vendons jamais vos données personnelles à des tiers. Nos sous-traitants sont 
                  soumis à des obligations contractuelles de confidentialité et de sécurité conformes au RGPD.
                </p>
              </section>
            </Reveal>

            <Reveal delay={0.8}>
              <section data-testid="section-transferts">
                <h2 className="text-2xl font-medium text-white mb-4">7. Transferts hors UE</h2>
                <p className="mb-4">
                  Certaines de vos données peuvent être transférées vers des pays situés hors de l'Union 
                  Européenne (notamment les États-Unis pour l'hébergement). Dans ce cas, nous nous assurons 
                  que ces transferts sont encadrés par des garanties appropriées :
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Décisions d'adéquation de la Commission Européenne</li>
                  <li>Clauses contractuelles types approuvées par la Commission Européenne</li>
                  <li>Certifications ou codes de conduite approuvés</li>
                </ul>
              </section>
            </Reveal>

            <Reveal delay={0.9}>
              <section data-testid="section-conservation">
                <h2 className="text-2xl font-medium text-white mb-4">8. Durée de conservation</h2>
                <p className="mb-4">Nous conservons vos données personnelles pendant les durées suivantes :</p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong className="text-white">Données de contact :</strong> 3 ans à compter du dernier contact</li>
                  <li><strong className="text-white">Données clients :</strong> durée de la relation contractuelle + 5 ans (prescription légale)</li>
                  <li><strong className="text-white">Données de navigation :</strong> 13 mois maximum</li>
                  <li><strong className="text-white">Cookies :</strong> 13 mois maximum</li>
                </ul>
                <p className="mt-4">
                  À l'expiration de ces délais, vos données sont supprimées ou anonymisées de manière irréversible.
                </p>
              </section>
            </Reveal>

            <Reveal delay={1.0}>
              <section data-testid="section-droits">
                <h2 className="text-2xl font-medium text-white mb-4">9. Vos droits</h2>
                <p className="mb-4">Conformément au RGPD, vous disposez des droits suivants :</p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong className="text-white">Droit d'accès :</strong> obtenir la confirmation du traitement de vos données et y accéder</li>
                  <li><strong className="text-white">Droit de rectification :</strong> demander la correction de données inexactes</li>
                  <li><strong className="text-white">Droit à l'effacement :</strong> demander la suppression de vos données (« droit à l'oubli »)</li>
                  <li><strong className="text-white">Droit à la limitation :</strong> demander la limitation du traitement de vos données</li>
                  <li><strong className="text-white">Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
                  <li><strong className="text-white">Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
                  <li><strong className="text-white">Droit de retirer votre consentement :</strong> à tout moment, sans impact sur la licéité du traitement antérieur</li>
                  <li><strong className="text-white">Droit de définir des directives post-mortem :</strong> concernant le sort de vos données après votre décès</li>
                </ul>
                <p className="mt-4">
                  Pour exercer ces droits, contactez-nous à : <strong className="text-white">contact@answeris42.com</strong>
                </p>
                <p className="mt-2">
                  Nous répondrons à votre demande dans un délai d'un mois. Ce délai peut être prolongé de 
                  deux mois en cas de demande complexe.
                </p>
              </section>
            </Reveal>

            <Reveal delay={1.1}>
              <section data-testid="section-reclamation">
                <h2 className="text-2xl font-medium text-white mb-4">10. Réclamation auprès de la CNIL</h2>
                <p className="mb-4">
                  Si vous estimez que le traitement de vos données personnelles constitue une violation du 
                  RGPD, vous avez le droit d'introduire une réclamation auprès de la CNIL :
                </p>
                <div className="space-y-2 p-4 bg-white/5 rounded-sm border border-white/10">
                  <p><strong className="text-white">Commission Nationale de l'Informatique et des Libertés (CNIL)</strong></p>
                  <p>3 Place de Fontenoy, TSA 80715</p>
                  <p>75334 Paris Cedex 07</p>
                  <p>Site web : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">www.cnil.fr</a></p>
                </div>
              </section>
            </Reveal>

            <Reveal delay={1.2}>
              <section data-testid="section-securite">
                <h2 className="text-2xl font-medium text-white mb-4">11. Sécurité des données</h2>
                <p className="mb-4">
                  Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour 
                  protéger vos données personnelles contre tout accès, modification, divulgation ou 
                  destruction non autorisés :
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Chiffrement des communications (HTTPS/TLS)</li>
                  <li>Contrôle d'accès strict aux données</li>
                  <li>Sauvegardes régulières et sécurisées</li>
                  <li>Sensibilisation du personnel à la protection des données</li>
                  <li>Surveillance et détection des intrusions</li>
                </ul>
              </section>
            </Reveal>

            <Reveal delay={1.3}>
              <section data-testid="section-modifications">
                <h2 className="text-2xl font-medium text-white mb-4">12. Modifications de la politique</h2>
                <p>
                  Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. 
                  Toute modification sera publiée sur cette page avec une date de mise à jour. Nous vous 
                  encourageons à consulter régulièrement cette page pour rester informé des éventuels changements.
                </p>
              </section>
            </Reveal>

            <Reveal delay={1.4}>
              <p className="text-sm text-white/40 pt-8 border-t border-white/10" data-testid="text-privacy-update">
                Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
              </p>
            </Reveal>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

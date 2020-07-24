import React from "react";
import styled from "styled-components";
import { Header } from "../Header";
import { Layout } from "../Layout";
import { Footer } from "../Footer";
import { Typography } from "../Typography";
import { Container } from "../Container";
import { Link } from "../Link";
import { List, ListItem } from "../List";
import { Section } from "../Section";

const CGUContainer = styled(Section)`
  h1 {
    margin-top: 0;
    margin-bottom: ${(props) => props.theme.spacing(4)};
  }

  h2,
  h3 {
    margin-top: ${(props) => props.theme.spacing(4)};
    margin-bottom: ${(props) => props.theme.spacing(2)};
  }

  p,
  ul {
    margin-bottom: ${(props) => props.theme.spacing(1)};
  }
`;

export function CGU() {
  return (
    <Layout>
      <Header />

      <CGUContainer>
        <Container>
          <Typography as="h1" variant="h1">
            CGU - TRACKDECHETS
          </Typography>
          <Typography as="h2" variant="h2">
            1. Conditions générales d'utilisation
          </Typography>
          <Typography as="h3" variant="body1">
            <strong>Présentation</strong>
          </Typography>
          <Typography>
            Trackdéchets.béta.gouv.fr, ci-après le service, a pour objet de
            faciliter et simplifier l’édition dématérialisée de bordereaux de
            suivi de déchets, d’en assurer la traçabilité et de sécuriser la
            démarche.
          </Typography>
          <Typography>
            Le présent document a pour objet de régler les relations entre les
            différents intervenants de ce service.
          </Typography>
          <Typography>
            Le service est développé et opéré par la Fabrique Numérique du
            Ministère de la Transition Écologique et Solidaire et du Ministère
            de la cohésion des territoires et des relations avec les
            collectivités territoriales, membre du réseau d’incubateurs
            <Link href="https://www.google.com/url?q=http://beta.gouv.fr/&amp;sa=D&amp;ust=1553532239086000">
              beta.gouv.fr
            </Link>
          </Typography>
          <Typography>
            Toute utilisation du service est subordonnée à l'acceptation
            préalable et au respect intégral des présentes conditions générales
            d’utilisation (CGU).
          </Typography>
          <Typography as="h3" variant="body1">
            <strong>Objet</strong>
          </Typography>
          <Typography>Le service permet :</Typography>
          <List>
            <ListItem>la création de comptes des utilisateurs</ListItem>
            <ListItem>
              l’édition dématérialisée de bordereaux de suivi de déchets
              (ci-après le bordereau)
            </ListItem>
            <ListItem>d’éditer un pdf du bordereau émis</ListItem>
            <ListItem>
              d’assurer la traçabilité du bordereau entre un producteur et un
              collecteur ou un producteur et une installation de traitement
            </ListItem>
            <ListItem>
              de conserver et d’archiver les bordereaux, de façon à éviter les
              éditions papier
            </ListItem>
            <ListItem>
              de faciliter le reporting des données, par la création d’un
              registre(*)
            </ListItem>
            <ListItem>l’accès à un tableau de bord par compte (*)</ListItem>
          </List>
          <Typography>
            (*) fonctionnalités futures ou en cours de développement
          </Typography>
          <Typography>
            L’utilisation de la plateforme est libre, facultative et gratuite.
          </Typography>
          <Typography>
            Les frais éventuels de connexion à un réseau sont à la charge de
            l’utilisateur
          </Typography>
          <Typography as="h3" variant="body1">
            <strong>Définitions</strong>
          </Typography>
          <Typography>
            Autorité administrative :&nbsp;toute personne publique ou privée
            ayant une mission de service public
          </Typography>
          <Typography>
            Le service : toutes les fonctionnalités intégrées à Trackdéchets
          </Typography>
          <Typography>
            L’administrateur d’entreprise :&nbsp;personne physique, représentant
            une entreprise et ayant autorité pour le faire ouvrant ou disposant
            d’un compte sur le service
          </Typography>
          <Typography>
            L’opérateur : l’Incubateur de services numériques qui développe et
            exploite le service.
          </Typography>
          <Typography>&nbsp;</Typography>
          <Typography as="h3" variant="body1">
            <strong>Informations générales</strong>
          </Typography>
          <Typography>
            Une interconnexion avec différentes sources de données permettant
            notamment d’obtenir des informations relatives à l’identité d’une
            personne morale, à son statut d’installations classées pour la
            protection de l'environnement ou agrément de façon à s’assurer
            qu’elle dispose des autorisations requises pour collecter et/ou
            traiter les déchets dangereux peut être réalisée.
          </Typography>
          <Typography>
            L’administrateur du site se réserve le droit de supprimer un compte
            non sincère et d’informer l’inspection des installations classées
            compétente en cas de suspicion de fraude.
          </Typography>
          <Typography>
            Les sources de données utilisables sont notamment (liste non
            exhaustive)
          </Typography>
          <List>
            <ListItem>
              ​
              <Link href="https://www.google.com/url?q=https://franceconnect.gouv.fr/&amp;sa=D&amp;ust=1553532239092000">
                FranceConnect
              </Link>
              ​
            </ListItem>
            <ListItem>
              ​
              <Link href="https://www.google.com/url?q=https://adresse.data.gouv.fr/&amp;sa=D&amp;ust=1553532239093000">
                Base d’adresse nationale
              </Link>
              &nbsp;​
            </ListItem>
            <ListItem>
              ​
              <Link href="https://www.google.com/url?q=https://api.gouv.fr/api/api-entreprise.html&amp;sa=D&amp;ust=1553532239093000">
                API entreprise
              </Link>
              ​
            </ListItem>
            <ListItem>Base des installations classées</ListItem>
            <ListItem>IREP / GEREP</ListItem>
          </List>
          <Typography as="h2" variant="h2">
            2. Conditions générales relatives aux utilisateurs
          </Typography>
          <Typography>
            La création de compte nécessite l’acceptation sans réserve, des
            présentes conditions d’utilisation. Le compte ouvert au nom d’une
            société/entreprise est appelé compte administrateur entreprise. La
            création d’un compte est nécessaire pour l'accès au service.
          </Typography>
          <Typography as="h3" variant="body1">
            <strong>
              A. Inscription sur la plateforme et ouverture de l’accès au
              service
            </strong>
          </Typography>
          <Typography>
            La création d’un compte est réalisée en ligne via le service. Elle
            est relative à une personne physique représentant l’entreprise et
            ayant autorité pour le faire. Pour bénéficier d’un compte sur le
            service, il convient :
          </Typography>
          <List>
            <ListItem>
              de renseigner les champs obligatoires du formulaire d’inscription
              en ligne,
            </ListItem>
            <ListItem>
              d’activer le compte en cliquant sur le lien reçu par courriel à
              l’adresse email indiquée.
            </ListItem>
          </List>
          <Typography>
            Le compte est alors validé et les différentes fonctionnalités sont
            disponibles.
          </Typography>
          <Typography>
            Le service se réserve le droit de vérifier la corrélation d’un
            compte avec une entreprise.
          </Typography>
          <Typography as="h3" variant="body1">
            <strong>B. Fonctionnalités</strong>
          </Typography>
          <Typography>
            Le titulaire du compte administrateur dispose &nbsp;notamment des
            fonctionnalités suivantes dans son espace :
          </Typography>
          <List>
            <ListItem>
              l’édition dématérialisée de bordereaux de suivi de déchets
            </ListItem>
            <ListItem>d’éditer un pdf du bordereau émis</ListItem>
            <ListItem>
              de connaître le statut du bordereau entre un producteur et un
              collecteur ou un producteur et une installation de traitement
            </ListItem>
            <ListItem>de conserver et d’archiver les bordereaux</ListItem>
            <ListItem>de visualiser le registre des déchets (*)</ListItem>
            <ListItem>de vérifier un prestataire</ListItem>
            <ListItem>de demander une aide en ligne (*)</ListItem>
            <ListItem>
              d'accéder à un tableau de bord récapitulatif (*)
            </ListItem>
          </List>
          <Typography>(*) fonctionnalités à venir</Typography>
          <Typography as="h3" variant="body1">
            <strong>Édition d’un bordereau en ligne</strong>
          </Typography>
          <Typography>
            Après connexion, l’utilisateur est dirigé vers le tableau comportant
            les bordereaux le concernant (si des bordereaux le concernant ont
            été édités). Le tableau permet de chercher, trier et vérifier l’état
            des bordereaux.
          </Typography>
          <Typography>
            L’onglet “Créer un bordereau” permet la création d’un bordereau en
            mode brouillon. La création du bordereau nécessite de remplir les
            mêmes champs qu’un bordereau modèle Cerfa 12571*01 pour les cases 1
            à 9.
          </Typography>
          <Typography>
            Le service permet de conserver des favoris permettant un remplissage
            facilité des bordereaux suivants ayant des similitudes
            (destinataires, déchets, transports etc). Il permet au producteur de
            s’assurer qu’il utilise le bon code de nomenclature de son déchet.
          </Typography>
          <Typography>
            Lorsque ce bordereau est rempli, il apparaît dans les bordereaux en
            brouillons.
          </Typography>
          <Typography>
            Lors du départ du déchet vers l’installation de collecte ou de
            traitement, il est nécessaire de valider ledit bordereau afin d’ :
          </Typography>
          <List>
            <ListItem>en éditer un exemplaire pour le transporteur,</ListItem>
            <ListItem>
              transférer ce bordereau en attente chez le prestataire,
            </ListItem>
            <ListItem>suivre le statut du bordereau.</ListItem>
          </List>
          <Typography>
            La validation consiste à confirmer le nom et la date du départ du
            déchet.
          </Typography>
          <Typography>
            Cliquer sur “Je Valide”, équivaut à valider les informations et
            apposer sa signature.
          </Typography>
          <Typography>
            Si les champs requis ne sont pas tous complétés, le service invite à
            revenir corriger des champs manquants ou erronés sur le bordereau.
            La validation n’est possible que si les erreurs sont corrigées.
          </Typography>
          <Typography>
            Pour des raisons pratiques, il est possible de dupliquer un
            bordereau existant. Ce bordereau se retrouve alors dans les
            brouillons de façon à pouvoir modifier certains paramètres
            (conditionnement ou quantité de déchets par exemple) avant
            validation.
          </Typography>
          <Typography as="h3" variant="body1">
            <strong>Edition d’un pdf</strong>
          </Typography>
          <Typography>
            Le service propose l'édition en mode pdf du bordereau réalisé pour
            confier le document au transporteur et respecter les obligations
            réglementaires.
          </Typography>
          <Typography>
            Le transporteur appose sa signature physique sur l’espace réservé à
            son emplacement sur le bordereau, valant prise en charge du déchet.
          </Typography>
          <Typography>
            Le bordereau comporte les informations nécessaires pour que le
            destinataire puisse se rendre sur le service et valider la prise en
            charge (ou non ) du déchet. (lien de connexion, SIRET de l'émetteur,
            numéro du BSD, etc)
          </Typography>
          <h3>
            Validation par le prestataire (installation de collecte et/ou
            traitement)
          </h3>
          <Typography>Il &nbsp;appartient &nbsp;au prestataire de :</Typography>
          <List>
            <ListItem>
              &nbsp;confirmer l’arrivée du déchet sur leur site en indiquant le
              nom de la personne responsable de la prise en charge, la date et
              le poids à l’arrivée sur site, confirmant l’acceptation du déchet.
            </ListItem>
          </List>
          <List>
            <ListItem>
              confirmer le traitement du déchet en indiquant le nom de la
              personne responsable du traitement, la date et le code du
              traitement.
            </ListItem>
          </List>
          <Typography>
            Ces actions ont un impact sur le statut du déchet indiqué sur le
            bordereau.
          </Typography>
          <Typography>
            Dans les deux cas, cliquer sur “Je Valide”, équivaut à valider les
            informations et apposer sa signature.
          </Typography>
          <Typography as="h3" variant="body1">
            <strong>Vérification d’un prestataire</strong>
          </Typography>
          <Typography>
            La responsabilité de la prise en charge et du traitement du déchet
            incombe au producteur/détenteur du déchet.
          </Typography>
          <Typography>
            Si celui-ci a un doute sur le fait qu’une entreprise avec laquelle
            il envisage de travailler, il peut utiliser l’onglet “vérification
            de prestataire” disponible sur la page d'accueil.
          </Typography>
          <Typography>
            Vous entrez les informations que vous connaissez dans le formulaire
            et une réponse vous sera apportée par mail.
          </Typography>
          <h3>
            C. Données à caractère personnel et sécurité des systèmes
            d’information
          </h3>
          <Typography>
            Le service est responsable des traitements opérés sur les données
            reçues dans le cadre du présent service et, à ce titre, respecte les
            obligations inhérentes à ce traitement, notamment celles prévues par
            la loi n° 78-17 du 6 janvier 1978 relative à l’informatique, aux
            fichiers et aux libertés dans sa dernière version modifiée du 20
            juin 2018. Elle s’engage à ne pas commercialiser les données reçues,
            à ne pas les communiquer à des tiers en dehors des cas prévus par la
            loi et à effectuer toutes formalités relatives aux données à
            caractère personnel.
          </Typography>
          <Typography>
            En somme, les informations pouvant être connues par un utilisateur
            ne seront pas différentes de celles auxquelles il aurait
            connaissance au travers d’un bordereau cerfa papier.
          </Typography>
          <Typography>
            Les données globales relatives aux déchets, (typologies, tonnage par
            exemple) pourront être utilisées pour disposer d’indicateurs sur les
            déchets.
          </Typography>
          <Typography as="h3" variant="body1">
            <strong>D. Suppression de compte par le service</strong>
          </Typography>
          <Typography>
            Le service s’autorise à suspendre ou révoquer un compte
            administrateur et toutes les actions réalisées par ce biais, s’il
            estime que l’usage réalisé du service porte préjudice à son image ou
            ne correspond pas aux exigences de sécurité.
          </Typography>
          <Typography as="h3" variant="body1">
            <strong>E. Accessibilité</strong>
          </Typography>
          <Typography>
            Le service étant encore en développement, il n’a pas fait l’objet
            d’une déclaration de conformité RGAA (Référentiel général
            d'accessibilité pour les administrations).
          </Typography>
          <Typography as="h3" variant="body1">
            <strong>
              F. Engagements et absences de garantie de l’opérateur
            </strong>
          </Typography>
          <Typography>
            Le service permet la mise en relation d’une autorité administrative
            partenaire et d’un usager.L’envoi d’un dossier via le service ne
            garantit pas l’acceptation d’une demande.
          </Typography>
          <Typography>
            L’opérateur ne saurait être tenu responsable des contenus publiés
            par les administrations partenaires qu’il héberge ou les usagers.
            Dès qu’il a connaissance de contenus illicites, l’opérateur agit
            pour retirer ces données ou en rendre l'accès impossible. Tout
            utilisateur peut signaler tout contenu non conforme aux présentes
            conditions d’utilisation.
          </Typography>
          <Typography>
            Ainsi, l’opérateur ne modère pas de contenus a priori, mais
            uniquement a posteriori.
          </Typography>
          <Typography>
            L’accès au service peut être suspendu sans information préalable ni
            préavis, notamment pour des raisons de maitenance.L’indisponibilité
            du service ne saurait ouvrir droit à aucune compensation quelle
            qu’en soit sa nature.
          </Typography>
          <Typography>
            L’opérateur se réserve également le droit de bloquer, sans
            information préalable ni compensation financière, les usages mettant
            en péril l’utilisation du logiciel par d’autres usagers, notamment
            aux fins d’anticipation d’éventuelles attaques par déni de service.
          </Typography>
          <Typography as="h3" variant="body1">
            <strong>G. Vie privée</strong>
          </Typography>
          <Typography as="h3" variant="body1">
            <strong>Cookies</strong>
          </Typography>
          <Typography>
            Le site dépose des cookies de mesure d’audience, respectant les
            conditions d’exemption du consentement de l’internaute définies par
            la recommandation « Cookies&nbsp;» de la Commission nationale
            informatique et libertés (CNIL). Cela signifie, notamment, que ces
            cookies ne servent qu’à la production de statistiques anonymes et ne
            permettent pas de suivre la navigation de l’internaute sur d’autres
            sites.
          </Typography>
          <Typography>
            Le site dépose également des cookies de navigation, aux fins
            strictement techniques, qui ne sont pas conservés. La consultation
            de la plateforme n’est pas affectée lorsque les utilisateurs
            utilisent des navigateurs désactivant les cookies.
          </Typography>
          <Typography as="h3" variant="body1">
            <strong>Service tiers</strong>
          </Typography>
          <Typography>
            Le service utilise Mailjet, un service français d’envoi d’e
            courriers électroniques. Ce service tiers est hébergé en France et
            dispose de ses propres modalités d’utilisation.
          </Typography>
          <Typography>
            Pour résilier son inscription, l’utilisateur en fait la demande :
          </Typography>
          <Typography>Par mail :</Typography>
          <Typography>contact@trackdéchets.fr</Typography>
          <Typography>Par voie postale :</Typography>
          <Typography>
            Trackdéchets / Fabrique Numérique / Arche de la Défense Sud, 6éme
            étage / Ministère de la Transition Écologique et Solidaire / 1
            Parvis de la Défense, 92800 Puteaux
          </Typography>
          <Typography>
            Un lien de désinscription sera également proposé dans les
            newsletters
          </Typography>
          <Typography as="h3" variant="body1">
            <strong>
              H. Suspension ou suppression d’un compte utilisateur
            </strong>
          </Typography>
          <Typography>
            Nous nous réservons le droit de bloquer, sans information préalable
            ni compensation financière, les usages mettant en péril
            l'utilisation du logiciel par d'autres usagers ou n’ayant pas un
            usage conforme aux présentes conditions générales d’utilisation.
          </Typography>
          <Typography as="h2" variant="h2">
            3. Engagements du service
          </Typography>
          <Typography>
            L’opérateur prend envers l’ensemble des utilisateurs du service, les
            engagements suivants :
          </Typography>
          <List>
            <ListItem>
              L’ouverture d’un compte administrateur à chaque demande ;
            </ListItem>
            <ListItem>
              La sécurisation du service, notamment en prenant toutes les
              mesures nécessaires permettant de garantir la sécurité et la
              confidentialité des informations fournies par l’usager ;
            </ListItem>
            <ListItem>La gratuité du service.</ListItem>
          </List>
          <Typography>
            L’opérateur met en œuvre et opère le service conformément aux
            dispositions légales et réglementaires en vigueur.
          </Typography>
          <Typography as="h3" variant="body1">
            <strong>A. Qualité de service</strong>
          </Typography>
          <Typography>
            . L’indisponibilité du service ne saurait ouvrir droit à aucune
            compensation quelle qu’en soit sa nature.
          </Typography>
          <Typography>
            L’opérateur se réserve la liberté de faire évoluer, de modifier ou
            de suspendre, sans préavis, la plateforme pour des raisons de
            maintenance ou pour tout autre motif jugé nécessaire.
          </Typography>
          <Typography as="h3" variant="body1">
            <strong>B. Données à caractère personnel</strong>
          </Typography>
          <Typography>
            L’opérateur s’engage à mettre en œuvre toutes mesures appropriées,
            afin de protéger les données à caractère personnel &nbsp;traitées
            dans le cadre du service.
          </Typography>
          <Typography>
            L’opérateur est responsable des informations traitées dans le cadre
            du service et, à ce titre, s’engage à respecter les obligations
            inhérentes à ce traitement, notamment celles relevant du règlement
            général sur la protection des données du 27 avril 2016, applicable,
            depuis le 25 mai 2018, et à la loi informatique &nbsp;et libertés
            dans sa dernière version modifiée du 20 juin 2018.
          </Typography>
          <Typography as="h3" variant="body1">
            <strong>C. Sécurité des systèmes d’information</strong>
          </Typography>
          <Typography>
            L’opérateur s’engage à prendre toutes précautions utiles pour
            préserver l’intégrité des données mises à disposition, et notamment
            empêcher qu’elles soient déformées ou endommagées.
          </Typography>
          <Typography>
            L’opérateur s’engage à assurer le suivi et l’évaluation de
            l’utilisation du service, et à communiquer les résultats obtenus aux
            différents partenaires.
          </Typography>
          <Typography as="h3" variant="body1">
            <strong>D. Responsabilités</strong>
          </Typography>
          <Typography>
            L’opérateur se réserve la possibilité de retirer des commentaires et
            des formulaires hébergés par le service.
          </Typography>
          <Typography>
            L’opérateur se réserve également la possibilité de supprimer le
            compte d’un utilisateur et de refuser que certaines personnes aient
            accès à la plateforme, en cas de violation des présentes règles
            d’utilisation.
          </Typography>
          <Typography as="h3" variant="body1">
            <strong>E. Propriété intellectuelle</strong>
          </Typography>
          <Typography>
            Ce site est la propriété exclusive du ministère de la transition
            écologique et solidaire et ministère de la cohésion des territoires
            et des relations avec les collectivités territoriales. Toute
            reproduction ou représentation totale ou partielle de ce site par
            quelque procédé que ce soit, sans l’autorisation expresse de son
            propriétaire est interdite et constituerait une contrefaçon
            sanctionnée par les articles L. 335-2 du Code de la propriété
            intellectuelle.
          </Typography>
          <Typography>
            Si vous souhaitez reproduire ou réutiliser des contenus présents sur
            ce site, veuillez contacter le webmestre (Mail indiqué sur le site)
            pour connaître les conditions de réutilisation applicables.
          </Typography>
          <Typography>
            Les marques dont est titulaire le ministère de la transition
            écologique et solidaire et ministère de la cohésion des territoires
            et des relations avec les collectivités territoriales, ainsi que ses
            logos figurant sur le site sont des marques régulièrement déposées
            auprès de l’Institut national de la propriété industrielle (INPI).
            Toute reproduction totale ou partielle de ces marques ou de ces
            logos effectuées à partir des éléments du site sans l’autorisation
            expresse du propriétaire de ce site est prohibée au sens des
            articles L. 713-2 et suivants du Code de la propriété
            intellectuelle. Tout contrefacteur s’expose aux sanctions prévues
            aux articles L. 716-1 et suivants du code de la propriété
            intellectuelle.
          </Typography>
          <Typography as="h3" variant="body1">
            <strong>F. Evolution des conditions d’utilisation</strong>
          </Typography>
          <Typography>
            Les termes des présentes conditions d’utilisation peuvent être
            amendés à tout moment, sans préavis, en fonction des modifications
            apportées au service, de l’évolution de la législation ou pour tout
            autre motif jugé nécessaire.
          </Typography>
          <Typography as="h2" variant="h2">
            4. Mentions légales
          </Typography>
          <Typography as="h3" variant="body1">
            <strong>Editeur</strong>
          </Typography>
          <Typography>
            Trackdéchet est édité par la Fabrique numérique du ministère de la
            transition écologique et solidaire et ministère de la cohésion des
            territoires et des relations avec les collectivités territoriales,
            &nbsp;(1 place Carpeaux, 92800 Puteaux), avec l’appui de
            l’incubateur de services numériques (beta.gouv.fr) de la direction
            interministérielle du numérique et du système d’information et de
            communication de l’État (DINSIC).
          </Typography>
          <Typography as="h3" variant="body1">
            <strong>Directeur de la publication</strong>
          </Typography>
          <Typography as="h3" variant="body1">
            <strong>
              Monsieur le Directeur Général de la Prévention et des Risques
            </strong>
          </Typography>
          <Typography as="h3" variant="body1">
            <strong>Prestataire d'hébergement</strong>
          </Typography>
          <Typography>
            OVH RCS Roubaix – Tourcoing 424 761 419 00045 Code APE 6202A N° TVA
            : FR 22 424 761 419 Siège social : 2 rue Kellermann - 59100 Roubaix
            -
          </Typography>
        </Container>
      </CGUContainer>

      <Footer />
    </Layout>
  );
}

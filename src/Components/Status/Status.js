import React, { useEffect, useRef, useState } from "react";
import Stack from "react-bootstrap/Stack";
import "./Status.css";
import StatusContent from "./StatusContent";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Button from "react-bootstrap/Button";

const Status = () => {
  const animation = useAnimation();
  const animation2 = useAnimation();
  const animation5 = useAnimation();
  const animation7 = useAnimation();
  const animation8 = useAnimation();
  const animation11 = useAnimation();
  const animation13 = useAnimation();
  const animation14 = useAnimation();
  const animation17 = useAnimation();
  const animation20 = useAnimation();
  const animation21 = useAnimation();
  const animation24 = useAnimation();
  const animation26 = useAnimation();
  const animation27 = useAnimation();
  const animation29 = useAnimation();
  const animation30 = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
  });
  const [ref2, inView2] = useInView({
    threshold: 0.3,
  });
  const [ref5, inView5] = useInView({
    threshold: 0.3,
  });
  const [ref7, inView7] = useInView({
    threshold: 0.3,
  });
  const [ref8, inView8] = useInView({
    threshold: 0.3,
  });
  const [ref11, inView11] = useInView({
    threshold: 0.3,
  });
  const [ref13, inView13] = useInView({
    threshold: 0.3,
  });
  const [ref14, inView14] = useInView({
    threshold: 0.3,
  });
  const [ref17, inView17] = useInView({
    threshold: 0.3,
  });
  const [ref20, inView20] = useInView({
    threshold: 0.3,
  });
  const [ref21, inView21] = useInView({
    threshold: 0.3,
  });
  const [ref24, inView24] = useInView({
    threshold: 0.3,
  });
  const [ref26, inView26] = useInView({
    threshold: 0.3,
  });
  const [ref27, inView27] = useInView({
    threshold: 0.3,
  });
  const [ref29, inView29] = useInView({
    threshold: 0.3,
  });
  const [ref30, inView30] = useInView({
    threshold: 0.3,
  });
  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.8,

          ease: [0, 0.71, 0.2, 1.01],
        },
      });
    }
    if (!inView) {
      animation.start({
        opacity: 0,
        y: 30,
        scale: 0.9,
        transition: {
          duration: 0.8,

          ease: [0, 0.71, 0.2, 1.01],
        },
      });
    }
  }, [inView]);
  useEffect(() => {
    if (inView2) {
      animation2.start({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.8,

          ease: [0, 0.71, 0.2, 1.01],
        },
      });
    }
    if (!inView2) {
      animation2.start({
        opacity: 0,
        y: 30,
        scale: 0.9,
        transition: {
          duration: 0.8,

          ease: [0, 0.71, 0.2, 1.01],
        },
      });
    }
  }, [inView2]);
  useEffect(() => {
    if (inView5) {
      animation5.start({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.8,

          ease: [0, 0.71, 0.2, 1.01],
        },
      });
    }
    if (!inView5) {
      animation5.start({
        opacity: 0,
        y: 30,
        scale: 0.9,
        transition: {
          duration: 0.8,

          ease: [0, 0.71, 0.2, 1.01],
        },
      });
    }
  }, [inView5]);
  useEffect(() => {
    if (inView7) {
      animation7.start({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.8,

          ease: [0, 0.71, 0.2, 1.01],
        },
      });
    }
    if (!inView7) {
      animation7.start({
        opacity: 0,
        y: 30,
        scale: 0.9,
        transition: {
          duration: 0.8,

          ease: [0, 0.71, 0.2, 1.01],
        },
      });
    }
  }, [inView7]);
  useEffect(() => {
    if (inView8) {
      animation8.start({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.8,

          ease: [0, 0.71, 0.2, 1.01],
        },
      });
    }
    if (!inView8) {
      animation8.start({
        opacity: 0,
        y: 30,
        scale: 0.9,
        transition: {
          duration: 0.8,

          ease: [0, 0.71, 0.2, 1.01],
        },
      });
    }
  }, [inView8]);
  useEffect(() => {
    if (inView11) {
      animation11.start({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.8,

          ease: [0, 0.71, 0.2, 1.01],
        },
      });
    }
    if (!inView11) {
      animation11.start({
        opacity: 0,
        y: 30,
        scale: 0.9,
        transition: {
          duration: 0.8,

          ease: [0, 0.71, 0.2, 1.01],
        },
      });
    }
  }, [inView11]);
  useEffect(() => {
    if (inView13) {
      animation13.start({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.8,

          ease: [0, 0.71, 0.2, 1.01],
        },
      });
    }
    if (!inView13) {
      animation13.start({
        opacity: 0,
        y: 30,
        scale: 0.9,
        transition: {
          duration: 0.8,

          ease: [0, 0.71, 0.2, 1.01],
        },
      });
    }
  }, [inView13]);
  useEffect(() => {
    if (inView14) {
      animation14.start({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.8,

          ease: [0, 0.71, 0.2, 1.01],
        },
      });
    }
    if (!inView14) {
      animation14.start({
        opacity: 0,
        y: 30,
        scale: 0.9,
        transition: {
          duration: 0.8,

          ease: [0, 0.71, 0.2, 1.01],
        },
      });
    }
  }, [inView14]);
  useEffect(() => {
    if (inView17) {
      animation17.start({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.8,

          ease: [0, 0.71, 0.2, 1.01],
        },
      });
    }
    if (!inView17) {
      animation17.start({
        opacity: 0,
        y: 30,
        scale: 0.9,
        transition: {
          duration: 0.8,

          ease: [0, 0.71, 0.2, 1.01],
        },
      });
    }
  }, [inView17]);
  useEffect(() => {
    if (inView20) {
      animation20.start({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.8,

          ease: [0, 0.71, 0.2, 1.01],
        },
      });
    }
    if (!inView20) {
      animation20.start({
        opacity: 0,
        y: 30,
        scale: 0.9,
        transition: {
          duration: 0.8,

          ease: [0, 0.71, 0.2, 1.01],
        },
      });
    }
  }, [inView20]);
  useEffect(() => {
    if (inView21) {
      animation21.start({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.8,

          ease: [0, 0.71, 0.2, 1.01],
        },
      });
    }
    if (!inView21) {
      animation21.start({
        opacity: 0,
        y: 30,
        scale: 0.9,
        transition: {
          duration: 0.8,

          ease: [0, 0.71, 0.2, 1.01],
        },
      });
    }
  }, [inView21]);
  useEffect(() => {
    if (inView24) {
      animation24.start({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.8,

          ease: [0, 0.71, 0.2, 1.01],
        },
      });
    }
    if (!inView24) {
      animation24.start({
        opacity: 0,
        y: 30,
        scale: 0.9,
        transition: {
          duration: 0.8,

          ease: [0, 0.71, 0.2, 1.01],
        },
      });
    }
  }, [inView24]);
  useEffect(() => {
    if (inView26) {
      animation26.start({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.8,

          ease: [0, 0.71, 0.2, 1.01],
        },
      });
    }
    if (!inView26) {
      animation26.start({
        opacity: 0,
        y: 30,
        scale: 0.9,
        transition: {
          duration: 0.8,

          ease: [0, 0.71, 0.2, 1.01],
        },
      });
    }
  }, [inView26]);
  useEffect(() => {
    if (inView27) {
      animation27.start({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.8,

          ease: [0, 0.71, 0.2, 1.01],
        },
      });
    }
    if (!inView27) {
      animation27.start({
        opacity: 0,
        y: 30,
        scale: 0.9,
        transition: {
          duration: 0.8,

          ease: [0, 0.71, 0.2, 1.01],
        },
      });
    }
  }, [inView27]);
  useEffect(() => {
    if (inView29) {
      animation29.start({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.8,

          ease: [0, 0.71, 0.2, 1.01],
        },
      });
    }
    if (!inView29) {
      animation29.start({
        opacity: 0,
        y: 30,
        scale: 0.9,
        transition: {
          duration: 0.8,

          ease: [0, 0.71, 0.2, 1.01],
        },
      });
    }
  }, [inView29]);
  useEffect(() => {
    if (inView30) {
      animation30.start({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.8,

          ease: [0, 0.71, 0.2, 1.01],
        },
      });
    }
    if (!inView30) {
      animation30.start({
        opacity: 0,
        y: 30,
        scale: 0.9,
        transition: {
          duration: 0.8,

          ease: [0, 0.71, 0.2, 1.01],
        },
      });
    }
  }, [inView30]);
  const [voirPlus, setvoirPlus] = useState(true);
  return (
    <>
      <Stack
        style={{ margin: "5% auto" }}
        className={`stack ${voirPlus ? "expandedBox" : ""}`}
      >
        <h1 style={{ letterSpacing: "3px" }}>Status</h1>
        <motion.div ref={ref} animate={animation} className="grid-item">
          <p className="p">Titre 1 : La Constitution</p>
          <p className="line-clamp">
            Article 1 L'association s'est constituée entre les personnes qui se
            sont mises d'accord sur ce statut et porte le nom : Association
            Tunisienne des Gestionnaires des Etablissements Universitaires et
            classée parmi les associations culturelle. Elle est régie par la Loi
            n°154 de l'année 1959 datée du 7 novembre 1959 et amendée par la Loi
            n°90 de l'année 1988 datée du 2 août 1988 et par la Loi n°25 de
            l'année 1992 datée du 2 avril 1992 et les réglementations suivantes
            :
          </p>
        </motion.div>
        <motion.div ref={ref2} animate={animation2}>
          <StatusContent
            shortContent="  Article 2 Les buts de cette association son 1. Créer et maintenir
              des liens entre les diplômés du cycle de formation des
              administrateurs conseillers appelés à exercer auprès des
              universités, des établissements "
            longContent=" d’enseignement supérieur et de
              recherche et des établissements des œuvres universitaires afin de
              faire un échange de leurs expériences professionnelles. 2.
              Organiser des manifestations à caractère scientifique et culturel
              et publier une revue. 3. La coopération et la coordination avec
              les associations similaires."
          />
        </motion.div>
        <motion.div ref={ref2} animate={animation2}>
          <StatusContent
            shortContent="  Article 3 Le local de l'association est domicilié à l'ISCAE, Le
              Campus universitaire de la Manouba - 2010 Tunis. Le changement de
              l'adresse reste possible"
            longContent="  par la simple décision du comité
              directeur à condition d'informer le gouverneur et le ministre de
              l'intérieur dans un délai de 15 jours."
          />
        </motion.div>
        <motion.div ref={ref2} animate={animation2} className="grid4">
          <p className="line-clamp" id="4">
            Article 4 La durée d'activité de l'association est illimitée.
          </p>
        </motion.div>
        <motion.div ref={ref5} animate={animation5}>
          <StatusContent
            shortContent="   Article 5 Le comité directeur doit émettre une annonce dans le
              Journal Officiel de la République Tunisienne où sont clairement
              mis, le nom de l'association,"
            longContent="  les buts, la classification, son
              siège social, le numéro et la date du récépissé, les noms et les
              prénoms, les fonctions de ces membres fondateurs et les
              responsables de ses directions."
          />
        </motion.div>
        <motion.div ref={ref5} animate={animation5}>
          <StatusContent
            shortContent="    Article 6 Les responsables de l'association s'engagent à informer
              le gouverneur et le ministre de l'intérieur de tout changement
              dans la composition du comité directeur ou de ces responsables et
              si par contre aucun changement n'est survenu"
            longContent="  sur la composition du
              comité directeur ou la composition du comité exécutif, le comité
              directeur réélu doit informer les autorités sus cités de cette
              situation dans un délai ne dépassant pas un mois. De même
              l'association est dans l'obligation d'informer ces mêmes autorités
              dans les mêmes conditions évoquées précédemment de tout changement
              effectué, du siège social, des sections, des filiales, et des
              organismes secondaires qui ont une relation avec l'association."
          />
        </motion.div>
        <motion.div ref={ref7} animate={animation7} className="grid-item">
          <p className="p">
            Titre 2 : Composition - Participation - Renvoi -Ressources{" "}
          </p>
          <p className="line-clamp">
            Article 7 L'association se compose de : Comité directeur : bureau
            exécutif Membres actifs (les diplômés du cycle de formation des
            administrateurs conseillers appelés à exercer auprès des
            universités, des établissements d’enseignement supérieur et de
            recherche et des établissements des œuvres universitaires).
          </p>
        </motion.div>
        <motion.div ref={ref8} animate={animation8}>
          <p className="line-clamp">
            Article 8 Chaque membre doit payer une cotisation de vingt dinars au
            début du mois de janvier de chaque année. Le comité directeur peut
            changer la somme de cotisation, lors d'une assemblée générale, qui
            ne dépasserait jamais les trente dinars.
          </p>
        </motion.div>
        <motion.div ref={ref8} animate={animation8}>
          <StatusContent
            shortContent="    Article 9 Il n'est plus considéré membre de l'association toute
              personne : Ayant présenté sa démission écrite et adressée par voie
              postale recommandée,"
            longContent=" au président de l'association. Renvoyé par le
              comité directeur pour faute grave. Ce renvoi, pour faute grave, ne
              peut prendre effet qu'après convocation personnelle du concerné
              par le comité directeur, en lui permettant de s'expliquer dans un
              délai limite fixe. Tout retard donne au comité directeur le
              pouvoir de prononcer et décider son renvoi."
          />
        </motion.div>
        <motion.div ref={ref8} animate={animation8} className="grid10">
          <p className="line-clamp">
            Article 10 Le décès, la démission ou le renvoi d'un des membres,
            quelle que soit sa fonction n'arrête pas l'activité de
            l'association. Le membre qui démissionne ou celui renvoyé est obligé
            de payer les cotisations antérieures et celle de l'année en cours.
          </p>
        </motion.div>
        <motion.div ref={ref11} animate={animation11}>
          <p className="line-clamp">
            Article 11 Le membre démissionnaire du comité directeur doit
            informer les autorités susnommées (L'article 6) de sa démission.
          </p>
        </motion.div>
        <motion.div ref={ref11} animate={animation11}>
          <StatusContent
            shortContent="    Article 12 Il est strictement interdit à l'association d'organiser
              des festivals dont le bénéfice financier sera distribué à ces
              membres."
            longContent="  Les recettes de l'association se composent de : La
              cotisation des membres Les dons Les galas artistiques et les
              festivals autorisés par la Loi en vigueur Les recettes et les
              intérêts sur ses biens."
          />
        </motion.div>
        <motion.div ref={ref13} animate={animation13} className="grid-item">
          <p className="p">Titre 3 : Réglementation Administrative</p>

          <StatusContent
            shortContent=" Article 13 L'association est dirigée par un comité directeur
              composé de 11 membres élus par les membres adhérents pour un
              mandat de 3 ans au cours d'une assemblée générale."
            longContent=" Ce bureau est
              composé de : Président - Vice président - Secrétaire Général -
              Secrétaire Général adjoint - Trésorier - Trésorier adjoint –
              Membre chargé des relations avec l'environnement et avec
              l'extérieur - Membre chargé des activités culturelles et de la
              communication- Membre représentant aux universités du centre -
              Membre représentant aux universités du sud. Ce comité est appelé
              également bureau exécutif et est rééligible."
          />
        </motion.div>
        <motion.div ref={ref14} animate={animation14}>
          <p className="line-clamp">
            Article 14 Tous les services octroyés par le comité directeur sont
            gratuits.
          </p>
        </motion.div>
        <motion.div ref={ref14} animate={animation14}>
          <StatusContent
            shortContent=" Article 15 Le comité directeur se réunit au moins une fois par
              mois les décisions seront prises après discussion et par la
              majorité des voix"
            longContent="a condition de la présence d'au moins du tiers
              des membres soient présents. En cas d'égalité des voies celle du
              président sera déterminante. Le Comité directeur peut se réunir
              dans une réunion extraordinaire sur la demande des 2/3 des membres
              du dit comité."
          />
        </motion.div>
        <motion.div ref={ref14} animate={animation14}>
          <StatusContent
            shortContent=" Article 16 Le comité directeur possède le pouvoir absolu d'exercer
              toutes les actions qui les concernent à l'exception des décisions
              qui relèvent de l'assemblée générale."
            longContent="Le comité directeur peut :
              Préparer le règlement intérieur de l'association Superviser
              l'adhésion et l'exclusion des membres Offrir l'adhésion honoraire
              Louer des locaux ou des meubles nécessaires à l'activité de
              l'association Fixer les salaires des employés de l'association."
          />
        </motion.div>
        <motion.div ref={ref17} animate={animation17}>
          <StatusContent
            shortContent=" Article 17 Le comité directeur peut déléguer une partie de son
              pouvoir à chacun de ces membres."
            longContent=" La décision concernant la
              délégation n'est valable que si elle est obtenue par au moins une
              majorité des deux tiers des membres du comité directeur. Par
              ailleurs, elle doit être signée par le président et au moins un
              deuxième membre, et elle sera notée sur le registre des procès
              verbaux."
          />
        </motion.div>
        <motion.div ref={ref17} animate={animation17}>
          <StatusContent
            shortContent="  Article 18 Le président : représente le comité directeur dans
              toutes les circonstances et surtout auprès des instances
              juridiques."
            longContent="Et c'est lui qui dirige le comité directeur et exécute
              ses décisions. Le Vice - Président : remplace le président mais il
              ne possède pas ses fonctions sauf sur délégation du pouvoir du
              président. Le secrétaire général : rédige les convocations et
              tient le registre des assemblées et des correspondances. Le
              secrétaire général adjoint : même prérogative que le secrétaire
              général (il le remplace en son absence). Le trésorier : est
              responsable des recettes et des dépenses et débite les opérations
              financières ordonnées par le comité directeur. Il veille au
              payement des cotisations annuelles. Il doit avoir un registre de
              comptabilité signé et doit conserver tous les justificatifs et les
              factures des dépenses qui seront présentés aux contrôles du
              ministère des finances. L'opération des recettes financières
              s'effectue par un récépissé signé par le président de
              l'association et son trésorier. Le trésorier adjoint : même
              prérogative que le trésorier (il le remplace en son absence)"
          />
        </motion.div>
        <motion.div ref={ref17} animate={animation17}>
          <StatusContent
            shortContent=" Article 19 Si l'association bénéficie d'une aide périodique de
              l'état,"
            longContent=" des collectivités régionales ou locales ou des entreprises
              publiques elle doit présenter annuellement son budget et ses
              dépenses avec tous les documents justificatifs; ces dépenses sont
              soumises obligatoirement à un contrôle annuel par les services
              d'inspection du ministère de finance. Toute somme parvenue par
              l'état ou par les collectivités publiques et non dépensée au bout
              de douze mois devra être remboursée à l'état."
          />
        </motion.div>
        <motion.div ref={ref20} animate={animation20} className="grid-item">
          <p className="p">Titre 4 : L'assemblée Générale</p>
          <p className="line-clamp">
            Article 20 L'assemblée générale est constituée par des membres
            adhérents. Elle est tenue chaque année au mois de Juin. Les membres
            adhérents sont convoqués personnellement quinze jours avant la tenue
            de l'assemblée générale par voie postale.
          </p>
        </motion.div>
        <motion.div ref={ref21} animate={animation21}>
          <StatusContent
            shortContent="  Article 21 L'assemblée générale soumise à la discussion et à
            l'approbation des rapports"
            longContent="moral et financier du comité directeur et
            elle est tenue de tous les autres points a l'ordre du jour."
          />
        </motion.div>
        <motion.div ref={ref21} animate={animation21}>
          <StatusContent
            shortContent="   Article 22 L'assemblée générale autorise l'achat des titres fonciers
            indispensables"
            longContent="aux activités de l'association après accord d'aux
            moins des deux tiers des membres inscrits."
          />
        </motion.div>
        <motion.div ref={ref21} animate={animation21} className="grid23">
          <p className="line-clamp">
            Article 23 L'assemblée générale autorise la vente des biens
            immobiliers de l'association à la majorité des 2/3 de ses membres.
          </p>
        </motion.div>
        <motion.div ref={ref24} animate={animation24}>
          <StatusContent
            shortContent="Article 24 Les décisions de l'assemblée générale ordinaire seront
            retenues à la"
            longContent="majorité des voix quel que soit le nombre des membres
            présents. Le vote est secret."
          />
        </motion.div>
        <motion.div ref={ref24} animate={animation24}>
          <StatusContent
            shortContent=" Article 25 Une assemblée générale extra - ordinaire peut être tenue
            à la demande"
            longContent="du président de l'association, ou bien sur une demande
            écrite faite au président par au moins le tiers des membres de
            l'association."
          />
        </motion.div>
        <motion.div ref={ref26} animate={animation26} className="grid-item">
          <p className="p">Titre 5 : L'Amendement du Statut</p>
          <p className="line-clamp">
            Article 26 L'amendement du statut ne peut être fait que sous les
            conditions suivantes: Sur proposition du comité directeur Sur
            demande écrite provenant d'au moins un tiers des membres adhérents
            de l'association et soumise au président de l'association.
          </p>
        </motion.div>
        <motion.div ref={ref27} animate={animation27}>
          <StatusContent
            shortContent=" Article 27 Dans les deux cas de figures sus - cités (article 26),
              l'amendement du statut doit être inscrit dans l'ordre du jour de
              l'assemblée générale ordinaire"
            longContent=" ou extra - ordinaire où siège les
              deux tiers des membres actifs. En l'absence du quorum cité dans le
              paragraphe précédent, le comité directeur doit désigner une date
              ultérieure pour la tenue d'une deuxième assemblée générale dans un
              délai de quinze jours. Les décisions de cette assemblée entrent en
              vigueur quelque soit le nombre des membres présents dans ce cas de
              figure les décisions sont prises par la majorité absolue."
          />
        </motion.div>
        <motion.div ref={ref27} animate={animation27} className="grid28">
          <p className="line-clamp">
            Article 28 Tout amendement du statut de l'association est soumis aux
            même réglementations et normes de sa création et sera annoncé comme
            le stipule l'article 5.
          </p>
        </motion.div>
        <motion.div ref={ref29} animate={animation29} className="grid-item">
          <p className="p">
            Titre 6 : Dissolution de l'Association et Liquidation de ses Biens
          </p>

          <p className="line-clamp">
            Article 29 L'annonce de la dissolution de l'association n'est
            possible qu'après avoir respecté les exigences des articles 26 et
            27.
          </p>
        </motion.div>
        <motion.div ref={ref30} animate={animation30} className="grid30">
          <p className="line-clamp">
            Article 30 En cas de dissolution de l'association, le devenir de ses
            biens est décidé par l'assemblée générale tenue pour cet effet et
            soumis aux obligations de la Loi en vigueur selon les quelles le
            reste de l'argent provenant de l'aide de l'état devra être remboursé
            au trésor de l'état.
          </p>
        </motion.div>
      </Stack>
      <Button
        variant="dark"
        onClick={() => setvoirPlus(!voirPlus)}
        size="sm"
        style={{
          margin: "auto",
          alignSelf: "center",
          display: "flex",
          marginTop: "2%",
          marginBottom: "5%",
          width: "80%",
          padding: "20px",
          display: "flex",
          justifyContent: "center",
          fontSize: 20,
        }}
      >
        {voirPlus ? "See more" : "See less"}
      </Button>
    </>
  );
};

export default Status;

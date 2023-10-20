export function Sections(props) {
    return (
        <React.Fragment>
            <SectionFadeIn title="COMMUNITY" css_element="bg-custom-dark">
            <Thumbnails header="VR">
              Téléportez-vous et explorez en toute liberté de nouveaux mondes virtuels, que ce soit en jouant, en développant des applications/jeux/... ou bien en regardant des vidéos.
              Bon ça ne sera pas une expérience comme SAO, mais on pourrait s'y croire.
            </Thumbnails>
            <Thumbnails header="Casque EEG">
              L'association dispose d'un électroencéphalogramme simplifié se focalisant sur le lobe frontal et pariétal. Mais c'est quoi ce charabia, cela permet de capter les ondes cérébrales sur les parties moteurs et émotionnelles.
            </Thumbnails>
            <Thumbnails header="Tablettes Graphiques">
              L'association dispose de deux tablettes graphiques utilisées lors des événements comme les GameJams, Ludums ou pour nos créations graphiques.
              Si cela vous tente, venez les tester ou participer à nos événements et réalisez vos propres créations.
            </Thumbnails>
        </SectionFadeIn>

        <SectionFadeIn title="FEATURES" css_element="bg-custom-grey fade-in-element from-bottom">
            <Thumbnails header="LAN">
              Au cours de l'année, l'association organise des LANs se déroulant NON-STOP de 20h le vendredi à 20h le dimanche.
              Que vous soyez seul, en groupe, costumé, curieux, venez nous rejoindre lors de ces événements.
              Tout type de jeux est abordé, LoL, Factorio, 7DtoD, StartCraft II, OverWatch, ....., nos amis les consoles le sont aussi (Switch, Wii, ...), comme les jeux de plateau, de carte et de rôle.
              Une buvette est tenue au profit de l'association pour vous sustenter.
              Alors n'hésitez plus il y en a pour tous les goûts.
            </Thumbnails>
            <Thumbnails header="GameJam" >
              Une game jam est un hackathon avec pour thème principal les jeux vidéos, mais pouvant aussi porter sur les jeux au sens large. Les participants, groupés en équipes, doivent créer un jeu dans un temps limité, généralement le temps d'un week-end, sur 24 à 72h, mais cela peu aussi bien se dérouler sur une semaine.
              L'association en organise de temps à autre notamment lors des Ludums, si vous voulez participer n'hésitez pas à nous contacter, les informations serons mises sur nos réseaux sociaux.
            </Thumbnails>
            <Thumbnails header="Réparation Informatiques">
              Que vous ayez un problème logiciel ou matériel, l'association vous propose de vous aider à réparer votre ordinateur/tablette/raspberry pi/téléphone/... chaque mercredi après-midi à partir de 14h
              (Vous pouvez prendre contact par mail ou sur nos réseaux sociaux pour nous signaler votre problème)

            </Thumbnails>
            </SectionFadeIn>
        </React.Fragment>
    )
}

export default Sections;
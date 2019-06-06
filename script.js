const circles = document.querySelectorAll('.circles')

let limbField = document.getElementById('limb-field')

let description = document.getElementById('description')

let titre = document.getElementById('titre')

console.log()

const ecyclopedie = {
    "Epaule": "L'épaule (nom féminin) est la région morphologique se situant à la jonction du tronc avec le membre supérieur<br>Elle comporte plusieurs articulations qui concourent à en faire le complexe articulaire le plus mobile du corps humain. Elle permet d'orienter le membre supérieur dans l'espace, autorisant en particulier son extrémité effectrice, la main, à assurer ses rôles de préhension et de communication avec l'environnement situé à sa portée. ",
    "Coude": "Le coude (ou articulation olécranienne) est la partie du membre supérieur située entre le bras et l'avant-bras. Cette articulation comprend en avant la région du « pli du coude » (ou dedans de coude). C'est un complexe articulaire synovial du membre supérieur humain reliant le bras à l'avant-bras. Il unit ainsi trois os entre eux : le radius, l'ulna (cubitus) et l'humérus.<br>Elle est la réunion de trois articulations : huméro-ulnaire, huméro-radiale et radio-ulnaire proximale (supérieure). Lorsque l'avant-bras est tendu (extension complète), le bras et l'avant-bras ne sont pas alignés dans le plan frontal. Les deux parties forment un angle ouvert en dehors, d'environ 170° chez l'homme, 160° chez la femme ; c'est ce qui est appelé le valgus physiologique (on retrouve la même chose pour le genou). ",
    "Main": "La main (du latin : manus, « côté du corps1 ») est l’organe préhensile effecteur situé à l’extrémité de l’avant-bras et relié à ce dernier par le poignet. C'est un organe capable notamment de saisir et manipuler des objets. Chez l'homme, la main est un organe extrêmement développé et important, elle dispose d'une palette d'actions très large. Située à l'extrémité des deux membres supérieurs, chaque main possède cinq doigts qui apportent une contribution majeure au sens du toucher. <br>Elle est également un moyen d’expression quand elle complète la parole, ou sert d'articulateur en langue des signes. ",
    "Cuisse": "Chez les animaux, la cuisse désigne le segment supérieur du membre inférieur ou le haut de la patte, articulée à la hanche, souvent plus musculeux ou plus épais. Mais la cuisse du poulet, de l'humain, du cheval, du mouton (gigot), d'un bovin (culotte), d'un porc (jambon) d'un caprin ou d'un cervidé (cuissot) diffèrent notablement par leurs formes et aspects extérieurs. La fonction des cuisses est essentiellement locomotrice. L'adjectif en rapport est fémoral (ou crural en ancienne nomenclature).",
    "Genou": "Le genou est une articulation qui permet de joindre la jambe à la cuisse. Elle met en jeu trois os, le fémur, le tibia et la patella, par le biais de trois articulations, l'articulation fémoro-patellaire et la double articulation fémoro-tibiale. Le cartilage assure la fluidité des mouvements du genou. Le tissu élastique fin, le cartilage, protège l'os et fait en sorte que les surfaces de l'articulation glissent facilement les unes contre les autres. Le genou renferme deux types de cartilages articulaires: le cartilage fibreux (ménisque) et le cartilage hyalin. Le cartilage s'use non seulement au fil des ans, mais aussi en fonction de son utilisation. Le cartilage possède en outre une capacité de régénération limitée. La faible capacité de régénération du cartilage s'explique par l'absence de vaisseaux sanguins qui permettent un métabolisme important. Le tissu cicatriciel se compose essentiellement de cartilage fibreux, de moins bonne qualité que le cartilage hyalin d'origine. Par conséquent, de nouvelles déchirures et fissures apparaissent dans le cartilage après un certain temps.<br>Le genou présente un angle naturel de 170 à 175° en externe environ, appelé valgus physiologique, dû au décalage entre l'axe de la jambe (tibia-fibula) quasi vertical, et celui du fémur légèrement oblique à cause de la longueur du col portant sa tête. Un valgus trop important sera qualifié de Genu Varum pour un angle trop important (genou arqués) ou de Genu Valgum pour un angle trop faible (genou \"qui se touchent\") ",
    "Pied": "Le pied est la partie distale du membre inférieur de l'homme. Il est relié à la jambe par l'articulation de la cheville. Il supporte le poids du corps en position debout et permet la locomotion.<br>Premier élément au contact avec le sol — en position anatomique —, Il assure un rôle essentiel dans l'équilibre, l'amortissement et la propulsion.<br>Le pied adulte comprend 26 os — soit, pour les deux pieds, le quart de ceux composant l'ensemble du squelette humain —, 16 articulations, 107 ligaments assurant leur protection et limitant la mobilité, 20 muscles qui permettent leur mouvement.<br>Une des spécialités paramédicales s'occupant du pied est la podologie, le praticien étant appelé pédicure-podologue2, le podo-orthésiste réalise l'appareillage (semelles et chaussures orthopédiques). Les médecins spécialisés sont podiatres (Canada et États-Unis), rhumatologues, ou encore chirurgiens orthopédistes et traumatologues. "
}

const limbNames = Object.keys(ecyclopedie)

circles.forEach(circle => {

    circle.addEventListener('mouseover', function () {

        circle.classList.add('red')

        let limb = circle.getAttribute('id')

        switch (limb) {

            case 'shoulder':
                
                limbField.innerHTML = limbNames.filter( (name) =>  { return name === "Epaule" } )+":"

                description.innerHTML = ecyclopedie.Epaule

                break;
            case 'elbow':

                    limbField.innerHTML = limbNames.filter( (name) =>  { return name === "Coude" } )+":"

                    description.innerHTML = ecyclopedie.Coude

                break;
            case 'hand':

                    limbField.innerHTML = limbNames.filter( (name) =>  { return name === "Main" } )+":"

                    description.innerHTML = ecyclopedie.Main

                break;
            case 'thigh':

                    limbField.innerHTML = limbNames.filter( (name) =>  { return name === "Cuisse" } )+":"

                    description.innerHTML = ecyclopedie.Cuisse
                    
                break;
            case 'knee':

                    limbField.innerHTML = limbNames.filter( (name) =>  { return name === "Genou" } )+":"

                    description.innerHTML = ecyclopedie.Genou

                break;
            case 'foot':

                    limbField.innerHTML = limbNames.filter( (name) =>  { return name === "Pied" } )+":"

                    description.innerHTML = ecyclopedie.Pied
                break;

            default:
                break;
        }
    })
})

circles.forEach(circle => {
    circle.addEventListener('mouseout', function() {
        circle.classList.remove('red')
    })
}
)
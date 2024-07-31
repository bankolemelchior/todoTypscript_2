Il faut compiler le code ts en js avec la commande tsc nom_du_fichier

la commande tsc pour avoir les différentes options qu'on peut utiliser lors de la compilation

Pour générer un fichier de configuration, on va faire tsc --init

/**
any: type qui accepte toute sorte de valeur
undefined
null
 */

 ctr + ; => pour ajouter dynamiquement les propriétés d'un type objet.



## Modificateurs d'Accès (Access Modifiers)
TypeScript introduit les modificateurs d'accès public, private, et protected qui n'existent pas nativement en JavaScript. Ils permettent de contrôler la visibilité des membres de la classe.
TypeScript offre trois modificateurs d'accès :

public : accessible de n'importe où.
private : accessible uniquement dans la classe où il est défini.
protected : accessible dans la classe où il est défini et dans les classes dérivées.

---
slug: displaying-dynamic-value-wordpress-elementor
title: Utilisation des shortcode de WordPress pour l'affichage de value dynamic dans Elementor
authors: [bocovo]
tags: [wordpress, elementor, shortcode]
---

Dans un site WordPress, il arrive souvent que vous ayez besoin d’afficher des valeurs dynamiques, c’est-à-dire des informations calculées ou générées automatiquement en fonction de certaines conditions. 
Si vous utilisez Elementor pour concevoir vos pages, il existe plusieurs méthodes pour intégrer ces valeurs dans vos widgets. L’une des plus simples et des plus puissantes consiste à utiliser les **shortcodes** de WordPress.

Les shortcodes permettent de créer du contenu dynamique que vous pouvez réutiliser facilement dans vos pages, articles, ou même dans les widgets Elementor. Que vous souhaitiez afficher une date, une différence de valeur (comme le nombre d'années d'exercice d'une entreprise), un prix calculé ou des données provenant d’un champ personnalisé, les shortcodes offrent une solution flexible et rapide.

## Créer un shortcode pour afficher une valeur dynamique

Prenons un exemple où nous voulons afficher le nombre d'années d'exercice de l'entreprise, sachant que celle-ci a été créée en 2019. Pour obtenir ce nombre, nous devons simplement soustraire l'année 2019 de l'année en cours. Nous allons créer un shortcode dans WordPress pour effectuer cette tâche.

### Étape 1 : Déclaration du shortcode

La déclaration du shortcode se fait en PHP. La façon la plus simple est de le déclarer dans le fichier `functions.php` du thème, mais cela peut être **écrasé en cas de mise à jour** du thème. Une alternative est de le faire dans le fichier `functions.php` d’un **thème enfant**, si votre configuration WordPress en possède un. Cependant, tous les sites n'utilisent pas de thème enfant.

Une troisième option consiste à utiliser un plugin qui permet d’ajouter du code PHP personnalisé. Un plugin recommandé pour cela est **Custom CSS, JS & PHP**.

Après l’installation, allez depuis le backoffice WP dans **Outils > Custom PHP** pour ajouter du code PHP personnalisé.

Pour notre exemple, voici le code à ajouter :

```php
<?php

function get_number_of_years_in_business() {
    $annee_string = date("Y");
    $annee_int = (int) $annee_string;
    return $annee_int - 2019;
}

add_shortcode('number_of_years_in_business', 'get_number_of_years_in_business');
```

### Explication du code

1. Nous déclarons une fonction `get_number_of_years_in_business` qui calcule le nombre d'années d'exercice de l'entreprise et nous le retourne.
2. L'appel de la fonction `add_shortcode` de WordPress nous permet d'enregistrer le shortcode sous le nom `number_of_years_in_business` et de définir `get_number_of_years_in_business` comme fonction associée.

### Étape 2 : Utiliser le shortcode dans Elementor

Après avoir créé le shortcode, vous pouvez l'utiliser directement dans un widget Texte ou HTML d'Elementor. Par exemple, dans un widget Texte, vous pouvez insérer le shortcode suivant :

```txt
[number_of_years_in_business]
```

Vous pouvez suivre ce lien pour voir plus en détail comment ajouter un shortcode dans Elementor : <https://elementor.com/help/dynamic-shortcode-pro/>

Lorsque vous affichez la page sur le front-end, Elementor interprétera le shortcode et affichera le nombre d'années d'exercice de l'entreprise.

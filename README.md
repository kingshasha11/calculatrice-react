# Calculatrice Interactive - React.js

Une application de calculatrice moderne construite avec **React**, permettant d'effectuer des opérations arithmétiques standards avec une gestion fluide de l'affichage et des corrections.

## Fonctionnalités

- **Opérations de base** : Addition, Soustraction, Multiplication et Division.
- **Enchaînement de calculs** : Possibilité d'enchaîner les opérations (ex: `10 + 5 + 3`) sans avoir à appuyer sur `=` entre chaque étape.
- **Correction** : Suppression des caractères saisis
- **Gestion des erreurs** : Message d'alerte en cas de division par zéro.
- **Historique visuel** : L'écran affiche l'intégralité de l'opération en cours pour une meilleure lisibilité.

## Technologies Utilisées

*   **React 18** : Utilisation intensive des `Hooks` (`useState`) pour la gestion d'état complexe.
*   **JavaScript (ES6+)** : Logique de calcul et manipulation des chaînes de caractères.
*   **CSS3** : Design responsive avec Flexbox/Grid pour le pavé numérique.

## Installation et Lancement

Pour tester le projet localement :

1.  **Cloner le dépôt**
    ```bash
    git clone [https://github.com/kingshasha11/calculatrice-react.git](https://github.com/kingshasha11/calculatrice-react.git)
    ```

2.  **Installer les dépendances**
    ```bash
    npm install
    ```

3.  **Lancer l'application**
    ```bash
    npm start
    ```
    L'application s'ouvrira automatiquement sur `http://localhost:3000`.

## Logique de Développement

Le développement de cette calculatrice s'est concentré sur deux défis majeurs :

1.  **Gestion des États (States)** : Séparation stricte entre la valeur affichée (`display`) et les valeurs numériques de calcul (`firstValue`, `secValue`) pour garantir la précision des résultats.
2.  **Expérience Utilisateur (UX)** : Implémentation d'une fonction `backspace` robuste capable de naviguer en arrière dans l'historique de saisie tout en mettant à jour la logique mathématique sous-jacente.

**Autheur**
Louis-David Mvemba

Etudiant ingénieur en Data et IA

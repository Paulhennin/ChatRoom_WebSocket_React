# Suite 2
Challenge : Chat en NodeJS

Du front, du front, du front.
En vanilla, avec React, avec Redux, avec React-Redux… 😱

On fait une pause, et on fait un peu de back 😋

Le but du jeu, c'est de créer une chatroom avec NodeJS et Socket.io.

Le back est propulsé par NodeJS, à l'aide d'Express pour le serveur web, et Socket.io pour le websocket.
Instructions

Le site de présentation de Socket.io contient un tutorial pour découvrir pas à pas comment mettre en place un tel serveur, ainsi que le bout de front-end nécessaire pour tester l'application.

Ça se passe par ici : https://socket.io/get-started/chat/
Conseils
Nodemon

Le tutorial vous fait utiliser la commande node monFicher.js pour lancer votre serveur. Contrairement à PHP, il faudra redémarrer le serveur à chaque fois que le fichier change. Pour un site en production, ce n'est pas genant. Pour le développement en revanche, c'est casse pied d'aller killer le serveur (Ctrl + C) et de le relancer à chaque fois.

Il existe donc nodemon, qui permet de faire un "démon" (watch) : chaque fois que vous sauvegardez votre fichier, il coupe et relance le serveur 😃

Pour l'installer :

sudo npm install -g nodemon

Il suffira alors de lancer nodemon monFicher.js pour lancer votre serveur.
ES2015

N'essayez pas d'utiliser d'ES2015 ou d'utiliser le modèle pour compiler votre code NodeJS. Non pas que ne soit pas possible, mais c'est pas si simple :)

Bref, un peu d'ES5 ne fait jamais de mal !

--------------------------------
--------------------------------
--------------------------------
--------------------------------
--------------------------------
--------------------------------
--------------------------------
--------------------------------
--------------------------------
--------------------------------
--------------------------------

# suite
# Chatroom : Settings

> En travaillant sur le repo du projet `chatroom`

Ça commence à être vraiment sympa comme appli.

React, Redux, containers :tada: c'est vraiment cool; mais pour le moment le pseudo n'est pas top :/

On va prévoir ce qu'il nous faut pour la suite en ajoutant un formulaire de connexion.


## Créer le composant

- Créer un composant `Settings`
- Il contient un bouton qui servira à ouvrir/fermer la zone de settings
- Il contient un formulaire avec un champ email, un champ mot de passe et un bouton pour soumettre le formulaire
- On positionne la zone de settings en `fixed` en haut à droite de notre chatroom

![resultat](resultat.png)

## Gérer l'ouverture et la fermeture

- Dans l'état de notre application, on veut gérer l'état ouvert/fermé
- Au clic sur la croix on veut changer cet état
- Modifie ton composant, crée un container et l'action qui va bien et adapte le reducer pour accomplir cet objectif

![resultat](suite.gif)

## Champs contrôlés

Fais en sorte que les valeurs des 2 champs soient contrôlés par ton state

Ainsi on pourra facilement connaître les valeurs de ces champs pour gérer la connexion au prochain épisode :tada:

---

<details>
  <summary>
    Bonus : Un peu de CSS
  </summary>

## Animation

Fais en sorte d'avoir une transition sur l'affichage du formulaire, adapte ton code et exploite CSS pour cela

![resultat](bonus.gif)

</details>

---

<details>
  <summary>
    Super bonus
  </summary>

- Créer un composant `Field` configurable via les props pour gérer les champs email et password
- Créer un container pour ce composant pour gérer nos champs contrôlés
- Gérer la modification de la valeur du champ via une seule et même action pour toutes les instances du composant `Field` :boom:

</details>


# Chatroom

On va construire un chat entièrement fonctionnel :scream:  
Pas de panique on va y aller étape par étape, ce soir on commence par pouvoir envoyer un message en utilisant redux.  
On verra demain pour qu'on puisse nous répondre, tant pis si on parle tout seul pendant quelque temps :smile:

## Résultat

![résultat](result.png)

## Styles

On part au plus simple pour commencer, on peaufinera ensuite ;)

## Fonctionnalités

On doit pouvoir

- Saisir un message dans le champ du bas
- On doit pouvoir soumettre ce message
- Il doit apparaître dans la liste des messages au-dessus, avec un nom d'auteur par défaut

Bien sûr **tu dois** utiliser **redux** et **react-redux** pour gérer tes données et tes actions

## Enoncé Aventurier 

- Tout est dit :arrow_up:

## Enoncé Guidé

<details>
  <summary>
    Quelques pistes
  </summary>

Objectif : construire la ChatRoom

1 - **Config**: Récupération des outils et de la config
  - On récupère le modèle
  - On installe les dépendances

2 -  **Render**: Instanciation du composant racine et rendu dans le DOM réel
  - On vérifie qu'on fait bien le rendu d'un élément React dans le DOM avec le `render` de ReactDom


3 - **Découpage**: dans le composant racine on identifie les zones principales de l'appli
  - On peut nommer le composant racine `App` ou `Chat` (ou autre au choix), il contiendra un listing de messages et une zone de formulaire

4 - **Composants**: reponsables de la représentation d'un fragment d'interface
  - On décrit un composant `Form` pour le formulaire
  - On décrit un composant `Messages` pour le listing des messages
  - On décrit un composant `Message` pour le contenu d'un message

5 - **Props**: configuration des composants via les props
  - Le composant `Messages` transpose une liste de messages vers une représentation.
    - On prépare un tableau de messages bidons pour tester (par exemple dans le composant racine) et on le passe via les props au composant
    - Dans le composant on récupère les props, on les valide et on s'en sert pour instancier un `Message` par message du tableau
  - Le composant `Message` transpose une chaîne de caractère représentant un message vers une représentation
    - On passe une prop à l'instanciation des `Message` dans `Messages`
    - Dans le composant on récupère la prop, on la valide et on s'en sert

6 - **Store**: détenteur de la vérité 
  - On installe Redux
  - On crée le store, le gardien du state, pour cela aide-toi du code produit en cours dans le dossier `store`

  - <details><summary>Solution pour créer le store</summary>

      ```js
      import { createStore } from 'redux';

      import reducer from 'chemin/vers/reducer';

      const store = createStore(reducer);

      export default store;
      ```
    </details>

  - **Reducer**: fonction pour qui sait retourner un nouveau state en fonction d'une action
    - On crée le reducer à fournir au store, pour le moment il ne gère aucune action, pour cela aide-toi du reducer codé en cours
  - **State initial**: données représentant l'état initial de notre application
    - Il nous faut la liste des messages initiaux dans le state
  - <details><summary>Solution pour créer le reducer</summary>

    ```js
    const initialState = {
      /* 
        ranger les messages initiaux dans le state
      */
    };

    const reducer = (state = initialState, action = {}) => {
      switch (action.type) {
        default:
          return state;
      }
    }

    export default reducer;
    ```
    </details>

7 - **Provider**: diffuseur du store
  - Notre store est notre interface pour dialoguer avec le state, on le veut partout
   - On installe React-Redux
   - On instancie le composant `Provider` à la racine de notre application, on passe le composant racine en enfant du provider
   - On importe le store pour la passer en prop au provider
   - Pense toujours à regarder les exemples du jour

8 - **Container** - _mapStateToProps_ : branchement en lecture
  - On ne passe plus la listes des messages à l'instanciation de `Messages`
  - On a d'un côté le store avec notre state contenant la liste des messages, de l'autre notre composant `Messages` prêt à recevoir les messages, on passe les infos de l'un à l'autre via le container
  - Comme toujours va voir le code du jour pour retrouver comment utiliser `connect` fourni par react-redux pour créer ton container
  - On n'oublie pas d'instancier le container et pas directement le composant
  - <details><summary>Exemple d'un container</summary>

      ```js
      // on importe connect et notre composant
      import { connect } from 'react-redux';
      import MonComposant from 'src/components/MonComposant';

      // on prépare une fonction qui reçoit le state et retourne un objet de props
      const mapStateToProps = (state) => ({
        uneProp: state.uneInfo,
      });

      // on aura peut-être par la suite besoin de dispatch mais pas pour l'instant
      const mapDispatchToProps = () => ({});

      // on exporte ce que nous renvoie connect, c'est à dire le composant enrichi de props
      // on passe à connect nos fonctions pour préparer les objets de props puis le composant
      export default connect(mapStateToProps, mapDispatchToProps)(MonComposant);
      ```
    </details>

Notre application sait afficher correctement des messages, il faut maintenant pouvoir en ajouter, on prépare un champ contrôlé puis on gère la soumission du formulaire

On fait en sorte que la `value` du champ de notre composant `Form` dépende du state
  - On définit une valeur initiale dans notre state initial
  - On reprend l'étape 8 pour créer une container pour le formulaire
  - On reçoit une prop pour la valeur du champ dans le composant `Form`, on s'en sert

Puis il faut pouvoir modifier la valeur de ce champ, pour cela on passe à l'étape 9

9 - **Containers** - _mapDispatchToProps_ : émission d'intentions 
  - **Event**: dans les composants on réagit à des interactions
    - On ajoute un écouteur via une prop `onClick`, `onSubmit`, `onChange`, ... dans le composant
    - <details><summary>Un peu d'aide</summary>

        ```jsx
        // mon composant
        const Composant = () => {
          const handleChange = (event) => {
            console.log(event.value);
            // Ici j'ai l'intention de changer la valeur du champ
          }

          return (
            <form>
              <input onChange={handleChange} />
            </form>
          );
        };
        ```
      </details>
    - Oui mais quoi faire quand l'event à lieu ? on va émettre une intention :arrow_down:
  - **Dispatch d'une Action**: émission d'une intention
    - Via mapDispatchToProps dans le container on passe une fonction en prop au composant
    - On commence avec un `console.log` dans cette fonction pour voir si tout va bien
    - On reçoit cette fonction dans le composant via les props, on l'execute dans notre handler
    - Une fois qu'on a correctement vu notre message en console en réponse à l'évenement, on va dispatcher l'action
    - on prépare l'**action type** et l'**action creator** qui vont bien  
    - <details><summary>Un exemple ?</summary>
  
        ```js
        const ACTION_TYPE = 'ACTION TYPE';

        const actionCreator = (payload) => ({
          type: ACTION_TYPE,
          payload
        });
        ```
      </details>
    - dans le container on importe l'action creator, on s'en sert pour créer l'objet action et on dispatch
    - <details><summary>Un exemple ?</summary>
  
        ```js
        const mapStateToProps = (dispatch) => ({
          uneProp: (unParam) => {
            const action = actionCreator(unParam);
            dispatch(action);
          }
        });
        ```
      </details>
    - L'intention est émise, plus qu'à la traduire dans les faits
  - **Reducer** = un traducteur d'intentions
    - Dispatcher, c'est appeler la méthode dispatch du store. On fait donc travailler notre store qui va appeler le reducer et lui passer l'action pour savoir comment le state doit évoluer
    - On ajoute un `case` dans notre reducer pour gérer le cas de cette action et décrire comment devra évoluer le state en fonction de l'action
    - On n'oublie pas d'importer l'action type qui va bien
    - <details><summary>Un exemple ?</summary>
  
        ```js
          const reducer = (state = initialState, action = {}) => {
            switch (action.type) {
              case ACTION_TYPE:
                return {
                  ...state,
                  modif: 'truc',
                }
              default:
                return state;
            }
          };
        ```
      </details>

On reprend l'étape 9 pour gérer la soumission

</details>
<br>

---

## Bonus


<details>
  <summary>
    S'il te reste du jus, un peu de css ?
  </summary>

### On peaufine

Rapproche toi de la capture ci dessous en retravaillant tes styles

![résultat](bonus.png)



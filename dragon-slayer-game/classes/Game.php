<?php

require_once 'Angel.php';
require_once 'Warrior.php';
require_once 'Wizard.php';
require_once 'Dragon.php';

const DIFFICULTY_EASY   = 'facile';
const DIFFICULTY_HARD   = 'difficile';
const DIFFICULTY_NORMAL = 'normal';


// Classe représentant le jeu en lui-même

/*
 * Cette classe est l'élément central du programme : elle manipule notamment le joueur
 * et le monstre pour qu'ils se battent jusqu'à la mort. Elle doit les instancier,
 * les initialiser, les "faire jouer" et obtenir des résultats : une liste de messages
 * générés pendant le jeu et l'image du vainqueur final.
 */
class Game{

    public $player;
    public $dragonBlack;
    public $dragonRed;
    public $dragonGreen;
    public $tabMessage = [];
    public $tabImage = [];

    public function __construct($difficulty, $playerName, $playerType)
    {
        array_push($this->tabMessage, 'Demarrage du jeu en mode ' . $difficulty . ' !<br>');

        $pvPlayer = rand(100, 150);
        //instancaition de la classes
        
        switch($playerType){
            case 'ange':
                $this->player = new Angel($playerName, $playerType, $pvPlayer);
                break;
            case 'guerrier':
                $this->player = new Warrior($playerName, $playerType, $pvPlayer);
                break;
            case 'magicien':
                $this->player = new Wizard($playerName, $playerType, $pvPlayer);
                break;
        }
        //appel de la function qui retourne la phrase de presentation pour la stocker dans le tableau
        $this->tabMessage[] = $this->player->presentation();
        
        $maxLife = 150;
        switch($difficulty){
            case 'facile':
                $maxLife = 150;
                break;
            case 'normal':
                $maxLife = 200;
                break;
            case 'difficile':
                $maxLife = 250;
                break;
            default:
                $maxLife = 150;
                break;
        }

        $pvDragon = rand(100, $maxLife);
        //instanciation du dragon
        $this->dragonBlack = new Dragon("Dragon des montagnes", $pvDragon, "Noir", "black-dragon");
        $this->dragonRed = new Dragon("Dragon des lacs", $pvDragon, "Rouge", "bone-dragon");
        $this->dragonGreen = new Dragon("Dragon des Rocheuses", $pvDragon, "Vert", "green-dragon");
        //je pousse la chaine qui est retournée par la function dans le tableau
        array_push($this->tabMessage, $this->dragonBlack->presentation());
        array_push($this->tabMessage, $this->dragonRed->presentation());
        array_push($this->tabMessage, $this->dragonGreen->presentation());
    }

    //ici je vais faire une fonction deroulerDuCombat()
    function startGame(){

        $tabDragon = [$this->dragonBlack, $this->dragonGreen, $this->dragonRed];

        //boucle while pour dire
        //tant que mon combatant est en vie et que une des dragon est en vie
        while($this->player->pv > 0 && count($tabDragon) > 0){

            //random pour determiner qui des deux va attaquer
            $aleatoire = rand(0, 1);

            //random pour determier le nombre de point d'attaque
            $pAttack = rand(10, 30);

            //random index sur le tableau de s dragons
            $whichDragon = rand(0, count($tabDragon) - 1);
            //on recuperer le dragon avec l'index aleatoire
            $dragon = $tabDragon[$whichDragon];

            if($aleatoire == 1){

                $attackAleatoire = rand(0, 2);
                switch($attackAleatoire){
                    case 0:
                        //attaque classique
                        $dragon->pv -= $pAttack;
                        break;
                    case 1:
                        //attaque personnaliser
                        //la function specificAttack Decrement les pv du dragon
                        //et renvoi une chaine de caractere que je mets dans le tablea tabMessage
                        $this->tabMessage[] = $this->player->specificAttack($dragon);
                        break;
                    case 2:
                        //attaque fatale
                        $this->tabMessage[] = $this->player->fatalAttack($dragon);
                        break;
                }
                
            }else{

                $this->tabMessage[] = 'le '.$dragon->name.' attaque avec le soufle et inflige '.$pAttack.' points de degats<br />';
                //j'eneleve les pv de la victime 
                $this->player->pv -= $pAttack;
            }   
            
            //on test si le dragon n'as plus de vie
            //on l'enleve du tableau des dragons
            if($dragon->pv <= 0){
                array_splice($tabDragon, $whichDragon, 1);
                $this->tabMessage[] = $dragon->name . ' est mort'; 
            }

        }
        //fin de boucle While

        //une condition pour afficher l'image du vainqueur
        if($this->player->pv <= 0){
            //le dragon qui gagne
            $this->tabMessage[] = 'Le dragon a gagné';
            foreach($tabDragon as $dragon){
                $this->tabImage[] = $dragon->image;
            }
        }else{
            //le joueur qui gagne
            $this->tabMessage[] = $this->player->name .' a gagné';

            //tableau de corespondance pour obtenir les nom des images en anglais
            //en fonction des index prevenant du formulaire
            $tabImage = [
                'ange' => 'angel',
                'guerrier' => 'warrior',
                'magicien' => 'wizard'
            ];

            //je met le nom de l'image grace aux valeur du tableau
            $this->tabImage[] = $tabImage[$this->player->type];

        }

    }


}
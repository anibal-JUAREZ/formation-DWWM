<?php

require_once 'Player.php';

class Wizard extends Player {

    public function specificAttack($dragon){
        $newPv = rand(20,30);
        $this->pv += $newPv;
        return 'Le Magicien a lance sont attaque spéciale (<span style="color:orange;">Il a regagner '.$newPv.' pv</span>)';
    }
}
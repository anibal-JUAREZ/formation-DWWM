<?php

require_once 'Player.php';

class Angel extends Player {

    public function specificAttack($dragon){
        $dragon->pv -= rand(20, 30);
        return 'L\'ange a lance sont attque spéciale (<span style="color:orange;">Fleche de lumiere</span>)';
        
    }
    
}
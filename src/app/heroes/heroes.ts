import { Component } from '@angular/core';
import { Hero } from '../hero';

import { HEROES } from '../mock-heroes';
import { HeroDetail } from '../hero-detail/hero-detail';

@Component({
  selector: 'app-heroes',
  imports: [HeroDetail],
  templateUrl: './heroes.html',
  styleUrl: './heroes.css',
})
export class Heroes {
  hero: Hero = {
    id: 1,
    name: 'Widstorm',
  };

  heroes = HEROES;

  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}

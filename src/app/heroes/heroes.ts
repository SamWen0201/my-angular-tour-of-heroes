import { Component } from '@angular/core';
import { Hero } from '../models/hero';
import { HeroDetail } from '../hero-detail/hero-detail';
import { HeroService } from '../hero-service';

import { MessageService } from '../message-service';

@Component({
  selector: 'app-heroes',
  imports: [HeroDetail],
  templateUrl: './heroes.html',
  styleUrl: './heroes.css',
})
export class Heroes {
  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}
  heroes: Hero[] = [];

  // 過去的同步式方法
  //   getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
}

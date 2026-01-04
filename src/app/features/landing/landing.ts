import { Component } from '@angular/core';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';

@Component({
  selector: 'app-landing',
  imports: [Footer, Header, Hero],
  templateUrl: './landing.html'
})
export class Landing {

}

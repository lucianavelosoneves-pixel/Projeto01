import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Main } from './main/main';  

@Component({
  imports: [RouterOutlet, Header, Footer, Main],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Main], // <-- Adiciona o Main (ou MainComponent) aqui
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Genealogia');
}

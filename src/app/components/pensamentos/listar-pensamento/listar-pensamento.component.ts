import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent {
  // criando atributo lista de pensamentos para serem loopados com ngFor e renderizados no mural
  listaPensamentos = [
    {
      conteudo: 'Passo informações para o componente filho',
      autoria: 'Componente pai',
      modelo: 'modelo3'
    },
    {
      conteudo: 'Minha propriedade é decorada com @Input()',
      autoria: 'Componente filho',
      modelo: 'modelo1'
    },
    {
      conteudo: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, fugit recusandae. Atque, delectus eveniet quos reiciendis ex assumenda officiis minima voluptatum modi rem. Adipisci, non nulla modi architecto fuga unde. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde ut blanditiis nihil modi rerum animi, nisi libero sunt veritatis ipsum laboriosam odio est culpa omnis nostrum odit tempora facere voluptas?',
      autoria: 'Fulaninho',
      modelo: 'modelo2'
    }
  ];
}

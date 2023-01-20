import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent {
  // @Input diz que a prop pensamento vai receber info do componente pai
  @Input() pensamento = {
    conteudo: 'I Love Angular',
    autoria: 'Angela Caldas',
    modelo: 'modelo3'
  };
}

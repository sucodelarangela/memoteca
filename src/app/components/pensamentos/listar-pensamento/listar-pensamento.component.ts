import { PensamentoService } from './../pensamento.service';
import { IPensamento } from './../pensamento';
import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent {
  // criando atributo lista de pensamentos para serem loopados com ngFor e renderizados no mural
  listaPensamentos: IPensamento[] = [];

  // recebendo os métodos do service
  constructor(private service: PensamentoService) { }

  // o ngOnInit faz parte do ciclo de vida do componente. Toda lógica que deve ser executada quando o componente for carregado, vai dentro dele
  ngOnInit(): void {
    this.service.listar().subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos;
    });
  }
}

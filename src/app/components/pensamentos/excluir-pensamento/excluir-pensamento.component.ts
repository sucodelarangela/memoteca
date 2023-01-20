import { ActivatedRoute, Router } from '@angular/router';
import { PensamentoService } from './../pensamento.service';
import { IPensamento } from './../pensamento';
import { Component } from '@angular/core';

@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrls: ['./excluir-pensamento.component.css']
})
export class ExcluirPensamentoComponent {
  pensamento: IPensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
  };

  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // snapshot tira um print do Pensamento naquele momento e paraMap mapeia as informações que o Pensamento possui. Daí queremos pegar o id
    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscarPorId(parseInt(id!)).subscribe((pensamento) => {
      this.pensamento = pensamento;
    });
  }

  excluirPensamento() {
    if (this.pensamento.id) {
      this.service.excluir(this.pensamento.id).subscribe(() => {
        this.router.navigate(['/listarPensamento']);
      });
    }
  }

  cancelar() {
    this.router.navigate(['/listarPensamento']);
  }
}

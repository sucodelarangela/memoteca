import { IPensamento } from './pensamento';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Esse decorator sinaliza que essa é uma classe injetável, que pode ser utilizado em outros componentes, em outras classes através de "Injeção de Dependência"
@Injectable({
  providedIn: 'root' // esse serviço está sendo disponível em toda a aplicação, pois está no root
})
export class PensamentoService {
  private readonly API = 'http://localhost:3000/pensamentos';

  // para o CRUD, precisamos do HttpClient
  constructor(private http: HttpClient) { }

  // O Observable atua como observador de um item e sempre que houver mudança ele emite uma notificação (que deve ser vista pelo componente que recebe a notificação através do método .subscribe), com isso executamos alguma ação. Assim, ele é capaz de lidar com transferências de dados assíncrona.
  listar(): Observable<IPensamento[]> {
    return this.http.get<IPensamento[]>(this.API);
  }

  criar(pensamento: IPensamento): Observable<IPensamento> {
    return this.http.post<IPensamento>(this.API, pensamento);
  }

  excluir(id: number): Observable<IPensamento> {
    const url = `${this.API}/${id}`;
    return this.http.delete<IPensamento>(url);
  }

  buscarPorId(id: number): Observable<IPensamento> {
    const url = `${this.API}/${id}`;
    return this.http.get<IPensamento>(url);
  }

  editar(pensamento: IPensamento): Observable<IPensamento> {
    const url = `${this.API}/${pensamento.id}`;
    return this.http.put<IPensamento>(url, pensamento);
  }
}

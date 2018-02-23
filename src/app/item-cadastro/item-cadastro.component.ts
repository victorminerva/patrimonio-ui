import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-item-cadastro',
  templateUrl: './item-cadastro.component.html',
  styleUrls: ['./item-cadastro.component.css']
})
export class ItemCadastroComponent implements OnInit {

  itens = [];

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.itemService.listar().subscribe(itens => {
      this.itens = itens;
    });
  }

  adicionar(frm: FormControl) {
    this.itemService.adicionar(frm.value)
      .subscribe(() => {
        frm.reset();
        this.listar();
      });
  }
}

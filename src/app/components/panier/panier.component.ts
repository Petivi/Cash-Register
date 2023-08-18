import { Component } from '@angular/core';
import { PaniersService } from 'src/app/services/paniers.service';


@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent {

  constructor(
    protected _paniersService: PaniersService
  ){}
}

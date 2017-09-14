import { Component } from '@angular/core';
import {ProductosService} from "../../services/productos.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',

})
export class IndexComponent  {
  constructor(public _ps:ProductosService){

  }
}

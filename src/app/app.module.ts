import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { FornecedoresComponent } from './fornecedores/fornecedores.component';
import { NgModule } from '@angular/core';
import { PrincipalComponent } from './principal/principal.component';
import { NavComponent } from './nav/nav.component';
import { TituloComponent } from './titulo/titulo.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { CnpjPipe } from './models/cnpj.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProdutosComponent,
    PedidosComponent,
    FornecedoresComponent,
    PrincipalComponent,
    NavComponent,
    TituloComponent,
    CnpjPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxMaskDirective
  ],
  providers: [provideNgxMask({ })],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RxjsCommunicationModule } from './rxjs-communication/rxjs-communication.module';

const routes: Routes = [
  {path: '', loadChildren:()=>import('./rxjs-communication/rxjs-communication.module').then(mod=>mod.RxjsCommunicationModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

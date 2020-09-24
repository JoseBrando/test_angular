import { Router } from "@angular/router";

import { RouterModule, Routes } from "@angular/router";

import { PersonasComponent } from "./pages/personas/personas.component";
import  { ConsumoAPIComponent } from "./pages/consumo-api/consumo-api.component";

const app_routes: Routes = [
    { path: "personas", component: PersonasComponent },
    { path: "api", component: ConsumoAPIComponent },
    { path:"", redirectTo: "personas", pathMatch: "full" }
];

export const APP_ROUTES = RouterModule.forRoot(app_routes, { useHash: true });
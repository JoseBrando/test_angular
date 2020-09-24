import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

// routes
import { APP_ROUTES } from './app.routes';

//service
import { UserService } from './service/user.service';

// components
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PersonasComponent } from './pages/personas/personas.component';
import { ConsumoAPIComponent } from './pages/consumo-api/consumo-api.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, PersonasComponent, ConsumoAPIComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, APP_ROUTES],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

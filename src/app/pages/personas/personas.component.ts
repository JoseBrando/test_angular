import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterModel } from '../../models/register.model'

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html'
})
export class PersonasComponent {

  public register_model = new RegisterModel();
  public arrRegister = [];
  private fileName: "";
  @ViewChild("smsRegister", { static: true }) smsRegister: ElementRef;

  constructor(private renderer: Renderer2) {
    if(localStorage.getItem('arrRegister')) this.arrRegister = JSON.parse(localStorage.getItem('arrRegister'));    
   }

  onRegister(form: NgForm) {
    if(form.invalid) {
      this.renderer.addClass(this.smsRegister.nativeElement, "d-block");
      setTimeout(() => {
        this.renderer.removeClass(this.smsRegister.nativeElement, "d-block");
      }, 5000);
    } else {
      let obj = {
        "name": this.register_model.name,
        "age": this.register_model.age,
        "sex": this.register_model.sex,
        "document": this.fileName
      };
  
      if(localStorage.getItem('arrRegister')) {
        this.arrRegister = JSON.parse(localStorage.getItem('arrRegister'));
        this.arrRegister.push(obj);
      } else {
        this.arrRegister.push(obj);
      }
      
      localStorage.setItem("arrRegister", JSON.stringify(this.arrRegister));
      form.reset();
    }
  }

  onFile(fileInput) {
    this.fileName = fileInput.target.files[0].name;
  }

}

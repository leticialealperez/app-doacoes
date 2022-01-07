import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      nome: ['', [Validators.required]],
      endereco: ['', [Validators.required]],
    });
  }

  enviar() {
    let nome = this.form.get('nome').value;
    let endereco = this.form.get('endereco').value;

    this.abrirURL(
      `https://api.whatsapp.com/send?phone=555194904309&text=Olá!%20Me%20chamo%20${nome}%20e%20moro%20em%20${endereco}.%20Vim%20através%20do%20seu%20App%20e%20gostaria%20de%20receber%20doações!`
    );
  }

  abrirURL(url: string) {
    window.open(url, '_blank').focus();
  }
}

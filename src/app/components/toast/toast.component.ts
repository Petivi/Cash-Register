import { Component, TemplateRef } from '@angular/core';
import { ToastsService } from 'src/app/services/toasts.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {

  constructor(
    protected _toastsService: ToastsService
  ){}

  isTemplate(toast: any) {
		return toast.textOrTpl instanceof TemplateRef;
	}
}

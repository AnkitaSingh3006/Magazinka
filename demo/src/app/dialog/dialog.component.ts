import { Component, EventEmitter, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../cart.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  productForm !: FormGroup
  text: string='';
  dialog:any;

  constructor(private _formBuilder: FormBuilder, private _api: CartService ,private dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) data:any ) {
      console.log(data)
      this.dialog=data
     }

  ngOnInit(): void {
    this.productForm = this._formBuilder.group({
      desc: [this.dialog?.desc, Validators.required],
      amount: [this.dialog?.amount, Validators.required],
      status: [this.dialog?.status, Validators.required]
    })

  }

  addProduct() {
    console.log(this.productForm.value)
    if (this.productForm.valid) {
      this.dialogRef.close(this.productForm.value);
    }
  }


}

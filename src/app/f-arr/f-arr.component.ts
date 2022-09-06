import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormArray,
  FormBuilder,
} from '@angular/forms';
@Component({
  selector: 'app-f-arr',
  templateUrl: './f-arr.component.html',
  styleUrls: ['./f-arr.component.css'],
})
export class FArrComponent implements OnInit {
  user = {
    name: 'Sample Name',
    userAddresses: [],
  };
  userForm!: FormGroup;
  get userAddresses(): FormArray {
    return this.userForm.get('userAddresses') as FormArray;
  }
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.userForm = this.fb.group<any>({
      name: ['', [Validators.required]],
      userAddresses: this.fb.array<any>([]),
    });
    this.userForm.patchValue({ ...this.user });
  }
  addNewAddressGroup() {
    const forms: FormArray = this.userForm.get('userAddresses') as FormArray;
    console.log(forms);
    forms.push(this.addressFields());
  }
  addressFields() {
    return this.fb.group<any>({
      street: ['', Validators.required],
      city: ['', Validators.required],
    });
  }
  deleteAddressGroup(index: number) {
    const forms = this.userForm.get('userAddresses') as FormArray;
    forms.removeAt(index);
  }

  skillf(index: number) {
    const forms = this.userForm.get('userAddresses') as FormArray;
    const form = forms.at(index);
    return form.get('skill');
  }
}

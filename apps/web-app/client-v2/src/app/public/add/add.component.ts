import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/api.service';

import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

      tiles: any[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

    private data: any = {};

    constructor(
        private api: ApiService,
        private snackbar: MatSnackBar
    ) { }

    ngOnInit() {
    }

    add(form: any){
        this.api.AddBat(form.root, form.replacement)
        .subscribe((data: any) => {
            this.snackbar.open("boneappletea added!", null, {duration: 1000});
        });
    }

}

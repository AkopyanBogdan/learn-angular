import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-shop-item',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent {
    @Input() item;
}
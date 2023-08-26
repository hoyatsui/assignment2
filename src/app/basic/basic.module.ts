import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../navigation/navigation.component';
import { HomeComponent } from '../home/home.component';



@NgModule({
    declarations: [HomeComponent, NavigationComponent],
    imports: [
        CommonModule
    ],
    exports: [
        HomeComponent, NavigationComponent
    ]
})
export class BasicModule { }

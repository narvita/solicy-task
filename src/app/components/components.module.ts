import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './shared/card/card.component';
import { InstructionComponent } from './shared/instruction/instruction.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';



@NgModule({
    declarations: [
        CardComponent,
        InstructionComponent,
        HeaderComponent,
        FooterComponent
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        InstructionComponent,
        CardComponent
    ],
    imports: [
        CommonModule,
        FontAwesomeModule
    ]
})
export class ComponentsModule { }

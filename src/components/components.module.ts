import { NgModule } from '@angular/core';
import { AboutComponent } from './about/about';
import { ContactComponent } from './contact/contact';


@NgModule({
	declarations: [AboutComponent,
    ContactComponent],
	imports: [],
	exports: [AboutComponent,
    ContactComponent]
})
export class ComponentsModule {}

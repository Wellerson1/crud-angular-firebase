import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule, CalendarModule, CheckboxModule,
   ConfirmDialogModule, DialogModule, DropdownModule, FieldsetModule, 
   InputMaskModule, InputTextareaModule, InputTextModule, MessagesModule, TableModule, 
   TabViewModule, ToggleButtonModule } from 'primeng';
//	Alguns	imports
	
@NgModule({
		imports:	[
        CommonModule, 
        ButtonModule, 
        FieldsetModule,	
        InputMaskModule, 
        MessagesModule,	
        CheckboxModule,	
        DialogModule,
        TableModule,
        InputTextModule,
    
        DropdownModule,
        ConfirmDialogModule, 
        CalendarModule, 
        TabViewModule,	
      
		],
		exports:[
        ButtonModule,
        FieldsetModule,	
        InputMaskModule,
        MessagesModule,	
        CheckboxModule,
        TableModule,
        DialogModule,
        InputTextModule,
        InputTextareaModule,
        DropdownModule,
        ConfirmDialogModule,
        CalendarModule,
        TabViewModule,	
        ToggleButtonModule
		],
		declarations:	[]
})
export	class	PrimeNGModule	{	}

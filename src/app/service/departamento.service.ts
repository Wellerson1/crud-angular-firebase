import { Injectable } from '@angular/core';
import { Departamento } from '../models/departamento.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { ServiceFirebase } from '../core/iservicefirebase.service';

@Injectable({
  providedIn: 'root'
})
export	class	DepartamentoService	extends	ServiceFirebase<Departamento>	{
    
  constructor(firestore:	AngularFirestore)	{
				super(Departamento,	firestore,	'departamentos');
		}
}
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/Usuario';
import{Subject}from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const API_URL = 'http://localhost:8090/api/test/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class UserService {
  formData:Usuario;

  constructor(private http: HttpClient) { }
  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }

  getUserProfile(username:String){
    return this.http.get<Usuario>(API_URL + 'getprofile/'+username);
  }
  getAllusers(){
    return this.http.get<Usuario[]>(API_URL + 'getallusers/');
    //return this.http.get<Tema[]>(this.Url);
  }
  editProfile(user:Usuario): Observable<any>{
  // return this.http.put<historiaVidaTexto>(this.Url+"/"+historiaVidaTexto.id_HVT, historiaVidaTexto);

    return this.http.put(API_URL + 'updateprofile',{
      id:user.id,
      username: user.username,
      email: user.email,
      password: user.password,
      nombre:user.nombre,
      apellido:user.apellido,
      fecha_nacimiento:user.fecha_nacimiento,
      lugar_acogida:user.lugar_acogida,

    }, httpOptions);
  }


  private _listeners = new Subject<any>();
  listen(): Observable<any>{
    return this._listeners.asObservable();
  }
  filter(filterBy:string){
    this._listeners.next(filterBy);
  }
}

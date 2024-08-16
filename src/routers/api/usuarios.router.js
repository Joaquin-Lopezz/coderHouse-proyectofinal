import { Router } from 'express';
import { soloLogueadosApi } from '../../middlewares/autorizaciones.js';
import {newDatos,documentacion, premium, newPassword, crearUsuario, editUser, getUserLogeado } from '../../controllers/usuarios.controllers.js';

export const usuariosRouter = Router();

usuariosRouter.post('/', crearUsuario);

usuariosRouter.put('/',newDatos)

usuariosRouter.post('/premium',premium)


usuariosRouter.get('/current', soloLogueadosApi, getUserLogeado)

usuariosRouter.post('/recuperarPassword', editUser);

usuariosRouter.post('/newPassword',newPassword)


/*Crear un endpoint en el router de usuarios api/users/:uid/documents 
con el método POST que permita subir uno o múltiples archivos. Utilizar 
el middleware de Multer para poder recibir los documentos que se carguen y 
actualizar en el usuario su status para hacer saber que ya subió algún documento 
en particular.
*/ 
usuariosRouter.post('/:email/documents', documentacion)

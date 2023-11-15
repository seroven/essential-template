import { SeverityMessage } from './severity-message';
import { TypeMessage } from './type-message';

export const ToastsMessages = [
  {
    title: TypeMessage.LOGIN_SUCCESS,
    severity: SeverityMessage.SUCCESS,
    summary: 'Sesión Iniciada',
    detail: 'Credenciales correctas'
  },
  {
    title: TypeMessage.LOGIN_ERROR,
    severity: SeverityMessage.ERROR,
    summary: 'Error',
    detail: 'Usuario y/o contraseña incorrectos'
  },
  {
    title: TypeMessage.RUT_FOUNDED,
    severity: SeverityMessage.SUCCESS,
    summary: 'RUT encontrado',
    detail: 'Ingresa la fecha de la factura'
  },
  {
    title: TypeMessage.RUT_ERROR,
    severity: SeverityMessage.ERROR,
    summary: 'Error',
    detail: 'Rut de empresa no encontrado'
  },
  {
    title: TypeMessage.FACTURA_DATE_FOUNDED,
    severity: SeverityMessage.SUCCESS,
    summary: 'Fecha Correcta',
    detail: 'Registra tus datos de usuario'
  },
  {
    title: TypeMessage.FACTURA_DATE_ERROR,
    severity: SeverityMessage.ERROR,
    summary: 'Error',
    detail: 'Fecha ingresada no coincide'
  },
  {
    title: TypeMessage.REGISTER_SUCCESS,
    severity: SeverityMessage.SUCCESS,
    summary: 'Operación Exitosa',
    detail: 'Usuario creado'
  },
  {
    title: TypeMessage.REGISTER_ERROR,
    severity: SeverityMessage.ERROR,
    summary: 'Error',
    detail: 'Hubo un error desconocido'
  },
  {
    title: TypeMessage.USER_ALREADY_EXISTS,
    severity: SeverityMessage.ERROR,
    summary: 'Error',
    detail: 'Usuario ya existente'
  },
  {
    title: TypeMessage.USER_DOESNT_EXISTS,
    severity: SeverityMessage.ERROR,
    summary: 'Error',
    detail: 'Usuario no existe'
  },
  {
    title: TypeMessage.GMAIL_DOESNT_EXISTS,
    severity: SeverityMessage.ERROR,
    summary: 'Error',
    detail: 'El correo ingresado no existe'
  },
  {
    title: TypeMessage.USER_GMAIL_ERROR,
    severity: SeverityMessage.ERROR,
    summary: 'Error',
    detail: 'Este correo no pertenece a ningún usuario'
  },
  {
    title: TypeMessage.USER_GMAIL_ERROR,
    severity: SeverityMessage.ERROR,
    summary: 'Error',
    detail: 'El código ha expirado'
  },
  {
    title: TypeMessage.USER_GMAIL_SUCCESS,
    severity: SeverityMessage.SUCCESS,
    summary: 'Correo Correcto',
    detail: 'Escribe el código de verificación'
  },
  {
    title: TypeMessage.USER_CODE_ERROR,
    severity: SeverityMessage.ERROR,
    summary: 'Error',
    detail: 'El código ingresado es incorrecto'
  },
  {
    title: TypeMessage.USER_CODE_SUCCESS,
    severity: SeverityMessage.SUCCESS,
    summary: 'Código Correcto',
    detail: 'Escribe tu nueva contraseña'
  },
  {
    title: TypeMessage.USER_UPDATE_PASSWORD_SUCCESS,
    severity: SeverityMessage.SUCCESS,
    summary: 'Operación Exitosa',
    detail: 'Su contraseña se ha actualizado'
  },
  {
    title: TypeMessage.PASSWORDS_NOT_EQUALS,
    severity: SeverityMessage.WARN,
    summary: 'Advertencia',
    detail: 'Las contraseñas no son iguales'
  },

]


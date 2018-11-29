using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Usuarios.Datos;

public partial class Datos : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        Respuesta resp = new Respuesta();
        string accion = "";

        try
        {
            accion = Request["accion"].ToString();
            var usr = "";
            var db = new PortalAppsEntities();
            switch (accion)
            {
                case "llenarTabla":
                    resp.codigo = 0;
                    var lista = new List<Data>();
                    foreach (var data in db.UsuariosExternos.ToList())
                    {
                        var obj = new Data();
                        obj.usr_nombre = data.usr_nombre;
                        obj.usr_apellido = data.usr_apellido;
                        obj.usr_cuenta = data.usr_cuenta;
                        obj.usr_email = data.usr_email;
                        obj.btnEdit = "<button class='btn btn-warning' onClick=openModal('" + data.usr_cuenta + "');>Editar</button>";
                        obj.btnDel = "<button class='btn btn-danger' onClick=deleteUser('" + data.usr_cuenta + "');>Eliminar</button>";
                        lista.Add(obj);
                    }
                    resp.datos = Newtonsoft.Json.JsonConvert.SerializeObject(lista);
                    resp.codigo = 1;
                    break;
                case "guardar":
                    var enc = new Funciones.Encriptar();
                    var util = new Funciones.Utilidades();
                    usr = Request["usr_cuenta"].ToString();
                    var user = db.UsuariosExternos.FirstOrDefault(x => x.usr_cuenta == usr);
                    var usuariosExternos = new UsuariosExternos()
                    {
                        usr_cuenta = Request["usr_cuenta"].ToString(),
                        usr_password = enc.CalculateMD5Hash(Request["usr_password"].ToString()),
                        usr_nombre = Request["usr_nombre"].ToString(),
                        usr_apellido = Request["usr_apellido"].ToString(),
                        usr_email = Request["usr_email"].ToString(),
                        usr_activo = true,
                        usr_telefono = Request["usr_telefono"].ToString(),
                        usr_direccion = Request["usr_direccion"].ToString(),
                        usr_rut = util.separaRut(Request["usr_rut"].ToString()),
                        usr_dv = util.separaDv(Request["usr_rut"].ToString()),
                        usr_fecha_act = DateTime.Now,
                        usr_empresa = Request["usr_empresa"].ToString(),
                        emp_ciudad = Request["emp_ciudad"].ToString(),
                        emp_telefono = Request["emp_telefono"].ToString(),
                        emp_region = Request["emp_region"].ToString(),
                        emp_roluni = util.separaRut(Request["emp_rut"].ToString()),
                        emp_dv = util.separaDv(Request["emp_rut"].ToString())
                    };
                    if (user != null)
                    {
                        user.usr_password = usuariosExternos.usr_password;
                        user.usr_nombre = usuariosExternos.usr_nombre;
                        user.usr_apellido = usuariosExternos.usr_apellido;
                        user.usr_email = usuariosExternos.usr_email;
                        user.usr_activo = usuariosExternos.usr_activo;
                        user.usr_telefono = usuariosExternos.usr_telefono;
                        user.usr_direccion = usuariosExternos.usr_direccion;
                        user.usr_empresa = usuariosExternos.usr_empresa;
                        user.emp_ciudad = usuariosExternos.emp_ciudad;
                        user.emp_telefono = usuariosExternos.emp_telefono;
                        user.emp_region = usuariosExternos.emp_region;
                        user.emp_roluni = usuariosExternos.emp_roluni;
                        user.emp_dv = usuariosExternos.emp_dv;
                        resp.codigo = 2;
                    }
                    else
                    {
                        resp.codigo = 1;
                        db.UsuariosExternos.Add(usuariosExternos);
                    }
                    if (db.SaveChanges() > 0)
                    {

                        resp.mensaje = "Usuario actualizado con éxito";
                    }
                    else
                    {
                        resp.codigo = 0;
                    }
                    break;
                case "buscarUsuario":
                    usr = Request["usr_cuenta"].ToString();
                    var usuario = db.UsuariosExternos.FirstOrDefault(x => x.usr_cuenta == usr);
                    resp.datos = Newtonsoft.Json.JsonConvert.SerializeObject(usuario);
                    break;
                case "eliminar":
                    usr = Request["usr_cuenta"].ToString();
                    var us = db.UsuariosExternos.FirstOrDefault(x => x.usr_cuenta == usr);
                    db.UsuariosExternos.Remove(us);
                    if (db.SaveChanges()>0)
                    {
                        resp.codigo = 1;
                    }
                    else
                    {
                        resp.codigo = 0;
                    }
                    break;
                default:
                    resp.codigo = 0;    
                    break;
            }
            var dat = Newtonsoft.Json.JsonConvert.SerializeObject(resp);
            Response.Write(dat);
        }
        catch (Exception ex)
        {
            resp.codigo = 0;
            resp.mensaje = ex.Message;
        }
    }
}
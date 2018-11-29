using System;
using System.Collections.Generic;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Index : System.Web.UI.Page
{
    string CodigoApp = "SER003";
    string VersionApp = "1.0.0";
    string NombreApp = "SER003";
    protected void Page_Load(object sender, EventArgs e)
    {
        Session.Clear();
        //Session["usuario"] = "schavez";
        //Session["usuario_nombre"] = "schavez";
        //Session["agencia"] = 1310;
        //Session["usr_correo"] = "schavez@caja18.cl";


        try
        {
            if (!Page.IsPostBack)
            {
                if ((Session["usuario"] == null) || (Session["usuario"].ToString() == ""))
                {
                    vpAppsNET.vpAppsUsr login = new vpAppsNET.vpAppsUsr();
                    if (login.ValidarUsuarioWeb(Request, CodigoApp))
                    {
                        Session["usuario"] = login.UsuarioInfo.usr_cuenta;
                        Session["usuario_nombre"] = login.UsuarioInfo.usr_nombre_completo;
                        Session["rut"] = login.UsuarioInfo.usr_rut;
                        //Session["aplicacion"] = login.AppInfo.app_nombre;
                        Session["agencia_codigo"] = login.UsuarioInfo.usr_agencia_codigo;
                        Session["codres"] = login.UsuarioInfo.usr_codigo_responsable;
                        Session["rut"] = login.UsuarioInfo.usr_rut.ToString().Trim().Replace(".", "").Replace(" ", "");
                        Session["ip"] = login.IP_Usuario;
                        Session["agencia"] = login.UsuarioInfo.usr_agencia;
                        Session["departamento"] = login.UsuarioInfo.usr_departamento;

                        Response.Redirect("Users.aspx", false);
                    }
                    else
                    {
                        Session["error"] = login.MensajeError;
                        Response.Redirect("finsession.aspx", false);
                    }

                }
                else
                {
                    Response.Redirect("Default.aspx", false);
                }

            }

        }
        catch (Exception ex)
        {
            Session["error"] = ex.Message;
            Response.Redirect("finsession.aspx", false);
        }
    }
}
